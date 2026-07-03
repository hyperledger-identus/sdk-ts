[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DIDKeys

# Type Alias: DIDKeys

> **DIDKeys** = `{ [key in Exclude<keyof RequiredPrismDIDKeys, "MASTER_KEY">]?: PrivateKey[] }`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/types.ts#L18)

Optional private-key map for DID creation, keyed by usage name.
Every usage except `MASTER_KEY` is optional and holds an array of
[PrivateKey](../namespaces/Domain/classes/PrivateKey.md) instances.
