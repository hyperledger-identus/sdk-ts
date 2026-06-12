[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / MediatorConnection

# Class: MediatorConnection

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L6)

Define the structure of a Connection

Connections are used to capture Protocol specific behaviours and metadata

## Extends

- [`DIDCommConnection`](DIDCommConnection.md)

## Constructors

### Constructor

> **new MediatorConnection**(`uri`: `string`, `host`: `string`, `routingDID?`: `string`): `MediatorConnection`

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L9)

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
| <a id="property-alias"></a> `alias?` | `readonly` | `string` | `undefined` | - | [`DIDCommConnection`](DIDCommConnection.md).[`alias`](DIDCommConnection.md#property-alias) | [packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L15) |
| <a id="property-host"></a> `host` | `readonly` | `string` | `undefined` | - | [`DIDCommConnection`](DIDCommConnection.md).[`host`](DIDCommConnection.md#property-host) | [packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L11) |
| <a id="property-routingdid"></a> `routingDID?` | `public` | `string` | `undefined` | - | - | [packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L12) |
| <a id="property-state"></a> `state` | `public` | [`State`](../../../../overview/namespaces/Connection/enumerations/State.md) | `Connection.State.NEW` | current condition of the connection | [`DIDCommConnection`](DIDCommConnection.md).[`state`](DIDCommConnection.md#property-state) | [packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L10) |
| <a id="property-type"></a> `type` | `readonly` | `"DIDComm"` | `"DIDComm"` | - | [`DIDCommConnection`](DIDCommConnection.md).[`type`](DIDCommConnection.md#property-type) | [packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L9) |
| <a id="property-uri"></a> `uri` | `readonly` | `string` | `undefined` | unique identifer for the connection | [`DIDCommConnection`](DIDCommConnection.md).[`uri`](DIDCommConnection.md#property-uri) | [packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L10) |

## Accessors

### liveMode {#livemode}

#### Get Signature

> **get** **liveMode**(): `boolean`

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L17)

##### Returns

`boolean`

## Methods

### asMediator() {#asmediator}

> **asMediator**(): [`Mediator`](../../../../overview/namespaces/Domain/interfaces/Mediator.md)

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L21)

#### Returns

[`Mediator`](../../../../overview/namespaces/Domain/interfaces/Mediator.md)

***

### close() {#close}

> **close**(): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L29)

#### Returns

`Promise`\<`void`\>

***

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

#### Inherited from

[`DIDCommConnection`](DIDCommConnection.md).[`receive`](DIDCommConnection.md#receive)

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

#### Inherited from

[`DIDCommConnection`](DIDCommConnection.md).[`send`](DIDCommConnection.md#send)

***

### useLiveMode() {#uselivemode}

> **useLiveMode**(`socket`: `WebSocket`): `void`

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L34)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `socket` | `WebSocket` |

#### Returns

`void`
