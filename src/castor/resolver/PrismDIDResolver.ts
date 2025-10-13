import { SHA256 } from "@stablelib/sha256";
import { CastorError } from "../../domain/models/Errors";
import { Apollo } from "../../domain/buildingBlocks/Apollo";
import { LongFormPrismDID } from "../../castor/did/prismDID/LongFormPrismDID";
import { PrismDIDMethodId } from "../../castor/did/prismDID/PrismDIDMethodId";
import { DIDResolver, DIDDocument } from "../../domain/models";

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

    return (methodId.isShortform()) ? ( // short form of did prism
      this.proxyPrismDIDResolver.resolve(methodId.shortfrom())
    ) : (async () => { // long from of did prism
      try {
        const didDocShortForm = await this.proxyPrismDIDResolver.resolve(methodId.shortfrom());
        const didDocLongForm = DIDDocument.cloneWithNewDID(didDocShortForm, did)
        return didDocLongForm;
      } catch {
        return await this.longFormPrismDIDResolver.resolve(didString);
      }
    })()
  }

}
