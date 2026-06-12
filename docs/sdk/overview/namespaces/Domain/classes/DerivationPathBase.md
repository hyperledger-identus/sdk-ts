[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / DerivationPathBase

# Abstract Class: DerivationPathBase\<T\>

Defined in: packages/shared/domain/build/index.d.ts:1812

## Extended by

- [`DeprecatedDerivationPath`](DeprecatedDerivationPath.md)
- [`PrismDerivationPath`](PrismDerivationPath.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`BaseSchema`](../interfaces/BaseSchema.md) |

## Constructors

### Constructor

> **new DerivationPathBase**\<`T`\>(`variables`: `T`): `DerivationPathBase`\<`T`\>

Defined in: packages/shared/domain/build/index.d.ts:1814

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `variables` | `T` |

#### Returns

`DerivationPathBase`\<`T`\>

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-axes"></a> `axes` | `abstract` | [`AxesArray`](AxesArray.md) | packages/shared/domain/build/index.d.ts:1816 |
| <a id="property-index"></a> `index` | `abstract` | `number` | packages/shared/domain/build/index.d.ts:1818 |
| <a id="property-schema"></a> `schema` | `abstract` | `string` | packages/shared/domain/build/index.d.ts:1817 |

## Methods

### toString() {#tostring}

> `abstract` **toString**(): `string`

Defined in: packages/shared/domain/build/index.d.ts:1815

#### Returns

`string`
