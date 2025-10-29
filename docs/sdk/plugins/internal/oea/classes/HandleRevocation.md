[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / HandleRevocation

# Class: HandleRevocation

Defined in: [src/plugins/internal/oea/tasks/HandleRevocation.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/tasks/HandleRevocation.ts#L19)

A Task encapsulates a unit of work

args constructor parameter is mandatory if Args type given
args constructor parameter is optional if no Args type given

## Extends

- [`Task`](../../../../overview/namespaces/Utils/classes/Task.md)\<`void`, [`HandleRevocationArgs`](../interfaces/HandleRevocationArgs.md)\>

## Constructors

### Constructor

> **new HandleRevocation**(...`args`: \[[`HandleRevocationArgs`](../interfaces/HandleRevocationArgs.md)\]): `HandleRevocation`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`HandleRevocationArgs`](../interfaces/HandleRevocationArgs.md)\] |  |

#### Returns

`HandleRevocation`

#### Inherited from

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`constructor`](../../../../overview/namespaces/Utils/classes/Task.md#constructor)

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L26)

#### Returns

`unknown`

#### Inherited from

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`log`](../../../../overview/namespaces/Utils/classes/Task.md#log)

***

### run() {#run}

> **run**(`ctx`: [`Context`](../../didcomm/type-aliases/Context.md)): `Promise`\<`void`\>

Defined in: [src/plugins/internal/oea/tasks/HandleRevocation.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/tasks/HandleRevocation.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../../didcomm/type-aliases/Context.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`run`](../../../../overview/namespaces/Utils/classes/Task.md#run)
