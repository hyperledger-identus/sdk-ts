[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / isObject

# Variable: isObject()

> `const` **isObject**: \<`T`\>(`value`: `T`) => value is Exclude\<T & Record\<string, any\>, Nil \| any\[\] \| ((args: any) =\> any)\>

Defined in: packages/shared/domain/build/index.d.ts:155

isObject
Typeguard - check a value is an object in the conceptual sense not the JS sense
excluding JS overlap with:
  null
  Arrays
  Functions

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

## Returns

value is Exclude\<T & Record\<string, any\>, Nil \| any\[\] \| ((args: any) =\> any)\>
