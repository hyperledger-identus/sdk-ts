import { IssuerMetadata, TokenResponse } from "../types";
import { Context } from "../plugin";
import * as Domain from "../../../../domain";
import * as Utils from "../../../../utils";
import { Connection } from "../../../../edge-agent/connections";

export class OIDCConnection implements Connection {
  public state = Connection.State.NEW;
  public tokenResponse?: TokenResponse;
  public readonly uri: string;

  constructor(
    public readonly issuerMeta: IssuerMetadata,
    public readonly scopes: string[],
  ) {
    this.uri = this.issuerMeta.credential_endpoint;
  }

  async send(request: Connection.Protocol, ctx: Context): Promise<Domain.ApiResponse | undefined> {
    if (request instanceof Domain.ApiRequest) {
      const headers = new Map(request.headers);

      if (Utils.notNil(this.tokenResponse)) {
        headers.set('authorization', `Bearer ${this.tokenResponse.access_token}`);
      }

      const response = await ctx.Api.request(
        request.method ?? "POST",
        request.url.href,
        new Map(request.params),
        headers,
        request.body
      );

      return response;
    }

    return undefined;
  }
}
