[**@hyperledger/identus-sdk v8.1.1**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / Send

# Class: Send

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/Send.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/didcomm/tasks/Send.ts#L27)

## Extends

- `Task`\<[`Message`](../../../../overview/namespaces/Domain/classes/Message.md) \| `undefined`, [`SendArgs`](../interfaces/SendArgs.md)\>

## Constructors

### Constructor

> **new Send**(...`args`: \[[`SendArgs`](../interfaces/SendArgs.md)\]): `Send`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`SendArgs`](../interfaces/SendArgs.md)\] | - |

#### Returns

`Send`

#### Inherited from

Task\<Domain.Message \| undefined, Args\>.constructor

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

> **run**(`ctx`: [`AgentContext`](../../../../overview/classes/AgentContext.md)): `Promise`\<`any`\>

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/Send.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/didcomm/tasks/Send.ts#L28)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AgentContext`](../../../../overview/classes/AgentContext.md) |

#### Returns

`Promise`\<`any`\>

#### Overrides

`Task.run`
