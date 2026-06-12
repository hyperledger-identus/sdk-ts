[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Normalize

# Type Alias: Normalize\<T\>

> **Normalize**\<`T`\> = `T` *extends* `object` ? `{ [P in keyof T]: T[P] }` : `T`

Defined in: packages/shared/domain/build/index.d.ts:120

Flatten intersect to show single interface

Usage: `type flat = Normalize<A & B>`

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
