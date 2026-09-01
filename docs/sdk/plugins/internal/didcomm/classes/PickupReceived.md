[**@hyperledger/identus-sdk v8.1.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / PickupReceived

# Class: PickupReceived

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L14)

## Constructors

### Constructor

> **new PickupReceived**(`body`: [`PickupReceivedBody`](../interfaces/PickupReceivedBody.md), `from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md)): `PickupReceived`

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L17)

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
| <a id="property-body"></a> `body` | `public` | [`PickupReceivedBody`](../interfaces/PickupReceivedBody.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L18) |
| <a id="property-from"></a> `from` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L19) |
| <a id="property-to"></a> `to` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L20) |
| <a id="property-type"></a> `type` | `static` | `"https://didcomm.org/messagepickup/3.0/messages-received"` | `ProtocolIds.PickupReceived` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L15) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L23)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)
