import type * as Domain from "@hyperledger/identus-domain";
import { Task } from "../../../../utils";
import { type AgentContext } from "../../../../edge-agent/Context";

/**
 * Keylist Update Response
 *
 * Specification:
 * https://didcomm.org/coordinate-mediation/2.0/
 */

interface Args {
  message: Domain.Message;
}

interface KeylistUpdate {
  recipient_did: string;
  action: string;
  result: string;
}

export class MediationKeysUpdateResponse extends Task<void, Args> {
  async run(ctx: AgentContext) {
    const updates = this.args.message.body.updated as KeylistUpdate[] | undefined;

    if (!Array.isArray(updates)) {
      return;
    }

    const from = this.args.message.from?.toString();

    for (const update of updates) {
      if (update.result !== "success" && update.result !== "no_change") {
        ctx.logger.warn(
          `Keylist update failed for ${update.recipient_did} (${update.action}): ${update.result} from ${from}`
        );
      }
    }
  }
}
