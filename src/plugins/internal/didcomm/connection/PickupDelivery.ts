import * as Domain from "../../../../domain";
import { Task, expect } from "../../../../utils";
import { ListenerKey } from "../../../../edge-agent/types";
import { Context } from "../plugin";
import { PickupReceived } from "../protocols/pickup/PickupReceived";

/**
 * Pickup Delivery
 * handle new messages being delivered
 *  - unwrap
 *  - store in Pluto
 *  - emit event
 *  - notify mediator
 */

interface Args {
  message: Domain.Message;
}

export class PickupDelivery extends Task<void, Args> {
  async run(ctx: Context) {
    const msg = this.args.message;
    const connection = ctx.Connections.mediator;
    const mediator = expect(connection?.asMediator());
    const attachedMsgs = await Promise.all(
      msg.attachments.map(x => {
        const data = JSON.stringify(x.payload);
        return ctx.Mercury.unpackMessage(data);
      })
    );
    await ctx.Pluto.storeMessages(attachedMsgs);

    const message_id_list = msg.attachments.map(x => x.id);
    const pickupReceived = new PickupReceived(
      { message_id_list },
      mediator.hostDID,
      mediator.mediatorDID
    );
    await connection?.send(pickupReceived.makeMessage(), ctx);

    /// ideally we would convert Messages into a Protocol wrapper
    ctx.Events.emit(ListenerKey.MESSAGE, attachedMsgs);
    ctx.logger.info(`Messages Received (${attachedMsgs.length})`);
  }
}
