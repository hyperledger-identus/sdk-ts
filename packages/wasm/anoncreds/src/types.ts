// Alias Anoncreds types
import type * as Anoncreds from "@hyperledger/identus-anoncreds-wasm";

export type Schema = Anoncreds.CredentialSchemaType;
export type { CredentialSchemaType } from "@hyperledger/identus-anoncreds-wasm";
export type CredentialDefinition = Anoncreds.CredentialDefinitionType;
export type { CredentialDefinitionType } from "@hyperledger/identus-anoncreds-wasm";
export type CredentialDefinitionPrivate = Anoncreds.CredentialDefinitionPrivateType;
export type { CredentialDefinitionPrivateType } from "@hyperledger/identus-anoncreds-wasm";
export type CredentialOffer = Anoncreds.CredentialOfferType;

export type { CredentialKeyCorrectnessProof } from "@hyperledger/identus-anoncreds-wasm";
export type { CredentialKeyCorrectnessProofType } from "@hyperledger/identus-anoncreds-wasm";
export type { CredentialRequestMetadata } from "@hyperledger/identus-anoncreds-wasm";
export type { CredentialRequestMetadataType } from "@hyperledger/identus-anoncreds-wasm";

export type { CredentialOfferType } from "@hyperledger/identus-anoncreds-wasm";
export type CredentialRequest = Anoncreds.CredentialRequestType;
export type { CredentialRequestType } from "@hyperledger/identus-anoncreds-wasm";
export type CredentialMetadata = Anoncreds.CredentialRequestMetadataType;

export type PresentationRequest = Anoncreds.PresentationRequestType;
export type { PresentationRequestType } from "@hyperledger/identus-anoncreds-wasm";
export type Presentation = Anoncreds.PresentationType;
export type { PresentationType } from "@hyperledger/identus-anoncreds-wasm";

export type { CredentialType, RequestedAttributes } from "@hyperledger/identus-anoncreds-wasm";

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
