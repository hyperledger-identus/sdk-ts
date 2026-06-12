[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Normalize

# Type Alias: Normalize\<T\>

> **Normalize**\<`T`\> = `T` *extends* `object` ? `{ [P in keyof T]: T[P] }` : `T`

Defined in: [packages/lib/sdk/src/utils/types.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/types.ts#L34)

Flatten intersect to show single interface

Usage: `type flat = Normalize<A & B>`

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
