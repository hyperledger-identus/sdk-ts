import * as Domain from "../../../../domain";
import { Payload } from "../../../../domain/protocols/Payload";
import { CreatePrismDID } from "../../../../edge-agent/didFunctions";
import { OEA } from "../types";
import { Plugins } from "../../../../plugins";

interface Args {
  offer: OEA.CredentialOffer;
}

export class CredentialOffer extends Plugins.Task<Args> {
  async run(ctx: Plugins.Context) {
    const offer = this.args.offer;
    const did = await ctx.run(new CreatePrismDID({
      authenticationKeyCurve: Domain.Curve.SECP256K1
    }));

    const payload = {
      aud: [offer.options.domain],
      nonce: offer.options.challenge,
      vp: {
        "@context": ["https://www.w3.org/2018/presentations/v1"],
        type: ["VerifiablePresentation"],
      },
    };

    const signedJWT = await ctx.JWT.signWithDID(did, payload);

    return Payload.make(OEA.PRISM_JWT, signedJWT);
  }
}
