import { CredentialOffer, IssuerMetadata } from "../types";
import { Context } from "../plugin";
import { CreateAuthorizationRequest } from "./CreateAuthorizationRequest";
import { AuthorizationRequest } from "../protocols/AuthorizationRequest";
import { FetchIssuerMetadata } from "../tasks/FetchIssuerMetadata";
import { FetchAuthServerMeta } from "../tasks/FetchAuthServerMeta";
import { InvalidCredentialConfigurationIds, MissingAuthorizationServerUri } from "../errors";
import * as Utils from "../../../../utils";

interface Args {
  offer: CredentialOffer;
  clientId: string;
  redirectUri: string;
}

/**
 * OIDC Convenience Task
 * Credential Offer to Authorization Request
 * 
 * OIDC Connection flow 1/2
 * OIDC Credential Issuance flow 1/3
 * 
 * steps
 *   - fetchIssuerMetadata
 *   - fetchAuthorizationServerMetadata
 *   - createAuthorizationRequest
 * 
 * @param offer 
 * @returns 
 */
export class ResolveAuthorizationRequest extends Utils.Task<AuthorizationRequest, Args> {
  async run(ctx: Context) {
    const { offer, clientId, redirectUri } = this.args;
    const issuerMeta = await ctx.run(new FetchIssuerMetadata({ uri: offer.credential_issuer }));
    const supportedKeys = Object.keys(issuerMeta.credential_configurations_supported);
    const allSupported = offer.credential_configuration_ids.every(x => supportedKeys.includes(x));

    if (allSupported === false) {
      throw new InvalidCredentialConfigurationIds();
    }

    let authServer: string | undefined;
    if (Utils.notNil(offer.grants?.authorization_code)) {
      authServer = offer.grants?.authorization_code.authorization_server;
    }
    else if (Utils.notNil(offer.grants?.["urn:ietf:params:oauth:grant-type:pre-authorized_code"])) {
      authServer = offer.grants?.["urn:ietf:params:oauth:grant-type:pre-authorized_code"].authorization_server;
    }

    authServer = Utils.expect(
      authServer ?? issuerMeta.authorization_servers?.at(0),
      MissingAuthorizationServerUri
    );


    const authServerResponse = await ctx.run(
      new FetchAuthServerMeta({ serverUri: authServer, algorithm: "oidc" })
    );
    const { scopes } = await this.processScopesAndConfigurationIds(offer, issuerMeta);
    const authServerMeta = authServerResponse.body;

    // const usePar = false; // never;
    // if (usePar) {
    //   submitPar
    // }

    const authRequest = await ctx.run(
      new CreateAuthorizationRequest({
        offer,
        issuerMeta,
        authServerMeta,
        clientId,
        redirectUri,
        scopes
      })
    );

    return authRequest;
  }

  private async processScopesAndConfigurationIds(
    offer: CredentialOffer,
    issuerMeta: IssuerMetadata,
  ) {
    const scopes: string[] = [];
    const configurationIds: string[] = [];

    offer.credential_configuration_ids.forEach(id => {
      const credentialConfig = Utils.expect(
        issuerMeta.credential_configurations_supported[id],
        `${id} was not found within issuer metadata`
      );

      if (Utils.notEmptyString(credentialConfig.scope)) {
        scopes.push(credentialConfig.scope);
      }
      else {
        configurationIds.push(id);
      }
    });

    return { scopes, configurationIds };
  }
}
