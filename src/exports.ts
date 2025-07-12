/** 
 * @packageDocumentation
 * 
 * @internal
 * 
 */
// Core Agent exports
export { default as Agent } from "./edge-agent/Agent";
export { AgentBackup } from "./edge-agent/Agent.Backup";
export type { BackupAgent, MasterKey, BackupExclude, BackupOptions } from "./edge-agent/Agent.Backup";
export { EventsManager } from "./edge-agent/Agent.MessageEvents";
export { AgentContext } from "./edge-agent/Context";
export { JobManager } from "./edge-agent/connections/JobManager";
export { CancellableTask } from "./edge-agent/helpers/Task";
export { PluginManager } from "./plugins/PluginManager";

// JWT utilities
export { JWT } from "./pollux/utils/jwt/JWT";
export { SDJWT } from "./pollux/utils/jwt/SDJWT";


export { default as Apollo } from "./apollo/Apollo";
export * from "./apollo/Apollo";
export { default as Castor } from "./castor/Castor";
export { default as Mercury, type DIDCommProtocol, DIDCommWrapper, ForwardMessage, type ForwardMessageBody } from "./mercury";

// Pluto exports
export * from "./pluto";
export * from "./pluto/collections";
export * from './pluto/models/Schema';
export * from './pluto/models';
export * from './pluto/repositories';

// Domain and utilities
export * as Domain from "./domain";
export * as Utils from "./utils";

// Plugin system
export { Plugin } from "./plugins/Plugin";
export { Plugins } from "./plugins/types";

// Protocols and types
export { Payload } from "./domain/protocols/Payload";
export type { Task } from "./edge-agent/helpers/Task";
export type { ExtraResolver } from "./castor/Castor";
export { FetchApi as ApiImpl } from "./edge-agent/helpers/FetchApi";

// Connections
export * from "./edge-agent/connections";
export * from "./edge-agent/connections/ConnectionsManager";
export { ListenerKey } from "./edge-agent/types";
export type {
  AgentOptions,
  ConnectionEventArg,
  EventCallback,
  EventCallbacks,
  MessageEventArg,
  RevokeEventArg,
  InvitationType
} from "./edge-agent/types";

// Peer DID
export * from './peer-did/PeerDID';

// Keys
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

// Credentials
export { JWTCredential, JWTVerifiableCredentialRecoveryId, JWT_VC_PROPS, JWT_VP_PROPS } from "./pollux/models/JWTVerifiableCredential";
export type { JWTCredentialPayload, JWTPresentationPayload } from "./pollux/models/JWTVerifiableCredential";
export { SDJWTCredential, SDJWTVerifiableCredentialRecoveryId, SDJWT_VP_PROPS } from "./pollux/models/SDJWTVerifiableCredential";
export * from "./pollux/models/AnonCredsVerifiableCredential";
export { ProtocolType } from "./edge-agent/types";
export type {
  IArgs,
  Args_RequestCredential,
  Args_RequestCredentialJWT,
  Args_RequestCredentialSDJWT,
  Args_CredentialIssue,
  Args_CredentialOffer,
  Args_PresentationRequest,
  Args_PresentationVerify,
  Args_RevocationCheck,
  Args_Message,
  Args_Unknown
} from "./edge-agent/helpers/RunProtocol";

// ============================================================================
// DEPRECATED EXPORTS
// ============================================================================

// Tasks
export {
  CreatePrismDID,
  type Args as CreatePrismDIDArgs
} from "./edge-agent/didFunctions";

export {
  CreateOOBOffer,
  type Args as CreateOOBOfferArgs
} from './edge-agent/didcomm/CreateOOBOffer';

export {
  RunProtocol,
  type Args as RunProtocolArgs
} from "./edge-agent/helpers/RunProtocol";

export {
  PKInstance,
  type Args as PKInstanceArgs
} from "./pollux/utils/jwt/PKInstance";

export {
  CreateOOBPresentationRequest,
  type Args as CreateOOBPresentationRequestArgs
} from "./edge-agent/didcomm/CreateOOBPresentationRequest";

