import { Task } from "../../../utils";
import type { Context } from "./plugin";
import * as Types from "./types";

export interface FetchSchemaArgs {
  uri: string;
}

export class fetchSchema extends Task<Types.Schema, FetchSchemaArgs> {
  async run(ctx: Context) {
    const response = await ctx.Api.request("GET", this.args.uri);
    // [ ] validate <Anoncreds.CredentialSchemaType>
    return response.body as Types.Schema;
  }
}
