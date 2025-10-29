[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / AttachmentDescriptor

# Class: AttachmentDescriptor

Defined in: [src/domain/models/MessageAttachment.ts:40](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/MessageAttachment.ts#L40)

## Constructors

### Constructor

> **new AttachmentDescriptor**(`data`: [`AttachmentData`](../type-aliases/AttachmentData.md), `mediaType?`: `string`, `id?`: `string`, `filename?`: `string`[], `format?`: `string`, `lastModTime?`: `string`, `byteCount?`: `number`, `description?`: `string`): `AttachmentDescriptor`

Defined in: [src/domain/models/MessageAttachment.ts:41](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/MessageAttachment.ts#L41)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`AttachmentData`](../type-aliases/AttachmentData.md) |
| `mediaType?` | `string` |
| `id?` | `string` |
| `filename?` | `string`[] |
| `format?` | `string` |
| `lastModTime?` | `string` |
| `byteCount?` | `number` |
| `description?` | `string` |

#### Returns

`AttachmentDescriptor`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="bytecount"></a> `byteCount?` | `readonly` | `number` | [src/domain/models/MessageAttachment.ts:48](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/MessageAttachment.ts#L48) |
| <a id="data"></a> `data` | `readonly` | [`AttachmentData`](../type-aliases/AttachmentData.md) | [src/domain/models/MessageAttachment.ts:42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/MessageAttachment.ts#L42) |
| <a id="description"></a> `description?` | `readonly` | `string` | [src/domain/models/MessageAttachment.ts:49](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/MessageAttachment.ts#L49) |
| <a id="filename"></a> `filename?` | `readonly` | `string`[] | [src/domain/models/MessageAttachment.ts:45](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/MessageAttachment.ts#L45) |
| <a id="format"></a> `format?` | `readonly` | `string` | [src/domain/models/MessageAttachment.ts:46](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/MessageAttachment.ts#L46) |
| <a id="id"></a> `id` | `readonly` | `string` | [src/domain/models/MessageAttachment.ts:44](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/MessageAttachment.ts#L44) |
| <a id="lastmodtime"></a> `lastModTime?` | `readonly` | `string` | [src/domain/models/MessageAttachment.ts:47](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/MessageAttachment.ts#L47) |
| <a id="mediatype"></a> `mediaType?` | `readonly` | `string` | [src/domain/models/MessageAttachment.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/MessageAttachment.ts#L43) |

## Accessors

### payload {#payload}

#### Get Signature

> **get** **payload**(): `any`

Defined in: [src/domain/models/MessageAttachment.ts:52](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/MessageAttachment.ts#L52)

##### Returns

`any`

## Methods

### build() {#build}

> `static` **build**\<`T`\>(`payload`: `T`, `id`: `string`, `mediaType`: `string`, `filename?`: `string`[], `format?`: `string`, `lastModTime?`: `string`, `byteCount?`: `number`, `description?`: `string`): `AttachmentDescriptor`

Defined in: [src/domain/models/MessageAttachment.ts:56](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/MessageAttachment.ts#L56)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `payload` | `T` | `undefined` |
| `id` | `string` | `...` |
| `mediaType` | `string` | `"application/json"` |
| `filename?` | `string`[] | `undefined` |
| `format?` | `string` | `undefined` |
| `lastModTime?` | `string` | `undefined` |
| `byteCount?` | `number` | `undefined` |
| `description?` | `string` | `undefined` |

#### Returns

`AttachmentDescriptor`
