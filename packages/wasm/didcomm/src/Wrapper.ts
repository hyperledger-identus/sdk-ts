import type * as DIDComm from "@hyperledger/identus-didcomm-wasm";
// @ts-ignore
import wasmBuffer from "@hyperledger/identus-didcomm-wasm/identus-didcomm_bg.wasm";

import { Message, type AttachmentData as DomainAttachmentData, type DID, type AttachmentDescriptor } from "@hyperledger/identus-domain";
import { DIDCommDIDResolver } from "./DIDResolver";
import { DIDCommSecretsResolver } from "./SecretsResolver";

/**
 * DIDComm protocol IDs that require return_route
 */
const ReturnRouteProtocols = [
  "https://didcomm.org/coordinate-mediation/2.0/mediate-request",
  "https://didcomm.org/messagepickup/3.0/messages-received",
  "https://didcomm.org/messagepickup/3.0/delivery-request",
  "https://didcomm.org/messagepickup/3.0/live-delivery-change",
] as const;

export interface DIDCommProtocol {
  packEncrypted(
    message: Message,
    to: DID,
    from?: DID
  ): Promise<string>;

  unpack(message: string): Promise<Message>;
}

export class DIDCommWrapper implements DIDCommProtocol {
  public static didcomm: typeof import("@hyperledger/identus-didcomm-wasm");
  private readonly didResolver: DIDComm.DIDResolver;
  private readonly secretsResolver: DIDComm.SecretsResolver;

  constructor(
    readonly apollo: import("@hyperledger/identus-domain").Apollo,
    readonly castor: import("@hyperledger/identus-domain").Castor,
    readonly pluto: import("@hyperledger/identus-domain").Pluto
  ) {
    this.didResolver = new DIDCommDIDResolver(castor);
    this.secretsResolver = new DIDCommSecretsResolver(apollo, castor, pluto);
  }

  public static async getDIDComm() {
    this.didcomm ??= await import("@hyperledger/identus-didcomm-wasm").then(async module => {
      const wasmInstance = module.initSync({ module: wasmBuffer });
      await module.default(wasmInstance);
      return module;
    });
    return this.didcomm;
  }

  private doesRequireReturnRoute(type: string) {
    return (ReturnRouteProtocols as readonly string[]).includes(type);
  }

  async packEncrypted(
    message: Message,
    toDid: DID,
    fromDid?: DID
  ): Promise<string> {
    const { isObject } = await import("@hyperledger/identus-domain")
    const didcomm = await DIDCommWrapper.getDIDComm();
    const to = toDid.toString();
    const body = isObject(message.body) ? message.body : {};
    const didcommMsg = new didcomm.Message({
      id: message.id,
      typ: "application/didcomm-plain+json",
      type: message.piuri,
      body: body,
      to: [to],
      from: fromDid ? fromDid.toString() : undefined,
      from_prior: message.fromPrior,
      attachments: await this.parseAttachments(message.attachments),
      created_time: Number(message.createdTime),
      thid: message.thid,
      pthid: message.pthid,
      ...(this.doesRequireReturnRoute(message.piuri)
        ? { return_route: "all" }
        : {}),
    });

    const [encryptedMsg] = await didcommMsg.pack_encrypted(
      to,
      fromDid ? fromDid.toString() : null,
      null,
      this.didResolver,
      this.secretsResolver,
      {
        enc_alg_anon: "Xc20pEcdhEsA256kw",
        enc_alg_auth: "A256cbcHs512Ecdh1puA256kw",
        forward: false,
        protect_sender: false,
      }
    );
    return encryptedMsg;
  }

