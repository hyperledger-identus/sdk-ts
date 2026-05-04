import { PrismDIDMethodId } from "../../castor/did/prismDID/PrismDIDMethodId";
import { type DIDResolver, type DIDDocument, DID } from "@hyperledger/identus-domain";

import { LongFormPrismDIDResolver } from "./LongFormPrismDIDResolver";
import { DIDResolverHttpProxy } from "./DIDResolverHttpProxy";

export class PrismDIDResolver implements DIDResolver {
  method = "prism";
  private longFormPrismDIDResolver;
  private proxyPrismDIDResolver;

  constructor(
    prismResolverEndpoint: string,
  ) {
    this.longFormPrismDIDResolver = new LongFormPrismDIDResolver();
    this.proxyPrismDIDResolver = new DIDResolverHttpProxy(prismResolverEndpoint, "prism");
  }

  async resolve(didString: string): Promise<DIDDocument> {
    const did = DID.fromString(didString);
    const methodId = new PrismDIDMethodId(did.methodId);

    if (methodId.isShortform()) {
      return this.proxyPrismDIDResolver.resolve(methodId.shortfrom());
    }

    return this.longFormPrismDIDResolver.resolve(didString);
  }

}
