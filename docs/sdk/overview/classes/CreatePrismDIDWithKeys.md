[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreatePrismDIDWithKeys

# Class: CreatePrismDIDWithKeys

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/CreatePrismDIDWithKeys.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/didFunctions/CreatePrismDIDWithKeys.ts#L21)

Handle the creation of a PrismDID

Calculate and use the latest Prism DID KeyPathIndex.
Create the relevant PrivateKeys.
Store the PrismDID plus Keys in Pluto

## Param

specify the Curve used for the included AuthenticationKey (default: ED25519)

## Param

specify the Curve used for an additional IssuingKey (maps to assertionMethod)

## Extends

- `Task`\<[`DID`](../namespaces/Domain/classes/DID.md), [`CreatePrismDIDWithKeysArgs`](../type-aliases/CreatePrismDIDWithKeysArgs.md)\>

## Constructors

### Constructor

> **new CreatePrismDIDWithKeys**(...`args`: \[[`CreatePrismDIDWithKeysArgs`](../type-aliases/CreatePrismDIDWithKeysArgs.md)\]): `CreatePrismDIDWithKeys`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`CreatePrismDIDWithKeysArgs`](../type-aliases/CreatePrismDIDWithKeysArgs.md)\] | - |

#### Returns

`CreatePrismDIDWithKeys`

#### Inherited from

`Task<DID, Args>.constructor`

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

> **run**(`ctx`: [`AgentContext`](AgentContext.md)): `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/CreatePrismDIDWithKeys.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/didFunctions/CreatePrismDIDWithKeys.ts#L23)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AgentContext`](AgentContext.md) |

#### Returns

`Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

#### Overrides

`Task.run`
