[**@hyperledger/identus-sdk**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / OEA

# OEA

## Enumerations

### DescriptorItemFormat

Defined in: [src/plugins/internal/oea/types.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L25)

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="jwt_vc"></a> `JWT_VC` | `"jwt_vc"` | [src/plugins/internal/oea/types.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L26) |
| <a id="jwt_vp"></a> `JWT_VP` | `"jwt_vp"` | [src/plugins/internal/oea/types.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L27) |
| <a id="sdjwt"></a> `SDJWT` | `"sdjwt"` | [src/plugins/internal/oea/types.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L28) |

***

### InputLimitDisclosure

Defined in: [src/plugins/internal/oea/types.ts:119](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L119)

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="preferred"></a> `PREFERRED` | `"preferred"` | [src/plugins/internal/oea/types.ts:121](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L121) |
| <a id="required"></a> `REQUIRED` | `"required"` | [src/plugins/internal/oea/types.ts:120](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L120) |

## Interfaces

### CredentialOffer

Defined in: [src/plugins/internal/oea/types.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L18)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="options"></a> `options` | \{ `challenge`: `string`; `domain`: `string`; \} | [src/plugins/internal/oea/types.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L19) |
| `options.challenge` | `string` | [src/plugins/internal/oea/types.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L20) |
| `options.domain` | `string` | [src/plugins/internal/oea/types.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L21) |

***

### DescriptorItem

Defined in: [src/plugins/internal/oea/types.ts:59](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L59)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="format"></a> `format` | `string` | [src/plugins/internal/oea/types.ts:61](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L61) |
| <a id="id"></a> `id` | `string` | [src/plugins/internal/oea/types.ts:60](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L60) |
| <a id="path"></a> `path` | `string` | [src/plugins/internal/oea/types.ts:62](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L62) |
| <a id="path_nested"></a> `path_nested?` | [`DescriptorItem`](#descriptoritem) | [src/plugins/internal/oea/types.ts:63](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L63) |

***

### PresentationRequest

Defined in: [src/plugins/internal/oea/types.ts:66](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L66)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="options-1"></a> `options` | \{ `challenge`: `string`; `domain`: `string`; \} | [src/plugins/internal/oea/types.ts:67](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L67) |
| `options.challenge` | `string` | [src/plugins/internal/oea/types.ts:68](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L68) |
| `options.domain` | `string` | [src/plugins/internal/oea/types.ts:69](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L69) |
| <a id="presentation_definition"></a> `presentation_definition` | \{ `format?`: [`DefinitionFormat`](#definitionformat); `id`: `string`; `input_descriptors`: [`InputDescriptor`](#inputdescriptor)[]; \} | [src/plugins/internal/oea/types.ts:71](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L71) |
| `presentation_definition.format?` | [`DefinitionFormat`](#definitionformat) | [src/plugins/internal/oea/types.ts:74](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L74) |
| `presentation_definition.id` | `string` | [src/plugins/internal/oea/types.ts:72](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L72) |
| `presentation_definition.input_descriptors` | [`InputDescriptor`](#inputdescriptor)[] | [src/plugins/internal/oea/types.ts:73](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L73) |

***

### PresentationSubmission

Defined in: [src/plugins/internal/oea/types.ts:50](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L50)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="presentation_submission"></a> `presentation_submission` | \{ `definition_id`: `string`; `descriptor_map`: [`DescriptorItem`](#descriptoritem)[]; `id`: `string`; \} | [src/plugins/internal/oea/types.ts:51](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L51) |
| `presentation_submission.definition_id` | `string` | [src/plugins/internal/oea/types.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L53) |
| `presentation_submission.descriptor_map` | [`DescriptorItem`](#descriptoritem)[] | [src/plugins/internal/oea/types.ts:54](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L54) |
| `presentation_submission.id` | `string` | [src/plugins/internal/oea/types.ts:52](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L52) |
| <a id="verifiablepresentation"></a> `verifiablePresentation` | `string`[] | [src/plugins/internal/oea/types.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L56) |

## Type Aliases

### DefinitionFormat

> **DefinitionFormat** = \{ `jwt?`: \{ `alg`: `string`[]; \}; `sdjwt?`: \{ `alg`: `string`[]; \}; \}

Defined in: [src/plugins/internal/oea/types.ts:78](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L78)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="jwt"></a> `jwt?` | \{ `alg`: `string`[]; \} | [src/plugins/internal/oea/types.ts:79](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L79) |
| `jwt.alg` | `string`[] | [src/plugins/internal/oea/types.ts:80](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L80) |
| <a id="sdjwt-1"></a> `sdjwt?` | \{ `alg`: `string`[]; \} | [src/plugins/internal/oea/types.ts:82](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L82) |
| `sdjwt.alg` | `string`[] | [src/plugins/internal/oea/types.ts:83](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L83) |

***

### InputConstraints

> **InputConstraints** = \{ `fields`: [`InputField`](#inputfield)[]; `limit_disclosure`: [`InputLimitDisclosure`](#inputlimitdisclosure); \}

Defined in: [src/plugins/internal/oea/types.ts:114](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L114)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="fields"></a> `fields` | [`InputField`](#inputfield)[] | [src/plugins/internal/oea/types.ts:115](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L115) |
| <a id="limit_disclosure"></a> `limit_disclosure` | [`InputLimitDisclosure`](#inputlimitdisclosure) | [src/plugins/internal/oea/types.ts:116](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L116) |

***

### InputDescriptor

> **InputDescriptor** = \{ `constraints`: [`InputConstraints`](#inputconstraints); `format?`: [`DefinitionFormat`](#definitionformat); `id`: `string`; `name?`: `string`; `purpose?`: `string`; \}

Defined in: [src/plugins/internal/oea/types.ts:87](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L87)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="constraints"></a> `constraints` | [`InputConstraints`](#inputconstraints) | [src/plugins/internal/oea/types.ts:89](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L89) |
| <a id="format-1"></a> `format?` | [`DefinitionFormat`](#definitionformat) | [src/plugins/internal/oea/types.ts:92](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L92) |
| <a id="id-1"></a> `id` | `string` | [src/plugins/internal/oea/types.ts:88](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L88) |
| <a id="name"></a> `name?` | `string` | [src/plugins/internal/oea/types.ts:90](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L90) |
| <a id="purpose"></a> `purpose?` | `string` | [src/plugins/internal/oea/types.ts:91](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L91) |

***

### InputField

> **InputField** = \{ `filter?`: [`InputFieldFilter`](#inputfieldfilter-1); `id?`: `string`; `name?`: `string`; `optional?`: `boolean`; `path`: `string`[]; `purpose?`: `string`; \}

Defined in: [src/plugins/internal/oea/types.ts:105](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L105)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="filter"></a> `filter?` | [`InputFieldFilter`](#inputfieldfilter-1) | [src/plugins/internal/oea/types.ts:110](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L110) |
| <a id="id-2"></a> `id?` | `string` | [src/plugins/internal/oea/types.ts:107](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L107) |
| <a id="name-1"></a> `name?` | `string` | [src/plugins/internal/oea/types.ts:109](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L109) |
| <a id="optional"></a> `optional?` | `boolean` | [src/plugins/internal/oea/types.ts:111](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L111) |
| <a id="path-1"></a> `path` | `string`[] | [src/plugins/internal/oea/types.ts:106](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L106) |
| <a id="purpose-1"></a> `purpose?` | `string` | [src/plugins/internal/oea/types.ts:108](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L108) |

***

### InputFieldFilter

> **InputFieldFilter** = \{ `const?`: [`PredicateType`](#predicatetype)[]; `enum?`: [`PredicateType`](#predicatetype)[]; `pattern?`: `string`; `type`: `string`; `value?`: [`PredicateType`](#predicatetype); \}

Defined in: [src/plugins/internal/oea/types.ts:95](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L95)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="const"></a> `const?` | [`PredicateType`](#predicatetype)[] | [src/plugins/internal/oea/types.ts:99](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L99) |
| <a id="enum"></a> `enum?` | [`PredicateType`](#predicatetype)[] | [src/plugins/internal/oea/types.ts:98](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L98) |
| <a id="pattern"></a> `pattern?` | `string` | [src/plugins/internal/oea/types.ts:97](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L97) |
| <a id="type"></a> `type` | `string` | [src/plugins/internal/oea/types.ts:96](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L96) |
| <a id="value"></a> `value?` | [`PredicateType`](#predicatetype) | [src/plugins/internal/oea/types.ts:100](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L100) |

***

### JWTPresentationClaims

> **JWTPresentationClaims** = \{ `claims`: [`JsonObj`](../../../../overview/namespaces/Utils/README.md#jsonobj)\<[`InputFieldFilter`](#inputfieldfilter-1)\>; `issuer?`: `string`; `schema?`: `string`; \}

Defined in: [src/plugins/internal/oea/types.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L31)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="claims"></a> `claims` | [`JsonObj`](../../../../overview/namespaces/Utils/README.md#jsonobj)\<[`InputFieldFilter`](#inputfieldfilter-1)\> | [src/plugins/internal/oea/types.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L34) |
| <a id="issuer"></a> `issuer?` | `string` | [src/plugins/internal/oea/types.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L33) |
| <a id="schema"></a> `schema?` | `string` | [src/plugins/internal/oea/types.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L32) |

***

### PredicateType

> **PredicateType** = `string` \| `number`

Defined in: [src/plugins/internal/oea/types.ts:103](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L103)

***

### SDJWTPresentationClaims

> **SDJWTPresentationClaims** = \{ `claims`: [`JsonObj`](../../../../overview/namespaces/Utils/README.md#jsonobj)\<[`InputFieldFilter`](#inputfieldfilter-1)\>; `issuer?`: `string`; `schema?`: `string`; \}

Defined in: [src/plugins/internal/oea/types.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L37)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="claims-1"></a> `claims` | [`JsonObj`](../../../../overview/namespaces/Utils/README.md#jsonobj)\<[`InputFieldFilter`](#inputfieldfilter-1)\> | [src/plugins/internal/oea/types.ts:40](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L40) |
| <a id="issuer-1"></a> `issuer?` | `string` | [src/plugins/internal/oea/types.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L39) |
| <a id="schema-1"></a> `schema?` | `string` | [src/plugins/internal/oea/types.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L38) |

***

### SDJWTPresentationSubmission

> **SDJWTPresentationSubmission** = \{ `disclosures`: `any`[]; `payload`: `string`; `protected`: `string`; `signature`: `string`; \}

Defined in: [src/plugins/internal/oea/types.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L43)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="disclosures"></a> `disclosures` | `any`[] | [src/plugins/internal/oea/types.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L44) |
| <a id="payload"></a> `payload` | `string` | [src/plugins/internal/oea/types.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L46) |
| <a id="protected"></a> `protected` | `string` | [src/plugins/internal/oea/types.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L45) |
| <a id="signature"></a> `signature` | `string` | [src/plugins/internal/oea/types.ts:47](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L47) |

## Variables

### PRISM\_JWT

> `const` **PRISM\_JWT**: `"prism/jwt"` = `"prism/jwt"`

Defined in: [src/plugins/internal/oea/types.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L15)

***

### PRISM\_SDJWT

> `const` **PRISM\_SDJWT**: `"vc+sd-jwt"` = `"vc+sd-jwt"`

Defined in: [src/plugins/internal/oea/types.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L16)

***

### ProtocolIds

> `const` **ProtocolIds**: \{ `ConnectionRequest`: `"https://atalaprism.io/mercury/connections/1.0/request"`; `ConnectionResponse`: `"https://atalaprism.io/mercury/connections/1.0/response"`; `Presentation`: `"https://didcomm.atalaprism.io/present-proof/3.0/presentation"`; `PrismOnboarding`: `"https://atalaprism.io/did-request"`; `PrismRevocation`: `"https://atalaprism.io/revocation_notification/1.0/revoke"`; `ProposePresentation`: `"https://didcomm.atalaprism.io/present-proof/3.0/propose-presentation"`; `RequestPresentation`: `"https://didcomm.atalaprism.io/present-proof/3.0/request-presentation"`; \}

Defined in: [src/plugins/internal/oea/types.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L5)

#### Type declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="connectionrequest"></a> `ConnectionRequest` | `"https://atalaprism.io/mercury/connections/1.0/request"` | `"https://atalaprism.io/mercury/connections/1.0/request"` | [src/plugins/internal/oea/types.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L6) |
| <a id="connectionresponse"></a> `ConnectionResponse` | `"https://atalaprism.io/mercury/connections/1.0/response"` | `"https://atalaprism.io/mercury/connections/1.0/response"` | [src/plugins/internal/oea/types.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L7) |
| <a id="presentation"></a> `Presentation` | `"https://didcomm.atalaprism.io/present-proof/3.0/presentation"` | `"https://didcomm.atalaprism.io/present-proof/3.0/presentation"` | [src/plugins/internal/oea/types.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L10) |
| <a id="prismonboarding"></a> `PrismOnboarding` | `"https://atalaprism.io/did-request"` | `"https://atalaprism.io/did-request"` | [src/plugins/internal/oea/types.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L11) |
| <a id="prismrevocation"></a> `PrismRevocation` | `"https://atalaprism.io/revocation_notification/1.0/revoke"` | `"https://atalaprism.io/revocation_notification/1.0/revoke"` | [src/plugins/internal/oea/types.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L12) |
| <a id="proposepresentation"></a> `ProposePresentation` | `"https://didcomm.atalaprism.io/present-proof/3.0/propose-presentation"` | `"https://didcomm.atalaprism.io/present-proof/3.0/propose-presentation"` | [src/plugins/internal/oea/types.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L8) |
| <a id="requestpresentation"></a> `RequestPresentation` | `"https://didcomm.atalaprism.io/present-proof/3.0/request-presentation"` | `"https://didcomm.atalaprism.io/present-proof/3.0/request-presentation"` | [src/plugins/internal/oea/types.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oea/types.ts#L9) |
