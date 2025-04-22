import { AuthServerMetadata } from "../types";
import { Context } from "../plugin";
import * as Domain from "../../../../domain";
import * as Utils from "../../../../utils";

interface Args {
  serverUri: string | URL,
  algorithm?: string;
}

/**
 * try to retrieve Authorization Server Metadata from the give URI
 * `/.well-known/openid-configuration` will be appended to the URI
 * 
 * @param uri 
 * @returns {Promise<AuthServerMetadata>}
 */
export class FetchAuthServerMeta extends Utils.Task<Domain.ApiResponse<AuthServerMetadata>, Args> {
  async run(ctx: Context) {
    const serverUrl = new URL(this.args.serverUri);
    const url = new URL(serverUrl);

    if (url.protocol !== 'https:' && url.protocol !== 'http:') {
      throw new Error('"issuer.protocol" must be "https:" or "http:"');
    }

    switch (this.args.algorithm) {
      case undefined:
      case 'oidc':
        url.pathname = `${url.pathname}/.well-known/openid-configuration`.replace('//', '/');
        break;
      case 'oauth2': {
        const trail = url.pathname === '/' ? '' : `/${url.pathname}`;
        url.pathname = `.well-known/oauth-authorization-server${trail}`.replace('//', '/');
        break;
      }
      default:
        throw new Error('"options.algorithm" must be "oidc" (default), or "oauth2"');
    }

    const headers = new Headers();
    headers.set('accept', 'application/json');

    const response = await ctx.Api.request("GET", url.href, undefined, new Map(headers));

    if (response.status !== 200) {
      throw new Error('"response" is not a conform Authorization Server Metadata response');
    }

    this.validate(response);

    return response;
  }

  private validate(response: Domain.ApiResponse): asserts response is Domain.ApiResponse<AuthServerMetadata> {
    Utils.validate(response.body, AuthServerMetadata);
  }
}
