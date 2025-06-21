import { Plugin } from "../../Plugin";
import { Plugins } from "../../types";
import { HandleOOBInvitation } from "./tasks/HandleOOBInvitation";
import { HandleIssueCredential } from "./tasks/HandleIssueCredential";
import { HandleOfferCredential } from "./tasks/HandleOfferCredential";
import { MediateDeny } from "./connection/MediateDeny";
import { MediateGrant } from "./connection/MediateGrant";
import { PickupDelivery } from "./connection/PickupDelivery";
import { PickupStatus } from "./connection/PickupStatus";
import { ProblemReport } from "./connection/ProblemReport";
import { ProtocolIds } from "./types";
import { HandleRequestCredential } from "./tasks/HandleRequestCredential";

export type Context = Plugins.Context;
export const plugin = new Plugin()
  // message handlers
  .register(ProtocolIds.RequestCredential, HandleRequestCredential)
  .register(ProtocolIds.OOBInvitation, HandleOOBInvitation)
  .register(ProtocolIds.OfferCredential, HandleOfferCredential)
  .register(ProtocolIds.IssueCredential, HandleIssueCredential)
  .register(ProtocolIds.MediationGrant, MediateGrant)
  .register(ProtocolIds.MediationDeny, MediateDeny)
  .register(ProtocolIds.PickupStatus, PickupStatus)
  .register(ProtocolIds.PickupDelivery, PickupDelivery)
  .register(ProtocolIds.ProblemReporting, ProblemReport);
