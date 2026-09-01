[**@hyperledger/identus-sdk v8.1.2**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / MetadataOf

# Type Alias: MetadataOf\<T\>

> **MetadataOf**\<`T`\> = `T` *extends* \{ `publish`: (`arg`: `never`) => `Promise`\<infer M\>; \} ? `M` : `T` *extends* \{ `update`: (`arg`: `never`) => `Promise`\<infer M\>; \} ? `M` : `T` *extends* \{ `deactivate`: (`arg`: `never`) => `Promise`\<infer M\>; \} ? `M` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:105](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/types.ts#L105)

Extract the metadata type returned by the lifecycle operations of a
DID method instance type. Uses `publish` as the canonical source.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
