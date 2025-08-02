import { Task } from "../../../utils";
import type { Context } from "./plugin";
import * as Types from "./types";

export interface FetchCredentialDefinitionArgs {
  uri: string;
}

export class FetchCredentialDefinition extends Task<Types.CredentialDefinition, FetchCredentialDefinitionArgs> {
  async run(ctx: Context) {
    const response = await ctx.Api.request("GET", this.args.uri);
    // [ ] validate <Anoncreds.CredentialSchemaType> 
    return response.body as Types.CredentialDefinition;
  }
}
