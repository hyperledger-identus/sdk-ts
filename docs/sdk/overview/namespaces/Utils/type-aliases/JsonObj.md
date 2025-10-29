[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Utils](../README.md) / JsonObj

# Type Alias: JsonObj\<T\>

> **JsonObj**\<`T`\> = `Record`\<`string`, `T` \| `undefined`\>

Defined in: [src/utils/types.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/types.ts#L26)

Construct a Type with a set of string Keys of type T | undefined
To be used in place of Record for arbitrary data structs
where the key does not definitely result in a T

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |
