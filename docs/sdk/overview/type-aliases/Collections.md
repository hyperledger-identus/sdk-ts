[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Collections

# Type Alias: Collections\<T\>

> **Collections**\<`T`\> = `{ [key in keyof T]: T[key] }`

Defined in: [packages/lib/sdk/src/pluto/types.ts:82](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/pluto/types.ts#L82)

Typed map of all RIDB collections as returned by [makeCollections](../functions/makeCollections.md).

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` | `ReturnType`\<*typeof* [`makeCollections`](../functions/makeCollections.md)\> | Defaults to the return type of `makeCollections`. |
