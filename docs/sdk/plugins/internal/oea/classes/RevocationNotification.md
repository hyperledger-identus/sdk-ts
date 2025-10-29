[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / RevocationNotification

# Class: RevocationNotification

Defined in: [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L14)

## Constructors

### Constructor

> **new RevocationNotification**(`body`: [`PrismRevocationBody`](../interfaces/PrismRevocationBody.md), `from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md)): `RevocationNotification`

Defined in: [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L17)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`PrismRevocationBody`](../interfaces/PrismRevocationBody.md) |
| `from` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `to` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |

#### Returns

`RevocationNotification`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="body"></a> `body` | `public` | [`PrismRevocationBody`](../interfaces/PrismRevocationBody.md) | `undefined` | [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L18) |
| <a id="from"></a> `from` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L19) |
| <a id="to"></a> `to` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L20) |
| <a id="type"></a> `type` | `static` | `"https://atalaprism.io/revocation_notification/1.0/revoke"` | `OEA.ProtocolIds.PrismRevocation` | [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L15) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L23)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

***

### fromMessage() {#frommessage}

> `static` **fromMessage**(`message`: [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)): `RevocationNotification`

Defined in: [src/plugins/internal/oea/protocols/RevocationNotfiication.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/protocols/RevocationNotfiication.ts#L35)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](../../../../overview/namespaces/Domain/classes/Message.md) |

#### Returns

`RevocationNotification`
