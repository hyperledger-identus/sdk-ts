import * as Domain from "../../../domain";
import { Task } from "../../../utils/tasks";
import { SDJwtVcInstance, SdJwtVcPayload, } from "@sd-jwt/sd-jwt-vc";
import type { DisclosureFrame } from '@sd-jwt/types';
import { Plugins } from "../../../plugins";
import { FindSigningKeys } from "../../../edge-agent/didFunctions/FindDIDSigningKeys";
import { expect } from "../../../utils";

/**
 * Asyncronously sign with a DID
 *
 * 
 * @param {DID} did
 * @param payload
 * @param header
 * @returns {string}
 */

interface Args {
  did: Domain.DID;
  payload: SdJwtVcPayload;
  header?: Partial<Domain.JWT.Header>;
  disclosureFrame: DisclosureFrame<SdJwtVcPayload>;
  privateKey?: Domain.PrivateKey;
}

export class CreateSDJWT extends Task<string, Args> {

  async run(ctx: Plugins.Context) {
    const signingKeys = await ctx.run(
      new FindSigningKeys({
        did: this.args.did,
        privateKey: this.args.privateKey
      })
    );
    const signingKey = signingKeys.at(0);
    const keyId = signingKey?.kid;
    const privateKey = expect(signingKey?.privateKey, "key not found");
    if (!privateKey?.isSignable()) {
      throw new Error("Key is not signable");
    }
    const config = ctx.SDJWT.getSKConfig(privateKey);
    const sdjwt = new SDJwtVcInstance(config);
    return sdjwt.issue(
      this.args.payload,
      this.args.disclosureFrame,
      keyId ? { header: { kid: keyId } } : undefined
    );
  }
}
