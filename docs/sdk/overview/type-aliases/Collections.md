[**@hyperledger/identus-sdk v8.1.1**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Collections

# Type Alias: Collections\<T\>

> **Collections**\<`T`\> = `{ [key in keyof T]: T[key] }`

Defined in: [packages/lib/sdk/src/pluto/types.ts:82](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/pluto/types.ts#L82)

Typed map of all RIDB collections as returned by [makeCollections](../functions/makeCollections.md).

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` | `ReturnType`\<*typeof* [`makeCollections`](../functions/makeCollections.md)\> | Defaults to the return type of `makeCollections`. |
