[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Utils](../README.md) / asArray

# Function: asArray()

## Call Signature

> **asArray**\<`T`\>(`items`: [`Nil`](../type-aliases/Nil.md) \| `T` \| `T`[]): `T`[]

Defined in: [src/utils/guards.ts:81](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/guards.ts#L81)

asArray
convert a value to an array

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `items` | [`Nil`](../type-aliases/Nil.md) \| `T` \| `T`[] | the value to be converted - nullish returns empty array - single item returns array with item - array returns array |

### Returns

`T`[]

## Call Signature

> **asArray**\<`T`, `U`\>(`items`: [`Nil`](../type-aliases/Nil.md) \| `T` \| `T`[], `guard`: (`item`: `unknown`) => `item is U`): `U`[]

Defined in: [src/utils/guards.ts:88](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/guards.ts#L88)

asArray
convert a value to an array with type guard

### Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `items` | [`Nil`](../type-aliases/Nil.md) \| `T` \| `T`[] | the value to be converted |
| `guard` | (`item`: `unknown`) => `item is U` | Typeguard to filter items ensuring item types |

### Returns

`U`[]
