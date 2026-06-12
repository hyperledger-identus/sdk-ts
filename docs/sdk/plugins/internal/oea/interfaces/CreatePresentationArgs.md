[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / CreatePresentationArgs

# Interface: CreatePresentationArgs

Defined in: [packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts#L15)

Asyncronously create a verifiablePresentation from a valid stored verifiableCredential
This is used when the verified requests a specific verifiable credential, this will create the actual
instance of the presentation which we can share with the verifier.

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="property-credential"></a> `credential` | [`Credential`](../../../../overview/namespaces/Domain/classes/Credential.md) | [packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts#L16) |
| <a id="property-request"></a> `request` | [`RequestPresentation`](../classes/RequestPresentation.md) | [packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts#L17) |
