[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / ProposePresentation

# Class: ProposePresentation

Defined in: [src/plugins/internal/oea/protocols/ProposePresentation.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/ProposePresentation.ts#L18)

## Constructors

### Constructor

> **new ProposePresentation**(`body`: [`ProposePresentationBody`](../interfaces/ProposePresentationBody.md), `attachments`: [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[], `from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `thid?`: `string`, `id?`: `string`): `ProposePresentation`

Defined in: [src/plugins/internal/oea/protocols/ProposePresentation.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/ProposePresentation.ts#L21)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`ProposePresentationBody`](../interfaces/ProposePresentationBody.md) |
| `attachments` | [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[] |
| `from` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `to` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `thid?` | `string` |
| `id?` | `string` |

#### Returns

`ProposePresentation`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="attachments"></a> `attachments` | `public` | [`AttachmentDescriptor`](../../../../overview/namespaces/Domain/classes/AttachmentDescriptor.md)[] | `undefined` | [src/plugins/internal/oea/protocols/ProposePresentation.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/ProposePresentation.ts#L23) |
| <a id="body"></a> `body` | `public` | [`ProposePresentationBody`](../interfaces/ProposePresentationBody.md) | `undefined` | [src/plugins/internal/oea/protocols/ProposePresentation.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/ProposePresentation.ts#L22) |
| <a id="from"></a> `from` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [src/plugins/internal/oea/protocols/ProposePresentation.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/ProposePresentation.ts#L24) |
| <a id="id"></a> `id` | `public` | `string` | `undefined` | [src/plugins/internal/oea/protocols/ProposePresentation.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/ProposePresentation.ts#L27) |
| <a id="thid"></a> `thid?` | `public` | `string` | `undefined` | [src/plugins/internal/oea/protocols/ProposePresentation.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/ProposePresentation.ts#L26) |
| <a id="to"></a> `to` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [src/plugins/internal/oea/protocols/ProposePresentation.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/ProposePresentation.ts#L25) |
| <a id="type"></a> `type` | `static` | `"https://didcomm.atalaprism.io/present-proof/3.0/propose-presentation"` | `OEA.ProtocolIds.ProposePresentation` | [src/plugins/internal/oea/protocols/ProposePresentation.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/ProposePresentation.ts#L19) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [src/plugins/internal/oea/protocols/ProposePresentation.ts:42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/ProposePresentation.ts#L42)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

***

### fromMessage() {#frommessage}

> `static` **fromMessage**(`fromMessage`: [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)): `ProposePresentation`

Defined in: [src/plugins/internal/oea/protocols/ProposePresentation.ts:55](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/ProposePresentation.ts#L55)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fromMessage` | [`Message`](../../../../overview/namespaces/Domain/classes/Message.md) |

#### Returns

`ProposePresentation`
