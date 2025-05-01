import { base58btc } from "multiformats/bases/base58";
import { Task } from "../../utils/tasks";
import { AgentContext } from "../didcomm/Context";
import { isNil, notNil } from "../../utils";
import type * as Domain from "../../domain";

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
      const encoded = base58btc.encode(publicKey.to.Buffer());

      return { privateKey, publicKey, encoded };
    });

    const signingKeyData = didDoc.authentication.reduce<SigningKeyData[]>((acc, method) => {
      const data = keyData.find(x => x.encoded === method.publicKeyMultibase);

      return isNil(data) ? acc : acc.concat({
        kid: method.id,
        publicKey: data.publicKey,
        privateKey: data.privateKey
      });
    }, []);

    return signingKeyData;
  }

  private async getKeys(ctx: AgentContext): Promise<Domain.PrivateKey[]> {
    return notNil(this.args.privateKey)
      ? [this.args.privateKey]
      : ctx.Pluto.getDIDPrivateKeysByDID(this.args.did);
  }
}
