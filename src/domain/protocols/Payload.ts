/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/no-namespace */
/**
 * General purpose struct to pass data around
 * 
 * enables simplistic data transfer and identification
 */
export interface Payload<T> {
  // Payload IDentifier
  pid: string;
  // any value
  data: T;
}

export namespace Payload {
  export const make = <T>(pid: string, data: T): Payload<T> => ({ pid, data });
}
