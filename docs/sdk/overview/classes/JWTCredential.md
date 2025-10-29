[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / JWTCredential

# Class: JWTCredential

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:51](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L51)

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

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:59](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L59)

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

> **new JWTCredential**(`payload`: [`JWTCredentialPayload`](../interfaces/JWTCredentialPayload.md) \| [`JWTPresentationPayload`](../interfaces/JWTPresentationPayload.md), `revoked?`: `boolean`): `JWTCredential`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:60](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L60)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `payload` | [`JWTCredentialPayload`](../interfaces/JWTCredentialPayload.md) \| [`JWTPresentationPayload`](../interfaces/JWTPresentationPayload.md) |
| `revoked?` | `boolean` |

#### Returns

`JWTCredential`

#### Overrides

`Credential.constructor`

## Properties

| Property | Modifier | Type | Default value | Description | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="credentialtype"></a> `credentialType` | `public` | [`CredentialType`](../namespaces/Domain/enumerations/CredentialType.md) | `CredentialType.JWT` | - | [`Credential`](../namespaces/Domain/classes/Credential.md).[`credentialType`](../namespaces/Domain/classes/Credential.md#credentialtype) | - | [src/pollux/models/JWTVerifiableCredential.ts:55](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L55) |
| <a id="properties"></a> `properties` | `public` | `Map`\<[`Claims`](../namespaces/Domain/namespaces/JWT/enumerations/Claims.md) \| [`JWT_VC_PROPS`](../enumerations/JWT_VC_PROPS.md) \| [`JWT_VP_PROPS`](../enumerations/JWT_VP_PROPS.md), `any`\> | `undefined` | - | [`Credential`](../namespaces/Domain/classes/Credential.md).[`properties`](../namespaces/Domain/classes/Credential.md#properties) | - | [src/pollux/models/JWTVerifiableCredential.ts:57](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L57) |
| <a id="recoveryid"></a> `recoveryId` | `public` | `string` | `JWTVerifiableCredentialRecoveryId` | - | [`Credential`](../namespaces/Domain/classes/Credential.md).[`recoveryId`](../namespaces/Domain/classes/Credential.md#recoveryid) | - | [src/pollux/models/JWTVerifiableCredential.ts:56](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L56) |
| <a id="uuid"></a> `uuid` | `readonly` | `string` | `undefined` | Universally Unique Identifier. should be unique across all items. | - | [`Storable`](../namespaces/Domain/namespaces/Pluto/interfaces/Storable.md).[`uuid`](../namespaces/Domain/namespaces/Pluto/interfaces/Storable.md#uuid) [`Credential`](../namespaces/Domain/classes/Credential.md).[`uuid`](../namespaces/Domain/classes/Credential.md#uuid) | [src/domain/models/Credential.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Credential.ts#L15) |

## Accessors

### audience {#audience}

#### Get Signature

> **get** **audience**(): `any`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:359](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L359)

##### Returns

`any`

***

### claims {#claims}

#### Get Signature

> **get** **claims**(): `Record`\<`string`, `any`\>[]

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:316](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L316)

##### Returns

`Record`\<`string`, `any`\>[]

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`claims`](../namespaces/Domain/classes/Credential.md#claims)

***

### context {#context}

#### Get Signature

> **get** **context**(): \[`"https://www.w3.org/2018/credentials/v1"`\] \| \[`"https://www.w3.org/2018/presentations/v1"`\] \| `undefined`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:325](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L325)

##### Returns

\[`"https://www.w3.org/2018/credentials/v1"`\] \| \[`"https://www.w3.org/2018/presentations/v1"`\] \| `undefined`

***

### credentialSchema {#credentialschema}

#### Get Signature

> **get** **credentialSchema**(): \{ `id`: `string`; `type`: `string`; \} \| `undefined`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:329](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L329)

##### Returns

\{ `id`: `string`; `type`: `string`; \} \| `undefined`

***

### credentialStatus {#credentialstatus}

#### Get Signature

> **get** **credentialStatus**(): `unknown`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:333](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L333)

##### Returns

`unknown`

***

### credentialSubject {#credentialsubject}

#### Get Signature

> **get** **credentialSubject**(): `Record`\<`string`, `any`\> \| `undefined`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:337](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L337)

##### Returns

`Record`\<`string`, `any`\> \| `undefined`

***

### evidence {#evidence}

#### Get Signature

> **get** **evidence**(): \{ `id`: `string`; `type`: `string`; \} \| `undefined`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:341](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L341)

##### Returns

\{ `id`: `string`; `type`: `string`; \} \| `undefined`

***

### expirationDate {#expirationdate}

#### Get Signature

> **get** **expirationDate**(): `string` \| `undefined`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:345](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L345)

##### Returns

`string` \| `undefined`

***

### id {#id}

#### Get Signature

> **get** **id**(): `any`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:292](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L292)

##### Returns

`any`

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`id`](../namespaces/Domain/classes/Credential.md#id)

***

### isCredential {#iscredential}

#### Get Signature

> **get** **isCredential**(): `boolean`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:288](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L288)

##### Returns

`boolean`

***

### issuanceDate {#issuancedate}

#### Get Signature

> **get** **issuanceDate**(): `string`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:352](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L352)

##### Returns

`string`

***

### issuer {#issuer}

#### Get Signature

> **get** **issuer**(): `any`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:366](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L366)

##### Returns

