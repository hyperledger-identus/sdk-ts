[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Key

# Abstract Class: Key

Defined in: [src/domain/models/keyManagement/Key.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L11)

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
| <a id="keyspecification"></a> `keySpecification` | `abstract` | `Map`\<`string`, `string`\> | [src/domain/models/keyManagement/Key.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L13) |
| <a id="raw"></a> `raw` | `abstract` | `Uint8Array` | [src/domain/models/keyManagement/Key.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L15) |
| <a id="size"></a> `size` | `abstract` | `number` | [src/domain/models/keyManagement/Key.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L14) |
| <a id="to"></a> `to` | `abstract` | \{ `Buffer`: () => `Buffer`; `String`: (`encoding?`: `BufferEncoding`) => `string`; \} | [src/domain/models/keyManagement/Key.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L16) |
| `to.Buffer` | `public` | () => `Buffer` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:31](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/ExportableKey.ts#L31) |
| `to.String` | `public` | (`encoding?`: `BufferEncoding`) => `string` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:32](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/ExportableKey.ts#L32) |
| <a id="type"></a> `type` | `abstract` | [`KeyTypes`](../enumerations/KeyTypes.md) | [src/domain/models/keyManagement/Key.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L12) |

## Accessors

### alg {#alg}

#### Get Signature

> **get** **alg**(): [`JWT_ALG`](../enumerations/JWT_ALG.md)

Defined in: [src/domain/models/keyManagement/Key.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L25)

##### Returns

[`JWT_ALG`](../enumerations/JWT_ALG.md)

***

### curve {#curve}

#### Get Signature

> **get** **curve**(): `string`

Defined in: [src/domain/models/keyManagement/Key.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L20)

##### Returns

`string`

## Methods

### canVerify() {#canverify}

> **canVerify**(): `this is VerifiableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:53](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L53)

#### Returns

`this is VerifiableKey`

***

### getEncoded() {#getencoded}

> `abstract` **getEncoded**(): `Uint8Array`

Defined in: [src/domain/models/keyManagement/Key.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L18)

#### Returns

`Uint8Array`

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

***

### isDerivable() {#isderivable}

> **isDerivable**(): `this is DerivableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L37)

#### Returns

`this is DerivableKey`

***

### isExportable() {#isexportable}

> **isExportable**(): `this is All`

Defined in: [src/domain/models/keyManagement/Key.ts:41](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L41)

#### Returns

`this is All`

***

### isSignable() {#issignable}

> **isSignable**(): `this is SignableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:45](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L45)

#### Returns

`this is SignableKey`

***

### isStorable() {#isstorable}

> **isStorable**(): `this is StorableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:49](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/Key.ts#L49)

#### Returns

`this is StorableKey`
