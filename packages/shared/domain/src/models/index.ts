export * from "./Api";
export * from "./DID";
export * from "./DIDDocument";
export * from "./DIDPair";
export * from "./DIDResolver";
export * from "./DIDUrl";
export * from "./Errors";
export * from "./KeyPair";
export * from "./LinkSecret";
export * from "./Mediator";
export * from "./Message";
export * from "./MessageAttachment";
export * from "./PrismDID";
export * from "./keyManagement";
export * from "./KeyProperties";
export * from "./Seed";
export * from "./SeedWords";
export * from "./Signature";
export * from "./WordList";
export * from "./Credential";
export * from "./CredentialMetadata";
export * from "./derivation";
export * from "./revocation";
export * from "./recoveryIds";
export * as ECConfig from './ECConfig'
export type JsonString = string;

// Direct re-exports of error classes commonly imported by name
export { ValidationError } from "./errors/Common";
export { InvitationIsInvalidError } from "./errors/Agent";

