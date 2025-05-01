import * as Domain from "../../../../domain";
import { RunProtocol } from "../../../../edge-agent/helpers/RunProtocol";
import { expect, Task } from "../../../../utils";
import { Context } from "../plugin";

/**
 * Extract the verifiableCredential object from the Issue credential message asyncronously
 */

interface Args {
  message: Domain.Message;
}

export class HandleIssueCredential extends Task<Domain.Credential, Args> {
  async run(ctx: Context) {
    const issueCredential = this.args.message;
    const attachment = expect(issueCredential.attachments.at(0), "Invalid attachment");
    const format = expect(attachment.format, "Invalid attachment");
    const result = await ctx.run(new RunProtocol({
      type: "credential-issue",
      pid: format,
      // ?? flatten data and move thid to context
      data: {
        data: attachment.payload,
        thid: issueCredential.thid
      }
    }));

    const credential = result.pid === "credential"
      ? result.data
      : null;

    if (credential instanceof Domain.Credential) {
      await ctx.Pluto.storeCredential(credential);
      return credential;
    }

    throw new Error("invalid Credential issued");
  }
}
