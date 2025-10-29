[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PKInstance

# Class: PKInstance

Defined in: [src/pollux/utils/jwt/PKInstance.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/utils/jwt/PKInstance.ts#L10)

A Task encapsulates a unit of work

args constructor parameter is mandatory if Args type given
args constructor parameter is optional if no Args type given

## Extends

- [`Task`](../namespaces/Utils/classes/Task.md)\<[`PublicKey`](../namespaces/Domain/classes/PublicKey.md) \| `undefined`, [`PKInstanceArgs`](../interfaces/PKInstanceArgs.md)\>

## Constructors

### Constructor

> **new PKInstance**(...`args`: \[[`PKInstanceArgs`](../interfaces/PKInstanceArgs.md)\]): `PKInstance`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`PKInstanceArgs`](../interfaces/PKInstanceArgs.md)\] |  |

#### Returns

`PKInstance`

#### Inherited from

[`Task`](../namespaces/Utils/classes/Task.md).[`constructor`](../namespaces/Utils/classes/Task.md#constructor)

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L26)

#### Returns

`unknown`

#### Inherited from

[`Task`](../namespaces/Utils/classes/Task.md).[`log`](../namespaces/Utils/classes/Task.md#log)

***

### run() {#run}

> **run**(`ctx`: [`AgentContext`](AgentContext.md)): `Promise`\<[`PublicKey`](../namespaces/Domain/classes/PublicKey.md) \| `undefined`\>

Defined in: [src/pollux/utils/jwt/PKInstance.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/utils/jwt/PKInstance.ts#L11)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AgentContext`](AgentContext.md) |

#### Returns

`Promise`\<[`PublicKey`](../namespaces/Domain/classes/PublicKey.md) \| `undefined`\>

#### Overrides

[`Task`](../namespaces/Utils/classes/Task.md).[`run`](../namespaces/Utils/classes/Task.md#run)
