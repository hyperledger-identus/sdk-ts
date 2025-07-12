/** 
 * @packageDocumentation
 * 
 * This export contains the DIF plugin for the Identus SDK
 * Please use the following export
 * 
 * ## How to use
 * Typescript / esmodules
 * 
 * ```typescript
 * import * as DIF from "@hyperledger/identus-sdk/plugins/dif";
 * ```
 * 
 * Or with cjs modules
 * 
 * ```typescript
 * const DIF = require("@hyperledger/identus-sdk/plugins/dif");
 * ```
 */
import { Plugin } from "../../Plugin";
import { Plugins } from "../../types";
import { IsCredentialRevoked } from "./IsCredentialRevoked";
import { PresentationRequest } from "./PresentationRequest";
import { PresentationVerify } from "./PresentationVerify";
import { DIFModule } from "./module";
import { DIF } from "./types";
import type { Context as ACContext } from "../anoncreds/plugin";

export type Modules = { DIF: DIFModule; };
export type Context = Plugins.Context<Modules & ACContext>;
const plugin = new Plugin()
  .addModule("DIF", new DIFModule())
  .register(DIF.PRESENTATION_REQUEST, PresentationRequest)
  .register(DIF.PRESENTATION, PresentationVerify)
  // ??? tmp workaround Revocation being extracted to separate handlers
  .register("revocation-check/prism/jwt", IsCredentialRevoked);


export default plugin;
export * from "./types";
export { DIFModule } from "./module";