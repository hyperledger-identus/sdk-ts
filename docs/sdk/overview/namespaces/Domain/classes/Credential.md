[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Credential

# Abstract Class: Credential

Defined in: [src/domain/models/Credential.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L6)

Storable
define properties a Domain object must implement to be compatible with Pluto

## Extended by

- [`AnonCredsCredential`](../../../classes/AnonCredsCredential.md)
- [`JWTCredential`](../../../classes/JWTCredential.md)
- [`SDJWTCredential`](../../../classes/SDJWTCredential.md)

## Implements

- [`Storable`](../namespaces/Pluto/interfaces/Storable.md)

## Constructors

### Constructor

> **new Credential**(): `Credential`

#### Returns

`Credential`

## Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="claims"></a> `claims` | `abstract` | [`Claim`](../type-aliases/Claim.md)[] | - | [src/domain/models/Credential.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L12) |
| <a id="credentialtype"></a> `credentialType` | `abstract` | [`CredentialType`](../enumerations/CredentialType.md) | - | [src/domain/models/Credential.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L7) |
| <a id="id"></a> `id` | `abstract` | `string` | - | [src/domain/models/Credential.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L9) |
| <a id="issuer"></a> `issuer` | `abstract` | `string` | - | [src/domain/models/Credential.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L10) |
| <a id="properties"></a> `properties` | `abstract` | `Map`\<`string`, `any`\> | - | [src/domain/models/Credential.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L13) |
| <a id="recoveryid"></a> `recoveryId` | `abstract` | `string` | - | [src/domain/models/Credential.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L8) |
| <a id="subject"></a> `subject` | `abstract` | `string` | - | [src/domain/models/Credential.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L11) |
| <a id="uuid"></a> `uuid` | `readonly` | `string` | Universally Unique Identifier. should be unique across all items. | [src/domain/models/Credential.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L15) |

## Methods

### getProperty() {#getproperty}

> **getProperty**(`name`: `string`): `any`

Defined in: [src/domain/models/Credential.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L17)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`any`

***

### isProvable() {#isprovable}

> **isProvable**(): `this is ProvableCredential`

Defined in: [src/domain/models/Credential.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L21)

#### Returns

`this is ProvableCredential`

***

### isRevoked() {#isrevoked}

> **isRevoked**(): `boolean`

Defined in: [src/domain/models/Credential.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L29)

#### Returns

`boolean`

***

### isStorable() {#isstorable}

> **isStorable**(): `this is StorableCredential`

Defined in: [src/domain/models/Credential.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L25)

#### Returns

`this is StorableCredential`
