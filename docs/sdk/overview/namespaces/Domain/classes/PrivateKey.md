[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / PrivateKey

# Abstract Class: PrivateKey

Defined in: [src/domain/models/keyManagement/PrivateKey.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/PrivateKey.ts#L6)

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
| <a id="keyspecification"></a> `keySpecification` | `abstract` | `Map`\<`string`, `string`\> | - | [`Key`](Key.md).[`keySpecification`](Key.md#keyspecification) | [src/domain/models/keyManagement/Key.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L13) |
| <a id="raw"></a> `raw` | `abstract` | `Uint8Array` | - | [`Key`](Key.md).[`raw`](Key.md#raw) | [src/domain/models/keyManagement/Key.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L15) |
| <a id="size"></a> `size` | `abstract` | `number` | - | [`Key`](Key.md).[`size`](Key.md#size) | [src/domain/models/keyManagement/Key.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L14) |
| <a id="to"></a> `to` | `abstract` | \{ `Buffer`: () => `Buffer`; `String`: (`encoding?`: `BufferEncoding`) => `string`; \} | - | [`Key`](Key.md).[`to`](Key.md#to) | [src/domain/models/keyManagement/Key.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L16) |
| `to.Buffer` | `public` | () => `Buffer` | - | - | [src/domain/models/keyManagement/exportable/ExportableKey.ts:31](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/ExportableKey.ts#L31) |
| `to.String` | `public` | (`encoding?`: `BufferEncoding`) => `string` | - | - | [src/domain/models/keyManagement/exportable/ExportableKey.ts:32](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/ExportableKey.ts#L32) |
| <a id="type"></a> `type` | `abstract` | [`KeyTypes`](../enumerations/KeyTypes.md) | - | [`Key`](Key.md).[`type`](Key.md#type) | [src/domain/models/keyManagement/Key.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L12) |
| <a id="uuid"></a> `uuid` | `readonly` | `string` | Universally Unique Identifier. should be unique across all items. | - | [src/domain/models/keyManagement/PrivateKey.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/PrivateKey.ts#L9) |

## Accessors

### alg {#alg}

#### Get Signature

> **get** **alg**(): [`JWT_ALG`](../enumerations/JWT_ALG.md)

Defined in: [src/domain/models/keyManagement/Key.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L25)

##### Returns

[`JWT_ALG`](../enumerations/JWT_ALG.md)

#### Inherited from

[`Key`](Key.md).[`alg`](Key.md#alg)

***

### curve {#curve}

#### Get Signature

> **get** **curve**(): `string`

Defined in: [src/domain/models/keyManagement/PrivateKey.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/PrivateKey.ts#L11)

##### Returns

`string`

#### Overrides

[`Key`](Key.md).[`curve`](Key.md#curve)

***

### index {#index}

#### Get Signature

> **get** **index**(): `number` \| `undefined`

Defined in: [src/domain/models/keyManagement/PrivateKey.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/PrivateKey.ts#L23)

Derivation index.
The index of the key in the derivation path.
Only applicable for HD keys

##### Returns

`number` \| `undefined`

***

### value {#value}

#### Get Signature

> **get** **value**(): `Uint8Array`\<`ArrayBuffer`\>

Defined in: [src/domain/models/keyManagement/PrivateKey.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/PrivateKey.ts#L30)

##### Returns

`Uint8Array`\<`ArrayBuffer`\>

## Methods

### canVerify() {#canverify}

> **canVerify**(): `this is VerifiableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:53](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L53)

#### Returns

`this is VerifiableKey`

#### Inherited from

[`Key`](Key.md).[`canVerify`](Key.md#canverify)

***

### getEncoded() {#getencoded}

> `abstract` **getEncoded**(): `Uint8Array`

Defined in: [src/domain/models/keyManagement/Key.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L18)

#### Returns

`Uint8Array`

#### Inherited from

[`Key`](Key.md).[`getEncoded`](Key.md#getencoded)

***

### getProperty() {#getproperty}

> **getProperty**(`name`: `string`): `string` \| `undefined`

Defined in: [src/domain/models/keyManagement/Key.ts:57](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L57)

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

Defined in: [src/domain/models/keyManagement/Key.ts:61](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L61)

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

Defined in: [src/domain/models/keyManagement/Key.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L37)

#### Returns

`this is DerivableKey`

#### Inherited from

[`Key`](Key.md).[`isDerivable`](Key.md#isderivable)

***

### isExportable() {#isexportable}

> **isExportable**(): `this is All`

Defined in: [src/domain/models/keyManagement/Key.ts:41](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L41)

#### Returns

`this is All`

#### Inherited from

[`Key`](Key.md).[`isExportable`](Key.md#isexportable)

***

### isSignable() {#issignable}

> **isSignable**(): `this is SignableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:45](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L45)

#### Returns

`this is SignableKey`

#### Inherited from

[`Key`](Key.md).[`isSignable`](Key.md#issignable)

***

### isStorable() {#isstorable}

> **isStorable**(): `this is StorableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:49](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L49)

#### Returns

`this is StorableKey`

#### Inherited from

[`Key`](Key.md).[`isStorable`](Key.md#isstorable)

***

### publicKey() {#publickey}

> `abstract` **publicKey**(): [`PublicKey`](PublicKey.md)

Defined in: [src/domain/models/keyManagement/PrivateKey.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/PrivateKey.ts#L7)

#### Returns

[`PublicKey`](PublicKey.md)
