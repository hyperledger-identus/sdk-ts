[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / asArray

# Function: asArray()

## Call Signature

> **asArray**\<`T`\>(`items`: [`Nil`](../type-aliases/Nil.md) \| `T` \| `T`[]): `T`[]

Defined in: packages/shared/domain/build/index.d.ts:179

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

Defined in: packages/shared/domain/build/index.d.ts:186

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
