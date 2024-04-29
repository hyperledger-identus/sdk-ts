import { AnonCredsCredential } from "../../pollux/models/AnonCredsVerifiableCredential";
import { PresentationRequest } from "../../pollux/models/PresentationRequest";
import { JWTCredential } from "../../pollux/models/JWTVerifiableCredential";
import { CredentialType, DID, LinkSecret, Message, PresentationClaims, PresentationDefinitionRequest, PresentationOptions, PresentationSubmission, PrivateKey, PublicKey } from "../models";
import { Anoncreds } from "../models/Anoncreds";
import { Credential, CredentialRequestOptions } from "../models/Credential";

type CredentialRequestTuple<
  T1 = Anoncreds.CredentialRequest,
  T2 = Anoncreds.CredentialRequestMeta
> = [T1, T2];




/**
 * Pollux
 * handle Credential related tasks
 */
export interface Pollux {
  parseCredential: (
    credentialBuffer: Uint8Array,
    options?: { type: CredentialType;[name: string]: any; }
  ) => Promise<Credential>;
  processJWTCredential(
    offer: Message,
    options: CredentialRequestOptions
  ): Promise<string>;
  processAnonCredsCredential(
    offer: Message,
    options: CredentialRequestOptions
  ): Promise<CredentialRequestTuple>;
  extractCredentialFormatFromMessage(message: Message): CredentialType;

  /**
   * Creates a PresentationDefinitionRequest object for oob Verifications
   * @param {CredentialType} type 
   * @param {ProofTypes} proofs 
   * @param {PresentationOptions} options 
   */
  createPresentationDefinitionRequest(
    type: CredentialType,
    claims: PresentationClaims,
    options: PresentationOptions
  ): Promise<PresentationDefinitionRequest>

  createPresentationSubmission(
    presentationDefinition: PresentationDefinitionRequest,
    credential: Credential,
    privateKey: PrivateKey
  ): Promise<PresentationSubmission>


  /**
   * Process a PresentationSubmission, resolve the issuer did and verify the credential and the holder signature
   * @param {PresentationSubmission} submission 
   * @param {Credential} credential 
   * @param options - object containing necessary metadata
   * @returns {boolean} true if the submission is valid or false if it is not
   */
  verifyPresentationSubmission(
    presentationSubmission: PresentationSubmission,
    options?: Pollux.verifyPresentationSubmission.options.JWT
  ): Promise<boolean>
  verifyPresentationSubmission(
    presentationSubmission: PresentationSubmission,
    options?: Pollux.verifyPresentationSubmission.options.Anoncreds
  ): Promise<boolean>
  verifyPresentationSubmission(
    presentationSubmission: PresentationSubmission,
    options?: Pollux.verifyPresentationSubmission.options.JWT | Pollux.verifyPresentationSubmission.options.Anoncreds
  ): Promise<boolean>
  /**
   * Process a PresentationRequest with Credential to create a Presentation.
   * 
   * @param {PresentationRequest} presentationRequest
   * @param {Credential} credential 
   * @param options - object containing necessary metadata
   * @returns dependent on the CredentialType 
   * @throws
   */
  createPresentationProof(presentationRequest: PresentationRequest, credential: AnonCredsCredential, options: Pollux.createPresentationProof.options.Anoncreds): Promise<Anoncreds.Presentation>;
  createPresentationProof(presentationRequest: PresentationRequest, credential: JWTCredential, options: Pollux.createPresentationProof.options.JWT): Promise<string>;
  createPresentationProof(presentationRequest: PresentationRequest, credential: Credential, options?: Record<string, any>): Promise<any>;
}

export namespace Pollux {
  export namespace verifyPresentationSubmission {
    export type options = options.Anoncreds | options.JWT;
    export namespace options {
      export interface Anoncreds {
        [name: string | number | symbol]: any
      }
      export interface JWT {
        presentationDefinitionRequest: PresentationDefinitionRequest,
      }
    }
  }
  export namespace createPresentationProof {
    export type options = options.Anoncreds | options.JWT;
    export namespace options {
      export interface Anoncreds {
        linkSecret: LinkSecret;
      }
      export interface JWT {
        did: DID;
        privateKey: PrivateKey;
      }
    }
  }
}
