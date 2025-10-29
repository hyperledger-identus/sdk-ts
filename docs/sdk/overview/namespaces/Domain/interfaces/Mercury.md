[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Mercury

# Interface: Mercury

Defined in: [src/domain/buildingBlocks/Mercury.ts:3](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Mercury.ts#L3)

## Methods

### packMessage() {#packmessage}

> **packMessage**(`message`: [`Message`](../classes/Message.md)): `Promise`\<`string`\>

Defined in: [src/domain/buildingBlocks/Mercury.ts:4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Mercury.ts#L4)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](../classes/Message.md) |

#### Returns

`Promise`\<`string`\>

***

### sendMessage() {#sendmessage}

> **sendMessage**(`message`: [`Message`](../classes/Message.md)): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [src/domain/buildingBlocks/Mercury.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Mercury.ts#L6)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](../classes/Message.md) |

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### sendMessageParseMessage() {#sendmessageparsemessage}

> **sendMessageParseMessage**(`message`: [`Message`](../classes/Message.md)): `Promise`\<[`Message`](../classes/Message.md) \| `undefined`\>

Defined in: [src/domain/buildingBlocks/Mercury.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Mercury.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](../classes/Message.md) |

#### Returns

`Promise`\<[`Message`](../classes/Message.md) \| `undefined`\>

***

### unpackMessage() {#unpackmessage}

> **unpackMessage**(`message`: `string`): `Promise`\<[`Message`](../classes/Message.md)\>

Defined in: [src/domain/buildingBlocks/Mercury.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Mercury.ts#L5)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

#### Returns

`Promise`\<[`Message`](../classes/Message.md)\>
