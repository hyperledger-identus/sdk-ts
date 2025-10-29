[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DIDCommWrapper

# Class: DIDCommWrapper

Defined in: [src/mercury/didcomm/Wrapper.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/didcomm/Wrapper.ts#L21)

## Implements

- [`DIDCommProtocol`](../interfaces/DIDCommProtocol.md)

## Constructors

### Constructor

> **new DIDCommWrapper**(`apollo`: [`Apollo`](../namespaces/Domain/interfaces/Apollo.md), `castor`: [`Castor`](../namespaces/Domain/interfaces/Castor.md), `pluto`: [`Pluto`](../namespaces/Domain/interfaces/Pluto.md)): `DIDCommWrapper`

Defined in: [src/mercury/didcomm/Wrapper.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/didcomm/Wrapper.ts#L26)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `apollo` | [`Apollo`](../namespaces/Domain/interfaces/Apollo.md) |
| `castor` | [`Castor`](../namespaces/Domain/interfaces/Castor.md) |
| `pluto` | [`Pluto`](../namespaces/Domain/interfaces/Pluto.md) |

#### Returns

`DIDCommWrapper`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="apollo"></a> `apollo` | `readonly` | [`Apollo`](../namespaces/Domain/interfaces/Apollo.md) | [src/mercury/didcomm/Wrapper.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/didcomm/Wrapper.ts#L27) |
| <a id="castor"></a> `castor` | `readonly` | [`Castor`](../namespaces/Domain/interfaces/Castor.md) | [src/mercury/didcomm/Wrapper.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/didcomm/Wrapper.ts#L28) |
| <a id="pluto"></a> `pluto` | `readonly` | [`Pluto`](../namespaces/Domain/interfaces/Pluto.md) | [src/mercury/didcomm/Wrapper.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/didcomm/Wrapper.ts#L29) |
| <a id="didcomm"></a> `didcomm` | `static` | `__module` | [src/mercury/didcomm/Wrapper.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/didcomm/Wrapper.ts#L22) |

## Methods

### packEncrypted() {#packencrypted}

> **packEncrypted**(`message`: [`Message`](../namespaces/Domain/classes/Message.md), `toDid`: [`DID`](../namespaces/Domain/classes/DID.md), `fromDid?`: [`DID`](../namespaces/Domain/classes/DID.md)): `Promise`\<`string`\>

Defined in: [src/mercury/didcomm/Wrapper.ts:60](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/didcomm/Wrapper.ts#L60)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](../namespaces/Domain/classes/Message.md) |
| `toDid` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `fromDid?` | [`DID`](../namespaces/Domain/classes/DID.md) |

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`DIDCommProtocol`](../interfaces/DIDCommProtocol.md).[`packEncrypted`](../interfaces/DIDCommProtocol.md#packencrypted)

***

### unpack() {#unpack}

> **unpack**(`message`: `string`): `Promise`\<[`Message`](../namespaces/Domain/classes/Message.md)\>

Defined in: [src/mercury/didcomm/Wrapper.ts:102](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/didcomm/Wrapper.ts#L102)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

#### Returns

`Promise`\<[`Message`](../namespaces/Domain/classes/Message.md)\>

#### Implementation of

[`DIDCommProtocol`](../interfaces/DIDCommProtocol.md).[`unpack`](../interfaces/DIDCommProtocol.md#unpack)

***

### getDIDComm() {#getdidcomm}

> `static` **getDIDComm**(): `Promise`\<`__module`\>

Defined in: [src/mercury/didcomm/Wrapper.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/mercury/didcomm/Wrapper.ts#L35)

#### Returns

`Promise`\<`__module`\>
