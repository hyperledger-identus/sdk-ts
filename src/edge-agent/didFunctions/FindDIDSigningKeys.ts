import { base58btc } from "multiformats/bases/base58";
import { Task } from "../../utils/tasks";
import { AgentContext } from "../Context";
import { isNil, notNil } from "../../utils";
import type * as Domain from "../../domain";
import { base64url } from "multiformats/bases/base64";

interface Args {
  did: Domain.DID;
  privateKey?: Domain.PrivateKey;
}

export interface SigningKeyData {
  kid: string;
  publicKey: any;
  privateKey: any;
}

/**
 * Search for the PrivateKeys that should be used for signing
 * return PrivateKey and information useful to signing operations
 * 
 * @param {Domain.DID} did subject of the search
 * @param {Domain.PrivateKey} [privateKey] optional filter search to only this PrivateKey
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

    const signingKeyData = didDoc.authentication.reduce<SigningKeyData[]>((acc, method) => {
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
    return signingKeyData;
  }

  private async getKeys(ctx: AgentContext): Promise<Domain.PrivateKey[]> {
    if (notNil(this.args.privateKey)) {
      return [this.args.privateKey];
    }
    const privateKeys = await ctx.Pluto.getDIDPrivateKeysByDID(this.args.did)
    if (privateKeys.length === 0) {
      const prismDIDs = await ctx.Pluto.getAllPrismDIDs();
      return prismDIDs.filter((did) => {
        return did.did.toString().includes(this.args.did.toString())
      }).map(({ privateKey }) => privateKey)
    }
    return privateKeys;
  }
}
