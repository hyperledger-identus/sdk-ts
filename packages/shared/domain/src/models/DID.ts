import { type Pluto } from "../buildingBlocks/Pluto";
import { InvalidDIDString } from "./errors/Castor";

const didRegex = /^did:(?<method>[a-z0-9]+):(?<idstring>[a-zA-Z0-9.\-_%]+(?::[a-zA-Z0-9.\-_%]+)*)$/;

export class DID implements Pluto.Storable {
  public readonly uuid: string;
  public readonly schema: string;
  public readonly method: string;
  public readonly methodId: string;

  constructor(schema: string, method: string, methodId: string) {
    this.schema = schema;
    this.method = method;
    this.methodId = methodId;
    this.uuid = this.toString();
  }

  toString() {
    return `${this.schema}:${this.method}:${this.methodId}`;
  }

  /**
   * parse value into a DID
   * @param {DID | string} value - some representation of a DID
   * @returns {DID}
   */
  static from(value: DID | string | unknown): DID {
    if (value instanceof DID) {
      return value;
    }

    if (typeof value === "string") {
      return DID.fromString(value);
    }

    if (
      typeof value === "object" && value !== null
      && "method" in value && typeof value.method === "string"
      && "methodId" in value && typeof value.methodId === "string"
      && "schema" in value && typeof value.schema === "string"
    ) {
      return new DID(value.schema, value.method, value.methodId);
    }

    throw new Error("Invalid DID value");
  }

  static fromString(text: string): DID {
    const match = didRegex.exec(text);
    if (!match || !match.groups) {
      throw new InvalidDIDString();
    }
    const { method, idstring } = match.groups;
    return new DID("did", method, idstring);
  }

  /** replace with a new DID */
  static replaceDID(oldStr: string, did: DID) {
    return oldStr.replace(/^.*?(?=#)/, did.toString());
  };
}
