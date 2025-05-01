import * as Domain from "../../../../domain";
import { Plugins } from "../../../../plugins";
import { expect, Task } from "../../../../utils";
import { RunProtocol } from "../../../../edge-agent/helpers/RunProtocol";
import { OEA } from "../types";

interface Args {
  message: Domain.Message;
}

export class HandlePresentation extends Task<boolean, Args> {
  async run(ctx: Plugins.Context) {
    const presentation = this.args.message;
    const attachment = expect(
      presentation.attachments.at(0),
      new Domain.AgentError.UnsupportedAttachmentType("Invalid presentation message, attachment missing")
    );
    const format = expect(attachment.format, "Invalid attachment format");

    if (!presentation.thid) {
      throw new Domain.AgentError.UnsupportedAttachmentType("Cannot find any message with that threadID");
    }

    const presReq = await this.getPresentationRequest(ctx, presentation.thid);

    const verified = await ctx.run(new RunProtocol({
      type: "presentation-verify",
      pid: format,
      data: {
        presentation: attachment.payload,
        presentationRequest: presReq,
        thid: presentation.thid,
      }
    }));

    return verified.data;
  }

  private async getPresentationRequest(ctx: Plugins.Context, thid: string) {
    const allMessages = await ctx.Pluto.getAllMessages();
    const message = allMessages.find((message) => {
      return message.thid === thid && message.piuri === OEA.ProtocolIds.RequestPresentation;
    });

    if (message) {
      const attachment = message.attachments.at(0);
      if (!attachment) {
        throw new Domain.AgentError.UnsupportedAttachmentType("Invalid presentation message, attachment missing");
      }
      const presentationRequest = Domain.Message.Attachment.extractJSON(attachment);
      return presentationRequest;
    }

    throw new Domain.AgentError.UnsupportedAttachmentType("Cannot find any message with that threadID");
  }
}
