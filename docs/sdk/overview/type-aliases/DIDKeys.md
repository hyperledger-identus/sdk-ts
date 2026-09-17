[**@hyperledger/identus-sdk v8.1.3**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DIDKeys

# Type Alias: DIDKeys

> **DIDKeys** = `{ [key in Exclude<keyof RequiredPrismDIDKeys, "MASTER_KEY">]?: PrivateKey[] }`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4ce15c3080f44e7e00a0b9a53e696f0a8ec66794/packages/lib/sdk/src/castor/methods/types.ts#L18)

Optional private-key map for DID creation, keyed by usage name.
Every usage except `MASTER_KEY` is optional and holds an array of
[PrivateKey](../namespaces/Domain/classes/PrivateKey.md) instances.
