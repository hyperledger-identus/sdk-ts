import * as Domain from "../../../domain";
import { Task } from "../../../utils";
import { ListenerKey } from "../../types";
import { AgentContext } from "../../didcomm/Context";

/**
 * Problem Report
 */

interface Args {
  message: Domain.Message;
}

export class ProblemReport extends Task<void, Args> {
  async run(ctx: AgentContext) {
    const msgs = [this.args.message];
    await ctx.Pluto.storeMessages(msgs);
    ctx.Events.emit(ListenerKey.MESSAGE, msgs);
    ctx.logger.warn(`Problem Reported ${this.args.message.from?.toString()}`);
  }
}
