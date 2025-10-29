[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [DIDDocument](../README.md) / CapabilityDelegation

# Class: CapabilityDelegation

Defined in: [src/domain/models/DIDDocument.ts:382](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L382)

## Extends

- `VerificationMethodGroup`

## Constructors

### Constructor

> **new CapabilityDelegation**(`urls`: `string`[], `verificationMethods`: [`VerificationMethod`](VerificationMethod.md)[]): `CapabilityDelegation`

Defined in: [src/domain/models/DIDDocument.ts:339](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L339)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `urls` | `string`[] | `[]` |
| `verificationMethods` | [`VerificationMethod`](VerificationMethod.md)[] | `[]` |

#### Returns

`CapabilityDelegation`

#### Inherited from

`VerificationMethodGroup.constructor`

## Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="urls"></a> `urls` | `public` | `string`[] | `[]` | `VerificationMethodGroup.urls` | [src/domain/models/DIDDocument.ts:340](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L340) |
| <a id="verificationmethods"></a> `verificationMethods` | `public` | [`VerificationMethod`](VerificationMethod.md)[] | `[]` | `VerificationMethodGroup.verificationMethods` | [src/domain/models/DIDDocument.ts:341](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L341) |

## Methods

### add() {#add}

> **add**(`method`: [`VerificationMethod`](VerificationMethod.md)): `void`

Defined in: [src/domain/models/DIDDocument.ts:344](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L344)

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

Defined in: [src/domain/models/DIDDocument.ts:383](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L383)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../../../classes/DID.md) |

#### Returns

[`Authentication`](Authentication.md)

#### Overrides

`VerificationMethodGroup.cloneWithNewDID`
