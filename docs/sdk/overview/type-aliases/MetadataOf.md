[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / MetadataOf

# Type Alias: MetadataOf\<T\>

> **MetadataOf**\<`T`\> = `T` *extends* \{ `publish`: (`arg`: `never`) => `Promise`\<infer M\>; \} ? `M` : `T` *extends* \{ `update`: (`arg`: `never`) => `Promise`\<infer M\>; \} ? `M` : `T` *extends* \{ `deactivate`: (`arg`: `never`) => `Promise`\<infer M\>; \} ? `M` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:105](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/types.ts#L105)

Extract the metadata type returned by the lifecycle operations of a
DID method instance type. Uses `publish` as the canonical source.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
