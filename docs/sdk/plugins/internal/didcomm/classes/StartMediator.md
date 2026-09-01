[**@hyperledger/identus-sdk v8.1.2**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / StartMediator

# Class: StartMediator

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/StartMediator.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/plugins/internal/didcomm/tasks/StartMediator.ts#L22)

## Extends

- `Task`\<`void`, [`StartMediatorArgs`](../interfaces/StartMediatorArgs.md)\>

## Constructors

### Constructor

> **new StartMediator**(...`args`: \[[`StartMediatorArgs`](../interfaces/StartMediatorArgs.md)\]): `StartMediator`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`StartMediatorArgs`](../interfaces/StartMediatorArgs.md)\] | - |

#### Returns

`StartMediator`

#### Inherited from

`Task<void, Args>.constructor`

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### run() {#run}

> **run**(`ctx`: [`AgentContext`](../../../../overview/classes/AgentContext.md)): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/StartMediator.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/plugins/internal/didcomm/tasks/StartMediator.ts#L23)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AgentContext`](../../../../overview/classes/AgentContext.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

`Task.run`
