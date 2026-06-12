[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/anoncreds](../README.md) / AnonCredsCredential

# Class: AnonCredsCredential

Defined in: [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L9)

Storable
define properties a Domain object must implement to be compatible with Pluto

## Extends

- [`Credential`](../../../../overview/namespaces/Domain/classes/Credential.md)

## Implements

- [`StorableCredential`](../../../../overview/namespaces/Domain/interfaces/StorableCredential.md)

## Constructors

### Constructor

> **new AnonCredsCredential**(`credential`: `CredentialType`, `isRevoked?`: `boolean`): `AnonCredsCredential`

Defined in: [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L16)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `credential` | `CredentialType` | `undefined` |
| `isRevoked` | `boolean` | `false` |

#### Returns

`AnonCredsCredential`

#### Overrides

[`Credential`](../../../../overview/namespaces/Domain/classes/Credential.md).[`constructor`](../../../../overview/namespaces/Domain/classes/Credential.md#constructor)

## Properties

| Property | Modifier | Type | Default value | Description | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="property-credentialtype"></a> `credentialType` | `public` | [`CredentialType`](../../oea/enumerations/CredentialType.md) | `CredentialType.AnonCreds` | - | [`Credential`](../../../../overview/namespaces/Domain/classes/Credential.md).[`credentialType`](../../../../overview/namespaces/Domain/classes/Credential.md#property-credentialtype) | - | [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L12) |
| <a id="property-properties"></a> `properties` | `public` | `Map`\<[`AnonCredsCredentialProperties`](../enumerations/AnonCredsCredentialProperties.md), `any`\> | `undefined` | - | [`Credential`](../../../../overview/namespaces/Domain/classes/Credential.md).[`properties`](../../../../overview/namespaces/Domain/classes/Credential.md#property-properties) | - | [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L14) |
| <a id="property-recoveryid"></a> `recoveryId` | `public` | `string` | `AnonCredsRecoveryId` | - | [`Credential`](../../../../overview/namespaces/Domain/classes/Credential.md).[`recoveryId`](../../../../overview/namespaces/Domain/classes/Credential.md#property-recoveryid) | - | [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L13) |
| <a id="property-uuid"></a> `uuid` | `readonly` | `string` | `undefined` | Universally Unique Identifier. should be unique across all items. | - | [`Credential`](../../../../overview/namespaces/Domain/classes/Credential.md).[`uuid`](../../../../overview/namespaces/Domain/classes/Credential.md#property-uuid) | packages/shared/domain/build/index.d.ts:338 |

## Accessors

### claims {#claims}

#### Get Signature

> **get** **claims**(): \{\[`key`: `string`\]: `any`; \}[]

Defined in: [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:50](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L50)

##### Returns

\{\[`key`: `string`\]: `any`; \}[]

#### Overrides

[`Credential`](../../../../overview/namespaces/Domain/classes/Credential.md).[`claims`](../../../../overview/namespaces/Domain/classes/Credential.md#property-claims)

***

### credentialDefinitionId {#credentialdefinitionid}

#### Get Signature

> **get** **credentialDefinitionId**(): `string`

Defined in: [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:57](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L57)

##### Returns

`string`

***

### id {#id}

#### Get Signature

> **get** **id**(): `string`

Defined in: [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L35)

##### Returns

`string`

#### Overrides

[`Credential`](../../../../overview/namespaces/Domain/classes/Credential.md).[`id`](../../../../overview/namespaces/Domain/classes/Credential.md#property-id)

***

### issuer {#issuer}

#### Get Signature

> **get** **issuer**(): `any`

Defined in: [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:61](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L61)

##### Returns

`any`

#### Overrides

[`Credential`](../../../../overview/namespaces/Domain/classes/Credential.md).[`issuer`](../../../../overview/namespaces/Domain/classes/Credential.md#property-issuer)

***

### revoked {#revoked}

#### Get Signature

> **get** **revoked**(): `any`

Defined in: [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:73](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L73)

##### Returns

`any`

***

### schemaId {#schemaid}

#### Get Signature

> **get** **schemaId**(): `string`

Defined in: [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:65](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L65)

##### Returns

`string`

***

### subject {#subject}

#### Get Signature

> **get** **subject**(): `any`

Defined in: [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:69](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L69)

##### Returns

`any`

#### Overrides

[`Credential`](../../../../overview/namespaces/Domain/classes/Credential.md).[`subject`](../../../../overview/namespaces/Domain/classes/Credential.md#property-subject)

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

#### Inherited from

[`Credential`](../../../../overview/namespaces/Domain/classes/Credential.md).[`getProperty`](../../../../overview/namespaces/Domain/classes/Credential.md#getproperty)

***

### isProvable() {#isprovable}

> **isProvable**(): `this is ProvableCredential`

Defined in: packages/shared/domain/build/index.d.ts:340

#### Returns

`this is ProvableCredential`

#### Inherited from

[`Credential`](../../../../overview/namespaces/Domain/classes/Credential.md).[`isProvable`](../../../../overview/namespaces/Domain/classes/Credential.md#isprovable)

***

### isRevoked() {#isrevoked}

> **isRevoked**(): `boolean`

Defined in: packages/shared/domain/build/index.d.ts:342

#### Returns

`boolean`

#### Inherited from

[`Credential`](../../../../overview/namespaces/Domain/classes/Credential.md).[`isRevoked`](../../../../overview/namespaces/Domain/classes/Credential.md#isrevoked)

***

### isStorable() {#isstorable}

> **isStorable**(): `this is StorableCredential`

Defined in: packages/shared/domain/build/index.d.ts:341

#### Returns

`this is StorableCredential`

#### Inherited from

[`Credential`](../../../../overview/namespaces/Domain/classes/Credential.md).[`isStorable`](../../../../overview/namespaces/Domain/classes/Credential.md#isstorable)

***

### toJSON() {#tojson}

> **toJSON**(): `CredentialType`

Defined in: [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:91](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L91)

#### Returns

`CredentialType`

***

### toStorable() {#tostorable}

> **toStorable**(): \{ `credentialData`: `string`; `id`: `string`; `issuer`: `any`; `recoveryId`: `string`; `subject`: `any`; `validUntil`: `any`; \}

Defined in: [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:77](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L77)

#### Returns

\{ `credentialData`: `string`; `id`: `string`; `issuer`: `any`; `recoveryId`: `string`; `subject`: `any`; `validUntil`: `any`; \}

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `credentialData` | `string` | `credentialData` | [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:82](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L82) |
| `id` | `string` | - | [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:83](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L83) |
| `issuer` | `any` | - | [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:84](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L84) |
| `recoveryId` | `string` | - | [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:81](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L81) |
| `subject` | `any` | - | [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:85](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L85) |
| `validUntil` | `any` | - | [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:86](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L86) |

#### Implementation of

[`StorableCredential`](../../../../overview/namespaces/Domain/interfaces/StorableCredential.md).[`toStorable`](../../../../overview/namespaces/Domain/interfaces/StorableCredential.md#tostorable)

***

### fromJson() {#fromjson}

> `static` **fromJson**(`value`: `unknown`): `AnonCredsCredential`

Defined in: [packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts:101](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/utils/index.ts#L101)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

`AnonCredsCredential`
