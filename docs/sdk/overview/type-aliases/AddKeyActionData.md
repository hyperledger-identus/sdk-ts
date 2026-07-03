[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / AddKeyActionData

# Type Alias: AddKeyActionData

> **AddKeyActionData** = \{ `id`: `string`; `publicKey`: [`PublicKey`](../namespaces/Domain/classes/PublicKey.md); `purpose`: [`PrismDIDKeyUsageType`](../namespaces/Domain/type-aliases/PrismDIDKeyUsageType.md); \}

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:54](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/prism/index.ts#L54)

Add a new public key to the DID Document.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-id"></a> `id` | `string` | Verification method id, unique within the Document. | [packages/lib/sdk/src/castor/methods/prism/index.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/prism/index.ts#L56) |
| <a id="property-publickey"></a> `publicKey` | [`PublicKey`](../namespaces/Domain/classes/PublicKey.md) | The public key material to add. | [packages/lib/sdk/src/castor/methods/prism/index.ts:60](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/prism/index.ts#L60) |
| <a id="property-purpose"></a> `purpose` | [`PrismDIDKeyUsageType`](../namespaces/Domain/type-aliases/PrismDIDKeyUsageType.md) | The key usage this key fulfils. | [packages/lib/sdk/src/castor/methods/prism/index.ts:58](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/prism/index.ts#L58) |
