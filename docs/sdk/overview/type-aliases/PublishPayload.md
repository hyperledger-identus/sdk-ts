[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PublishPayload

# Type Alias: PublishPayload

> **PublishPayload** = \{ `did`: [`DID`](../namespaces/Domain/classes/DID.md); `key`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md); \}

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:157](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/prism/index.ts#L157)

Options for publishing a Prism DID to the ledger.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-did"></a> `did` | [`DID`](../namespaces/Domain/classes/DID.md) | The long-form DID to publish. | [packages/lib/sdk/src/castor/methods/prism/index.ts:161](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/prism/index.ts#L161) |
| <a id="property-key"></a> `key` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) | Master signing key used to sign the Atala operation. | [packages/lib/sdk/src/castor/methods/prism/index.ts:159](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/prism/index.ts#L159) |
