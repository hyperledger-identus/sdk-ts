import { DID, Message } from "../../../../../domain";
import { ProtocolIds } from "../../types";

/**
 * Specification:
 * https://didcomm.org/basicmessage/2.0/
 */

export interface BasicMessageBody {
  // content of the user intended message
  content: string;
}

export class BasicMessage {
  public static type = ProtocolIds.BasicMessage;

  constructor(
    public body: BasicMessageBody,
    public from: DID,
    public to: DID,
    public thid?: string,
  ) {}

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    return new Message(
      body,
      undefined,
      BasicMessage.type,
      this.from,
      this.to,
      [],
      this.thid
    );
  }
}
