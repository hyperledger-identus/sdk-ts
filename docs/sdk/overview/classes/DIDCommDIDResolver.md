[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DIDCommDIDResolver

# Class: DIDCommDIDResolver

Defined in: [packages/lib/sdk/src/mercury/DIDCommDIDResolver.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/mercury/DIDCommDIDResolver.ts#L13)

Bridges the SDK's [Castor](Castor.md) DID resolution to the DIDComm library's
`DIDResolver` interface.

Resolves a DID via Castor and maps the resulting DID Document into the
`DIDDoc` shape expected by the DIDComm WASM layer.

## Implements

- `DIDResolver`

## Constructors

### Constructor

> **new DIDCommDIDResolver**(`castor`: [`Castor`](../namespaces/Domain/interfaces/Castor.md)): `DIDCommDIDResolver`

Defined in: [packages/lib/sdk/src/mercury/DIDCommDIDResolver.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/mercury/DIDCommDIDResolver.ts#L14)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `castor` | [`Castor`](../namespaces/Domain/interfaces/Castor.md) |

#### Returns

`DIDCommDIDResolver`

## Methods

### resolve() {#resolve}

> **resolve**(`did`: `string`): `Promise`\<`DIDDoc` \| `null`\>

Defined in: [packages/lib/sdk/src/mercury/DIDCommDIDResolver.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/mercury/DIDCommDIDResolver.ts#L22)

Resolve a DID string to a DIDComm-compatible DID Document.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `did` | `string` | the DID to resolve |

#### Returns

`Promise`\<`DIDDoc` \| `null`\>

a DIDComm `DIDDoc`, or `null` if resolution fails

#### Implementation of

`DIDComm.DIDResolver.resolve`
