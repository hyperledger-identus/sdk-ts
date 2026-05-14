import * as Domain from "@hyperledger/identus-domain";
import { Payload } from "@hyperledger/identus-domain";
import type { KBOptions } from "@sd-jwt/types";
import { SDJWTCredential } from "../../../../pollux/models/SDJWTVerifiableCredential";
import { OEA } from "../types";
import { Plugins } from "../../../../plugins";

interface Args {
  credential: Domain.Credential;
  presentationRequest: OEA.PresentationRequest;
  presentationFrame?: any;
}

export class PresentationRequest extends Plugins.Task<Args> {
  async run(ctx: Plugins.Context) {
    const credential = this.args.credential;

    if (credential instanceof SDJWTCredential) {
      const subjectDID = Domain.DID.from(credential.subject);
      const presentationRequest = this.args.presentationRequest;
      const keys = await ctx.Pluto.getDIDPrivateKeysByDID(subjectDID);
      const privateKey = keys.find((key) => key.curve === Domain.Curve.ED25519.toString());

      if (privateKey === undefined) {
        throw new Domain.AgentError.CannotFindDIDPrivateKey();
      }

      // [ ] https://github.com/hyperledger-identus/sdk-ts/issues/362 PresentationFrame
      const presentationFrame = this.args.presentationFrame ?? {};

      // Build Key Binding JWT options when a challenge (nonce) is provided.
      // The KB-JWT cryptographically binds the presentation to the verifier's
      // challenge, preventing replay attacks (SD-JWT-VC I-D §5.1).
      const challenge = presentationRequest.options?.challenge;
      const domain = presentationRequest.options?.domain;
      const kb: KBOptions | undefined = challenge
        ? {
            payload: {
              nonce: challenge,
              aud: domain ?? "",
              iat: Math.floor(Date.now() / 1000),
            },
          }
        : undefined;

      const presentationJWS = await ctx.SDJWT.createPresentationFor({
        jws: credential.id,
        presentationFrame,
        privateKey,
        kb,
      });

      return Payload.make(OEA.PRISM_SDJWT, presentationJWS);
    }

    throw new Domain.PolluxError.InvalidPresentationProofArgs();
  }
}
