[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [Startable](../README.md) / Controller

# Abstract Class: Controller

Defined in: [src/domain/protocols/Startable.ts:41](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L41)

define the structure of a Startable entity

## Extended by

- [`Pluto`](../../../../../classes/Pluto.md)
- [`Agent`](../../../../../classes/Agent.md)

## Implements

- [`IController`](../interfaces/IController.md)

## Constructors

### Constructor

> **new Controller**(): `Controller`

#### Returns

`Controller`

## Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="state"></a> `state` | `public` | [`State`](../enumerations/State.md) | `State.STOPPED` | current status of the entity | [src/domain/protocols/Startable.ts:42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L42) |

## Methods

### start() {#start}

> **start**(): `Promise`\<[`State`](../enumerations/State.md)\>

Defined in: [src/domain/protocols/Startable.ts:62](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L62)

handle the startup of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../enumerations/State.md)\>

#### Implementation of

[`IController`](../interfaces/IController.md).[`start`](../interfaces/IController.md#start)

***

### stop() {#stop}

> **stop**(): `Promise`\<[`State`](../enumerations/State.md)\>

Defined in: [src/domain/protocols/Startable.ts:72](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L72)

handle the teardown of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../enumerations/State.md)\>

#### Implementation of

[`IController`](../interfaces/IController.md).[`stop`](../interfaces/IController.md#stop)
