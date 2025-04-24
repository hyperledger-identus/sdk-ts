import { CreatePrismDID } from "../../../../edge-agent/didFunctions";
import { Payload } from "../../../../domain/protocols/Payload";
import { OEA } from "../types";
import { Plugins } from "../../../../plugins";
import { JWTPresentationPayload } from "../../../../pollux/models/JWTVerifiableCredential";

interface Args {
  offer: OEA.CredentialOffer;
}

export class CredentialOffer extends Plugins.Task<Args> {
  async run(ctx: Plugins.Context) {
    if (!this.validateOffer()) {
      throw new Error("Invalid offer");
    }
    const offer = this.args.offer;
    const did = await ctx.run(new CreatePrismDID({}));

    const payload: JWTPresentationPayload = {
      aud: [offer.options.domain],
      nonce: offer.options.challenge,
      vp: {
        "@context": ["https://www.w3.org/2018/presentations/v1"],
        type: ["VerifiablePresentation"],
        verifiableCredential: []
      },
    };

    const signedJWT = await ctx.JWT.signWithDID(did, payload);

    return Payload.make(OEA.PRISM_SDJWT, signedJWT);
  }

  private validateOffer() {
    const offer = this.args.offer;

    if (!offer.options) {
      return false;
    }
    const options = offer.options;
    if (!options.challenge || typeof options.challenge !== "string") {
      return false;
    }
    if (!options.domain || typeof options.domain !== "string") {
      return false;
    }
    return true;
  }
}
