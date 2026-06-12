[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PeerDIDMethod

# Class: PeerDIDMethod

Defined in: [packages/lib/sdk/src/castor/methods/peer/index.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/index.ts#L41)

DID method implementation for `did:peer` (algorithm 2).

Creates peer DIDs from authentication and key-agreement keys and
verifies signatures by resolving the DID Document locally.

## Example

```ts
const peer = new PeerDIDMethod();
const did = await peer.create({
  keys: {
    AUTHENTICATION_KEY: [authSK],
    KEY_AGREEMENT_KEY: [agreementSK],
  },
  services: [service],
});
```

## Implements

- [`DIDMethod`](../type-aliases/DIDMethod.md)\<`never`, `CreatePayload`\>

## Constructors

### Constructor

> **new PeerDIDMethod**(): `PeerDIDMethod`

#### Returns

`PeerDIDMethod`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="property-method"></a> `method` | `"peer"` | [packages/lib/sdk/src/castor/methods/peer/index.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/index.ts#L42) |
| <a id="property-resolver"></a> `resolver` | `PeerDIDResolver` | [packages/lib/sdk/src/castor/methods/peer/index.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/index.ts#L43) |

## Methods

### create() {#create}

> **create**(`opts`: `CreatePayload`): `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

Defined in: [packages/lib/sdk/src/castor/methods/peer/index.ts:52](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/index.ts#L52)

Create a new `did:peer:2` DID from the provided keys and services.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `CreatePayload` | creation options containing keys and optional services |

#### Returns

`Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

the newly created peer DID

#### Throws

if required keys are missing

#### Implementation of

`DIDMethod.create`

***

### verifySignature() {#verifysignature}

> **verifySignature**(`did`: [`DID`](../namespaces/Domain/classes/DID.md), `challenge`: `Uint8Array`, `signature`: `Uint8Array`): `Promise`\<`boolean`\>

Defined in: [packages/lib/sdk/src/castor/methods/peer/index.ts:71](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/index.ts#L71)

Verify a signature against a Peer DID's Ed25519 verification methods.

Resolves the DID Document and tries each Ed25519 verification method
until one validates the signature, or returns `false`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `challenge` | `Uint8Array` |
| `signature` | `Uint8Array` |

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

`DIDMethod.verifySignature`
