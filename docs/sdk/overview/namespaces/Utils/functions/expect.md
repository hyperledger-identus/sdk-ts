[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Utils](../README.md) / expect

# Function: expect()

> **expect**\<`T`\>(`value`: `T`, `error?`: `string` \| `Error` \| [`Ctor`](../interfaces/Ctor.md)\<`Error`\>): `Exclude`\<`T`, [`Nil`](../type-aliases/Nil.md)\>

Defined in: [src/utils/guards.ts:119](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/guards.ts#L119)

expect
assert a value is notNil and return the value typed as such
panic otherwise

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `T` | the value to check |
| `error?` | `string` \| `Error` \| [`Ctor`](../interfaces/Ctor.md)\<`Error`\> | custom error |

## Returns

`Exclude`\<`T`, [`Nil`](../type-aliases/Nil.md)\>
