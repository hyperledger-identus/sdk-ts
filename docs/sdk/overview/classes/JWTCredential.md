[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / JWTCredential

# Class: JWTCredential

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L53)

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

> **new JWTCredential**(`payload`: `string`, `revoked?`: `boolean`): `JWTCredential`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:101](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L101)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | `string` |
| `revoked?` | `boolean` |

#### Returns

`JWTCredential`

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`constructor`](../namespaces/Domain/classes/Credential.md#constructor)

### Constructor

> **new JWTCredential**(`payload`: [`JWTPresentationPayload`](../interfaces/JWTPresentationPayload.md) \| [`JWTCredentialPayload`](../interfaces/JWTCredentialPayload.md), `revoked?`: `boolean`): `JWTCredential`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:102](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L102)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | [`JWTPresentationPayload`](../interfaces/JWTPresentationPayload.md) \| [`JWTCredentialPayload`](../interfaces/JWTCredentialPayload.md) |
| `revoked?` | `boolean` |

#### Returns

`JWTCredential`

#### Overrides

`Credential.constructor`

## Properties

| Property | Modifier | Type | Default value | Description | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="property-credentialtype"></a> `credentialType` | `public` | [`CredentialType`](../../plugins/internal/oea/enumerations/CredentialType.md) | `CredentialType.JWT` | - | [`Credential`](../namespaces/Domain/classes/Credential.md).[`credentialType`](../namespaces/Domain/classes/Credential.md#property-credentialtype) | - | [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:97](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L97) |
| <a id="property-properties"></a> `properties` | `public` | `Map`\<[`Claims`](../namespaces/Domain/namespaces/JWT/enumerations/Claims.md) \| [`JWT_VP_PROPS`](../enumerations/JWT_VP_PROPS.md) \| [`JWT_VC_PROPS`](../enumerations/JWT_VC_PROPS.md), `any`\> | `undefined` | - | [`Credential`](../namespaces/Domain/classes/Credential.md).[`properties`](../namespaces/Domain/classes/Credential.md#property-properties) | - | [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:99](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L99) |
| <a id="property-recoveryid"></a> `recoveryId` | `public` | `string` | `JWTVerifiableCredentialRecoveryId` | - | [`Credential`](../namespaces/Domain/classes/Credential.md).[`recoveryId`](../namespaces/Domain/classes/Credential.md#property-recoveryid) | - | [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:98](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L98) |
| <a id="property-uuid"></a> `uuid` | `readonly` | `string` | `undefined` | Universally Unique Identifier. should be unique across all items. | - | [`Storable`](../namespaces/Domain/namespaces/Pluto/interfaces/Storable.md).[`uuid`](../namespaces/Domain/namespaces/Pluto/interfaces/Storable.md#property-uuid) [`Credential`](../namespaces/Domain/classes/Credential.md).[`uuid`](../namespaces/Domain/classes/Credential.md#property-uuid) | packages/shared/domain/build/index.d.ts:338 |

## Accessors

### audience {#audience}

#### Get Signature

> **get** **audience**(): `any`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:389](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L389)

##### Returns

`any`

***

### claims {#claims}

#### Get Signature

> **get** **claims**(): `Record`\<`string`, `any`\>[]

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:350](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L350)

##### Returns

`Record`\<`string`, `any`\>[]

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`claims`](../namespaces/Domain/classes/Credential.md#property-claims)

***

### context {#context}

#### Get Signature

> **get** **context**(): \[`"https://www.w3.org/2018/credentials/v1"`\] \| \[`"https://www.w3.org/2018/presentations/v1"`\] \| `undefined`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:359](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L359)

##### Returns

\[`"https://www.w3.org/2018/credentials/v1"`\] \| \[`"https://www.w3.org/2018/presentations/v1"`\] \| `undefined`

***

### credentialSchema {#credentialschema}

#### Get Signature

> **get** **credentialSchema**(): \{ `id`: `string`; `type`: `string`; \} \| `undefined`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:363](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L363)

##### Returns

\{ `id`: `string`; `type`: `string`; \} \| `undefined`

***

### credentialStatus {#credentialstatus}

#### Get Signature

> **get** **credentialStatus**(): \{ `id`: `string`; `statusListCredential`: `string`; `statusListIndex`: `number`; `statusPurpose`: `"Revocation"` \| `"Suspension"`; `type`: `string`; \} \| `undefined`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:367](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L367)

##### Returns

\{ `id`: `string`; `statusListCredential`: `string`; `statusListIndex`: `number`; `statusPurpose`: `"Revocation"` \| `"Suspension"`; `type`: `string`; \} \| `undefined`

***

### credentialSubject {#credentialsubject}

#### Get Signature

> **get** **credentialSubject**(): `Record`\<`string`, `any`\> \| `undefined`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:371](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L371)

##### Returns

`Record`\<`string`, `any`\> \| `undefined`

***

### evidence {#evidence}

#### Get Signature

> **get** **evidence**(): \{ `id`: `string`; `type`: `string`; \} \| `undefined`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:375](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L375)

##### Returns

\{ `id`: `string`; `type`: `string`; \} \| `undefined`

***

### expirationDate {#expirationdate}

#### Get Signature

> **get** **expirationDate**(): `string` \| `undefined`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:379](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L379)

##### Returns

`string` \| `undefined`

***

### id {#id}

#### Get Signature

