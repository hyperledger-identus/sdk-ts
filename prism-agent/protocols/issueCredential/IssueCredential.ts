import { uuid } from "@stablelib/uuid";
import {
  AttachmentBase64,
  AttachmentDescriptor,
  DID,
  Message,
} from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { ProtocolType } from "../ProtocolTypes";
import { CredentialFormat } from "./CredentialFormat";
import { CredentialHelpers } from "./CredentialHelpers";
import { RequestCredential } from "./RequestCredential";
import { base64url } from "multiformats/bases/base64";
class IssueCredentialBody {
  constructor(
    public goalCode?: string,
    public comment?: string,
    public replacementId?: string,
    public moreAvailable?: string,
    public formats: CredentialFormat[] = []
  ) {}
}

export class IssueCredential {
  public type = ProtocolType.DidcommIssueCredential;

  constructor(
    public body: IssueCredentialBody,
    public attachments: AttachmentDescriptor[],
    public from: DID,
    public to: DID,
    public thid?: string,
    public id: string = uuid()
  ) {}

  makeMessage(): Message {
    const body = JSON.stringify(this);
    return new Message(
      body,
      this.id,
      this.type,
      this.from,
      this.to,
      this.attachments,
      this.thid
    );
  }

  getCredentialStrings(): string[] {
    const initialValue: string[] = [];
    return this.attachments.reduce((attachments, attachment) => {
      if (attachment.data instanceof AttachmentBase64) {
        const base64UrlEncodedAttachment = base64url.baseEncode(
          Buffer.from(attachment.data.base64)
        );
        attachments.push(base64UrlEncodedAttachment);
      }
      return attachments;
    }, initialValue);
  }

  static fromMessage(fromMessage: Message): IssueCredential {
    if (
      fromMessage.piuri !== ProtocolType.DidcommOfferCredential ||
      !fromMessage.from ||
      !fromMessage.to
    ) {
      new AgentError.InvalidOfferCredentialMessageError(
        "Invalid offer credential message error."
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const fromDID = fromMessage.from!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const toDID = fromMessage.to!;
    const body = JSON.parse(fromMessage.body);
    const issueCredentialBody = createIssueCredentialBody(
      body.credentialPreview,
      body.formats,
      body.goalCode,
      body.replacementId,
      body.multipleAvailable
    );
    return new IssueCredential(
      issueCredentialBody,
      fromMessage.attachments,
      fromDID,
      toDID,
      fromMessage.thid,
      fromMessage.id
    );
  }

  static makeIssueFromRequestCredential(msg: Message): IssueCredential {
    const request = RequestCredential.fromMessage(msg);
    return new IssueCredential(
      createIssueCredentialBody(
        request.body.formats,
        request.body.goalCode,
        request.body.comment
      ),
      request.attachments,
      request.to,
      request.from,
      msg.id
    );
  }

  static build<T>(
    fromDID: DID,
    toDID: DID,
    thid?: string,
    credentials: Map<string, T> = new Map()
  ): IssueCredential {
    const { formats, attachments } =
      CredentialHelpers.parseCredentials(credentials);

    const issueCredentialBody = createIssueCredentialBody(formats);
    return new IssueCredential(
      issueCredentialBody,
      attachments,
      fromDID,
      toDID,
      thid
    );
  }
}

export function createIssueCredentialBody(
  formats: CredentialFormat[] = [],
  goalCode?: string,
  comment?: string,
  replacementId?: string,
  moreAvailable?: string
) {
  return new IssueCredentialBody(
    goalCode,
    comment,
    replacementId,
    moreAvailable,
    formats
  );
}
