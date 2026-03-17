import type * as Domain from "@hyperledger/identus-domain";

export interface DIDCommProtocol {
  packEncrypted(
    message: Domain.Message,
    to: Domain.DID,
    from?: Domain.DID
  ): Promise<string>;
  unpack(message: string): Promise<Domain.Message>;
}
