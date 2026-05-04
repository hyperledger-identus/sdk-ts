import { base58btc } from "multiformats/bases/base58";
import { Task } from "../../utils/tasks";
import { type AgentContext } from "../Context";
import { isNil, notNil } from "../../utils";
import type * as Domain from "@hyperledger/identus-domain";
import { base64url } from "multiformats/bases/base64";

type SupportedPurpose = keyof Pick
  Domain.PrismDIDKeys,
  | "AUTHENTICATION_KEY"
  | "ISSUING_KEY"
  | "KEY_AGREEMENT_KEY"
  | "CAPABILITY_INVOCATION_KEY"
  | "CAPABILITY_DELEGATION_KEY"
>;

const PURPOSE_TO_VERIFICATION_RELATIONSHIP: Record<SupportedPurpose, keyof Domain.DIDDocument> = {
  AUTHENTICATION_KEY: "authentication",
  ISSUING_KEY: "assertionMethod",
  KEY_AGREEMENT_KEY: "keyAgreement",
  CAPABILITY_INVOCATION_KEY: "capabilityInvocation",
  CAPABILITY_DELEGATION_KEY: "capabilityDelegation",
};

interface Args {
  did: Domain.DID;
  privateKey?: Domain.PrivateKey;
  purpose?: SupportedPurpose | SupportedPurpose[];
}

export interface SigningKeyData {
  kid: string;
  publicKey: Domain.PublicKey;
  privateKey: Domain.PrivateKey;
}

/**
 * Search for the PrivateKeys that should be used for signing
 * return PrivateKey and information useful to signing operations
 * 
 * @param {Domain.DID} did subject of the search
 * @param {Domain.PrivateKey} [privateKey] optional filter search to only this PrivateKey
 * @param {"AUTHENTICATION_KEY" | "ISSUING_KEY"} [purpose] which verification relationship to search (default: "assertionMethod")
 * 
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

   const purposes: SupportedPurpose[] = this.args.purpose
  ? Array.isArray(this.args.purpose) ? this.args.purpose : [this.args.purpose]
  : ["AUTHENTICATION_KEY"];

   const seenIds = new Set<string>();
   const allMethods: Domain.DIDDocument.VerificationMethod[] = [];

   for (const purpose of purposes) {
   const relationship = PURPOSE_TO_VERIFICATION_RELATIONSHIP[purpose];
   for (const method of (didDoc[relationship] ?? [])) {
    if (!seenIds.has(method.id)) {
      seenIds.add(method.id);
      allMethods.push(method);
      }
    }
  }

    const signingKeyData = this.matchKeys(allMethods, keyData);

    return signingKeyData;
  }

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
