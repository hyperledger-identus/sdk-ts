[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / RequiredPrismDIDSecretKeys

# Type Alias: RequiredPrismDIDSecretKeys

> **RequiredPrismDIDSecretKeys** = [`DIDKeys`](DIDKeys.md) & \{ `MASTER_KEY`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md); \}

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/types.ts#L27)

Key map that **requires** a `MASTER_KEY` entry.
Used as the payload for Prism DID creation where a master signing key
is mandatory.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `MASTER_KEY` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) | [packages/lib/sdk/src/castor/methods/types.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/types.ts#L28) |
