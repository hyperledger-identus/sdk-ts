[**@hyperledger/identus-sdk v8.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / Send

# Class: Send

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/Send.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/didcomm/tasks/Send.ts#L27)

## Extends

- `Task`\<[`Message`](../../../../overview/namespaces/Domain/classes/Message.md) \| `undefined`, [`SendArgs`](../interfaces/SendArgs.md)\>

## Constructors

### Constructor

> **new Send**(...`args`: \[[`SendArgs`](../interfaces/SendArgs.md)\]): `Send`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/tasks.ts#L18)

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

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### run() {#run}

> **run**(`ctx`: [`AgentContext`](../../../../overview/classes/AgentContext.md)): `Promise`\<`any`\>

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/Send.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/didcomm/tasks/Send.ts#L28)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AgentContext`](../../../../overview/classes/AgentContext.md) |

#### Returns

`Promise`\<`any`\>

#### Overrides

`Task.run`
