[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / ProposeCredential

# Class: ProposeCredential

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L21)

## Constructors

### Constructor

> **new ProposeCredential**(`body`: [`ProposeCredentialBody`](../interfaces/ProposeCredentialBody.md), `attachments`: [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[], `from?`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to?`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `thid?`: `string`, `id?`: `string`): `ProposeCredential`

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L24)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`ProposeCredentialBody`](../interfaces/ProposeCredentialBody.md) |
| `attachments` | [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[] |
| `from?` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `to?` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `thid?` | `string` |
| `id?` | `string` |

#### Returns

`ProposeCredential`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="attachments"></a> `attachments` | `public` | [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[] | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L26) |
| <a id="body"></a> `body` | `public` | [`ProposeCredentialBody`](../interfaces/ProposeCredentialBody.md) | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L25) |
| <a id="from"></a> `from?` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L27) |
| <a id="id"></a> `id` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L30) |
| <a id="thid"></a> `thid?` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L29) |
| <a id="to"></a> `to?` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L28) |
| <a id="type"></a> `type` | `static` | `"https://didcomm.org/issue-credential/3.0/propose-credential"` | `ProtocolIds.ProposeCredential` | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L22) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:33](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L33)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

***

### fromMessage() {#frommessage}

> `static` **fromMessage**(`msg`: [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)): `ProposeCredential`

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:46](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L46)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | [`Message`](../../../../overview/namespaces/Domain/classes/Message.md) |

#### Returns

`ProposeCredential`
