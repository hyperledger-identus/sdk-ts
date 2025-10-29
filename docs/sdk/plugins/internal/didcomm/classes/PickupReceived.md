[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / PickupReceived

# Class: PickupReceived

Defined in: [src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L14)

## Constructors

### Constructor

> **new PickupReceived**(`body`: [`PickupReceivedBody`](../interfaces/PickupReceivedBody.md), `from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md)): `PickupReceived`

Defined in: [src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L17)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`PickupReceivedBody`](../interfaces/PickupReceivedBody.md) |
| `from` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `to` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |

#### Returns

`PickupReceived`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="body"></a> `body` | `public` | [`PickupReceivedBody`](../interfaces/PickupReceivedBody.md) | `undefined` | [src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L18) |
| <a id="from"></a> `from` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L19) |
| <a id="to"></a> `to` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L20) |
| <a id="type"></a> `type` | `static` | `"https://didcomm.org/messagepickup/3.0/messages-received"` | `ProtocolIds.PickupReceived` | [src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L15) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L23)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)
