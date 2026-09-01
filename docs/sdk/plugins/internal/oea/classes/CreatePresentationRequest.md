[**@hyperledger/identus-sdk v8.1.1**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / CreatePresentationRequest

# Class: CreatePresentationRequest

Defined in: [packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentationRequest.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentationRequest.ts#L19)

## Extends

- `Task`\<[`RequestPresentation`](RequestPresentation.md), [`CreatePresentationRequestArgs`](../interfaces/CreatePresentationRequestArgs.md)\>

## Constructors

### Constructor

> **new CreatePresentationRequest**(...`args`: \[[`CreatePresentationRequestArgs`](../interfaces/CreatePresentationRequestArgs.md)\]): `CreatePresentationRequest`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/utils/tasks.ts#L18)

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

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### run() {#run}

> **run**(`ctx`: [`CreatePresentationRequestTaskContext`](../type-aliases/CreatePresentationRequestTaskContext.md)): `Promise`\<[`RequestPresentation`](RequestPresentation.md)\>

Defined in: [packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentationRequest.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/oea/tasks/CreatePresentationRequest.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`CreatePresentationRequestTaskContext`](../type-aliases/CreatePresentationRequestTaskContext.md) |

#### Returns

`Promise`\<[`RequestPresentation`](RequestPresentation.md)\>

#### Overrides

`Task.run`
