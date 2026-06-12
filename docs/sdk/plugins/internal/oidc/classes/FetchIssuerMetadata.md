[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / FetchIssuerMetadata

# Class: FetchIssuerMetadata

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/tasks/FetchIssuerMetadata.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/tasks/FetchIssuerMetadata.ts#L19)

try to retrieve Issuer Metadata from the given URI
`/.well-known/openid-credential-issuer` will be appended to the uri

## See

[OIDC Issuer Metadata](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html#name-credential-issuer-metadata)

## Param

## Extends

- `Task`\<[`IssuerMetadata`](../type-aliases/IssuerMetadata.md), [`FetchIssuerMetadataArgs`](../interfaces/FetchIssuerMetadataArgs.md)\>

## Constructors

### Constructor

> **new FetchIssuerMetadata**(...`args`: \[[`FetchIssuerMetadataArgs`](../interfaces/FetchIssuerMetadataArgs.md)\]): `FetchIssuerMetadata`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`FetchIssuerMetadataArgs`](../interfaces/FetchIssuerMetadataArgs.md)\] | - |

#### Returns

`FetchIssuerMetadata`

#### Inherited from

`Task<IssuerMetadata, FetchIssuerMetadataArgs>.constructor`

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### run() {#run}

> **run**(`ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<\{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{\[`key`: `string`\]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{\[`key`: `string`\]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \}\>

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/tasks/FetchIssuerMetadata.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/tasks/FetchIssuerMetadata.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<\{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{\[`key`: `string`\]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{\[`key`: `string`\]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \}\>

#### Overrides

`Task.run`
