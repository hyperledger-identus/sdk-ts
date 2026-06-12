[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Key

# Abstract Class: Key

Defined in: packages/shared/domain/build/index.d.ts:798

## Extended by

- [`PrivateKey`](PrivateKey.md)
- [`PublicKey`](PublicKey.md)

## Constructors

### Constructor

> **new Key**(): `Key`

#### Returns

`Key`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-keyspecification"></a> `keySpecification` | `abstract` | `Map`\<`string`, `string`\> | packages/shared/domain/build/index.d.ts:800 |
| <a id="property-raw"></a> `raw` | `abstract` | `Uint8Array` | packages/shared/domain/build/index.d.ts:802 |
| <a id="property-size"></a> `size` | `abstract` | `number` | packages/shared/domain/build/index.d.ts:801 |
| <a id="property-to"></a> `to` | `abstract` | \{ `Buffer`: () => `Buffer`; `String`: (`encoding?`: `BufferEncoding`) => `string`; \} | packages/shared/domain/build/index.d.ts:803 |
| `to.Buffer` | `public` | () => `Buffer` | packages/shared/domain/build/index.d.ts:725 |
| `to.String` | `public` | (`encoding?`: `BufferEncoding`) => `string` | packages/shared/domain/build/index.d.ts:726 |
| <a id="property-type"></a> `type` | `abstract` | [`KeyTypes`](../enumerations/KeyTypes.md) | packages/shared/domain/build/index.d.ts:799 |

## Accessors

### alg {#alg}

#### Get Signature

> **get** **alg**(): [`JWT_ALG`](../enumerations/JWT_ALG.md)

Defined in: packages/shared/domain/build/index.d.ts:807

##### Returns

[`JWT_ALG`](../enumerations/JWT_ALG.md)

***

### curve {#curve}

#### Get Signature

> **get** **curve**(): `string`

Defined in: packages/shared/domain/build/index.d.ts:805

##### Returns

`string`

***

### data {#data}

#### Get Signature

> **get** **data**(): `Uint8Array`

Defined in: packages/shared/domain/build/index.d.ts:806

##### Returns

`Uint8Array`

## Methods

### canVerify() {#canverify}

> **canVerify**(): `this is VerifiableKey`

Defined in: packages/shared/domain/build/index.d.ts:812

#### Returns

`this is VerifiableKey`

***

### getEncoded() {#getencoded}

> `abstract` **getEncoded**(): `Uint8Array`

Defined in: packages/shared/domain/build/index.d.ts:804

#### Returns

`Uint8Array`

***

### getProperty() {#getproperty}

> **getProperty**(`name`: `string`): `string` \| `undefined`

Defined in: packages/shared/domain/build/index.d.ts:813

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`string` \| `undefined`

***

### isCurve() {#iscurve}

> **isCurve**\<`T`\>(`curve`: `string`): `this is T`

Defined in: packages/shared/domain/build/index.d.ts:814

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `curve` | `string` |

#### Returns

`this is T`

***

### isDerivable() {#isderivable}

> **isDerivable**(): `this is DerivableKey`

Defined in: packages/shared/domain/build/index.d.ts:808

#### Returns

`this is DerivableKey`

***

### isExportable() {#isexportable}

> **isExportable**(): `this is All`

Defined in: packages/shared/domain/build/index.d.ts:809

#### Returns

`this is All`

***

### isSignable() {#issignable}

> **isSignable**(): `this is SignableKey`

Defined in: packages/shared/domain/build/index.d.ts:810

#### Returns

`this is SignableKey`

***

### isStorable() {#isstorable}

> **isStorable**(): `this is StorableKey`

Defined in: packages/shared/domain/build/index.d.ts:811

#### Returns

`this is StorableKey`
