[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PrismKeyPathIndexTask

# Class: PrismKeyPathIndexTask

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/PrismKeyPathIndex.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/didFunctions/PrismKeyPathIndex.ts#L17)

## Extends

- `Task`\<`number`, [`PrismKeyPathIndexArgs`](../interfaces/PrismKeyPathIndexArgs.md)\>

## Constructors

### Constructor

> **new PrismKeyPathIndexTask**(...`args`: \[[`PrismKeyPathIndexArgs`](../interfaces/PrismKeyPathIndexArgs.md)\]): `PrismKeyPathIndexTask`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

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

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### run() {#run}

> **run**(`ctx`: [`AgentContext`](AgentContext.md)): `Promise`\<`number`\>

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/PrismKeyPathIndex.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/didFunctions/PrismKeyPathIndex.ts#L18)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AgentContext`](AgentContext.md) |

#### Returns

`Promise`\<`number`\>

#### Overrides

`Task.run`
