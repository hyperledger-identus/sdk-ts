import * as TB from "@sinclair/typebox";
import { Context } from "../plugin";
import { CredentialRequest } from "../protocols/CredentialRequest";
import * as Domain from "../../../../domain";
import * as Utils from "../../../../utils";
import { JWTCredential } from "../../../../pollux/models/JWTVerifiableCredential";

interface Args {
  request: CredentialRequest;
  response: Domain.ApiResponse;
}

// ?? moreso handle CredentialRequest response
export class HandleCredentialRequest extends Utils.Task<Domain.Credential, Args> {
  async run(ctx: Context) {
    const response = this.args.response;
    Utils.validate(response.body, TB.Object({ credential: TB.String() }));

    const credential = JWTCredential.fromJWS(response.body.credential);
    await ctx.Pluto.storeCredential(credential);

    return credential as Domain.Credential;
  }
}
