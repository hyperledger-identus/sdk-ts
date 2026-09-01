[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / UpdatePayload

# Type Alias: UpdatePayload

> **UpdatePayload** = \{ `actions`: [`UpdateAction`](UpdateAction.md)[]; `did`: [`DID`](../namespaces/Domain/classes/DID.md); `key`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md); `previousOperationHash?`: `Uint8Array`; \}

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:138](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/prism/index.ts#L138)

Options for updating a Prism DID.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-actions"></a> `actions` | [`UpdateAction`](UpdateAction.md)[] | The actions to update the DID with. | [packages/lib/sdk/src/castor/methods/prism/index.ts:144](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/prism/index.ts#L144) |
| <a id="property-did"></a> `did` | [`DID`](../namespaces/Domain/classes/DID.md) | The DID to update. | [packages/lib/sdk/src/castor/methods/prism/index.ts:142](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/prism/index.ts#L142) |
| <a id="property-key"></a> `key` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) | Master signing key used to authorise the update. | [packages/lib/sdk/src/castor/methods/prism/index.ts:140](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/prism/index.ts#L140) |
| <a id="property-previousoperationhash"></a> `previousOperationHash?` | `Uint8Array` | SHA-256 hash of the last Atala operation applied to this DID. For the first update this is the create operation's hash, which equals the DID's state hash — defaulted from [Domain.DID.methodId](../namespaces/Domain/classes/DID.md#property-methodid) when omitted. For chained updates the caller must supply the hash of the previous update operation. | [packages/lib/sdk/src/castor/methods/prism/index.ts:153](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/prism/index.ts#L153) |
