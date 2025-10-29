[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / ForwardMessage

# Class: ForwardMessage

Defined in: [src/mercury/forward/ForwardMessage.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/forward/ForwardMessage.ts#L8)

## Constructors

### Constructor

> **new ForwardMessage**(`body`: [`ForwardMessageBody`](../interfaces/ForwardMessageBody.md), `from`: [`DID`](../namespaces/Domain/classes/DID.md), `to`: [`DID`](../namespaces/Domain/classes/DID.md), `encryptedMessage`: `string`, `id`: `string`): `ForwardMessage`

Defined in: [src/mercury/forward/ForwardMessage.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/forward/ForwardMessage.ts#L11)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`ForwardMessageBody`](../interfaces/ForwardMessageBody.md) |
| `from` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `to` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `encryptedMessage` | `string` |
| `id` | `string` |

#### Returns

`ForwardMessage`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="body"></a> `body` | `public` | [`ForwardMessageBody`](../interfaces/ForwardMessageBody.md) | `undefined` | [src/mercury/forward/ForwardMessage.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/forward/ForwardMessage.ts#L12) |
| <a id="encryptedmessage"></a> `encryptedMessage` | `public` | `string` | `undefined` | [src/mercury/forward/ForwardMessage.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/forward/ForwardMessage.ts#L15) |
| <a id="from"></a> `from` | `public` | [`DID`](../namespaces/Domain/classes/DID.md) | `undefined` | [src/mercury/forward/ForwardMessage.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/forward/ForwardMessage.ts#L13) |
| <a id="id"></a> `id` | `public` | `string` | `undefined` | [src/mercury/forward/ForwardMessage.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/forward/ForwardMessage.ts#L16) |
| <a id="to"></a> `to` | `public` | [`DID`](../namespaces/Domain/classes/DID.md) | `undefined` | [src/mercury/forward/ForwardMessage.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/forward/ForwardMessage.ts#L14) |
| <a id="type"></a> `type` | `static` | `string` | `"https://didcomm.org/routing/2.0/forward"` | [src/mercury/forward/ForwardMessage.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/forward/ForwardMessage.ts#L9) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../namespaces/Domain/classes/Message.md)

Defined in: [src/mercury/forward/ForwardMessage.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/forward/ForwardMessage.ts#L19)

#### Returns

[`Message`](../namespaces/Domain/classes/Message.md)
