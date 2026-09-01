[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / RequiredPrismDIDSecretKeys

# Type Alias: RequiredPrismDIDSecretKeys

> **RequiredPrismDIDSecretKeys** = [`DIDKeys`](DIDKeys.md) & \{ `MASTER_KEY`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md); \}

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/types.ts#L27)

Key map that **requires** a `MASTER_KEY` entry.
Used as the payload for Prism DID creation where a master signing key
is mandatory.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `MASTER_KEY` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) | [packages/lib/sdk/src/castor/methods/types.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/types.ts#L28) |
