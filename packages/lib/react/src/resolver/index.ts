import { Domain } from "@hyperledger/identus-sdk";


export type ResolverClass = new (apollo: Domain.Apollo) => Domain.DIDResolver;

export function createResolver(baseUrl: string) {
    return class implements Domain.DIDResolver {
        method: string = "prism";

        async resolve(didString: string) {
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
            const data = await response.json() as Record<string, unknown>;
            return Domain.DIDDocument.fromJSON({ ...data, id: didString });
        }
    }
}


