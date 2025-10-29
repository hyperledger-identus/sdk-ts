[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [Startable](../README.md) / IController

# Interface: IController

Defined in: [src/domain/protocols/Startable.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L18)

define the structure of a Startable entity

## Extended by

- [`Pluto`](../../../interfaces/Pluto.md)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="state"></a> `state` | [`State`](../enumerations/State.md) | current status of the entity | [src/domain/protocols/Startable.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L22) |

## Methods

### start() {#start}

> **start**(): `Promise`\<[`State`](../enumerations/State.md)\>

Defined in: [src/domain/protocols/Startable.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L30)

handle the startup of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../enumerations/State.md)\>

***

### stop() {#stop}

> **stop**(): `Promise`\<[`State`](../enumerations/State.md)\>

Defined in: [src/domain/protocols/Startable.ts:38](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L38)

handle the teardown of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../enumerations/State.md)\>
