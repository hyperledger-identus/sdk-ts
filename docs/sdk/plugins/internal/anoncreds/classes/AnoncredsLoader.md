[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/anoncreds](../README.md) / AnoncredsLoader

# Class: AnoncredsLoader

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L12)

AnoncredsLoader
handle loading and access of anoncreds library
Singleton to prevent recompilation of wasm

## Constructors

### Constructor

> **new AnoncredsLoader**(): `AnoncredsLoader`

#### Returns

`AnoncredsLoader`

## Methods

### createCredentialRequest() {#createcredentialrequest}

> **createCredentialRequest**(`credentialOffer`: `CredentialOfferType`, `credentialDefinition`: `CredentialDefinitionType`, `linkSecret`: `string`, `linkSecretId`: `string`): `Promise`\<\[`CredentialRequestType`, `CredentialRequestMetadataType`\]\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:49](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L49)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `credentialOffer` | `CredentialOfferType` |
| `credentialDefinition` | `CredentialDefinitionType` |
| `linkSecret` | `string` |
| `linkSecretId` | `string` |

#### Returns

`Promise`\<\[`CredentialRequestType`, `CredentialRequestMetadataType`\]\>

***

### createLinksecret() {#createlinksecret}

> **createLinksecret**(): `Promise`\<`string`\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:44](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L44)

#### Returns

`Promise`\<`string`\>

***

### createNonce() {#createnonce}

> **createNonce**(): `Promise`\<`string`\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:208](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L208)

#### Returns

`Promise`\<`string`\>

***

### createPresentation() {#createpresentation}

> **createPresentation**(`presentationRequest`: `PresentationRequestType`, `schemas`: `Record`\<`string`, `Anoncreds.CredentialSchemaType`\>, `credentialDefinitions`: `Record`\<`string`, `Anoncreds.CredentialDefinitionType`\>, `credential`: `CredentialType`, `linkSecret`: `string`): `Promise`\<`PresentationType`\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:106](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L106)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `presentationRequest` | `PresentationRequestType` |
| `schemas` | `Record`\<`string`, `Anoncreds.CredentialSchemaType`\> |
| `credentialDefinitions` | `Record`\<`string`, `Anoncreds.CredentialDefinitionType`\> |
| `credential` | `CredentialType` |
| `linkSecret` | `string` |

#### Returns

`Promise`\<`PresentationType`\>

***

### createPresentationDefinition() {#createpresentationdefinition}

> **createPresentationDefinition**(`claims`: [`Claims`](../interfaces/Claims.md)): `Promise`\<`PresentationRequestType`\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:164](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L164)

wrapper to transmute claims into anoncreds

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `claims` | [`Claims`](../interfaces/Claims.md) |  |

#### Returns

`Promise`\<`PresentationRequestType`\>

***

### createPresentationRequest() {#createpresentationrequest}

> **createPresentationRequest**(`name`: `string`, `version`: `string`, `requested_attributes`: `Anoncreds.RequestedPredicates`, `requested_predicates`: `Anoncreds.RequestedAttributes`): `Promise`\<`PresentationRequest`\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:144](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L144)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `version` | `string` |
| `requested_attributes` | `Anoncreds.RequestedPredicates` |
| `requested_predicates` | `Anoncreds.RequestedAttributes` |

#### Returns

`Promise`\<`PresentationRequest`\>

***

### isValidPresentation() {#isvalidpresentation}

> **isValidPresentation**(`presentation`: `PresentationType`): `Promise`\<`boolean`\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:213](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L213)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `presentation` | `PresentationType` |

#### Returns

`Promise`\<`boolean`\>

***

### processCredential() {#processcredential}

> **processCredential**(`credentialDefinition`: `CredentialDefinitionType`, `credential`: `CredentialType`, `credentialRequestMeta`: `CredentialRequestMetadataType`, `linkSecret`: `string`): `Promise`\<`CredentialType`\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:65](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L65)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `credentialDefinition` | `CredentialDefinitionType` |
| `credential` | `CredentialType` |
| `credentialRequestMeta` | `CredentialRequestMetadataType` |
| `linkSecret` | `string` |

#### Returns

`Promise`\<`CredentialType`\>

***

### verifyPresentation() {#verifypresentation}

> **verifyPresentation**(`presentation`: `PresentationType`, `presentationRequest`: `PresentationRequestType`, `schemas`: `Record`\<`string`, `Anoncreds.CredentialSchemaType`\>, `credentialDefinitions`: `Record`\<`string`, `Anoncreds.CredentialDefinitionType`\>): `Promise`\<`boolean`\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:126](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L126)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `presentation` | `PresentationType` |
| `presentationRequest` | `PresentationRequestType` |
| `schemas` | `Record`\<`string`, `Anoncreds.CredentialSchemaType`\> |
| `credentialDefinitions` | `Record`\<`string`, `Anoncreds.CredentialDefinitionType`\> |

#### Returns

`Promise`\<`boolean`\>