/**
 * @deprecated Use {@link plugins/internal/didcomm.DIDCommConnection DIDCommConnection} instead from @hyperledger/identus-sdk/plugins/didcomm
 */
export {
  DIDCommConnection
} from "./plugins/internal/didcomm/connection/DIDCommConnection";

/**
 * @deprecated Use {@link plugins/internal/oea.HandshakeRequest HandshakeRequest} instead from @hyperledger/identus-sdk/plugins/oea
 */
export {
  HandshakeRequest,
} from './plugins/internal/oea/protocols/HandshakeRequest';

/**
 * @deprecated Use {@link plugins/internal/oea.HandshakeRequestBody HandshakeRequestBody} instead from @hyperledger/identus-sdk/plugins/oea
 */
export {
  type HandshakeRequestBody
} from './plugins/internal/oea/protocols/HandshakeRequest';

/**
 * @deprecated Use {@link plugins/internal/didcomm.CredentialFormat CredentialFormat} instead from @hyperledger/identus-sdk/plugins/didcomm
 */
export {
  type CredentialFormat
} from "./plugins/internal/didcomm/protocols/issueCredential/RequestCredential";

/**
 * @deprecated Use {@link plugins/internal/didcomm.RequestCredential RequestCredential} instead from @hyperledger/identus-sdk/plugins/didcomm
 */
export {
  RequestCredential
} from "./plugins/internal/didcomm/protocols/issueCredential/RequestCredential";

/**
 * @deprecated Use {@link plugins/internal/didcomm.IssueCredential IssueCredential} instead from @hyperledger/identus-sdk/plugins/didcomm
 */
export {
  IssueCredential,
} from "./plugins/internal/didcomm/protocols/issueCredential/IssueCredential";

/**
 * @deprecated Use {@link plugins/internal/didcomm.IssueCredentialBody IssueCredentialBody} instead from @hyperledger/identus-sdk/plugins/didcomm
 */
export {
  type IssueCredentialBody
} from "./plugins/internal/didcomm/protocols/issueCredential/IssueCredential";

/**
 * @deprecated Use {@link plugins/internal/didcomm.OfferCredential OfferCredential} instead from @hyperledger/identus-sdk/plugins/didcomm
 */
export {
  OfferCredential,
} from "./plugins/internal/didcomm/protocols/issueCredential/OfferCredential";

/**
 * @deprecated Use {@link plugins/internal/didcomm.OfferCredentialBody OfferCredentialBody} instead from @hyperledger/identus-sdk/plugins/didcomm
 */
export {
  type OfferCredentialBody
} from "./plugins/internal/didcomm/protocols/issueCredential/OfferCredential";

/**
 * @deprecated Use {@link plugins/internal/didcomm.OutOfBandInvitation OutOfBandInvitation} instead from @hyperledger/identus-sdk/plugins/didcomm
 */
export {
  OutOfBandInvitation,
} from './plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation';

/**
 * @deprecated Use {@link plugins/internal/didcomm.OutOfBandInvitationBody OutOfBandInvitationBody} instead from @hyperledger/identus-sdk/plugins/didcomm
 */
export {
  type OutOfBandInvitationBody
} from './plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation';

/**
 * @deprecated Use {@link plugins/internal/didcomm.BasicMessage BasicMessage} instead from @hyperledger/identus-sdk/plugins/didcomm
 */
export {
  BasicMessage,
} from "./plugins/internal/didcomm/protocols/other/BasicMessage";

/**
 * @deprecated Use {@link plugins/internal/didcomm.BasicMessageBody BasicMessageBody} instead from @hyperledger/identus-sdk/plugins/didcomm
 */
export {
  type BasicMessageBody
} from "./plugins/internal/didcomm/protocols/other/BasicMessage";

/**
 * @deprecated Use {@link plugins/internal/oea.Presentation Presentation} instead from @hyperledger/identus-sdk/plugins/oea
 */
export {
  Presentation,
} from "./plugins/internal/oea/protocols/Presentation";

/**
 * @deprecated Use {@link plugins/internal/oea.PresentationBody PresentationBody} instead from @hyperledger/identus-sdk/plugins/oea
 */
