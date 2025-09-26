import { DID } from "../../../domain/models";
import { CastorError } from "../../../domain/models/Errors";
import { PrismDIDMethodId } from "./PrismDIDMethodId";

export class LongFormPrismDID {
  private prismMethodId: PrismDIDMethodId;
  public readonly stateHash: string;
  public readonly encodedState: string;

  constructor(public readonly did: DID) {
    const methodId = new PrismDIDMethodId(did.methodId);
    const encodedState = methodId.sections.at(1);

    if (methodId.sections.length !== 2 || encodedState === undefined) {
      throw new CastorError.InvalidLongFormDID();
    }

    this.prismMethodId = methodId;
    this.stateHash = methodId.stateHash;
    this.encodedState = encodedState;
  }
}
