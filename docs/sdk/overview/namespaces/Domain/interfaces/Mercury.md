[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Mercury

# Interface: Mercury

Defined in: packages/shared/domain/build/index.d.ts:2427

## Methods

### packMessage() {#packmessage}

> **packMessage**(`message`: [`Message`](../classes/Message.md)): `Promise`\<`string`\>

Defined in: packages/shared/domain/build/index.d.ts:2428

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](../classes/Message.md) |

#### Returns

`Promise`\<`string`\>

***

### sendMessage() {#sendmessage}

> **sendMessage**(`message`: [`Message`](../classes/Message.md)): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: packages/shared/domain/build/index.d.ts:2430

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](../classes/Message.md) |

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### sendMessageParseMessage() {#sendmessageparsemessage}

> **sendMessageParseMessage**(`message`: [`Message`](../classes/Message.md)): `Promise`\<[`Message`](../classes/Message.md) \| `undefined`\>

Defined in: packages/shared/domain/build/index.d.ts:2431

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](../classes/Message.md) |

#### Returns

`Promise`\<[`Message`](../classes/Message.md) \| `undefined`\>

***

### unpackMessage() {#unpackmessage}

> **unpackMessage**(`message`: `string`): `Promise`\<[`Message`](../classes/Message.md)\>

Defined in: packages/shared/domain/build/index.d.ts:2429

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

#### Returns

`Promise`\<[`Message`](../classes/Message.md)\>
