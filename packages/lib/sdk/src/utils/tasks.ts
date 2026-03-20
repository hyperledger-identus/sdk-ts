import { ConsoleLogger, type Logger } from "./logger";
import { expect } from "@hyperledger/identus-domain";
import { type JsonObj } from "./types";

/**
 * A Task encapsulates a unit of work
 * 
 * args constructor parameter is mandatory if Args type given
 * args constructor parameter is optional if no Args type given
 */
export abstract class Task<T, Args = unknown> {
  protected readonly args: Args;

  /**
   * 
   * @param {Args} args
   */
  constructor(...args: (unknown extends Args ? [] : [Args]));
  constructor(args?: Args) {
    this.args = args ?? {} as Args;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- ctx is narrowed by subclasses, runtime Proxy provides all fields
  abstract run(ctx: Task.Context<any>): Promise<T>;

  // return loggable information
  log(): unknown {
    return this.args;
  }
}

export namespace Task {
  /**
   * Context using proxy so we can extend arbitrarily
   */
  export class ContextProxy {
    public readonly logger: Logger;
    private readonly modules: Record<string, unknown> = {};
    private readonly _proxy: this;

    constructor(private readonly opts: Record<string, unknown>) {
      this.logger = (opts.logger ?? new ConsoleLogger()) as Logger;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const get = (target: any, prop: string) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        const ref = target[prop] ?? target.opts[prop] ?? target.modules[prop] ?? undefined;
        // ?? tmp work around context propagation
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return ref instanceof Runner
          ? ref.withContext(this._proxy)
          : ref;
      };

      this._proxy = new Proxy(this, { get }) as this;
      return this._proxy;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- accepts tasks with any ctx narrowing
    async run<T>(task: Task<T, any>): Promise<T> {
      const taskName = task.constructor.name;

      try {
        this.logger.debug(`Run: ${taskName}`, task.log());
        return await task.run(this);
      }
      catch (err) {
        this.logger.debug(`Fail: ${taskName}`, err);
        throw err;
      }
    }

    // TODO improve with logging and error checking
    extend(deps: Record<string, unknown>): this {
      Object.entries(deps).forEach(([key, value]) => {
        this.modules[key] = value;
      });

      return this;
    }
  }

  /**
   * used to mask the Proxy behaviour
   * and enable Typescript to know what Modules should be accessible
   */
  export interface ContextCtor {
    new <T extends object>(modules: T): Context<T>;
  }

  /**
   * Context is provided to running tasks
   * it optimistically provides access to Modules
   */
  export type Context<T = JsonObj> = T & ContextProxy;
  export const Context = ContextProxy as ContextCtor;

  /**
   * used to enable Modules to propagate the Context
   * and have access to runTask
   */
  export abstract class Runner {
    private context?: ContextProxy;

    // ? tmp work around context propagation
    abstract clone(): Runner;

    withContext(ctx: ContextProxy) {
      const clone = this.clone();
      clone.context = ctx;
      return clone;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- accepts tasks with any ctx narrowing
    protected runTask<T>(task: Task<T, any>): Promise<T> {
      const ctx = expect(this.context, `${this.constructor.name}: no Context available`);
      return ctx.run(task);
    }
  }
}
