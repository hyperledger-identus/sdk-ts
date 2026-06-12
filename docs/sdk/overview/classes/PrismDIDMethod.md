[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PrismDIDMethod

# Class: PrismDIDMethod

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:71](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/prism/index.ts#L71)

DID method implementation for `did:prism`.

Handles creation of long-form Prism DIDs, publishing them as signed
Atala operations, and verifying signatures against resolved DID Documents.

## Example

```ts
const prism = new PrismDIDMethod();
const did = await prism.create({
  keys: { MASTER_KEY: masterSK, ISSUING_KEY: [issuingSK] },
  services: [service],
});
```

## Implements

- [`DIDMethod`](../type-aliases/DIDMethod.md)\<`Metadata`, `CreatePayload`, `PublishPayload`\>

## Constructors

### Constructor

> **new PrismDIDMethod**(`prismResolverEndpoint`: `string`): `PrismDIDMethod`

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:79](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/prism/index.ts#L79)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prismResolverEndpoint` | `string` | custom VDR endpoint for short-form resolution |

#### Returns

`PrismDIDMethod`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="property-method"></a> `method` | `"prism"` | [packages/lib/sdk/src/castor/methods/prism/index.ts:73](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/prism/index.ts#L73) |
| <a id="property-resolver"></a> `resolver` | `PrismDIDResolver` | [packages/lib/sdk/src/castor/methods/prism/index.ts:74](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/prism/index.ts#L74) |

## Methods

### create() {#create}

> **create**(`opts`: `CreatePayload`): `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:90](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/prism/index.ts#L90)

Create a new long-form Prism DID from the provided keys and services.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `CreatePayload` | creation options containing keys and optional services |

#### Returns

`Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

the newly created `did:prism:...` DID

#### Throws

if `MASTER_KEY` is missing

#### Implementation of

`DIDMethod.create`

***

### publish() {#publish}

> **publish**(`opts`: `PublishPayload`): `Promise`\<`Metadata`\>

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:161](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/prism/index.ts#L161)

Publish a Prism DID by building and signing an Atala operation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `PublishPayload` | the master key and DID to publish |

#### Returns

`Promise`\<`Metadata`\>

serialised `AtalaObject` bytes

#### Throws

if the key cannot sign

#### Implementation of

`DIDMethod.publish`

***

### verifySignature() {#verifysignature}

> **verifySignature**(`did`: [`DID`](../namespaces/Domain/classes/DID.md), `challenge`: `Uint8Array`, `signature`: `Uint8Array`): `Promise`\<`boolean`\>

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:353](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/prism/index.ts#L353)

Verify a signature against a Prism DID's verification methods.

Resolves the DID Document and tries each verification method until
one successfully validates the signature, or returns `false`.

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
