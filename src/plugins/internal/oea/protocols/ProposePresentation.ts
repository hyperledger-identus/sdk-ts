import { uuid } from "@stablelib/uuid";
import { AgentError, AttachmentDescriptor, DID, Message } from "../../../../domain";
import { isString, notNil } from "../../../../utils";
import { OEA } from "../types";

/**
 * Specification:
 * https://github.com/decentralized-identity/waci-didcomm/blob/main/present_proof/present-proof-v3.md#propose-presentation
 */

export interface ProposePresentationBody {
  // optional field that indicates the goal of the message sender
  goal_code?: string;
  // a field that provides some human readable information about the proposed presentation
  comment?: string;
}

export class ProposePresentation {
  public static type = OEA.ProtocolIds.ProposePresentation;

  constructor(
    public body: ProposePresentationBody,
    public attachments: AttachmentDescriptor[],
    public from: DID,
    public to: DID,
    public thid?: string,
    public id: string = uuid()
  ) {
    this.validate();
  }

  private validate() {
    if (notNil(this.body.goal_code) && !isString(this.body.goal_code)) {
      throw new Error("Invalid goal_code");
    }

    if (notNil(this.body.comment) && !isString(this.body.comment)) {
      throw new Error("Invalid comment");
    }
  }

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    return new Message(
      body,
      this.id,
      ProposePresentation.type,
      this.from,
      this.to,
      this.attachments,
      this.thid
    );
  }

  static fromMessage(fromMessage: Message): ProposePresentation {
    if (
      fromMessage.piuri !== OEA.ProtocolIds.ProposePresentation ||
      !fromMessage.from ||
      !fromMessage.to
    ) {
      throw new AgentError.InvalidProposePresentationMessageError();
    }

    return new ProposePresentation(
      fromMessage.body,
      fromMessage.attachments,
      fromMessage.from,
      fromMessage.to,
      fromMessage.thid,
      fromMessage.id
    );
  }
}
