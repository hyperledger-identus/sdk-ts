import { uuid } from "@stablelib/uuid";
import { base64, base64url } from "multiformats/bases/base64";

export interface AttachmentHeader {
  children: string;
}

export interface AttachmentJws {
  header: AttachmentHeader;
  protectedStr: string;
  signature: string;
}

export interface AttachmentJwsData {
  base64: string;
  jws: AttachmentJws;
}

export interface AttachmentBase64 {
  base64: string;
}

export interface AttachmentLinkData {
  links: string[];
  hash: string;
}

export type AttachmentJsonData = {
  json: any;
};

const decodeBase64 = (data: string) => {
  try {
    return base64url.baseDecode(data);
  } catch {
    return base64.baseDecode(data);
  }
};

export type AttachmentData =
  | AttachmentJsonData
  | AttachmentLinkData
  | AttachmentBase64
  | AttachmentJwsData
  | AttachmentJws
  | AttachmentHeader;

const isBase64 = (data: AttachmentData): data is AttachmentBase64 => {
  return "base64" in data;
};

const isJson = (data: AttachmentData): data is AttachmentJsonData => {
  // data.data handled for backwards compatibility
  return "json" in data || "data" in data;
};

export class AttachmentDescriptor {
  constructor(
    public readonly data: AttachmentData,
    public readonly mediaType?: string,
    public readonly id: string = uuid(),
    public readonly filename?: Array<string>,
    public readonly format?: string,
    public readonly lastModTime?: string,
    public readonly byteCount?: number,
    public readonly description?: string
  ) { }

  get payload() {
    return AttachmentDescriptor.extractJSON(this);
  }

  /**
   * Get the presumed JSON from the attachment
   *
   * @param {AttachmentDescriptor} attachment
   * @returns
   */
  static extractJSON(attachment: AttachmentDescriptor) {
    if (isBase64(attachment.data)) {
      const decoded = Buffer.from(decodeBase64(attachment.data.base64)).toString();
      try {
        return JSON.parse(decoded);
      } catch (err) {
        return decoded;
      }
    }

    if (isJson(attachment.data)) {
      // data.data handled for backwards compatibility
      const decoded = attachment.data.json ?? (attachment.data as any).data;

      return typeof decoded === "object"
        ? decoded
        : JSON.parse(decoded);
    }

    // TODO better error
    throw new Error("Unhandled attachment");
  }

  static build<T>(
    payload: T,
    id: string = uuid(),
    mediaType = "application/json",
    filename?: Array<string>,
    format?: string,
    lastModTime?: string,
    byteCount?: number,
    description?: string

  ): AttachmentDescriptor {
    if (typeof payload === "string") {
      const encoded = base64url.baseEncode(Uint8Array.from(Buffer.from(payload)));
      const attachment: AttachmentBase64 = {
        base64: encoded,
      };
      return new AttachmentDescriptor(
        attachment,
        mediaType,
        id,
        filename,
        format,
        lastModTime,
        byteCount,
        description
      );
    }
    const attachment = payload as AttachmentJsonData;
    return new AttachmentDescriptor(
      attachment,
      mediaType,
      id,
      filename,
      format,
      lastModTime,
      byteCount,
      description
    );
  }
}
