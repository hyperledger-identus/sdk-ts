/** 
 * @packageDocumentation
 * 
 * This export contains the OIDC plugin for the Identus SDK
 * Please use the following export
 * 
 * ## How to use
 * Typescript / esmodules
 * ```typescript
 * import * as OIDC from "@hyperledger/identus-sdk/plugins/oidc";
 * ```
 * 
 * Or with cjs modules
 * ```typescript
 * const OIDC = require("@hyperledger/identus-sdk/plugins/oidc");
 * ```
 * 
 */
export * from "./connection/CreateAuthorizationRequest";
export * from "./connection/OIDCConnection";
export * from "./connection/ProcessCallbackUrl";
export * from "./connection/ResolveAuthorizationRequest";
export * from "./connection/ResolveCredentialRequest";
export * from "./connection/ResolveTokenRequest";

export * from "./protocols";
export * from "./tasks";

export * from "./plugin";
export * from "./types";
export { OIDCModule } from "./module";
