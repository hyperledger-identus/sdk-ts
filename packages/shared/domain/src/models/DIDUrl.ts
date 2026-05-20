import { type DID } from "./DID";

export class DIDUrl {
  did: DID;
  path: string[];
  parameters: Map<string, string>;
  fragment: string;

  constructor(
    did: DID,
    path: string[] = [],
    parameters: Map<string, string> = new Map(),
    fragment = ""
  ) {
    this.did = did;
    this.path = path;
    this.parameters = parameters;
    this.fragment = fragment;
  }

  string(): string {
    const pathStr = this.path.length > 0 ? this.pathString() : "";
    const queryStr = this.parameters.size > 0 ? this.queryString() : "";
    const fragmentStr = this.fragment === "" ? "" : this.fragmentString();
    return `${this.did.toString()}${pathStr}${queryStr}${fragmentStr}`;
  }

  pathString(): string {
    return `/${this.path.join("/")}`;
  }

  queryString(): string {
    return `?${Array.from(this.parameters.entries())
      .map(([key, value]) => `${key}=${value}`)
      .join("&")}`;
  }

  fragmentString(): string {
    return this.fragment === "" ? "" : `#${this.fragment}`;
  }
}
