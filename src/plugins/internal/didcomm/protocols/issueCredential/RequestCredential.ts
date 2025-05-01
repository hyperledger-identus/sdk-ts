import { uuid } from "@stablelib/uuid";
import { AgentError, AttachmentDescriptor, DID, Message } from "../../../../../domain";
import { isArray, isNil, isObject, notNil } from "../../../../../utils";
import { ProtocolIds } from "../../types";

/**
 * Specification:
 * https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential#request-credential
 */

interface CredentialFormat {
  attach_id: string;
  format: string;
}

interface RequestCredentialBody {
  // optional field that indicates the goal of the message sender
  goal_code?: string;
  // optional field that provides human readable information about this Credential Request
  comment?: string;
  // contains an entry providing the the value of the attachment @id and the verifiable credential format
  formats: CredentialFormat[];
}

export class RequestCredential {
  public static type = ProtocolIds.RequestCredential;

  constructor(
    public body: RequestCredentialBody,
    public attachments: AttachmentDescriptor[],
    public from: DID,
    public to?: DID,
    public thid?: string,
    public id: string = uuid()
  ) {
    this.validate();
  }

  private validate() {
    if (!isArray(this.body.formats)) {
      throw new AgentError.InvalidCredentialFormats();
    }

    const validFormats = this.body.formats.every(x => isObject(x) && notNil(x.attach_id) && notNil(x.format));

    if (!validFormats) {
      throw new AgentError.InvalidCredentialFormats();
    }
    // TODO is it a requirement that formats is populated relevant to the attachments?
  }

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    return new Message(
      body,
      this.id,
      RequestCredential.type,
      this.from,
      this.to,
      this.attachments,
      this.thid
    );
  }

  static fromMessage(msg: Message): RequestCredential {
    if (msg.piuri !== ProtocolIds.RequestCredential || isNil(msg.from)) {
      throw new AgentError.InvalidRequestCredentialMessageError(
        "Invalid request credential message error."
      );
    }

    return new RequestCredential(
      msg.body as any,
      msg.attachments,
      msg.from,
      msg.to,
      msg.thid,
      msg.id
    );
  }
}
