import * as Utils from "../utils";
import type { Payload } from "../domain/protocols/Payload";
import type { AgentContext } from "../edge-agent/Context";

export namespace Plugins {
  export abstract class Task<T = unknown, R = unknown> extends Utils.Task<Payload<R>, T> { }

  export type Context<T = Record<string, never>> = Utils.Task.Context<T & AgentContext>;
}
