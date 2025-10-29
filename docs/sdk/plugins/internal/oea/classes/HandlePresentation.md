[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / HandlePresentation

# Class: HandlePresentation

Defined in: [src/plugins/internal/oea/tasks/HandlePresentation.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/tasks/HandlePresentation.ts#L11)

A Task encapsulates a unit of work

args constructor parameter is mandatory if Args type given
args constructor parameter is optional if no Args type given

## Extends

- [`Task`](../../../../overview/namespaces/Utils/classes/Task.md)\<`boolean`, [`HandlePresentationArgs`](../interfaces/HandlePresentationArgs.md)\>

## Constructors

### Constructor

> **new HandlePresentation**(...`args`: \[[`HandlePresentationArgs`](../interfaces/HandlePresentationArgs.md)\]): `HandlePresentation`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`HandlePresentationArgs`](../interfaces/HandlePresentationArgs.md)\] |  |

#### Returns

`HandlePresentation`

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

> **run**(`ctx`: [`Context`](../../../../overview/namespaces/Plugins/type-aliases/Context.md)): `Promise`\<`any`\>

Defined in: [src/plugins/internal/oea/tasks/HandlePresentation.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/tasks/HandlePresentation.ts#L12)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../../../../overview/namespaces/Plugins/type-aliases/Context.md) |

#### Returns

`Promise`\<`any`\>

#### Overrides

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`run`](../../../../overview/namespaces/Utils/classes/Task.md#run)
