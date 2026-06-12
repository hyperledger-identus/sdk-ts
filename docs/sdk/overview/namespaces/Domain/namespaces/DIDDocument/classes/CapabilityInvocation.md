[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [DIDDocument](../README.md) / CapabilityInvocation

# Class: CapabilityInvocation

Defined in: packages/shared/domain/build/index.d.ts:992

## Extends

- `VerificationMethodGroup`

## Constructors

### Constructor

> **new CapabilityInvocation**(`urls?`: `string`[], `verificationMethods?`: [`VerificationMethod`](VerificationMethod.md)[]): `CapabilityInvocation`

Defined in: packages/shared/domain/build/index.d.ts:979

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `urls?` | `string`[] |
| `verificationMethods?` | [`VerificationMethod`](VerificationMethod.md)[] |

#### Returns

`CapabilityInvocation`

#### Inherited from

`VerificationMethodGroup.constructor`

## Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-urls"></a> `urls` | `string`[] | `VerificationMethodGroup.urls` | packages/shared/domain/build/index.d.ts:977 |
| <a id="property-verificationmethods"></a> `verificationMethods` | [`VerificationMethod`](VerificationMethod.md)[] | `VerificationMethodGroup.verificationMethods` | packages/shared/domain/build/index.d.ts:978 |

## Methods

### add() {#add}

> **add**(`method`: [`VerificationMethod`](VerificationMethod.md)): `void`

Defined in: packages/shared/domain/build/index.d.ts:980

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | [`VerificationMethod`](VerificationMethod.md) |

#### Returns

`void`

#### Inherited from

`VerificationMethodGroup.add`

***

### cloneWithNewDID() {#clonewithnewdid}

> **cloneWithNewDID**(`did`: [`DID`](../../../classes/DID.md)): [`Authentication`](Authentication.md)

Defined in: packages/shared/domain/build/index.d.ts:993

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../../../classes/DID.md) |

#### Returns

[`Authentication`](Authentication.md)

#### Overrides

`VerificationMethodGroup.cloneWithNewDID`
