import { JsonObj, expect, Task } from "../../utils";
import { AgentContext } from "../Context";
import { Domain } from "../../exports";
import { SdJwtVcPayload, } from "@sd-jwt/sd-jwt-vc";
import type { DisclosureFrame } from '@sd-jwt/types';

/**
 * RunProtocol exists to bridge the gap between
 * the strong coupling to DIDComm messages and abstracting to Protocols
 * 
 * When the abstraction happens this should be removable
 */

export interface IArgs<T extends string, D extends JsonObj> {
  // generalized type of protocol
  type: T;
  // protocol identifier
  pid: string;
  // relevant protocol data
  data: D;
}
export interface Args_RequestCredentialJWT {
  issuerDID: Domain.DID,
  holderDID: Domain.DID,
  message: Domain.Message;
  format: Domain.CredentialType.JWT;
  claims: { name: string, value: string, type: string }[];
}

export interface Args_RequestCredentialSDJWT {
  issuerDID: Domain.DID,
  holderDID: Domain.DID,
  message: Domain.Message;
  format: Domain.CredentialType.SDJWT;
  claims: { name: string, value: string, type: string }[];
  disclosureFrame?: DisclosureFrame<SdJwtVcPayload>;
}

export type Args_RequestCredential = IArgs<"credential-request", Args_RequestCredentialJWT | Args_RequestCredentialSDJWT>;


export type Args_CredentialIssue = IArgs<"credential-issue", {
  data: any;
  thid?: string;
}>;
export type Args_CredentialOffer = IArgs<"credential-offer", {
  offer: any;
  thid?: string;
}>;
export type Args_PresentationRequest = IArgs<"presentation-request", {
  credential: Domain.Credential;
  presentationRequest: any;
}>;
export type Args_PresentationVerify = IArgs<"presentation-verify", {
  presentation: any;
  presentationRequest: any;
  thid?: string;
}>;
export type Args_RevocationCheck = IArgs<"revocation-check", { credential: Domain.Credential; }>;
export type Args_Message = IArgs<"message", { message: Domain.Message; }>;
export type Args_Unknown = IArgs<"unknown", JsonObj>;

export type Args =
  | Args_RequestCredential
  | Args_CredentialIssue
  | Args_CredentialOffer
  | Args_PresentationRequest
  | Args_PresentationVerify
  | Args_RevocationCheck
  | Args_Message
  | Args_Unknown;


/**
 * Find and execute a task registered by plugins for the given pid (protocol identifier)
 */
export class RunProtocol extends Task<any, Args> {
  async run(ctx: AgentContext) {
    const taskCtor = expect(
      ctx.Plugins.findProtocol(this.args.type, this.args.pid),
      `Protocol handler not found for ${this.args.pid} (${this.args.type})`
    );

    const task = new taskCtor(this.args.data);
    const result = await ctx.run(task);
    return result;
  }
}
