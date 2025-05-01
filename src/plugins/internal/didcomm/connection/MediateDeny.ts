import * as Domain from "../../../../domain";
import { Task, expect } from "../../../../utils";
import { AgentContext } from "../../../../edge-agent/Context";
import { Connection } from "../../../../edge-agent/connections/Connection";

/**
 * Mediation Denied
 * gracefully handle denial
 */

interface Args {
  message: Domain.Message;
}

export class MediateDeny extends Task<void, Args> {
  async run(ctx: AgentContext) {
    ctx.logger.warn(`Mediation denied for: ${this.args.message.from?.toString()}`);
    ctx.logger.debug(`Mediate-Deny message:`, this.args.message);

    const uri = expect(this.args.message.from);
    const connection = expect(ctx.Connections.find(uri.toString()));
    connection.state = Connection.State.DENIED;
  }
}
