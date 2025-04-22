import * as Domain from "../../../../domain";
import * as Utils from "../../../../utils";

export class TokenRequest extends Domain.ApiRequest {
  constructor(
    endpoint: string | URL,
    grantType: "authorization_code",
    body: Utils.JsonObj,
  ) {
    super(new URL(endpoint));
    this.method = "POST";
    this.body = new URLSearchParams({ ...body, grant_type: grantType }).toString();
    this.headers.set("accept", "application/json");
    this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
  }
}
