[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DIDMethod

# Type Alias: DIDMethod\<TMetadata, CreatePayload, PublishPayload, UpdatePayload, DeactivatePayload\>

> **DIDMethod**\<`TMetadata`, `CreatePayload`, `PublishPayload`, `UpdatePayload`, `DeactivatePayload`\> = \{ `create`: (`opts`: `CreatePayload`) => `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>; `method`: `string`; `resolver`: [`DIDResolver`](../namespaces/Domain/classes/DIDResolver.md); `verifySignature`: (`did`: [`DID`](../namespaces/Domain/classes/DID.md), `challenge`: `Uint8Array`, `signature`: `Uint8Array`) => `Promise`\<`boolean`\>; \} & `OptionalMethod`\<`"publish"`, `PublishPayload`, [`DIDMethodOperation`](DIDMethodOperation.md)\<`TMetadata`\>\> & `OptionalMethod`\<`"update"`, `UpdatePayload`, [`DIDMethodOperation`](DIDMethodOperation.md)\<`TMetadata`\>\> & `OptionalMethod`\<`"deactivate"`, `DeactivatePayload`, [`DIDMethodOperation`](DIDMethodOperation.md)\<`TMetadata`\>\>

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:54](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/types.ts#L54)

Core abstraction for a pluggable DID method.

Implementations must provide `create`, `verifySignature` and a `resolver`.
Lifecycle operations (`publish`, `update`, `deactivate`) are optional --
they only appear when the corresponding payload type parameter is not `never`.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `create()` | (`opts`: `CreatePayload`) => `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\> | [packages/lib/sdk/src/castor/methods/types.ts:63](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/types.ts#L63) |
| `method` | `string` | [packages/lib/sdk/src/castor/methods/types.ts:62](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/types.ts#L62) |
| `resolver` | [`DIDResolver`](../namespaces/Domain/classes/DIDResolver.md) | [packages/lib/sdk/src/castor/methods/types.ts:61](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/types.ts#L61) |
| `verifySignature()` | (`did`: [`DID`](../namespaces/Domain/classes/DID.md), `challenge`: `Uint8Array`, `signature`: `Uint8Array`) => `Promise`\<`boolean`\> | [packages/lib/sdk/src/castor/methods/types.ts:64](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/types.ts#L64) |

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `TMetadata` | `never` | method-specific metadata returned by lifecycle ops |
| `CreatePayload` | `never` | options accepted by create |
| `PublishPayload` | `never` | options accepted by `publish` (omit to disable) |
| `UpdatePayload` | `never` | options accepted by `update` (omit to disable) |
| `DeactivatePayload` | `never` | options accepted by `deactivate` (omit to disable) |

## Example

```ts
class MyMethod implements DIDMethod<void, MyCreateOpts> {
  method = "my";
  resolver = new MyResolver();
  async create(opts: MyCreateOpts) { ... }
  async verifySignature(did, challenge, sig) { ... }
}
```
