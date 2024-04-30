import { uuid } from "@stablelib/uuid";

import { Castor } from "../domain/buildingBlocks/Castor";
import { Pollux as IPollux } from "../domain/buildingBlocks/Pollux";
import { base64 } from "multiformats/bases/base64";
import { AnoncredsLoader } from "./AnoncredsLoader";

import {
  AttachmentDescriptor,
  CredentialRequestOptions,
  CredentialType,
  Message,
  AttachmentBase64,
  Api,
  PolluxError,
  Credential,
  PresentationDefinitionRequest,
  InputConstraints,
  InputField,
  InputLimitDisclosure,
  InputDescriptor,
  PrivateKey,
  PresentationSubmission,
  DescriptorItem,
  CastorError,
  DefinitionFormat,
  PresentationClaims,
  DID,
  DescriptorItemFormat,
  JWTVerifiablePresentationProperties,
  JWTPresentationPayload,
  AttachmentFormats,
  PresentationOptions,
} from "../domain";

import { AnonCredsCredential } from "./models/AnonCredsVerifiableCredential";
import { JWTCredential } from "./models/JWTVerifiableCredential";
import { Anoncreds } from "../domain/models/Anoncreds";
import { ApiImpl } from "../edge-agent/helpers/ApiImpl";
import { PresentationRequest } from "./models/PresentationRequest";
import { Secp256k1PrivateKey } from "../apollo/utils/Secp256k1PrivateKey";
import { DescriptorPath } from "./utils/DescriptorPath";
import { JWT } from "./utils/JWT";
import { InvalidVerifyCredentialError, InvalidVerifyFormatError } from "../domain/models/errors/Pollux";

/**
 * Implementation of Pollux
 *
 * @export
 * @class Pollux
 * @typedef {Pollux}
 */
export default class Pollux implements IPollux {
  private _anoncreds: AnoncredsLoader | undefined;

  constructor(
    private castor: Castor,
    private api: Api = new ApiImpl(),
    private jwt = new JWT(castor)
  ) { }

  async createPresentationSubmission(
    presentationDefinitionRequest: PresentationDefinitionRequest,
    credential: Credential,
    privateKey: PrivateKey
  ): Promise<PresentationSubmission> {
    if (credential instanceof JWTCredential) {
      if (!(privateKey instanceof Secp256k1PrivateKey)) {
        throw new CastorError.InvalidKeyError()
      }
      if (!presentationDefinitionRequest || !presentationDefinitionRequest.options || !presentationDefinitionRequest.presentation_definition) {
        throw new PolluxError.InvalidPresentationError()
      }
      const { presentation_definition, options: { challenge, domain } } = presentationDefinitionRequest;

      const descriptorItems: DescriptorItem[] = presentation_definition.input_descriptors.map(
        (inputDescriptor) => {
          if (inputDescriptor.format && (!inputDescriptor.format.jwt || !inputDescriptor.format.jwt.alg)) {
            throw new PolluxError.InvalidDescriptorFormatError()
          }
          return {
            id: inputDescriptor.id,
            format: DescriptorItemFormat.JWT_VP,
            path: "$.verifiablePresentation[0]",
            path_nested: {
              id: inputDescriptor.id,
              format: DescriptorItemFormat.JWT_VC,
              path: "$.vp.verifiableCredential[0]",
            }
          }
        });

      const subject = credential.subject;
      if (!privateKey.isSignable()) {
        throw new CastorError.InvalidKeyError("Cannot sign the proof challenge with this key.")
      }

      if (!credential.isProvable()) {
        throw new PolluxError.InvalidCredentialError("Cannot create proofs with this type of credential.")
      }

      const payload: JWTPresentationPayload = {
        iss: subject,
        aud: domain,
        nbf: Date.parse(new Date().toISOString()),
        nonce: challenge,
        vp: credential.presentation(),
      }

      const jws = await this.jwt.sign({
        issuerDID: DID.fromString(subject),
        privateKey,
        payload
      });

      const presentationSubmission: PresentationSubmission = {
        presentation_submission: {
          id: uuid(),
          definition_id: presentation_definition.id,
          descriptor_map: descriptorItems
        },
        verifiablePresentation: [
          jws
        ]
      }

      return presentationSubmission
    } else {
      throw new PolluxError.CredentialTypeNotSupported()
    }
  }

