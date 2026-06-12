[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Castor

# Interface: Castor

Defined in: packages/shared/domain/build/index.d.ts:2404

Building block for creating, resolving, and managing Decentralized
Identifiers across multiple DID methods.

The concrete SDK implementation (@hyperledger/identus-sdk!Castor)
narrows these signatures by inferring the payload and metadata types
directly from the DID method instances registered on that Castor, so
`createDID`, `publishDID`, etc. are fully typed per method.

## Methods

### createDID() {#createdid}

> **createDID**(`method`: `string`, `opts`: `unknown`): `Promise`\<[`DID`](../classes/DID.md)\>

Defined in: packages/shared/domain/build/index.d.ts:2405

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `string` |
| `opts` | `unknown` |

#### Returns

`Promise`\<[`DID`](../classes/DID.md)\>

***

### deactivateDID() {#deactivatedid}

> **deactivateDID**(`method`: `string`, `opts`: `unknown`): `Promise`\<`unknown`\>

Defined in: packages/shared/domain/build/index.d.ts:2408

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `string` |
| `opts` | `unknown` |

#### Returns

`Promise`\<`unknown`\>

***

### publishDID() {#publishdid}

> **publishDID**(`method`: `string`, `opts`: `unknown`): `Promise`\<`unknown`\>

Defined in: packages/shared/domain/build/index.d.ts:2406

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `string` |
| `opts` | `unknown` |

#### Returns

`Promise`\<`unknown`\>

***

### resolveDID() {#resolvedid}

> **resolveDID**(`did`: `string` \| [`DID`](../classes/DID.md)): `Promise`\<[`DIDDocument`](../classes/DIDDocument.md)\>

Defined in: packages/shared/domain/build/index.d.ts:2415

Resolve a DID to its DID Document.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `did` | `string` \| [`DID`](../classes/DID.md) | a [DID](../classes/DID.md) instance or DID string |

#### Returns

`Promise`\<[`DIDDocument`](../classes/DIDDocument.md)\>

the resolved [DIDDocument](../classes/DIDDocument.md)

***

### updateDID() {#updatedid}

> **updateDID**(`method`: `string`, `opts`: `unknown`): `Promise`\<`unknown`\>

Defined in: packages/shared/domain/build/index.d.ts:2407

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `string` |
| `opts` | `unknown` |

#### Returns

`Promise`\<`unknown`\>

***

### verifySignature() {#verifysignature}

> **verifySignature**(`did`: [`DID`](../classes/DID.md), `challenge`: `Uint8Array`, `signature`: `Uint8Array`): `Promise`\<`boolean`\>

Defined in: packages/shared/domain/build/index.d.ts:2424

Verify a cryptographic signature against a DID's verification methods.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `did` | [`DID`](../classes/DID.md) | the signer's DID |
| `challenge` | `Uint8Array` | the original data that was signed |
| `signature` | `Uint8Array` | the signature bytes to verify |

#### Returns

`Promise`\<`boolean`\>

`true` if any verification method on the DID validates the signature
