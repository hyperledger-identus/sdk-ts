[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / EventsManager

# Class: EventsManager

Defined in: [src/edge-agent/Agent.MessageEvents.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.MessageEvents.ts#L11)

An extension for the Edge agent that gives it capability of
creating listeners for specific events and also emitting or notifying any listener available with the
new event.

 EventsManager

## Constructors

### Constructor

> **new EventsManager**(): `EventsManager`

#### Returns

`EventsManager`

## Methods

### addListener() {#addlistener}

> **addListener**\<`T`\>(`eventName`: `T`, `callback`: [`EventCallback`](../type-aliases/EventCallback.md)\<`T`\>): `number`

Defined in: [src/edge-agent/Agent.MessageEvents.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.MessageEvents.ts#L23)

Just adds a new event listener by passing the event name and the callback function we want
to be notified at

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ListenerKey`](../enumerations/ListenerKey.md) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `T` |  |
| `callback` | [`EventCallback`](../type-aliases/EventCallback.md)\<`T`\> |  |

#### Returns

`number`

***

### emit() {#emit}

> **emit**(`eventName`: [`ListenerKey`](../enumerations/ListenerKey.md), `data`: `any`): `void`

Defined in: [src/edge-agent/Agent.MessageEvents.ts:56](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.MessageEvents.ts#L56)

Emit some data to all the listeners of a specific event

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | [`ListenerKey`](../enumerations/ListenerKey.md) |  |
| `data` | `any` |  |

#### Returns

`void`

***

### removeListener() {#removelistener}

> **removeListener**\<`T`\>(`eventName`: `T`, `callback`: [`EventCallback`](../type-aliases/EventCallback.md)\<`T`\>): `void`

Defined in: [src/edge-agent/Agent.MessageEvents.ts:41](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.MessageEvents.ts#L41)

Remove an existing event listener, used when the Agent is
stopping to make sure no memory leaks are produced

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ListenerKey`](../enumerations/ListenerKey.md) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `T` |  |
| `callback` | [`EventCallback`](../type-aliases/EventCallback.md)\<`T`\> |  |

#### Returns

`void`
