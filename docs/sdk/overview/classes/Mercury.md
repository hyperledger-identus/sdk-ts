[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Mercury

# Class: Mercury

Defined in: [src/mercury/Mercury.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/Mercury.ts#L19)

Mercury is a powerful and flexible library for working with decentralized identifiers and secure communications
protocols. Whether you are a developer looking to build a secure and private messaging app or a more complex
decentralized system requiring trusted peer-to-peer connections, Mercury provides the tools and features you need to
establish, manage, and secure your communications easily.

 Mercury

## Implements

- [`Mercury`](../namespaces/Domain/interfaces/Mercury.md)

## Constructors

### Constructor

> **new Mercury**(`castor`: [`Castor`](../namespaces/Domain/interfaces/Castor.md), `protocol`: [`DIDCommProtocol`](../interfaces/DIDCommProtocol.md), `api`: [`Api`](../namespaces/Domain/interfaces/Api.md)): `Mercury`

Defined in: [src/mercury/Mercury.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/Mercury.ts#L27)

Creates an instance of Mercury.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `castor` | [`Castor`](../namespaces/Domain/interfaces/Castor.md) |  |
| `protocol` | [`DIDCommProtocol`](../interfaces/DIDCommProtocol.md) |  |
| `api` | [`Api`](../namespaces/Domain/interfaces/Api.md) |  |

#### Returns

`Mercury`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="api"></a> `api` | `public` | [`Api`](../namespaces/Domain/interfaces/Api.md) | [src/mercury/Mercury.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/Mercury.ts#L30) |
| <a id="castor"></a> `castor` | `public` | [`Castor`](../namespaces/Domain/interfaces/Castor.md) | [src/mercury/Mercury.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/Mercury.ts#L28) |
| <a id="protocol"></a> `protocol` | `public` | [`DIDCommProtocol`](../interfaces/DIDCommProtocol.md) | [src/mercury/Mercury.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/Mercury.ts#L29) |

## Methods

### packMessage() {#packmessage}

> **packMessage**(`message`: [`Message`](../namespaces/Domain/classes/Message.md)): `Promise`\<`string`\>

Defined in: [src/mercury/Mercury.ts:40](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/Mercury.ts#L40)

Asynchronously packs a given message object into a string representation. This function may throw an error if the
message object is invalid.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`Message`](../namespaces/Domain/classes/Message.md) |  |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`Mercury`](../namespaces/Domain/interfaces/Mercury.md).[`packMessage`](../namespaces/Domain/interfaces/Mercury.md#packmessage)

***

### sendMessage() {#sendmessage}

> **sendMessage**\<`T`\>(`message`: [`Message`](../namespaces/Domain/classes/Message.md)): `Promise`\<`T`\>

Defined in: [src/mercury/Mercury.ts:68](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/Mercury.ts#L68)

Asynchronously sends a given message and returns the response data.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` |  |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`Message`](../namespaces/Domain/classes/Message.md) |  |

#### Returns

`Promise`\<`T`\>

#### Implementation of

[`Mercury`](../namespaces/Domain/interfaces/Mercury.md).[`sendMessage`](../namespaces/Domain/interfaces/Mercury.md#sendmessage)

***

### sendMessageParseMessage() {#sendmessageparsemessage}

> **sendMessageParseMessage**(`message`: [`Message`](../namespaces/Domain/classes/Message.md)): `Promise`\<[`Message`](../namespaces/Domain/classes/Message.md) \| `undefined`\>

Defined in: [src/mercury/Mercury.ts:128](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/Mercury.ts#L128)

Asynchronously sends a given message and returns the response message object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`Message`](../namespaces/Domain/classes/Message.md) |  |

#### Returns

`Promise`\<[`Message`](../namespaces/Domain/classes/Message.md) \| `undefined`\>

#### Implementation of

[`Mercury`](../namespaces/Domain/interfaces/Mercury.md).[`sendMessageParseMessage`](../namespaces/Domain/interfaces/Mercury.md#sendmessageparsemessage)

***

### unpackMessage() {#unpackmessage}

> **unpackMessage**(`message`: `string`): `Promise`\<[`Message`](../namespaces/Domain/classes/Message.md)\>

Defined in: [src/mercury/Mercury.ts:56](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/Mercury.ts#L56)

Asynchronously unpacks a given string representation of a message into a message object. This
function may throw an error if the string is not a valid message representation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` |  |

#### Returns

`Promise`\<[`Message`](../namespaces/Domain/classes/Message.md)\>

#### Implementation of

[`Mercury`](../namespaces/Domain/interfaces/Mercury.md).[`unpackMessage`](../namespaces/Domain/interfaces/Mercury.md#unpackmessage)
