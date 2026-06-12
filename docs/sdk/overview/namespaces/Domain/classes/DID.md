[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / DID

# Class: DID

Defined in: packages/shared/domain/build/index.d.ts:530

Storable
define properties a Domain object must implement to be compatible with Pluto

## Implements

- [`Storable`](../namespaces/Pluto/interfaces/Storable.md)

## Constructors

### Constructor

> **new DID**(`schema`: `string`, `method`: `string`, `methodId`: `string`): `DID`

Defined in: packages/shared/domain/build/index.d.ts:535

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
| <a id="property-method"></a> `method` | `readonly` | `string` | - | packages/shared/domain/build/index.d.ts:533 |
| <a id="property-methodid"></a> `methodId` | `readonly` | `string` | - | packages/shared/domain/build/index.d.ts:534 |
| <a id="property-schema"></a> `schema` | `readonly` | `string` | - | packages/shared/domain/build/index.d.ts:532 |
| <a id="property-uuid"></a> `uuid` | `readonly` | `string` | Universally Unique Identifier. should be unique across all items. | packages/shared/domain/build/index.d.ts:531 |

## Methods

### toString() {#tostring}

> **toString**(): `string`

Defined in: packages/shared/domain/build/index.d.ts:536

Returns a string representation of an object.

#### Returns

`string`

***

### from() {#from}

> `static` **from**(`value`: `unknown`): `DID`

Defined in: packages/shared/domain/build/index.d.ts:542

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

Defined in: packages/shared/domain/build/index.d.ts:543

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`DID`

***

### replaceDID() {#replacedid}

> `static` **replaceDID**(`oldStr`: `string`, `did`: `DID`): `string`

Defined in: packages/shared/domain/build/index.d.ts:545

replace with a new DID

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldStr` | `string` |
| `did` | `DID` |

#### Returns

`string`
