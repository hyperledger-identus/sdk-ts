[**@hyperledger/identus-sdk v8.1.3**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Normalize

# Type Alias: Normalize\<T\>

> **Normalize**\<`T`\> = `T` *extends* `object` ? `{ [P in keyof T]: T[P] }` : `T`

Defined in: [packages/lib/sdk/src/utils/types.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/4ce15c3080f44e7e00a0b9a53e696f0a8ec66794/packages/lib/sdk/src/utils/types.ts#L34)

Flatten intersect to show single interface

Usage: `type flat = Normalize<A & B>`

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
