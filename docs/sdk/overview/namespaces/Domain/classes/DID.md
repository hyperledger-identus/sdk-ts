[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / DID

# Class: DID

Defined in: [src/domain/models/DID.ts:4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DID.ts#L4)

Storable
define properties a Domain object must implement to be compatible with Pluto

## Implements

- [`Storable`](../namespaces/Pluto/interfaces/Storable.md)

## Constructors

### Constructor

> **new DID**(`schema`: `string`, `method`: `string`, `methodId`: `string`): `DID`

Defined in: [src/domain/models/DID.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DID.ts#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `schema` | `string` |
| `method` | `string` |
| `methodId` | `string` |

#### Returns

`DID`

## Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="method"></a> `method` | `readonly` | `string` | - | [src/domain/models/DID.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DID.ts#L7) |
| <a id="methodid"></a> `methodId` | `readonly` | `string` | - | [src/domain/models/DID.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DID.ts#L8) |
| <a id="schema"></a> `schema` | `readonly` | `string` | - | [src/domain/models/DID.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DID.ts#L6) |
| <a id="uuid"></a> `uuid` | `readonly` | `string` | Universally Unique Identifier. should be unique across all items. | [src/domain/models/DID.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DID.ts#L5) |

## Methods

### toString() {#tostring}

> **toString**(): `string`

Defined in: [src/domain/models/DID.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DID.ts#L17)

Returns a string representation of an object.

#### Returns

`string`

***

### from() {#from}

> `static` **from**(`value`: `unknown`): `DID`

Defined in: [src/domain/models/DID.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DID.ts#L26)

parse value into a DID

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | some representation of a DID |

#### Returns

`DID`

***

### fromString() {#fromstring}

> `static` **fromString**(`text`: `string`): `DID`

Defined in: [src/domain/models/DID.ts:47](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DID.ts#L47)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`DID`

***

### getMethodFromString() {#getmethodfromstring}

> `static` **getMethodFromString**(`text`: `string`): `string` \| `undefined`

Defined in: [src/domain/models/DID.ts:70](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DID.ts#L70)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`string` \| `undefined`

***

### getMethodIdFromString() {#getmethodidfromstring}

> `static` **getMethodIdFromString**(`text`: `string`): `string`

Defined in: [src/domain/models/DID.ts:75](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DID.ts#L75)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`string`

***

### getSchemaFromString() {#getschemafromstring}

> `static` **getSchemaFromString**(`text`: `string`): `string` \| `undefined`

Defined in: [src/domain/models/DID.ts:65](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DID.ts#L65)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`string` \| `undefined`

***

### replaceDID() {#replacedid}

> `static` **replaceDID**(`oldStr`: `string`, `did`: `DID`): `string`

Defined in: [src/domain/models/DID.ts:81](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DID.ts#L81)

replace with a new DID

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldStr` | `string` |
| `did` | `DID` |

#### Returns

`string`
