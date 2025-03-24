import "./globals";

export { default as Apollo } from "./apollo/Apollo";
export { default as Castor } from "./castor/Castor";
export * as Domain from "./domain";
export { default as Mercury } from "./mercury/Mercury";
export * from "./pluto";

// alias DIDCommAgent as Agent to hide breaking changes
export { default as Agent } from "./edge-agent/didcomm/Agent";
// export { default as Agent } from "./edge-agent/Agent";
// export { default as DIDCommAgent } from "./edge-agent/didcomm/Agent";
export * from "./edge-agent/oidc";
export * from "./edge-agent/protocols/other/BasicMessage";
export { IssueCredential } from "./edge-agent/protocols/issueCredential/IssueCredential";
export { OfferCredential } from "./edge-agent/protocols/issueCredential/OfferCredential";
export { HandshakeRequest } from './edge-agent/protocols/connection/HandshakeRequest';
export { OutOfBandInvitation } from './edge-agent/protocols/invitation/v2/OutOfBandInvitation';
export * from "./edge-agent/protocols/proofPresentation";
export * from "./edge-agent/connections/ConnectionsManager";
export * from "./mercury/didcomm/Wrapper";
export { FetchApi as ApiImpl } from "./edge-agent/helpers/FetchApi";
export { ListenerKey } from "./edge-agent/types";
export * from './peer-did/PeerDID';
export type {
  EventCallback,
  MessageEventArg,
  ConnectionEventArg,
  RevokeEventArg
} from "./edge-agent/types";
export type { DIDCommProtocol } from "./mercury/DIDCommProtocol";
export { ProtocolType } from "./edge-agent/protocols/ProtocolTypes";
export * from "./apollo/utils/Secp256k1PrivateKey";
export * from "./apollo/utils/Secp256k1PublicKey";
export * from "./apollo/utils/Secp256k1KeyPair";
export * from "./apollo/utils/Ed25519PrivateKey";
export * from "./apollo/utils/Ed25519PublicKey";
export * from "./apollo/utils/Ed25519KeyPair";
export * from "./apollo/utils/X25519PrivateKey";
export * from "./apollo/utils/X25519PublicKey";
export * from "./apollo/utils/X25519KeyPair";

export { KeyProperties } from "./domain/models/KeyProperties";
export { JWTCredential, JWTVerifiableCredentialRecoveryId } from "./pollux/models/JWTVerifiableCredential";
export { SDJWTCredential, SDJWTVerifiableCredentialRecoveryId } from "./pollux/models/SDJWTVerifiableCredential";
export * from "./pollux/models/AnonCredsVerifiableCredential";

import AnoncredsPlugin from "./plugins/internal/anoncreds";
export const Plugins = {
  Anoncreds: AnoncredsPlugin
};

// Tasks
import { CreatePrismDID } from "./edge-agent/didFunctions";
export const Tasks = {
  CreatePrismDID
};
