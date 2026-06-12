[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / RequestCredential

# Class: RequestCredential

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L25)

## Constructors

### Constructor

> **new RequestCredential**(`body`: [`RequestCredentialBody`](../interfaces/RequestCredentialBody.md), `attachments`: [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[], `from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to?`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `thid?`: `string`, `id?`: `string`): `RequestCredential`

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L28)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`RequestCredentialBody`](../interfaces/RequestCredentialBody.md) |
| `attachments` | [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[] |
| `from` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `to?` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `thid?` | `string` |
| `id?` | `string` |

#### Returns

`RequestCredential`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-attachments"></a> `attachments` | `public` | [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[] | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L30) |
| <a id="property-body"></a> `body` | `public` | [`RequestCredentialBody`](../interfaces/RequestCredentialBody.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L29) |
| <a id="property-from"></a> `from` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L31) |
| <a id="property-id"></a> `id` | `public` | `string` | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L34) |
| <a id="property-thid"></a> `thid?` | `public` | `string` | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L33) |
| <a id="property-to"></a> `to?` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L32) |
| <a id="property-type"></a> `type` | `static` | `"https://didcomm.org/issue-credential/3.0/request-credential"` | `ProtocolIds.RequestCredential` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L26) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:52](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L52)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

***

### fromMessage() {#frommessage}

> `static` **fromMessage**(`msg`: [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)): `RequestCredential`

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:65](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L65)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | [`Message`](../../../../overview/namespaces/Domain/classes/Message.md) |

#### Returns

`RequestCredential`
