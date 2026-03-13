import {
  type DIDDocument,
  type DID,
  type RequiredPrismDIDSecretKeys
} from "../../domain";

import { Task } from "../../utils/tasks";
import { type AgentContext } from "../Context";

export interface Args {
  keys: RequiredPrismDIDSecretKeys;
  services?: DIDDocument.Service[];
  alias?: string;
}

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

    const { MASTER_KEY: masterSK, ...keys } = this.args.keys;

    const publicKeys = Object.fromEntries(Object.entries(keys).map(([keyUsage, secretKeys]) => [keyUsage, secretKeys.map((sk) => sk.publicKey())]));
    const secretKeys = [masterSK, ...Object.values(keys).flat()];

    const did = await ctx.Castor.createPrismDID(
      masterSK.publicKey(),
      this.args.services,
      publicKeys
    );

    await ctx.Pluto.storeDID(did, secretKeys, this.args.alias);

    return did;
  }

}

