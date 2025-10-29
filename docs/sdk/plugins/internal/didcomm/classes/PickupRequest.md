[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / PickupRequest

# Class: PickupRequest

Defined in: [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L15)

## Constructors

### Constructor

> **new PickupRequest**(`body`: [`PickupRequestBody`](../interfaces/PickupRequestBody.md), `from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md)): `PickupRequest`

Defined in: [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L18)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`PickupRequestBody`](../interfaces/PickupRequestBody.md) |
| `from` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `to` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |

#### Returns

`PickupRequest`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="body"></a> `body` | `public` | [`PickupRequestBody`](../interfaces/PickupRequestBody.md) | `undefined` | [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L19) |
| <a id="from"></a> `from` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L20) |
| <a id="to"></a> `to` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L21) |
| <a id="type"></a> `type` | `static` | `"https://didcomm.org/messagepickup/3.0/delivery-request"` | `ProtocolIds.PickupRequest` | [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L16) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L24)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)
