[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreatePeerDIDArgs

# Interface: CreatePeerDIDArgs

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts#L10)

Arguments for creating a new peer DID

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-services"></a> `services` | [`Service`](../namespaces/Domain/namespaces/DIDDocument/classes/Service.md)[] | Array of services to include in the DID document | [packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts#L12) |
| <a id="property-updatemediator"></a> `updateMediator` | `boolean` | Whether to update the mediator with the new DID's key list | [packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts#L14) |
