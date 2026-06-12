[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Credential

# Abstract Class: Credential

Defined in: packages/shared/domain/build/index.d.ts:330

Storable
define properties a Domain object must implement to be compatible with Pluto

## Extended by

- [`AnonCredsCredential`](../../../../plugins/internal/anoncreds/classes/AnonCredsCredential.md)
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
| <a id="property-claims"></a> `claims` | `abstract` | [`Claim`](../type-aliases/Claim.md)[] | - | packages/shared/domain/build/index.d.ts:336 |
| <a id="property-credentialtype"></a> `credentialType` | `abstract` | [`CredentialType`](../../../../plugins/internal/oea/enumerations/CredentialType.md) | - | packages/shared/domain/build/index.d.ts:331 |
| <a id="property-id"></a> `id` | `abstract` | `string` | - | packages/shared/domain/build/index.d.ts:333 |
| <a id="property-issuer"></a> `issuer` | `abstract` | `string` | - | packages/shared/domain/build/index.d.ts:334 |
| <a id="property-properties"></a> `properties` | `abstract` | `Map`\<`string`, `any`\> | - | packages/shared/domain/build/index.d.ts:337 |
| <a id="property-recoveryid"></a> `recoveryId` | `abstract` | `string` | - | packages/shared/domain/build/index.d.ts:332 |
| <a id="property-subject"></a> `subject` | `abstract` | `string` | - | packages/shared/domain/build/index.d.ts:335 |
| <a id="property-uuid"></a> `uuid` | `readonly` | `string` | Universally Unique Identifier. should be unique across all items. | packages/shared/domain/build/index.d.ts:338 |

## Methods

### getProperty() {#getproperty}

> **getProperty**(`name`: `string`): `any`

Defined in: packages/shared/domain/build/index.d.ts:339

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`any`

***

### isProvable() {#isprovable}

> **isProvable**(): `this is ProvableCredential`

Defined in: packages/shared/domain/build/index.d.ts:340

#### Returns

`this is ProvableCredential`

***

### isRevoked() {#isrevoked}

> **isRevoked**(): `boolean`

Defined in: packages/shared/domain/build/index.d.ts:342

#### Returns

`boolean`

***

### isStorable() {#isstorable}

> **isStorable**(): `this is StorableCredential`

Defined in: packages/shared/domain/build/index.d.ts:341

#### Returns

`this is StorableCredential`
