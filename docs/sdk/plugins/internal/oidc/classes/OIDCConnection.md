[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / OIDCConnection

# Class: OIDCConnection

Defined in: [src/plugins/internal/oidc/connection/OIDCConnection.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/OIDCConnection.ts#L7)

Define the structure of a Connection

Connections are used to capture Protocol specific behaviours and metadata

## Implements

- [`Connection`](../../../../overview/interfaces/Connection.md)

## Constructors

### Constructor

> **new OIDCConnection**(`issuerMeta`: \{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{\[`key`: `string`\]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{\[`key`: `string`\]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \}, `scopes`: `string`[]): `OIDCConnection`

Defined in: [src/plugins/internal/oidc/connection/OIDCConnection.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/OIDCConnection.ts#L12)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `issuerMeta` | \{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{\[`key`: `string`\]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{\[`key`: `string`\]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \} |
| `issuerMeta.authorization_servers?` | `string`[] |
| `issuerMeta.batch_credential_endpoint?` | `string` |
| `issuerMeta.credential_configurations_supported` | \{\[`key`: `string`\]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{\[`key`: `string`\]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \} |
| `issuerMeta.credential_endpoint` | `string` |
| `issuerMeta.credential_identifiers_supported?` | `boolean` |
| `issuerMeta.credential_issuer` | `string` |
| `issuerMeta.credential_response_encryption?` | \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \} |
| `issuerMeta.credential_response_encryption.alg_values_supported` | `string`[] |
| `issuerMeta.credential_response_encryption.enc_values_supported` | `string`[] |
| `issuerMeta.credential_response_encryption.encryption_required` | `boolean` |
| `issuerMeta.deferred_credential_endpoint?` | `string` |
| `issuerMeta.display?` | \{ \} |
| `issuerMeta.notification_endpoint?` | `string` |
| `issuerMeta.signed_metadata?` | `string` |
| `scopes` | `string`[] |

#### Returns

`OIDCConnection`

## Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="issuermeta"></a> `issuerMeta` | `readonly` | \{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{\[`key`: `string`\]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{\[`key`: `string`\]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \} | `undefined` | - | [src/plugins/internal/oidc/connection/OIDCConnection.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/OIDCConnection.ts#L13) |
| `issuerMeta.authorization_servers?` | `public` | `string`[] | `undefined` | - | [src/plugins/internal/oidc/types.ts:86](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L86) |
| `issuerMeta.batch_credential_endpoint?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:95](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L95) |
| `issuerMeta.credential_configurations_supported` | `public` | \{\[`key`: `string`\]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{\[`key`: `string`\]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \} | `undefined` | - | [src/plugins/internal/oidc/types.ts:111](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L111) |
| `issuerMeta.credential_endpoint` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:90](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L90) |
| `issuerMeta.credential_identifiers_supported?` | `public` | `boolean` | `undefined` | - | [src/plugins/internal/oidc/types.ts:175](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L175) |
| `issuerMeta.credential_issuer` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:80](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L80) |
| `issuerMeta.credential_response_encryption?` | `public` | \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \} | `undefined` | - | [src/plugins/internal/oidc/types.ts:155](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L155) |
| `issuerMeta.credential_response_encryption.alg_values_supported` | `public` | `string`[] | `undefined` | - | [src/plugins/internal/oidc/types.ts:159](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L159) |
| `issuerMeta.credential_response_encryption.enc_values_supported` | `public` | `string`[] | `undefined` | - | [src/plugins/internal/oidc/types.ts:163](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L163) |
| `issuerMeta.credential_response_encryption.encryption_required` | `public` | `boolean` | `undefined` | - | [src/plugins/internal/oidc/types.ts:169](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L169) |
| `issuerMeta.deferred_credential_endpoint?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:100](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L100) |
| `issuerMeta.display?` | `public` | \{ \} | `undefined` | - | [src/plugins/internal/oidc/types.ts:178](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L178) |
| `issuerMeta.notification_endpoint?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:105](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L105) |
| `issuerMeta.signed_metadata?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:108](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L108) |
| <a id="scopes"></a> `scopes` | `readonly` | `string`[] | `undefined` | - | [src/plugins/internal/oidc/connection/OIDCConnection.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/OIDCConnection.ts#L14) |
| <a id="state"></a> `state` | `public` | [`State`](../../../../overview/namespaces/Connection/enumerations/State.md) | `Connection.State.NEW` | current condition of the connection | [src/plugins/internal/oidc/connection/OIDCConnection.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/OIDCConnection.ts#L8) |
| <a id="tokenresponse"></a> `tokenResponse?` | `public` | \{ `access_token`: `string`; `c_nonce?`: `string`; `c_nonce_expires_in?`: `number`; `expires_in?`: `number`; `id_token?`: `string`; `refresh_expires_in?`: `number`; `refresh_token?`: `string`; `scope?`: `string`; `session_state?`: `string`; `token_type`: `string`; \} | `undefined` | - | [src/plugins/internal/oidc/connection/OIDCConnection.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/OIDCConnection.ts#L9) |
| `tokenResponse.access_token` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:545](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L545) |
| `tokenResponse.c_nonce?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:548](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L548) |
| `tokenResponse.c_nonce_expires_in?` | `public` | `number` | `undefined` | - | [src/plugins/internal/oidc/types.ts:549](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L549) |
| `tokenResponse.expires_in?` | `public` | `number` | `undefined` | - | [src/plugins/internal/oidc/types.ts:547](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L547) |
| `tokenResponse.id_token?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:552](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L552) |
| `tokenResponse.refresh_expires_in?` | `public` | `number` | `undefined` | - | [src/plugins/internal/oidc/types.ts:551](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L551) |
| `tokenResponse.refresh_token?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:550](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L550) |
| `tokenResponse.scope?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:553](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L553) |
| `tokenResponse.session_state?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:554](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L554) |
| `tokenResponse.token_type` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:546](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/types.ts#L546) |
| <a id="uri"></a> `uri` | `readonly` | `string` | `undefined` | unique identifer for the connection | [src/plugins/internal/oidc/connection/OIDCConnection.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/OIDCConnection.ts#L10) |

## Methods

### send() {#send}

> **send**(`request`: `any`, `ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<[`ApiResponse`](../../../../overview/namespaces/Domain/classes/ApiResponse.md)\<`unknown`\> \| `undefined`\>

Defined in: [src/plugins/internal/oidc/connection/OIDCConnection.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/OIDCConnection.ts#L19)

handle delivering a Message to the connected entity

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `any` |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<[`ApiResponse`](../../../../overview/namespaces/Domain/classes/ApiResponse.md)\<`unknown`\> \| `undefined`\>

#### Implementation of

[`Connection`](../../../../overview/interfaces/Connection.md).[`send`](../../../../overview/interfaces/Connection.md#send)
