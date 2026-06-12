[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [Startable](../README.md) / Controller

# Abstract Class: Controller

Defined in: packages/shared/domain/build/index.d.ts:2329

define the structure of a Startable entity

## Extended by

- [`Agent`](../../../../../classes/Agent.md)
- [`Pluto`](../../../../../classes/Pluto.md)

## Implements

- [`IController`](../interfaces/IController.md)

## Constructors

### Constructor

> **new Controller**(): `Controller`

#### Returns

`Controller`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-state"></a> `state` | [`State`](../enumerations/State.md) | current status of the entity | packages/shared/domain/build/index.d.ts:2330 |

## Methods

### start() {#start}

> **start**(): `Promise`\<[`State`](../enumerations/State.md)\>

Defined in: packages/shared/domain/build/index.d.ts:2347

handle the startup of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../enumerations/State.md)\>

#### Implementation of

[`IController`](../interfaces/IController.md).[`start`](../interfaces/IController.md#start)

***

### stop() {#stop}

> **stop**(): `Promise`\<[`State`](../enumerations/State.md)\>

Defined in: packages/shared/domain/build/index.d.ts:2348

handle the teardown of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../enumerations/State.md)\>

#### Implementation of

[`IController`](../interfaces/IController.md).[`stop`](../interfaces/IController.md#stop)
