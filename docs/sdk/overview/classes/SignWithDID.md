[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / SignWithDID

# Class: SignWithDID

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/Sign.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/didFunctions/Sign.ts#L19)

## Extends

- `Task`\<[`Signature`](../namespaces/Domain/interfaces/Signature.md), [`SignWithDIDArgs`](../interfaces/SignWithDIDArgs.md)\>

## Constructors

### Constructor

> **new SignWithDID**(...`args`: \[[`SignWithDIDArgs`](../interfaces/SignWithDIDArgs.md)\]): `SignWithDID`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`SignWithDIDArgs`](../interfaces/SignWithDIDArgs.md)\] | - |

#### Returns

`SignWithDID`

#### Inherited from

`Task<Domain.Signature, Args>.constructor`

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

> **run**(`ctx`: [`AgentContext`](AgentContext.md)): `Promise`\<\{ `value`: `Buffer`\<`ArrayBufferLike`\>; \}\>

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/Sign.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/didFunctions/Sign.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`AgentContext`](AgentContext.md) |

#### Returns

`Promise`\<\{ `value`: `Buffer`\<`ArrayBufferLike`\>; \}\>

#### Overrides

`Task.run`
