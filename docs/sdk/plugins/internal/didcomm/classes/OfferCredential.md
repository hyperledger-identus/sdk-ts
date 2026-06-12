[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / OfferCredential

# Class: OfferCredential

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L23)

## Constructors

### Constructor

> **new OfferCredential**(`body`: [`OfferCredentialBody`](../interfaces/OfferCredentialBody.md), `attachments`: [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[], `from?`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to?`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `thid?`: `string`, `id?`: `string`): `OfferCredential`

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L26)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`OfferCredentialBody`](../interfaces/OfferCredentialBody.md) |
| `attachments` | [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[] |
| `from?` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `to?` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `thid?` | `string` |
| `id?` | `string` |

#### Returns

`OfferCredential`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-attachments"></a> `attachments` | `public` | [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[] | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L28) |
| <a id="property-body"></a> `body` | `public` | [`OfferCredentialBody`](../interfaces/OfferCredentialBody.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L27) |
| <a id="property-from"></a> `from?` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L29) |
| <a id="property-id"></a> `id` | `public` | `string` | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L32) |
| <a id="property-thid"></a> `thid?` | `public` | `string` | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L31) |
| <a id="property-to"></a> `to?` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L30) |
| <a id="property-type"></a> `type` | `static` | `"https://didcomm.org/issue-credential/3.0/offer-credential"` | `ProtocolIds.OfferCredential` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L24) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:47](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L47)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

***

### fromMessage() {#frommessage}

> `static` **fromMessage**(`msg`: [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)): `OfferCredential`

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:60](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L60)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | [`Message`](../../../../overview/namespaces/Domain/classes/Message.md) |

#### Returns

`OfferCredential`
