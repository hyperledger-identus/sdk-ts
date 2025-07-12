import { AuthServerMetadata } from "../types";
import { AuthorizationResponse } from "../protocols/AuthorizationResponse";
import * as Utils from "../../../../utils";

export interface ProcessCallbackUrlArgs {
  authServerMeta: AuthServerMetadata;
  callbackUrl: URL;
  expectedState?: "none" | "skip" | string;
}

export class ProcessCallbackUrl extends Utils.Task<AuthorizationResponse, ProcessCallbackUrlArgs> {
  async run() {
    const callbackUrl = this.args.callbackUrl;
    const error = callbackUrl.searchParams.get('error');

    if (Utils.notNil(error)) {
      throw new Error(JSON.stringify({
        error,
        error_description: callbackUrl.searchParams.get('error_description'),
        error_uri: callbackUrl.searchParams.get('error_uri'),
      }));
    }

    const code = callbackUrl.searchParams.get("code");

    if (Utils.isEmpty(code)) {
      throw new Error("no authorization code in callback");
    }

    const authGrant = new AuthorizationResponse(callbackUrl, code);
    const iss = authGrant.issuer;
    const state = authGrant.state;

    if (Utils.isNil(iss) && this.args.authServerMeta?.authorization_response_iss_parameter_supported) {
      throw new Error("issuer missing");
    }

    if (Utils.notNil(iss) && iss !== this.args.authServerMeta?.issuer) {
      throw new Error("unexpected issuer");
    }

    switch (this.args.expectedState) {
      case undefined:
      case "none":
        if (Utils.notNil(state)) {
          throw new Error('unexpected "state" response parameter encountered');
        }
        break;
      case "skip":
        break;
      default:
        // if (!validateString(expectedState)) {
        //   throw new Error('"expectedState" must be a non-empty string')
        // }
        if (Utils.isNil(state)) {
          throw new Error('response parameter "state" missing');
        }

        if (state !== this.args.expectedState) {
          throw new Error('unexpected "state" response parameter value');
        }
    }

    // const id_token = url.searchParams.get('id_token')
    // const token = url.searchParams.get('token')
    // if (id_token !== undefined || token !== undefined) {
    //   throw new Error('implicit and hybrid flows are not supported')
    // }

    return authGrant;
  }
}
