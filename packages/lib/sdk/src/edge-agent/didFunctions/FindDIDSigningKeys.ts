import { base58btc } from "multiformats/bases/base58";
import { Task } from "../../utils/tasks";
import { type AgentContext } from "../Context";
import { isNil, notNil } from "../../utils";
import type * as Domain from "@hyperledger/identus-domain";
import { base64url } from "multiformats/bases/base64";

/**
 * DID Verification Relationships - Core Concepts for Self-Sovereign Identity (SSI)
 *
 * A Decentralized Identifier (DID) is a cryptographic identity that can prove ownership
 * and control through cryptographic keys. Different operations require different keys
 * for different purposes - this is the concept of "verification relationships".
 *
 * See: https://www.w3.org/TR/did-core/#verification-relationships
 *
 * Key Purpose Overview (Currently Implemented):
 *
 * 1. ISSUING_KEY → "assertionMethod" verification relationship
 *    - Used for signing verifiable credentials (VCs)
 *    - Used for creating JWT and SD-JWT claims that assert facts about subjects
 *    - Used in Web3/SSI flows where an issuer creates credentials
 *    - Example: A university signs a degree credential with this key
 *
 * 2. AUTHENTICATION_KEY → "authentication" verification relationship
 *    - Used for proving ownership/control of the DID during authentication flows
 *    - Used for challenge-response protocols
 *    - Used when a DID holder needs to prove "I control this DID"
 *    - Example: Logging in to a service by proving DID ownership
 *
 * Other Verification Relationships (W3C DID Standard):
 * These may be added in future versions of the SDK:
 *
 * - "keyAgreement" → Used for encryption/decryption operations
 *   Example: Encrypting messages to be sent to the DID subject
 *
 * - "capabilityInvocation" → Used for invoking delegated capabilities
 *   Example: Exercising rights granted by another party
 *
 * - "capabilityDelegation" → Used for delegating capabilities to other parties
 *   Example: Granting permissions to act on your behalf
 *
 * Why Multiple Keys?
 * - Key rotation: If an issuing key is compromised, you can rotate it without affecting authentication
 * - Security principle: Each key should only be used for its intended purpose
 * - Separation of concerns: Different key types for different operations
 * - Scalability: The SDK can support additional key purposes as SSI evolves
 *
 * DID Document Structure (simplified example):
 * {
 *   "id": "did:prism:abc123...",
 *   "verificationMethod": [
 *     { "id": "#key-1", "type": "JsonWebKey2020", "publicKeyJwk": {...} },
 *     { "id": "#key-2", "type": "JsonWebKey2020", "publicKeyJwk": {...} }
 *   ],
 *   "assertionMethod": ["#key-1"],        // For credential issuance (ISSUING_KEY)
 *   "authentication": ["#key-2"],         // For proving DID ownership (AUTHENTICATION_KEY)
 *   "keyAgreement": [],                   // For encryption (future)
 *   "capabilityInvocation": [],          // For delegated capabilities (future)
 *   "capabilityDelegation": []           // For delegating capabilities (future)
 * }
 */

interface Args {
  did: Domain.DID;
  privateKey?: Domain.PrivateKey;
  purpose: keyof Pick<Domain.PrismDIDKeys, "AUTHENTICATION_KEY" | "ISSUING_KEY">;
}

export interface SigningKeyData {
  kid: string;
  publicKey: Domain.PublicKey;
  privateKey: Domain.PrivateKey;
}

/**
 * Finds the private signing keys for a DID that match a specific verification relationship purpose.
 *
 * This task:
 * 1. Resolves the DID document to get verification methods
 * 2. Matches those verification methods against available private keys
 * 3. Returns the keys that can be used for the specified purpose
 *
 * Workflow:
 * - If purpose is "ISSUING_KEY": looks for keys listed in the DID's "assertionMethod"
 * - If purpose is "AUTHENTICATION_KEY": looks for keys listed in the DID's "authentication"
 * - Matches keys by their cryptographic material (multibase encoding or JWK representation)
 *
 * @param {Domain.DID} did The DID subject - we'll resolve its DID document
 * @param {Domain.PrivateKey} [privateKey] Optional: filter to only check this specific private key
 * @param {"AUTHENTICATION_KEY" | "ISSUING_KEY"} purpose Which verification relationship to search for
 * @returns {SigningKeyData[]} Array of matched signing keys with their public key info and key IDs
 *
 * Example usage:
 * - CreateJWT defaults to ISSUING_KEY for credential issuance
 * - Authentication flows would use AUTHENTICATION_KEY for DID ownership proofs
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

    // Map the purpose to the DID document's verification relationship field.
    // This determines which keys in the DID document are valid for this purpose:
    // - AUTHENTICATION_KEY → look in didDoc.authentication (for DID ownership proofs)
    // - ISSUING_KEY → look in didDoc.assertionMethod (for credential issuance)
    // See: https://www.w3.org/TR/did-core/#verification-relationships
    const verificationMethod =
      this.args.purpose === 'AUTHENTICATION_KEY' ? 'authentication'
        : this.args.purpose === 'ISSUING_KEY' ? 'assertionMethod'
          : null;
    const primaryMethods = verificationMethod ? didDoc[verificationMethod] : []
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
