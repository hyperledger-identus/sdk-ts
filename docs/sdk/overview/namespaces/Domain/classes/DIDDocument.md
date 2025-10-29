[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / DIDDocument

# Class: DIDDocument

Defined in: [src/domain/models/DIDDocument.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L5)

## Constructors

### Constructor

> **new DIDDocument**(`id`: [`DID`](DID.md), `coreProperties`: [`CoreProperty`](../namespaces/DIDDocument/type-aliases/CoreProperty.md)[]): `DIDDocument`

Defined in: [src/domain/models/DIDDocument.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L6)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | [`DID`](DID.md) |
| `coreProperties` | [`CoreProperty`](../namespaces/DIDDocument/type-aliases/CoreProperty.md)[] |

#### Returns

`DIDDocument`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="coreproperties"></a> `coreProperties` | `public` | [`CoreProperty`](../namespaces/DIDDocument/type-aliases/CoreProperty.md)[] | [src/domain/models/DIDDocument.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L8) |
| <a id="id"></a> `id` | `public` | [`DID`](DID.md) | [src/domain/models/DIDDocument.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L7) |

## Accessors

### assertionMethod {#assertionmethod}

#### Get Signature

> **get** **assertionMethod**(): [`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

Defined in: [src/domain/models/DIDDocument.ts:39](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L39)

##### Returns

[`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

***

### authentication {#authentication}

#### Get Signature

> **get** **authentication**(): [`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

Defined in: [src/domain/models/DIDDocument.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L17)

##### Returns

[`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

***

### capabilityDelegation {#capabilitydelegation}

#### Get Signature

> **get** **capabilityDelegation**(): [`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

Defined in: [src/domain/models/DIDDocument.ts:32](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L32)

##### Returns

[`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

***

### capabilityInvocation {#capabilityinvocation}

#### Get Signature

> **get** **capabilityInvocation**(): [`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

Defined in: [src/domain/models/DIDDocument.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L25)

##### Returns

[`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

***

### keyAgreement {#keyagreement}

#### Get Signature

> **get** **keyAgreement**(): [`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

Defined in: [src/domain/models/DIDDocument.ts:46](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L46)

##### Returns

[`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

***

### services {#services}

#### Get Signature

> **get** **services**(): [`Service`](../namespaces/DIDDocument/classes/Service.md)[]

Defined in: [src/domain/models/DIDDocument.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L11)

##### Returns

[`Service`](../namespaces/DIDDocument/classes/Service.md)[]

***

### verificationMethods {#verificationmethods}

#### Get Signature

> **get** **verificationMethods**(): [`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

Defined in: [src/domain/models/DIDDocument.ts:54](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L54)

##### Returns

[`VerificationMethod`](../namespaces/DIDDocument/classes/VerificationMethod.md)[]

## Methods

### cloneWithNewDID() {#clonewithnewdid}

> `static` **cloneWithNewDID**(`doc`: `DIDDocument`, `newDid`: [`DID`](DID.md)): `DIDDocument`

Defined in: [src/domain/models/DIDDocument.ts:190](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L190)

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

Defined in: [src/domain/models/DIDDocument.ts:62](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/DIDDocument.ts#L62)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `didDocumentJson` | `any` |

#### Returns

`DIDDocument`
