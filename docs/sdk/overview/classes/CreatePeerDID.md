[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreatePeerDID

# Class: CreatePeerDID

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts#L24)

Task class for creating and storing new peer DIDs.

This class generates a new peer DID with authentication and key agreement keys,
optionally includes mediator services, and stores the DID with its private keys
in the agent's storage. It can also update the mediator's key list if specified.

## Extends

- `Task`\<[`DID`](../namespaces/Domain/classes/DID.md), [`CreatePeerDIDArgs`](../interfaces/CreatePeerDIDArgs.md)\>

## Constructors

### Constructor

> **new CreatePeerDID**(...`args`: \[[`CreatePeerDIDArgs`](../interfaces/CreatePeerDIDArgs.md)\]): `CreatePeerDID`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`CreatePeerDIDArgs`](../interfaces/CreatePeerDIDArgs.md)\] | - |

#### Returns

`CreatePeerDID`

#### Inherited from

`Task<Domain.DID, Args>.constructor`

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

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts#L38)

Executes the task to create and store a new peer DID.

This method:
1. Creates key agreement and authentication private keys
2. Adds mediator service if available and not already present
3. Creates the peer DID using Castor
4. Optionally updates the mediator's key list
5. Stores the DID and its private keys in Pluto

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ctx` | [`AgentContext`](AgentContext.md) | The agent context containing Apollo, Castor, Pluto, and Connections |

#### Returns

`Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

A Promise that resolves to the created DID

#### Overrides

`Task.run`

***

### updateKeyListWithDID() {#updatekeylistwithdid}

> **updateKeyListWithDID**(`ctx`: [`AgentContext`](AgentContext.md), `did`: [`DID`](../namespaces/Domain/classes/DID.md)): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts:106](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/didFunctions/CreatePeerDID.ts#L106)

Asynchronously updates the mediator with the new key list.

This method is used during the mediation process or during DID rotation
to inform the mediator about new keys that should be included in the
mediation key list for message routing.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ctx` | [`AgentContext`](AgentContext.md) | The agent context containing connections and messaging capabilities |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) | The DID to add to the mediator's key list |

#### Returns

`Promise`\<`void`\>

A Promise that resolves when the key list update is sent

#### Throws

When no mediator is available
