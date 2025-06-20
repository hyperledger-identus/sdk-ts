import "./globals";

// modules
export { default as Agent } from "./edge-agent/Agent";
export { default as Apollo } from "./apollo/Apollo";
export { default as Castor } from "./castor/Castor";
export { default as Mercury, type DIDCommProtocol, DIDCommWrapper } from "./mercury";
export * from "./pluto";
export * from "./pluto/collections";
export * as Domain from "./domain";
export * as Utils from "./utils";

// modules 2
export { FetchApi as ApiImpl } from "./edge-agent/helpers/FetchApi";
export * from "./edge-agent/connections";
export * from "./edge-agent/connections/ConnectionsManager";
export * from "./plugins/internal/didcomm/connection/DIDCommConnection";
export { ListenerKey } from "./edge-agent/types";
export type {
  ConnectionEventArg,
  EventCallback,
  MessageEventArg,
  RevokeEventArg
} from "./edge-agent/types";

export * from './peer-did/PeerDID';

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


/// temporary workaround changing to plugins
/// continue exporting already exported 
/// all plugin related should be removed when transistion complete

export { ProtocolType } from "./edge-agent/types";

// didcomm messages
export { IssueCredential } from "./plugins/internal/didcomm/protocols/issueCredential/IssueCredential";
export { OfferCredential } from "./plugins/internal/didcomm/protocols/issueCredential/OfferCredential";
export { OutOfBandInvitation } from './plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation';
export * from "./plugins/internal/didcomm/protocols/other/BasicMessage";

// oea specifc messages
export * from "./plugins/internal/oea/protocols/Presentation";
export * from "./plugins/internal/oea/protocols/ProposePresentation";
export * from "./plugins/internal/oea/protocols/RequestPresentation";
export { HandshakeRequest } from './plugins/internal/oea/protocols/HandshakeRequest';

// plugins exported through /plugins/plugin_name

// Tasks
import { CreatePrismDID } from "./edge-agent/didFunctions";
import { PKInstance } from "./pollux/utils/jwt/PKInstance";
import { CreateOOBOffer } from './edge-agent/didcomm/CreateOOBOffer';
export const Tasks = {
  CreatePrismDID,
  PKInstance,
  CreateOOBOffer
};
