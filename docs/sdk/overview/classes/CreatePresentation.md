[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreatePresentation

# ~~Class: CreatePresentation~~

Defined in: [src/plugins/internal/oea/tasks/CreatePresentation.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/tasks/CreatePresentation.ts#L20)

## Deprecated

Use CreatePresentation instead from @hyperledger/identus-sdk/plugins/oea

## Extends

- [`Task`](../namespaces/Utils/classes/Task.md)\<[`Presentation`](../../plugins/internal/oea/classes/Presentation.md), [`CreatePresentationArgs`](../interfaces/CreatePresentationArgs.md)\>

## Constructors

### Constructor

> **new CreatePresentation**(...`args`: \[[`CreatePresentationArgs`](../interfaces/CreatePresentationArgs.md)\]): `CreatePresentation`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`CreatePresentationArgs`](../interfaces/CreatePresentationArgs.md)\] |  |

#### Returns

`CreatePresentation`

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

> **run**(`ctx`: [`Context`](../namespaces/Plugins/type-aliases/Context.md)): `Promise`\<[`Presentation`](../../plugins/internal/oea/classes/Presentation.md)\>

Defined in: [src/plugins/internal/oea/tasks/CreatePresentation.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oea/tasks/CreatePresentation.ts#L21)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../namespaces/Plugins/type-aliases/Context.md) |

#### Returns

`Promise`\<[`Presentation`](../../plugins/internal/oea/classes/Presentation.md)\>

#### Overrides

[`Task`](../namespaces/Utils/classes/Task.md).[`run`](../namespaces/Utils/classes/Task.md#run)