> **get** **id**(): `any`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:330](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L330)

##### Returns

`any`

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`id`](../namespaces/Domain/classes/Credential.md#property-id)

***

### isCredential {#iscredential}

#### Get Signature

> **get** **isCredential**(): `boolean`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:326](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L326)

##### Returns

`boolean`

***

### issuanceDate {#issuancedate}

#### Get Signature

> **get** **issuanceDate**(): `string`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:384](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L384)

##### Returns

`string`

***

### issuer {#issuer}

#### Get Signature

> **get** **issuer**(): `string`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:394](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L394)

##### Returns

`string`

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`issuer`](../namespaces/Domain/classes/Credential.md#property-issuer)

***

### refreshService {#refreshservice}

#### Get Signature

> **get** **refreshService**(): \{ `id`: `string`; `type`: `string`; \} \| `undefined`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:399](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L399)

##### Returns

\{ `id`: `string`; `type`: `string`; \} \| `undefined`

***

### revoked {#revoked}

#### Get Signature

> **get** **revoked**(): `boolean` \| `undefined`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:411](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L411)

##### Returns

`boolean` \| `undefined`

***

### subject {#subject}

#### Get Signature

> **get** **subject**(): `string`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:403](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L403)

##### Returns

`string`

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`subject`](../namespaces/Domain/classes/Credential.md#property-subject)

***

### termsOfUse {#termsofuse}

#### Get Signature

> **get** **termsOfUse**(): \{ `id`: `string`; `type`: `string`; \} \| `undefined`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:419](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L419)

##### Returns

\{ `id`: `string`; `type`: `string`; \} \| `undefined`

***

### type {#type}

#### Get Signature

> **get** **type**(): \[`"VerifiableCredential"`\] \| \[`"VerifiablePresentation"`\] \| `undefined`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:423](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L423)

##### Returns

\[`"VerifiableCredential"`\] \| \[`"VerifiablePresentation"`\] \| `undefined`

***

### vc {#vc}

#### Get Signature

> **get** **vc**(): [`W3CVerifiableCredential`](../../plugins/internal/oea/type-aliases/W3CVerifiableCredential.md) \| `undefined`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:334](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L334)

##### Returns

[`W3CVerifiableCredential`](../../plugins/internal/oea/type-aliases/W3CVerifiableCredential.md) \| `undefined`

***

### vp {#vp}

#### Get Signature

> **get** **vp**(): [`W3CVerifiablePresentation`](../../plugins/internal/oea/type-aliases/W3CVerifiablePresentation.md) \| `undefined`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:342](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L342)

##### Returns

[`W3CVerifiablePresentation`](../../plugins/internal/oea/type-aliases/W3CVerifiablePresentation.md) \| `undefined`

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

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:427](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L427)

#### Returns

[`W3CVerifiablePresentation`](../../plugins/internal/oea/type-aliases/W3CVerifiablePresentation.md)

#### Implementation of

[`ProvableCredential`](../namespaces/Domain/interfaces/ProvableCredential.md).[`presentation`](../namespaces/Domain/interfaces/ProvableCredential.md#presentation)

***

### toStorable() {#tostorable}

> **toStorable**(): \{ `availableClaims`: `string`[]; `credentialData`: `string`; `id`: `any`; `issuer`: `string`; `recoveryId`: `string`; `revoked`: `boolean` \| `undefined`; `subject`: `any`; `validUntil`: `any`; \}

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:458](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L458)

#### Returns

\{ `availableClaims`: `string`[]; `credentialData`: `string`; `id`: `any`; `issuer`: `string`; `recoveryId`: `string`; `revoked`: `boolean` \| `undefined`; `subject`: `any`; `validUntil`: `any`; \}

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `availableClaims` | `string`[] | `claims` | [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:469](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L469) |
| `credentialData` | `string` | - | [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:465](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L465) |
| `id` | `any` | - | [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:463](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L463) |
| `issuer` | `string` | - | [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:466](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L466) |
| `recoveryId` | `string` | - | [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:464](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L464) |
| `revoked` | `boolean` \| `undefined` | - | [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:470](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L470) |
| `subject` | `any` | - | [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:467](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L467) |
| `validUntil` | `any` | - | [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:468](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L468) |

#### Implementation of

[`StorableCredential`](../namespaces/Domain/interfaces/StorableCredential.md).[`toStorable`](../namespaces/Domain/interfaces/StorableCredential.md#tostorable)

***

### verifiableCredential() {#verifiablecredential}

> **verifiableCredential**(): [`W3CVerifiableCredential`](../../plugins/internal/oea/type-aliases/W3CVerifiableCredential.md)

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:444](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L444)

#### Returns

[`W3CVerifiableCredential`](../../plugins/internal/oea/type-aliases/W3CVerifiableCredential.md)

#### Implementation of

[`ProvableCredential`](../namespaces/Domain/interfaces/ProvableCredential.md).[`verifiableCredential`](../namespaces/Domain/interfaces/ProvableCredential.md#verifiablecredential)

***

### fromJWS() {#fromjws}

> `static` **fromJWS**(`jws`: `string`, `revoked?`: `boolean`): `JWTCredential`

Defined in: [packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts:245](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/models/JWTVerifiableCredential.ts#L245)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jws` | `string` |
| `revoked?` | `boolean` |

#### Returns

`JWTCredential`
