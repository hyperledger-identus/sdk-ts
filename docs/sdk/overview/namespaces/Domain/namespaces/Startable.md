[**@hyperledger/identus-sdk**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Startable

# Startable

Define controls for managing entity lifecycle.

## Enumerations

### State

Defined in: [src/domain/protocols/Startable.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/Startable.ts#L8)

states for a Startable entity

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="running"></a> `RUNNING` | `"running"` | [src/domain/protocols/Startable.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/Startable.ts#L11) |
| <a id="starting"></a> `STARTING` | `"starting"` | [src/domain/protocols/Startable.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/Startable.ts#L10) |
| <a id="stopped"></a> `STOPPED` | `"stopped"` | [src/domain/protocols/Startable.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/Startable.ts#L9) |
| <a id="stopping"></a> `STOPPING` | `"stopping"` | [src/domain/protocols/Startable.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/Startable.ts#L12) |

## Classes

### `abstract` Controller

Defined in: [src/domain/protocols/Startable.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/Startable.ts#L41)

define the structure of a Startable entity

#### Extended by

- [`Pluto`](../../../README.md#pluto-3)
- [`Agent`](../../../README.md#agent)

#### Implements

- [`IController`](#icontroller)

#### Constructors

##### Constructor

> **new Controller**(): [`Controller`](#controller)

###### Returns

[`Controller`](#controller)

#### Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="state-1"></a> `state` | `public` | [`State`](#state) | `State.STOPPED` | current status of the entity | [src/domain/protocols/Startable.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/Startable.ts#L42) |

#### Methods

##### start()

> **start**(): `Promise`\<[`State`](#state)\>

Defined in: [src/domain/protocols/Startable.ts:62](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/Startable.ts#L62)

handle the startup of an entity

updates `state` according to lifecycle

###### Returns

`Promise`\<[`State`](#state)\>

###### Implementation of

[`IController`](#icontroller).[`start`](#start-2)

##### stop()

> **stop**(): `Promise`\<[`State`](#state)\>

Defined in: [src/domain/protocols/Startable.ts:72](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/Startable.ts#L72)

handle the teardown of an entity

updates `state` according to lifecycle

###### Returns

`Promise`\<[`State`](#state)\>

###### Implementation of

[`IController`](#icontroller).[`stop`](#stop-2)

## Interfaces

### IController

Defined in: [src/domain/protocols/Startable.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/Startable.ts#L18)

define the structure of a Startable entity

#### Extended by

- [`Pluto`](../README.md#pluto)

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="state-2"></a> `state` | [`State`](#state) | current status of the entity | [src/domain/protocols/Startable.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/Startable.ts#L22) |

#### Methods

##### start()

> **start**(): `Promise`\<[`State`](#state)\>

Defined in: [src/domain/protocols/Startable.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/Startable.ts#L30)

handle the startup of an entity

updates `state` according to lifecycle

###### Returns

`Promise`\<[`State`](#state)\>

##### stop()

> **stop**(): `Promise`\<[`State`](#state)\>

Defined in: [src/domain/protocols/Startable.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/Startable.ts#L38)

handle the teardown of an entity

updates `state` according to lifecycle

###### Returns

`Promise`\<[`State`](#state)\>
