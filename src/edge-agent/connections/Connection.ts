import * as Domain from "../../domain";
import { Task } from "../../utils";

/**
 * Define the structure of a Connection
 * 
 * Connections are used to capture Protocol specific behaviours and metadata
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
  send: (protocol: Connection.Protocol, ctx: Task.Context<any>) => Promise<any | undefined>;
  /**
   * called when a Message is received from this connection
   */
  receive?: (protocol: Connection.Protocol, ctx: Task.Context<any>) => Promise<void>;
  /**
   * handle any desired teardown
   */
  close?: () => Promise<void>;
}

export namespace Connection {
  /// allow any for now to enable arbitrary extension
  export type Protocol = Domain.Message | Domain.ApiRequest | any;

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
