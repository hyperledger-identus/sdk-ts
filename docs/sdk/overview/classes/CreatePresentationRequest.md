[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreatePresentationRequest

# ~~Class: CreatePresentationRequest~~

Defined in: [src/plugins/internal/oea/tasks/CreatePresentationRequest.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/tasks/CreatePresentationRequest.ts#L18)

## Deprecated

Use CreatePresentationRequest instead from @hyperledger/identus-sdk/plugins/oea

## Extends

- [`Task`](../namespaces/Utils/classes/Task.md)\<[`RequestPresentation`](../../plugins/internal/oea/classes/RequestPresentation.md), [`CreatePresentationRequestArgs`](../interfaces/CreatePresentationRequestArgs.md)\>

## Constructors

### Constructor

> **new CreatePresentationRequest**(...`args`: \[[`CreatePresentationRequestArgs`](../interfaces/CreatePresentationRequestArgs.md)\]): `CreatePresentationRequest`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`CreatePresentationRequestArgs`](../interfaces/CreatePresentationRequestArgs.md)\] |  |

#### Returns

`CreatePresentationRequest`

#### Inherited from

[`Task`](../namespaces/Utils/classes/Task.md).[`constructor`](../namespaces/Utils/classes/Task.md#constructor)

## Methods

### ~~log()~~ {#log}

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L26)

#### Returns

`unknown`

#### Inherited from

[`Task`](../namespaces/Utils/classes/Task.md).[`log`](../namespaces/Utils/classes/Task.md#log)

***

### ~~run()~~ {#run}

> **run**(`ctx`: [`TaskContext`](../type-aliases/TaskContext.md)): `Promise`\<[`RequestPresentation`](../../plugins/internal/oea/classes/RequestPresentation.md)\>

Defined in: [src/plugins/internal/oea/tasks/CreatePresentationRequest.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/tasks/CreatePresentationRequest.ts#L19)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`TaskContext`](../type-aliases/TaskContext.md) |

#### Returns

`Promise`\<[`RequestPresentation`](../../plugins/internal/oea/classes/RequestPresentation.md)\>

#### Overrides

[`Task`](../namespaces/Utils/classes/Task.md).[`run`](../namespaces/Utils/classes/Task.md#run)
