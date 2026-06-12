[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / PrismDerivationPath

# Class: PrismDerivationPath

Defined in: packages/shared/domain/build/index.d.ts:1871

## Extends

- [`DerivationPathBase`](DerivationPathBase.md)\<`PrismDerivationSchema`\>

## Constructors

### Constructor

> **new PrismDerivationPath**(`paths`: `number`[]): `PrismDerivationPath`

Defined in: packages/shared/domain/build/index.d.ts:1873

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `paths` | `number`[] |

#### Returns

`PrismDerivationPath`

#### Overrides

[`DerivationPathBase`](DerivationPathBase.md).[`constructor`](DerivationPathBase.md#constructor)

## Properties

| Property | Type | Overrides | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-schema"></a> `schema` | `string` | [`DerivationPathBase`](DerivationPathBase.md).[`schema`](DerivationPathBase.md#property-schema) | packages/shared/domain/build/index.d.ts:1872 |

## Accessors

### axes {#axes}

#### Get Signature

> **get** **axes**(): [`DerivationAxis`](DerivationAxis.md)[]

Defined in: packages/shared/domain/build/index.d.ts:1882

##### Returns

[`DerivationAxis`](DerivationAxis.md)[]

#### Overrides

[`DerivationPathBase`](DerivationPathBase.md).[`axes`](DerivationPathBase.md#property-axes)

***

### didIndex {#didindex}

#### Get Signature

> **get** **didIndex**(): [`DerivationAxis`](DerivationAxis.md)

Defined in: packages/shared/domain/build/index.d.ts:1877

##### Returns

[`DerivationAxis`](DerivationAxis.md)

***

### didMethod {#didmethod}

#### Get Signature

> **get** **didMethod**(): [`DerivationAxis`](DerivationAxis.md)

Defined in: packages/shared/domain/build/index.d.ts:1876

##### Returns

[`DerivationAxis`](DerivationAxis.md)

***

### index {#index}

#### Get Signature

> **get** **index**(): `number`

Defined in: packages/shared/domain/build/index.d.ts:1874

##### Returns

`number`

#### Overrides

[`DerivationPathBase`](DerivationPathBase.md).[`index`](DerivationPathBase.md#property-index)

***

### keyIndex {#keyindex}

#### Get Signature

> **get** **keyIndex**(): [`DerivationAxis`](DerivationAxis.md)

Defined in: packages/shared/domain/build/index.d.ts:1879

##### Returns

[`DerivationAxis`](DerivationAxis.md)

***

### keyPurpose {#keypurpose}

#### Get Signature

> **get** **keyPurpose**(): [`DerivationAxis`](DerivationAxis.md)

Defined in: packages/shared/domain/build/index.d.ts:1878

##### Returns

[`DerivationAxis`](DerivationAxis.md)

***

### walletPurpose {#walletpurpose}

#### Get Signature

> **get** **walletPurpose**(): [`DerivationAxis`](DerivationAxis.md)

Defined in: packages/shared/domain/build/index.d.ts:1875

##### Returns

[`DerivationAxis`](DerivationAxis.md)

## Methods

### toString() {#tostring}

> **toString**(): `string`

Defined in: packages/shared/domain/build/index.d.ts:1881

#### Returns

`string`

#### Overrides

[`DerivationPathBase`](DerivationPathBase.md).[`toString`](DerivationPathBase.md#tostring)

***

### init() {#init}

> `static` **init**(`keyIndex?`: `number`, `keyPurpose?`: `number`, `didIndex?`: `number`): `PrismDerivationPath`

Defined in: packages/shared/domain/build/index.d.ts:1880

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `keyIndex?` | `number` |
| `keyPurpose?` | `number` |
| `didIndex?` | `number` |

#### Returns

`PrismDerivationPath`
