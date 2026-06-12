[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / DIDUrl

# Class: DIDUrl

Defined in: packages/shared/domain/build/index.d.ts:1006

## Constructors

### Constructor

> **new DIDUrl**(`did`: [`DID`](DID.md), `path?`: `string`[], `parameters?`: `Map`\<`string`, `string`\>, `fragment?`: `string`): `DIDUrl`

Defined in: packages/shared/domain/build/index.d.ts:1011

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](DID.md) |
| `path?` | `string`[] |
| `parameters?` | `Map`\<`string`, `string`\> |
| `fragment?` | `string` |

#### Returns

`DIDUrl`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="property-did"></a> `did` | [`DID`](DID.md) | packages/shared/domain/build/index.d.ts:1007 |
| <a id="property-fragment"></a> `fragment` | `string` | packages/shared/domain/build/index.d.ts:1010 |
| <a id="property-parameters"></a> `parameters` | `Map`\<`string`, `string`\> | packages/shared/domain/build/index.d.ts:1009 |
| <a id="property-path"></a> `path` | `string`[] | packages/shared/domain/build/index.d.ts:1008 |

## Methods

### fragmentString() {#fragmentstring}

> **fragmentString**(): `string`

Defined in: packages/shared/domain/build/index.d.ts:1015

#### Returns

`string`

***

### pathString() {#pathstring}

> **pathString**(): `string`

Defined in: packages/shared/domain/build/index.d.ts:1013

#### Returns

`string`

***

### queryString() {#querystring}

> **queryString**(): `string`

Defined in: packages/shared/domain/build/index.d.ts:1014

#### Returns

`string`

***

### string() {#string}

> **string**(): `string`

Defined in: packages/shared/domain/build/index.d.ts:1012

#### Returns

`string`
