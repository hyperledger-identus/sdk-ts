[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / RequestPresentation

# Class: RequestPresentation

Defined in: [packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts#L20)

## Constructors

### Constructor

> **new RequestPresentation**(`body`: [`RequestPresentationBody`](../interfaces/RequestPresentationBody.md), `attachments`: [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[], `from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `thid?`: `string`, `id?`: `string`): `RequestPresentation`

Defined in: [packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts#L23)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`RequestPresentationBody`](../interfaces/RequestPresentationBody.md) |
| `attachments` | [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[] |
| `from` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `to` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `thid?` | `string` |
| `id?` | `string` |

#### Returns

`RequestPresentation`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-attachments"></a> `attachments` | `public` | [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[] | `undefined` | [packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts#L25) |
| <a id="property-body"></a> `body` | `public` | [`RequestPresentationBody`](../interfaces/RequestPresentationBody.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts#L24) |
| <a id="property-from"></a> `from` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts#L26) |
| <a id="property-id"></a> `id` | `public` | `string` | `undefined` | [packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts#L29) |
| <a id="property-thid"></a> `thid?` | `public` | `string` | `undefined` | [packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts#L28) |
| <a id="property-to"></a> `to` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts#L27) |
| <a id="property-type"></a> `type` | `static` | `"https://didcomm.atalaprism.io/present-proof/3.0/request-presentation"` | `OEA.ProtocolIds.RequestPresentation` | [packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts#L21) |

## Accessors

### decodedAttachments {#decodedattachments}

#### Get Signature

> **get** **decodedAttachments**(): `any`[]

Defined in: [packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts#L34)

##### Returns

`any`[]

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts:52](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts#L52)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

***

### fromMessage() {#frommessage}

> `static` **fromMessage**(`fromMessage`: [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)): `RequestPresentation`

Defined in: [packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts:65](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/RequestPresentation.ts#L65)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fromMessage` | [`Message`](../../../../overview/namespaces/Domain/classes/Message.md) |

#### Returns

`RequestPresentation`
