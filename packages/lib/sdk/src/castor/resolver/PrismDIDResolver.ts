import { PrismDIDMethodId } from "../../castor/did/prismDID/PrismDIDMethodId";
import { type DIDResolver, DIDDocument, type Apollo } from "@hyperledger/identus-domain";

import * as DIDParser from "../parser/DIDParser";
import { LongFormPrismDIDResolver } from "./LongFormPrismDIDResolver";
import { DIDResolverHttpProxy } from "./DIDResolverHttpProxy";

export class PrismDIDResolver implements DIDResolver {
  method = "prism";
  private longFormPrismDIDResolver;
  private proxyPrismDIDResolver;

  constructor(
    private apollo: Apollo,
    prismResolverEndpoint: string = "https://raw.githubusercontent.com/FabioPinheiro/prism-vdr/refs/heads/main/mainnet/diddoc/",
  ) {
    this.longFormPrismDIDResolver = new LongFormPrismDIDResolver(apollo);
    this.proxyPrismDIDResolver = new DIDResolverHttpProxy(prismResolverEndpoint, "prism");
  }

  async resolve(didString: string): Promise<DIDDocument> {
    const did = DIDParser.parse(didString);
    const methodId = new PrismDIDMethodId(did.methodId);

    if (methodId.isShortform()) {
      return this.proxyPrismDIDResolver.resolve(methodId.shortfrom());
    }

    return this.longFormPrismDIDResolver.resolve(didString);
  }

}
