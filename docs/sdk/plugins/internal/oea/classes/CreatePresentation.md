[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / CreatePresentation

# Class: CreatePresentation

Defined in: [packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts#L20)

## Extends

- `Task`\<[`Presentation`](Presentation.md), [`CreatePresentationArgs`](../interfaces/CreatePresentationArgs.md)\>

## Constructors

### Constructor

> **new CreatePresentation**(...`args`: \[[`CreatePresentationArgs`](../interfaces/CreatePresentationArgs.md)\]): `CreatePresentation`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`CreatePresentationArgs`](../interfaces/CreatePresentationArgs.md)\] | - |

#### Returns

`CreatePresentation`

#### Inherited from

`Task<Presentation, Args>.constructor`

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### run() {#run}

> **run**(`ctx`: [`Context`](../../../../overview/namespaces/Plugins/type-aliases/Context.md)): `Promise`\<[`Presentation`](Presentation.md)\>

Defined in: [packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts#L21)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../../../../overview/namespaces/Plugins/type-aliases/Context.md) |

#### Returns

`Promise`\<[`Presentation`](Presentation.md)\>

#### Overrides

`Task.run`
