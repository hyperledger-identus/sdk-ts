[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / DIDCommConnection

# Class: DIDCommConnection

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L8)

Define the structure of a Connection

Connections are used to capture Protocol specific behaviours and metadata

## Extended by

- [`MediatorConnection`](MediatorConnection.md)

## Implements

- [`Connection`](../../../../overview/interfaces/Connection.md)

## Constructors

### Constructor

> **new DIDCommConnection**(`uri`: `string`, `host`: `string`, `alias?`: `string`): `DIDCommConnection`

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L12)

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
| <a id="property-alias"></a> `alias?` | `readonly` | `string` | `undefined` | - | [packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L15) |
| <a id="property-host"></a> `host` | `readonly` | `string` | `undefined` | - | [packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L14) |
| <a id="property-state"></a> `state` | `public` | [`State`](../../../../overview/namespaces/Connection/enumerations/State.md) | `Connection.State.NEW` | current condition of the connection | [packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L10) |
| <a id="property-type"></a> `type` | `readonly` | `"DIDComm"` | `"DIDComm"` | - | [packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L9) |
| <a id="property-uri"></a> `uri` | `readonly` | `string` | `undefined` | unique identifer for the connection | [packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L13) |

## Methods

### receive() {#receive}

> **receive**(`message`: [`Message`](../../../../overview/namespaces/Domain/classes/Message.md) \| `undefined`, `ctx`: [`AgentContext`](../../../../overview/classes/AgentContext.md)): `Promise`\<`any`\>

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L34)

called when a Message is received from this connection

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](../../../../overview/namespaces/Domain/classes/Message.md) \| `undefined` |
| `ctx` | [`AgentContext`](../../../../overview/classes/AgentContext.md) |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Connection`](../../../../overview/interfaces/Connection.md).[`receive`](../../../../overview/interfaces/Connection.md#property-receive)

***

### send() {#send}

> **send**(`msg`: [`Message`](../../../../overview/namespaces/Domain/classes/Message.md), `ctx`: [`AgentContext`](../../../../overview/classes/AgentContext.md)): `Promise`\<`any`\>

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L18)

handle delivering a Message to the connected entity

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | [`Message`](../../../../overview/namespaces/Domain/classes/Message.md) |
| `ctx` | [`AgentContext`](../../../../overview/classes/AgentContext.md) |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`Connection`](../../../../overview/interfaces/Connection.md).[`send`](../../../../overview/interfaces/Connection.md#property-send)
