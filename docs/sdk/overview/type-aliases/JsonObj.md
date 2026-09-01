[**@hyperledger/identus-sdk v8.1.2**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / JsonObj

# Type Alias: JsonObj\<T\>

> **JsonObj**\<`T`\> = `Record`\<`string`, `T` \| `undefined`\>

Defined in: [packages/lib/sdk/src/utils/types.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/utils/types.ts#L27)

Construct a Type with a set of string Keys of type T | undefined
To be used in place of Record for arbitrary data structs
where the key does not definitely result in a T

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |
