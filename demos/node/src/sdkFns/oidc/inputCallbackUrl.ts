import * as assert from 'node:assert';
import { InputPrompt } from "../../cli";
import SDK from "@hyperledger/identus-sdk";

/**
 * Input the Callback URL from using the AuthorizationRequest
 */
export const InputCallbackUrl = new InputPrompt(
  "Enter Callback URL (2/2)",
  async (value, state) => {
    const agent = state.AgentDC;
    assert(agent instanceof SDK.Agent);

    const authorizationRequest = state.oidc.authorizationRequest;
    assert(authorizationRequest instanceof SDK.Plugins.OIDC.AuthorizationRequest);

    const result = await agent.runTask(
      new SDK.Plugins.OIDC.ResolveTokenRequest({ authorizationRequest, callbackUrl: value })
    );

    console.log({ result });
  });
