[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PrismDIDMethod

# Class: PrismDIDMethod

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:182](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/prism/index.ts#L182)

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

- [`DIDMethod`](../type-aliases/DIDMethod.md)\<[`Metadata`](../type-aliases/Metadata.md), [`CreatePayload`](../type-aliases/CreatePayload.md), [`PublishPayload`](../type-aliases/PublishPayload.md), [`UpdatePayload`](../type-aliases/UpdatePayload.md), [`DeactivatePayload`](../type-aliases/DeactivatePayload.md)\>

## Constructors

### Constructor

> **new PrismDIDMethod**(`prismResolverEndpoint`: `string`): `PrismDIDMethod`

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:190](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/prism/index.ts#L190)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prismResolverEndpoint` | `string` | custom VDR endpoint for short-form resolution |

#### Returns

`PrismDIDMethod`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="property-method"></a> `method` | `"prism"` | [packages/lib/sdk/src/castor/methods/prism/index.ts:184](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/prism/index.ts#L184) |
| <a id="property-resolver"></a> `resolver` | `PrismDIDResolver` | [packages/lib/sdk/src/castor/methods/prism/index.ts:185](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/prism/index.ts#L185) |

## Methods

### create() {#create}

> **create**(`opts`: [`CreatePayload`](../type-aliases/CreatePayload.md)): `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:387](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/prism/index.ts#L387)

Create a new long-form Prism DID from the provided keys and services.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | [`CreatePayload`](../type-aliases/CreatePayload.md) | creation options containing keys and optional services |

#### Returns

`Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

the newly created `did:prism:...` DID

#### Throws

if `MASTER_KEY` is missing

#### Implementation of

`DIDMethod.create`

***

### deactivate() {#deactivate}

> **deactivate**(`opts`: [`DeactivatePayload`](../type-aliases/DeactivatePayload.md)): `Promise`\<[`Metadata`](../type-aliases/Metadata.md)\>

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:198](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/prism/index.ts#L198)

The previous operation hash is the hash of the last operation, create, update, deactivate
We can use the neoprism API to get the last operation hash for a specific did and TX

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | [`DeactivatePayload`](../type-aliases/DeactivatePayload.md) |

#### Returns

`Promise`\<[`Metadata`](../type-aliases/Metadata.md)\>

#### Implementation of

`DIDMethod.deactivate`

***

### publish() {#publish}

> **publish**(`opts`: [`PublishPayload`](../type-aliases/PublishPayload.md)): `Promise`\<[`Metadata`](../type-aliases/Metadata.md)\>

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:439](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/prism/index.ts#L439)

Publish a Prism DID by building and signing an Atala operation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | [`PublishPayload`](../type-aliases/PublishPayload.md) | the master key and DID to publish |

#### Returns

`Promise`\<[`Metadata`](../type-aliases/Metadata.md)\>

serialised `AtalaObject` bytes

#### Throws

if the key cannot sign

#### Implementation of

`DIDMethod.publish`

***

### update() {#update}

> **update**(`opts`: [`UpdatePayload`](../type-aliases/UpdatePayload.md)): `Promise`\<[`Metadata`](../type-aliases/Metadata.md)\>

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:220](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/prism/index.ts#L220)

Update a published Prism DID by building and signing an Atala operation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | [`UpdatePayload`](../type-aliases/UpdatePayload.md) | the master key, DID, ordered actions and (optionally) the previous operation hash |

#### Returns

`Promise`\<[`Metadata`](../type-aliases/Metadata.md)\>

serialised `AtalaObject` bytes

#### Throws

if the key cannot sign the operation

#### Implementation of

`DIDMethod.update`

***

### verifySignature() {#verifysignature}

> **verifySignature**(`did`: [`DID`](../namespaces/Domain/classes/DID.md), `challenge`: `Uint8Array`, `signature`: `Uint8Array`): `Promise`\<`boolean`\>

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:597](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/castor/methods/prism/index.ts#L597)

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
