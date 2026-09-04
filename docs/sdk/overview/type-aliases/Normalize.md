[**@hyperledger/identus-sdk v8.1.2**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Normalize

# Type Alias: Normalize\<T\>

> **Normalize**\<`T`\> = `T` *extends* `object` ? `{ [P in keyof T]: T[P] }` : `T`

Defined in: [packages/lib/sdk/src/utils/types.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/utils/types.ts#L34)

Flatten intersect to show single interface

Usage: `type flat = Normalize<A & B>`

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
