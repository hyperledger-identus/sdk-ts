
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
    const didDocument = await response.json();
    console.log("############## " + didString)
    console.log(didDocument)

    const servicesProperty = new DIDDocument.Services(
      didDocument.service
    )
    const verificationMethodsProperty = new DIDDocument.VerificationMethods(
      didDocument.verificationMethod
    )

    console.log("############## 1111 " + didString)

    const coreProperties: DIDDocument.CoreProperty[] = [];
    const authenticate: DIDDocument.Authentication[] = [];
    const assertion: DIDDocument.AssertionMethod[] = []; //didDocument.assertionMethod;

    console.log("############## 2222 " + didDocument.verificationMethod) /// undefined


    for (const verificationMethod of didDocument.verificationMethod) {
      const isAssertion = didDocument.assertionMethod.find((method: any) => method === verificationMethod.id)
      if (isAssertion) {
        assertion.push(new DIDDocument.AssertionMethod([isAssertion], [verificationMethod]))
      }
      const isAuthentication = didDocument.authentication.find((method: any) => method === verificationMethod.id)
      if (isAuthentication) {
        authenticate.push(new DIDDocument.Authentication([isAuthentication], [verificationMethod]));
      }
    }

    console.log("############## 3333 " + didString)


    coreProperties.push(...authenticate);
    coreProperties.push(servicesProperty);
    coreProperties.push(verificationMethodsProperty);

    const resolved = new DIDDocument(
      DID.fromString(didString),
      coreProperties
    );

    console.log(resolved)

    return resolved;
  }
}