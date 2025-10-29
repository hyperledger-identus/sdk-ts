[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreatePrismDID

# Class: CreatePrismDID

Defined in: [src/edge-agent/didFunctions/CreatePrismDID.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/didFunctions/CreatePrismDID.ts#L27)

Handle the creation of a PrismDID

Calculate and use the latest Prism DID KeyPathIndex.
Create the relevant PrivateKeys.
Store the PrismDID plus Keys in Pluto

## Param

specify the Curve used for the included AuthorizationKey

## Extends

- [`Task`](../namespaces/Utils/classes/Task.md)\<[`DID`](../namespaces/Domain/classes/DID.md), [`CreatePrismDIDArgs`](../interfaces/CreatePrismDIDArgs.md)\>

## Constructors

### Constructor

> **new CreatePrismDID**(...`args`: \[[`CreatePrismDIDArgs`](../interfaces/CreatePrismDIDArgs.md)\]): `CreatePrismDID`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`CreatePrismDIDArgs`](../interfaces/CreatePrismDIDArgs.md)\] |  |

#### Returns

`CreatePrismDID`

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

> **run**(`ctx`: [`AgentContext`](AgentContext.md)): `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

Defined in: [src/edge-agent/didFunctions/CreatePrismDID.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/didFunctions/CreatePrismDID.ts#L28)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AgentContext`](AgentContext.md) |

#### Returns

`Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

#### Overrides

[`Task`](../namespaces/Utils/classes/Task.md).[`run`](../namespaces/Utils/classes/Task.md#run)
