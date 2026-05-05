import * as Domain from "@hyperledger/identus-domain";
import { CreatePeerDID } from "../../../../edge-agent/didFunctions";
import { type AgentContext } from "../../../../edge-agent/Context";
import { Task } from "../../../../utils/tasks";
import { expect } from "../../../../utils";
import { Connection } from "../../../../edge-agent/connections";
import { MediatorConnection } from "../connection/MediatorConnection";
import { MediationRequest } from "../protocols/mediation/MediationRequest";

/**
 * Handle existing mediator logic
 * either reconnects existing mediator
 * or tries to establish new connection
 * 
 * currently hard limits to a single mediator
 */

export interface Args {
  mediatorDID?: Domain.DID;
  mediatorDIDs?: Domain.DID[];
}

export class StartMediator extends Task<void, Args> {
  async run(ctx: AgentContext) {
    try {
      const mediators = await ctx.Pluto.getAllMediators();
      if (mediators.length === 0) {
        throw new Domain.AgentError.NoMediatorAvailableError();
      }
      for (const mediator of mediators) {
        const connection = new MediatorConnection(
          mediator.mediatorDID.toString(),
          mediator.hostDID.toString(),
          mediator.routingDID.toString(),
        );
        connection.state = Connection.State.UNKNOWN;
        ctx.Connections.addMediator(connection);
      }
    }
    catch (e) {
      if (e instanceof Domain.AgentError.NoMediatorAvailableError) {
        const dids: Domain.DID[] = [];
        if (this.args.mediatorDID) {
          dids.push(this.args.mediatorDID);
        }
        if (this.args.mediatorDIDs) {
          dids.push(...this.args.mediatorDIDs);
        }

        for (const did of dids) {
          await this.achieveMediation(ctx, did);
        }
      }
      else throw e;
    }
  }

  /**
   * Asyncronously achieve mediation by specifying the HOST DID, this will
   * exchange the mediation protocol messages between the user and the mediator until established
   *
   * 
   * @param {DID} host
   * @returns {Promise<Mediator>}
   */
  private async achieveMediation(ctx: AgentContext, mediatorDID: Domain.DID) {
    const host = await ctx.run(
      new CreatePeerDID({ services: [], updateMediator: false })
    );

    const connection = new MediatorConnection(mediatorDID.toString(), host.toString());
    connection.state = Connection.State.REQUESTED;
    ctx.Connections.addMediator(connection);
    const mediationRequest = new MediationRequest(host, mediatorDID);
    await connection.send(mediationRequest.makeMessage(), ctx);
  }
}
