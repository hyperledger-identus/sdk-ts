import type * as Domain from "../domain";
import { PluginManager } from "../plugins";
import { JWT, SDJWT } from "../pollux/utils/jwt";
import { Task } from "../utils/tasks";
import { EventsManager } from "./Agent.MessageEvents";
import { ConnectionsManager } from "./connections/ConnectionsManager";
import { JobManager } from "./connections/JobManager";

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
  Seed: Domain.Seed;

  // internal modules
  JWT: JWT;
  SDJWT: SDJWT;
}> {}
