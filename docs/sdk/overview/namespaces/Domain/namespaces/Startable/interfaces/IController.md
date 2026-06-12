[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [Startable](../README.md) / IController

# Interface: IController

Defined in: packages/shared/domain/build/index.d.ts:2307

define the structure of a Startable entity

## Extended by

- [`Pluto`](../../../interfaces/Pluto.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-state"></a> `state` | [`State`](../enumerations/State.md) | current status of the entity | packages/shared/domain/build/index.d.ts:2311 |

## Methods

### start() {#start}

> **start**(): `Promise`\<[`State`](../enumerations/State.md)\>

Defined in: packages/shared/domain/build/index.d.ts:2319

handle the startup of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../enumerations/State.md)\>

***

### stop() {#stop}

> **stop**(): `Promise`\<[`State`](../enumerations/State.md)\>

Defined in: packages/shared/domain/build/index.d.ts:2327

handle the teardown of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../enumerations/State.md)\>
