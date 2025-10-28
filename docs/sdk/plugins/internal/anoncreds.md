[**@hyperledger/identus-sdk**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / plugins/internal/anoncreds

# plugins/internal/anoncreds

This export contains the Anoncreds plugin for the Identus SDK.

## Classes

### AnoncredsLoader

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L12)

AnoncredsLoader
handle loading and access of anoncreds library
Singleton to prevent recompilation of wasm

#### Constructors

##### Constructor

> **new AnoncredsLoader**(): [`AnoncredsLoader`](#anoncredsloader)

###### Returns

[`AnoncredsLoader`](#anoncredsloader)

#### Methods

##### createCredentialRequest()

> **createCredentialRequest**(`credentialOffer`: `CredentialOfferType`, `credentialDefinition`: `CredentialDefinitionType`, `linkSecret`: `string`, `linkSecretId`: `string`): `Promise`\<\[`CredentialRequestType`, `CredentialRequestMetadataType`\]\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L49)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `credentialOffer` | `CredentialOfferType` |
| `credentialDefinition` | `CredentialDefinitionType` |
| `linkSecret` | `string` |
| `linkSecretId` | `string` |

###### Returns

`Promise`\<\[`CredentialRequestType`, `CredentialRequestMetadataType`\]\>

##### createLinksecret()

> **createLinksecret**(): `Promise`\<`string`\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L44)

###### Returns

`Promise`\<`string`\>

##### createNonce()

> **createNonce**(): `Promise`\<`string`\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:208](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L208)

###### Returns

`Promise`\<`string`\>

##### createPresentation()

> **createPresentation**(`presentationRequest`: `PresentationRequestType`, `schemas`: `Record`\<`string`, `Anoncreds.CredentialSchemaType`\>, `credentialDefinitions`: `Record`\<`string`, `Anoncreds.CredentialDefinitionType`\>, `credential`: `CredentialType`, `linkSecret`: `string`): `Promise`\<`PresentationType`\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:106](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L106)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `presentationRequest` | `PresentationRequestType` |
| `schemas` | `Record`\<`string`, `Anoncreds.CredentialSchemaType`\> |
| `credentialDefinitions` | `Record`\<`string`, `Anoncreds.CredentialDefinitionType`\> |
| `credential` | `CredentialType` |
| `linkSecret` | `string` |

###### Returns

`Promise`\<`PresentationType`\>

##### createPresentationDefinition()

