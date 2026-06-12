[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / VerificationMaterialAgreement

# Class: VerificationMaterialAgreement

Defined in: packages/shared/domain/build/index.d.ts:901

## Implements

- [`VerificationMaterialPeerDIDWithAgreement`](VerificationMaterialPeerDIDWithAgreement.md)

## Constructors

### Constructor

> **new VerificationMaterialAgreement**(`value`: `string`, `type`: [`VerificationMethodTypeAgreement`](VerificationMethodTypeAgreement.md), `format`: [`JWK`](../enumerations/VerificationMaterialFormatDID.md#enumeration-member-jwk)): `VerificationMaterialAgreement`

Defined in: packages/shared/domain/build/index.d.ts:905

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |
| `type` | [`VerificationMethodTypeAgreement`](VerificationMethodTypeAgreement.md) |
| `format` | [`JWK`](../enumerations/VerificationMaterialFormatDID.md#enumeration-member-jwk) |

#### Returns

`VerificationMaterialAgreement`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-format"></a> `format` | `readonly` | [`JWK`](../enumerations/VerificationMaterialFormatDID.md#enumeration-member-jwk) | packages/shared/domain/build/index.d.ts:902 |
| <a id="property-type"></a> `type` | `readonly` | [`VerificationMethodTypeAgreement`](VerificationMethodTypeAgreement.md) | packages/shared/domain/build/index.d.ts:904 |
| <a id="property-value"></a> `value` | `readonly` | `string` | packages/shared/domain/build/index.d.ts:903 |

## Accessors

### agreement {#agreement}

#### Get Signature

> **get** **agreement**(): `VerificationMaterialAgreement`

Defined in: packages/shared/domain/build/index.d.ts:907

##### Returns

`VerificationMaterialAgreement`

#### Implementation of

[`VerificationMaterialPeerDIDWithAgreement`](VerificationMaterialPeerDIDWithAgreement.md).[`agreement`](VerificationMaterialPeerDIDWithAgreement.md#property-agreement)

***

### keyType {#keytype}

#### Get Signature

> **get** **keyType**(): [`VerificationMethodTypeDID`](../interfaces/VerificationMethodTypeDID.md)

Defined in: packages/shared/domain/build/index.d.ts:906

##### Returns

[`VerificationMethodTypeDID`](../interfaces/VerificationMethodTypeDID.md)

#### Implementation of

[`VerificationMaterialPeerDIDWithAgreement`](VerificationMaterialPeerDIDWithAgreement.md).[`keyType`](VerificationMaterialPeerDIDWithAgreement.md#property-keytype)
