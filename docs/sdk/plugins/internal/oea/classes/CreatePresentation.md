[**@hyperledger/identus-sdk v8.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / CreatePresentation

# Class: CreatePresentation

Defined in: [packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts#L20)

## Extends

- `Task`\<[`Presentation`](Presentation.md), [`CreatePresentationArgs`](../interfaces/CreatePresentationArgs.md)\>

## Constructors

### Constructor

> **new CreatePresentation**(...`args`: \[[`CreatePresentationArgs`](../interfaces/CreatePresentationArgs.md)\]): `CreatePresentation`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/tasks.ts#L18)

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

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### run() {#run}

> **run**(`ctx`: [`Context`](../../../../overview/namespaces/Plugins/type-aliases/Context.md)): `Promise`\<[`Presentation`](Presentation.md)\>

Defined in: [packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentation.ts#L21)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../../../../overview/namespaces/Plugins/type-aliases/Context.md) |

#### Returns

`Promise`\<[`Presentation`](Presentation.md)\>

#### Overrides

`Task.run`
