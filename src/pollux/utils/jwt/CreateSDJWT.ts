import * as Domain from "../../../domain";
import { Task } from "../../../utils/tasks";
import { SdJwtVcPayload, } from "@sd-jwt/sd-jwt-vc";
import type { DisclosureFrame } from '@sd-jwt/types';
import { Plugins } from "../../../plugins";
import { FindSigningKeys } from "../../../edge-agent/didFunctions/FindDIDSigningKeys";

/**
 * Asyncronously sign with a DID
 *
 * @async
 * @param {DID} did
 * @param payload
 * @param header
 * @returns {string}
 */

interface Args {
  did: Domain.DID;
  privateKey?: Domain.PrivateKey;
  payload: SdJwtVcPayload;
  header?: Partial<Domain.JWT.Header>;
  disclosureFrame: DisclosureFrame<SdJwtVcPayload>;
}

export class CreateSDJWT extends Task<string, Args> {
  async run(ctx: Plugins.Context) {
    const signingKeys = await ctx.run(new FindSigningKeys({ did: this.args.did }));
    const signingKey = signingKeys.at(0);

    if (!signingKey?.privateKey.isSignable()) {
      throw new Error("Key is not signable");
    }

    const jwt = await ctx.SDJWT.sign({
      issuerDID: this.args.did,
      privateKey: signingKey.privateKey,
      payload: this.args.payload,
      disclosureFrame: this.args.disclosureFrame,
      kid: signingKey.kid
    });
    return jwt;
  }
}
