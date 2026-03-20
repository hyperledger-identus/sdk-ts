import * as Domain from "@hyperledger/identus-domain";
import { Task } from "../../utils/tasks";
import { type AgentContext } from "../Context";

/**
 * Asyncronously sign with a DID
 *
 * 
 * @param {DID} did
 * @param {Uint8Array} message
 * @returns {Promise<Signature>}
 */

export interface Args {
  did: Domain.DID;
  message: Uint8Array;
}

export class SignWithDID extends Task<Domain.Signature, Args> {
  async run(ctx: AgentContext) {
    const privateKeys = await ctx.Pluto.getDIDPrivateKeysByDID(this.args.did);

    for (const privateKey of privateKeys) {
      if (privateKey.isSignable()) {
        return {
          value: privateKey.sign(Buffer.from(this.args.message)),
        };
      }
    }

    throw new Domain.AgentError.CannotFindDIDPrivateKey();
  }
}
