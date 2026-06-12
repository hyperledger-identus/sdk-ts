[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / CreatePresentationRequest

# Class: CreatePresentationRequest

Defined in: [packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentationRequest.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentationRequest.ts#L19)

## Extends

- `Task`\<[`RequestPresentation`](RequestPresentation.md), [`CreatePresentationRequestArgs`](../interfaces/CreatePresentationRequestArgs.md)\>

## Constructors

### Constructor

> **new CreatePresentationRequest**(...`args`: \[[`CreatePresentationRequestArgs`](../interfaces/CreatePresentationRequestArgs.md)\]): `CreatePresentationRequest`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`CreatePresentationRequestArgs`](../interfaces/CreatePresentationRequestArgs.md)\] | - |

#### Returns

`CreatePresentationRequest`

#### Inherited from

`Task<RequestPresentation, Args>.constructor`

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

> **run**(`ctx`: [`CreatePresentationRequestTaskContext`](../type-aliases/CreatePresentationRequestTaskContext.md)): `Promise`\<[`RequestPresentation`](RequestPresentation.md)\>

Defined in: [packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentationRequest.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentationRequest.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`CreatePresentationRequestTaskContext`](../type-aliases/CreatePresentationRequestTaskContext.md) |

#### Returns

`Promise`\<[`RequestPresentation`](RequestPresentation.md)\>

#### Overrides

`Task.run`
