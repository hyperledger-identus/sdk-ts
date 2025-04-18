import { AgentContext } from "../../../edge-agent/didcomm/Context";
import { Task } from "../../../utils";
import * as Types from "./types";

interface Args {
  uri: string;
}

export class fetchSchema extends Task<Types.Schema, Args> {
  async run(ctx: AgentContext) {
    const response = await ctx.Api.request("GET", this.args.uri);
    // [ ] validate <Anoncreds.CredentialSchemaType>
    return response.body as Types.Schema;
  }
}
