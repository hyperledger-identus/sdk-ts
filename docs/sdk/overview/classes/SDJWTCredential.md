[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / SDJWTCredential

# Class: SDJWTCredential

Defined in: [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L29)

Storable
define properties a Domain object must implement to be compatible with Pluto

## Extends

- [`Credential`](../namespaces/Domain/classes/Credential.md)

## Implements

- [`ProvableCredential`](../namespaces/Domain/interfaces/ProvableCredential.md)
- [`StorableCredential`](../namespaces/Domain/interfaces/StorableCredential.md)
- [`Storable`](../namespaces/Domain/namespaces/Pluto/interfaces/Storable.md)

## Constructors

### Constructor

> **new SDJWTCredential**(`object`: `SDJwt`, `claims`: `Record`\<`string`, `any`\>[], `revoked?`: `boolean`): `SDJWTCredential`

Defined in: [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:51](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L51)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `SDJwt` |
| `claims` | `Record`\<`string`, `any`\>[] |
| `revoked?` | `boolean` |

#### Returns

`SDJWTCredential`

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`constructor`](../namespaces/Domain/classes/Credential.md#constructor)

## Properties

| Property | Modifier | Type | Default value | Description | Overrides | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="property-claims"></a> `claims` | `public` | `Record`\<`string`, `any`\>[] | `[]` | - | [`Credential`](../namespaces/Domain/classes/Credential.md).[`claims`](../namespaces/Domain/classes/Credential.md#property-claims) | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:48](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L48) |
| <a id="property-core"></a> `core` | `public` | `SDJwt` | `undefined` | - | - | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L49) |
| <a id="property-credentialtype"></a> `credentialType` | `public` | [`CredentialType`](../../plugins/internal/oea/enumerations/CredentialType.md) | `CredentialType.SDJWT` | - | [`Credential`](../namespaces/Domain/classes/Credential.md).[`credentialType`](../namespaces/Domain/classes/Credential.md#property-credentialtype) | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L30) |
| <a id="property-properties"></a> `properties` | `public` | `Map`\<[`Claims`](../namespaces/Domain/namespaces/JWT/enumerations/Claims.md) \| [`SDJWT_VP_PROPS`](../enumerations/SDJWT_VP_PROPS.md), `any`\> | `undefined` | - | [`Credential`](../namespaces/Domain/classes/Credential.md).[`properties`](../namespaces/Domain/classes/Credential.md#property-properties) | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:47](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L47) |
| <a id="property-recoveryid"></a> `recoveryId` | `public` | `string` | `SDJWTVerifiableCredentialRecoveryId` | - | [`Credential`](../namespaces/Domain/classes/Credential.md).[`recoveryId`](../namespaces/Domain/classes/Credential.md#property-recoveryid) | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L31) |
| <a id="property-uuid"></a> `uuid` | `public` | `string` | `undefined` | Universally Unique Identifier. should be unique across all items. | [`Storable`](../namespaces/Domain/namespaces/Pluto/interfaces/Storable.md).[`uuid`](../namespaces/Domain/namespaces/Pluto/interfaces/Storable.md#property-uuid) [`Credential`](../namespaces/Domain/classes/Credential.md).[`uuid`](../namespaces/Domain/classes/Credential.md#property-uuid) | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L46) |

## Accessors

### id {#id}

#### Get Signature

> **get** **id**(): `any`

Defined in: [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L33)

##### Returns

`any`

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`id`](../namespaces/Domain/classes/Credential.md#property-id)

***

### issuer {#issuer}

#### Get Signature

> **get** **issuer**(): `any`

Defined in: [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L37)

##### Returns

`any`

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`issuer`](../namespaces/Domain/classes/Credential.md#property-issuer)

***

### revoked {#revoked}

#### Get Signature

> **get** **revoked**(): `boolean` \| `undefined`

Defined in: [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:149](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L149)

##### Returns

`boolean` \| `undefined`

***

### subject {#subject}

#### Get Signature

> **get** **subject**(): `any`

Defined in: [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L41)

##### Returns

`any`

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`subject`](../namespaces/Domain/classes/Credential.md#property-subject)

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

[`Credential`](../namespaces/Domain/classes/Credential.md).[`getProperty`](../namespaces/Domain/classes/Credential.md#getproperty)

***

### isProvable() {#isprovable}

> **isProvable**(): `this is ProvableCredential`

Defined in: packages/shared/domain/build/index.d.ts:340

#### Returns

`this is ProvableCredential`

#### Inherited from

[`Credential`](../namespaces/Domain/classes/Credential.md).[`isProvable`](../namespaces/Domain/classes/Credential.md#isprovable)

***

### isRevoked() {#isrevoked}

> **isRevoked**(): `boolean`

Defined in: packages/shared/domain/build/index.d.ts:342

#### Returns

`boolean`

#### Inherited from

[`Credential`](../namespaces/Domain/classes/Credential.md).[`isRevoked`](../namespaces/Domain/classes/Credential.md#isrevoked)

***

### isStorable() {#isstorable}

> **isStorable**(): `this is StorableCredential`

Defined in: packages/shared/domain/build/index.d.ts:341

#### Returns

`this is StorableCredential`

#### Inherited from

[`Credential`](../namespaces/Domain/classes/Credential.md).[`isStorable`](../namespaces/Domain/classes/Credential.md#isstorable)

***

### presentation() {#presentation}

> **presentation**(): [`W3CVerifiablePresentation`](../../plugins/internal/oea/type-aliases/W3CVerifiablePresentation.md)

Defined in: [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:135](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L135)

#### Returns

[`W3CVerifiablePresentation`](../../plugins/internal/oea/type-aliases/W3CVerifiablePresentation.md)

#### Implementation of

[`ProvableCredential`](../namespaces/Domain/interfaces/ProvableCredential.md).[`presentation`](../namespaces/Domain/interfaces/ProvableCredential.md#presentation)

***

### toStorable() {#tostorable}

> **toStorable**(): \{ `availableClaims?`: `string`[]; `credentialCreated?`: `string`; `credentialData`: `string`; `credentialSchema?`: `string`; `credentialUpdated?`: `string`; `id`: `string`; `issuer?`: `string`; `recoveryId`: `string`; `revoked?`: `boolean`; `subject?`: `string`; `validUntil?`: `number`; \}

Defined in: [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:153](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L153)

#### Returns

\{ `availableClaims?`: `string`[]; `credentialCreated?`: `string`; `credentialData`: `string`; `credentialSchema?`: `string`; `credentialUpdated?`: `string`; `id`: `string`; `issuer?`: `string`; `recoveryId`: `string`; `revoked?`: `boolean`; `subject?`: `string`; `validUntil?`: `number`; \}

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `availableClaims?` | `string`[] | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:153](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L153) |
| `credentialCreated?` | `string` | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:153](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L153) |
| `credentialData` | `string` | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:153](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L153) |
| `credentialSchema?` | `string` | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:153](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L153) |
| `credentialUpdated?` | `string` | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:153](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L153) |
| `id` | `string` | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:153](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L153) |
| `issuer?` | `string` | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:153](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L153) |
| `recoveryId` | `string` | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:153](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L153) |
| `revoked?` | `boolean` | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:153](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L153) |
| `subject?` | `string` | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:153](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L153) |
| `validUntil?` | `number` | [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:153](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L153) |

#### Implementation of

[`StorableCredential`](../namespaces/Domain/interfaces/StorableCredential.md).[`toStorable`](../namespaces/Domain/interfaces/StorableCredential.md#tostorable)

***

### verifiableCredential() {#verifiablecredential}

> **verifiableCredential**(): `unknown`

Defined in: [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:131](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L131)

#### Returns

`unknown`

#### Implementation of

[`ProvableCredential`](../namespaces/Domain/interfaces/ProvableCredential.md).[`verifiableCredential`](../namespaces/Domain/interfaces/ProvableCredential.md#verifiablecredential)

***

### fromJWS() {#fromjws}

> `static` **fromJWS**\<`E`\>(`jws`: `string`, `revoked?`: `boolean`): `SDJWTCredential`

Defined in: [packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts:169](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/SDJWTVerifiableCredential.ts#L169)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `E` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `jws` | `string` | `undefined` |
| `revoked` | `boolean` | `false` |

#### Returns

`SDJWTCredential`
