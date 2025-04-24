import * as Domain from "../../../../domain";
import { JWTCredential } from "../../../../pollux/models/JWTVerifiableCredential";
import { Payload } from "../../../../domain/protocols/Payload";
import { OEA } from "../types";
import { Plugins } from "../../../../plugins";

interface Args {
  credential: Domain.Credential;
  presentationRequest: OEA.PresentationRequest;
}

export class PresentationRequest extends Plugins.Task<Args> {
  async run(ctx: Plugins.Context) {
    const credential = this.args.credential;
    const presentationRequest = this.args.presentationRequest;

    if (!(credential instanceof JWTCredential)) {
      throw new Error();
    }

    if (!credential.isProvable()) {
      throw new Error("Credential is not Provable");
    }

    const subjectDID = Domain.DID.from(credential.subject);
    const presentation = credential.presentation();
    const jwt = await ctx.JWT.signWithDID(subjectDID, {
      vp: presentation,
      iss: subjectDID.toString(),
      aud: presentationRequest.options.domain,
      nonce: presentationRequest.options.challenge,
    });

    return Payload.make(OEA.PRISM_JWT, jwt);
  }
}
