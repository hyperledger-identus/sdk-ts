[**@hyperledger/identus-sdk v8.1.1**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / CreatePresentationArgs

# Interface: CreatePresentationArgs

Defined in: [packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts#L15)

Asyncronously create a verifiablePresentation from a valid stored verifiableCredential
This is used when the verified requests a specific verifiable credential, this will create the actual
instance of the presentation which we can share with the verifier.

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="property-credential"></a> `credential` | [`Credential`](../../../../overview/namespaces/Domain/classes/Credential.md) | [packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts#L16) |
| <a id="property-request"></a> `request` | [`RequestPresentation`](../classes/RequestPresentation.md) | [packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts#L17) |