  async unpack(message: string): Promise<Message> {
    const { Message, DID } = await import("@hyperledger/identus-domain")
    const didcomm = await DIDCommWrapper.getDIDComm();
    const [didcommMsg] = await didcomm.Message.unpack(
      message,
      this.didResolver,
      this.secretsResolver,
      {
        expect_decrypt_by_all_keys: false,
        unwrap_re_wrapping_forward: false,
      }
    );

    const msgObj = didcommMsg.as_value();
    const toString = msgObj.to?.at(0);

    const attachment = await this.parseAttachmentsToDomain(msgObj.attachments ?? [])
    const domainMessage = new Message(
      msgObj.body,
      msgObj.id,
      msgObj.type,
      typeof msgObj.from === "string"
        ? DID.fromString(msgObj.from)
        : undefined,
      typeof toString === "string"
        ? DID.fromString(toString)
        : undefined,
      attachment,
      msgObj.thid,
      msgObj["extraHeaders"],
      msgObj.created_time,
      msgObj.expires_time,
      [],
      undefined,
      msgObj.from_prior,
      msgObj.pthid
    );

    return domainMessage;
  }

  private async parseAttachmentsToDomain(
    attachments: DIDComm.Attachment[]
  ): Promise<AttachmentDescriptor[]> {
    const results = await Promise.allSettled(
      (attachments ?? []).map(x => this.parseAttachmentToDomain(x))
    );
    return results
      .filter((r): r is PromiseFulfilledResult<AttachmentDescriptor> => r.status === "fulfilled")
      .map(r => r.value);
  }

  private async parseAttachmentToDomain(attachment: DIDComm.Attachment) {
    const { MercuryError, AttachmentDescriptor } = await import("@hyperledger/identus-domain")
    if (typeof attachment.id !== "string" || attachment.id.length === 0)
      throw new MercuryError.MessageAttachmentWithoutIDError();

    const attachmentData = await this.parseAttachmentDataToDomain(attachment.data)
    return new AttachmentDescriptor(
      attachmentData,
      attachment.media_type,
      attachment.id,
      attachment.filename?.split("/"),
      attachment.format,
      attachment.lastmod_time?.toString(),
      attachment.byte_count,
      attachment.description,
    );
  }

  private async parseAttachmentDataToDomain(
    data: DIDComm.AttachmentData
  ): Promise<DomainAttachmentData> {
    if ("base64" in data
      || "json" in data
      || "links" in data
    ) {
      return data;
    }
    const { MercuryError } = await import("@hyperledger/identus-domain")
    throw new MercuryError.UnknownAttachmentDataError();
  }

  private async parseAttachments(
    attachments?: AttachmentDescriptor[]
  ): Promise<DIDComm.Attachment[] | undefined> {
    if (!attachments) return undefined;
    const results = await Promise.allSettled(
      attachments.map(x => this.parseAttachment(x))
    );
    return results
      .filter((r): r is PromiseFulfilledResult<DIDComm.Attachment> => r.status === "fulfilled")
      .map(r => r.value);
  }

  private async parseAttachment(attachment: AttachmentDescriptor): Promise<DIDComm.Attachment> {
    const data = await this.parseAttachmentData(attachment.data)
    return {
      data,
      id: attachment.id,
      byte_count: attachment.byteCount ?? undefined,
      description: attachment.description ?? undefined,
      filename: attachment.filename?.join("/"),
      format: attachment.format ?? undefined,
      lastmod_time:
        typeof attachment.lastModTime === "string"
          ? Number(attachment.lastModTime)
          : undefined,
      media_type: attachment.mediaType ?? undefined,
    };
  }

  private async parseAttachmentData(data: DomainAttachmentData): Promise<DIDComm.AttachmentData> {
    const { MercuryError } = await import("@hyperledger/identus-domain");

    if ("base64" in data) {
      const parsed: DIDComm.Base64AttachmentData = {
        base64: data.base64,
        jws: "jws" in data ? data.jws.signature : undefined,
      };

      return parsed;
    }

    if ("json" in data) {
      const parsed: DIDComm.JsonAttachmentData = {
        json: typeof data.json === "string" ?
          JSON.parse(data.json) :
          data.json,
      };

      return parsed;
    }

    if ("links" in data) {
      const parsed: DIDComm.LinksAttachmentData = {
        hash: data.hash,
        links: data.links,
      };

      return parsed;
    }

    throw new MercuryError.UnknownAttachmentDataError();
  }
}
