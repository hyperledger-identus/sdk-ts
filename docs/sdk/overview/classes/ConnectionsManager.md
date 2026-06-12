[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / ConnectionsManager

# Class: ConnectionsManager

Defined in: [packages/lib/sdk/src/edge-agent/connections/ConnectionsManager.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/connections/ConnectionsManager.ts#L13)

ConnectionsManager is responsible for handling Connections and Mediators

Mediators are a Connection where we periodically fetch messages from

 ConnectionsManager

## Constructors

### Constructor

> **new ConnectionsManager**(): `ConnectionsManager`

#### Returns

`ConnectionsManager`

## Accessors

### mediator {#mediator}

#### Get Signature

> **get** **mediator**(): [`Nil`](../type-aliases/Nil.md) \| [`MediatorConnection`](../../plugins/internal/didcomm/classes/MediatorConnection.md)

Defined in: [packages/lib/sdk/src/edge-agent/connections/ConnectionsManager.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/connections/ConnectionsManager.ts#L18)

##### Returns

[`Nil`](../type-aliases/Nil.md) \| [`MediatorConnection`](../../plugins/internal/didcomm/classes/MediatorConnection.md)

## Methods

### add() {#add}

> **add**(`connection`: [`Connection`](../interfaces/Connection.md)): `void`

Defined in: [packages/lib/sdk/src/edge-agent/connections/ConnectionsManager.ts:48](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/connections/ConnectionsManager.ts#L48)

add a Connection

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `connection` | [`Connection`](../interfaces/Connection.md) | - |

#### Returns

`void`

***

### addMediator() {#addmediator}

> **addMediator**(`mediator`: [`Connection`](../interfaces/Connection.md)): `void`

Defined in: [packages/lib/sdk/src/edge-agent/connections/ConnectionsManager.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/connections/ConnectionsManager.ts#L56)

add a Connection and mark it as a Mediator

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mediator` | [`Connection`](../interfaces/Connection.md) | - |

#### Returns

`void`

***

### find() {#find}

> **find**(`uri`: `string`): [`Connection`](../interfaces/Connection.md) \| `undefined`

Defined in: [packages/lib/sdk/src/edge-agent/connections/ConnectionsManager.ts:85](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/connections/ConnectionsManager.ts#L85)

Search for a Connection by it's unique identifier

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `uri` | `string` | - |

#### Returns

[`Connection`](../interfaces/Connection.md) \| `undefined`

***

### remove() {#remove}

> **remove**(`connection`: `string` \| [`Connection`](../interfaces/Connection.md)): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/edge-agent/connections/ConnectionsManager.ts:69](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/connections/ConnectionsManager.ts#L69)

Remove a Connection
this but just means the connection will be removed from the current storage

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `connection` | `string` \| [`Connection`](../interfaces/Connection.md) | - |

#### Returns

`Promise`\<`void`\>

***

### stop() {#stop}

> **stop**(): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/edge-agent/connections/ConnectionsManager.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/connections/ConnectionsManager.ts#L35)

close all active connections

#### Returns

`Promise`\<`void`\>
