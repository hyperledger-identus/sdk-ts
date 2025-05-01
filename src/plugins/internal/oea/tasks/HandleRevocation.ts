import * as Domain from "../../../../domain";
import { Task } from "../../../../utils";
import { Context } from "../../didcomm/plugin";
import { RevocationNotification } from "../protocols/RevocationNotfiication";
import { HandleIssueCredential } from "../../didcomm/tasks/HandleIssueCredential";
import { ListenerKey } from "../../../..";
import { OEA } from "../types";
import { ProtocolIds } from "../../didcomm/types";

/**
 * Asyncronously prepare a request credential message from a valid offerCredential
 * for now supporting w3c verifiable credentials offers.
 */

interface Args {
  message: Domain.Message;
}

export class HandleRevocation extends Task<void, Args> {
  async run(ctx: Context) {
    if (this.args.message.piuri !== OEA.ProtocolIds.PrismRevocation) {
      throw new Error(`Unexpected message piuri ${this.args.message.piuri} - expected ${OEA.ProtocolIds.PrismRevocation}`);
    }

    const revokeMessage = RevocationNotification.fromMessage(this.args.message);
    const threadId = revokeMessage.body.issueCredentialProtocolThreadId;
    const allMessages = await ctx.Pluto.getAllMessages();

    const matchingMessages = allMessages.filter(
      x => x.thid === threadId && x.piuri === ProtocolIds.IssueCredential
    );

    if (matchingMessages.length > 0) {
      for (const message of matchingMessages) {
        // ?? I dont think HandleIssueCredential should be ran here
        const task = new HandleIssueCredential({ message });
        const credential = await ctx.run(task);

        await ctx.Pluto.revokeCredential(credential);
        ctx.Events.emit(ListenerKey.REVOKE, credential);
      }
    }
  }
}
