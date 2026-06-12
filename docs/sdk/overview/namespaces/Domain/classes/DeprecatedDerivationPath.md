[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / DeprecatedDerivationPath

# Class: DeprecatedDerivationPath

Defined in: packages/shared/domain/build/index.d.ts:1829

## Extends

- [`DerivationPathBase`](DerivationPathBase.md)\<`DeprecatedDerivationSchema`\>

## Constructors

### Constructor

> **new DeprecatedDerivationPath**(`paths`: `number`[]): `DeprecatedDerivationPath`

Defined in: packages/shared/domain/build/index.d.ts:1831

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `paths` | `number`[] |

#### Returns

`DeprecatedDerivationPath`

#### Overrides

[`DerivationPathBase`](DerivationPathBase.md).[`constructor`](DerivationPathBase.md#constructor)

## Properties

| Property | Type | Overrides | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-schema"></a> `schema` | `string` | [`DerivationPathBase`](DerivationPathBase.md).[`schema`](DerivationPathBase.md#property-schema) | packages/shared/domain/build/index.d.ts:1830 |

## Accessors

### axes {#axes}

#### Get Signature

> **get** **axes**(): [`DerivationAxis`](DerivationAxis.md)[]

Defined in: packages/shared/domain/build/index.d.ts:1837

##### Returns

[`DerivationAxis`](DerivationAxis.md)[]

#### Overrides

[`DerivationPathBase`](DerivationPathBase.md).[`axes`](DerivationPathBase.md#property-axes)

***

### didIndex {#didindex}

#### Get Signature

> **get** **didIndex**(): [`DerivationAxis`](DerivationAxis.md)

Defined in: packages/shared/domain/build/index.d.ts:1834

##### Returns

[`DerivationAxis`](DerivationAxis.md)

***

### index {#index}

#### Get Signature

> **get** **index**(): `number`

Defined in: packages/shared/domain/build/index.d.ts:1832

##### Returns

`number`

#### Overrides

[`DerivationPathBase`](DerivationPathBase.md).[`index`](DerivationPathBase.md#property-index)

***

### keyIndex {#keyindex}

#### Get Signature

> **get** **keyIndex**(): [`DerivationAxis`](DerivationAxis.md)

Defined in: packages/shared/domain/build/index.d.ts:1835

##### Returns

[`DerivationAxis`](DerivationAxis.md)

***

### keyType {#keytype}

#### Get Signature

> **get** **keyType**(): [`DerivationAxis`](DerivationAxis.md)

Defined in: packages/shared/domain/build/index.d.ts:1833

##### Returns

[`DerivationAxis`](DerivationAxis.md)

## Methods

### toString() {#tostring}

> **toString**(): `string`

Defined in: packages/shared/domain/build/index.d.ts:1836

#### Returns

`string`

#### Overrides

[`DerivationPathBase`](DerivationPathBase.md).[`toString`](DerivationPathBase.md#tostring)
