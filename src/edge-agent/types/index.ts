import {
  DID,
  DIDPair,
  Message,
  Credential,
} from "../../domain";
import { PrismOnboardingInvitation } from "../../plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation";
import { OutOfBandInvitation } from "../../plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation";
import { OEA } from "../../plugins/internal/oea/types";
import { ProtocolIds } from "../../plugins/internal/didcomm/types";

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
};

export type InvitationType = PrismOnboardingInvitation | OutOfBandInvitation;
export type MessageEventArg = Message[];
export type ConnectionEventArg = DIDPair;
export type RevokeEventArg = Credential;
export type EventCallback = (arg: MessageEventArg | ConnectionEventArg | RevokeEventArg) => void;

export enum ListenerKey {
  MESSAGE = "message",
  CONNECTION = "connection",
  REVOKE = "revoke"
}
