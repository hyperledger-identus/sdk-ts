// Alias Anoncreds types
import type * as Anoncreds from "@hyperledger/identus-anoncreds";

export type Schema = Anoncreds.CredentialSchemaType;
export type CredentialDefinition = Anoncreds.CredentialDefinitionType;

export type CredentialOffer = Anoncreds.CredentialOfferType;
export type CredentialRequest = Anoncreds.CredentialRequestType;
export type CredentialMetadata = Anoncreds.CredentialRequestMetadataType;

export type PresentationRequest = Anoncreds.PresentationRequestType;
export type Presentation = Anoncreds.PresentationType;


export type RequestedPredicates = Anoncreds.RequestedPredicates;

// ?? intermediate claims type
export interface Claims {
  attributes?: Anoncreds.RequestedAttributes;
  predicates?: Record<string, AnoncredsInputFieldFilter>;
}
export interface AnoncredsInputFieldFilter {
  type: string,
  name: string,
  $gt?: PredicateType,
  $gte?: PredicateType,
  $lt?: PredicateType,
  $lte?: PredicateType;
}
export type PredicateType = string | number;

export const CREDENTIAL_OFFER = "anoncreds/credential-offer@v1.0";
export const CREDENTIAL_REQUEST = "anoncreds/credential-request@v1.0";
export const CREDENTIAL_ISSUE = "anoncreds/credential@v1.0";
export const PRESENTATION_REQUEST = "anoncreds/proof-request@v1.0";
export const PRESENTATION = "anoncreds/proof@v1.0";
export enum AnonCredsCredentialProperties {
  iss = "iss",
  jti = "jti",
  sub = "sub",
  exp = "exp",
  schemaId = "schema_id",
  credentialDefinitionId = "cred_def_id",
  signature = "signature",
  signatureCorrectnessProof = "signature_correctness_proof",
  values = "values",
  revoked = "revoked"
}

