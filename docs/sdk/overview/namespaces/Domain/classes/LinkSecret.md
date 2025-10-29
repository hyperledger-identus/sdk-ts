[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / LinkSecret

# Class: LinkSecret

Defined in: [src/domain/models/LinkSecret.ts:3](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/LinkSecret.ts#L3)

Storable
define properties a Domain object must implement to be compatible with Pluto

## Implements

- [`Storable`](../namespaces/Pluto/interfaces/Storable.md)

## Constructors

### Constructor

> **new LinkSecret**(`secret`: `string`, `name`: `string`): `LinkSecret`

Defined in: [src/domain/models/LinkSecret.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/LinkSecret.ts#L8)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `secret` | `string` | `undefined` |
| `name` | `string` | `LinkSecret.defaultName` |

#### Returns

`LinkSecret`

## Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="name"></a> `name` | `readonly` | `string` | `LinkSecret.defaultName` | - | [src/domain/models/LinkSecret.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/LinkSecret.ts#L10) |
| <a id="secret"></a> `secret` | `readonly` | `string` | `undefined` | - | [src/domain/models/LinkSecret.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/LinkSecret.ts#L9) |
| <a id="uuid"></a> `uuid` | `readonly` | `string` | `undefined` | Universally Unique Identifier. should be unique across all items. | [src/domain/models/LinkSecret.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/LinkSecret.ts#L6) |
| <a id="defaultname"></a> `defaultName` | `static` | `string` | `"default"` | - | [src/domain/models/LinkSecret.ts:4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/LinkSecret.ts#L4) |
