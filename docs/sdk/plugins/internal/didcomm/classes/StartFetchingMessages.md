[**@hyperledger/identus-sdk v8.1.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / StartFetchingMessages

# Class: StartFetchingMessages

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/StartFetchingMessages.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/internal/didcomm/tasks/StartFetchingMessages.ts#L19)

## Extends

- `Task`\<`void`, [`StartFetchingMessagesArgs`](../interfaces/StartFetchingMessagesArgs.md)\>

## Constructors

### Constructor

> **new StartFetchingMessages**(...`args`: \[[`StartFetchingMessagesArgs`](../interfaces/StartFetchingMessagesArgs.md)\]): `StartFetchingMessages`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/utils/tasks.ts#L18)

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

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### run() {#run}

> **run**(`ctx`: [`AgentContext`](../../../../overview/classes/AgentContext.md)): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/StartFetchingMessages.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/internal/didcomm/tasks/StartFetchingMessages.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AgentContext`](../../../../overview/classes/AgentContext.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

`Task.run`
