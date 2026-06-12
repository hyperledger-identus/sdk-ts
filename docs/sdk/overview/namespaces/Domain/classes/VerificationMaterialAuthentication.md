[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / VerificationMaterialAuthentication

# Class: VerificationMaterialAuthentication

Defined in: packages/shared/domain/build/index.d.ts:909

## Implements

- [`VerificationMaterialPeerDIDWithAuthentication`](VerificationMaterialPeerDIDWithAuthentication.md)

## Constructors

### Constructor

> **new VerificationMaterialAuthentication**(`value`: `string`, `type`: [`VerificationMethodTypeAuthentication`](VerificationMethodTypeAuthentication.md), `format`: [`JWK`](../enumerations/VerificationMaterialFormatDID.md#enumeration-member-jwk)): `VerificationMaterialAuthentication`

Defined in: packages/shared/domain/build/index.d.ts:913

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `type` | [`VerificationMethodTypeAuthentication`](VerificationMethodTypeAuthentication.md) |
| `format` | [`JWK`](../enumerations/VerificationMaterialFormatDID.md#enumeration-member-jwk) |

#### Returns

`VerificationMaterialAuthentication`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-format"></a> `format` | `readonly` | [`JWK`](../enumerations/VerificationMaterialFormatDID.md#enumeration-member-jwk) | packages/shared/domain/build/index.d.ts:910 |
| <a id="property-type"></a> `type` | `readonly` | [`VerificationMethodTypeAuthentication`](VerificationMethodTypeAuthentication.md) | packages/shared/domain/build/index.d.ts:912 |
| <a id="property-value"></a> `value` | `readonly` | `string` | packages/shared/domain/build/index.d.ts:911 |

## Accessors

### authentication {#authentication}

#### Get Signature

> **get** **authentication**(): `VerificationMaterialAuthentication`

Defined in: packages/shared/domain/build/index.d.ts:915

##### Returns

`VerificationMaterialAuthentication`

#### Implementation of

[`VerificationMaterialPeerDIDWithAuthentication`](VerificationMaterialPeerDIDWithAuthentication.md).[`authentication`](VerificationMaterialPeerDIDWithAuthentication.md#property-authentication)

***

### keyType {#keytype}

#### Get Signature

> **get** **keyType**(): [`VerificationMethodTypeDID`](../interfaces/VerificationMethodTypeDID.md)

Defined in: packages/shared/domain/build/index.d.ts:914

##### Returns

[`VerificationMethodTypeDID`](../interfaces/VerificationMethodTypeDID.md)

#### Implementation of

[`VerificationMaterialPeerDIDWithAuthentication`](VerificationMaterialPeerDIDWithAuthentication.md).[`keyType`](VerificationMaterialPeerDIDWithAuthentication.md#property-keytype)
