import { type PrismDIDMethod } from "./prism";
import { type PeerDIDMethod } from "./peer";

export { PrismDIDMethod, UpdateActionType } from "./prism";
export type {
  CreatePayload,
  DeactivatePayload,
  UpdatePayload,
  PublishPayload,
  UpdateAction,
  AddKeyActionData,
  RemoveKeyActionData,
  AddServiceActionData,
  RemoveServiceActionData,
  UpdateServiceActionData,
  Metadata,
} from "./prism";
export { PeerDIDMethod } from "./peer";

/**
 * Tuple of DID methods Castor always registers by default.
 * User-supplied extras are appended to this tuple.
 */
export type DefaultDIDMethods = readonly [PrismDIDMethod, PeerDIDMethod];

export type * from "./types";
