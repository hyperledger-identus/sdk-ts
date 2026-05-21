import { base58btc } from "multiformats/bases/base58";
import { Task } from "../../utils/tasks";
import { type AgentContext } from "../Context";
import { isNil, notNil } from "../../utils";
import type * as Domain from "@hyperledger/identus-domain";
import { base64url } from "multiformats/bases/base64";

/**
 * DID Verification Relationships — Core Concepts for Self-Sovereign Identity (SSI)
 *
 * A Decentralized Identifier (DID) can prove ownership through cryptographic keys.
 * Different operations require different keys — this is the concept of "verification relationships".
 *
 * See: https://www.w3.org/TR/did-core/#verification-relationships
 *
 * Mapping of SDK key purposes to DID Document verification relationships:
 *
 * | SDK Purpose               | DID Verification Relationship | Use Case                          |
 * |---------------------------|-------------------------------|-----------------------------------|
 * | ISSUING_KEY               | assertionMethod               | Credential issuance (JWT/SD-JWT)  |
 * | AUTHENTICATION_KEY        | authentication                | Proving DID ownership             |
 * | KEY_AGREEMENT_KEY         | keyAgreement                  | Encryption / key exchange         |
 * | CAPABILITY_INVOCATION_KEY | capabilityInvocation          | Invoking delegated capabilities   |
 * | CAPABILITY_DELEGATION_KEY | capabilityDelegation          | Delegating capabilities to others |
 * | REVOCATION_KEY            | revocation                    | Revoking credentials/keys         |
 *
 * Why Multiple Keys?
 * - Key rotation: If an issuing key is compromised, you can rotate it without affecting authentication
 * - Security: Each key should only be used for its intended purpose
 * - Scalability: The SDK can support additional key purposes as SSI evolves
 *
 * DID Document Structure (simplified):
 * {
 *   "id": "did:prism:abc123...",
 *   "assertionMethod": ["#key-1"],      // ISSUING_KEY
 *   "authentication": ["#key-2"],       // AUTHENTICATION_KEY
 *   "keyAgreement": ["#key-3"],         // KEY_AGREEMENT_KEY (future)
 *   "capabilityInvocation": ["#key-4"], // CAPABILITY_INVOCATION_KEY (future)
 *   "capabilityDelegation": ["#key-5"]  // CAPABILITY_DELEGATION_KEY (future)
 * }
 */
const PURPOSE_TO_VERIFICATION_RELATIONSHIP: Record<string, string> = {
  AUTHENTICATION_KEY: "authentication",
  ISSUING_KEY: "assertionMethod",
  KEY_AGREEMENT_KEY: "keyAgreement",
  CAPABILITY_INVOCATION_KEY: "capabilityInvocation",
  CAPABILITY_DELEGATION_KEY: "capabilityDelegation",
  REVOCATION_KEY: "revocation",
};

interface Args {
  did: Domain.DID;
  privateKey?: Domain.PrivateKey;
  purpose: keyof typeof PURPOSE_TO_VERIFICATION_RELATIONSHIP;
}

export interface SigningKeyData {
  kid: string;
  publicKey: Domain.PublicKey;
  privateKey: Domain.PrivateKey;
}

interface FindSigningKeysArgs {
  did: Domain.DID;
  privateKey?: Domain.PrivateKey;
}

/**
 * Finds the private signing keys for a DID that match a specific verification relationship purpose.
 *
 * This task:
 * 1. Resolves the DID document to get verification methods
 * 2. Maps the given purpose to a W3C DID verification relationship
 * 3. Matches those verification methods against available private keys
 * 4. Returns the keys that can be used for the specified purpose
 *
 * Workflow:
 * - ISSUING_KEY → looks in the DID's "assertionMethod" (for credential issuance)
 * - AUTHENTICATION_KEY → looks in the DID's "authentication" (for DID ownership proofs)
 * - Matches keys by multibase encoding or JWK representation
 *
 * @see https://www.w3.org/TR/did-core/#verification-relationships
 *
 * @param {Domain.DID} did The DID subject — resolves its DID document
 * @param {Domain.PrivateKey} [privateKey] Optional: filter to only check this specific key
 * @param {string} purpose Key purpose to search for:
 *   - AUTHENTICATION_KEY → "authentication" (proving ownership/control)
 *   - ISSUING_KEY → "assertionMethod" (issuing credentials)
 *   - KEY_AGREEMENT_KEY → "keyAgreement" (key agreement for encryption)
 *   - CAPABILITY_INVOCATION_KEY → "capabilityInvocation" (invoking capabilities)
 *   - CAPABILITY_DELEGATION_KEY → "capabilityDelegation" (delegating capabilities)
 *   - REVOCATION_KEY → "revocation" (revoking credentials/keys)
 * @returns {SigningKeyData[]} Array of matched signing keys with public key info and key IDs
 *
 * Example usage:
 * - CreateJWT defaults to ISSUING_KEY for credential issuance
 * - Authentication flows use AUTHENTICATION_KEY for DID ownership proofs
 */
