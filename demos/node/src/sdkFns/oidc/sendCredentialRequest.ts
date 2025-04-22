import * as assert from 'node:assert';
import { AsyncPrompt } from "../../cli";
import SDK from "@hyperledger/identus-sdk";
import * as OIDC from "@hyperledger/identus-sdk/plugins/oidc";

export const SendCredentialRequest = new AsyncPrompt(
  "Send Credential Request",
  async (state) => {
    const agent = state.AgentDC;
    assert(agent instanceof SDK.Agent);

    const clientId = state.oidc.clientId;
    const authorizationRequest = state.oidc.authorizationRequest;
    assert(authorizationRequest instanceof OIDC.AuthorizationRequest);
    const issuerMeta = authorizationRequest.issuerMeta;
    const offer = state.oidc.credentialOffer;
    assert(offer != null);

    const result = await agent.runTask(new OIDC.ResolveCredentialRequest({ offer, clientId, issuerMeta }));

    console.log({ result });
  });
