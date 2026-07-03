[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PKInstance

# Class: PKInstance

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/PKInstance.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/didFunctions/PKInstance.ts#L11)

## Extends

- `Task`\<[`PublicKey`](../namespaces/Domain/classes/PublicKey.md) \| `undefined`, [`PKInstanceArgs`](../interfaces/PKInstanceArgs.md)\>

## Constructors

### Constructor

> **new PKInstance**(...`args`: \[[`PKInstanceArgs`](../interfaces/PKInstanceArgs.md)\]): `PKInstance`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`PKInstanceArgs`](../interfaces/PKInstanceArgs.md)\] | - |

#### Returns

`PKInstance`

#### Inherited from

Task\<Domain.PublicKey \| undefined, Args\>.constructor

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

> **run**(`ctx`: [`AgentContext`](AgentContext.md)): `Promise`\<[`PublicKey`](../namespaces/Domain/classes/PublicKey.md) \| `undefined`\>

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/PKInstance.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/didFunctions/PKInstance.ts#L12)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AgentContext`](AgentContext.md) |

#### Returns

`Promise`\<[`PublicKey`](../namespaces/Domain/classes/PublicKey.md) \| `undefined`\>

#### Overrides

`Task.run`
