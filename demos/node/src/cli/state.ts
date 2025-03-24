import SDK from "@hyperledger/identus-sdk";
import type { OIDC, AuthorizationRequest } from "@hyperledger/identus-sdk/plugins/oidc";

/**
 * demo app state
 */
export interface State {
  AgentDC?: SDK.Agent;
  mediatorDID?: string;
  notifications: Record<string, boolean>;
  components: {
    Apollo?: SDK.Apollo;
    Castor?: SDK.Castor;
  };
  oidc: {
    clientId: string;
    redirectUri: string;
    credentialOffer?: OIDC.CredentialOffer;
    authorizationRequest?: AuthorizationRequest;
  };
}