  parsePresentationSubmission(data: any): data is PresentationSubmission {
    //Validate object
    if (!data || (data && typeof data !== "object")) {
      return false;
    }

    const {
      presentation_submission,
    } = data;

    //Validate required fields
    if (!presentation_submission || (typeof presentation_submission !== "object")) {
      return false;
    }

    return true;
  }

  async createPresentationDefinitionRequest(
    type: CredentialType,
    presentationClaims: PresentationClaims,
    options: PresentationOptions
  ): Promise<PresentationDefinitionRequest> {
    if (type !== CredentialType.JWT) {
      throw new PolluxError.CredentialTypeNotSupported()
    }

    const jwtOptions = options.jwt;
    if (!jwtOptions) {
      throw new PolluxError.InvalidJWTPresentationDefinitionError("Required field options jwt is undefined")
    }

    if (!jwtOptions.jwtAlg) {
      throw new PolluxError.InvalidJWTPresentationDefinitionError("Presentation options didn't include jwtAlg, jwtVcAlg or jwtVpAlg, one of them is required.")
    }

    const paths = Object.keys(presentationClaims.claims);
    const constaints: InputConstraints = {
      fields: paths.map((path) => {
        const inputField: InputField = {
          path: [
            `$.vc.credentialSubject.${path}`,
            `$.credentialSubject.${path}`
          ],
          id: uuid(),
          optional: false,
          filter: presentationClaims.claims[path],
          name: path
        }
        return inputField
      }),
      limit_disclosure: InputLimitDisclosure.REQUIRED
    };

    if (presentationClaims.issuer) {
      constaints.fields.push({
        path: ["$.vc.issuer", "$.issuer", "$.iss", "$.vc.iss"],
        id: uuid(),
        optional: false,
        name: "issuer",
        filter: {
          type: "string",
          pattern: presentationClaims.issuer
        }
      })
    }

    const format: DefinitionFormat = {
      jwt: {
        alg: jwtOptions.jwtAlg ?? []
      },
    }

    const inputDescriptor: InputDescriptor = {
      id: uuid(),
      name: options.name,
      purpose: options.purpose,
      constraints: constaints,
      format: format
    }

    const presentationDefinitionRequest: PresentationDefinitionRequest = {
      presentation_definition: {
        id: uuid(),
        input_descriptors: [
          inputDescriptor
        ],
        format: format,
      },
      options: {
        challenge: options.challenge,
        domain: options.domain
      }
    }

    return presentationDefinitionRequest
  }

  private validJWTPresentationSubmissionOptions(options: any): options is IPollux.verifyPresentationSubmission.options.JWT {
    return options && options.presentationDefinitionRequest && typeof options.presentationDefinitionRequest === "object" ? true : false;
  }

