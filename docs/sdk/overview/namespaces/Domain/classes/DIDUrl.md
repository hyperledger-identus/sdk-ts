[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / DIDUrl

# Class: DIDUrl

Defined in: [src/domain/models/DIDUrl.ts:3](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDUrl.ts#L3)

## Constructors

### Constructor

> **new DIDUrl**(`did`: [`DID`](DID.md), `path`: `string`[], `parameters`: `Map`\<`string`, `string`\>, `fragment`: `string`): `DIDUrl`

Defined in: [src/domain/models/DIDUrl.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDUrl.ts#L9)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `did` | [`DID`](DID.md) | `undefined` |
| `path` | `string`[] | `[]` |
| `parameters` | `Map`\<`string`, `string`\> | `...` |
| `fragment` | `string` | `""` |

#### Returns

`DIDUrl`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="did"></a> `did` | [`DID`](DID.md) | [src/domain/models/DIDUrl.ts:4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDUrl.ts#L4) |
| <a id="fragment"></a> `fragment` | `string` | [src/domain/models/DIDUrl.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDUrl.ts#L7) |
| <a id="parameters"></a> `parameters` | `Map`\<`string`, `string`\> | [src/domain/models/DIDUrl.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDUrl.ts#L6) |
| <a id="path"></a> `path` | `string`[] | [src/domain/models/DIDUrl.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDUrl.ts#L5) |

## Methods

### fragmentString() {#fragmentstring}

> **fragmentString**(): `string`

Defined in: [src/domain/models/DIDUrl.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDUrl.ts#L35)

#### Returns

`string`

***

### pathString() {#pathstring}

> **pathString**(): `string`

Defined in: [src/domain/models/DIDUrl.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDUrl.ts#L25)

#### Returns

`string`

***

### queryString() {#querystring}

> **queryString**(): `string`

Defined in: [src/domain/models/DIDUrl.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDUrl.ts#L29)

#### Returns

`string`

***

### string() {#string}

> **string**(): `string`

Defined in: [src/domain/models/DIDUrl.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDUrl.ts#L21)

#### Returns

`string`
