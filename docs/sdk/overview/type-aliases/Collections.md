[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Collections

# Type Alias: Collections\<T\>

> **Collections**\<`T`\> = `{ [key in keyof T]: T[key] }`

Defined in: [packages/lib/sdk/src/pluto/types.ts:82](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/types.ts#L82)

Typed map of all RIDB collections as returned by [makeCollections](../functions/makeCollections.md).

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` | `ReturnType`\<*typeof* [`makeCollections`](../functions/makeCollections.md)\> | Defaults to the return type of `makeCollections`. |
