[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreatePrismDID

# ~~Class: CreatePrismDID~~

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/CreatePrismDID.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/didFunctions/CreatePrismDID.ts#L28)

## Deprecated

will be removed in a later release, please use CreatePrismDIDWithKeys
Handle the creation of a PrismDID

Calculate and use the latest Prism DID KeyPathIndex.
Create the relevant PrivateKeys.
Store the PrismDID plus Keys in Pluto

## Param

specify the Curve used for the included AuthorizationKey

## Extends

- `Task`\<[`DID`](../namespaces/Domain/classes/DID.md), [`CreatePrismDIDArgs`](../interfaces/CreatePrismDIDArgs.md)\>

## Constructors

### Constructor

> **new CreatePrismDID**(...`args`: \[[`CreatePrismDIDArgs`](../interfaces/CreatePrismDIDArgs.md)\]): `CreatePrismDID`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`CreatePrismDIDArgs`](../interfaces/CreatePrismDIDArgs.md)\] | - |

#### Returns

`CreatePrismDID`

#### Inherited from

`Task<Domain.DID, Args>.constructor`

## Methods

### ~~log()~~ {#log}

> **log**(): `unknown`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### ~~run()~~ {#run}

> **run**(`ctx`: [`AgentContext`](AgentContext.md)): `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/CreatePrismDID.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/didFunctions/CreatePrismDID.ts#L29)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AgentContext`](AgentContext.md) |

#### Returns

`Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

#### Overrides

`Task.run`
