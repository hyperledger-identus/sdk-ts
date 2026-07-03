[**@hyperledger/identus-sdk v8.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / StartFetchingMessages

# Class: StartFetchingMessages

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/StartFetchingMessages.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/didcomm/tasks/StartFetchingMessages.ts#L19)

## Extends

- `Task`\<`void`, [`StartFetchingMessagesArgs`](../interfaces/StartFetchingMessagesArgs.md)\>

## Constructors

### Constructor

> **new StartFetchingMessages**(...`args`: \[[`StartFetchingMessagesArgs`](../interfaces/StartFetchingMessagesArgs.md)\]): `StartFetchingMessages`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`StartFetchingMessagesArgs`](../interfaces/StartFetchingMessagesArgs.md)\] | - |

#### Returns

`StartFetchingMessages`

#### Inherited from

`Task<void, Args>.constructor`

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

> **run**(`ctx`: [`AgentContext`](../../../../overview/classes/AgentContext.md)): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/StartFetchingMessages.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/didcomm/tasks/StartFetchingMessages.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AgentContext`](../../../../overview/classes/AgentContext.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

`Task.run`
