[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Plugins](../README.md) / Task

# Abstract Class: Task\<T, R\>

Defined in: [src/plugins/types.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/types.ts#L6)

A Task encapsulates a unit of work

args constructor parameter is mandatory if Args type given
args constructor parameter is optional if no Args type given

## Extends

- [`Task`](../../Utils/classes/Task.md)\<[`Payload`](../../../interfaces/Payload.md)\<`R`\>, `T`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |
| `R` | `unknown` |

## Constructors

### Constructor

> **new Task**\<`T`, `R`\>(...`args`: `unknown` *extends* `T` ? \[\] : \[`T`\]): `Task`\<`T`, `R`\>

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | `unknown` *extends* `T` ? \[\] : \[`T`\] |  |

#### Returns

`Task`\<`T`, `R`\>

#### Inherited from

[`Task`](../../Utils/classes/Task.md).[`constructor`](../../Utils/classes/Task.md#constructor)

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L26)

#### Returns

`unknown`

#### Inherited from

[`Task`](../../Utils/classes/Task.md).[`log`](../../Utils/classes/Task.md#log)

***

### run() {#run}

> `abstract` **run**(`ctx`: [`Context`](../../Utils/namespaces/Task/type-aliases/Context.md)): `Promise`\<[`Payload`](../../../interfaces/Payload.md)\<`R`\>\>

Defined in: [src/utils/tasks.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L23)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../../Utils/namespaces/Task/type-aliases/Context.md) |

#### Returns

`Promise`\<[`Payload`](../../../interfaces/Payload.md)\<`R`\>\>

#### Inherited from

[`Task`](../../Utils/classes/Task.md).[`run`](../../Utils/classes/Task.md#run)
