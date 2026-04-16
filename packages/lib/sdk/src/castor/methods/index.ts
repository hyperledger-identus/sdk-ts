import type { DIDMethodTypeMap } from "./types";

import "./prism";
import "./peer";

export { PrismDIDMethod } from "./prism";
export { PeerDIDMethod } from "./peer";

export type RegisteredMethodName = keyof DIDMethodTypeMap;

export type * from "./types";