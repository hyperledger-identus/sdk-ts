[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DIDCommProtocol

# Interface: DIDCommProtocol

Defined in: [src/mercury/DIDCommProtocol.ts:3](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/DIDCommProtocol.ts#L3)

## Methods

### packEncrypted() {#packencrypted}

> **packEncrypted**(`message`: [`Message`](../namespaces/Domain/classes/Message.md), `to`: [`DID`](../namespaces/Domain/classes/DID.md), `from?`: [`DID`](../namespaces/Domain/classes/DID.md)): `Promise`\<`string`\>

Defined in: [src/mercury/DIDCommProtocol.ts:4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/DIDCommProtocol.ts#L4)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](../namespaces/Domain/classes/Message.md) |
| `to` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `from?` | [`DID`](../namespaces/Domain/classes/DID.md) |

#### Returns

`Promise`\<`string`\>

***

### unpack() {#unpack}

> **unpack**(`message`: `string`): `Promise`\<[`Message`](../namespaces/Domain/classes/Message.md)\>

Defined in: [src/mercury/DIDCommProtocol.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/DIDCommProtocol.ts#L14)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

#### Returns

`Promise`\<[`Message`](../namespaces/Domain/classes/Message.md)\>
