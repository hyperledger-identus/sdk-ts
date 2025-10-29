[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / RunProtocol

# Class: RunProtocol

Defined in: [src/edge-agent/helpers/RunProtocol.ts:77](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/RunProtocol.ts#L77)

Find and execute a task registered by plugins for the given pid (protocol identifier)

## Extends

- [`Task`](../namespaces/Utils/classes/Task.md)\<`any`, [`RunProtocolArgs`](../type-aliases/RunProtocolArgs.md)\>

## Constructors

### Constructor

> **new RunProtocol**(...`args`: \[[`RunProtocolArgs`](../type-aliases/RunProtocolArgs.md)\]): `RunProtocol`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`RunProtocolArgs`](../type-aliases/RunProtocolArgs.md)\] |  |

#### Returns

`RunProtocol`

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

> **run**(`ctx`: [`AgentContext`](AgentContext.md)): `Promise`\<`any`\>

Defined in: [src/edge-agent/helpers/RunProtocol.ts:78](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/RunProtocol.ts#L78)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AgentContext`](AgentContext.md) |

#### Returns

`Promise`\<`any`\>

#### Overrides

[`Task`](../namespaces/Utils/classes/Task.md).[`run`](../namespaces/Utils/classes/Task.md#run)
