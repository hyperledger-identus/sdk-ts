[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / ConnectionsManager

# Class: ConnectionsManager

Defined in: [src/edge-agent/connections/ConnectionsManager.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/ConnectionsManager.ts#L13)

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

> **get** **mediator**(): [`Nil`](../namespaces/Utils/type-aliases/Nil.md) \| [`MediatorConnection`](../../plugins/internal/didcomm/classes/MediatorConnection.md)

Defined in: [src/edge-agent/connections/ConnectionsManager.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/ConnectionsManager.ts#L18)

##### Returns

[`Nil`](../namespaces/Utils/type-aliases/Nil.md) \| [`MediatorConnection`](../../plugins/internal/didcomm/classes/MediatorConnection.md)

## Methods

### add() {#add}

> **add**(`connection`: [`Connection`](../interfaces/Connection.md)): `void`

Defined in: [src/edge-agent/connections/ConnectionsManager.ts:48](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/ConnectionsManager.ts#L48)

add a Connection

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `connection` | [`Connection`](../interfaces/Connection.md) |  |

#### Returns

`void`

***

### addMediator() {#addmediator}

> **addMediator**(`mediator`: [`Connection`](../interfaces/Connection.md)): `void`

Defined in: [src/edge-agent/connections/ConnectionsManager.ts:56](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/ConnectionsManager.ts#L56)

add a Connection and mark it as a Mediator

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mediator` | [`Connection`](../interfaces/Connection.md) |  |

#### Returns

`void`

***

### find() {#find}

> **find**(`uri`: `string`): [`Connection`](../interfaces/Connection.md) \| `undefined`

Defined in: [src/edge-agent/connections/ConnectionsManager.ts:85](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/ConnectionsManager.ts#L85)

Search for a Connection by it's unique identifier

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `uri` | `string` |  |

#### Returns

[`Connection`](../interfaces/Connection.md) \| `undefined`

***

### remove() {#remove}

> **remove**(`connection`: `string` \| [`Connection`](../interfaces/Connection.md)): `Promise`\<`void`\>

Defined in: [src/edge-agent/connections/ConnectionsManager.ts:69](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/ConnectionsManager.ts#L69)

Remove a Connection
this but just means the connection will be removed from the current storage

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `connection` | `string` \| [`Connection`](../interfaces/Connection.md) |  |

#### Returns

`Promise`\<`void`\>

***

### stop() {#stop}

> **stop**(): `Promise`\<`void`\>

Defined in: [src/edge-agent/connections/ConnectionsManager.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/ConnectionsManager.ts#L35)

close all active connections

#### Returns

`Promise`\<`void`\>
