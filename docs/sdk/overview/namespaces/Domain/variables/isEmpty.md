[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / isEmpty

# Variable: isEmpty()

> `const` **isEmpty**: (`value`: `unknown`) => `value is Nil`

Defined in: packages/shared/domain/build/index.d.ts:146

isEmpty
Logic - check a given value is considered empty
empty depends on typeof value:
- null
- undefined
- array: length = 0
- string: length = 0

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

## Returns

`value is Nil`

## See

 - isNil
 - isString
 - isArray
