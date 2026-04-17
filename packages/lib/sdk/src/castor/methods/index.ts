import { PrismDIDMethod } from "./prism";
import { PeerDIDMethod } from "./peer";

export { PrismDIDMethod } from "./prism";
export { PeerDIDMethod } from "./peer";

/**
 * Tuple of DID methods Castor always registers by default.
 * User-supplied extras are appended to this tuple.
 */
export type DefaultDIDMethods = readonly [PrismDIDMethod, PeerDIDMethod];

export type * from "./types";
