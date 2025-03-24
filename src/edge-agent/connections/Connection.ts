import { Task } from "../../utils";

// TODO define Protocol
/// currently we handle sending ApiRequests and Messages
/// is it worth abstracting away from those
type Protocol = any;

/**
 * Define the structure of a Connection
 */
export interface Connection {
  /**
   * unique identifer for the connection
   */
  uri: string;
  /**
   * current condition of the connection
   */
  state: Connection.State;
  /**
   * handle delivering a Message to the connected entity
   */
  send: (message: Protocol, ctx: Task.Context<any>) => Promise<Protocol | undefined>;
  /**
   * called when a Message is received from this connection
   */
  receive: (message: Protocol, ctx: Task.Context<any>) => Promise<void>;
  /**
   * handle any desired teardown
   */
  close?: () => Promise<void>;
}

export namespace Connection {
  export enum State {
    // no interactions
    UNKNOWN = 0,
    // newly created but not negotiated
    NEW = 1,
    // request has been sent
    REQUESTED = 2,
    // request has been denied
    DENIED = 3,
    // request has been granted
    GRANTED = 4,
    // closed
    CLOSED = 5,
    // communication failing
    BROKEN = 6,
  }
}
