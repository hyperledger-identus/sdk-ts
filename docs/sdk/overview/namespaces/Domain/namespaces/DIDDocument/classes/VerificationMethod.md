[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [DIDDocument](../README.md) / VerificationMethod

# Class: VerificationMethod

Defined in: packages/shared/domain/build/index.d.ts:934

## Constructors

### Constructor

> **new VerificationMethod**(`id`: `string`, `controller`: `string`, `type`: [`Type`](../namespaces/VerificationMethod/type-aliases/Type.md), `publicKeyJwk?`: [`JWK`](../../../type-aliases/JWK.md), `publicKeyMultibase?`: `string`): `VerificationMethod`

Defined in: packages/shared/domain/build/index.d.ts:940

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

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="property-controller"></a> `controller` | `string` | packages/shared/domain/build/index.d.ts:936 |
| <a id="property-id"></a> `id` | `string` | packages/shared/domain/build/index.d.ts:935 |
| <a id="property-publickeyjwk"></a> `publicKeyJwk?` | [`JWK`](../../../type-aliases/JWK.md) | packages/shared/domain/build/index.d.ts:938 |
| <a id="property-publickeymultibase"></a> `publicKeyMultibase?` | `string` | packages/shared/domain/build/index.d.ts:939 |
| <a id="property-type"></a> `type` | [`Type`](../namespaces/VerificationMethod/type-aliases/Type.md) | packages/shared/domain/build/index.d.ts:937 |

## Methods

### cloneWithNewId() {#clonewithnewid}

> **cloneWithNewId**(`did`: [`DID`](../../../classes/DID.md)): `VerificationMethod`

Defined in: packages/shared/domain/build/index.d.ts:941

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../../../classes/DID.md) |

#### Returns

`VerificationMethod`
