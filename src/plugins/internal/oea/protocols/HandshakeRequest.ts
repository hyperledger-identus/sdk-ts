import { uuid } from "@stablelib/uuid";
import { AgentError, DID, Message } from "../../../../domain";
import { isArray, isString, notNil } from "../../../../utils";
import { OEA } from "../types";
import { OutOfBandInvitation } from "../../didcomm/protocols/invitation/OutOfBandInvitation";

/**
 * No specification available
 */

export interface HandshakeRequestBody {
  goal_code?: string;
  goal?: string;
  accept?: string[];
}

export class HandshakeRequest {
  public static type = OEA.ProtocolIds.ConnectionRequest;

  constructor(
    public body: HandshakeRequestBody,
    public from: DID,
    public to: DID,
    public thid?: string,
    public id: string = uuid()
  ) {}

  makeMessage(): Message {
    return new Message(
      this.body,
      this.id,
      HandshakeRequest.type,
      this.from,
      this.to,
      [],
      this.thid
    );
  }

  static fromMessage(msg: Message, from: DID): HandshakeRequest {
    if (!msg.from || !msg.piuri) {
      throw new AgentError.InvitationIsInvalidError();
    }

    if (notNil(msg.body.goal) && !isString(msg.body.goal)) {
      throw new AgentError.UnknownInvitationTypeError();
    }

    if (notNil(msg.body.goal_code) && !isString(msg.body.goal_code)) {
      throw new AgentError.UnknownInvitationTypeError();
    }

    if (notNil(msg.body.accept) && (
      !isArray(msg.body.accept) || msg.body.accept.some(x => !isString(x))
    )) {
      throw new AgentError.UnknownInvitationTypeError();
    }

    return new HandshakeRequest(
      msg.body,
      from,
      msg.from,
      msg.id
    );
  }

  static fromOutOfBand(
    inviteMessage: OutOfBandInvitation,
    from: DID
  ): HandshakeRequest {
    const toDID = DID.fromString(inviteMessage.from);

    return new HandshakeRequest(
      inviteMessage.body,
      from,
      toDID,
      inviteMessage.id
    );
  }
}
