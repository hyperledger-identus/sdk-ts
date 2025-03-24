import * as assert from 'node:assert';
import { AsyncPrompt } from "../../cli";
import SDK from "@hyperledger/identus-sdk";

export const SendCredentialRequest = new AsyncPrompt(
  "Send Credential Request",
  async (state) => {
    const agent = state.AgentDC;
    assert(agent instanceof SDK.Agent);

    const clientId = state.oidc.clientId;
    const authorizationRequest = state.oidc.authorizationRequest;
    assert(authorizationRequest instanceof SDK.Plugins.OIDC.AuthorizationRequest);
    const issuerMeta = authorizationRequest.issuerMeta;
    const offer = state.oidc.credentialOffer;
    assert(offer != null);

    const request = await agent.runTask(new SDK.Plugins.OIDC.CreateCredentialRequest({ offer, clientId, issuerMeta }));
    const result = await agent.sendMessage(request);

    console.log({ result });
  });
