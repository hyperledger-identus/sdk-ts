[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / JsonObj

# Type Alias: JsonObj\<T\>

> **JsonObj**\<`T`\> = `Record`\<`string`, `T` \| `undefined`\>

Defined in: [packages/lib/sdk/src/utils/types.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/types.ts#L27)

Construct a Type with a set of string Keys of type T | undefined
To be used in place of Record for arbitrary data structs
where the key does not definitely result in a T

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |
