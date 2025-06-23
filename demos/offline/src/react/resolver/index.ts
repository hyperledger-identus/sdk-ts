import SDK from "@hyperledger/identus-sdk";


export type ResolverClass = new (apollo: SDK.Domain.Apollo) => SDK.Domain.DIDResolver;

export function createResolver(baseUrl: string) {
    return class implements SDK.Domain.DIDResolver {
        method: string = "prism";

        async resolve(didString: string): Promise<SDK.Domain.DIDDocument> {
            const url = baseUrl.replace(/\/$/, "") + "/" + didString;
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
            const data = await response.json();
            const didDocument = data;
            const servicesProperty = new SDK.Domain.DIDDocument.Services(
                didDocument.service ?? []
            )
            const verificationMethodsProperty = new SDK.Domain.DIDDocument.VerificationMethods(
                didDocument.verificationMethod ?? []
            )
            const coreProperties: SDK.Domain.DIDDocument.CoreProperty[] = [];
            const authenticate: SDK.Domain.DIDDocument.Authentication[] = [];
            const assertion: SDK.Domain.DIDDocument.AssertionMethod[] = [];

            for (const verificationMethod of didDocument.verificationMethod) {
                const isAssertion = didDocument.assertionMethod?.find((method: string) => method === verificationMethod.id)
                if (isAssertion) {
                    assertion.push(new SDK.Domain.DIDDocument.AssertionMethod([isAssertion], [verificationMethod]))
                }
                const isAuthentication = didDocument.authentication?.find((method: string) => method === verificationMethod.id)
                if (isAuthentication) {
                    authenticate.push(new SDK.Domain.DIDDocument.Authentication([isAuthentication], [verificationMethod]));
                }
            }
            coreProperties.push(...authenticate);
            coreProperties.push(...assertion);

            if (servicesProperty.values.length > 0) {
                coreProperties.push(servicesProperty);
            }

            if (verificationMethodsProperty.values.length > 0) {
                coreProperties.push(verificationMethodsProperty);
            }

            const resolved = new SDK.Domain.DIDDocument(
                SDK.Domain.DID.fromString(didString),
                coreProperties
            );
            return resolved;
        }
    }
}

