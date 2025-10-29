[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / FetchIssuerMetadata

# Class: FetchIssuerMetadata

Defined in: [src/plugins/internal/oidc/tasks/FetchIssuerMetadata.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/tasks/FetchIssuerMetadata.ts#L18)

try to retrieve Issuer Metadata from the given URI
`/.well-known/openid-credential-issuer` will be appended to the uri

## See

[OIDC Issuer Metadata](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html#name-credential-issuer-metadata)

## Param

## Extends

- [`Task`](../../../../overview/namespaces/Utils/classes/Task.md)\<[`IssuerMetadata`](../type-aliases/IssuerMetadata.md), [`FetchIssuerMetadataArgs`](../interfaces/FetchIssuerMetadataArgs.md)\>

## Constructors

### Constructor

> **new FetchIssuerMetadata**(...`args`: \[[`FetchIssuerMetadataArgs`](../interfaces/FetchIssuerMetadataArgs.md)\]): `FetchIssuerMetadata`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`FetchIssuerMetadataArgs`](../interfaces/FetchIssuerMetadataArgs.md)\] |  |

#### Returns

`FetchIssuerMetadata`

#### Inherited from

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`constructor`](../../../../overview/namespaces/Utils/classes/Task.md#constructor)

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L26)

#### Returns

`unknown`

#### Inherited from

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`log`](../../../../overview/namespaces/Utils/classes/Task.md#log)

***

### run() {#run}

> **run**(`ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<\{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{\[`key`: `string`\]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{\[`key`: `string`\]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \}\>

Defined in: [src/plugins/internal/oidc/tasks/FetchIssuerMetadata.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/tasks/FetchIssuerMetadata.ts#L19)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<\{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{\[`key`: `string`\]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{\[`key`: `string`\]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \}\>

#### Overrides

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`run`](../../../../overview/namespaces/Utils/classes/Task.md#run)