  async verifyPresentationSubmission(
    presentationSubmission: any,
    options?: IPollux.verifyPresentationSubmission.options.JWT | IPollux.verifyPresentationSubmission.options.Anoncreds
  ): Promise<boolean> {
    const isValidPresentationSubmission = this.parsePresentationSubmission(presentationSubmission);
    if (!isValidPresentationSubmission) {
      throw new InvalidVerifyFormatError('PresentationSubmission format is invalid')
    }
    const validJWTPresentationSubmissionOptions = this.validJWTPresentationSubmissionOptions(options)
    if (!validJWTPresentationSubmissionOptions) {
      throw new InvalidVerifyFormatError('VerifyPresentationSubmission options are invalid')
    }

    const presentationDefinitionRequest = options.presentationDefinitionRequest;
    const inputDescriptors = presentationDefinitionRequest.presentation_definition.input_descriptors;
    const presentationSubmissionMapper = new DescriptorPath(presentationSubmission);
    const descriptorMaps = presentationSubmission.presentation_submission.descriptor_map;

    for (let descriptorItem of descriptorMaps) {
      if (descriptorItem.format !== DescriptorItemFormat.JWT_VP) {
        throw new InvalidVerifyFormatError(
          `Invalid Submission, ${descriptorItem.path} expected to have format ${DescriptorItemFormat.JWT_VP}`
        );
      }

      const jws = presentationSubmissionMapper.getValue(descriptorItem.path);
      if (!jws) {
        throw new InvalidVerifyFormatError(`Invalid Submission, ${descriptorItem.path} not found in submission`);
      }

      const presentation = JWTCredential.fromJWS(jws);
      const issuer = presentation.issuer;

      const presentationDefinitionOptions = presentationDefinitionRequest.options;
      const challenge = presentationDefinitionOptions.challenge;
      if (challenge && challenge !== '') {
        const nonce = presentation.getProperty(JWTVerifiablePresentationProperties.nonce);
        if (!nonce || typeof nonce !== "string") {
          throw new InvalidVerifyCredentialError(jws, `Invalid Submission, ${descriptorItem.path} does not contain a nonce in its payload with a valid signature for '${challenge}'`);
        }
        if (nonce !== challenge) {
          throw new InvalidVerifyCredentialError(jws, `Invalid Submission, ${descriptorItem.path} does not contain valid signature for '${challenge}'`);
        }
      }

      const credType = presentation.credentialType;
      const isPrismJWTCredentialType = credType === CredentialType.JWT;
      if (!isPrismJWTCredentialType) {
        throw new InvalidVerifyCredentialError(jws, "Invalid JWT Credential only prism/jwt is supported for jwt");
      }
      const credentialValid = await this.jwt.verify({
        issuerDID: issuer,
        jws
      });
      if (!credentialValid) {
        throw new InvalidVerifyCredentialError(jws, "Invalid Holder Presentation JWS Signature");
      }
      const verifiablePresentation = presentation;
      const nestedPath = descriptorItem.path_nested;
      if (!nestedPath) {
        throw new InvalidVerifyFormatError(
          `Invalid Submission, ${descriptorItem.path} of format ${DescriptorItemFormat.JWT_VP} must provide a nested_path with ${DescriptorItemFormat.JWT_VC} for JWT`
        );
      }
      const verifiableCredentialMapper = new DescriptorPath(verifiablePresentation)
      const vc = verifiableCredentialMapper.getValue(nestedPath.path)
      if (!vc) {
        throw new InvalidVerifyCredentialError(jws, "Invalid Verifiable Presentation payload, cannot find vc");
      }

      const verifiableCredential = JWTCredential.fromJWS(vc);
      if (verifiableCredential.subject !== issuer) {
        throw new InvalidVerifyCredentialError(vc, "Invalid Verifiable Presentation payload, the credential has been issued to another holder");
      }

      const verifiableCredentialValid = await this.jwt.verify({
        holderDID: verifiableCredential.subject ? DID.fromString(verifiableCredential.subject) : undefined,
        issuerDID: verifiableCredential.issuer,
        jws: verifiableCredential.id
      });
      if (!verifiableCredentialValid) {
        throw new InvalidVerifyCredentialError(vc, "Invalid Presentation Credential JWS Signature");
      }
      const verifiableCredentialPropsMapper = new DescriptorPath(verifiableCredential);
      const inputDescriptor = inputDescriptors.find((inputDescriptor) => inputDescriptor.id === descriptorItem.id);
      if (inputDescriptor) {
        const constraints = inputDescriptor.constraints;
        const fields = constraints.fields;
        if (constraints.limit_disclosure === InputLimitDisclosure.REQUIRED) {
          for (let field of fields) {
            const paths = [
              ...field.path
            ];
            const optional = field.optional;
            if (!optional) {
              let validClaim = false;
              let reason = null;
              while (paths.length && !validClaim) {
                const [path] = paths.splice(0, 1);
                if (path) {
                  const fieldInVC = verifiableCredentialPropsMapper.getValue(path);
                  if (field.filter && fieldInVC !== null) {
                    const filter = field.filter;
                    if (filter.pattern) {
                      const pattern = new RegExp(filter.pattern);
                      if (pattern.test(fieldInVC) || fieldInVC === filter.pattern) {
                        validClaim = true
                      } else {
                        reason = `Expected the ${path} field to be "${filter.pattern}" but got "${fieldInVC}"`
                      }
                    } else if (filter.enum) {
                      if (filter.enum.includes(fieldInVC)) {
                        validClaim = true
                      } else {
                        reason = `Expected the ${path} field to be one of ${filter.enum.join(", ")} but got ${fieldInVC}`
                      }
                      validClaim = filter.enum.includes(fieldInVC)
                    } else if (filter.const && fieldInVC === filter.pattern) {
                      if (fieldInVC === filter.const) {
                        validClaim = true
                      } else {
                        reason = `Expected the ${path} field to be "${filter.const}" but got "${fieldInVC}"`
                      }
                      validClaim = fieldInVC === filter.const;
                    }
                  } else {
                    reason = `Expected one of the paths ${field.path.join(", ")} to exist.`
                  }
                } else {
                  reason = `Expected one of the paths ${field.path.join(", ")} to exist.`
                }
              }
              if (!validClaim) {
                throw new InvalidVerifyCredentialError(vc, `Invalid Claim: ${reason || 'paths are not found or have unexpected value'}`);
              }
            }
          }
        }
      }
      return true;

    }

    return false;
  }

