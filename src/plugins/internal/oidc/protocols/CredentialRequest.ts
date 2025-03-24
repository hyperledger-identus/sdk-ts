import { OIDC } from "../types";
import * as Domain from "../../../../domain";
import * as Utils from "../../../../utils";

export class CredentialRequest extends Domain.ApiRequest {
  public readonly ProtocolId = OIDC.Protocols.CredentialRequest;

  constructor(
    endpoint: string | URL,
    // public readonly accessToken: string,
    body: Utils.JsonObj,
  ) {
    super(new URL(endpoint));
    this.method = "POST";
    this.body = body;
    // this.headers.set('authorization', `Bearer ${accessToken}`);
    this.headers.set('content-type', 'application/json');
  }
}
