[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / DerivationAxis

# Class: DerivationAxis

Defined in: packages/shared/domain/build/index.d.ts:1786

## Constructors

### Constructor

> **new DerivationAxis**(`i`: `number`): `DerivationAxis`

Defined in: packages/shared/domain/build/index.d.ts:1788

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `i` | `number` |

#### Returns

`DerivationAxis`

## Accessors

### hardened {#hardened}

#### Get Signature

> **get** **hardened**(): `boolean`

Defined in: packages/shared/domain/build/index.d.ts:1792

Represents if the axis is hardened

##### Returns

`boolean`

***

### number {#number}

#### Get Signature

> **get** **number**(): `number`

Defined in: packages/shared/domain/build/index.d.ts:1796

Number corresponding to the axis (different for index), always between 0 and 2^31^

##### Returns

`number`

## Methods

### toString() {#tostring}

> **toString**(): `string`

Defined in: packages/shared/domain/build/index.d.ts:1800

Renders axis as number with optional ' for hardened path, e.g. 1 or 7'

#### Returns

`string`

***

### hardened() {#hardened-1}

> `static` **hardened**(`num`: `number`): `DerivationAxis`

Defined in: packages/shared/domain/build/index.d.ts:1803

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `num` | `number` |

#### Returns

`DerivationAxis`

***

### normal() {#normal}

> `static` **normal**(`num`: `number`): `DerivationAxis`

Defined in: packages/shared/domain/build/index.d.ts:1802

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `num` | `number` |

#### Returns

`DerivationAxis`
