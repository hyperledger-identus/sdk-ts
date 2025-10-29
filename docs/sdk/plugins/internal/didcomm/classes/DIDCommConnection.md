[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / DIDCommConnection

# Class: DIDCommConnection

Defined in: [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L8)

Define the structure of a Connection

Connections are used to capture Protocol specific behaviours and metadata

## Extended by

- [`MediatorConnection`](MediatorConnection.md)

## Implements

- [`Connection`](../../../../overview/interfaces/Connection.md)

## Constructors

### Constructor

> **new DIDCommConnection**(`uri`: `string`, `host`: `string`, `alias?`: `string`): `DIDCommConnection`

Defined in: [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L12)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `uri` | `string` |
| `host` | `string` |
| `alias?` | `string` |

#### Returns

`DIDCommConnection`

## Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="alias"></a> `alias?` | `readonly` | `string` | `undefined` | - | [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L15) |
| <a id="host"></a> `host` | `readonly` | `string` | `undefined` | - | [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L14) |
| <a id="state"></a> `state` | `public` | [`State`](../../../../overview/namespaces/Connection/enumerations/State.md) | `Connection.State.NEW` | current condition of the connection | [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L10) |
| <a id="type"></a> `type` | `readonly` | `"DIDComm"` | `"DIDComm"` | - | [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L9) |
| <a id="uri"></a> `uri` | `readonly` | `string` | `undefined` | unique identifer for the connection | [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L13) |

## Methods

### receive() {#receive}

> **receive**(`message`: [`Message`](../../../../overview/namespaces/Domain/classes/Message.md) \| `undefined`, `ctx`: [`AgentContext`](../../../../overview/classes/AgentContext.md)): `Promise`\<`any`\>

Defined in: [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:34](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L34)

called when a Message is received from this connection

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](../../../../overview/namespaces/Domain/classes/Message.md) \| `undefined` |
| `ctx` | [`AgentContext`](../../../../overview/classes/AgentContext.md) |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Connection`](../../../../overview/interfaces/Connection.md).[`receive`](../../../../overview/interfaces/Connection.md#receive)

***

### send() {#send}

> **send**(`msg`: [`Message`](../../../../overview/namespaces/Domain/classes/Message.md), `ctx`: [`AgentContext`](../../../../overview/classes/AgentContext.md)): `Promise`\<`any`\>

Defined in: [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L18)

handle delivering a Message to the connected entity

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | [`Message`](../../../../overview/namespaces/Domain/classes/Message.md) |
| `ctx` | [`AgentContext`](../../../../overview/classes/AgentContext.md) |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Connection`](../../../../overview/interfaces/Connection.md).[`send`](../../../../overview/interfaces/Connection.md#send)
