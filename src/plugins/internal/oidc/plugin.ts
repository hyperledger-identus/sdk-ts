import { Plugin } from "../../Plugin";
import { Plugins } from "../../types";
import { OIDCModule } from "./module";

export type Modules = { OIDC: OIDCModule; };
export type Context = Plugins.Context<Modules>;

export const plugin = new Plugin()
  .addModule("OIDC", new OIDCModule());
