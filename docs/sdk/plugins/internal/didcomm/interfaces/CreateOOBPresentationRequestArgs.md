[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / CreateOOBPresentationRequestArgs

# Interface: CreateOOBPresentationRequestArgs

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts#L12)

Arguments for creating an out-of-band (OOB) presentation request invitation

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-accept"></a> `accept?` | `string`[] | Optional array of accepted protocols (defaults to ["didcomm/v2"]) | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts#L22) |
| <a id="property-baseurl"></a> `baseUrl?` | `string` | Optional base URL for the invitation (deprecated, not used in current implementation) | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts#L14) |
| <a id="property-from"></a> `from` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | The DID of the verifier creating the presentation request | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts#L16) |
| <a id="property-goal"></a> `goal?` | `string` | Optional human-readable goal description (defaults to "Request Presentation") | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts#L20) |
| <a id="property-goalcode"></a> `goalCode?` | `string` | Optional goal code for the invitation (defaults to "verify-credential") | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts#L18) |
| <a id="property-presentationrequest"></a> `presentationRequest` | [`RequestPresentation`](../../oea/classes/RequestPresentation.md) | The presentation request to include in the invitation | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/tasks/CreateOOBPresentationRequest.ts#L24) |
