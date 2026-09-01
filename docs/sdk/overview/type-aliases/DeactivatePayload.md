[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DeactivatePayload

# Type Alias: DeactivatePayload

> **DeactivatePayload** = \{ `did`: [`DID`](../namespaces/Domain/classes/DID.md); `key`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md); `previousOperationHash`: `Uint8Array`; \}

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/prism/index.ts#L30)

Options for deactivating a Prism DID.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-did"></a> `did` | [`DID`](../namespaces/Domain/classes/DID.md) | The DID to deactivate. | [packages/lib/sdk/src/castor/methods/prism/index.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/prism/index.ts#L34) |
| <a id="property-key"></a> `key` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) | Master signing key used to authorise the deactivation. | [packages/lib/sdk/src/castor/methods/prism/index.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/prism/index.ts#L32) |
| <a id="property-previousoperationhash"></a> `previousOperationHash` | `Uint8Array` | The previous operation hash (last operation hash, create, update, deactivate) | [packages/lib/sdk/src/castor/methods/prism/index.ts:36](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/prism/index.ts#L36) |
