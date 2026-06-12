[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / DIDResolver

# Abstract Class: DIDResolver

Defined in: packages/shared/domain/build/index.d.ts:1001

## Constructors

### Constructor

> **new DIDResolver**(): `DIDResolver`

#### Returns

`DIDResolver`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-method"></a> `method` | `abstract` | `string` | packages/shared/domain/build/index.d.ts:1002 |

## Methods

### resolve() {#resolve}

> `abstract` **resolve**(`didString`: `string`): `Promise`\<[`DIDDocument`](DIDDocument.md)\>

Defined in: packages/shared/domain/build/index.d.ts:1003

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `didString` | `string` |

#### Returns

`Promise`\<[`DIDDocument`](DIDDocument.md)\>