export class FindSigningKeys extends Task<SigningKeyData[], Args> {
  async run(ctx: AgentContext) {
    const didDoc = await ctx.Castor.resolveDID(this.args.did);
    const keys = await this.getKeys(ctx);

    const keyData = keys.map(privateKey => {
      const publicKey = privateKey.publicKey();
      const decoded = Uint8Array.from(publicKey.to.Buffer())
      const encoded = base58btc.encode(decoded);
      const encodedBase64Url = base64url.baseEncode(decoded);
      return { privateKey, publicKey, encoded, encodedBase64Url };
    });

    const verificationRelationship = PURPOSE_TO_VERIFICATION_RELATIONSHIP[this.args.purpose];
    const primaryMethods = verificationRelationship && verificationRelationship in didDoc
      ? (didDoc[verificationRelationship as keyof typeof didDoc] as Domain.DIDDocument.VerificationMethod[])
      : []
    const signingKeyData = this.matchKeys(primaryMethods, keyData);

    return signingKeyData;
  }

  /**
   * Matches verification methods from the DID document with available private keys.
   *
   * For each verification method in the DID document:
   * 1. Encode the private key's public key in the same format (multibase or JWK)
   * 2. Compare against the verification method's public key representation
   * 3. If they match, include this key-pair in the results
   *
   * This ensures we only return keys that are:
   * - Actually present in the DID document
   * - Listed for the requested verification relationship
   * - Have corresponding private keys available locally
   *
   * Why two encoding formats? DIDs can represent keys as either:
   * - "publicKeyMultibase": compact encoding (base58, etc)
   * - "publicKeyJwk": JSON Web Key format (for JWK-based cryptography)
   */
  private matchKeys(
    methods: Domain.DIDDocument.VerificationMethod[],
    keyData: { privateKey: any; publicKey: any; encoded: string; encodedBase64Url: string }[]
  ): SigningKeyData[] {
    return methods.reduce<SigningKeyData[]>((acc, method) => {
      const data = keyData.find(x => {
        if (method.publicKeyMultibase) {
          return x.encoded === method.publicKeyMultibase
        }
        if (method.publicKeyJwk) {
          if (x.publicKey.isExportable()) {
            const resolvedJWK = x.publicKey.to.JWK()
            if (method.publicKeyJwk.y) {
              return resolvedJWK.kty === method.publicKeyJwk.kty &&
                resolvedJWK.crv === method.publicKeyJwk.crv &&
                resolvedJWK.x === method.publicKeyJwk.x &&
                resolvedJWK.y === method.publicKeyJwk.y
            }
            return resolvedJWK.kty === method.publicKeyJwk.kty &&
              resolvedJWK.crv === method.publicKeyJwk.crv &&
              resolvedJWK.x === method.publicKeyJwk.x
          }
          return x.publicKey.curve === method.publicKeyJwk.crv &&
            x.encodedBase64Url === method.publicKeyJwk.x
        }
        return false;
      });

      return isNil(data) ? acc : acc.concat({
        kid: method.id,
        publicKey: data.publicKey,
        privateKey: data.privateKey
      });
    }, []);
  }


  private async getKeysFromPrismDIDs(ctx: AgentContext): Promise<Domain.PrivateKey[]> {
    const prismDIDs = await ctx.Pluto.getAllPrismDIDs();
    return prismDIDs.filter((did) => {
      return did.did.toString().includes(this.args.did.toString())
    }).map(({ privateKey }) => privateKey)
  }

  private async getKeys(ctx: AgentContext): Promise<Domain.PrivateKey[]> {
    if (notNil(this.args.privateKey)) return [this.args.privateKey];

    const privateKeys = await ctx.Pluto.getDIDPrivateKeysByDID(this.args.did);
    if (privateKeys?.length) {
      return privateKeys;
    }

    const prismDIDs = await this.getKeysFromPrismDIDs(ctx);
    if (prismDIDs?.length) {
      return prismDIDs;
    }

    return []
  }
}

/**
 * Search for the issuer's signing keys used for credential issuance.
 *
 * Uses the "assertionMethod" verification relationship per W3C DID Core Specification.
 * This key is used for signing verifiable credentials in JWT and SD-JWT formats.
 * Credentials issued by this key can be verified by recipients using the issuer's DID document.
 *
 * @see https://www.w3.org/TR/did-core/#verification-relationships
 * @see https://www.w3.org/TR/vc-data-model/#assertion
 *
 * @example
 * const signingKeys = await ctx.run(new FindIssuerSigningKeys({ did }));
 * const credential = await ctx.run(new CreateJWT({ did, signingKeys, payload }));
 */
export class FindIssuerSigningKeys extends Task<SigningKeyData[], FindSigningKeysArgs> {
  async run(ctx: AgentContext) {
    return ctx.run(new FindSigningKeys({
      did: this.args.did,
      privateKey: this.args.privateKey,
      purpose: "ISSUING_KEY"
    }));
  }
}

