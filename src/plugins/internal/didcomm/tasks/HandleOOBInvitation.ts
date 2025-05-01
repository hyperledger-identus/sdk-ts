import * as Domain from "../../../../domain";
import { asArray, isNil, notNil, Task } from "../../../../utils";
import { OutOfBandInvitation } from "../protocols/invitation/OutOfBandInvitation";
import { HandshakeRequest } from "../../oea/protocols/HandshakeRequest";
import { Plugins } from "../../../types";
import { CreatePeerDID } from "../../../../edge-agent/didcomm/CreatePeerDID";
import { DIDCommConnection } from "../connection/DIDCommConnection";
import { ListenerKey } from "../../../../edge-agent/types";
import { Connection } from "../../../../edge-agent/connections";

/**
 * Create a connection from an OutOfBandInvitation
 * unless the Invitation has Attachments, then we parse and store those
 */

interface Args {
  message: OutOfBandInvitation;
  alias?: string;
}

export class HandleOOBInvitation extends Task<void, Args> {
  async run(ctx: Plugins.Context) {
    const attachment = asArray(this.args.message.attachments).at(0);
    // ?? make peerDID an arg - so we dont always create a new one
    const peerDID = await ctx.run(new CreatePeerDID({ services: [], updateMediator: true }));
    const attachedMsg = notNil(attachment)
      ? Domain.Message.fromJson({ ...attachment.payload, to: peerDID.toString() })
      : null;

    if (isNil(attachedMsg)) {
      if (isNil(ctx.Connections.mediator)) {
        throw new Domain.AgentError.NoMediatorAvailableError();
      }

      // ? should this get wrapped in a flow
      const request = HandshakeRequest.fromOutOfBand(this.args.message, peerDID);
      const alias = this.args.alias ?? "OOBConn";
      const pair = new Domain.DIDPair(peerDID, request.to, alias);
      const connection = new DIDCommConnection(pair.receiver.toString(), pair.host.toString(), alias);
      ctx.Connections.add(connection);

      // [ ] investigate response https://github.com/hyperledger-identus/sdk-ts/issues/392
      await connection.send(request.makeMessage(), ctx);
      await ctx.Pluto.storeDIDPair(pair.host, pair.receiver, pair.name);
      connection.state = Connection.State.GRANTED;
      // ??? update events to use Connections not pairs
      ctx.Events.emit(ListenerKey.CONNECTION, pair);
    }
    else {
      await ctx.Pluto.storeMessage(attachedMsg);
      await ctx.Events.emit(ListenerKey.MESSAGE, [attachedMsg]);
    }
  }
}
