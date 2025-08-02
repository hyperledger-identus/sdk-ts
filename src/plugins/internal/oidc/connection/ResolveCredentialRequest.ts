import * as TB from "@sinclair/typebox";
import { CredentialOffer, IssuerMetadata, TokenResponse } from "../types";
import { Context } from "../plugin";
import { FetchIssuerMetadata } from "../tasks/FetchIssuerMetadata";
import { CreateCredentialRequest } from "../tasks/CreateCredentialRequest";
import { JWTCredential } from "../../../../pollux/models/JWTVerifiableCredential";
import * as Utils from "../../../../utils";

export interface ResolveCredentialRequestArgs {
  offer: CredentialOffer;
  clientId?: string;
  issuerMeta?: IssuerMetadata;
  tokenResponse?: TokenResponse;
}

/**
 * OIDC Convenience Task
 * Credential Offer to issued Credential
 * 
 * OIDC Credential Issuance flow 3/3
 * 
 * steps
 *   - fetchIssuerMetadata
 *   - CreateCredentialRequest
 *   - send CredentialRequest 
 *   - store Credential
 */
export class ResolveCredentialRequest extends Utils.Task<JWTCredential, ResolveCredentialRequestArgs> {
  async run(ctx: Context) {
    const issuerMeta = await this.getIssuerMetadata(ctx);
    const connection = Utils.expect(ctx.Connections.find(issuerMeta.credential_endpoint));

    const request = await ctx.run(new CreateCredentialRequest({
      offer: this.args.offer,
      clientId: this.args.clientId,
      issuerMeta: issuerMeta,
    }));

    const response = await connection.send(request, ctx);
    Utils.validate(response.body, TB.Object({ credential: TB.String() }));

    const credential = JWTCredential.fromJWS(response.body.credential);
    await ctx.Pluto.storeCredential(credential);

    return credential;
  }

  private async getIssuerMetadata(ctx: Context) {
    return Utils.isNil(this.args.issuerMeta)
      ? ctx.run(new FetchIssuerMetadata({ uri: this.args.offer.credential_issuer }))
      : this.args.issuerMeta;
  }
}
