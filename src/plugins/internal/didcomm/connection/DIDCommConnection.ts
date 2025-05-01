import * as Domain from "../../../../domain";
import { notNil } from "../../../../utils";
import { AgentContext } from "../../../../edge-agent/Context";
import { Connection } from "../../../../edge-agent/connections/Connection";
import { RunProtocol } from "../../../../edge-agent/helpers/RunProtocol";
import { ProtocolIds } from "../types";

export class DIDCommConnection implements Connection {
  public readonly type = "DIDComm";
  public state = Connection.State.NEW;

  constructor(
    public readonly uri: string,
    public readonly host: string,
    public readonly alias?: string
  ) {}

  async send(msg: Domain.Message, ctx: AgentContext) {
    msg.direction = Domain.MessageDirection.SENT;
    // filter which messages we want stored
    const ignorePluto = [ProtocolIds.PickupRequest, ProtocolIds.MediationKeysUpdate];
    const shouldStore = ignorePluto.every(x => x !== msg.piuri);

    if (shouldStore) {
      await ctx.Pluto.storeMessage(msg);
    }

    ctx.logger.debug("DIDComm Send", msg);
    const response = await ctx.Mercury.sendMessageParseMessage(msg);

    return this.receive(response, ctx);
  }

  async receive(message: Domain.Message | undefined, ctx: AgentContext) {
    if (notNil(message)) {
      try {
        // attempt to find and run the registered handler for this message type
        const result = await ctx.run(new RunProtocol({
          type: "message",
          pid: message?.piuri,
          data: { message }
        }));

        return result;
      }
      catch {
        return undefined;
      }
    }

    return undefined;
  }
}
