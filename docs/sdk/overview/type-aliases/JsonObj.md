[**@hyperledger/identus-sdk v8.1.1**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / JsonObj

# Type Alias: JsonObj\<T\>

> **JsonObj**\<`T`\> = `Record`\<`string`, `T` \| `undefined`\>

Defined in: [packages/lib/sdk/src/utils/types.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/utils/types.ts#L27)

Construct a Type with a set of string Keys of type T | undefined
To be used in place of Record for arbitrary data structs
where the key does not definitely result in a T

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |
