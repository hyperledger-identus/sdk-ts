 
import { uuid } from "@stablelib/uuid";
import * as Domain from "@hyperledger/identus-domain";
import { expect, isNil, notNil } from "../../../../utils";
import { Task } from "../../../../utils/tasks";
import { type AgentContext } from "../../../../edge-agent/Context";
import { ProtocolIds } from "../../../../plugins/internal/didcomm/types";
import { PickupRequest } from "../../../../plugins/internal/didcomm/protocols/pickup/PickupRequest";
import { CancellableTask } from "../../../../edge-agent/helpers/Task";

/**
 * Handle the setup of fetching messages from the Mediator
 */
export interface Args {
  period?: number;
  useSockets?: boolean;
}

export class StartFetchingMessages extends Task<void, Args> {
  async run(ctx: AgentContext) {
    // check we're not already fetching messages
    if (notNil(ctx.Jobs.fetchMessages) || ctx.Connections.allMediators.length === 0) {
      return;
    }

    const mediators = ctx.Connections.allMediators;

    for (const connection of mediators) {
      const socketService = await this.getSocketService(ctx, connection);
      if (socketService) {
        await this.setupSocket(ctx, connection, socketService);
      }
    }

    const pollMediators = mediators.filter(m => !m.liveMode);

    if (pollMediators.length > 0) {
      const period = this.args.period ?? 5000;
      ctx.Jobs.fetchMessages = new CancellableTask(async () => {
        for (const connection of pollMediators) {
          const mediator = connection.asMediator();
          const pickupRequest = new PickupRequest(
            { limit: 10 },
            mediator.hostDID,
            mediator.mediatorDID
          );
          await connection.send(pickupRequest.makeMessage(), ctx);
        }
      }, period);
    }
  }

  private async setupSocket(ctx: AgentContext, connection: MediatorConnection, socketService: any) {
    const socket = new WebSocket(socketService.serviceEndpoint.uri);
    const mediator = connection.asMediator();
    const message = new Domain.Message(
      JSON.stringify({ live_delivery: true }),
      uuid(),
      ProtocolIds.LiveDeliveryChange,
      mediator.hostDID,
      mediator.mediatorDID,
    );

    connection.useLiveMode(socket);

    socket.addEventListener("open", () => {
      ctx.Mercury.packMessage(message)
        .then((packed) => socket.send(packed))
        .catch((error) => console.error(error));
    });

    socket.addEventListener("message", (event) => {
      ctx.Mercury.unpackMessage(event.data)
        .then((message) => connection.receive(message, ctx))
        .catch((error) => console.error(error));
    });
  }

  private async getSocketService(ctx: AgentContext, mediator: MediatorConnection) {
    if (this.args.useSockets && mediator) {
      const resolvedMediator = await ctx.Castor.resolveDID(mediator.uri);
      const socketService = resolvedMediator.services.find(service =>
        service.serviceEndpoint.uri.startsWith("ws://")
        || service.serviceEndpoint.uri.startsWith("wss://")
      );

      return socketService;
    }

    return null;
  }
}
