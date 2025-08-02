import { uuid } from "@stablelib/uuid";
import * as Domain from "../../../../domain";
import { Task } from "../../../../utils/tasks";
import type { Context as ACContext } from "../../anoncreds/plugin";
import type { Context as DIFContext } from "../../dif";
import type { Plugins } from "../../../types";
import { CreatePeerDID } from "../../../../edge-agent/didcomm/CreatePeerDID";
import { RequestPresentation } from "../protocols/RequestPresentation";

export type TaskContext = Plugins.Context & ACContext & DIFContext;

export interface Args {
  type: Domain.CredentialType;
  toDID: Domain.DID;
  claims: Domain.PresentationClaims<Domain.CredentialType>;
}

export class CreatePresentationRequest extends Task<RequestPresentation, Args> {
  async run(ctx: TaskContext) {
    const { claims, toDID, type } = this.args;
    const didDocument = await ctx.Castor.resolveDID(toDID.toString());
    const peerDIDTask = new CreatePeerDID({ services: didDocument.services, updateMediator: true });
    const newPeerDID = await ctx.run(peerDIDTask);

    if (type === Domain.CredentialType.AnonCreds) {
      const presentationDefinition = await ctx.Anoncreds.createPresentationDefinition(claims as any);

      return this.createRequest(
        type,
        presentationDefinition,
        newPeerDID,
        toDID
      );
    }

    if (type === Domain.CredentialType.JWT || type === Domain.CredentialType.SDJWT) {
      const claimsCast = claims as Domain.PresentationClaims<Domain.CredentialType.JWT>;
      const presentationDefinition = await ctx.DIF.createPresentationDefinition(claimsCast.claims, claimsCast);

      return this.createRequest(
        type,
        presentationDefinition,
        newPeerDID,
        toDID
      );
    }

    throw new Domain.PolluxError.CredentialTypeNotSupported();
  }

  private createRequest(
    type: Domain.CredentialType,
    definition: any,
    from: Domain.DID,
    to: Domain.DID
  ) {
    const attachmentFormat = type === Domain.CredentialType.JWT || type === Domain.CredentialType.SDJWT
      ? "dif/presentation-exchange/definitions@v1.0"
      : "anoncreds/proof-request@v1.0";

    return new RequestPresentation(
      {},
      [
        Domain.AttachmentDescriptor.build(
          { json: definition },
          uuid(),
          'application/json',
          undefined,
          attachmentFormat
        )
      ],
      from,
      to,
      uuid()
    );
  }
}
