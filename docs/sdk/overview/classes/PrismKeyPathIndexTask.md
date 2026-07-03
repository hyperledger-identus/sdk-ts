[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PrismKeyPathIndexTask

# Class: PrismKeyPathIndexTask

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/PrismKeyPathIndex.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/didFunctions/PrismKeyPathIndex.ts#L17)

## Extends

- `Task`\<`number`, [`PrismKeyPathIndexArgs`](../interfaces/PrismKeyPathIndexArgs.md)\>

## Constructors

### Constructor

> **new PrismKeyPathIndexTask**(...`args`: \[[`PrismKeyPathIndexArgs`](../interfaces/PrismKeyPathIndexArgs.md)\]): `PrismKeyPathIndexTask`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`PrismKeyPathIndexArgs`](../interfaces/PrismKeyPathIndexArgs.md)\] | - |

#### Returns

`PrismKeyPathIndexTask`

#### Inherited from

`Task<number, Args>.constructor`

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

> **run**(`ctx`: [`AgentContext`](AgentContext.md)): `Promise`\<`number`\>

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/PrismKeyPathIndex.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/didFunctions/PrismKeyPathIndex.ts#L18)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AgentContext`](AgentContext.md) |

#### Returns

`Promise`\<`number`\>

#### Overrides

`Task.run`
