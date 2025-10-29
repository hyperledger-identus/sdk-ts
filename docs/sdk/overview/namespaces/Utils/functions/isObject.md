[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Utils](../README.md) / isObject

# Function: isObject()

> **isObject**\<`T`\>(`value`: `T`): value is Exclude\<T & Record\<string, any\>, any\[\] \| Nil \| ((args: any) =\> any)\>

Defined in: [src/utils/guards.ts:46](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/guards.ts#L46)

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

value is Exclude\<T & Record\<string, any\>, any\[\] \| Nil \| ((args: any) =\> any)\>
