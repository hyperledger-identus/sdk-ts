[**@hyperledger/identus-sdk v8.1.3**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / RequiredPrismDIDSecretKeys

# Type Alias: RequiredPrismDIDSecretKeys

> **RequiredPrismDIDSecretKeys** = [`DIDKeys`](DIDKeys.md) & \{ `MASTER_KEY`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md); \}

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4ce15c3080f44e7e00a0b9a53e696f0a8ec66794/packages/lib/sdk/src/castor/methods/types.ts#L27)

Key map that **requires** a `MASTER_KEY` entry.
Used as the payload for Prism DID creation where a master signing key
is mandatory.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `MASTER_KEY` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) | [packages/lib/sdk/src/castor/methods/types.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/4ce15c3080f44e7e00a0b9a53e696f0a8ec66794/packages/lib/sdk/src/castor/methods/types.ts#L28) |