> **createPresentationDefinition**(`claims`: [`Claims`](#claims)): `Promise`\<`PresentationRequestType`\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:164](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L164)

wrapper to transmute claims into anoncreds

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `claims` | [`Claims`](#claims) |  |

###### Returns

`Promise`\<`PresentationRequestType`\>

##### createPresentationRequest()

> **createPresentationRequest**(`name`: `string`, `version`: `string`, `requested_attributes`: `Anoncreds.RequestedPredicates`, `requested_predicates`: `Anoncreds.RequestedAttributes`): `Promise`\<`PresentationRequest`\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:144](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L144)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `version` | `string` |
| `requested_attributes` | `Anoncreds.RequestedPredicates` |
| `requested_predicates` | `Anoncreds.RequestedAttributes` |

###### Returns

`Promise`\<`PresentationRequest`\>

##### isValidPresentation()

> **isValidPresentation**(`presentation`: `PresentationType`): `Promise`\<`boolean`\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:213](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L213)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `presentation` | `PresentationType` |

###### Returns

`Promise`\<`boolean`\>

##### processCredential()

> **processCredential**(`credentialDefinition`: `CredentialDefinitionType`, `credential`: `CredentialType`, `credentialRequestMeta`: `CredentialRequestMetadataType`, `linkSecret`: `string`): `Promise`\<`CredentialType`\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:65](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `credentialDefinition` | `CredentialDefinitionType` |
| `credential` | `CredentialType` |
| `credentialRequestMeta` | `CredentialRequestMetadataType` |
| `linkSecret` | `string` |

###### Returns

`Promise`\<`CredentialType`\>

##### verifyPresentation()

> **verifyPresentation**(`presentation`: `PresentationType`, `presentationRequest`: `PresentationRequestType`, `schemas`: `Record`\<`string`, `Anoncreds.CredentialSchemaType`\>, `credentialDefinitions`: `Record`\<`string`, `Anoncreds.CredentialDefinitionType`\>): `Promise`\<`boolean`\>

Defined in: [src/plugins/internal/anoncreds/module/AnoncredsLoader.ts:126](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/module/AnoncredsLoader.ts#L126)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `presentation` | `PresentationType` |
| `presentationRequest` | `PresentationRequestType` |
| `schemas` | `Record`\<`string`, `Anoncreds.CredentialSchemaType`\> |
| `credentialDefinitions` | `Record`\<`string`, `Anoncreds.CredentialDefinitionType`\> |

###### Returns

`Promise`\<`boolean`\>

***

### FetchCredentialDefinition

Defined in: [src/plugins/internal/anoncreds/FetchCredentialDefinition.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/FetchCredentialDefinition.ts#L9)

A Task encapsulates a unit of work

args constructor parameter is mandatory if Args type given
args constructor parameter is optional if no Args type given

#### Extends

- [`Task`](../../overview/namespaces/Utils/README.md#task)\<[`CredentialDefinition`](#credentialdefinition), [`FetchCredentialDefinitionArgs`](#fetchcredentialdefinitionargs)\>

#### Constructors

##### Constructor

> **new FetchCredentialDefinition**(...`args`: \[[`FetchCredentialDefinitionArgs`](#fetchcredentialdefinitionargs)\]): [`FetchCredentialDefinition`](#fetchcredentialdefinition)

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L18)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`FetchCredentialDefinitionArgs`](#fetchcredentialdefinitionargs)\] |  |

###### Returns

[`FetchCredentialDefinition`](#fetchcredentialdefinition)

###### Inherited from

[`Task`](../../overview/namespaces/Utils/README.md#task).[`constructor`](../../overview/namespaces/Utils/README.md#task#constructor-1)

#### Methods

##### log()

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L26)

###### Returns

`unknown`

###### Inherited from

[`Task`](../../overview/namespaces/Utils/README.md#task).[`log`](../../overview/namespaces/Utils/README.md#task#log)

##### run()

> **run**(`ctx`: [`Context`](#context)): `Promise`\<`CredentialDefinitionType`\>

Defined in: [src/plugins/internal/anoncreds/FetchCredentialDefinition.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/FetchCredentialDefinition.ts#L10)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](#context) |

###### Returns

`Promise`\<`CredentialDefinitionType`\>

###### Overrides

[`Task`](../../overview/namespaces/Utils/README.md#task).[`run`](../../overview/namespaces/Utils/README.md#task#run)

***

### fetchSchema

Defined in: [src/plugins/internal/anoncreds/FetchSchema.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/FetchSchema.ts#L9)

A Task encapsulates a unit of work

args constructor parameter is mandatory if Args type given
args constructor parameter is optional if no Args type given

#### Extends

- [`Task`](../../overview/namespaces/Utils/README.md#task)\<[`Schema`](#schema), [`FetchSchemaArgs`](#fetchschemaargs)\>

#### Constructors

##### Constructor

> **new fetchSchema**(...`args`: \[[`FetchSchemaArgs`](#fetchschemaargs)\]): [`fetchSchema`](#fetchschema)

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L18)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`FetchSchemaArgs`](#fetchschemaargs)\] |  |

###### Returns

[`fetchSchema`](#fetchschema)

###### Inherited from

[`Task`](../../overview/namespaces/Utils/README.md#task).[`constructor`](../../overview/namespaces/Utils/README.md#task#constructor-1)

#### Methods

##### log()

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L26)

###### Returns

`unknown`

###### Inherited from

[`Task`](../../overview/namespaces/Utils/README.md#task).[`log`](../../overview/namespaces/Utils/README.md#task#log)

##### run()

> **run**(`ctx`: [`Context`](#context)): `Promise`\<`CredentialSchemaType`\>

Defined in: [src/plugins/internal/anoncreds/FetchSchema.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/FetchSchema.ts#L10)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](#context) |

###### Returns

`Promise`\<`CredentialSchemaType`\>

###### Overrides

[`Task`](../../overview/namespaces/Utils/README.md#task).[`run`](../../overview/namespaces/Utils/README.md#task#run)

## Interfaces

### AnoncredsInputFieldFilter

Defined in: [src/plugins/internal/anoncreds/types.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L22)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="gt"></a> `$gt?` | [`PredicateType`](#predicatetype) | [src/plugins/internal/anoncreds/types.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L25) |
| <a id="gte"></a> `$gte?` | [`PredicateType`](#predicatetype) | [src/plugins/internal/anoncreds/types.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L26) |
| <a id="lt"></a> `$lt?` | [`PredicateType`](#predicatetype) | [src/plugins/internal/anoncreds/types.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L27) |
| <a id="lte"></a> `$lte?` | [`PredicateType`](#predicatetype) | [src/plugins/internal/anoncreds/types.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L28) |
| <a id="name"></a> `name` | `string` | [src/plugins/internal/anoncreds/types.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L24) |
| <a id="type"></a> `type` | `string` | [src/plugins/internal/anoncreds/types.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L23) |

***

### Claims

Defined in: [src/plugins/internal/anoncreds/types.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L18)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="attributes"></a> `attributes?` | `RequestedAttributes` | [src/plugins/internal/anoncreds/types.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L19) |
| <a id="predicates"></a> `predicates?` | `Record`\<`string`, [`AnoncredsInputFieldFilter`](#anoncredsinputfieldfilter)\> | [src/plugins/internal/anoncreds/types.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L20) |

***

### FetchCredentialDefinitionArgs

Defined in: [src/plugins/internal/anoncreds/FetchCredentialDefinition.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/FetchCredentialDefinition.ts#L5)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="uri"></a> `uri` | `string` | [src/plugins/internal/anoncreds/FetchCredentialDefinition.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/FetchCredentialDefinition.ts#L6) |

***

### FetchSchemaArgs

Defined in: [src/plugins/internal/anoncreds/FetchSchema.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/FetchSchema.ts#L5)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="uri-1"></a> `uri` | `string` | [src/plugins/internal/anoncreds/FetchSchema.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/FetchSchema.ts#L6) |

## Type Aliases

### Context

> **Context** = [`Context`](../../overview/namespaces/Plugins.md#context)\<[`Modules`](#modules)\>

Defined in: [src/plugins/internal/anoncreds/plugin.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/plugin.ts#L10)

***

### CredentialDefinition

> **CredentialDefinition** = `Anoncreds.CredentialDefinitionType`

Defined in: [src/plugins/internal/anoncreds/types.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L5)

***

### CredentialMetadata

> **CredentialMetadata** = `Anoncreds.CredentialRequestMetadataType`

Defined in: [src/plugins/internal/anoncreds/types.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L9)

***

### CredentialOffer

> **CredentialOffer** = `Anoncreds.CredentialOfferType`

Defined in: [src/plugins/internal/anoncreds/types.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L7)

***

### CredentialRequest

> **CredentialRequest** = `Anoncreds.CredentialRequestType`

Defined in: [src/plugins/internal/anoncreds/types.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L8)

***

### Modules

> **Modules** = \{ `Anoncreds`: [`AnoncredsLoader`](#anoncredsloader); \}

Defined in: [src/plugins/internal/anoncreds/plugin.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/plugin.ts#L9)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="anoncreds"></a> `Anoncreds` | [`AnoncredsLoader`](#anoncredsloader) | [src/plugins/internal/anoncreds/plugin.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/plugin.ts#L9) |

***

### PredicateType

> **PredicateType** = `string` \| `number`

Defined in: [src/plugins/internal/anoncreds/types.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L30)

***

### Presentation

> **Presentation** = `Anoncreds.PresentationType`

Defined in: [src/plugins/internal/anoncreds/types.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L12)

***

### PresentationRequest

> **PresentationRequest** = `Anoncreds.PresentationRequestType`

Defined in: [src/plugins/internal/anoncreds/types.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L11)

***

### RequestedPredicates

> **RequestedPredicates** = `Anoncreds.RequestedPredicates`

Defined in: [src/plugins/internal/anoncreds/types.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L15)

***

### Schema

> **Schema** = `Anoncreds.CredentialSchemaType`

Defined in: [src/plugins/internal/anoncreds/types.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L4)

## Variables

### CREDENTIAL\_ISSUE

> `const` **CREDENTIAL\_ISSUE**: `"anoncreds/credential@v1.0"` = `"anoncreds/credential@v1.0"`

Defined in: [src/plugins/internal/anoncreds/types.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L34)

***

### CREDENTIAL\_OFFER

> `const` **CREDENTIAL\_OFFER**: `"anoncreds/credential-offer@v1.0"` = `"anoncreds/credential-offer@v1.0"`

Defined in: [src/plugins/internal/anoncreds/types.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L32)

***

### CREDENTIAL\_REQUEST

> `const` **CREDENTIAL\_REQUEST**: `"anoncreds/credential-request@v1.0"` = `"anoncreds/credential-request@v1.0"`

Defined in: [src/plugins/internal/anoncreds/types.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L33)

***

### plugin

> `const` **plugin**: [`Plugin`](../../overview/README.md#plugin)

Defined in: [src/plugins/internal/anoncreds/plugin.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/plugin.ts#L12)

***

### PRESENTATION

> `const` **PRESENTATION**: `"anoncreds/proof@v1.0"` = `"anoncreds/proof@v1.0"`

Defined in: [src/plugins/internal/anoncreds/types.ts:36](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L36)

***

### PRESENTATION\_REQUEST

> `const` **PRESENTATION\_REQUEST**: `"anoncreds/proof-request@v1.0"` = `"anoncreds/proof-request@v1.0"`

Defined in: [src/plugins/internal/anoncreds/types.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/anoncreds/types.ts#L35)
