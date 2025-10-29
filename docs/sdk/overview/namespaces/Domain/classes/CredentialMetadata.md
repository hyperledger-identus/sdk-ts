[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / CredentialMetadata

# Class: CredentialMetadata

Defined in: [src/domain/models/CredentialMetadata.ts:4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/CredentialMetadata.ts#L4)

Storable
define properties a Domain object must implement to be compatible with Pluto

## Implements

- [`Storable`](../namespaces/Pluto/interfaces/Storable.md)

## Constructors

### Constructor

> **new CredentialMetadata**(`type`: [`CredentialType`](../enumerations/CredentialType.md), `name`: `string`, `json`: `Record`\<`string`, `any`\>): `CredentialMetadata`

Defined in: [src/domain/models/CredentialMetadata.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/CredentialMetadata.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`CredentialType`](../enumerations/CredentialType.md) |
| `name` | `string` |
| `json` | `Record`\<`string`, `any`\> |

#### Returns

`CredentialMetadata`

## Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="name"></a> `name` | `readonly` | `string` | - | [src/domain/models/CredentialMetadata.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/CredentialMetadata.ts#L9) |
| <a id="type"></a> `type` | `readonly` | [`CredentialType`](../enumerations/CredentialType.md) | - | [src/domain/models/CredentialMetadata.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/CredentialMetadata.ts#L8) |
| <a id="uuid"></a> `uuid` | `readonly` | `string` | Universally Unique Identifier. should be unique across all items. | [src/domain/models/CredentialMetadata.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/CredentialMetadata.ts#L5) |

## Methods

### isType() {#istype}

> **isType**(`type`: [`CredentialType`](../enumerations/CredentialType.md)): `boolean`

Defined in: [src/domain/models/CredentialMetadata.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/CredentialMetadata.ts#L19)

Check the CredentialType of this Metadata

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | [`CredentialType`](../enumerations/CredentialType.md) |  |

#### Returns

`boolean`

***

### toJSON() {#tojson}

> **toJSON**(): `Record`\<`string`, `any`\>

Defined in: [src/domain/models/CredentialMetadata.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/CredentialMetadata.ts#L28)

Get the raw CredentialMetadata JSON

#### Returns

`Record`\<`string`, `any`\>

JSON
