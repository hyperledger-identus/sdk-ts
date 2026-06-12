[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / DIDDocument

# Class: DIDDocument

Defined in: packages/shared/domain/build/index.d.ts:917

## Constructors

### Constructor

> **new DIDDocument**(`id`: [`DID`](DID.md), `coreProperties`: [`CoreProperty`](../namespaces/DIDDocument/type-aliases/CoreProperty.md)[]): `DIDDocument`

Defined in: packages/shared/domain/build/index.d.ts:920

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | [`DID`](DID.md) |
| `coreProperties` | [`CoreProperty`](../namespaces/DIDDocument/type-aliases/CoreProperty.md)[] |

#### Returns

`DIDDocument`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="property-coreproperties"></a> `coreProperties` | [`CoreProperty`](../namespaces/DIDDocument/type-aliases/CoreProperty.md)[] | packages/shared/domain/build/index.d.ts:919 |
| <a id="property-id"></a> `id` | [`DID`](DID.md) | packages/shared/domain/build/index.d.ts:918 |

## Accessors

### assertionMethod {#assertionmethod}

#### Get Signature

> **get** **assertionMethod**(): [`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

Defined in: packages/shared/domain/build/index.d.ts:925

##### Returns

[`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

***

### authentication {#authentication}

#### Get Signature

> **get** **authentication**(): [`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

Defined in: packages/shared/domain/build/index.d.ts:922

##### Returns

[`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

***

### capabilityDelegation {#capabilitydelegation}

#### Get Signature

> **get** **capabilityDelegation**(): [`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

Defined in: packages/shared/domain/build/index.d.ts:924

##### Returns

[`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

***

### capabilityInvocation {#capabilityinvocation}

#### Get Signature

> **get** **capabilityInvocation**(): [`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

Defined in: packages/shared/domain/build/index.d.ts:923

##### Returns

[`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

***

### keyAgreement {#keyagreement}

#### Get Signature

> **get** **keyAgreement**(): [`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

Defined in: packages/shared/domain/build/index.d.ts:926

##### Returns

[`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

***

### services {#services}

#### Get Signature

> **get** **services**(): [`Service`](../namespaces/DIDDocument/classes/Service.md)[]

Defined in: packages/shared/domain/build/index.d.ts:921

##### Returns

[`Service`](../namespaces/DIDDocument/classes/Service.md)[]

***

### verificationMethods {#verificationmethods}

#### Get Signature

> **get** **verificationMethods**(): [`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

Defined in: packages/shared/domain/build/index.d.ts:927

##### Returns

[`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

## Methods

### cloneWithNewDID() {#clonewithnewdid}

> `static` **cloneWithNewDID**(`doc`: `DIDDocument`, `newDid`: [`DID`](DID.md)): `DIDDocument`

Defined in: packages/shared/domain/build/index.d.ts:930

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `doc` | `DIDDocument` |
| `newDid` | [`DID`](DID.md) |

#### Returns

`DIDDocument`

***

### fromJSON() {#fromjson}

> `static` **fromJSON**(`didDocumentJson`: `any`): `DIDDocument`

Defined in: packages/shared/domain/build/index.d.ts:929

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `didDocumentJson` | `any` |

#### Returns

`DIDDocument`
