[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / AttachmentDescriptor

# Class: AttachmentDescriptor

Defined in: packages/shared/domain/build/index.d.ts:275

## Constructors

### Constructor

> **new AttachmentDescriptor**(`data`: [`AttachmentData`](../type-aliases/AttachmentData.md), `mediaType?`: `string`, `id?`: `string`, `filename?`: `string`[], `format?`: `string`, `lastModTime?`: `string`, `byteCount?`: `number`, `description?`: `string`): `AttachmentDescriptor`

Defined in: packages/shared/domain/build/index.d.ts:284

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
| <a id="property-bytecount"></a> `byteCount?` | `readonly` | `number` | packages/shared/domain/build/index.d.ts:282 |
| <a id="property-data"></a> `data` | `readonly` | [`AttachmentData`](../type-aliases/AttachmentData.md) | packages/shared/domain/build/index.d.ts:276 |
| <a id="property-description"></a> `description?` | `readonly` | `string` | packages/shared/domain/build/index.d.ts:283 |
| <a id="property-filename"></a> `filename?` | `readonly` | `string`[] | packages/shared/domain/build/index.d.ts:279 |
| <a id="property-format"></a> `format?` | `readonly` | `string` | packages/shared/domain/build/index.d.ts:280 |
| <a id="property-id"></a> `id` | `readonly` | `string` | packages/shared/domain/build/index.d.ts:278 |
| <a id="property-lastmodtime"></a> `lastModTime?` | `readonly` | `string` | packages/shared/domain/build/index.d.ts:281 |
| <a id="property-mediatype"></a> `mediaType?` | `readonly` | `string` | packages/shared/domain/build/index.d.ts:277 |

## Accessors

### payload {#payload}

#### Get Signature

> **get** **payload**(): `any`

Defined in: packages/shared/domain/build/index.d.ts:285

##### Returns

`any`

## Methods

### build() {#build}

> `static` **build**\<`T`\>(`payload`: `T`, `id?`: `string`, `mediaType?`: `string`, `filename?`: `string`[], `format?`: `string`, `lastModTime?`: `string`, `byteCount?`: `number`, `description?`: `string`): `AttachmentDescriptor`

Defined in: packages/shared/domain/build/index.d.ts:293

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | `T` |
| `id?` | `string` |
| `mediaType?` | `string` |
| `filename?` | `string`[] |
| `format?` | `string` |
| `lastModTime?` | `string` |
| `byteCount?` | `number` |
| `description?` | `string` |

#### Returns

`AttachmentDescriptor`

***

### extractJSON() {#extractjson}

> `static` **extractJSON**(`attachment`: `AttachmentDescriptor`): `any`

Defined in: packages/shared/domain/build/index.d.ts:292

Get the presumed JSON from the attachment

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `attachment` | `AttachmentDescriptor` | - |

#### Returns

`any`
