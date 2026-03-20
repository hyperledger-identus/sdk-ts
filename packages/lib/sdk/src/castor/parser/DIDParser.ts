import { DID } from "@hyperledger/identus-domain";

import { CastorError } from "@hyperledger/identus-domain";

export function parse(didString: string): DID {
  const regex =
    /^did:(?<method>[a-z0-9]+):(?<idstring>[a-z0-9.\-_%]+(?::[a-z0-9.\-_%]+)*)$/gi;
  const match = regex.exec(didString);

  if (!match || !match.groups) {
    throw new CastorError.InvalidDIDString("Invalid did string");
  }
  const { idstring, method } = match.groups;
  if (!idstring) {
    throw new CastorError.InvalidDIDString("Invalid methodId");
  }
  if (!method) {
    throw new CastorError.InvalidDIDString("Invalid methodName");
  }
  return new DID("did", method, idstring);
}
