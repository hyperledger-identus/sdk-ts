[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / PrivateKey

# Abstract Class: PrivateKey

Defined in: packages/shared/domain/build/index.d.ts:817

Storable
define properties a Domain object must implement to be compatible with Pluto

## Extends

- [`Key`](Key.md)

## Implements

- [`Storable`](../namespaces/Pluto/interfaces/Storable.md)

## Constructors

### Constructor

> **new PrivateKey**(): `PrivateKey`

#### Returns

`PrivateKey`

#### Inherited from

[`Key`](Key.md).[`constructor`](Key.md#constructor)

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="property-keyspecification"></a> `keySpecification` | `abstract` | `Map`\<`string`, `string`\> | - | [`Key`](Key.md).[`keySpecification`](Key.md#property-keyspecification) | packages/shared/domain/build/index.d.ts:800 |
| <a id="property-raw"></a> `raw` | `abstract` | `Uint8Array` | - | [`Key`](Key.md).[`raw`](Key.md#property-raw) | packages/shared/domain/build/index.d.ts:802 |
| <a id="property-size"></a> `size` | `abstract` | `number` | - | [`Key`](Key.md).[`size`](Key.md#property-size) | packages/shared/domain/build/index.d.ts:801 |
| <a id="property-to"></a> `to` | `abstract` | \{ `Buffer`: () => `Buffer`; `String`: (`encoding?`: `BufferEncoding`) => `string`; \} | - | [`Key`](Key.md).[`to`](Key.md#property-to) | packages/shared/domain/build/index.d.ts:803 |
| `to.Buffer` | `public` | () => `Buffer` | - | - | packages/shared/domain/build/index.d.ts:725 |
| `to.String` | `public` | (`encoding?`: `BufferEncoding`) => `string` | - | - | packages/shared/domain/build/index.d.ts:726 |
| <a id="property-type"></a> `type` | `abstract` | [`KeyTypes`](../enumerations/KeyTypes.md) | - | [`Key`](Key.md).[`type`](Key.md#property-type) | packages/shared/domain/build/index.d.ts:799 |
| <a id="property-uuid"></a> `uuid` | `readonly` | `string` | Universally Unique Identifier. should be unique across all items. | - | packages/shared/domain/build/index.d.ts:819 |

## Accessors

### alg {#alg}

#### Get Signature

> **get** **alg**(): [`JWT_ALG`](../enumerations/JWT_ALG.md)

Defined in: packages/shared/domain/build/index.d.ts:807

##### Returns

[`JWT_ALG`](../enumerations/JWT_ALG.md)

#### Inherited from

[`Key`](Key.md).[`alg`](Key.md#alg)

***

### curve {#curve}

#### Get Signature

> **get** **curve**(): `string`

Defined in: packages/shared/domain/build/index.d.ts:820

##### Returns

`string`

#### Overrides

[`Key`](Key.md).[`curve`](Key.md#curve)

***

### data {#data}

#### Get Signature

> **get** **data**(): `Uint8Array`

Defined in: packages/shared/domain/build/index.d.ts:806

##### Returns

`Uint8Array`

#### Inherited from

[`Key`](Key.md).[`data`](Key.md#data)

***

### index {#index}

#### Get Signature

> **get** **index**(): `number` \| `undefined`

Defined in: packages/shared/domain/build/index.d.ts:828

Derivation index.
The index of the key in the derivation path.
Only applicable for HD keys

##### Returns

`number` \| `undefined`

***

### value {#value}

#### Get Signature

> **get** **value**(): `Uint8Array`\<`ArrayBuffer`\>

Defined in: packages/shared/domain/build/index.d.ts:829

##### Returns

`Uint8Array`\<`ArrayBuffer`\>

## Methods

### canVerify() {#canverify}

> **canVerify**(): `this is VerifiableKey`

Defined in: packages/shared/domain/build/index.d.ts:812

#### Returns

`this is VerifiableKey`

#### Inherited from

[`Key`](Key.md).[`canVerify`](Key.md#canverify)

***

### getEncoded() {#getencoded}

> `abstract` **getEncoded**(): `Uint8Array`

Defined in: packages/shared/domain/build/index.d.ts:804

#### Returns

`Uint8Array`

#### Inherited from

[`Key`](Key.md).[`getEncoded`](Key.md#getencoded)

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

#### Inherited from

[`Key`](Key.md).[`getProperty`](Key.md#getproperty)

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

#### Inherited from

[`Key`](Key.md).[`isCurve`](Key.md#iscurve)

***

### isDerivable() {#isderivable}

> **isDerivable**(): `this is DerivableKey`

Defined in: packages/shared/domain/build/index.d.ts:808

#### Returns

`this is DerivableKey`

#### Inherited from

[`Key`](Key.md).[`isDerivable`](Key.md#isderivable)

***

### isExportable() {#isexportable}

> **isExportable**(): `this is All`

Defined in: packages/shared/domain/build/index.d.ts:809

#### Returns

`this is All`

#### Inherited from

[`Key`](Key.md).[`isExportable`](Key.md#isexportable)

***

### isSignable() {#issignable}

> **isSignable**(): `this is SignableKey`

Defined in: packages/shared/domain/build/index.d.ts:810

#### Returns

`this is SignableKey`

#### Inherited from

[`Key`](Key.md).[`isSignable`](Key.md#issignable)

***

### isStorable() {#isstorable}

> **isStorable**(): `this is StorableKey`

Defined in: packages/shared/domain/build/index.d.ts:811

#### Returns

`this is StorableKey`

#### Inherited from

[`Key`](Key.md).[`isStorable`](Key.md#isstorable)

***

### publicKey() {#publickey}

> `abstract` **publicKey**(): [`PublicKey`](PublicKey.md)

Defined in: packages/shared/domain/build/index.d.ts:818

#### Returns

[`PublicKey`](PublicKey.md)
