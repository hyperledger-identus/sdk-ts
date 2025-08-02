import { base64 } from "multiformats/bases/base64";
import * as Domain from "../../domain";
import { JsonObj, asJsonObj, expect, isObject, isString } from "../../utils";
import { Task } from "../../utils/tasks";
import { ParsePrismInvitation } from "./ParsePrismInvitation";
import { InvalidURLError, InvitationIsInvalidError } from "../../domain/models/errors/Agent";
import { ParseOOBInvitation } from "./ParseOOBInvitation";
import { InvitationType } from "../types";
import { AgentContext } from "../Context";
import { OEA } from "../../plugins/internal/oea/types";
import { ProtocolIds } from "../../plugins/internal/didcomm/types";

/**
 * Arguments for parsing an invitation
 */
interface Args {
  /** The invitation value to parse - can be a string, URL, or JSON object */
  value: string | URL | JsonObj;
}

/**
 * Task class for parsing different types of invitations.
 * 
 * This class attempts to parse a given invitation based on its type and handles
 * different encodings including URLs with query parameters, base64-encoded strings,
 * and plain JSON objects. It supports Prism onboarding invitations and out-of-band
 * (OOB) invitations.
 */
export class ParseInvitation extends Task<InvitationType, Args> {
  /**
   * Executes the invitation parsing task.
   * 
   * This method decodes the invitation value, determines its type based on the
   * `type` or `piuri` field, and delegates to the appropriate specialized parser.
   * 
   * @param ctx - The agent context for running sub-tasks
   * @returns A Promise that resolves to the parsed invitation of the appropriate type
   * @throws {Domain.AgentError.UnknownInvitationTypeError} When the invitation type is not supported
   */
  async run(ctx: AgentContext) {
    const json = this.decode();
    const type = json.type ?? json.piuri;

    switch (type) {
      case OEA.ProtocolIds.PrismOnboarding:
        return ctx.run(new ParsePrismInvitation({ value: json }));
      case ProtocolIds.OOBInvitation:
        return ctx.run(new ParseOOBInvitation({ value: json }));
    }

    throw new Domain.AgentError.UnknownInvitationTypeError();
  }

  /**
   * Decodes the invitation value based on its type.
   * 
   * This method handles different input formats:
   * - URL objects or strings with '_oob' query parameter
   * - Plain JSON objects (returned as-is)
   * - Base64-encoded strings
   * 
   * @returns The decoded JSON object
   * @throws {InvitationIsInvalidError} When the invitation cannot be decoded
   */
  private decode() {
    if (this.args.value instanceof URL) {
      return expect(this.tryDecodeUrl(this.args.value), InvitationIsInvalidError);
    }

    if (isObject(this.args.value)) {
      return this.args.value;
    }

    if (isString(this.args.value)) {
      return expect(
        this.tryDecodeUrl(this.args.value) ?? this.tryDecodeB64(this.args.value),
        InvitationIsInvalidError
      );
    }

    throw new InvitationIsInvalidError();
  }

  /**
   * Attempts to decode a URL by extracting the '_oob' query parameter.
   * 
   * @param value - The URL string or URL object to decode
   * @returns The decoded JSON object or null if decoding fails
   */
  private tryDecodeUrl(value: string | URL) {
    try {
      const url = new URL(value);
      const oob = expect(url.searchParams.get("_oob"), InvalidURLError);
      return this.tryDecodeB64(oob);
    }
    catch {
      return null;
    }
  }

  /**
   * Attempts to decode a base64-encoded string.
   * 
   * @param value - The base64-encoded string to decode
   * @returns The decoded JSON object or null if decoding fails
   */
  private tryDecodeB64(value: string) {
    try {
      const decoded = base64.baseDecode(value);
      const data = Buffer.from(decoded).toString();
      return asJsonObj(data);
    }
    catch {
      return null;
    }
  }
}