  async start() {
    this._anoncreds = await AnoncredsLoader.getInstance();
  }

  // TODO: should anoncreds hidden through abstraction
  get anoncreds() {
    if (this._anoncreds === undefined) {
      throw new Error("Pollux - Anoncreds not loaded");
    }

    return this._anoncreds;
  }

  // TODO: does this function belong in Pollux, can we move to Message?
  public extractCredentialFormatFromMessage(message: Message) {
    const [attachment] = message.attachments;
    if (!attachment) {
      throw new Error("Required Attachment");
    }

    if (
      attachment.format === AttachmentFormats.ANONCREDS_PROOF_REQUEST ||
      attachment.format === AttachmentFormats.ANONCREDS_OFFER ||
      attachment.format === AttachmentFormats.ANONCREDS_ISSUE ||
      attachment.format === AttachmentFormats.ANONCREDS_REQUEST
    ) {
      return CredentialType.AnonCreds;
    }

    if (attachment.format === CredentialType.JWT) {
      return CredentialType.JWT;
    }

    return CredentialType.Unknown;
  }

  async processJWTCredential(
    offer: Message,
    options: CredentialRequestOptions = {}
  ) {
    const { did, keyPair } = options;
    if (!did) {
      throw new Error("Required did ");
    }

    if (!keyPair) {
      throw new Error("Required keyPair ");
    }

    const domainChallenge = this.extractDomainChallenge(offer.attachments);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const challenge = domainChallenge.challenge!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const domain = domainChallenge.domain!;

    const signedJWT = await this.jwt.sign({
      issuerDID: did,
      privateKey: keyPair.privateKey,
      payload: {
        aud: domain,
        nonce: challenge,
        vp: {
          "@context": ["https://www.w3.org/2018/presentations/v1"],
          type: ["VerifiablePresentation"],
        },
      }
    });

    return signedJWT;
  }

  /**
   * handle the retrieval of a Credential Definition
   * 
   * @param credentialDefinitionId 
   * @returns 
   */
  private async fetchCredentialDefinition(
    credentialDefinitionId: string
  ): Promise<Anoncreds.CredentialDefinition> {
    const response = await this.api.request<Anoncreds.CredentialDefinition>(
      "get",
      credentialDefinitionId,
      new Map(),
      new Map(),
      null
    );

    return response.body;
  }

  /**
   * handle the retrieval of a Schema definition
   * 
   * @param {string} schemaURI - URI used to retrieve the Schema definition
   * @returns 
   */
  private async fetchSchema(schemaURI: string): Promise<any> {
    const response = await this.api.request<Anoncreds.Schema>(
      "get",
      schemaURI,
      new Map(),
      new Map(),
      null
    );

    return response.body;
  }

  private extractAttachment(body: any, attachments: AttachmentDescriptor[]) {
    const [attachment] = attachments;
    if (!attachment) {
      throw new Error("Attachment not found");
    }

    return JSON.parse(
      Buffer.from(
        base64.baseDecode((attachment.data as AttachmentBase64).base64)
      ).toString()
    );
  }

  private isAnonCredsBody(body: any): body is Anoncreds.CredentialOffer {
    const {
      cred_def_id,
      schema_id,
      key_correctness_proof,
      nonce,
      method_name,
    } = body;

    if (!cred_def_id || typeof cred_def_id !== "string") return false;
    if (!schema_id || typeof schema_id !== "string") return false;
    if (!nonce || typeof nonce !== "string") return false;
    if (!key_correctness_proof) return false;

    const { c, xr_cap, xz_cap } = key_correctness_proof;

    if (!c || !xr_cap || !xz_cap) return false;
    if (
      typeof c !== "string" ||
      !Array.isArray(xr_cap) ||
      typeof xz_cap !== "string"
    )
      return false;

    if (
      xr_cap.length <= 0 ||
      xr_cap.find(
        ([first, second]) =>
          typeof first !== "string" || typeof second !== "string"
      )
    )
      return false;

    if (method_name && typeof method_name !== "string") return false;

    return true;
  }

