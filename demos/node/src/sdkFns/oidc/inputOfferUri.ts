import * as assert from 'node:assert';
import { InputPrompt } from "../../cli";
import SDK from "@hyperledger/identus-sdk";
import * as OIDC from "@hyperledger/identus-sdk/plugins/oidc";

/**
 * Input an OOB string and handle it
 */
export const InputOfferUri = new InputPrompt(
  "Enter Offer URI (1/2)",
  async (value, state) => {
    const clientId = state.oidc.clientId;
    const redirectUri = state.oidc.redirectUri;
    const agent = state.AgentDC;
    assert(agent instanceof SDK.Agent);

    // transform the raw uri string into and understandable CredentialOffer object
    const offer = await agent.runTask(new OIDC.ParseCredentialOffer({ value }));
    const authorizationRequest = await agent.runTask(new OIDC.ResolveAuthorizationRequest({ offer, clientId, redirectUri }));

    // store values for future use in CredentialRequest
    state.oidc.credentialOffer = offer;
    state.oidc.authorizationRequest = authorizationRequest;
    console.log({ url: authorizationRequest.url.href });
  });
