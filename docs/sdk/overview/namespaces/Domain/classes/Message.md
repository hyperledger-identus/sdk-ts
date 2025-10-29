[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Message

# Class: Message

Defined in: [src/domain/models/Message.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L20)

Storable
define properties a Domain object must implement to be compatible with Pluto

## Implements

- [`Storable`](../namespaces/Pluto/interfaces/Storable.md)

## Constructors

### Constructor

> **new Message**(`body`: `string` \| [`JsonObj`](../../Utils/type-aliases/JsonObj.md), `id`: `string`, `piuri`: `string`, `from?`: [`DID`](DID.md), `to?`: [`DID`](DID.md), `attachments?`: [`AttachmentDescriptor`](AttachmentDescriptor.md)[], `thid?`: `string`, `extraHeaders?`: [`JsonObj`](../../Utils/type-aliases/JsonObj.md), `createdTime?`: `number`, `expiresTimePlus?`: `number`, `ack?`: `string`[], `direction?`: [`MessageDirection`](../enumerations/MessageDirection.md), `fromPrior?`: `string`, `pthid?`: `string`): `Message`

Defined in: [src/domain/models/Message.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L24)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `body` | `string` \| [`JsonObj`](../../Utils/type-aliases/JsonObj.md) | `undefined` |
| `id` | `string` | `...` |
| `piuri` | `string` | `undefined` |
| `from?` | [`DID`](DID.md) | `undefined` |
| `to?` | [`DID`](DID.md) | `undefined` |
| `attachments?` | [`AttachmentDescriptor`](AttachmentDescriptor.md)[] | `[]` |
| `thid?` | `string` | `undefined` |
| `extraHeaders?` | [`JsonObj`](../../Utils/type-aliases/JsonObj.md) | `{}` |
| `createdTime?` | `number` | `...` |
| `expiresTimePlus?` | `number` | `...` |
| `ack?` | `string`[] | `[]` |
| `direction?` | [`MessageDirection`](../enumerations/MessageDirection.md) | `MessageDirection.RECEIVED` |
| `fromPrior?` | `string` | `undefined` |
| `pthid?` | `string` | `undefined` |

#### Returns

`Message`

## Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="ack"></a> `ack` | `readonly` | `string`[] | `[]` | - | [src/domain/models/Message.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L35) |
| <a id="attachments"></a> `attachments` | `readonly` | [`AttachmentDescriptor`](AttachmentDescriptor.md)[] | `[]` | - | [src/domain/models/Message.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L30) |
| <a id="body"></a> `body` | `readonly` | [`JsonObj`](../../Utils/type-aliases/JsonObj.md) | `undefined` | - | [src/domain/models/Message.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L22) |
| <a id="createdtime"></a> `createdTime` | `readonly` | `number` | `undefined` | - | [src/domain/models/Message.ts:33](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L33) |
| <a id="direction"></a> `direction` | `public` | [`MessageDirection`](../enumerations/MessageDirection.md) | `MessageDirection.RECEIVED` | - | [src/domain/models/Message.ts:36](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L36) |
| <a id="expirestimeplus"></a> `expiresTimePlus` | `readonly` | `number` | `undefined` | - | [src/domain/models/Message.ts:34](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L34) |
| <a id="extraheaders"></a> `extraHeaders` | `readonly` | [`JsonObj`](../../Utils/type-aliases/JsonObj.md) | `{}` | - | [src/domain/models/Message.ts:32](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L32) |
| <a id="from"></a> `from?` | `readonly` | [`DID`](DID.md) | `undefined` | - | [src/domain/models/Message.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L28) |
| <a id="fromprior"></a> `fromPrior?` | `readonly` | `string` | `undefined` | - | [src/domain/models/Message.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L37) |
| <a id="id"></a> `id` | `readonly` | `string` | `undefined` | - | [src/domain/models/Message.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L26) |
| <a id="piuri"></a> `piuri` | `readonly` | `string` | `undefined` | - | [src/domain/models/Message.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L27) |
| <a id="pthid"></a> `pthid?` | `readonly` | `string` | `undefined` | - | [src/domain/models/Message.ts:38](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L38) |
| <a id="thid"></a> `thid?` | `readonly` | `string` | `undefined` | - | [src/domain/models/Message.ts:31](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L31) |
| <a id="to"></a> `to?` | `readonly` | [`DID`](DID.md) | `undefined` | - | [src/domain/models/Message.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L29) |
| <a id="uuid"></a> `uuid` | `public` | `string` | `undefined` | Universally Unique Identifier. should be unique across all items. | [src/domain/models/Message.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L21) |

## Methods

### fromJson() {#fromjson}

> `static` **fromJson**(`jsonString`: `any`): `Message`

Defined in: [src/domain/models/Message.ts:44](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L44)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `any` |

#### Returns

`Message`

***

### isBase64Attachment() {#isbase64attachment}

> `static` **isBase64Attachment**(`data`: `any`): `data is AttachmentBase64`

Defined in: [src/domain/models/Message.ts:140](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L140)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `any` |

#### Returns

`data is AttachmentBase64`

***

### isJsonAttachment() {#isjsonattachment}

> `static` **isJsonAttachment**(`data`: `any`): `data is AttachmentJsonData`

Defined in: [src/domain/models/Message.ts:144](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Message.ts#L144)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `any` |

#### Returns

`data is AttachmentJsonData`
