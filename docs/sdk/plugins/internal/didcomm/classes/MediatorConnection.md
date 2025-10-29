[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / MediatorConnection

# Class: MediatorConnection

Defined in: [src/plugins/internal/didcomm/connection/MediatorConnection.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L6)

Define the structure of a Connection

Connections are used to capture Protocol specific behaviours and metadata

## Extends

- [`DIDCommConnection`](DIDCommConnection.md)

## Constructors

### Constructor

> **new MediatorConnection**(`uri`: `string`, `host`: `string`, `routingDID?`: `string`): `MediatorConnection`

Defined in: [src/plugins/internal/didcomm/connection/MediatorConnection.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L9)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `uri` | `string` |
| `host` | `string` |
| `routingDID?` | `string` |

#### Returns

`MediatorConnection`

#### Overrides

[`DIDCommConnection`](DIDCommConnection.md).[`constructor`](DIDCommConnection.md#constructor)

## Properties

| Property | Modifier | Type | Default value | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="alias"></a> `alias?` | `readonly` | `string` | `undefined` | - | [`DIDCommConnection`](DIDCommConnection.md).[`alias`](DIDCommConnection.md#alias) | [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L15) |
| <a id="host"></a> `host` | `readonly` | `string` | `undefined` | - | [`DIDCommConnection`](DIDCommConnection.md).[`host`](DIDCommConnection.md#host) | [src/plugins/internal/didcomm/connection/MediatorConnection.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L11) |
| <a id="routingdid"></a> `routingDID?` | `public` | `string` | `undefined` | - | - | [src/plugins/internal/didcomm/connection/MediatorConnection.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L12) |
| <a id="state"></a> `state` | `public` | [`State`](../../../../overview/namespaces/Connection/enumerations/State.md) | `Connection.State.NEW` | current condition of the connection | [`DIDCommConnection`](DIDCommConnection.md).[`state`](DIDCommConnection.md#state) | [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L10) |
| <a id="type"></a> `type` | `readonly` | `"DIDComm"` | `"DIDComm"` | - | [`DIDCommConnection`](DIDCommConnection.md).[`type`](DIDCommConnection.md#type) | [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L9) |
| <a id="uri"></a> `uri` | `readonly` | `string` | `undefined` | unique identifer for the connection | [`DIDCommConnection`](DIDCommConnection.md).[`uri`](DIDCommConnection.md#uri) | [src/plugins/internal/didcomm/connection/MediatorConnection.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L10) |

## Accessors

### liveMode {#livemode}

#### Get Signature

> **get** **liveMode**(): `boolean`

Defined in: [src/plugins/internal/didcomm/connection/MediatorConnection.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L17)

##### Returns

`boolean`

## Methods

### asMediator() {#asmediator}

> **asMediator**(): [`Mediator`](../../../../overview/namespaces/Domain/interfaces/Mediator.md)

Defined in: [src/plugins/internal/didcomm/connection/MediatorConnection.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L21)

#### Returns

[`Mediator`](../../../../overview/namespaces/Domain/interfaces/Mediator.md)

***

### close() {#close}

> **close**(): `Promise`\<`void`\>

Defined in: [src/plugins/internal/didcomm/connection/MediatorConnection.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L29)

#### Returns

`Promise`\<`void`\>

***

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

#### Inherited from

[`DIDCommConnection`](DIDCommConnection.md).[`receive`](DIDCommConnection.md#receive)

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

#### Inherited from

[`DIDCommConnection`](DIDCommConnection.md).[`send`](DIDCommConnection.md#send)

***

### useLiveMode() {#uselivemode}

> **useLiveMode**(`socket`: `WebSocket`): `Promise`\<`void`\>

Defined in: [src/plugins/internal/didcomm/connection/MediatorConnection.ts:34](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L34)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `socket` | `WebSocket` |

#### Returns

`Promise`\<`void`\>
