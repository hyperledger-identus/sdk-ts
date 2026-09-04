[**@hyperledger/identus-sdk v8.1.2**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PrismDIDMethod

# Class: PrismDIDMethod

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:198](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/prism/index.ts#L198)

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

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:206](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/prism/index.ts#L206)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prismResolverEndpoint` | `string` | custom VDR endpoint for short-form resolution |

#### Returns

`PrismDIDMethod`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="property-method"></a> `method` | `"prism"` | [packages/lib/sdk/src/castor/methods/prism/index.ts:200](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/prism/index.ts#L200) |
| <a id="property-resolver"></a> `resolver` | `PrismDIDResolver` | [packages/lib/sdk/src/castor/methods/prism/index.ts:201](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/prism/index.ts#L201) |

## Methods

### create() {#create}

> **create**(`opts`: [`CreatePayload`](../type-aliases/CreatePayload.md)): `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:413](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/prism/index.ts#L413)

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

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:214](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/prism/index.ts#L214)

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

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:465](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/prism/index.ts#L465)

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

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:243](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/prism/index.ts#L243)

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

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:623](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/prism/index.ts#L623)

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
