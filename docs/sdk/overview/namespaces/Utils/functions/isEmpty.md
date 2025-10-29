[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Utils](../README.md) / isEmpty

# Function: isEmpty()

> **isEmpty**(`value`: `unknown`): `value is Nil`

Defined in: [src/utils/guards.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/guards.ts#L29)

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