/**
 * Search for authentication signing keys used for proving DID ownership.
 *
 * Uses the "authentication" verification relationship per W3C DID Core Specification.
 * This key is used to prove control/ownership of a DID in challenge-response protocols,
 * DID ownership proofs, and other authentication scenarios where the key holder must
 * demonstrate they control the DID.
 *
 * @see https://www.w3.org/TR/did-core/#verification-relationships
 * @see https://www.w3.org/TR/did-core/#authentication
 *
 * @example
 * const signingKeys = await ctx.run(new FindAuthenticationSigningKeys({ did }));
 * const proof = await ctx.run(new CreateJWT({ did, signingKeys, payload }));
 */
export class FindAuthenticationSigningKeys extends Task<SigningKeyData[], FindSigningKeysArgs> {
  async run(ctx: AgentContext) {
    return ctx.run(new FindSigningKeys({
      did: this.args.did,
      privateKey: this.args.privateKey,
      purpose: "AUTHENTICATION_KEY"
    }));
  }
}

/**
 * Search for key agreement signing keys used for encryption and key exchange.
 *
 * Uses the "keyAgreement" verification relationship per W3C DID Core Specification.
 * This key is used for key agreement protocols (e.g., ECDH) to establish shared secrets
 * for encryption/decryption of sensitive data and secure communication channels.
 *
 * @see https://www.w3.org/TR/did-core/#verification-relationships
 * @see https://www.w3.org/TR/did-core/#key-agreement
 *
 * @example
 * const signingKeys = await ctx.run(new FindKeyAgreementSigningKeys({ did }));
 * const sharedSecret = await performKeyAgreement(signingKeys[0].privateKey, recipientPublicKey);
 */
export class FindKeyAgreementSigningKeys extends Task<SigningKeyData[], FindSigningKeysArgs> {
  async run(ctx: AgentContext) {
    return ctx.run(new FindSigningKeys({
      did: this.args.did,
      privateKey: this.args.privateKey,
      purpose: "KEY_AGREEMENT_KEY"
    }));
  }
}

/**
 * Search for capability invocation signing keys used for delegated operations.
 *
 * Uses the "capabilityInvocation" verification relationship per W3C DID Core Specification.
 * This key is used to invoke capabilities that have been delegated to the DID holder,
 * allowing them to perform specific actions authorized by a capability grant.
 *
 * @see https://www.w3.org/TR/did-core/#verification-relationships
 * @see https://www.w3.org/TR/did-core/#capability-invocation
 *
 * @example
 * const signingKeys = await ctx.run(new FindCapabilityInvocationSigningKeys({ did }));
 * const invocation = await ctx.run(new CreateJWT({ did, signingKeys, payload }));
 */
export class FindCapabilityInvocationSigningKeys extends Task<SigningKeyData[], FindSigningKeysArgs> {
  async run(ctx: AgentContext) {
    return ctx.run(new FindSigningKeys({
      did: this.args.did,
      privateKey: this.args.privateKey,
      purpose: "CAPABILITY_INVOCATION_KEY"
    }));
  }
}

/**
 * Search for capability delegation signing keys used for delegating capabilities to others.
 *
 * Uses the "capabilityDelegation" verification relationship per W3C DID Core Specification.
 * This key is used to issue capability grants to other DIDs, allowing them to perform
 * specific actions on behalf of the delegating entity.
 *
 * @see https://www.w3.org/TR/did-core/#verification-relationships
 * @see https://www.w3.org/TR/did-core/#capability-delegation
 *
 * @example
 * const signingKeys = await ctx.run(new FindCapabilityDelegationSigningKeys({ did }));
 * const capabilityGrant = await createCapabilityGrant(signingKeys[0], recipientDID);
 */
export class FindCapabilityDelegationSigningKeys extends Task<SigningKeyData[], FindSigningKeysArgs> {
  async run(ctx: AgentContext) {
    return ctx.run(new FindSigningKeys({
      did: this.args.did,
      privateKey: this.args.privateKey,
      purpose: "CAPABILITY_DELEGATION_KEY"
    }));
  }
}

/**
 * Search for revocation signing keys used for credential and key revocation.
 *
 * Uses the "revocation" verification relationship per W3C DID Core Specification.
 * This key is used to sign revocation statements that invalidate previously issued
 * credentials or other DID-related assertions.
 *
 * @see https://www.w3.org/TR/did-core/#verification-relationships
 *
 * @example
 * const signingKeys = await ctx.run(new FindRevocationSigningKeys({ did }));
 * const revocation = await ctx.run(new CreateJWT({ did, signingKeys, payload }));
 */
export class FindRevocationSigningKeys extends Task<SigningKeyData[], FindSigningKeysArgs> {
  async run(ctx: AgentContext) {
    return ctx.run(new FindSigningKeys({
      did: this.args.did,
      privateKey: this.args.privateKey,
      purpose: "REVOCATION_KEY"
    }));
  }
}
