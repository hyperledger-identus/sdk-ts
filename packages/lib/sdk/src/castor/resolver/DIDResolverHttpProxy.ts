
import {
  type DIDResolver,
  DIDDocument,
  CastorError,
} from "@hyperledger/identus-domain";

const truncateForError = (text: string, max = 512): string =>
  text.length > max ? `${text.slice(0, max)}…` : text;

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

    let response: Response;

    try {
      response = await fetch(url, {
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
      });
    }
    catch (err) {
      const cause = err instanceof Error ? err.message : String(err);
      throw new CastorError.NotPossibleToResolveDID(
        `HTTP DID resolver request failed for "${url}": ${cause}`
      );
    }

    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");
      throw new CastorError.NotPossibleToResolveDID(
        `DID resolver returned HTTP ${response.status} ${response.statusText} for "${url}"${errorBody.length > 0
          ? `: ${truncateForError(errorBody)}`
          : ""
        }`
      );
    }

    const rawBody = await response.text();

    let didDocumentJson: unknown;
    try {
      didDocumentJson = JSON.parse(rawBody);
    }
    catch {
      throw new CastorError.NotPossibleToResolveDID(
        `DID resolver returned invalid JSON (${response.status})${rawBody.length > 0 ? `: ${truncateForError(rawBody)}` : ""}`
      );
    }

    try {
      return DIDDocument.fromJSON(didDocumentJson);
    }
    catch (err) {
      const cause = err instanceof Error ? err.message : String(err);
      throw new CastorError.NotPossibleToResolveDID(
        `Unable to interpret resolver response as DID document: ${cause}`
      );
    }
  }
}
