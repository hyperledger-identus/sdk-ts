[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Normalize

# Type Alias: Normalize\<T\>

> **Normalize**\<`T`\> = `T` *extends* `object` ? `{ [P in keyof T]: T[P] }` : `T`

Defined in: [packages/lib/sdk/src/utils/types.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/utils/types.ts#L34)

Flatten intersect to show single interface

Usage: `type flat = Normalize<A & B>`

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
