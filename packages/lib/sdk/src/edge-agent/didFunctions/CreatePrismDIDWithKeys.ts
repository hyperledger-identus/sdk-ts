import { type DID } from "@hyperledger/identus-domain";
import { type InferCreatePayload } from "../../castor/methods/types";

import { Task } from "../../utils/tasks";
import { type AgentContext } from "../Context";

export type Args = InferCreatePayload<"prism"> & {
  alias?: string;
};

/**
 * Handle the creation of a PrismDID
 *
 * Calculate and use the latest Prism DID KeyPathIndex.
 * Create the relevant PrivateKeys.
 * Store the PrismDID plus Keys in Pluto
 *
 * @param { Curve } authenticationKeyCurve specify the Curve used for the included AuthenticationKey (default: ED25519)
 * @param { Curve } issuingKeyCurve specify the Curve used for an additional IssuingKey (maps to assertionMethod)
 */
export class CreatePrismDIDWithKeys extends Task<DID, Args> {

  async run(ctx: AgentContext) {

    if (!this.args.keys?.MASTER_KEY) {
      throw new Error("MASTER_KEY is required");
    }

    const keys = this.args.keys;
    if (!keys.MASTER_KEY) {
      throw new Error("MASTER_KEY is required");
    }
    const { MASTER_KEY, ...otherKeys } = keys;
    const secretKeys = [MASTER_KEY, ...Object.values(otherKeys).flat()];

    const did = await ctx.Castor.createDID(
      'prism',
      {
        keys,
        services: this.args.services,
      }
    );

    await ctx.Pluto.storeDID(did, secretKeys, this.args.alias);

    return did;
  }

}

