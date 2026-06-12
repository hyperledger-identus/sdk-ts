[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Mercury

# Class: Mercury

Defined in: [packages/lib/sdk/src/mercury/index.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/mercury/index.ts#L23)

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

Defined in: [packages/lib/sdk/src/mercury/index.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/mercury/index.ts#L31)

Creates an instance of Mercury.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `castor` | [`Castor`](../namespaces/Domain/interfaces/Castor.md) | - |
| `protocol` | [`DIDCommProtocol`](../interfaces/DIDCommProtocol.md) | - |
| `api` | [`Api`](../namespaces/Domain/interfaces/Api.md) | - |

#### Returns

`Mercury`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-api"></a> `api` | `public` | [`Api`](../namespaces/Domain/interfaces/Api.md) | [packages/lib/sdk/src/mercury/index.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/mercury/index.ts#L34) |
| <a id="property-castor"></a> `castor` | `public` | [`Castor`](../namespaces/Domain/interfaces/Castor.md) | [packages/lib/sdk/src/mercury/index.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/mercury/index.ts#L32) |
| <a id="property-protocol"></a> `protocol` | `public` | [`DIDCommProtocol`](../interfaces/DIDCommProtocol.md) | [packages/lib/sdk/src/mercury/index.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/mercury/index.ts#L33) |

## Methods

### packMessage() {#packmessage}

> **packMessage**(`message`: [`Message`](../namespaces/Domain/classes/Message.md)): `Promise`\<`string`\>

Defined in: [packages/lib/sdk/src/mercury/index.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/mercury/index.ts#L44)

Asynchronously packs a given message object into a string representation. This function may throw an error if the
message object is invalid.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`Message`](../namespaces/Domain/classes/Message.md) | - |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`Mercury`](../namespaces/Domain/interfaces/Mercury.md).[`packMessage`](../namespaces/Domain/interfaces/Mercury.md#packmessage)

***

### sendMessage() {#sendmessage}

> **sendMessage**\<`T`\>(`message`: [`Message`](../namespaces/Domain/classes/Message.md)): `Promise`\<`T`\>

Defined in: [packages/lib/sdk/src/mercury/index.ts:72](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/mercury/index.ts#L72)

Asynchronously sends a given message and returns the response data.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` |  |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`Message`](../namespaces/Domain/classes/Message.md) | - |

#### Returns

`Promise`\<`T`\>

#### Implementation of

[`Mercury`](../namespaces/Domain/interfaces/Mercury.md).[`sendMessage`](../namespaces/Domain/interfaces/Mercury.md#sendmessage)

***

### sendMessageParseMessage() {#sendmessageparsemessage}

> **sendMessageParseMessage**(`message`: [`Message`](../namespaces/Domain/classes/Message.md)): `Promise`\<[`Message`](../namespaces/Domain/classes/Message.md) \| `undefined`\>

Defined in: [packages/lib/sdk/src/mercury/index.ts:132](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/mercury/index.ts#L132)

Asynchronously sends a given message and returns the response message object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`Message`](../namespaces/Domain/classes/Message.md) | - |

#### Returns

`Promise`\<[`Message`](../namespaces/Domain/classes/Message.md) \| `undefined`\>

#### Implementation of

[`Mercury`](../namespaces/Domain/interfaces/Mercury.md).[`sendMessageParseMessage`](../namespaces/Domain/interfaces/Mercury.md#sendmessageparsemessage)

***

### unpackMessage() {#unpackmessage}

> **unpackMessage**(`message`: `string`): `Promise`\<[`Message`](../namespaces/Domain/classes/Message.md)\>

Defined in: [packages/lib/sdk/src/mercury/index.ts:60](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/mercury/index.ts#L60)

Asynchronously unpacks a given string representation of a message into a message object. This
function may throw an error if the string is not a valid message representation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | - |

#### Returns

`Promise`\<[`Message`](../namespaces/Domain/classes/Message.md)\>

#### Implementation of

[`Mercury`](../namespaces/Domain/interfaces/Mercury.md).[`unpackMessage`](../namespaces/Domain/interfaces/Mercury.md#unpackmessage)
