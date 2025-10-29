[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / DIDResolver

# Abstract Class: DIDResolver

Defined in: [src/domain/models/DIDResolver.ts:3](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDResolver.ts#L3)

## Constructors

### Constructor

> **new DIDResolver**(): `DIDResolver`

#### Returns

`DIDResolver`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="method"></a> `method` | `abstract` | `string` | [src/domain/models/DIDResolver.ts:4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDResolver.ts#L4) |

## Methods

### resolve() {#resolve}

> `abstract` **resolve**(`didString`: `string`): `Promise`\<[`DIDDocument`](DIDDocument.md)\>

Defined in: [src/domain/models/DIDResolver.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDResolver.ts#L5)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `didString` | `string` |

#### Returns

`Promise`\<[`DIDDocument`](DIDDocument.md)\>
