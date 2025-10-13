
import {
  DIDResolver,
  DIDDocument,
  DID,
} from "../../domain/models";

export class DIDResolverHttpProxy implements DIDResolver {
  method: string;
  resolverEndpoint: string;

  constructor(
    resolverEndpoint: string,
    method: string,
  ) {
    this.resolverEndpoint = resolverEndpoint;
    this.method = method
  }

  async resolve(didString: string): Promise<DIDDocument> {
    const url = this.resolverEndpoint + didString;
    const response = await fetch(url, {
      "headers": {
        "accept": "*/*",
        "accept-language": "en",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-gpc": "1"
      },
      "method": "GET",
      "mode": "cors",
      "credentials": "omit"
    })
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const didDocumentJson = await response.json();

    const resolved = DIDDocument.fromJSON(didDocumentJson)

    return resolved;
  }
}