import "./globals";

// modules
export { default as Agent } from "./edge-agent/Agent";
export { default as Apollo } from "./apollo/Apollo";
export { default as Castor } from "./castor/Castor";
export { default as Mercury, type DIDCommProtocol, DIDCommWrapper } from "./mercury";
export * from "./pluto";
export * as Domain from "./domain";
export * as Utils from "./utils";

// modules 2
export { FetchApi as ApiImpl } from "./edge-agent/helpers/FetchApi";
export * from "./edge-agent/connections";
export * from "./edge-agent/connections/ConnectionsManager";
export * from "./edge-agent/connections/didcomm/DIDCommConnection";
export { ListenerKey } from "./edge-agent/types";
export type {
  ConnectionEventArg,
  EventCallback,
  MessageEventArg,
  RevokeEventArg
} from "./edge-agent/types";

export * from './peer-did/PeerDID';

// didcomm messages
export { ProtocolType } from "./edge-agent/protocols/ProtocolTypes";
export { IssueCredential } from "./edge-agent/protocols/issueCredential/IssueCredential";
export { OfferCredential } from "./edge-agent/protocols/issueCredential/OfferCredential";
export { HandshakeRequest } from './edge-agent/protocols/connection/HandshakeRequest';
export { OutOfBandInvitation } from './edge-agent/protocols/invitation/v2/OutOfBandInvitation';
export * from "./edge-agent/protocols/proofPresentation";
export * from "./edge-agent/protocols/other/BasicMessage";

// keys
export { KeyProperties } from "./domain/models/KeyProperties";
export * from "./apollo/utils/Secp256k1PrivateKey";
export * from "./apollo/utils/Secp256k1PublicKey";
export * from "./apollo/utils/Secp256k1KeyPair";
export * from "./apollo/utils/Ed25519PrivateKey";
export * from "./apollo/utils/Ed25519PublicKey";
export * from "./apollo/utils/Ed25519KeyPair";
export * from "./apollo/utils/X25519PrivateKey";
export * from "./apollo/utils/X25519PublicKey";
export * from "./apollo/utils/X25519KeyPair";

// credentials
export { JWTCredential, JWTVerifiableCredentialRecoveryId } from "./pollux/models/JWTVerifiableCredential";
export { SDJWTCredential, SDJWTVerifiableCredentialRecoveryId } from "./pollux/models/SDJWTVerifiableCredential";
export * from "./pollux/models/AnonCredsVerifiableCredential";

// plugins
import AnoncredsPlugin from "./plugins/internal/anoncreds";
export const Plugins = {
  Anoncreds: AnoncredsPlugin,
};

// Tasks
import { CreatePrismDID } from "./edge-agent/didFunctions";
export const Tasks = {
  CreatePrismDID
};
