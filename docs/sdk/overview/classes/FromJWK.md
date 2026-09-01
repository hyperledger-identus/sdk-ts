[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / FromJWK

# Class: FromJWK

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/FromJWK.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/edge-agent/didFunctions/FromJWK.ts#L11)

## Extends

- `Task`\<[`PublicKey`](../namespaces/Domain/classes/PublicKey.md) \| [`KeyPair`](../namespaces/Domain/classes/KeyPair.md), [`FromJWKArgs`](../interfaces/FromJWKArgs.md)\>

## Constructors

### Constructor

> **new FromJWK**(...`args`: \[[`FromJWKArgs`](../interfaces/FromJWKArgs.md)\]): `FromJWK`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`FromJWKArgs`](../interfaces/FromJWKArgs.md)\] | - |

#### Returns

`FromJWK`

#### Inherited from

Task\<PublicKey \| KeyPair, Args\>.constructor

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### run() {#run}

> **run**(`ctx`: `Pick`\<[`AgentContext`](AgentContext.md), `"Apollo"`\>): `Promise`\<[`PublicKey`](../namespaces/Domain/classes/PublicKey.md) \| [`KeyPair`](../namespaces/Domain/classes/KeyPair.md)\>

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/FromJWK.ts:128](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/edge-agent/didFunctions/FromJWK.ts#L128)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | `Pick`\<[`AgentContext`](AgentContext.md), `"Apollo"`\> |

#### Returns

`Promise`\<[`PublicKey`](../namespaces/Domain/classes/PublicKey.md) \| [`KeyPair`](../namespaces/Domain/classes/KeyPair.md)\>

#### Overrides

`Task.run`
