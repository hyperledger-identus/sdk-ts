[**@hyperledger/identus-sdk v8.1.2**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DIDCommProtocol

# Interface: DIDCommProtocol

Defined in: [packages/lib/sdk/src/mercury/DIDCommProtocol.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/mercury/DIDCommProtocol.ts#L3)

## Methods

### packEncrypted() {#packencrypted}

> **packEncrypted**(`message`: [`Message`](../namespaces/Domain/classes/Message.md), `to`: [`DID`](../namespaces/Domain/classes/DID.md), `from?`: [`DID`](../namespaces/Domain/classes/DID.md)): `Promise`\<`string`\>

Defined in: [packages/lib/sdk/src/mercury/DIDCommProtocol.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/mercury/DIDCommProtocol.ts#L4)

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

Defined in: [packages/lib/sdk/src/mercury/DIDCommProtocol.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/mercury/DIDCommProtocol.ts#L9)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

#### Returns

`Promise`\<[`Message`](../namespaces/Domain/classes/Message.md)\>
