[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / AnonCredsCredential

# Class: AnonCredsCredential

Defined in: [src/pollux/models/AnonCredsVerifiableCredential.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L23)

Storable
define properties a Domain object must implement to be compatible with Pluto

## Extends

- [`Credential`](../namespaces/Domain/classes/Credential.md)

## Implements

- [`StorableCredential`](../namespaces/Domain/interfaces/StorableCredential.md)

## Constructors

### Constructor

> **new AnonCredsCredential**(`credential`: `CredentialType`, `isRevoked`: `boolean`): `AnonCredsCredential`

Defined in: [src/pollux/models/AnonCredsVerifiableCredential.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L30)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `credential` | `CredentialType` | `undefined` |
| `isRevoked` | `boolean` | `false` |

#### Returns

`AnonCredsCredential`

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`constructor`](../namespaces/Domain/classes/Credential.md#constructor)

## Properties

| Property | Modifier | Type | Default value | Description | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="credentialtype"></a> `credentialType` | `public` | [`CredentialType`](../namespaces/Domain/enumerations/CredentialType.md) | `CredentialType.AnonCreds` | - | [`Credential`](../namespaces/Domain/classes/Credential.md).[`credentialType`](../namespaces/Domain/classes/Credential.md#credentialtype) | - | [src/pollux/models/AnonCredsVerifiableCredential.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L26) |
| <a id="properties"></a> `properties` | `public` | `Map`\<[`AnonCredsCredentialProperties`](../enumerations/AnonCredsCredentialProperties.md), `any`\> | `undefined` | - | [`Credential`](../namespaces/Domain/classes/Credential.md).[`properties`](../namespaces/Domain/classes/Credential.md#properties) | - | [src/pollux/models/AnonCredsVerifiableCredential.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L28) |
| <a id="recoveryid"></a> `recoveryId` | `public` | `string` | `AnonCredsRecoveryId` | - | [`Credential`](../namespaces/Domain/classes/Credential.md).[`recoveryId`](../namespaces/Domain/classes/Credential.md#recoveryid) | - | [src/pollux/models/AnonCredsVerifiableCredential.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L27) |
| <a id="uuid"></a> `uuid` | `readonly` | `string` | `undefined` | Universally Unique Identifier. should be unique across all items. | - | [`Credential`](../namespaces/Domain/classes/Credential.md).[`uuid`](../namespaces/Domain/classes/Credential.md#uuid) | [src/domain/models/Credential.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L15) |

## Accessors

### claims {#claims}

#### Get Signature

> **get** **claims**(): \{\[`key`: `string`\]: `any`; \}[]

Defined in: [src/pollux/models/AnonCredsVerifiableCredential.ts:64](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L64)

##### Returns

\{\[`key`: `string`\]: `any`; \}[]

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`claims`](../namespaces/Domain/classes/Credential.md#claims)

***

### credentialDefinitionId {#credentialdefinitionid}

#### Get Signature

> **get** **credentialDefinitionId**(): `string`

Defined in: [src/pollux/models/AnonCredsVerifiableCredential.ts:71](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L71)

##### Returns

`string`

***

### id {#id}

#### Get Signature

> **get** **id**(): `string`

Defined in: [src/pollux/models/AnonCredsVerifiableCredential.ts:49](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L49)

##### Returns

`string`

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`id`](../namespaces/Domain/classes/Credential.md#id)

***

### issuer {#issuer}

#### Get Signature

> **get** **issuer**(): `any`

Defined in: [src/pollux/models/AnonCredsVerifiableCredential.ts:75](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L75)

##### Returns

`any`

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`issuer`](../namespaces/Domain/classes/Credential.md#issuer)

***

### revoked {#revoked}

#### Get Signature

> **get** **revoked**(): `any`

Defined in: [src/pollux/models/AnonCredsVerifiableCredential.ts:87](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L87)

##### Returns

`any`

***

### schemaId {#schemaid}

#### Get Signature

> **get** **schemaId**(): `string`

Defined in: [src/pollux/models/AnonCredsVerifiableCredential.ts:79](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L79)

##### Returns

`string`

***

### subject {#subject}

#### Get Signature

> **get** **subject**(): `any`

Defined in: [src/pollux/models/AnonCredsVerifiableCredential.ts:83](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L83)

##### Returns

`any`

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`subject`](../namespaces/Domain/classes/Credential.md#subject)

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

#### Inherited from

[`Credential`](../namespaces/Domain/classes/Credential.md).[`getProperty`](../namespaces/Domain/classes/Credential.md#getproperty)

***

### isProvable() {#isprovable}

> **isProvable**(): `this is ProvableCredential`

Defined in: [src/domain/models/Credential.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L21)

#### Returns

`this is ProvableCredential`

#### Inherited from

[`Credential`](../namespaces/Domain/classes/Credential.md).[`isProvable`](../namespaces/Domain/classes/Credential.md#isprovable)

***

### isRevoked() {#isrevoked}

> **isRevoked**(): `boolean`

Defined in: [src/domain/models/Credential.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L29)

#### Returns

`boolean`

#### Inherited from

[`Credential`](../namespaces/Domain/classes/Credential.md).[`isRevoked`](../namespaces/Domain/classes/Credential.md#isrevoked)

***

### isStorable() {#isstorable}

> **isStorable**(): `this is StorableCredential`

Defined in: [src/domain/models/Credential.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L25)

#### Returns

`this is StorableCredential`

#### Inherited from

[`Credential`](../namespaces/Domain/classes/Credential.md).[`isStorable`](../namespaces/Domain/classes/Credential.md#isstorable)

***

### toJSON() {#tojson}

> **toJSON**(): `CredentialType`

Defined in: [src/pollux/models/AnonCredsVerifiableCredential.ts:105](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L105)

#### Returns

`CredentialType`

***

### toStorable() {#tostorable}

> **toStorable**(): \{ `credentialData`: `string`; `id`: `string`; `issuer`: `any`; `recoveryId`: `string`; `subject`: `any`; `validUntil`: `any`; \}

Defined in: [src/pollux/models/AnonCredsVerifiableCredential.ts:91](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L91)

#### Returns

\{ `credentialData`: `string`; `id`: `string`; `issuer`: `any`; `recoveryId`: `string`; `subject`: `any`; `validUntil`: `any`; \}

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `credentialData` | `string` | `credentialData` | [src/pollux/models/AnonCredsVerifiableCredential.ts:96](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L96) |
| `id` | `string` | - | [src/pollux/models/AnonCredsVerifiableCredential.ts:97](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L97) |
| `issuer` | `any` | - | [src/pollux/models/AnonCredsVerifiableCredential.ts:98](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L98) |
| `recoveryId` | `string` | - | [src/pollux/models/AnonCredsVerifiableCredential.ts:95](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L95) |
| `subject` | `any` | - | [src/pollux/models/AnonCredsVerifiableCredential.ts:99](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L99) |
| `validUntil` | `any` | - | [src/pollux/models/AnonCredsVerifiableCredential.ts:100](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L100) |

#### Implementation of

[`StorableCredential`](../namespaces/Domain/interfaces/StorableCredential.md).[`toStorable`](../namespaces/Domain/interfaces/StorableCredential.md#tostorable)

***

### fromJson() {#fromjson}

> `static` **fromJson**(`value`: `unknown`): `AnonCredsCredential`

Defined in: [src/pollux/models/AnonCredsVerifiableCredential.ts:115](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/AnonCredsVerifiableCredential.ts#L115)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

`AnonCredsCredential`
