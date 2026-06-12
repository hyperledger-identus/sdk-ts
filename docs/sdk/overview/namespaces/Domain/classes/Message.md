[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Message

# Class: Message

Defined in: packages/shared/domain/build/index.d.ts:300

Storable
define properties a Domain object must implement to be compatible with Pluto

## Implements

- [`Storable`](../namespaces/Pluto/interfaces/Storable.md)

## Constructors

### Constructor

> **new Message**(`body`: `string` \| [`JsonObj`](../type-aliases/JsonObj.md)\<`any`\>, `id`: `string` \| `undefined`, `piuri`: `string`, `from?`: [`DID`](DID.md), `to?`: [`DID`](DID.md), `attachments?`: [`AttachmentDescriptor`](AttachmentDescriptor.md)[], `thid?`: `string`, `extraHeaders?`: [`JsonObj`](../type-aliases/JsonObj.md)\<`any`\>, `createdTime?`: `number`, `expiresTimePlus?`: `number`, `ack?`: `string`[], `direction?`: [`MessageDirection`](../enumerations/MessageDirection.md), `fromPrior?`: `string`, `pthid?`: `string`): `Message`

Defined in: packages/shared/domain/build/index.d.ts:316

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | `string` \| [`JsonObj`](../type-aliases/JsonObj.md)\<`any`\> |
| `id` | `string` \| `undefined` |
| `piuri` | `string` |
| `from?` | [`DID`](DID.md) |
| `to?` | [`DID`](DID.md) |
| `attachments?` | [`AttachmentDescriptor`](AttachmentDescriptor.md)[] |
| `thid?` | `string` |
| `extraHeaders?` | [`JsonObj`](../type-aliases/JsonObj.md)\<`any`\> |
| `createdTime?` | `number` |
| `expiresTimePlus?` | `number` |
| `ack?` | `string`[] |
| `direction?` | [`MessageDirection`](../enumerations/MessageDirection.md) |
| `fromPrior?` | `string` |
| `pthid?` | `string` |

#### Returns

`Message`

## Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-ack"></a> `ack` | `readonly` | `string`[] | - | packages/shared/domain/build/index.d.ts:310 |
| <a id="property-attachments"></a> `attachments` | `readonly` | [`AttachmentDescriptor`](AttachmentDescriptor.md)[] | - | packages/shared/domain/build/index.d.ts:305 |
| <a id="property-body"></a> `body` | `readonly` | [`JsonObj`](../type-aliases/JsonObj.md) | - | packages/shared/domain/build/index.d.ts:315 |
| <a id="property-createdtime"></a> `createdTime` | `readonly` | `number` | - | packages/shared/domain/build/index.d.ts:308 |
| <a id="property-direction"></a> `direction` | `public` | [`MessageDirection`](../enumerations/MessageDirection.md) | - | packages/shared/domain/build/index.d.ts:311 |
| <a id="property-expirestimeplus"></a> `expiresTimePlus` | `readonly` | `number` | - | packages/shared/domain/build/index.d.ts:309 |
| <a id="property-extraheaders"></a> `extraHeaders` | `readonly` | [`JsonObj`](../type-aliases/JsonObj.md) | - | packages/shared/domain/build/index.d.ts:307 |
| <a id="property-from"></a> `from?` | `readonly` | [`DID`](DID.md) | - | packages/shared/domain/build/index.d.ts:303 |
| <a id="property-fromprior"></a> `fromPrior?` | `readonly` | `string` | - | packages/shared/domain/build/index.d.ts:312 |
| <a id="property-id"></a> `id` | `readonly` | `string` | - | packages/shared/domain/build/index.d.ts:301 |
| <a id="property-piuri"></a> `piuri` | `readonly` | `string` | - | packages/shared/domain/build/index.d.ts:302 |
| <a id="property-pthid"></a> `pthid?` | `readonly` | `string` | - | packages/shared/domain/build/index.d.ts:313 |
| <a id="property-thid"></a> `thid?` | `readonly` | `string` | - | packages/shared/domain/build/index.d.ts:306 |
| <a id="property-to"></a> `to?` | `readonly` | [`DID`](DID.md) | - | packages/shared/domain/build/index.d.ts:304 |
| <a id="property-uuid"></a> `uuid` | `public` | `string` | Universally Unique Identifier. should be unique across all items. | packages/shared/domain/build/index.d.ts:314 |

## Methods

### fromJson() {#fromjson}

> `static` **fromJson**(`jsonString`: `any`): `Message`

Defined in: packages/shared/domain/build/index.d.ts:317

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `any` |

#### Returns

`Message`

***

### isBase64Attachment() {#isbase64attachment}

> `static` **isBase64Attachment**(`data`: `any`): `data is AttachmentBase64`

Defined in: packages/shared/domain/build/index.d.ts:318

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `any` |

#### Returns

`data is AttachmentBase64`

***

### isJsonAttachment() {#isjsonattachment}

> `static` **isJsonAttachment**(`data`: `any`): `data is AttachmentJsonData`

Defined in: packages/shared/domain/build/index.d.ts:319

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `any` |

#### Returns

`data is AttachmentJsonData`
