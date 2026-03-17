import * as Errors from "../errors";
import { TokenResponse } from "../types";
import { type Context } from "../plugin";
import { type AuthorizationRequest, TokenRequest } from "../protocols";
import { ProcessCallbackUrl } from "./ProcessCallbackUrl";
import { OIDCConnection } from "./OIDCConnection";
import { Task } from "../../../../utils";
import { expect, validate } from "@hyperledger/identus-domain";
import { Connection } from "../../../../edge-agent/connections";

export interface ResolveTokenRequestArgs {
  authorizationRequest: AuthorizationRequest;
  callbackUrl?: string | URL;
}

/**
 * OIDC Convenience Task
 * CallbackUrl to established Connection
 * 
 * OIDC Connection flow 2/2
 * OIDC Credential Issuance flow 2/3
 * 
 * manage fetching a Token from the Authorization Server
 * establishing a connection for future use
 * steps
 *   - processCallbackUrl
 *   - send a TokenRequest
 *   - add a Connection
 * 
 * @param authorizationRequest 
 * @param callbackUrl 
 * @returns 
 */
export class ResolveTokenRequest extends Task<TokenResponse, ResolveTokenRequestArgs> {
  async run(ctx: Context) {
    const { authorizationRequest, callbackUrl } = this.args;
    const clientId = expect(authorizationRequest.params.get("client_id"), Errors.MissingClientId);
    const scope = expect(authorizationRequest.params.get("scope"), Errors.MissingScope);
    const redirectUri = expect(authorizationRequest.params.get("redirect_uri"), Errors.MissingRedirectUri);
    const urlStr = expect(callbackUrl?.toString() ?? (globalThis as any)?.location?.href, Errors.RequiredCallbackUrl);
    const authMeta = authorizationRequest.authServerMeta;
    const cbUrl = new URL(urlStr);

    const authResponse = await ctx.run(
      new ProcessCallbackUrl({
        authServerMeta: authMeta,
        callbackUrl: cbUrl,
        // expectedState: opts?.expectedState
      })
    );

    const tokenEndpoint = expect(authMeta.token_endpoint, "token endpoint missing");
    // TODO oauth2 handle all client authentication methods
    const tokenRequest = new TokenRequest(
      tokenEndpoint,
      "authorization_code",
      {
        // ? presume no client authentication so set clientId
        client_id: clientId,
        code: authResponse.code,
        redirect_uri: redirectUri,
      },
    );

    const connection = new OIDCConnection(
      // clientId,
      authorizationRequest.issuerMeta,
      scope.split(" "),
      // tokenResponse
    );

    connection.state = Connection.State.REQUESTED;
    const response = await connection.send(tokenRequest, ctx);

    if (response?.status !== 200) {
      throw new Errors.InvalidTokenResponseStatus();
    }

    const tokenResponse = response.body;
    validate(tokenResponse, TokenResponse);

    connection.tokenResponse = tokenResponse;
    connection.state = Connection.State.GRANTED;
    ctx.Connections.add(connection);
    // ? ctx.emit connection

    return tokenResponse;
  }
}
