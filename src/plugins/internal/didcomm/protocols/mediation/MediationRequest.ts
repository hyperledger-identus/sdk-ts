import { uuid } from "@stablelib/uuid";
import { DID, Message } from "../../../../../domain";
import { ProtocolIds } from "../../types";

export class MediationRequest {
  public static type = ProtocolIds.MediationRequest;

  public from: DID;
  public to: DID;
  public id: string;

  constructor(from: DID, to: DID, id: string = uuid()) {
    this.id = id;
    this.from = from;
    this.to = to;
  }

  makeMessage(): Message {
    const message = new Message(
      "{}",
      this.id,
      MediationRequest.type,
      this.from,
      this.to
    );
    return message;
  }
}
