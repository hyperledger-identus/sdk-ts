[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [DIDDocument](../README.md) / VerificationMethod

# Class: VerificationMethod

Defined in: [src/domain/models/DIDDocument.ts:247](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L247)

## Constructors

### Constructor

> **new VerificationMethod**(`id`: `string`, `controller`: `string`, `type`: [`Type`](../namespaces/VerificationMethod/type-aliases/Type.md), `publicKeyJwk?`: [`JWK`](../../../type-aliases/JWK.md), `publicKeyMultibase?`: `string`): `VerificationMethod`

Defined in: [src/domain/models/DIDDocument.ts:248](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L248)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `controller` | `string` |
| `type` | [`Type`](../namespaces/VerificationMethod/type-aliases/Type.md) |
| `publicKeyJwk?` | [`JWK`](../../../type-aliases/JWK.md) |
| `publicKeyMultibase?` | `string` |

#### Returns

`VerificationMethod`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="controller"></a> `controller` | `public` | `string` | [src/domain/models/DIDDocument.ts:250](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L250) |
| <a id="id"></a> `id` | `public` | `string` | [src/domain/models/DIDDocument.ts:249](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L249) |
| <a id="publickeyjwk"></a> `publicKeyJwk?` | `public` | [`JWK`](../../../type-aliases/JWK.md) | [src/domain/models/DIDDocument.ts:252](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L252) |
| <a id="publickeymultibase"></a> `publicKeyMultibase?` | `public` | `string` | [src/domain/models/DIDDocument.ts:253](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L253) |
| <a id="type"></a> `type` | `public` | [`Type`](../namespaces/VerificationMethod/type-aliases/Type.md) | [src/domain/models/DIDDocument.ts:251](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L251) |

## Methods

### cloneWithNewId() {#clonewithnewid}

> **cloneWithNewId**(`did`: [`DID`](../../../classes/DID.md)): `VerificationMethod`

Defined in: [src/domain/models/DIDDocument.ts:256](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L256)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../../../classes/DID.md) |

#### Returns

`VerificationMethod`
