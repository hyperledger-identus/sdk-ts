[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Castor

# Class: Castor\<Extras\>

Defined in: [packages/lib/sdk/src/castor/index.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/index.ts#L49)

Castor is a powerful and flexible library for working with DIDs. Whether you are building a decentralised application
or a more traditional system requiring secure and private identity management, Castor provides the tools and features
you need to easily create, manage, and resolve DIDs.

The optional tuple type parameter `Extras` carries the concrete types of
any extra DID methods passed to the constructor, so that `createDID`,
`publishDID`, `updateDID` and `deactivateDID` only accept method names
that are actually registered (defaults `"prism" | "peer"` plus any extras)
and infer their payload types directly from each DID method instance.

 Castor

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Extras` *extends* readonly `DIDMethodInput`[] | readonly \[\] |

## Implements

- [`Castor`](../namespaces/Domain/interfaces/Castor.md)

## Constructors

### Constructor

> **new Castor**\<`Extras`\>(`apollo`: [`Apollo`](../namespaces/Domain/interfaces/Apollo.md), `extraMethods?`: `Extras`): `Castor`\<`Extras`\>

Defined in: [packages/lib/sdk/src/castor/index.ts:74](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/index.ts#L74)

Creates an instance of Castor as soon as a valid cryptographic interface is provided (Apollo).
Registers `prism` and `peer` DID methods by default.
Pass additional DIDMethod instances to extend or override defaults.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `apollo` | [`Apollo`](../namespaces/Domain/interfaces/Apollo.md) | - |
| `extraMethods?` | `Extras` | tuple of custom DID methods to register |

#### Returns

`Castor`\<`Extras`\>

## Methods

### createDID() {#createdid}

> **createDID**\<`M`\>(`method`: `M`, `opts`: [`CreatePayloadOf`](../type-aliases/CreatePayloadOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>): `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

Defined in: [packages/lib/sdk/src/castor/index.ts:79](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/index.ts#L79)

#### Type Parameters

| Type Parameter |
| ------ |
| `M` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `M` |
| `opts` | [`CreatePayloadOf`](../type-aliases/CreatePayloadOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\> |

#### Returns

`Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

#### Implementation of

[`Castor`](../namespaces/Domain/interfaces/Castor.md).[`createDID`](../namespaces/Domain/interfaces/Castor.md#createdid)

***

### deactivateDID() {#deactivatedid}

> **deactivateDID**\<`M`\>(`method`: `M`, `opts`: [`DeactivatePayloadOf`](../type-aliases/DeactivatePayloadOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>): `Promise`\<[`MetadataOf`](../type-aliases/MetadataOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>\>

Defined in: [packages/lib/sdk/src/castor/index.ts:116](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/index.ts#L116)

#### Type Parameters

| Type Parameter |
| ------ |
| `M` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `M` |
| `opts` | [`DeactivatePayloadOf`](../type-aliases/DeactivatePayloadOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\> |

#### Returns

`Promise`\<[`MetadataOf`](../type-aliases/MetadataOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>\>

#### Implementation of

[`Castor`](../namespaces/Domain/interfaces/Castor.md).[`deactivateDID`](../namespaces/Domain/interfaces/Castor.md#deactivatedid)

***

### publishDID() {#publishdid}

> **publishDID**\<`M`\>(`method`: `M`, `opts`: [`PublishPayloadOf`](../type-aliases/PublishPayloadOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>): `Promise`\<[`MetadataOf`](../type-aliases/MetadataOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>\>

Defined in: [packages/lib/sdk/src/castor/index.ts:94](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/index.ts#L94)

#### Type Parameters

| Type Parameter |
| ------ |
| `M` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `M` |
| `opts` | [`PublishPayloadOf`](../type-aliases/PublishPayloadOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\> |

#### Returns

`Promise`\<[`MetadataOf`](../type-aliases/MetadataOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>\>

#### Implementation of

[`Castor`](../namespaces/Domain/interfaces/Castor.md).[`publishDID`](../namespaces/Domain/interfaces/Castor.md#publishdid)

***

### resolveDID() {#resolvedid}

> **resolveDID**(`didstr`: `string` \| [`DID`](../namespaces/Domain/classes/DID.md)): `Promise`\<[`DIDDocument`](../namespaces/Domain/classes/DIDDocument.md)\>

Defined in: [packages/lib/sdk/src/castor/index.ts:143](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/index.ts#L143)

Asynchronously resolves a DID to its corresponding DID Document. This function may throw an error if
the DID is invalid or the document cannot be retrieved.
**Note:** only `prism` and `peer` DID methods are currently supported!

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `didstr` | `string` \| [`DID`](../namespaces/Domain/classes/DID.md) | - |

#### Returns

`Promise`\<[`DIDDocument`](../namespaces/Domain/classes/DIDDocument.md)\>

#### Example

This function asynchronously resolves a DID to its corresponding DID Document. It may throw an error if the DID is invalid or the document is unretrievable.

```ts
const didDocument = await castor.resolveDID("did:prism:123456")
```

#### Implementation of

[`Castor`](../namespaces/Domain/interfaces/Castor.md).[`resolveDID`](../namespaces/Domain/interfaces/Castor.md#resolvedid)

***

### updateDID() {#updatedid}

> **updateDID**\<`M`\>(`method`: `M`, `opts`: [`UpdatePayloadOf`](../type-aliases/UpdatePayloadOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>): `Promise`\<[`MetadataOf`](../type-aliases/MetadataOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>\>

Defined in: [packages/lib/sdk/src/castor/index.ts:105](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/index.ts#L105)

#### Type Parameters

| Type Parameter |
| ------ |
| `M` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `M` |
| `opts` | [`UpdatePayloadOf`](../type-aliases/UpdatePayloadOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\> |

#### Returns

`Promise`\<[`MetadataOf`](../type-aliases/MetadataOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>\>

#### Implementation of

[`Castor`](../namespaces/Domain/interfaces/Castor.md).[`updateDID`](../namespaces/Domain/interfaces/Castor.md#updatedid)

***

### verifySignature() {#verifysignature}

> **verifySignature**(`did`: [`DID`](../namespaces/Domain/classes/DID.md), `challenge`: `Uint8Array`, `signature`: `Uint8Array`): `Promise`\<`boolean`\>

Defined in: [packages/lib/sdk/src/castor/index.ts:86](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/index.ts#L86)

Verify a cryptographic signature against a DID's verification methods.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) | the signer's DID |
| `challenge` | `Uint8Array` | the original data that was signed |
| `signature` | `Uint8Array` | the signature bytes to verify |

#### Returns

`Promise`\<`boolean`\>

`true` if any verification method on the DID validates the signature

#### Implementation of

[`Castor`](../namespaces/Domain/interfaces/Castor.md).[`verifySignature`](../namespaces/Domain/interfaces/Castor.md#verifysignature)