`any`

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`issuer`](../namespaces/Domain/classes/Credential.md#issuer)

***

### refreshService {#refreshservice}

#### Get Signature

> **get** **refreshService**(): \{ `id`: `string`; `type`: `string`; \} \| `undefined`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:373](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L373)

##### Returns

\{ `id`: `string`; `type`: `string`; \} \| `undefined`

***

### revoked {#revoked}

#### Get Signature

> **get** **revoked**(): `boolean` \| `undefined`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:385](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L385)

##### Returns

`boolean` \| `undefined`

***

### subject {#subject}

#### Get Signature

> **get** **subject**(): `string`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:377](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L377)

##### Returns

`string`

#### Overrides

[`Credential`](../namespaces/Domain/classes/Credential.md).[`subject`](../namespaces/Domain/classes/Credential.md#subject)

***

### termsOfUse {#termsofuse}

#### Get Signature

> **get** **termsOfUse**(): \{ `id`: `string`; `type`: `string`; \} \| `undefined`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:393](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L393)

##### Returns

\{ `id`: `string`; `type`: `string`; \} \| `undefined`

***

### type {#type}

#### Get Signature

> **get** **type**(): \[`"VerifiableCredential"`\] \| \[`"VerifiablePresentation"`\] \| `undefined`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:397](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L397)

##### Returns

\[`"VerifiableCredential"`\] \| \[`"VerifiablePresentation"`\] \| `undefined`

***

### vc {#vc}

#### Get Signature

> **get** **vc**(): [`W3CVerifiableCredential`](../namespaces/Domain/type-aliases/W3CVerifiableCredential.md) \| `undefined`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:300](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L300)

##### Returns

[`W3CVerifiableCredential`](../namespaces/Domain/type-aliases/W3CVerifiableCredential.md) \| `undefined`

***

### vp {#vp}

#### Get Signature

> **get** **vp**(): [`W3CVerifiablePresentation`](../namespaces/Domain/type-aliases/W3CVerifiablePresentation.md) \| `undefined`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:308](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L308)

##### Returns

[`W3CVerifiablePresentation`](../namespaces/Domain/type-aliases/W3CVerifiablePresentation.md) \| `undefined`

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

### presentation() {#presentation}

> **presentation**(): [`W3CVerifiablePresentation`](../namespaces/Domain/type-aliases/W3CVerifiablePresentation.md)

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:401](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L401)

#### Returns

[`W3CVerifiablePresentation`](../namespaces/Domain/type-aliases/W3CVerifiablePresentation.md)

#### Implementation of

[`ProvableCredential`](../namespaces/Domain/interfaces/ProvableCredential.md).[`presentation`](../namespaces/Domain/interfaces/ProvableCredential.md#presentation)

***

### toStorable() {#tostorable}

> **toStorable**(): \{ `availableClaims`: `string`[]; `credentialData`: `string`; `id`: `any`; `issuer`: `any`; `recoveryId`: `string`; `revoked`: `boolean` \| `undefined`; `subject`: `any`; `validUntil`: `any`; \}

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:432](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L432)

#### Returns

\{ `availableClaims`: `string`[]; `credentialData`: `string`; `id`: `any`; `issuer`: `any`; `recoveryId`: `string`; `revoked`: `boolean` \| `undefined`; `subject`: `any`; `validUntil`: `any`; \}

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `availableClaims` | `string`[] | `claims` | [src/pollux/models/JWTVerifiableCredential.ts:443](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L443) |
| `credentialData` | `string` | - | [src/pollux/models/JWTVerifiableCredential.ts:439](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L439) |
| `id` | `any` | - | [src/pollux/models/JWTVerifiableCredential.ts:437](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L437) |
| `issuer` | `any` | - | [src/pollux/models/JWTVerifiableCredential.ts:440](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L440) |
| `recoveryId` | `string` | - | [src/pollux/models/JWTVerifiableCredential.ts:438](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L438) |
| `revoked` | `boolean` \| `undefined` | - | [src/pollux/models/JWTVerifiableCredential.ts:444](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L444) |
| `subject` | `any` | - | [src/pollux/models/JWTVerifiableCredential.ts:441](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L441) |
| `validUntil` | `any` | - | [src/pollux/models/JWTVerifiableCredential.ts:442](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L442) |

#### Implementation of

[`StorableCredential`](../namespaces/Domain/interfaces/StorableCredential.md).[`toStorable`](../namespaces/Domain/interfaces/StorableCredential.md#tostorable)

***

### verifiableCredential() {#verifiablecredential}

> **verifiableCredential**(): [`W3CVerifiableCredential`](../namespaces/Domain/type-aliases/W3CVerifiableCredential.md)

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:418](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L418)

#### Returns

[`W3CVerifiableCredential`](../namespaces/Domain/type-aliases/W3CVerifiableCredential.md)

#### Implementation of

[`ProvableCredential`](../namespaces/Domain/interfaces/ProvableCredential.md).[`verifiableCredential`](../namespaces/Domain/interfaces/ProvableCredential.md#verifiablecredential)

***

### fromJWS() {#fromjws}

> `static` **fromJWS**(`jws`: `string`, `revoked?`: `boolean`): `JWTCredential`

Defined in: [src/pollux/models/JWTVerifiableCredential.ts:203](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/models/JWTVerifiableCredential.ts#L203)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jws` | `string` |
| `revoked?` | `boolean` |

#### Returns

`JWTCredential`
