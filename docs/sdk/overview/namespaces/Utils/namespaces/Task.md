[**@hyperledger/identus-sdk**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Utils](../README.md) / Task

# Task

## Classes

### ContextProxy

Defined in: [src/utils/tasks.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L35)

Context using proxy so we can extend arbitrarily

#### Constructors

##### Constructor

> **new ContextProxy**(`opts`: [`JsonObj`](../README.md#jsonobj)): [`ContextProxy`](#contextproxy)

Defined in: [src/utils/tasks.ts:40](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L40)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | [`JsonObj`](../README.md#jsonobj) |

###### Returns

[`ContextProxy`](#contextproxy)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="logger"></a> `logger` | `readonly` | [`Logger`](../README.md#logger) | [src/utils/tasks.ts:36](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L36) |

#### Methods

##### extend()

> **extend**(`deps`: [`JsonObj`](../README.md#jsonobj)): `this`

Defined in: [src/utils/tasks.ts:69](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L69)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `deps` | [`JsonObj`](../README.md#jsonobj) |

###### Returns

`this`

##### run()

> **run**\<`T`\>(`task`: [`Task`](../README.md#task)\<`T`, `any`\>): `Promise`\<`T`\>

Defined in: [src/utils/tasks.ts:55](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L55)

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `task` | [`Task`](../README.md#task)\<`T`, `any`\> |

###### Returns

`Promise`\<`T`\>

***

### `abstract` Runner

Defined in: [src/utils/tasks.ts:97](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L97)

used to enable Modules to propagate the Context
and have access to runTask

#### Extended by

- [`JWT`](../../../README.md#jwt-1)
- [`SDJWT`](../../../README.md#sdjwt-1)
- [`DIFModule`](../../../../plugins/internal/dif/README.md#difmodule)

#### Constructors

##### Constructor

> **new Runner**(): [`Runner`](#runner)

###### Returns

[`Runner`](#runner)

#### Methods

##### clone()

> `abstract` **clone**(): [`Runner`](#runner)

Defined in: [src/utils/tasks.ts:101](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L101)

###### Returns

[`Runner`](#runner)

##### withContext()

> **withContext**(`ctx`: [`Context`](#context)): [`Runner`](#runner)

Defined in: [src/utils/tasks.ts:103](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L103)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](#context) |

###### Returns

[`Runner`](#runner)

## Interfaces

### ContextCtor

Defined in: [src/utils/tasks.ts:82](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L82)

used to mask the Proxy behaviour
and enable Typescript to know what Modules should be accessible

#### Constructors

##### Constructor

> **new ContextCtor**\<`T`\>(`modules`: `T`): [`Context`](#context)\<`T`\>

Defined in: [src/utils/tasks.ts:83](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L83)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `modules` | `T` |

###### Returns

[`Context`](#context)\<`T`\>

## Type Aliases

### Context\<T\>

> **Context**\<`T`\> = `T` & [`ContextProxy`](#contextproxy)

Defined in: [src/utils/tasks.ts:90](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L90)

Context is provided to running tasks
it optimistically provides access to Modules

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`JsonObj`](../README.md#jsonobj) |

## Variables

### Context

> **Context**: [`ContextCtor`](#contextctor)

Defined in: [src/utils/tasks.ts:90](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L90)
