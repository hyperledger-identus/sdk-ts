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
  mediatorDID: Domain.DID;
}

export class StartMediator extends Task<void, Args> {
  async run(ctx: AgentContext) {
    try {
      // re-establish known connection
      const mediators = await ctx.Pluto.getAllMediators();
      // [ ] enable multiple mediators https://github.com/hyperledger-identus/sdk-ts/issues/393
      const mediator = expect(mediators.slice(0, 1).at(0), Domain.AgentError.NoMediatorAvailableError);
      const connection = new MediatorConnection(
        mediator.mediatorDID.toString(),
        mediator.hostDID.toString(),
        mediator.routingDID.toString(),
      );
      connection.state = Connection.State.UNKNOWN;
      ctx.Connections.addMediator(connection);
    }
    catch (e) {
      // if that fails create a new mediator connection
      if (e instanceof Domain.AgentError.NoMediatorAvailableError) {
        await this.achieveMediation(ctx);
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
  private async achieveMediation(ctx: AgentContext) {
    const host = await ctx.run(
      new CreatePeerDID({ services: [], updateMediator: false })
    );

    const connection = new MediatorConnection(this.args.mediatorDID.toString(), host.toString());
    connection.state = Connection.State.REQUESTED;
    ctx.Connections.addMediator(connection);
    const mediationRequest = new MediationRequest(host, this.args.mediatorDID);
    await connection.send(mediationRequest.makeMessage(), ctx);
  }
}
