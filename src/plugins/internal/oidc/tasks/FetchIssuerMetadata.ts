import { IssuerMetadata } from "../types";
import { Context } from "../plugin";
import * as Utils from "../../../../utils";

export interface FetchIssuerMetadataArgs {
  uri: string | URL,
}

/**
 * try to retrieve Issuer Metadata from the given URI
 * `/.well-known/openid-credential-issuer` will be appended to the uri
 * 
 * @see [OIDC Issuer Metadata](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html#name-credential-issuer-metadata) 
 * 
 * @param uri
 * @returns {Promise<IssuerMetadata>}
 */
export class FetchIssuerMetadata extends Utils.Task<IssuerMetadata, FetchIssuerMetadataArgs> {
  async run(ctx: Context) {
    const url = new URL(this.args.uri.toString());
    const agent_url = `${url}/.well-known/openid-credential-issuer`;
    const response = await ctx.Api.request("GET", agent_url);
    const meta = response.body;
    Utils.validate(meta, IssuerMetadata);

    return meta;
  }
}
