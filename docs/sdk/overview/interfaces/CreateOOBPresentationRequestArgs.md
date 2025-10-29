[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreateOOBPresentationRequestArgs

# Interface: CreateOOBPresentationRequestArgs

Defined in: [src/edge-agent/didcomm/CreateOOBPresentationRequest.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/didcomm/CreateOOBPresentationRequest.ts#L12)

Arguments for creating an out-of-band (OOB) presentation request invitation

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="accept"></a> `accept?` | `string`[] | Optional array of accepted protocols (defaults to ["didcomm/v2"]) | [src/edge-agent/didcomm/CreateOOBPresentationRequest.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/didcomm/CreateOOBPresentationRequest.ts#L22) |
| <a id="baseurl"></a> `baseUrl?` | `string` | Optional base URL for the invitation (deprecated, not used in current implementation) | [src/edge-agent/didcomm/CreateOOBPresentationRequest.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/didcomm/CreateOOBPresentationRequest.ts#L14) |
| <a id="from"></a> `from` | [`DID`](../namespaces/Domain/classes/DID.md) | The DID of the verifier creating the presentation request | [src/edge-agent/didcomm/CreateOOBPresentationRequest.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/didcomm/CreateOOBPresentationRequest.ts#L16) |
| <a id="goal"></a> `goal?` | `string` | Optional human-readable goal description (defaults to "Request Presentation") | [src/edge-agent/didcomm/CreateOOBPresentationRequest.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/didcomm/CreateOOBPresentationRequest.ts#L20) |
| <a id="goalcode"></a> `goalCode?` | `string` | Optional goal code for the invitation (defaults to "verify-credential") | [src/edge-agent/didcomm/CreateOOBPresentationRequest.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/didcomm/CreateOOBPresentationRequest.ts#L18) |
| <a id="presentationrequest"></a> `presentationRequest` | [`RequestPresentation`](../../plugins/internal/oea/classes/RequestPresentation.md) | The presentation request to include in the invitation | [src/edge-agent/didcomm/CreateOOBPresentationRequest.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/didcomm/CreateOOBPresentationRequest.ts#L24) |
