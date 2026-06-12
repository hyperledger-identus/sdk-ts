[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DIDKeys

# Type Alias: DIDKeys

> **DIDKeys** = `{ [key in Exclude<keyof RequiredPrismDIDKeys, "MASTER_KEY">]?: PrivateKey[] }`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/types.ts#L18)

Optional private-key map for DID creation, keyed by usage name.
Every usage except `MASTER_KEY` is optional and holds an array of
[PrivateKey](../namespaces/Domain/classes/PrivateKey.md) instances.