  async processAnonCredsCredential(
    offer: Message,
    options: CredentialRequestOptions
  ) {
    const linkSecret = options.linkSecret;
    if (!linkSecret) {
      throw new Error("Link Secret is not available.");
    }

    const body = JSON.parse(offer.body);

    const credentialOfferBody = this.extractAttachment(body, offer.attachments);

    const isAnonCredsBody = this.isAnonCredsBody(credentialOfferBody);
    if (!isAnonCredsBody) {
      throw new Error("Invalid AnonCreds offer body");
    }

    const { cred_def_id } = credentialOfferBody;
    const credentialDefinition =
      await this.fetchCredentialDefinition(cred_def_id);

    return this.anoncreds.createCredentialRequest(
      credentialOfferBody,
      credentialDefinition,
      linkSecret.secret,
      linkSecret.name
    );
  }

  async parseCredential(
    credentialBuffer: Uint8Array,
    options?: {
      type: CredentialType;
      linkSecret?: string;
      credentialMetadata?: Anoncreds.CredentialRequestMeta;
      [name: string]: any;
    }
  ) {
    const credentialType = options?.type || CredentialType.Unknown;
    const credentialString = Buffer.from(credentialBuffer).toString();

    if (credentialType === CredentialType.JWT) {
      return JWTCredential.fromJWS(credentialString);
    }

    if (credentialType === CredentialType.AnonCreds) {
      if (options?.linkSecret === undefined) {
        throw new Error("LinkSecret is required");
      }
      if (options?.credentialMetadata === undefined) {
        throw new Error("Invalid credential metadata");
      }

      const linkSecret = options.linkSecret;
      const credentialMetadata = options.credentialMetadata;

      const credentialIssued = JSON.parse(
        credentialString
      ) as Anoncreds.CredentialIssued;

      const credentialDefinition = await this.fetchCredentialDefinition(
        credentialIssued.cred_def_id
      );

      const credential = this.anoncreds.processCredential(
        credentialDefinition,
        credentialIssued,
        credentialMetadata,
        linkSecret
      );

      return new AnonCredsCredential(credential);
    }

    throw new Error("Not implemented");
  }

  private extractDomainChallenge(attachments: AttachmentDescriptor[]) {
    return attachments.reduce(
      (_, attachment: any) => ({
        challenge: attachment?.data?.data?.options?.challenge,
        domain: attachment?.data?.data?.options?.domain,
      }),
      { challenge: undefined, domain: undefined } as {
        challenge?: string;
        domain?: string;
      }
    );
  }

  createPresentationProof(presentationRequest: PresentationRequest, credential: AnonCredsCredential, options: IPollux.createPresentationProof.options.Anoncreds): Promise<Anoncreds.Presentation>;
  createPresentationProof(presentationRequest: PresentationRequest, credential: JWTCredential, options: IPollux.createPresentationProof.options.JWT): Promise<string>;
  async createPresentationProof(
    presentationRequest: PresentationRequest,
    credential: Credential,
    options: IPollux.createPresentationProof.options
  ) {
    if (
      credential instanceof AnonCredsCredential
      && presentationRequest.isType(AttachmentFormats.AnonCreds)
      && "linkSecret" in options
    ) {
      const schema = await this.fetchSchema(credential.schemaId);
      const schemas = { [credential.schemaId]: schema };
      const credentialDefinition = await this.fetchCredentialDefinition(credential.credentialDefinitionId);
      const credDefs = { [credential.credentialDefinitionId]: credentialDefinition };

      const result = this.anoncreds.createPresentation(
        presentationRequest.toJSON(),
        schemas,
        credDefs,
        credential.toJSON(),
        options.linkSecret.secret
      );

      return result;
    }

    if (
      credential instanceof JWTCredential
      && presentationRequest.isType(AttachmentFormats.JWT)
      && "did" in options
      && "privateKey" in options
    ) {
      const presReqJson = presentationRequest.toJSON();
      const signedJWT = await this.jwt.sign({
        issuerDID: options.did,
        privateKey: options.privateKey,
        payload: {
          iss: options.did.toString(),
          aud: presReqJson.options.domain,
          nonce: presReqJson.options.challenge,
          vp: credential.presentation()
        }
      });

      return signedJWT;
    }

    throw new PolluxError.InvalidPresentationProofArgs();
  }
}
