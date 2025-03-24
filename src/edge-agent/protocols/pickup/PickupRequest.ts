import { DID, Message } from "../../../domain";
import { ProtocolType } from "../ProtocolTypes";

/**
 * Specification:
 * https://didcomm.org/messagepickup/3.0/
 */

export interface PickupRequestBody {
  // after receipt of this message, the mediator SHOULD deliver up to the limit indicated.
  limit: number;
  // optional. When specified, the mediator MUST only return messages sent to that recipient did.
  recipient_did?: string;
}

export class PickupRequest {
  public static type = ProtocolType.PickupRequest;

  constructor(
    public body: PickupRequestBody,
    public from: DID,
    public to: DID
  ) {}

  makeMessage(): Message {
    const message = new Message(
      this.body,
      undefined,
      PickupRequest.type,
      this.from,
      this.to
    );

    return message;
  }
}
