[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / MetadataOf

# Type Alias: MetadataOf\<T\>

> **MetadataOf**\<`T`\> = `T` *extends* \{ `publish`: (`arg`: `never`) => `Promise`\<infer M\>; \} ? `M` : `T` *extends* \{ `update`: (`arg`: `never`) => `Promise`\<infer M\>; \} ? `M` : `T` *extends* \{ `deactivate`: (`arg`: `never`) => `Promise`\<infer M\>; \} ? `M` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:105](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/types.ts#L105)

Extract the metadata type returned by the lifecycle operations of a
DID method instance type. Uses `publish` as the canonical source.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
