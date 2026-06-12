[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreatePeerDIDArgs

# Interface: CreatePeerDIDArgs

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts#L10)

Arguments for creating a new peer DID

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-services"></a> `services` | [`Service`](../namespaces/Domain/namespaces/DIDDocument/classes/Service.md)[] | Array of services to include in the DID document | [packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts#L12) |
| <a id="property-updatemediator"></a> `updateMediator` | `boolean` | Whether to update the mediator with the new DID's key list | [packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts#L14) |
