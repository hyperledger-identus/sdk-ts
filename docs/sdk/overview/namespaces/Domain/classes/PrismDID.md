[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / PrismDID

# Class: PrismDID

Defined in: [src/domain/models/PrismDID.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/PrismDID.ts#L5)

## Constructors

### Constructor

> **new PrismDID**(`did`: [`DID`](DID.md), `privateKey`: [`PrivateKey`](PrivateKey.md), `alias?`: `string`): `PrismDID`

Defined in: [src/domain/models/PrismDID.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/PrismDID.ts#L6)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](DID.md) |
| `privateKey` | [`PrivateKey`](PrivateKey.md) |
| `alias?` | `string` |

#### Returns

`PrismDID`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="alias"></a> `alias?` | `readonly` | `string` | [src/domain/models/PrismDID.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/PrismDID.ts#L9) |
| <a id="did"></a> `did` | `readonly` | [`DID`](DID.md) | [src/domain/models/PrismDID.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/PrismDID.ts#L7) |
| <a id="privatekey"></a> `privateKey` | `readonly` | [`PrivateKey`](PrivateKey.md) | [src/domain/models/PrismDID.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/PrismDID.ts#L8) |

## Methods

### parseMethodId() {#parsemethodid}

> `static` **parseMethodId**(`value`: `string` \| `string`[]): `string`

Defined in: [src/domain/models/PrismDID.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/PrismDID.ts#L12)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` \| `string`[] |

#### Returns

`string`
