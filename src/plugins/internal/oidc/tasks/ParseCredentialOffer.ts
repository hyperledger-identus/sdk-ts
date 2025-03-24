import { OIDC } from "../types";
import { Context } from "../plugin";
import { InvalidOffer } from "../errors";
import * as Utils from "../../../../utils";

/**
 * attempt to extract a Credential Offer from the given value
 * 
 * @link https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html#name-credential-offer
 */

interface Args {
  value: unknown;
}

/**
 * validates the offer is correctly formed OIDC Credential Offer
 * returns the offer Typed as such
 * 
 * @param offer - json object
 * @returns {OIDC.CredentialOffer}
 */
export class ParseCredentialOffer extends Utils.Task<OIDC.CredentialOffer, Args> {
  async run(ctx: Context) {
    try {
      const json = await this.extractJson(ctx);
      Utils.validate(json, OIDC.CredentialOffer);

      return json;
    }
    catch (e) {
      const msg = e instanceof Error ? e.message : "";
      throw new InvalidOffer(msg);
    }
  }

  private async extractJson(ctx: Context) {
    if (Utils.isObject(this.args.value)) {
      return this.args.value;
    }

    if (Utils.isString(this.args.value)) {
      const url = new URL(this.args.value);
      const offerParam = url.searchParams.get("credential_offer");
      const uriParam = url.searchParams.get("credential_offer_uri");

      if (Utils.notNil(offerParam) && Utils.notNil(uriParam)) {
        throw new Error("`credential_offer` and `credential_offer_uri` must not both be present");
      }

      if (Utils.notNil(uriParam)) {
        const response = await ctx.Api.request("GET", uriParam);
        return response.body;
      }

      const json = Utils.asJsonObj(offerParam);
      return json;
    }

    throw new Error("Unknown value");
  }
}
