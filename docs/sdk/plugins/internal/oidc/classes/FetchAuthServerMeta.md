[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / FetchAuthServerMeta

# Class: FetchAuthServerMeta

Defined in: [src/plugins/internal/oidc/tasks/FetchAuthServerMeta.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/tasks/FetchAuthServerMeta.ts#L18)

try to retrieve Authorization Server Metadata from the give URI
`/.well-known/openid-configuration` will be appended to the URI

## Param

## Extends

- [`Task`](../../../../overview/namespaces/Utils/classes/Task.md)\<[`ApiResponse`](../../../../overview/namespaces/Domain/classes/ApiResponse.md)\<[`AuthServerMetadata`](../type-aliases/AuthServerMetadata.md)\>, [`FetchAuthServerMetaArgs`](../interfaces/FetchAuthServerMetaArgs.md)\>

## Constructors

### Constructor

> **new FetchAuthServerMeta**(...`args`: \[[`FetchAuthServerMetaArgs`](../interfaces/FetchAuthServerMetaArgs.md)\]): `FetchAuthServerMeta`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`FetchAuthServerMetaArgs`](../interfaces/FetchAuthServerMetaArgs.md)\] |  |

#### Returns

`FetchAuthServerMeta`

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

> **run**(`ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<[`ApiResponse`](../../../../overview/namespaces/Domain/classes/ApiResponse.md)\<\{ `acr_values_supported?`: `string`[]; `authorization_encryption_alg_values_supported?`: `string`[]; `authorization_encryption_enc_values_supported?`: `string`[]; `authorization_endpoint?`: `string`; `authorization_response_iss_parameter_supported?`: `boolean`; `authorization_signing_alg_values_supported?`: `string`[]; `backchannel_authentication_endpoint?`: `string`; `backchannel_authentication_request_signing_alg_values_supported?`: `string`[]; `backchannel_logout_session_supported?`: `boolean`; `backchannel_logout_supported?`: `boolean`; `backchannel_token_delivery_modes_supported?`: `string`[]; `backchannel_user_code_parameter_supported?`: `boolean`; `check_session_iframe?`: `string`; `claim_types_supported?`: `string`[]; `claims_locales_supported?`: `string`[]; `claims_parameter_supported?`: `boolean`; `claims_supported?`: `string`[]; `code_challenge_methods_supported?`: `string`[]; `device_authorization_endpoint?`: `string`; `display_values_supported?`: `string`[]; `dpop_signing_alg_values_supported?`: `string`[]; `end_session_endpoint?`: `string`; `frontchannel_logout_session_supported?`: `boolean`; `frontchannel_logout_supported?`: `boolean`; `grant_types_supported?`: `string`[]; `id_token_encryption_alg_values_supported?`: `string`[]; `id_token_encryption_enc_values_supported?`: `string`[]; `id_token_signing_alg_values_supported?`: `string`[]; `introspection_encryption_alg_values_supported?`: `string`[]; `introspection_encryption_enc_values_supported?`: `string`[]; `introspection_endpoint?`: `string`; `introspection_endpoint_auth_methods_supported?`: `string`[]; `introspection_endpoint_auth_signing_alg_values_supported?`: `string`[]; `introspection_signing_alg_values_supported?`: `string`[]; `issuer`: `string`; `jwks_uri?`: `string`; `mtls_endpoint_aliases?`: \{ \}; `op_policy_uri?`: `string`; `op_tos_uri?`: `string`; `pushed_authorization_request_endpoint?`: `string`; `registration_endpoint?`: `string`; `request_object_encryption_alg_values_supported?`: `string`[]; `request_object_encryption_enc_values_supported?`: `string`[]; `request_object_signing_alg_values_supported?`: `string`[]; `request_parameter_supported?`: `boolean`; `request_uri_parameter_supported?`: `boolean`; `require_pushed_authorization_requests?`: `boolean`; `require_request_uri_registration?`: `boolean`; `require_signed_request_object?`: `boolean`; `response_modes_supported?`: `string`[]; `response_types_supported?`: `string`[]; `revocation_endpoint?`: `string`; `revocation_endpoint_auth_methods_supported?`: `string`[]; `revocation_endpoint_auth_signing_alg_values_supported?`: `string`[]; `scopes_supported?`: `string`[]; `service_documentation?`: `string`; `signed_metadata?`: `string`; `subject_types_supported?`: `string`[]; `tls_client_certificate_bound_access_tokens?`: `boolean`; `token_endpoint?`: `string`; `token_endpoint_auth_methods_supported?`: `string`[]; `token_endpoint_auth_signing_alg_values_supported?`: `string`[]; `ui_locales_supported?`: `string`[]; `userinfo_encryption_alg_values_supported?`: `string`[]; `userinfo_encryption_enc_values_supported?`: `string`[]; `userinfo_endpoint?`: `string`; `userinfo_signing_alg_values_supported?`: `string`[]; \}\>\>

Defined in: [src/plugins/internal/oidc/tasks/FetchAuthServerMeta.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/tasks/FetchAuthServerMeta.ts#L19)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<[`ApiResponse`](../../../../overview/namespaces/Domain/classes/ApiResponse.md)\<\{ `acr_values_supported?`: `string`[]; `authorization_encryption_alg_values_supported?`: `string`[]; `authorization_encryption_enc_values_supported?`: `string`[]; `authorization_endpoint?`: `string`; `authorization_response_iss_parameter_supported?`: `boolean`; `authorization_signing_alg_values_supported?`: `string`[]; `backchannel_authentication_endpoint?`: `string`; `backchannel_authentication_request_signing_alg_values_supported?`: `string`[]; `backchannel_logout_session_supported?`: `boolean`; `backchannel_logout_supported?`: `boolean`; `backchannel_token_delivery_modes_supported?`: `string`[]; `backchannel_user_code_parameter_supported?`: `boolean`; `check_session_iframe?`: `string`; `claim_types_supported?`: `string`[]; `claims_locales_supported?`: `string`[]; `claims_parameter_supported?`: `boolean`; `claims_supported?`: `string`[]; `code_challenge_methods_supported?`: `string`[]; `device_authorization_endpoint?`: `string`; `display_values_supported?`: `string`[]; `dpop_signing_alg_values_supported?`: `string`[]; `end_session_endpoint?`: `string`; `frontchannel_logout_session_supported?`: `boolean`; `frontchannel_logout_supported?`: `boolean`; `grant_types_supported?`: `string`[]; `id_token_encryption_alg_values_supported?`: `string`[]; `id_token_encryption_enc_values_supported?`: `string`[]; `id_token_signing_alg_values_supported?`: `string`[]; `introspection_encryption_alg_values_supported?`: `string`[]; `introspection_encryption_enc_values_supported?`: `string`[]; `introspection_endpoint?`: `string`; `introspection_endpoint_auth_methods_supported?`: `string`[]; `introspection_endpoint_auth_signing_alg_values_supported?`: `string`[]; `introspection_signing_alg_values_supported?`: `string`[]; `issuer`: `string`; `jwks_uri?`: `string`; `mtls_endpoint_aliases?`: \{ \}; `op_policy_uri?`: `string`; `op_tos_uri?`: `string`; `pushed_authorization_request_endpoint?`: `string`; `registration_endpoint?`: `string`; `request_object_encryption_alg_values_supported?`: `string`[]; `request_object_encryption_enc_values_supported?`: `string`[]; `request_object_signing_alg_values_supported?`: `string`[]; `request_parameter_supported?`: `boolean`; `request_uri_parameter_supported?`: `boolean`; `require_pushed_authorization_requests?`: `boolean`; `require_request_uri_registration?`: `boolean`; `require_signed_request_object?`: `boolean`; `response_modes_supported?`: `string`[]; `response_types_supported?`: `string`[]; `revocation_endpoint?`: `string`; `revocation_endpoint_auth_methods_supported?`: `string`[]; `revocation_endpoint_auth_signing_alg_values_supported?`: `string`[]; `scopes_supported?`: `string`[]; `service_documentation?`: `string`; `signed_metadata?`: `string`; `subject_types_supported?`: `string`[]; `tls_client_certificate_bound_access_tokens?`: `boolean`; `token_endpoint?`: `string`; `token_endpoint_auth_methods_supported?`: `string`[]; `token_endpoint_auth_signing_alg_values_supported?`: `string`[]; `ui_locales_supported?`: `string`[]; `userinfo_encryption_alg_values_supported?`: `string`[]; `userinfo_encryption_enc_values_supported?`: `string`[]; `userinfo_endpoint?`: `string`; `userinfo_signing_alg_values_supported?`: `string`[]; \}\>\>

#### Overrides

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`run`](../../../../overview/namespaces/Utils/classes/Task.md#run)
