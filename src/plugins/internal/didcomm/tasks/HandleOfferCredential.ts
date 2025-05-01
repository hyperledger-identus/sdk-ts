import { base64 } from "multiformats/bases/base64";
import * as Domain from "../../../../domain";
import { expect, isString, Task } from "../../../../utils";
import { RunProtocol } from "../../../../edge-agent/helpers/RunProtocol";
import { Context } from "../plugin";
import { ProtocolIds } from "../types";
import { RequestCredential } from "../protocols/issueCredential/RequestCredential";

/**
 * Asyncronously prepare a request credential message from a valid offerCredential
 * for now supporting w3c verifiable credentials offers.
 */

interface Args {
  message: Domain.Message;
}

export class HandleOfferCredential extends Task<RequestCredential, Args> {
  async run(ctx: Context) {
    if (this.args.message.piuri !== ProtocolIds.OfferCredential) {
      // TODO 
      throw new Error();
    }

    const offer = this.args.message;
    const attachment = expect(offer.attachments.at(0), "Invalid attachment");
    const format = expect(attachment.format, "Invalid attachment format");

    const result = await ctx.run(new RunProtocol({
      type: "credential-offer",
      pid: format,
      data: {
        offer: attachment.payload,
        thid: offer.thid
      }
    }));

    // ?? can this all move to send
    const from = expect(offer.to, 'Missing "from"');
    const to = offer.from;
    const body = isString(result.data) ? result.data : JSON.stringify(result.data);
    const response = new Domain.AttachmentDescriptor(
      {
        base64: base64.baseEncode(Buffer.from(body)),
      },
      result.pid,
      undefined,
      undefined,
      result.pid
    );

    const requestCredential = new RequestCredential({
      formats: [{
        attach_id: response.id,
        format: `${response.format}`,
      }],
      goal_code: offer.body.goal_code,
      comment: offer.body.comment,
    },
      [response],
      from,
      to,
      offer.thid
    );

    return requestCredential;
  }
}
