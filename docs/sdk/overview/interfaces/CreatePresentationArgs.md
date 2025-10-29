[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreatePresentationArgs

# Interface: CreatePresentationArgs

Defined in: [src/plugins/internal/oea/tasks/CreatePresentation.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/tasks/CreatePresentation.ts#L15)

Asyncronously create a verifiablePresentation from a valid stored verifiableCredential
This is used when the verified requests a specific verifiable credential, this will create the actual
instance of the presentation which we can share with the verifier.

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="credential"></a> `credential` | [`Credential`](../namespaces/Domain/classes/Credential.md) | [src/plugins/internal/oea/tasks/CreatePresentation.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/tasks/CreatePresentation.ts#L16) |
| <a id="request"></a> `request` | [`RequestPresentation`](../../plugins/internal/oea/classes/RequestPresentation.md) | [src/plugins/internal/oea/tasks/CreatePresentation.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/tasks/CreatePresentation.ts#L17) |
