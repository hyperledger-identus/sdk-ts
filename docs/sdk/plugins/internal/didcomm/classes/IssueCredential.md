[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / IssueCredential

# Class: IssueCredential

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L19)

## Constructors

### Constructor

> **new IssueCredential**(`body`: [`IssueCredentialBody`](../interfaces/IssueCredentialBody.md), `attachments`: [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[], `from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `thid?`: `string`, `id?`: `string`): `IssueCredential`

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L22)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`IssueCredentialBody`](../interfaces/IssueCredentialBody.md) |
| `attachments` | [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[] |
| `from` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `to` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `thid?` | `string` |
| `id?` | `string` |

#### Returns

`IssueCredential`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-attachments"></a> `attachments` | `public` | [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[] | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L24) |
| <a id="property-body"></a> `body` | `public` | [`IssueCredentialBody`](../interfaces/IssueCredentialBody.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L23) |
| <a id="property-from"></a> `from` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L25) |
| <a id="property-id"></a> `id` | `public` | `string` | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L28) |
| <a id="property-thid"></a> `thid?` | `public` | `string` | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L27) |
| <a id="property-to"></a> `to` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L26) |
| <a id="property-type"></a> `type` | `static` | `"https://didcomm.org/issue-credential/3.0/issue-credential"` | `ProtocolIds.IssueCredential` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L20) |

## Methods

### getCredentialStrings() {#getcredentialstrings}

> **getCredentialStrings**(): `string`[]

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L44)

#### Returns

`string`[]

***

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L31)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

***

### fromMessage() {#frommessage}

> `static` **fromMessage**(`msg`: [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)): `IssueCredential`

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:57](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L57)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | [`Message`](../../../../overview/namespaces/Domain/classes/Message.md) |

#### Returns

`IssueCredential`