export {
  type PresentationBody
} from "./plugins/internal/oea/protocols/Presentation";

/**
 * @deprecated Use {@link plugins/internal/oea.ProposePresentation ProposePresentation} instead from @hyperledger/identus-sdk/plugins/oea
 */
export {
  ProposePresentation,
} from "./plugins/internal/oea/protocols/ProposePresentation";

/**
 * @deprecated Use {@link plugins/internal/oea.ProposePresentationBody ProposePresentationBody} instead from @hyperledger/identus-sdk/plugins/oea
 */
export {
  type ProposePresentationBody
} from "./plugins/internal/oea/protocols/ProposePresentation";

/**
 * @deprecated Use {@link plugins/internal/oea.RequestPresentation RequestPresentation} instead from @hyperledger/identus-sdk/plugins/oea
 */
export {
  RequestPresentation,
} from "./plugins/internal/oea/protocols/RequestPresentation";

/**
 * @deprecated Use {@link plugins/internal/oea.RequestPresentationBody RequestPresentationBody} instead from @hyperledger/identus-sdk/plugins/oea
 */
export {
  type RequestPresentationBody
} from "./plugins/internal/oea/protocols/RequestPresentation";

/**
 * @deprecated Use {@link plugins/internal/oea.CreatePresentationRequest CreatePresentationRequest} instead from @hyperledger/identus-sdk/plugins/oea
 */
export {
  CreatePresentationRequest,
} from "./plugins/internal/oea/tasks/CreatePresentationRequest";

/**
 * @deprecated Use {@link plugins/internal/oea.CreatePresentationRequestArgs CreatePresentationRequestArgs} instead from @hyperledger/identus-sdk/plugins/oea
 */
export {
  type Args as CreatePresentationRequestArgs,
} from "./plugins/internal/oea/tasks/CreatePresentationRequest";

/**
 * @deprecated Use {@link plugins/internal/oea.CreatePresentationRequest TaskContext} instead from @hyperledger/identus-sdk/plugins/oea
 */
export {
  type TaskContext
} from "./plugins/internal/oea/tasks/CreatePresentationRequest";

/**
 * @deprecated Use {@link plugins/internal/oea.CreatePresentation CreatePresentation} instead from @hyperledger/identus-sdk/plugins/oea
 */
export {
  CreatePresentation,
} from "./plugins/internal/oea/tasks/CreatePresentation";

/**
 * @deprecated Use {@link plugins/internal/oea.CreatePresentationArgs CreatePresentationArgs} instead from @hyperledger/identus-sdk/plugins/oea
 */
export {
  type Args as CreatePresentationArgs
} from "./plugins/internal/oea/tasks/CreatePresentation";

// ============================================================================
// DEPRECATED TASKS OBJECT
// ============================================================================

import {
  RunProtocol,
} from "./edge-agent/helpers/RunProtocol";
import {
  PKInstance,
} from "./pollux/utils/jwt/PKInstance";
import { CreatePrismDID } from "./edge-agent/didFunctions";
import { CreateOOBOffer } from "./edge-agent/didcomm/CreateOOBOffer";
import { CreateOOBPresentationRequest } from "./edge-agent/didcomm/CreateOOBPresentationRequest";
import { CreatePresentation } from "./plugins/internal/oea/tasks/CreatePresentation";
import { CreatePresentationRequest } from "./plugins/internal/oea/tasks/CreatePresentationRequest";

/**
 * @deprecated Instead, import the specific task directly
 */
export const Tasks = {
  RunProtocol,
  CreatePrismDID,
  PKInstance,
  CreateOOBOffer,
  CreateOOBPresentationRequest,
  /**
   * @deprecated Use {@link plugins/internal/oea.CreatePresentation CreatePresentation} instead from @hyperledger/identus-sdk/plugins/oea
   */
  CreatePresentation,
  /**
   * @deprecated Use {@link plugins/internal/oea.CreatePresentationRequest CreatePresentationRequest} instead from @hyperledger/identus-sdk/plugins/oea
   */
  CreatePresentationRequest
};
