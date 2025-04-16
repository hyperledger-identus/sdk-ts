import { IssuerMetadata, TokenResponse } from "../types";
import { Context } from "../plugin";
import { CredentialRequest } from "../protocols";
import { HandleResponse_CredentialRequest } from "./HandleResponse_CredentialRequest";
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

  send(request: CredentialRequest, ctx: Context): Promise<Credential>;
  send(request: Domain.ApiRequest, ctx: Context): Promise<Domain.ApiResponse>;
  async send(request: Domain.ApiRequest, ctx: Context) {
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

    return this.handleResponse(response, request, ctx) as any;
  }

  async receive(message: Domain.ApiResponse, ctx: Context): Promise<void> {
    await this.handleResponse(message, null, ctx);
  }

  private async handleResponse(response: Domain.ApiResponse, request: Domain.ApiRequest | null, ctx: Context) {
    // TODO protocol shape
    // if (request.ident === Protocols.CredentialRequest) {
    if (request instanceof CredentialRequest) {
      return ctx.run(new HandleResponse_CredentialRequest({ request, response }));
    }

    // ? throw or return here
    return response;
  }

  // close?: (() => Promise<void>) | undefined;
}
