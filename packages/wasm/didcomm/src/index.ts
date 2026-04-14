export { DIDCommWrapper } from "./Wrapper";
export type { DIDCommProtocol } from "./Wrapper";

// Re-export WASM types for downstream consumers
export type {
  DIDResolver,
  DIDDoc,
  SecretsResolver,
  Secret,
  SecretType,
  Service,
  ServiceKind,
  VerificationMethod,
  VerificationMethodType,
  DIDCommMessagingService,
  PackEncryptedOptions,
  PackEncryptedMetadata,
  MessagingServiceMetadata,
  UnpackOptions,
  UnpackMetadata,
  PackSignedMetadata,
  IFromPrior,
  IMessage,
  IParsedForward,
  Attachment,
  AttachmentData,
  Base64AttachmentData,
  JsonAttachmentData,
  LinksAttachmentData,
} from "@hyperledger/identus-didcomm-wasm";
