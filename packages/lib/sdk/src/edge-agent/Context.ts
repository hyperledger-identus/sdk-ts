import type * as Domain from "@hyperledger/identus-domain";
import { type PluginManager } from "../plugins";
import { type JWT, type SDJWT } from "../pollux/utils/jwt";
import { Task } from "../utils/tasks";
import { type EventsManager } from "./Agent.MessageEvents";
import { type ConnectionsManager } from "./connections/ConnectionsManager";
import { type JobManager } from "./connections/JobManager";

export class AgentContext extends Task.Context<{
  // Agent modules
  Connections: ConnectionsManager;
  Plugins: PluginManager;
  Events: EventsManager;
  Jobs: JobManager;

  // Building Blocks
  Api: Domain.Api;
  Apollo: Domain.Apollo;
  Castor: Domain.Castor;
  Mercury: Domain.Mercury;
  Pluto: Domain.Pluto;

  // Asyncronously fetch the short lived seed
  Seed: () => Promise<Uint8Array>

  // internal modules
  JWT: JWT;
  SDJWT: SDJWT;
}> { }
