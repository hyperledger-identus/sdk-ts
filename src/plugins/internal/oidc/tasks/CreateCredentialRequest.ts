import { OIDC } from "../types";
import { Context } from "../plugin";
import { InvalidCredentialConfigurationIds } from "../errors";
import { CredentialRequest } from "../protocols/CredentialRequest";
import { FetchIssuerMetadata } from "./FetchIssuerMetadata";
import { OIDCConnection } from "../connection/OIDCConnection";
import * as Utils from "../../../../utils";
import { CreatePrismDID } from "../../../../edge-agent/didFunctions";

interface Args {
  offer: OIDC.CredentialOffer;
  clientId?: string;
  issuerMeta?: OIDC.IssuerMetadata;
  tokenResponse?: OIDC.TokenResponse;
}

/**
 * create a CredentialRequest for the given offer
 * a connection with the relevant Issuer must have already been established
 * 
 * @param offer 
 * @param issuerMeta 
 * @param clientId 
 * @returns 
 */
export class CreateCredentialRequest extends Utils.Task<CredentialRequest, Args> {
  async run(ctx: Context) {
    const clientId = Utils.expect(this.args.clientId ?? ctx.OIDC.clientId);
    const credentialIssuer = this.args.offer.credential_issuer;
    const configId = Utils.expect(this.args.offer.credential_configuration_ids.at(0), InvalidCredentialConfigurationIds);
    const issuerMeta = await this.getIssuerMetadata(ctx);
    const config = Utils.expect(issuerMeta.credential_configurations_supported[configId], InvalidCredentialConfigurationIds);
    const tokenResponse = Utils.expect(this.getTokenResponse(ctx, issuerMeta));

    const body: Utils.JsonObj = {
      format: config.format,
      credential_definition: {
        type: config.credential_definition.type,
        "credentialSubject": {},
      },
    };

    // create proof based on config.proof_types_supported
    if (Utils.notNil(config.proof_types_supported?.jwt)) {
      const alias = `${credentialIssuer}_${tokenResponse.c_nonce}`;
      const did = await ctx.run(new CreatePrismDID({ alias, services: [] }));
      const jwt = await ctx.JWT.signWithDID(
        did,
        {
          aud: credentialIssuer,
          iss: clientId,
          iat: Date.now(),
          nonce: tokenResponse.c_nonce,
        },
        { typ: "openid4vci-proof+jwt" }
      );

      body.proof = { proof_type: "jwt", jwt };
    }

    // TODO move to Protocol in some way
    const request = new CredentialRequest(
      issuerMeta.credential_endpoint,
      // this.args.tokenResponse.accessToken,
      body,
    );

    return request;
  }

  private async getIssuerMetadata(ctx: Context) {
    if (Utils.isNil(this.args.issuerMeta)) {
      return ctx.run(new FetchIssuerMetadata({ uri: this.args.offer.credential_issuer }));
    }

    return this.args.issuerMeta;
  }

  private getTokenResponse(ctx: Context, issuerMeta: OIDC.IssuerMetadata): OIDC.TokenResponse | undefined {
    // if tokenResponse is not provided, try to find the relevant connection
    if (Utils.isNil(this.args.tokenResponse)) {
      const maybeConnection = ctx.Connections.find(issuerMeta.credential_endpoint);
      // TODO types
      return (maybeConnection as OIDCConnection)?.tokenResponse;
    }

    return this.args.tokenResponse;
  }
}
