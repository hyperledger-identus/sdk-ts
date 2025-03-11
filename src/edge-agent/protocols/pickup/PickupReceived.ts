import { DID, Message } from "../../../domain";
import { ProtocolType } from "../ProtocolTypes";

/**
 * Specification:
 * https://didcomm.org/messagepickup/3.0/
 */

export interface PickupReceivedBody {
  // a list of ids of each message received. The id of each message is present in the attachment descriptor of each attached message of a delivery message.
  message_id_list: string[];
}

export class PickupReceived {
  public static type = ProtocolType.PickupReceived;

  constructor(
    public body: PickupReceivedBody,
    public from: DID,
    public to: DID
  ) {}

  makeMessage(): Message {
    return new Message(
      this.body,
      undefined,
      PickupReceived.type,
      this.from,
      this.to
    );
  }
}
