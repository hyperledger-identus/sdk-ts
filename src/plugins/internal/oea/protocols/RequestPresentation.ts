import { uuid } from "@stablelib/uuid";
import { AgentError, AttachmentDescriptor, DID, Message } from "../../../../domain";
import { isString, notNil } from "../../../../utils";
import { OEA } from "../types";

/**
 * Specification:
 * https://github.com/decentralized-identity/waci-didcomm/blob/main/present_proof/present-proof-v3.md#request-presentation
 */

export interface RequestPresentationBody {
  // optional field that indicates the goal of the message sender
  goal_code?: string;
  // a field that provides some human readable information about this request for a presentation
  comment?: string;
  // an optional field that defaults to false to indicate that the verifier will or will not send a post-presentation confirmation ack message
  will_confirm?: boolean;
}

export class RequestPresentation {
  public static type = OEA.ProtocolIds.RequestPresentation;

  constructor(
    public body: RequestPresentationBody,
    public attachments: AttachmentDescriptor[],
    public from: DID,
    public to: DID,
    public thid?: string,
    public id: string = uuid()
  ) {
    this.validate();
  }

  get decodedAttachments() {
    return this.attachments.map((attachment) => attachment.payload);
  }

  private validate() {
    if (notNil(this.body.goal_code) && !isString(this.body.goal_code)) {
      throw new Error("Invalid goal_code");
    }

    if (notNil(this.body.comment) && !isString(this.body.comment)) {
      throw new Error("Invalid comment");
    }

    if (notNil(this.body.will_confirm) && typeof this.body.will_confirm !== "boolean") {
      throw new Error("Invalid willConfirm");
    }
  }

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    return new Message(
      body,
      this.id,
      RequestPresentation.type,
      this.from,
      this.to,
      this.attachments,
      this.thid
    );
  }

  static fromMessage(fromMessage: Message): RequestPresentation {
    if (
      fromMessage.piuri !== OEA.ProtocolIds.RequestPresentation ||
      !fromMessage.from ||
      !fromMessage.to
    ) {
      throw new AgentError.InvalidRequestPresentationMessageError();
    }

    return new RequestPresentation(
      fromMessage.body,
      fromMessage.attachments,
      fromMessage.from,
      fromMessage.to,
      fromMessage.thid,
      fromMessage.id
    );
  }
}
