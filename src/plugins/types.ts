import * as Utils from "../utils/tasks";
import { Payload } from "../domain/protocols/Payload";
import { AgentContext } from "../edge-agent/didcomm/Context";

export namespace Plugins {
  export abstract class Task<T = unknown> extends Utils.Task<Payload, T> {}

  export type Context<T = Record<string, never>> = Utils.Task.Context<T & AgentContext>;
}
