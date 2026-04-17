import {
  type DID,
  type DIDPair,
  type Credential,
  type Message,
  type PrivateKey,
  type ExportableKey,
  type Backup,
} from "@hyperledger/identus-domain";

import { OEA } from "../plugins/internal/oea/types";
import { ProtocolIds } from "../plugins/internal/didcomm/types";
import { type DIDMethodInput } from "../castor/types";

/**
 * Temporary workaround to smooth transition of internal module splitting and end-user consumables
 * ProtocolType is a merging of all the supported ProtocolIds
 * These have been split internally into Didcomm and OEA modules
 * But we can hide that from our users until full support exists
 */
export type ProtocolType = typeof ProtocolIds | typeof OEA.ProtocolIds;
export const ProtocolType = {
  DidcommBasicMessage: ProtocolIds.BasicMessage,
  ProblemReporting: ProtocolIds.ProblemReporting,
  Didcomminvitation: ProtocolIds.OOBInvitation,
  DidcommMediationRequest: ProtocolIds.MediationRequest,
  DidcommMediationGrant: ProtocolIds.MediationGrant,
  DidcommMediationDeny: ProtocolIds.MediationDeny,
  DidcommMediationKeysUpdate: ProtocolIds.MediationKeysUpdate,
  PickupRequest: ProtocolIds.PickupRequest,
  PickupDelivery: ProtocolIds.PickupDelivery,
  PickupStatus: ProtocolIds.PickupStatus,
  PickupReceived: ProtocolIds.PickupReceived,
  LiveDeliveryChange: ProtocolIds.LiveDeliveryChange,
  DidcommCredentialPreview: ProtocolIds.CredentialPreview,
  DidcommIssueCredential: ProtocolIds.IssueCredential,
  DidcommOfferCredential: ProtocolIds.OfferCredential,
  DidcommProposeCredential: ProtocolIds.ProposeCredential,
  DidcommRequestCredential: ProtocolIds.RequestCredential,
  PrismOnboarding: OEA.ProtocolIds.PrismOnboarding,
  PrismRevocation: OEA.ProtocolIds.PrismRevocation,
  DidcommConnectionRequest: OEA.ProtocolIds.ConnectionRequest,
  DidcommConnectionResponse: OEA.ProtocolIds.ConnectionResponse,
  DidcommProposePresentation: OEA.ProtocolIds.ProposePresentation,
  DidcommRequestPresentation: OEA.ProtocolIds.RequestPresentation,
  DidcommPresentation: OEA.ProtocolIds.Presentation,
};

export type AgentOptions = {
  mediatorDID?: DID | string;
  experiments?: {
    liveMode?: boolean;
  };
  /**
   * @deprecated Pass `didMethods` directly at the top level of
   * `Agent.initialize({ pluto, didMethods, ... })` instead. The top-level
   * form participates in type inference so `agent.createDID` sees your
   * custom methods.
   */
  didMethods?: DIDMethodInput[]
};

export type MessageEventArg = Message[];
export type ConnectionEventArg = DIDPair;
export type RevokeEventArg = Credential;

export enum ListenerKey {
  MESSAGE = "message",
  CONNECTION = "connection",
  REVOKE = "revoke"
}


export type EventCallbacks = {
  [ListenerKey.MESSAGE]: (messages: MessageEventArg) => void | Promise<void>;
  [ListenerKey.CONNECTION]: (connection: ConnectionEventArg) => void | Promise<void>;
  [ListenerKey.REVOKE]: (revoke: RevokeEventArg) => void | Promise<void>;
}
export type EventCallback<T extends ListenerKey> = EventCallbacks[T];


/**
 * define Agent requirements for Backup
 */
export type BackupExclude = "messages" | "mediators" | "link_secret";
export type MasterKey = PrivateKey & ExportableKey.Common & ExportableKey.JWK & ExportableKey.PEM;

export type BackupOptions = {
  version?: Backup.Version;
  key?: MasterKey;
  compress?: boolean;
  excludes?: BackupExclude[];
};


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
} from "./helpers/RunProtocol";

export type { Task } from "./helpers/Task";

