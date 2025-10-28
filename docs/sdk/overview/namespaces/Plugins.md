[**@hyperledger/identus-sdk**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Plugins

# Plugins

## Classes

### `abstract` Task\<T, R\>

Defined in: [src/plugins/types.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/types.ts#L6)

A Task encapsulates a unit of work

args constructor parameter is mandatory if Args type given
args constructor parameter is optional if no Args type given

#### Extends

- [`Task`](Utils/README.md#task)\<[`Payload`](../README.md#payload)\<`R`\>, `T`\>

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |
| `R` | `unknown` |

#### Constructors

##### Constructor

> **new Task**\<`T`, `R`\>(...`args`: `unknown` *extends* `T` ? \[\] : \[`T`\]): [`Task`](#task)\<`T`, `R`\>

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L18)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | `unknown` *extends* `T` ? \[\] : \[`T`\] |  |

###### Returns

[`Task`](#task)\<`T`, `R`\>

###### Inherited from

[`Task`](Utils/README.md#task).[`constructor`](Utils/README.md#task#constructor-1)

#### Methods

##### log()

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L26)

###### Returns

`unknown`

###### Inherited from

[`Task`](Utils/README.md#task).[`log`](Utils/README.md#task#log)

##### run()

> `abstract` **run**(`ctx`: [`Context`](Utils/namespaces/Task.md#context)): `Promise`\<[`Payload`](../README.md#payload)\<`R`\>\>

Defined in: [src/utils/tasks.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](Utils/namespaces/Task.md#context) |

###### Returns

`Promise`\<[`Payload`](../README.md#payload)\<`R`\>\>

###### Inherited from

[`Task`](Utils/README.md#task).[`run`](Utils/README.md#task#run)

## Type Aliases

### Context\<T\>

> **Context**\<`T`\> = [`Context`](Utils/namespaces/Task.md#context)\<`T` & [`AgentContext`](../README.md#agentcontext)\>

Defined in: [src/plugins/types.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/types.ts#L8)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `Record`\<`string`, `never`\> |
