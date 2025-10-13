import { CastorError } from "../../../domain/models/Errors";

export class PrismDIDMethodId {
  private readonly value: string;
  readonly sections: string[];
  public readonly stateHash: string;

  constructor(value: string) {
    const sectionRegex = /^[A-Za-z0-9_-]+$/;
    const methodSpecificIdRegex = /^([A-Za-z0-9_-]*:)*[A-Za-z0-9_-]+$/;

    this.value = value;
    this.sections = value.split(":");
    this.stateHash = this.sections.at(0) ?? (() => { throw new CastorError.MethodIdIsDoesNotSatisfyRegex(); })();

    if (!this.sections.every((section) => sectionRegex.test(section))) {
      throw new CastorError.MethodIdIsDoesNotSatisfyRegex();
    }
    if (!methodSpecificIdRegex.test(value)) {
      throw new CastorError.MethodIdIsDoesNotSatisfyRegex();
    }
  }

  public isShortform(): boolean {
    return this.sections.length < 2;
  }
  public shortfrom(): string {
    return "did:prism:" + this.stateHash;
  }

  static fromSections(sections: string[]): PrismDIDMethodId {
    return new PrismDIDMethodId(sections.join(":"));
  }

  toString(): string {
    return this.value;
  }
}
