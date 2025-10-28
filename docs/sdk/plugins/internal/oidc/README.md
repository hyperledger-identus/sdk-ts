[**@hyperledger/identus-sdk**](../../../README.md)

***

[@hyperledger/identus-sdk](../../../README.md) / plugins/internal/oidc

# plugins/internal/oidc

This export contains the OIDC plugin for the Identus SDK
Please use the following export

## How to use
Typescript / esmodules
```typescript
import * as OIDC from "@hyperledger/identus-sdk/plugins/oidc";
```

Or with cjs modules
```typescript
const OIDC = require("@hyperledger/identus-sdk/plugins/oidc");
```

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [Protocols](namespaces/Protocols.md) | - |

## Classes

### AuthorizationRequest

Defined in: [src/plugins/internal/oidc/protocols/AuthorizationRequest.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationRequest.ts#L9)

#### Constructors

##### Constructor

> **new AuthorizationRequest**(`authServerMeta`: \{ `acr_values_supported?`: `string`[]; `authorization_encryption_alg_values_supported?`: `string`[]; `authorization_encryption_enc_values_supported?`: `string`[]; `authorization_endpoint?`: `string`; `authorization_response_iss_parameter_supported?`: `boolean`; `authorization_signing_alg_values_supported?`: `string`[]; `backchannel_authentication_endpoint?`: `string`; `backchannel_authentication_request_signing_alg_values_supported?`: `string`[]; `backchannel_logout_session_supported?`: `boolean`; `backchannel_logout_supported?`: `boolean`; `backchannel_token_delivery_modes_supported?`: `string`[]; `backchannel_user_code_parameter_supported?`: `boolean`; `check_session_iframe?`: `string`; `claim_types_supported?`: `string`[]; `claims_locales_supported?`: `string`[]; `claims_parameter_supported?`: `boolean`; `claims_supported?`: `string`[]; `code_challenge_methods_supported?`: `string`[]; `device_authorization_endpoint?`: `string`; `display_values_supported?`: `string`[]; `dpop_signing_alg_values_supported?`: `string`[]; `end_session_endpoint?`: `string`; `frontchannel_logout_session_supported?`: `boolean`; `frontchannel_logout_supported?`: `boolean`; `grant_types_supported?`: `string`[]; `id_token_encryption_alg_values_supported?`: `string`[]; `id_token_encryption_enc_values_supported?`: `string`[]; `id_token_signing_alg_values_supported?`: `string`[]; `introspection_encryption_alg_values_supported?`: `string`[]; `introspection_encryption_enc_values_supported?`: `string`[]; `introspection_endpoint?`: `string`; `introspection_endpoint_auth_methods_supported?`: `string`[]; `introspection_endpoint_auth_signing_alg_values_supported?`: `string`[]; `introspection_signing_alg_values_supported?`: `string`[]; `issuer`: `string`; `jwks_uri?`: `string`; `mtls_endpoint_aliases?`: \{ \}; `op_policy_uri?`: `string`; `op_tos_uri?`: `string`; `pushed_authorization_request_endpoint?`: `string`; `registration_endpoint?`: `string`; `request_object_encryption_alg_values_supported?`: `string`[]; `request_object_encryption_enc_values_supported?`: `string`[]; `request_object_signing_alg_values_supported?`: `string`[]; `request_parameter_supported?`: `boolean`; `request_uri_parameter_supported?`: `boolean`; `require_pushed_authorization_requests?`: `boolean`; `require_request_uri_registration?`: `boolean`; `require_signed_request_object?`: `boolean`; `response_modes_supported?`: `string`[]; `response_types_supported?`: `string`[]; `revocation_endpoint?`: `string`; `revocation_endpoint_auth_methods_supported?`: `string`[]; `revocation_endpoint_auth_signing_alg_values_supported?`: `string`[]; `scopes_supported?`: `string`[]; `service_documentation?`: `string`; `signed_metadata?`: `string`; `subject_types_supported?`: `string`[]; `tls_client_certificate_bound_access_tokens?`: `boolean`; `token_endpoint?`: `string`; `token_endpoint_auth_methods_supported?`: `string`[]; `token_endpoint_auth_signing_alg_values_supported?`: `string`[]; `ui_locales_supported?`: `string`[]; `userinfo_encryption_alg_values_supported?`: `string`[]; `userinfo_encryption_enc_values_supported?`: `string`[]; `userinfo_endpoint?`: `string`; `userinfo_signing_alg_values_supported?`: `string`[]; \}, `issuerMeta`: \{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \}): [`AuthorizationRequest`](#authorizationrequest)

Defined in: [src/plugins/internal/oidc/protocols/AuthorizationRequest.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationRequest.ts#L13)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `authServerMeta` | \{ `acr_values_supported?`: `string`[]; `authorization_encryption_alg_values_supported?`: `string`[]; `authorization_encryption_enc_values_supported?`: `string`[]; `authorization_endpoint?`: `string`; `authorization_response_iss_parameter_supported?`: `boolean`; `authorization_signing_alg_values_supported?`: `string`[]; `backchannel_authentication_endpoint?`: `string`; `backchannel_authentication_request_signing_alg_values_supported?`: `string`[]; `backchannel_logout_session_supported?`: `boolean`; `backchannel_logout_supported?`: `boolean`; `backchannel_token_delivery_modes_supported?`: `string`[]; `backchannel_user_code_parameter_supported?`: `boolean`; `check_session_iframe?`: `string`; `claim_types_supported?`: `string`[]; `claims_locales_supported?`: `string`[]; `claims_parameter_supported?`: `boolean`; `claims_supported?`: `string`[]; `code_challenge_methods_supported?`: `string`[]; `device_authorization_endpoint?`: `string`; `display_values_supported?`: `string`[]; `dpop_signing_alg_values_supported?`: `string`[]; `end_session_endpoint?`: `string`; `frontchannel_logout_session_supported?`: `boolean`; `frontchannel_logout_supported?`: `boolean`; `grant_types_supported?`: `string`[]; `id_token_encryption_alg_values_supported?`: `string`[]; `id_token_encryption_enc_values_supported?`: `string`[]; `id_token_signing_alg_values_supported?`: `string`[]; `introspection_encryption_alg_values_supported?`: `string`[]; `introspection_encryption_enc_values_supported?`: `string`[]; `introspection_endpoint?`: `string`; `introspection_endpoint_auth_methods_supported?`: `string`[]; `introspection_endpoint_auth_signing_alg_values_supported?`: `string`[]; `introspection_signing_alg_values_supported?`: `string`[]; `issuer`: `string`; `jwks_uri?`: `string`; `mtls_endpoint_aliases?`: \{ \}; `op_policy_uri?`: `string`; `op_tos_uri?`: `string`; `pushed_authorization_request_endpoint?`: `string`; `registration_endpoint?`: `string`; `request_object_encryption_alg_values_supported?`: `string`[]; `request_object_encryption_enc_values_supported?`: `string`[]; `request_object_signing_alg_values_supported?`: `string`[]; `request_parameter_supported?`: `boolean`; `request_uri_parameter_supported?`: `boolean`; `require_pushed_authorization_requests?`: `boolean`; `require_request_uri_registration?`: `boolean`; `require_signed_request_object?`: `boolean`; `response_modes_supported?`: `string`[]; `response_types_supported?`: `string`[]; `revocation_endpoint?`: `string`; `revocation_endpoint_auth_methods_supported?`: `string`[]; `revocation_endpoint_auth_signing_alg_values_supported?`: `string`[]; `scopes_supported?`: `string`[]; `service_documentation?`: `string`; `signed_metadata?`: `string`; `subject_types_supported?`: `string`[]; `tls_client_certificate_bound_access_tokens?`: `boolean`; `token_endpoint?`: `string`; `token_endpoint_auth_methods_supported?`: `string`[]; `token_endpoint_auth_signing_alg_values_supported?`: `string`[]; `ui_locales_supported?`: `string`[]; `userinfo_encryption_alg_values_supported?`: `string`[]; `userinfo_encryption_enc_values_supported?`: `string`[]; `userinfo_endpoint?`: `string`; `userinfo_signing_alg_values_supported?`: `string`[]; \} | - |
| `authServerMeta.acr_values_supported?` | `string`[] | JSON array containing a list of the Authentication Context Class References that this authorization server supports. |
| `authServerMeta.authorization_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response encryption (`alg` value). |
| `authServerMeta.authorization_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response encryption (`enc` value). |
| `authServerMeta.authorization_endpoint?` | `string` | URL of the authorization server's authorization endpoint. |
| `authServerMeta.authorization_response_iss_parameter_supported?` | `boolean` | Boolean value indicating whether the authorization server provides the `iss` parameter in the authorization response. |
| `authServerMeta.authorization_signing_alg_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response signing. |
| `authServerMeta.backchannel_authentication_endpoint?` | `string` | CIBA Backchannel Authentication Endpoint. |
| `authServerMeta.backchannel_authentication_request_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS signing algorithms supported for validation of signed CIBA authentication requests. |
| `authServerMeta.backchannel_logout_session_supported?` | `boolean` | Boolean value specifying whether the authorization server can pass a `sid` (session ID) Claim in the Logout Token to identify the RP session with the OP. |
| `authServerMeta.backchannel_logout_supported?` | `boolean` | Boolean value specifying whether the authorization server supports back-channel logout. |
| `authServerMeta.backchannel_token_delivery_modes_supported?` | `string`[] | Supported CIBA authentication result delivery modes. |
| `authServerMeta.backchannel_user_code_parameter_supported?` | `boolean` | Indicates whether the authorization server supports the use of the CIBA `user_code` parameter. |
| `authServerMeta.check_session_iframe?` | `string` | URL of an authorization server iframe that supports cross-origin communications for session state information with the RP Client, using the HTML5 postMessage API. |
| `authServerMeta.claim_types_supported?` | `string`[] | JSON array containing a list of the Claim Types that the authorization server supports. |
| `authServerMeta.claims_locales_supported?` | `string`[] | Languages and scripts supported for values in Claims being returned, represented as a JSON array of RFC 5646 language tag values. |
| `authServerMeta.claims_parameter_supported?` | `boolean` | Boolean value specifying whether the authorization server supports use of the `claims` parameter. |
| `authServerMeta.claims_supported?` | `string`[] | JSON array containing a list of the Claim Names of the Claims that the authorization server MAY be able to supply values for. |
| `authServerMeta.code_challenge_methods_supported?` | `string`[] | PKCE code challenge methods supported by this authorization server. |
| `authServerMeta.device_authorization_endpoint?` | `string` | URL of the authorization server's device authorization endpoint. |
| `authServerMeta.display_values_supported?` | `string`[] | JSON array containing a list of the `display` parameter values that the authorization server supports. |
| `authServerMeta.dpop_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS algorithms supported for DPoP proof JWTs. |
| `authServerMeta.end_session_endpoint?` | `string` | URL at the authorization server to which an RP can perform a redirect to request that the End-User be logged out at the authorization server. |
| `authServerMeta.frontchannel_logout_session_supported?` | `boolean` | Boolean value specifying whether the authorization server can pass `iss` (issuer) and `sid` (session ID) query parameters to identify the RP session with the authorization server when the `frontchannel_logout_uri` is used. |
| `authServerMeta.frontchannel_logout_supported?` | `boolean` | Boolean value specifying whether the authorization server supports HTTP-based logout. |
| `authServerMeta.grant_types_supported?` | `string`[] | JSON array containing a list of the `grant_type` values that this authorization server supports. |
| `authServerMeta.id_token_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of the JWE `alg` values supported by the authorization server for the ID Token. |
| `authServerMeta.id_token_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of the JWE `enc` values supported by the authorization server for the ID Token. |
| `authServerMeta.id_token_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS `alg` values supported by the authorization server for the ID Token. |
| `authServerMeta.introspection_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response content key encryption (`alg` value). |
| `authServerMeta.introspection_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response content encryption (`enc` value). |
| `authServerMeta.introspection_endpoint?` | `string` | URL of the authorization server's introspection endpoint. |
| `authServerMeta.introspection_endpoint_auth_methods_supported?` | `string`[] | JSON array containing a list of client authentication methods supported by this introspection endpoint. |
| `authServerMeta.introspection_endpoint_auth_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS signing algorithms supported by the introspection endpoint for the signature on the JWT used to authenticate the client at the introspection endpoint. |
| `authServerMeta.introspection_signing_alg_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response signing. |
| `authServerMeta.issuer` | `string` | Authorization server's Issuer Identifier URL. |
| `authServerMeta.jwks_uri?` | `string` | URL of the authorization server's JWK Set document. |
| `authServerMeta.mtls_endpoint_aliases?` | \{ \} | JSON object containing alternative authorization server endpoints, which a client intending to do mutual TLS will use in preference to the conventional endpoints. |
| `authServerMeta.op_policy_uri?` | `string` | URL that the authorization server provides to the person registering the client to read about the authorization server's requirements on how the client can use the data provided by the authorization server. |
| `authServerMeta.op_tos_uri?` | `string` | URL that the authorization server provides to the person registering the client to read about the authorization server's terms of service. |
| `authServerMeta.pushed_authorization_request_endpoint?` | `string` | URL of the authorization server's pushed authorization request endpoint. |
| `authServerMeta.registration_endpoint?` | `string` | URL of the authorization server's Dynamic Client Registration Endpoint. |
| `authServerMeta.request_object_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of the JWE `alg` values supported by the authorization server for Request Objects. |
| `authServerMeta.request_object_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of the JWE `enc` values supported by the authorization server for Request Objects. |
| `authServerMeta.request_object_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS `alg` values supported by the authorization server for Request Objects. |
| `authServerMeta.request_parameter_supported?` | `boolean` | Boolean value specifying whether the authorization server supports use of the `request` parameter. |
| `authServerMeta.request_uri_parameter_supported?` | `boolean` | Boolean value specifying whether the authorization server supports use of the `request_uri` parameter. |
| `authServerMeta.require_pushed_authorization_requests?` | `boolean` | Indicates whether the authorization server accepts authorization requests only via PAR. |
| `authServerMeta.require_request_uri_registration?` | `boolean` | Boolean value specifying whether the authorization server requires any `request_uri` values used to be pre-registered. |
| `authServerMeta.require_signed_request_object?` | `boolean` | Indicates where authorization request needs to be protected as Request Object and provided through either `request` or `request_uri` parameter. |
| `authServerMeta.response_modes_supported?` | `string`[] | JSON array containing a list of the `response_mode` values that this authorization server supports. |
| `authServerMeta.response_types_supported?` | `string`[] | JSON array containing a list of the `response_type` values that this authorization server supports. |
| `authServerMeta.revocation_endpoint?` | `string` | URL of the authorization server's revocation endpoint. |
| `authServerMeta.revocation_endpoint_auth_methods_supported?` | `string`[] | JSON array containing a list of client authentication methods supported by this revocation endpoint. |
| `authServerMeta.revocation_endpoint_auth_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS signing algorithms supported by the revocation endpoint for the signature on the JWT used to authenticate the client at the revocation endpoint. |
| `authServerMeta.scopes_supported?` | `string`[] | JSON array containing a list of the `scope` values that this authorization server supports. |
| `authServerMeta.service_documentation?` | `string` | URL of a page containing human-readable information that developers might want or need to know when using the authorization server. |
| `authServerMeta.signed_metadata?` | `string` | Signed JWT containing metadata values about the authorization server as claims. |
| `authServerMeta.subject_types_supported?` | `string`[] | JSON array containing a list of the Subject Identifier types that this authorization server supports. |
| `authServerMeta.tls_client_certificate_bound_access_tokens?` | `boolean` | Indicates authorization server support for mutual-TLS client certificate-bound access tokens. |
| `authServerMeta.token_endpoint?` | `string` | URL of the authorization server's token endpoint. |
| `authServerMeta.token_endpoint_auth_methods_supported?` | `string`[] | JSON array containing a list of client authentication methods supported by this token endpoint. |
| `authServerMeta.token_endpoint_auth_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS signing algorithms supported by the token endpoint for the signature on the JWT used to authenticate the client at the token endpoint. |
| `authServerMeta.ui_locales_supported?` | `string`[] | Languages and scripts supported for the user interface, represented as a JSON array of language tag values from RFC 5646. |
| `authServerMeta.userinfo_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of the JWE `alg` values supported by the UserInfo Endpoint. |
| `authServerMeta.userinfo_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of the JWE `enc` values supported by the UserInfo Endpoint. |
| `authServerMeta.userinfo_endpoint?` | `string` | URL of the authorization server's UserInfo Endpoint. |
| `authServerMeta.userinfo_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS `alg` values supported by the UserInfo Endpoint. |
| `issuerMeta` | \{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \} | - |
| `issuerMeta.authorization_servers?` | `string`[] | - |
| `issuerMeta.batch_credential_endpoint?` | `string` | - |
| `issuerMeta.credential_configurations_supported` | \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \} | - |
| `issuerMeta.credential_endpoint` | `string` | - |
| `issuerMeta.credential_identifiers_supported?` | `boolean` | - |
| `issuerMeta.credential_issuer` | `string` | - |
| `issuerMeta.credential_response_encryption?` | \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \} | - |
| `issuerMeta.credential_response_encryption.alg_values_supported` | `string`[] | - |
| `issuerMeta.credential_response_encryption.enc_values_supported` | `string`[] | - |
| `issuerMeta.credential_response_encryption.encryption_required` | `boolean` | - |
| `issuerMeta.deferred_credential_endpoint?` | `string` | - |
| `issuerMeta.display?` | \{ \} | - |
| `issuerMeta.notification_endpoint?` | `string` | - |
| `issuerMeta.signed_metadata?` | `string` | - |

###### Returns

[`AuthorizationRequest`](#authorizationrequest)

#### Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="authservermeta"></a> `authServerMeta` | `readonly` | \{ `acr_values_supported?`: `string`[]; `authorization_encryption_alg_values_supported?`: `string`[]; `authorization_encryption_enc_values_supported?`: `string`[]; `authorization_endpoint?`: `string`; `authorization_response_iss_parameter_supported?`: `boolean`; `authorization_signing_alg_values_supported?`: `string`[]; `backchannel_authentication_endpoint?`: `string`; `backchannel_authentication_request_signing_alg_values_supported?`: `string`[]; `backchannel_logout_session_supported?`: `boolean`; `backchannel_logout_supported?`: `boolean`; `backchannel_token_delivery_modes_supported?`: `string`[]; `backchannel_user_code_parameter_supported?`: `boolean`; `check_session_iframe?`: `string`; `claim_types_supported?`: `string`[]; `claims_locales_supported?`: `string`[]; `claims_parameter_supported?`: `boolean`; `claims_supported?`: `string`[]; `code_challenge_methods_supported?`: `string`[]; `device_authorization_endpoint?`: `string`; `display_values_supported?`: `string`[]; `dpop_signing_alg_values_supported?`: `string`[]; `end_session_endpoint?`: `string`; `frontchannel_logout_session_supported?`: `boolean`; `frontchannel_logout_supported?`: `boolean`; `grant_types_supported?`: `string`[]; `id_token_encryption_alg_values_supported?`: `string`[]; `id_token_encryption_enc_values_supported?`: `string`[]; `id_token_signing_alg_values_supported?`: `string`[]; `introspection_encryption_alg_values_supported?`: `string`[]; `introspection_encryption_enc_values_supported?`: `string`[]; `introspection_endpoint?`: `string`; `introspection_endpoint_auth_methods_supported?`: `string`[]; `introspection_endpoint_auth_signing_alg_values_supported?`: `string`[]; `introspection_signing_alg_values_supported?`: `string`[]; `issuer`: `string`; `jwks_uri?`: `string`; `mtls_endpoint_aliases?`: \{ \}; `op_policy_uri?`: `string`; `op_tos_uri?`: `string`; `pushed_authorization_request_endpoint?`: `string`; `registration_endpoint?`: `string`; `request_object_encryption_alg_values_supported?`: `string`[]; `request_object_encryption_enc_values_supported?`: `string`[]; `request_object_signing_alg_values_supported?`: `string`[]; `request_parameter_supported?`: `boolean`; `request_uri_parameter_supported?`: `boolean`; `require_pushed_authorization_requests?`: `boolean`; `require_request_uri_registration?`: `boolean`; `require_signed_request_object?`: `boolean`; `response_modes_supported?`: `string`[]; `response_types_supported?`: `string`[]; `revocation_endpoint?`: `string`; `revocation_endpoint_auth_methods_supported?`: `string`[]; `revocation_endpoint_auth_signing_alg_values_supported?`: `string`[]; `scopes_supported?`: `string`[]; `service_documentation?`: `string`; `signed_metadata?`: `string`; `subject_types_supported?`: `string`[]; `tls_client_certificate_bound_access_tokens?`: `boolean`; `token_endpoint?`: `string`; `token_endpoint_auth_methods_supported?`: `string`[]; `token_endpoint_auth_signing_alg_values_supported?`: `string`[]; `ui_locales_supported?`: `string`[]; `userinfo_encryption_alg_values_supported?`: `string`[]; `userinfo_encryption_enc_values_supported?`: `string`[]; `userinfo_endpoint?`: `string`; `userinfo_signing_alg_values_supported?`: `string`[]; \} | `undefined` | - | [src/plugins/internal/oidc/protocols/AuthorizationRequest.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationRequest.ts#L14) |
| `authServerMeta.acr_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the Authentication Context Class References that this authorization server supports. | [src/plugins/internal/oidc/types.ts:354](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L354) |
| `authServerMeta.authorization_encryption_alg_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of algorithms supported by the authorization server for introspection response encryption (`alg` value). | [src/plugins/internal/oidc/types.ts:483](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L483) |
| `authServerMeta.authorization_encryption_enc_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of algorithms supported by the authorization server for introspection response encryption (`enc` value). | [src/plugins/internal/oidc/types.ts:488](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L488) |
| `authServerMeta.authorization_endpoint?` | `public` | `string` | `undefined` | URL of the authorization server's authorization endpoint. | [src/plugins/internal/oidc/types.ts:234](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L234) |
| `authServerMeta.authorization_response_iss_parameter_supported?` | `public` | `boolean` | `undefined` | Boolean value indicating whether the authorization server provides the `iss` parameter in the authorization response. | [src/plugins/internal/oidc/types.ts:473](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L473) |
| `authServerMeta.authorization_signing_alg_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of algorithms supported by the authorization server for introspection response signing. | [src/plugins/internal/oidc/types.ts:478](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L478) |
| `authServerMeta.backchannel_authentication_endpoint?` | `public` | `string` | `undefined` | CIBA Backchannel Authentication Endpoint. | [src/plugins/internal/oidc/types.ts:492](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L492) |
| `authServerMeta.backchannel_authentication_request_signing_alg_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the JWS signing algorithms supported for validation of signed CIBA authentication requests. | [src/plugins/internal/oidc/types.ts:497](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L497) |
| `authServerMeta.backchannel_logout_session_supported?` | `public` | `boolean` | `undefined` | Boolean value specifying whether the authorization server can pass a `sid` (session ID) Claim in the Logout Token to identify the RP session with the OP. | [src/plugins/internal/oidc/types.ts:534](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L534) |
| `authServerMeta.backchannel_logout_supported?` | `public` | `boolean` | `undefined` | Boolean value specifying whether the authorization server supports back-channel logout. | [src/plugins/internal/oidc/types.ts:538](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L538) |
| `authServerMeta.backchannel_token_delivery_modes_supported?` | `public` | `string`[] | `undefined` | Supported CIBA authentication result delivery modes. | [src/plugins/internal/oidc/types.ts:501](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L501) |
| `authServerMeta.backchannel_user_code_parameter_supported?` | `public` | `boolean` | `undefined` | Indicates whether the authorization server supports the use of the CIBA `user_code` parameter. | [src/plugins/internal/oidc/types.ts:505](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L505) |
| `authServerMeta.check_session_iframe?` | `public` | `string` | `undefined` | URL of an authorization server iframe that supports cross-origin communications for session state information with the RP Client, using the HTML5 postMessage API. | [src/plugins/internal/oidc/types.ts:510](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L510) |
| `authServerMeta.claim_types_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the Claim Types that the authorization server supports. | [src/plugins/internal/oidc/types.ts:410](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L410) |
| `authServerMeta.claims_locales_supported?` | `public` | `string`[] | `undefined` | Languages and scripts supported for values in Claims being returned, represented as a JSON array of RFC 5646 language tag values. | [src/plugins/internal/oidc/types.ts:420](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L420) |
| `authServerMeta.claims_parameter_supported?` | `public` | `boolean` | `undefined` | Boolean value specifying whether the authorization server supports use of the `claims` parameter. | [src/plugins/internal/oidc/types.ts:425](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L425) |
| `authServerMeta.claims_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the Claim Names of the Claims that the authorization server MAY be able to supply values for. | [src/plugins/internal/oidc/types.ts:415](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L415) |
| `authServerMeta.code_challenge_methods_supported?` | `public` | `string`[] | `undefined` | PKCE code challenge methods supported by this authorization server. | [src/plugins/internal/oidc/types.ts:328](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L328) |
| `authServerMeta.device_authorization_endpoint?` | `public` | `string` | `undefined` | URL of the authorization server's device authorization endpoint. | [src/plugins/internal/oidc/types.ts:336](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L336) |
| `authServerMeta.display_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the `display` parameter values that the authorization server supports. | [src/plugins/internal/oidc/types.ts:406](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L406) |
| `authServerMeta.dpop_signing_alg_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the JWS algorithms supported for DPoP proof JWTs. | [src/plugins/internal/oidc/types.ts:514](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L514) |
| `authServerMeta.end_session_endpoint?` | `public` | `string` | `undefined` | URL at the authorization server to which an RP can perform a redirect to request that the End-User be logged out at the authorization server. | [src/plugins/internal/oidc/types.ts:519](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L519) |
| `authServerMeta.frontchannel_logout_session_supported?` | `public` | `boolean` | `undefined` | Boolean value specifying whether the authorization server can pass `iss` (issuer) and `sid` (session ID) query parameters to identify the RP session with the authorization server when the `frontchannel_logout_uri` is used. | [src/plugins/internal/oidc/types.ts:525](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L525) |
| `authServerMeta.frontchannel_logout_supported?` | `public` | `boolean` | `undefined` | Boolean value specifying whether the authorization server supports HTTP-based logout. | [src/plugins/internal/oidc/types.ts:529](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L529) |
| `authServerMeta.grant_types_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the `grant_type` values that this authorization server supports. | [src/plugins/internal/oidc/types.ts:265](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L265) |
| `authServerMeta.id_token_encryption_alg_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the JWE `alg` values supported by the authorization server for the ID Token. | [src/plugins/internal/oidc/types.ts:369](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L369) |
| `authServerMeta.id_token_encryption_enc_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the JWE `enc` values supported by the authorization server for the ID Token. | [src/plugins/internal/oidc/types.ts:374](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L374) |
| `authServerMeta.id_token_signing_alg_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the JWS `alg` values supported by the authorization server for the ID Token. | [src/plugins/internal/oidc/types.ts:364](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L364) |
| `authServerMeta.introspection_encryption_alg_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of algorithms supported by the authorization server for introspection response content key encryption (`alg` value). | [src/plugins/internal/oidc/types.ts:463](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L463) |
| `authServerMeta.introspection_encryption_enc_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of algorithms supported by the authorization server for introspection response content encryption (`enc` value). | [src/plugins/internal/oidc/types.ts:468](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L468) |
| `authServerMeta.introspection_endpoint?` | `public` | `string` | `undefined` | URL of the authorization server's introspection endpoint. | [src/plugins/internal/oidc/types.ts:313](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L313) |
| `authServerMeta.introspection_endpoint_auth_methods_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of client authentication methods supported by this introspection endpoint. | [src/plugins/internal/oidc/types.ts:318](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L318) |
| `authServerMeta.introspection_endpoint_auth_signing_alg_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the JWS signing algorithms supported by the introspection endpoint for the signature on the JWT used to authenticate the client at the introspection endpoint. | [src/plugins/internal/oidc/types.ts:324](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L324) |
| `authServerMeta.introspection_signing_alg_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of algorithms supported by the authorization server for introspection response signing. | [src/plugins/internal/oidc/types.ts:458](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L458) |
| `authServerMeta.issuer` | `public` | `string` | `undefined` | Authorization server's Issuer Identifier URL. | [src/plugins/internal/oidc/types.ts:230](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L230) |
| `authServerMeta.jwks_uri?` | `public` | `string` | `undefined` | URL of the authorization server's JWK Set document. | [src/plugins/internal/oidc/types.ts:242](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L242) |
| `authServerMeta.mtls_endpoint_aliases?` | `public` | \{ \} | `undefined` | JSON object containing alternative authorization server endpoints, which a client intending to do mutual TLS will use in preference to the conventional endpoints. | [src/plugins/internal/oidc/types.ts:345](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L345) |
| `authServerMeta.op_policy_uri?` | `public` | `string` | `undefined` | URL that the authorization server provides to the person registering the client to read about the authorization server's requirements on how the client can use the data provided by the authorization server. | [src/plugins/internal/oidc/types.ts:290](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L290) |
| `authServerMeta.op_tos_uri?` | `public` | `string` | `undefined` | URL that the authorization server provides to the person registering the client to read about the authorization server's terms of service. | [src/plugins/internal/oidc/types.ts:295](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L295) |
| `authServerMeta.pushed_authorization_request_endpoint?` | `public` | `string` | `undefined` | URL of the authorization server's pushed authorization request endpoint. | [src/plugins/internal/oidc/types.ts:449](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L449) |
| `authServerMeta.registration_endpoint?` | `public` | `string` | `undefined` | URL of the authorization server's Dynamic Client Registration Endpoint. | [src/plugins/internal/oidc/types.ts:246](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L246) |
| `authServerMeta.request_object_encryption_alg_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the JWE `alg` values supported by the authorization server for Request Objects. | [src/plugins/internal/oidc/types.ts:396](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L396) |
| `authServerMeta.request_object_encryption_enc_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the JWE `enc` values supported by the authorization server for Request Objects. | [src/plugins/internal/oidc/types.ts:401](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L401) |
| `authServerMeta.request_object_signing_alg_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the JWS `alg` values supported by the authorization server for Request Objects. | [src/plugins/internal/oidc/types.ts:391](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L391) |
| `authServerMeta.request_parameter_supported?` | `public` | `boolean` | `undefined` | Boolean value specifying whether the authorization server supports use of the `request` parameter. | [src/plugins/internal/oidc/types.ts:430](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L430) |
| `authServerMeta.request_uri_parameter_supported?` | `public` | `boolean` | `undefined` | Boolean value specifying whether the authorization server supports use of the `request_uri` parameter. | [src/plugins/internal/oidc/types.ts:435](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L435) |
| `authServerMeta.require_pushed_authorization_requests?` | `public` | `boolean` | `undefined` | Indicates whether the authorization server accepts authorization requests only via PAR. | [src/plugins/internal/oidc/types.ts:453](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L453) |
| `authServerMeta.require_request_uri_registration?` | `public` | `boolean` | `undefined` | Boolean value specifying whether the authorization server requires any `request_uri` values used to be pre-registered. | [src/plugins/internal/oidc/types.ts:440](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L440) |
| `authServerMeta.require_signed_request_object?` | `public` | `boolean` | `undefined` | Indicates where authorization request needs to be protected as Request Object and provided through either `request` or `request_uri` parameter. | [src/plugins/internal/oidc/types.ts:445](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L445) |
| `authServerMeta.response_modes_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the `response_mode` values that this authorization server supports. | [src/plugins/internal/oidc/types.ts:260](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L260) |
| `authServerMeta.response_types_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the `response_type` values that this authorization server supports. | [src/plugins/internal/oidc/types.ts:255](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L255) |
| `authServerMeta.revocation_endpoint?` | `public` | `string` | `undefined` | URL of the authorization server's revocation endpoint. | [src/plugins/internal/oidc/types.ts:299](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L299) |
| `authServerMeta.revocation_endpoint_auth_methods_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of client authentication methods supported by this revocation endpoint. | [src/plugins/internal/oidc/types.ts:304](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L304) |
| `authServerMeta.revocation_endpoint_auth_signing_alg_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the JWS signing algorithms supported by the revocation endpoint for the signature on the JWT used to authenticate the client at the revocation endpoint. | [src/plugins/internal/oidc/types.ts:309](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L309) |
| `authServerMeta.scopes_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the `scope` values that this authorization server supports. | [src/plugins/internal/oidc/types.ts:250](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L250) |
| `authServerMeta.service_documentation?` | `public` | `string` | `undefined` | URL of a page containing human-readable information that developers might want or need to know when using the authorization server. | [src/plugins/internal/oidc/types.ts:279](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L279) |
| `authServerMeta.signed_metadata?` | `public` | `string` | `undefined` | Signed JWT containing metadata values about the authorization server as claims. | [src/plugins/internal/oidc/types.ts:332](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L332) |
| `authServerMeta.subject_types_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the Subject Identifier types that this authorization server supports. | [src/plugins/internal/oidc/types.ts:359](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L359) |
| `authServerMeta.tls_client_certificate_bound_access_tokens?` | `public` | `boolean` | `undefined` | Indicates authorization server support for mutual-TLS client certificate-bound access tokens. | [src/plugins/internal/oidc/types.ts:340](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L340) |
| `authServerMeta.token_endpoint?` | `public` | `string` | `undefined` | URL of the authorization server's token endpoint. | [src/plugins/internal/oidc/types.ts:238](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L238) |
| `authServerMeta.token_endpoint_auth_methods_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of client authentication methods supported by this token endpoint. | [src/plugins/internal/oidc/types.ts:269](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L269) |
| `authServerMeta.token_endpoint_auth_signing_alg_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the JWS signing algorithms supported by the token endpoint for the signature on the JWT used to authenticate the client at the token endpoint. | [src/plugins/internal/oidc/types.ts:274](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L274) |
| `authServerMeta.ui_locales_supported?` | `public` | `string`[] | `undefined` | Languages and scripts supported for the user interface, represented as a JSON array of language tag values from RFC 5646. | [src/plugins/internal/oidc/types.ts:284](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L284) |
| `authServerMeta.userinfo_encryption_alg_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the JWE `alg` values supported by the UserInfo Endpoint. | [src/plugins/internal/oidc/types.ts:382](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L382) |
| `authServerMeta.userinfo_encryption_enc_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the JWE `enc` values supported by the UserInfo Endpoint. | [src/plugins/internal/oidc/types.ts:386](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L386) |
| `authServerMeta.userinfo_endpoint?` | `public` | `string` | `undefined` | URL of the authorization server's UserInfo Endpoint. | [src/plugins/internal/oidc/types.ts:349](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L349) |
| `authServerMeta.userinfo_signing_alg_values_supported?` | `public` | `string`[] | `undefined` | JSON array containing a list of the JWS `alg` values supported by the UserInfo Endpoint. | [src/plugins/internal/oidc/types.ts:378](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L378) |
| <a id="issuermeta"></a> `issuerMeta` | `readonly` | \{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \} | `undefined` | - | [src/plugins/internal/oidc/protocols/AuthorizationRequest.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationRequest.ts#L15) |
| `issuerMeta.authorization_servers?` | `public` | `string`[] | `undefined` | - | [src/plugins/internal/oidc/types.ts:86](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L86) |
| `issuerMeta.batch_credential_endpoint?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:95](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L95) |
| `issuerMeta.credential_configurations_supported` | `public` | \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \} | `undefined` | - | [src/plugins/internal/oidc/types.ts:111](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L111) |
| `issuerMeta.credential_endpoint` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:90](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L90) |
| `issuerMeta.credential_identifiers_supported?` | `public` | `boolean` | `undefined` | - | [src/plugins/internal/oidc/types.ts:175](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L175) |
| `issuerMeta.credential_issuer` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:80](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L80) |
| `issuerMeta.credential_response_encryption?` | `public` | \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \} | `undefined` | - | [src/plugins/internal/oidc/types.ts:155](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L155) |
| `issuerMeta.credential_response_encryption.alg_values_supported` | `public` | `string`[] | `undefined` | - | [src/plugins/internal/oidc/types.ts:159](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L159) |
| `issuerMeta.credential_response_encryption.enc_values_supported` | `public` | `string`[] | `undefined` | - | [src/plugins/internal/oidc/types.ts:163](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L163) |
| `issuerMeta.credential_response_encryption.encryption_required` | `public` | `boolean` | `undefined` | - | [src/plugins/internal/oidc/types.ts:169](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L169) |
| `issuerMeta.deferred_credential_endpoint?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:100](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L100) |
| `issuerMeta.display?` | `public` | \{ \} | `undefined` | - | [src/plugins/internal/oidc/types.ts:178](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L178) |
| `issuerMeta.notification_endpoint?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:105](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L105) |
| `issuerMeta.signed_metadata?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:108](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L108) |
| <a id="meta"></a> `meta` | `readonly` | [`AuthorizationRequestMetadata`](#authorizationrequestmetadata) | `{}` | - | [src/plugins/internal/oidc/protocols/AuthorizationRequest.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationRequest.ts#L11) |
| <a id="url"></a> `url` | `public` | `URL` | `undefined` | - | [src/plugins/internal/oidc/protocols/AuthorizationRequest.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationRequest.ts#L10) |

#### Accessors

##### params

###### Get Signature

> **get** **params**(): `URLSearchParams`

Defined in: [src/plugins/internal/oidc/protocols/AuthorizationRequest.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationRequest.ts#L21)

###### Returns

`URLSearchParams`

#### Methods

##### setCodeChallenge()

> **setCodeChallenge**(`method`: `"S256"`, `challenge`: `string`, `verifier`: `string`): `void`

Defined in: [src/plugins/internal/oidc/protocols/AuthorizationRequest.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationRequest.ts#L25)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `"S256"` |
| `challenge` | `string` |
| `verifier` | `string` |

###### Returns

`void`

##### setNonce()

> **setNonce**(`nonce`: `string`): `void`

Defined in: [src/plugins/internal/oidc/protocols/AuthorizationRequest.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationRequest.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `nonce` | `string` |

###### Returns

`void`

***

### AuthorizationResponse

Defined in: [src/plugins/internal/oidc/protocols/AuthorizationResponse.ts:1](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts#L1)

#### Constructors

##### Constructor

> **new AuthorizationResponse**(`callbackUrl`: `string` \| `URL`, `code`: `string`): [`AuthorizationResponse`](#authorizationresponse)

Defined in: [src/plugins/internal/oidc/protocols/AuthorizationResponse.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts#L5)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `callbackUrl` | `string` \| `URL` |
| `code` | `string` |

###### Returns

[`AuthorizationResponse`](#authorizationresponse)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="code"></a> `code` | `readonly` | `string` | [src/plugins/internal/oidc/protocols/AuthorizationResponse.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts#L3) |
| <a id="url-1"></a> `url` | `readonly` | `URL` | [src/plugins/internal/oidc/protocols/AuthorizationResponse.ts:2](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts#L2) |

#### Accessors

##### issuer

###### Get Signature

> **get** **issuer**(): `null` \| `string`

Defined in: [src/plugins/internal/oidc/protocols/AuthorizationResponse.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts#L18)

###### Returns

`null` \| `string`

##### params

###### Get Signature

> **get** **params**(): `URLSearchParams`

Defined in: [src/plugins/internal/oidc/protocols/AuthorizationResponse.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts#L13)

###### Returns

`URLSearchParams`

##### state

###### Get Signature

> **get** **state**(): `null` \| `string`

Defined in: [src/plugins/internal/oidc/protocols/AuthorizationResponse.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts#L22)

###### Returns

`null` \| `string`

***

### CreateAuthorizationRequest

Defined in: [src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts#L29)

manage the creation of an Authorization Request

#### Param

#### Param

#### Param

#### Param

#### Param

#### Param

#### Extends

- [`Task`](../../../overview/namespaces/Utils/README.md#task)\<[`AuthorizationRequest`](#authorizationrequest), [`CreateAuthorizationRequestArgs`](#createauthorizationrequestargs)\>

#### Constructors

##### Constructor

> **new CreateAuthorizationRequest**(...`args`: \[[`CreateAuthorizationRequestArgs`](#createauthorizationrequestargs)\]): [`CreateAuthorizationRequest`](#createauthorizationrequest)

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L18)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`CreateAuthorizationRequestArgs`](#createauthorizationrequestargs)\] |  |

###### Returns

[`CreateAuthorizationRequest`](#createauthorizationrequest)

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`constructor`](../../../overview/namespaces/Utils/README.md#task#constructor-1)

#### Methods

##### log()

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L26)

###### Returns

`unknown`

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`log`](../../../overview/namespaces/Utils/README.md#task#log)

##### run()

> **run**(): `Promise`\<[`AuthorizationRequest`](#authorizationrequest)\>

Defined in: [src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts#L30)

###### Returns

`Promise`\<[`AuthorizationRequest`](#authorizationrequest)\>

###### Overrides

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`run`](../../../overview/namespaces/Utils/README.md#task#run)

***

### CreateCredentialRequest

Defined in: [src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts#L26)

create a CredentialRequest for the given offer
a connection with the relevant Issuer must have already been established

#### Param

#### Param

#### Param

#### Extends

- [`Task`](../../../overview/namespaces/Utils/README.md#task)\<[`CredentialRequest`](#credentialrequest), [`CreateCredentialRequestArgs`](#createcredentialrequestargs)\>

#### Constructors

##### Constructor

> **new CreateCredentialRequest**(...`args`: \[[`CreateCredentialRequestArgs`](#createcredentialrequestargs)\]): [`CreateCredentialRequest`](#createcredentialrequest)

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L18)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`CreateCredentialRequestArgs`](#createcredentialrequestargs)\] |  |

###### Returns

[`CreateCredentialRequest`](#createcredentialrequest)

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`constructor`](../../../overview/namespaces/Utils/README.md#task#constructor-1)

#### Methods

##### log()

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L26)

###### Returns

`unknown`

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`log`](../../../overview/namespaces/Utils/README.md#task#log)

##### run()

> **run**(`ctx`: [`Context`](#context)): `Promise`\<[`CredentialRequest`](#credentialrequest)\>

Defined in: [src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts#L27)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](#context) |

###### Returns

`Promise`\<[`CredentialRequest`](#credentialrequest)\>

###### Overrides

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`run`](../../../overview/namespaces/Utils/README.md#task#run)

***

### CredentialRequest

Defined in: [src/plugins/internal/oidc/protocols/CredentialRequest.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/CredentialRequest.ts#L5)

#### Extends

- [`ApiRequest`](../../../overview/namespaces/Domain/README.md#apirequest)

#### Constructors

##### Constructor

> **new CredentialRequest**(`endpoint`: `string` \| `URL`, `body`: [`JsonObj`](../../../overview/namespaces/Utils/README.md#jsonobj)): [`CredentialRequest`](#credentialrequest)

Defined in: [src/plugins/internal/oidc/protocols/CredentialRequest.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/CredentialRequest.ts#L8)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `endpoint` | `string` \| `URL` |
| `body` | [`JsonObj`](../../../overview/namespaces/Utils/README.md#jsonobj) |

###### Returns

[`CredentialRequest`](#credentialrequest)

###### Overrides

[`ApiRequest`](../../../overview/namespaces/Domain/README.md#apirequest).[`constructor`](../../../overview/namespaces/Domain/README.md#apirequest#constructor-1)

#### Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="body"></a> `body?` | `public` | `string` \| [`JsonObj`](../../../overview/namespaces/Utils/README.md#jsonobj) | `undefined` | [`ApiRequest`](../../../overview/namespaces/Domain/README.md#apirequest).[`body`](../../../overview/namespaces/Domain/README.md#apirequest#body-1) | [src/domain/models/Api.ts:40](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L40) |
| <a id="headers"></a> `headers` | `readonly` | `Headers` | `undefined` | [`ApiRequest`](../../../overview/namespaces/Domain/README.md#apirequest).[`headers`](../../../overview/namespaces/Domain/README.md#apirequest#headers) | [src/domain/models/Api.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L37) |
| <a id="method"></a> `method` | `public` | [`HttpMethod`](../../../overview/namespaces/Domain/README.md#httpmethod) | `"GET"` | [`ApiRequest`](../../../overview/namespaces/Domain/README.md#apirequest).[`method`](../../../overview/namespaces/Domain/README.md#apirequest#method) | [src/domain/models/Api.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L39) |
| <a id="params-2"></a> `params` | `readonly` | `URLSearchParams` | `undefined` | [`ApiRequest`](../../../overview/namespaces/Domain/README.md#apirequest).[`params`](../../../overview/namespaces/Domain/README.md#apirequest#params) | [src/domain/models/Api.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L38) |
| <a id="protocolid"></a> `ProtocolId` | `readonly` | `"OIDC_V1/CREDENTIAL_REQUEST"` | `Protocols.CredentialRequest` | - | [src/plugins/internal/oidc/protocols/CredentialRequest.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/CredentialRequest.ts#L6) |
| <a id="url-2"></a> `url` | `readonly` | `URL` | `undefined` | [`ApiRequest`](../../../overview/namespaces/Domain/README.md#apirequest).[`url`](../../../overview/namespaces/Domain/README.md#apirequest#url) | [src/domain/models/Api.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L42) |

***

### FetchAuthServerMeta

Defined in: [src/plugins/internal/oidc/tasks/FetchAuthServerMeta.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/FetchAuthServerMeta.ts#L18)

try to retrieve Authorization Server Metadata from the give URI
`/.well-known/openid-configuration` will be appended to the URI

#### Param

#### Extends

- [`Task`](../../../overview/namespaces/Utils/README.md#task)\<[`ApiResponse`](../../../overview/namespaces/Domain/README.md#apiresponse)\<[`AuthServerMetadata`](#authservermetadata)\>, [`FetchAuthServerMetaArgs`](#fetchauthservermetaargs)\>

#### Constructors

##### Constructor

> **new FetchAuthServerMeta**(...`args`: \[[`FetchAuthServerMetaArgs`](#fetchauthservermetaargs)\]): [`FetchAuthServerMeta`](#fetchauthservermeta)

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L18)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`FetchAuthServerMetaArgs`](#fetchauthservermetaargs)\] |  |

###### Returns

[`FetchAuthServerMeta`](#fetchauthservermeta)

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`constructor`](../../../overview/namespaces/Utils/README.md#task#constructor-1)

#### Methods

##### log()

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L26)

###### Returns

`unknown`

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`log`](../../../overview/namespaces/Utils/README.md#task#log)

##### run()

> **run**(`ctx`: [`Context`](#context)): `Promise`\<[`ApiResponse`](../../../overview/namespaces/Domain/README.md#apiresponse)\<\{ `acr_values_supported?`: `string`[]; `authorization_encryption_alg_values_supported?`: `string`[]; `authorization_encryption_enc_values_supported?`: `string`[]; `authorization_endpoint?`: `string`; `authorization_response_iss_parameter_supported?`: `boolean`; `authorization_signing_alg_values_supported?`: `string`[]; `backchannel_authentication_endpoint?`: `string`; `backchannel_authentication_request_signing_alg_values_supported?`: `string`[]; `backchannel_logout_session_supported?`: `boolean`; `backchannel_logout_supported?`: `boolean`; `backchannel_token_delivery_modes_supported?`: `string`[]; `backchannel_user_code_parameter_supported?`: `boolean`; `check_session_iframe?`: `string`; `claim_types_supported?`: `string`[]; `claims_locales_supported?`: `string`[]; `claims_parameter_supported?`: `boolean`; `claims_supported?`: `string`[]; `code_challenge_methods_supported?`: `string`[]; `device_authorization_endpoint?`: `string`; `display_values_supported?`: `string`[]; `dpop_signing_alg_values_supported?`: `string`[]; `end_session_endpoint?`: `string`; `frontchannel_logout_session_supported?`: `boolean`; `frontchannel_logout_supported?`: `boolean`; `grant_types_supported?`: `string`[]; `id_token_encryption_alg_values_supported?`: `string`[]; `id_token_encryption_enc_values_supported?`: `string`[]; `id_token_signing_alg_values_supported?`: `string`[]; `introspection_encryption_alg_values_supported?`: `string`[]; `introspection_encryption_enc_values_supported?`: `string`[]; `introspection_endpoint?`: `string`; `introspection_endpoint_auth_methods_supported?`: `string`[]; `introspection_endpoint_auth_signing_alg_values_supported?`: `string`[]; `introspection_signing_alg_values_supported?`: `string`[]; `issuer`: `string`; `jwks_uri?`: `string`; `mtls_endpoint_aliases?`: \{ \}; `op_policy_uri?`: `string`; `op_tos_uri?`: `string`; `pushed_authorization_request_endpoint?`: `string`; `registration_endpoint?`: `string`; `request_object_encryption_alg_values_supported?`: `string`[]; `request_object_encryption_enc_values_supported?`: `string`[]; `request_object_signing_alg_values_supported?`: `string`[]; `request_parameter_supported?`: `boolean`; `request_uri_parameter_supported?`: `boolean`; `require_pushed_authorization_requests?`: `boolean`; `require_request_uri_registration?`: `boolean`; `require_signed_request_object?`: `boolean`; `response_modes_supported?`: `string`[]; `response_types_supported?`: `string`[]; `revocation_endpoint?`: `string`; `revocation_endpoint_auth_methods_supported?`: `string`[]; `revocation_endpoint_auth_signing_alg_values_supported?`: `string`[]; `scopes_supported?`: `string`[]; `service_documentation?`: `string`; `signed_metadata?`: `string`; `subject_types_supported?`: `string`[]; `tls_client_certificate_bound_access_tokens?`: `boolean`; `token_endpoint?`: `string`; `token_endpoint_auth_methods_supported?`: `string`[]; `token_endpoint_auth_signing_alg_values_supported?`: `string`[]; `ui_locales_supported?`: `string`[]; `userinfo_encryption_alg_values_supported?`: `string`[]; `userinfo_encryption_enc_values_supported?`: `string`[]; `userinfo_endpoint?`: `string`; `userinfo_signing_alg_values_supported?`: `string`[]; \}\>\>

Defined in: [src/plugins/internal/oidc/tasks/FetchAuthServerMeta.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/FetchAuthServerMeta.ts#L19)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](#context) |

###### Returns

`Promise`\<[`ApiResponse`](../../../overview/namespaces/Domain/README.md#apiresponse)\<\{ `acr_values_supported?`: `string`[]; `authorization_encryption_alg_values_supported?`: `string`[]; `authorization_encryption_enc_values_supported?`: `string`[]; `authorization_endpoint?`: `string`; `authorization_response_iss_parameter_supported?`: `boolean`; `authorization_signing_alg_values_supported?`: `string`[]; `backchannel_authentication_endpoint?`: `string`; `backchannel_authentication_request_signing_alg_values_supported?`: `string`[]; `backchannel_logout_session_supported?`: `boolean`; `backchannel_logout_supported?`: `boolean`; `backchannel_token_delivery_modes_supported?`: `string`[]; `backchannel_user_code_parameter_supported?`: `boolean`; `check_session_iframe?`: `string`; `claim_types_supported?`: `string`[]; `claims_locales_supported?`: `string`[]; `claims_parameter_supported?`: `boolean`; `claims_supported?`: `string`[]; `code_challenge_methods_supported?`: `string`[]; `device_authorization_endpoint?`: `string`; `display_values_supported?`: `string`[]; `dpop_signing_alg_values_supported?`: `string`[]; `end_session_endpoint?`: `string`; `frontchannel_logout_session_supported?`: `boolean`; `frontchannel_logout_supported?`: `boolean`; `grant_types_supported?`: `string`[]; `id_token_encryption_alg_values_supported?`: `string`[]; `id_token_encryption_enc_values_supported?`: `string`[]; `id_token_signing_alg_values_supported?`: `string`[]; `introspection_encryption_alg_values_supported?`: `string`[]; `introspection_encryption_enc_values_supported?`: `string`[]; `introspection_endpoint?`: `string`; `introspection_endpoint_auth_methods_supported?`: `string`[]; `introspection_endpoint_auth_signing_alg_values_supported?`: `string`[]; `introspection_signing_alg_values_supported?`: `string`[]; `issuer`: `string`; `jwks_uri?`: `string`; `mtls_endpoint_aliases?`: \{ \}; `op_policy_uri?`: `string`; `op_tos_uri?`: `string`; `pushed_authorization_request_endpoint?`: `string`; `registration_endpoint?`: `string`; `request_object_encryption_alg_values_supported?`: `string`[]; `request_object_encryption_enc_values_supported?`: `string`[]; `request_object_signing_alg_values_supported?`: `string`[]; `request_parameter_supported?`: `boolean`; `request_uri_parameter_supported?`: `boolean`; `require_pushed_authorization_requests?`: `boolean`; `require_request_uri_registration?`: `boolean`; `require_signed_request_object?`: `boolean`; `response_modes_supported?`: `string`[]; `response_types_supported?`: `string`[]; `revocation_endpoint?`: `string`; `revocation_endpoint_auth_methods_supported?`: `string`[]; `revocation_endpoint_auth_signing_alg_values_supported?`: `string`[]; `scopes_supported?`: `string`[]; `service_documentation?`: `string`; `signed_metadata?`: `string`; `subject_types_supported?`: `string`[]; `tls_client_certificate_bound_access_tokens?`: `boolean`; `token_endpoint?`: `string`; `token_endpoint_auth_methods_supported?`: `string`[]; `token_endpoint_auth_signing_alg_values_supported?`: `string`[]; `ui_locales_supported?`: `string`[]; `userinfo_encryption_alg_values_supported?`: `string`[]; `userinfo_encryption_enc_values_supported?`: `string`[]; `userinfo_endpoint?`: `string`; `userinfo_signing_alg_values_supported?`: `string`[]; \}\>\>

###### Overrides

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`run`](../../../overview/namespaces/Utils/README.md#task#run)

***

### FetchIssuerMetadata

Defined in: [src/plugins/internal/oidc/tasks/FetchIssuerMetadata.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/FetchIssuerMetadata.ts#L18)

try to retrieve Issuer Metadata from the given URI
`/.well-known/openid-credential-issuer` will be appended to the uri

#### See

[OIDC Issuer Metadata](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html#name-credential-issuer-metadata)

#### Param

#### Extends

- [`Task`](../../../overview/namespaces/Utils/README.md#task)\<[`IssuerMetadata`](#issuermetadata), [`FetchIssuerMetadataArgs`](#fetchissuermetadataargs)\>

#### Constructors

##### Constructor

> **new FetchIssuerMetadata**(...`args`: \[[`FetchIssuerMetadataArgs`](#fetchissuermetadataargs)\]): [`FetchIssuerMetadata`](#fetchissuermetadata)

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L18)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`FetchIssuerMetadataArgs`](#fetchissuermetadataargs)\] |  |

###### Returns

[`FetchIssuerMetadata`](#fetchissuermetadata)

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`constructor`](../../../overview/namespaces/Utils/README.md#task#constructor-1)

#### Methods

##### log()

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L26)

###### Returns

`unknown`

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`log`](../../../overview/namespaces/Utils/README.md#task#log)

##### run()

> **run**(`ctx`: [`Context`](#context)): `Promise`\<\{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \}\>

Defined in: [src/plugins/internal/oidc/tasks/FetchIssuerMetadata.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/FetchIssuerMetadata.ts#L19)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](#context) |

###### Returns

`Promise`\<\{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \}\>

###### Overrides

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`run`](../../../overview/namespaces/Utils/README.md#task#run)

***

### OIDCConnection

Defined in: [src/plugins/internal/oidc/connection/OIDCConnection.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/OIDCConnection.ts#L7)

Define the structure of a Connection

Connections are used to capture Protocol specific behaviours and metadata

#### Implements

- [`Connection`](../../../overview/README.md#connection-1)

#### Constructors

##### Constructor

> **new OIDCConnection**(`issuerMeta`: \{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \}, `scopes`: `string`[]): [`OIDCConnection`](#oidcconnection)

Defined in: [src/plugins/internal/oidc/connection/OIDCConnection.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/OIDCConnection.ts#L12)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `issuerMeta` | \{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \} |
| `issuerMeta.authorization_servers?` | `string`[] |
| `issuerMeta.batch_credential_endpoint?` | `string` |
| `issuerMeta.credential_configurations_supported` | \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \} |
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

###### Returns

[`OIDCConnection`](#oidcconnection)

#### Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="issuermeta-1"></a> `issuerMeta` | `readonly` | \{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \} | `undefined` | - | [src/plugins/internal/oidc/connection/OIDCConnection.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/OIDCConnection.ts#L13) |
| `issuerMeta.authorization_servers?` | `public` | `string`[] | `undefined` | - | [src/plugins/internal/oidc/types.ts:86](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L86) |
| `issuerMeta.batch_credential_endpoint?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:95](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L95) |
| `issuerMeta.credential_configurations_supported` | `public` | \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \} | `undefined` | - | [src/plugins/internal/oidc/types.ts:111](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L111) |
| `issuerMeta.credential_endpoint` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:90](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L90) |
| `issuerMeta.credential_identifiers_supported?` | `public` | `boolean` | `undefined` | - | [src/plugins/internal/oidc/types.ts:175](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L175) |
| `issuerMeta.credential_issuer` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:80](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L80) |
| `issuerMeta.credential_response_encryption?` | `public` | \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \} | `undefined` | - | [src/plugins/internal/oidc/types.ts:155](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L155) |
| `issuerMeta.credential_response_encryption.alg_values_supported` | `public` | `string`[] | `undefined` | - | [src/plugins/internal/oidc/types.ts:159](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L159) |
| `issuerMeta.credential_response_encryption.enc_values_supported` | `public` | `string`[] | `undefined` | - | [src/plugins/internal/oidc/types.ts:163](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L163) |
| `issuerMeta.credential_response_encryption.encryption_required` | `public` | `boolean` | `undefined` | - | [src/plugins/internal/oidc/types.ts:169](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L169) |
| `issuerMeta.deferred_credential_endpoint?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:100](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L100) |
| `issuerMeta.display?` | `public` | \{ \} | `undefined` | - | [src/plugins/internal/oidc/types.ts:178](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L178) |
| `issuerMeta.notification_endpoint?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:105](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L105) |
| `issuerMeta.signed_metadata?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:108](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L108) |
| <a id="scopes"></a> `scopes` | `readonly` | `string`[] | `undefined` | - | [src/plugins/internal/oidc/connection/OIDCConnection.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/OIDCConnection.ts#L14) |
| <a id="state-1"></a> `state` | `public` | [`State`](../../../overview/namespaces/Connection.md#state) | `Connection.State.NEW` | current condition of the connection | [src/plugins/internal/oidc/connection/OIDCConnection.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/OIDCConnection.ts#L8) |
| <a id="tokenresponse"></a> `tokenResponse?` | `public` | \{ `access_token`: `string`; `c_nonce?`: `string`; `c_nonce_expires_in?`: `number`; `expires_in?`: `number`; `id_token?`: `string`; `refresh_expires_in?`: `number`; `refresh_token?`: `string`; `scope?`: `string`; `session_state?`: `string`; `token_type`: `string`; \} | `undefined` | - | [src/plugins/internal/oidc/connection/OIDCConnection.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/OIDCConnection.ts#L9) |
| `tokenResponse.access_token` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:545](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L545) |
| `tokenResponse.c_nonce?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:548](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L548) |
| `tokenResponse.c_nonce_expires_in?` | `public` | `number` | `undefined` | - | [src/plugins/internal/oidc/types.ts:549](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L549) |
| `tokenResponse.expires_in?` | `public` | `number` | `undefined` | - | [src/plugins/internal/oidc/types.ts:547](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L547) |
| `tokenResponse.id_token?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:552](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L552) |
| `tokenResponse.refresh_expires_in?` | `public` | `number` | `undefined` | - | [src/plugins/internal/oidc/types.ts:551](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L551) |
| `tokenResponse.refresh_token?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:550](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L550) |
| `tokenResponse.scope?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:553](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L553) |
| `tokenResponse.session_state?` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:554](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L554) |
| `tokenResponse.token_type` | `public` | `string` | `undefined` | - | [src/plugins/internal/oidc/types.ts:546](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L546) |
| <a id="uri"></a> `uri` | `readonly` | `string` | `undefined` | unique identifer for the connection | [src/plugins/internal/oidc/connection/OIDCConnection.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/OIDCConnection.ts#L10) |

#### Methods

##### send()

> **send**(`request`: `any`, `ctx`: [`Context`](#context)): `Promise`\<`undefined` \| [`ApiResponse`](../../../overview/namespaces/Domain/README.md#apiresponse)\<`unknown`\>\>

Defined in: [src/plugins/internal/oidc/connection/OIDCConnection.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/OIDCConnection.ts#L19)

handle delivering a Message to the connected entity

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `any` |
| `ctx` | [`Context`](#context) |

###### Returns

`Promise`\<`undefined` \| [`ApiResponse`](../../../overview/namespaces/Domain/README.md#apiresponse)\<`unknown`\>\>

###### Implementation of

[`Connection`](../../../overview/README.md#connection-1).[`send`](../../../overview/README.md#connection-1#send-3)

***

### OIDCModule

Defined in: [src/plugins/internal/oidc/module.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/module.ts#L5)

https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html

#### Constructors

##### Constructor

> **new OIDCModule**(): [`OIDCModule`](#oidcmodule)

###### Returns

[`OIDCModule`](#oidcmodule)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="clientid"></a> `clientId` | `public` | `undefined` \| `string` | `undefined` | [src/plugins/internal/oidc/module.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/module.ts#L6) |

***

### ParseCredentialOffer

Defined in: [src/plugins/internal/oidc/tasks/ParseCredentialOffer.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/ParseCredentialOffer.ts#L23)

validates the offer is correctly formed OIDC Credential Offer
returns the offer Typed as such

#### Param

json object

#### Extends

- [`Task`](../../../overview/namespaces/Utils/README.md#task)\<[`CredentialOffer`](#credentialoffer), [`ParseCredentialOfferArgs`](#parsecredentialofferargs)\>

#### Constructors

##### Constructor

> **new ParseCredentialOffer**(...`args`: \[[`ParseCredentialOfferArgs`](#parsecredentialofferargs)\]): [`ParseCredentialOffer`](#parsecredentialoffer)

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L18)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ParseCredentialOfferArgs`](#parsecredentialofferargs)\] |  |

###### Returns

[`ParseCredentialOffer`](#parsecredentialoffer)

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`constructor`](../../../overview/namespaces/Utils/README.md#task#constructor-1)

#### Methods

##### log()

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L26)

###### Returns

`unknown`

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`log`](../../../overview/namespaces/Utils/README.md#task#log)

##### run()

> **run**(`ctx`: [`Context`](#context)): `Promise`\<\{ `credential_configuration_ids`: `string`[]; `credential_issuer`: `string`; `grants?`: \{ `authorization_code?`: \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \}; `urn:ietf:params:oauth:grant-type:pre-authorized_code?`: \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \}; \}; \}\>

Defined in: [src/plugins/internal/oidc/tasks/ParseCredentialOffer.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/ParseCredentialOffer.ts#L24)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](#context) |

###### Returns

`Promise`\<\{ `credential_configuration_ids`: `string`[]; `credential_issuer`: `string`; `grants?`: \{ `authorization_code?`: \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \}; `urn:ietf:params:oauth:grant-type:pre-authorized_code?`: \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \}; \}; \}\>

###### Overrides

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`run`](../../../overview/namespaces/Utils/README.md#task#run)

***

### ProcessCallbackUrl

Defined in: [src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts#L11)

A Task encapsulates a unit of work

args constructor parameter is mandatory if Args type given
args constructor parameter is optional if no Args type given

#### Extends

- [`Task`](../../../overview/namespaces/Utils/README.md#task)\<[`AuthorizationResponse`](#authorizationresponse), [`ProcessCallbackUrlArgs`](#processcallbackurlargs)\>

#### Constructors

##### Constructor

> **new ProcessCallbackUrl**(...`args`: \[[`ProcessCallbackUrlArgs`](#processcallbackurlargs)\]): [`ProcessCallbackUrl`](#processcallbackurl)

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L18)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ProcessCallbackUrlArgs`](#processcallbackurlargs)\] |  |

###### Returns

[`ProcessCallbackUrl`](#processcallbackurl)

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`constructor`](../../../overview/namespaces/Utils/README.md#task#constructor-1)

#### Methods

##### log()

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L26)

###### Returns

`unknown`

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`log`](../../../overview/namespaces/Utils/README.md#task#log)

##### run()

> **run**(): `Promise`\<[`AuthorizationResponse`](#authorizationresponse)\>

Defined in: [src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts#L12)

###### Returns

`Promise`\<[`AuthorizationResponse`](#authorizationresponse)\>

###### Overrides

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`run`](../../../overview/namespaces/Utils/README.md#task#run)

***

### ResolveAuthorizationRequest

Defined in: [src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts#L31)

OIDC Convenience Task
Credential Offer to Authorization Request

OIDC Connection flow 1/2
OIDC Credential Issuance flow 1/3

steps
  - fetchIssuerMetadata
  - fetchAuthorizationServerMetadata
  - createAuthorizationRequest

#### Param

#### Extends

- [`Task`](../../../overview/namespaces/Utils/README.md#task)\<[`AuthorizationRequest`](#authorizationrequest), [`ResolveAuthorizationRequestArgs`](#resolveauthorizationrequestargs)\>

#### Constructors

##### Constructor

> **new ResolveAuthorizationRequest**(...`args`: \[[`ResolveAuthorizationRequestArgs`](#resolveauthorizationrequestargs)\]): [`ResolveAuthorizationRequest`](#resolveauthorizationrequest)

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L18)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ResolveAuthorizationRequestArgs`](#resolveauthorizationrequestargs)\] |  |

###### Returns

[`ResolveAuthorizationRequest`](#resolveauthorizationrequest)

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`constructor`](../../../overview/namespaces/Utils/README.md#task#constructor-1)

#### Methods

##### log()

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L26)

###### Returns

`unknown`

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`log`](../../../overview/namespaces/Utils/README.md#task#log)

##### run()

> **run**(`ctx`: [`Context`](#context)): `Promise`\<[`AuthorizationRequest`](#authorizationrequest)\>

Defined in: [src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts#L32)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](#context) |

###### Returns

`Promise`\<[`AuthorizationRequest`](#authorizationrequest)\>

###### Overrides

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`run`](../../../overview/namespaces/Utils/README.md#task#run)

***

### ResolveCredentialRequest

Defined in: [src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts#L28)

OIDC Convenience Task
Credential Offer to issued Credential

OIDC Credential Issuance flow 3/3

steps
  - fetchIssuerMetadata
  - CreateCredentialRequest
  - send CredentialRequest 
  - store Credential

#### Extends

- [`Task`](../../../overview/namespaces/Utils/README.md#task)\<[`JWTCredential`](../../../overview/README.md#jwtcredential), [`ResolveCredentialRequestArgs`](#resolvecredentialrequestargs)\>

#### Constructors

##### Constructor

> **new ResolveCredentialRequest**(...`args`: \[[`ResolveCredentialRequestArgs`](#resolvecredentialrequestargs)\]): [`ResolveCredentialRequest`](#resolvecredentialrequest)

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L18)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ResolveCredentialRequestArgs`](#resolvecredentialrequestargs)\] |  |

###### Returns

[`ResolveCredentialRequest`](#resolvecredentialrequest)

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`constructor`](../../../overview/namespaces/Utils/README.md#task#constructor-1)

#### Methods

##### log()

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L26)

###### Returns

`unknown`

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`log`](../../../overview/namespaces/Utils/README.md#task#log)

##### run()

> **run**(`ctx`: [`Context`](#context)): `Promise`\<[`JWTCredential`](../../../overview/README.md#jwtcredential)\>

Defined in: [src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](#context) |

###### Returns

`Promise`\<[`JWTCredential`](../../../overview/README.md#jwtcredential)\>

###### Overrides

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`run`](../../../overview/namespaces/Utils/README.md#task#run)

***

### ResolveTokenRequest

Defined in: [src/plugins/internal/oidc/connection/ResolveTokenRequest.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveTokenRequest.ts#L33)

OIDC Convenience Task
CallbackUrl to established Connection

OIDC Connection flow 2/2
OIDC Credential Issuance flow 2/3

manage fetching a Token from the Authorization Server
establishing a connection for future use
steps
  - processCallbackUrl
  - send a TokenRequest
  - add a Connection

#### Param

#### Param

#### Extends

- [`Task`](../../../overview/namespaces/Utils/README.md#task)\<[`TokenResponse`](#tokenresponse-3), [`ResolveTokenRequestArgs`](#resolvetokenrequestargs)\>

#### Constructors

##### Constructor

> **new ResolveTokenRequest**(...`args`: \[[`ResolveTokenRequestArgs`](#resolvetokenrequestargs)\]): [`ResolveTokenRequest`](#resolvetokenrequest)

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L18)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ResolveTokenRequestArgs`](#resolvetokenrequestargs)\] |  |

###### Returns

[`ResolveTokenRequest`](#resolvetokenrequest)

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`constructor`](../../../overview/namespaces/Utils/README.md#task#constructor-1)

#### Methods

##### log()

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L26)

###### Returns

`unknown`

###### Inherited from

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`log`](../../../overview/namespaces/Utils/README.md#task#log)

##### run()

> **run**(`ctx`: [`Context`](#context)): `Promise`\<\{ `access_token`: `string`; `c_nonce?`: `string`; `c_nonce_expires_in?`: `number`; `expires_in?`: `number`; `id_token?`: `string`; `refresh_expires_in?`: `number`; `refresh_token?`: `string`; `scope?`: `string`; `session_state?`: `string`; `token_type`: `string`; \}\>

Defined in: [src/plugins/internal/oidc/connection/ResolveTokenRequest.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveTokenRequest.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](#context) |

###### Returns

`Promise`\<\{ `access_token`: `string`; `c_nonce?`: `string`; `c_nonce_expires_in?`: `number`; `expires_in?`: `number`; `id_token?`: `string`; `refresh_expires_in?`: `number`; `refresh_token?`: `string`; `scope?`: `string`; `session_state?`: `string`; `token_type`: `string`; \}\>

###### Overrides

[`Task`](../../../overview/namespaces/Utils/README.md#task).[`run`](../../../overview/namespaces/Utils/README.md#task#run)

***

### TokenRequest

Defined in: [src/plugins/internal/oidc/protocols/TokenRequest.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/TokenRequest.ts#L4)

#### Extends

- [`ApiRequest`](../../../overview/namespaces/Domain/README.md#apirequest)

#### Constructors

##### Constructor

> **new TokenRequest**(`endpoint`: `string` \| `URL`, `grantType`: `"authorization_code"`, `body`: [`JsonObj`](../../../overview/namespaces/Utils/README.md#jsonobj)): [`TokenRequest`](#tokenrequest)

Defined in: [src/plugins/internal/oidc/protocols/TokenRequest.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/TokenRequest.ts#L5)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `endpoint` | `string` \| `URL` |
| `grantType` | `"authorization_code"` |
| `body` | [`JsonObj`](../../../overview/namespaces/Utils/README.md#jsonobj) |

###### Returns

[`TokenRequest`](#tokenrequest)

###### Overrides

[`ApiRequest`](../../../overview/namespaces/Domain/README.md#apirequest).[`constructor`](../../../overview/namespaces/Domain/README.md#apirequest#constructor-1)

#### Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="body-1"></a> `body?` | `public` | `string` \| [`JsonObj`](../../../overview/namespaces/Utils/README.md#jsonobj) | `undefined` | [`ApiRequest`](../../../overview/namespaces/Domain/README.md#apirequest).[`body`](../../../overview/namespaces/Domain/README.md#apirequest#body-1) | [src/domain/models/Api.ts:40](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L40) |
| <a id="headers-1"></a> `headers` | `readonly` | `Headers` | `undefined` | [`ApiRequest`](../../../overview/namespaces/Domain/README.md#apirequest).[`headers`](../../../overview/namespaces/Domain/README.md#apirequest#headers) | [src/domain/models/Api.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L37) |
| <a id="method-1"></a> `method` | `public` | [`HttpMethod`](../../../overview/namespaces/Domain/README.md#httpmethod) | `"GET"` | [`ApiRequest`](../../../overview/namespaces/Domain/README.md#apirequest).[`method`](../../../overview/namespaces/Domain/README.md#apirequest#method) | [src/domain/models/Api.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L39) |
| <a id="params-3"></a> `params` | `readonly` | `URLSearchParams` | `undefined` | [`ApiRequest`](../../../overview/namespaces/Domain/README.md#apirequest).[`params`](../../../overview/namespaces/Domain/README.md#apirequest#params) | [src/domain/models/Api.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L38) |
| <a id="url-3"></a> `url` | `readonly` | `URL` | `undefined` | [`ApiRequest`](../../../overview/namespaces/Domain/README.md#apirequest).[`url`](../../../overview/namespaces/Domain/README.md#apirequest#url) | [src/domain/models/Api.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L42) |

## Interfaces

### AuthorizationRequestMetadata

Defined in: [src/plugins/internal/oidc/protocols/AuthorizationRequest.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationRequest.ts#L4)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="codeverifier"></a> `codeVerifier?` | `string` | [src/plugins/internal/oidc/protocols/AuthorizationRequest.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationRequest.ts#L5) |
| <a id="nonce"></a> `nonce?` | `string` | [src/plugins/internal/oidc/protocols/AuthorizationRequest.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/protocols/AuthorizationRequest.ts#L6) |

***

### CreateAuthorizationRequestArgs

Defined in: [src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts#L9)

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="authservermeta-1"></a> `authServerMeta` | \{ `acr_values_supported?`: `string`[]; `authorization_encryption_alg_values_supported?`: `string`[]; `authorization_encryption_enc_values_supported?`: `string`[]; `authorization_endpoint?`: `string`; `authorization_response_iss_parameter_supported?`: `boolean`; `authorization_signing_alg_values_supported?`: `string`[]; `backchannel_authentication_endpoint?`: `string`; `backchannel_authentication_request_signing_alg_values_supported?`: `string`[]; `backchannel_logout_session_supported?`: `boolean`; `backchannel_logout_supported?`: `boolean`; `backchannel_token_delivery_modes_supported?`: `string`[]; `backchannel_user_code_parameter_supported?`: `boolean`; `check_session_iframe?`: `string`; `claim_types_supported?`: `string`[]; `claims_locales_supported?`: `string`[]; `claims_parameter_supported?`: `boolean`; `claims_supported?`: `string`[]; `code_challenge_methods_supported?`: `string`[]; `device_authorization_endpoint?`: `string`; `display_values_supported?`: `string`[]; `dpop_signing_alg_values_supported?`: `string`[]; `end_session_endpoint?`: `string`; `frontchannel_logout_session_supported?`: `boolean`; `frontchannel_logout_supported?`: `boolean`; `grant_types_supported?`: `string`[]; `id_token_encryption_alg_values_supported?`: `string`[]; `id_token_encryption_enc_values_supported?`: `string`[]; `id_token_signing_alg_values_supported?`: `string`[]; `introspection_encryption_alg_values_supported?`: `string`[]; `introspection_encryption_enc_values_supported?`: `string`[]; `introspection_endpoint?`: `string`; `introspection_endpoint_auth_methods_supported?`: `string`[]; `introspection_endpoint_auth_signing_alg_values_supported?`: `string`[]; `introspection_signing_alg_values_supported?`: `string`[]; `issuer`: `string`; `jwks_uri?`: `string`; `mtls_endpoint_aliases?`: \{ \}; `op_policy_uri?`: `string`; `op_tos_uri?`: `string`; `pushed_authorization_request_endpoint?`: `string`; `registration_endpoint?`: `string`; `request_object_encryption_alg_values_supported?`: `string`[]; `request_object_encryption_enc_values_supported?`: `string`[]; `request_object_signing_alg_values_supported?`: `string`[]; `request_parameter_supported?`: `boolean`; `request_uri_parameter_supported?`: `boolean`; `require_pushed_authorization_requests?`: `boolean`; `require_request_uri_registration?`: `boolean`; `require_signed_request_object?`: `boolean`; `response_modes_supported?`: `string`[]; `response_types_supported?`: `string`[]; `revocation_endpoint?`: `string`; `revocation_endpoint_auth_methods_supported?`: `string`[]; `revocation_endpoint_auth_signing_alg_values_supported?`: `string`[]; `scopes_supported?`: `string`[]; `service_documentation?`: `string`; `signed_metadata?`: `string`; `subject_types_supported?`: `string`[]; `tls_client_certificate_bound_access_tokens?`: `boolean`; `token_endpoint?`: `string`; `token_endpoint_auth_methods_supported?`: `string`[]; `token_endpoint_auth_signing_alg_values_supported?`: `string`[]; `ui_locales_supported?`: `string`[]; `userinfo_encryption_alg_values_supported?`: `string`[]; `userinfo_encryption_enc_values_supported?`: `string`[]; `userinfo_endpoint?`: `string`; `userinfo_signing_alg_values_supported?`: `string`[]; \} | - | [src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts#L11) |
| `authServerMeta.acr_values_supported?` | `string`[] | JSON array containing a list of the Authentication Context Class References that this authorization server supports. | [src/plugins/internal/oidc/types.ts:354](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L354) |
| `authServerMeta.authorization_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response encryption (`alg` value). | [src/plugins/internal/oidc/types.ts:483](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L483) |
| `authServerMeta.authorization_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response encryption (`enc` value). | [src/plugins/internal/oidc/types.ts:488](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L488) |
| `authServerMeta.authorization_endpoint?` | `string` | URL of the authorization server's authorization endpoint. | [src/plugins/internal/oidc/types.ts:234](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L234) |
| `authServerMeta.authorization_response_iss_parameter_supported?` | `boolean` | Boolean value indicating whether the authorization server provides the `iss` parameter in the authorization response. | [src/plugins/internal/oidc/types.ts:473](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L473) |
| `authServerMeta.authorization_signing_alg_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response signing. | [src/plugins/internal/oidc/types.ts:478](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L478) |
| `authServerMeta.backchannel_authentication_endpoint?` | `string` | CIBA Backchannel Authentication Endpoint. | [src/plugins/internal/oidc/types.ts:492](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L492) |
| `authServerMeta.backchannel_authentication_request_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS signing algorithms supported for validation of signed CIBA authentication requests. | [src/plugins/internal/oidc/types.ts:497](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L497) |
| `authServerMeta.backchannel_logout_session_supported?` | `boolean` | Boolean value specifying whether the authorization server can pass a `sid` (session ID) Claim in the Logout Token to identify the RP session with the OP. | [src/plugins/internal/oidc/types.ts:534](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L534) |
| `authServerMeta.backchannel_logout_supported?` | `boolean` | Boolean value specifying whether the authorization server supports back-channel logout. | [src/plugins/internal/oidc/types.ts:538](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L538) |
| `authServerMeta.backchannel_token_delivery_modes_supported?` | `string`[] | Supported CIBA authentication result delivery modes. | [src/plugins/internal/oidc/types.ts:501](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L501) |
| `authServerMeta.backchannel_user_code_parameter_supported?` | `boolean` | Indicates whether the authorization server supports the use of the CIBA `user_code` parameter. | [src/plugins/internal/oidc/types.ts:505](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L505) |
| `authServerMeta.check_session_iframe?` | `string` | URL of an authorization server iframe that supports cross-origin communications for session state information with the RP Client, using the HTML5 postMessage API. | [src/plugins/internal/oidc/types.ts:510](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L510) |
| `authServerMeta.claim_types_supported?` | `string`[] | JSON array containing a list of the Claim Types that the authorization server supports. | [src/plugins/internal/oidc/types.ts:410](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L410) |
| `authServerMeta.claims_locales_supported?` | `string`[] | Languages and scripts supported for values in Claims being returned, represented as a JSON array of RFC 5646 language tag values. | [src/plugins/internal/oidc/types.ts:420](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L420) |
| `authServerMeta.claims_parameter_supported?` | `boolean` | Boolean value specifying whether the authorization server supports use of the `claims` parameter. | [src/plugins/internal/oidc/types.ts:425](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L425) |
| `authServerMeta.claims_supported?` | `string`[] | JSON array containing a list of the Claim Names of the Claims that the authorization server MAY be able to supply values for. | [src/plugins/internal/oidc/types.ts:415](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L415) |
| `authServerMeta.code_challenge_methods_supported?` | `string`[] | PKCE code challenge methods supported by this authorization server. | [src/plugins/internal/oidc/types.ts:328](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L328) |
| `authServerMeta.device_authorization_endpoint?` | `string` | URL of the authorization server's device authorization endpoint. | [src/plugins/internal/oidc/types.ts:336](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L336) |
| `authServerMeta.display_values_supported?` | `string`[] | JSON array containing a list of the `display` parameter values that the authorization server supports. | [src/plugins/internal/oidc/types.ts:406](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L406) |
| `authServerMeta.dpop_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS algorithms supported for DPoP proof JWTs. | [src/plugins/internal/oidc/types.ts:514](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L514) |
| `authServerMeta.end_session_endpoint?` | `string` | URL at the authorization server to which an RP can perform a redirect to request that the End-User be logged out at the authorization server. | [src/plugins/internal/oidc/types.ts:519](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L519) |
| `authServerMeta.frontchannel_logout_session_supported?` | `boolean` | Boolean value specifying whether the authorization server can pass `iss` (issuer) and `sid` (session ID) query parameters to identify the RP session with the authorization server when the `frontchannel_logout_uri` is used. | [src/plugins/internal/oidc/types.ts:525](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L525) |
| `authServerMeta.frontchannel_logout_supported?` | `boolean` | Boolean value specifying whether the authorization server supports HTTP-based logout. | [src/plugins/internal/oidc/types.ts:529](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L529) |
| `authServerMeta.grant_types_supported?` | `string`[] | JSON array containing a list of the `grant_type` values that this authorization server supports. | [src/plugins/internal/oidc/types.ts:265](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L265) |
| `authServerMeta.id_token_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of the JWE `alg` values supported by the authorization server for the ID Token. | [src/plugins/internal/oidc/types.ts:369](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L369) |
| `authServerMeta.id_token_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of the JWE `enc` values supported by the authorization server for the ID Token. | [src/plugins/internal/oidc/types.ts:374](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L374) |
| `authServerMeta.id_token_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS `alg` values supported by the authorization server for the ID Token. | [src/plugins/internal/oidc/types.ts:364](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L364) |
| `authServerMeta.introspection_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response content key encryption (`alg` value). | [src/plugins/internal/oidc/types.ts:463](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L463) |
| `authServerMeta.introspection_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response content encryption (`enc` value). | [src/plugins/internal/oidc/types.ts:468](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L468) |
| `authServerMeta.introspection_endpoint?` | `string` | URL of the authorization server's introspection endpoint. | [src/plugins/internal/oidc/types.ts:313](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L313) |
| `authServerMeta.introspection_endpoint_auth_methods_supported?` | `string`[] | JSON array containing a list of client authentication methods supported by this introspection endpoint. | [src/plugins/internal/oidc/types.ts:318](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L318) |
| `authServerMeta.introspection_endpoint_auth_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS signing algorithms supported by the introspection endpoint for the signature on the JWT used to authenticate the client at the introspection endpoint. | [src/plugins/internal/oidc/types.ts:324](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L324) |
| `authServerMeta.introspection_signing_alg_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response signing. | [src/plugins/internal/oidc/types.ts:458](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L458) |
| `authServerMeta.issuer` | `string` | Authorization server's Issuer Identifier URL. | [src/plugins/internal/oidc/types.ts:230](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L230) |
| `authServerMeta.jwks_uri?` | `string` | URL of the authorization server's JWK Set document. | [src/plugins/internal/oidc/types.ts:242](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L242) |
| `authServerMeta.mtls_endpoint_aliases?` | \{ \} | JSON object containing alternative authorization server endpoints, which a client intending to do mutual TLS will use in preference to the conventional endpoints. | [src/plugins/internal/oidc/types.ts:345](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L345) |
| `authServerMeta.op_policy_uri?` | `string` | URL that the authorization server provides to the person registering the client to read about the authorization server's requirements on how the client can use the data provided by the authorization server. | [src/plugins/internal/oidc/types.ts:290](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L290) |
| `authServerMeta.op_tos_uri?` | `string` | URL that the authorization server provides to the person registering the client to read about the authorization server's terms of service. | [src/plugins/internal/oidc/types.ts:295](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L295) |
| `authServerMeta.pushed_authorization_request_endpoint?` | `string` | URL of the authorization server's pushed authorization request endpoint. | [src/plugins/internal/oidc/types.ts:449](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L449) |
| `authServerMeta.registration_endpoint?` | `string` | URL of the authorization server's Dynamic Client Registration Endpoint. | [src/plugins/internal/oidc/types.ts:246](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L246) |
| `authServerMeta.request_object_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of the JWE `alg` values supported by the authorization server for Request Objects. | [src/plugins/internal/oidc/types.ts:396](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L396) |
| `authServerMeta.request_object_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of the JWE `enc` values supported by the authorization server for Request Objects. | [src/plugins/internal/oidc/types.ts:401](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L401) |
| `authServerMeta.request_object_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS `alg` values supported by the authorization server for Request Objects. | [src/plugins/internal/oidc/types.ts:391](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L391) |
| `authServerMeta.request_parameter_supported?` | `boolean` | Boolean value specifying whether the authorization server supports use of the `request` parameter. | [src/plugins/internal/oidc/types.ts:430](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L430) |
| `authServerMeta.request_uri_parameter_supported?` | `boolean` | Boolean value specifying whether the authorization server supports use of the `request_uri` parameter. | [src/plugins/internal/oidc/types.ts:435](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L435) |
| `authServerMeta.require_pushed_authorization_requests?` | `boolean` | Indicates whether the authorization server accepts authorization requests only via PAR. | [src/plugins/internal/oidc/types.ts:453](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L453) |
| `authServerMeta.require_request_uri_registration?` | `boolean` | Boolean value specifying whether the authorization server requires any `request_uri` values used to be pre-registered. | [src/plugins/internal/oidc/types.ts:440](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L440) |
| `authServerMeta.require_signed_request_object?` | `boolean` | Indicates where authorization request needs to be protected as Request Object and provided through either `request` or `request_uri` parameter. | [src/plugins/internal/oidc/types.ts:445](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L445) |
| `authServerMeta.response_modes_supported?` | `string`[] | JSON array containing a list of the `response_mode` values that this authorization server supports. | [src/plugins/internal/oidc/types.ts:260](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L260) |
| `authServerMeta.response_types_supported?` | `string`[] | JSON array containing a list of the `response_type` values that this authorization server supports. | [src/plugins/internal/oidc/types.ts:255](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L255) |
| `authServerMeta.revocation_endpoint?` | `string` | URL of the authorization server's revocation endpoint. | [src/plugins/internal/oidc/types.ts:299](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L299) |
| `authServerMeta.revocation_endpoint_auth_methods_supported?` | `string`[] | JSON array containing a list of client authentication methods supported by this revocation endpoint. | [src/plugins/internal/oidc/types.ts:304](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L304) |
| `authServerMeta.revocation_endpoint_auth_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS signing algorithms supported by the revocation endpoint for the signature on the JWT used to authenticate the client at the revocation endpoint. | [src/plugins/internal/oidc/types.ts:309](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L309) |
| `authServerMeta.scopes_supported?` | `string`[] | JSON array containing a list of the `scope` values that this authorization server supports. | [src/plugins/internal/oidc/types.ts:250](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L250) |
| `authServerMeta.service_documentation?` | `string` | URL of a page containing human-readable information that developers might want or need to know when using the authorization server. | [src/plugins/internal/oidc/types.ts:279](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L279) |
| `authServerMeta.signed_metadata?` | `string` | Signed JWT containing metadata values about the authorization server as claims. | [src/plugins/internal/oidc/types.ts:332](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L332) |
| `authServerMeta.subject_types_supported?` | `string`[] | JSON array containing a list of the Subject Identifier types that this authorization server supports. | [src/plugins/internal/oidc/types.ts:359](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L359) |
| `authServerMeta.tls_client_certificate_bound_access_tokens?` | `boolean` | Indicates authorization server support for mutual-TLS client certificate-bound access tokens. | [src/plugins/internal/oidc/types.ts:340](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L340) |
| `authServerMeta.token_endpoint?` | `string` | URL of the authorization server's token endpoint. | [src/plugins/internal/oidc/types.ts:238](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L238) |
| `authServerMeta.token_endpoint_auth_methods_supported?` | `string`[] | JSON array containing a list of client authentication methods supported by this token endpoint. | [src/plugins/internal/oidc/types.ts:269](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L269) |
| `authServerMeta.token_endpoint_auth_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS signing algorithms supported by the token endpoint for the signature on the JWT used to authenticate the client at the token endpoint. | [src/plugins/internal/oidc/types.ts:274](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L274) |
| `authServerMeta.ui_locales_supported?` | `string`[] | Languages and scripts supported for the user interface, represented as a JSON array of language tag values from RFC 5646. | [src/plugins/internal/oidc/types.ts:284](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L284) |
| `authServerMeta.userinfo_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of the JWE `alg` values supported by the UserInfo Endpoint. | [src/plugins/internal/oidc/types.ts:382](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L382) |
| `authServerMeta.userinfo_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of the JWE `enc` values supported by the UserInfo Endpoint. | [src/plugins/internal/oidc/types.ts:386](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L386) |
| `authServerMeta.userinfo_endpoint?` | `string` | URL of the authorization server's UserInfo Endpoint. | [src/plugins/internal/oidc/types.ts:349](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L349) |
| `authServerMeta.userinfo_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS `alg` values supported by the UserInfo Endpoint. | [src/plugins/internal/oidc/types.ts:378](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L378) |
| <a id="clientid-1"></a> `clientId` | `string` | - | [src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts#L12) |
| <a id="issuermeta-2"></a> `issuerMeta` | \{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \} | - | [src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts#L10) |
| `issuerMeta.authorization_servers?` | `string`[] | - | [src/plugins/internal/oidc/types.ts:86](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L86) |
| `issuerMeta.batch_credential_endpoint?` | `string` | - | [src/plugins/internal/oidc/types.ts:95](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L95) |
| `issuerMeta.credential_configurations_supported` | \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \} | - | [src/plugins/internal/oidc/types.ts:111](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L111) |
| `issuerMeta.credential_endpoint` | `string` | - | [src/plugins/internal/oidc/types.ts:90](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L90) |
| `issuerMeta.credential_identifiers_supported?` | `boolean` | - | [src/plugins/internal/oidc/types.ts:175](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L175) |
| `issuerMeta.credential_issuer` | `string` | - | [src/plugins/internal/oidc/types.ts:80](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L80) |
| `issuerMeta.credential_response_encryption?` | \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \} | - | [src/plugins/internal/oidc/types.ts:155](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L155) |
| `issuerMeta.credential_response_encryption.alg_values_supported` | `string`[] | - | [src/plugins/internal/oidc/types.ts:159](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L159) |
| `issuerMeta.credential_response_encryption.enc_values_supported` | `string`[] | - | [src/plugins/internal/oidc/types.ts:163](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L163) |
| `issuerMeta.credential_response_encryption.encryption_required` | `boolean` | - | [src/plugins/internal/oidc/types.ts:169](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L169) |
| `issuerMeta.deferred_credential_endpoint?` | `string` | - | [src/plugins/internal/oidc/types.ts:100](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L100) |
| `issuerMeta.display?` | \{ \} | - | [src/plugins/internal/oidc/types.ts:178](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L178) |
| `issuerMeta.notification_endpoint?` | `string` | - | [src/plugins/internal/oidc/types.ts:105](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L105) |
| `issuerMeta.signed_metadata?` | `string` | - | [src/plugins/internal/oidc/types.ts:108](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L108) |
| <a id="offer"></a> `offer?` | \{ `credential_configuration_ids`: `string`[]; `credential_issuer`: `string`; `grants?`: \{ `authorization_code?`: \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \}; `urn:ietf:params:oauth:grant-type:pre-authorized_code?`: \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \}; \}; \} | - | [src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts#L14) |
| `offer.credential_configuration_ids` | `string`[] | array of unique strings that each identify one of the keys in name/value pairs stored in the `credential_configurations_supported` Credential Issuer Metadata | [src/plugins/internal/oidc/types.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L25) |
| `offer.credential_issuer` | `string` | url of the Credential Issuer from which the wallet is requested to obtain one or more Credentials the Wallet uses it to obtain the Credential Issuer's Metadata | [src/plugins/internal/oidc/types.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L20) |
| `offer.grants?` | \{ `authorization_code?`: \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \}; `urn:ietf:params:oauth:grant-type:pre-authorized_code?`: \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \}; \} | indicates the Grant Types the Authorization Server is prepared to process if `grants` is nil the Wallet must determine the Grant Types using the Metadata when multiple grants are present, it is at the Wallets discretion which to use | [src/plugins/internal/oidc/types.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L31) |
| `offer.grants.authorization_code?` | \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \} | - | [src/plugins/internal/oidc/types.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L32) |
| `offer.grants.authorization_code.authorization_server?` | `string` | can be used to identify the Authorization Server to use with this grant type when `authorization_servers` in Issuer Metadata has multiple entries | [src/plugins/internal/oidc/types.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L43) |
| `offer.grants.authorization_code.issuer_state?` | `string` | used to bind the Authorization Request with the Credential Issuer to a context if the Wallet decides to use the Authorization Code flow and received this value it must be included in the subsequent Authorization Reqest | [src/plugins/internal/oidc/types.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L38) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code?` | \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \} | - | [src/plugins/internal/oidc/types.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L46) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.authorization_server?` | `string` | can be used to identify the Authorization Server to use with this grant type when `authorization_servers` in Issuer Metadata has multiple entries | [src/plugins/internal/oidc/types.ts:63](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L63) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.interval?` | `number` | amount of time in seconds that the Wallet should wait between polling requests to the token endpoint | [src/plugins/internal/oidc/types.ts:58](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L58) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.pre-authorized_code` | `string` | code representing the Issuers authorization short lived and single use if the Wallet decides to use the pre-authorized_code flow, this value must be included in the subsequent Token Request | [src/plugins/internal/oidc/types.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L53) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code?` | \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \} | specifies whether the Authorization Server expects a presentation of a Transaction Code along with the Token Request | [src/plugins/internal/oidc/types.ts:68](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L68) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.description?` | `string` | - | [src/plugins/internal/oidc/types.ts:71](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L71) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.input_mode?` | `string` | - | [src/plugins/internal/oidc/types.ts:69](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L69) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.length?` | `number` | - | [src/plugins/internal/oidc/types.ts:70](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L70) |
| <a id="redirecturi"></a> `redirectUri` | `string` | - | [src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts#L13) |
| <a id="scopes-1"></a> `scopes?` | `string`[] | - | [src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts#L15) |

***

### CreateCredentialRequestArgs

Defined in: [src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts#L10)

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="clientid-2"></a> `clientId?` | `string` | - | [src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts#L12) |
| <a id="issuermeta-3"></a> `issuerMeta?` | \{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \} | - | [src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts#L13) |
| `issuerMeta.authorization_servers?` | `string`[] | - | [src/plugins/internal/oidc/types.ts:86](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L86) |
| `issuerMeta.batch_credential_endpoint?` | `string` | - | [src/plugins/internal/oidc/types.ts:95](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L95) |
| `issuerMeta.credential_configurations_supported` | \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \} | - | [src/plugins/internal/oidc/types.ts:111](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L111) |
| `issuerMeta.credential_endpoint` | `string` | - | [src/plugins/internal/oidc/types.ts:90](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L90) |
| `issuerMeta.credential_identifiers_supported?` | `boolean` | - | [src/plugins/internal/oidc/types.ts:175](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L175) |
| `issuerMeta.credential_issuer` | `string` | - | [src/plugins/internal/oidc/types.ts:80](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L80) |
| `issuerMeta.credential_response_encryption?` | \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \} | - | [src/plugins/internal/oidc/types.ts:155](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L155) |
| `issuerMeta.credential_response_encryption.alg_values_supported` | `string`[] | - | [src/plugins/internal/oidc/types.ts:159](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L159) |
| `issuerMeta.credential_response_encryption.enc_values_supported` | `string`[] | - | [src/plugins/internal/oidc/types.ts:163](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L163) |
| `issuerMeta.credential_response_encryption.encryption_required` | `boolean` | - | [src/plugins/internal/oidc/types.ts:169](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L169) |
| `issuerMeta.deferred_credential_endpoint?` | `string` | - | [src/plugins/internal/oidc/types.ts:100](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L100) |
| `issuerMeta.display?` | \{ \} | - | [src/plugins/internal/oidc/types.ts:178](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L178) |
| `issuerMeta.notification_endpoint?` | `string` | - | [src/plugins/internal/oidc/types.ts:105](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L105) |
| `issuerMeta.signed_metadata?` | `string` | - | [src/plugins/internal/oidc/types.ts:108](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L108) |
| <a id="offer-1"></a> `offer` | \{ `credential_configuration_ids`: `string`[]; `credential_issuer`: `string`; `grants?`: \{ `authorization_code?`: \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \}; `urn:ietf:params:oauth:grant-type:pre-authorized_code?`: \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \}; \}; \} | - | [src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts#L11) |
| `offer.credential_configuration_ids` | `string`[] | array of unique strings that each identify one of the keys in name/value pairs stored in the `credential_configurations_supported` Credential Issuer Metadata | [src/plugins/internal/oidc/types.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L25) |
| `offer.credential_issuer` | `string` | url of the Credential Issuer from which the wallet is requested to obtain one or more Credentials the Wallet uses it to obtain the Credential Issuer's Metadata | [src/plugins/internal/oidc/types.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L20) |
| `offer.grants?` | \{ `authorization_code?`: \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \}; `urn:ietf:params:oauth:grant-type:pre-authorized_code?`: \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \}; \} | indicates the Grant Types the Authorization Server is prepared to process if `grants` is nil the Wallet must determine the Grant Types using the Metadata when multiple grants are present, it is at the Wallets discretion which to use | [src/plugins/internal/oidc/types.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L31) |
| `offer.grants.authorization_code?` | \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \} | - | [src/plugins/internal/oidc/types.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L32) |
| `offer.grants.authorization_code.authorization_server?` | `string` | can be used to identify the Authorization Server to use with this grant type when `authorization_servers` in Issuer Metadata has multiple entries | [src/plugins/internal/oidc/types.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L43) |
| `offer.grants.authorization_code.issuer_state?` | `string` | used to bind the Authorization Request with the Credential Issuer to a context if the Wallet decides to use the Authorization Code flow and received this value it must be included in the subsequent Authorization Reqest | [src/plugins/internal/oidc/types.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L38) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code?` | \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \} | - | [src/plugins/internal/oidc/types.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L46) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.authorization_server?` | `string` | can be used to identify the Authorization Server to use with this grant type when `authorization_servers` in Issuer Metadata has multiple entries | [src/plugins/internal/oidc/types.ts:63](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L63) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.interval?` | `number` | amount of time in seconds that the Wallet should wait between polling requests to the token endpoint | [src/plugins/internal/oidc/types.ts:58](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L58) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.pre-authorized_code` | `string` | code representing the Issuers authorization short lived and single use if the Wallet decides to use the pre-authorized_code flow, this value must be included in the subsequent Token Request | [src/plugins/internal/oidc/types.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L53) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code?` | \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \} | specifies whether the Authorization Server expects a presentation of a Transaction Code along with the Token Request | [src/plugins/internal/oidc/types.ts:68](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L68) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.description?` | `string` | - | [src/plugins/internal/oidc/types.ts:71](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L71) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.input_mode?` | `string` | - | [src/plugins/internal/oidc/types.ts:69](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L69) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.length?` | `number` | - | [src/plugins/internal/oidc/types.ts:70](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L70) |
| <a id="tokenresponse-1"></a> `tokenResponse?` | \{ `access_token`: `string`; `c_nonce?`: `string`; `c_nonce_expires_in?`: `number`; `expires_in?`: `number`; `id_token?`: `string`; `refresh_expires_in?`: `number`; `refresh_token?`: `string`; `scope?`: `string`; `session_state?`: `string`; `token_type`: `string`; \} | - | [src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts#L14) |
| `tokenResponse.access_token` | `string` | - | [src/plugins/internal/oidc/types.ts:545](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L545) |
| `tokenResponse.c_nonce?` | `string` | - | [src/plugins/internal/oidc/types.ts:548](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L548) |
| `tokenResponse.c_nonce_expires_in?` | `number` | - | [src/plugins/internal/oidc/types.ts:549](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L549) |
| `tokenResponse.expires_in?` | `number` | - | [src/plugins/internal/oidc/types.ts:547](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L547) |
| `tokenResponse.id_token?` | `string` | - | [src/plugins/internal/oidc/types.ts:552](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L552) |
| `tokenResponse.refresh_expires_in?` | `number` | - | [src/plugins/internal/oidc/types.ts:551](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L551) |
| `tokenResponse.refresh_token?` | `string` | - | [src/plugins/internal/oidc/types.ts:550](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L550) |
| `tokenResponse.scope?` | `string` | - | [src/plugins/internal/oidc/types.ts:553](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L553) |
| `tokenResponse.session_state?` | `string` | - | [src/plugins/internal/oidc/types.ts:554](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L554) |
| `tokenResponse.token_type` | `string` | - | [src/plugins/internal/oidc/types.ts:546](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L546) |

***

### FetchAuthServerMetaArgs

Defined in: [src/plugins/internal/oidc/tasks/FetchAuthServerMeta.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/FetchAuthServerMeta.ts#L6)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="algorithm"></a> `algorithm?` | `string` | [src/plugins/internal/oidc/tasks/FetchAuthServerMeta.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/FetchAuthServerMeta.ts#L8) |
| <a id="serveruri"></a> `serverUri` | `string` \| `URL` | [src/plugins/internal/oidc/tasks/FetchAuthServerMeta.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/FetchAuthServerMeta.ts#L7) |

***

### FetchIssuerMetadataArgs

Defined in: [src/plugins/internal/oidc/tasks/FetchIssuerMetadata.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/FetchIssuerMetadata.ts#L5)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="uri-1"></a> `uri` | `string` \| `URL` | [src/plugins/internal/oidc/tasks/FetchIssuerMetadata.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/FetchIssuerMetadata.ts#L6) |

***

### ParseCredentialOfferArgs

Defined in: [src/plugins/internal/oidc/tasks/ParseCredentialOffer.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/ParseCredentialOffer.ts#L12)

attempt to extract a Credential Offer from the given value

#### See

[OIDC Credential Offer](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html#name-credential-offer)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="value"></a> `value` | `unknown` | [src/plugins/internal/oidc/tasks/ParseCredentialOffer.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/tasks/ParseCredentialOffer.ts#L13) |

***

### ProcessCallbackUrlArgs

Defined in: [src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts#L5)

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="authservermeta-2"></a> `authServerMeta` | \{ `acr_values_supported?`: `string`[]; `authorization_encryption_alg_values_supported?`: `string`[]; `authorization_encryption_enc_values_supported?`: `string`[]; `authorization_endpoint?`: `string`; `authorization_response_iss_parameter_supported?`: `boolean`; `authorization_signing_alg_values_supported?`: `string`[]; `backchannel_authentication_endpoint?`: `string`; `backchannel_authentication_request_signing_alg_values_supported?`: `string`[]; `backchannel_logout_session_supported?`: `boolean`; `backchannel_logout_supported?`: `boolean`; `backchannel_token_delivery_modes_supported?`: `string`[]; `backchannel_user_code_parameter_supported?`: `boolean`; `check_session_iframe?`: `string`; `claim_types_supported?`: `string`[]; `claims_locales_supported?`: `string`[]; `claims_parameter_supported?`: `boolean`; `claims_supported?`: `string`[]; `code_challenge_methods_supported?`: `string`[]; `device_authorization_endpoint?`: `string`; `display_values_supported?`: `string`[]; `dpop_signing_alg_values_supported?`: `string`[]; `end_session_endpoint?`: `string`; `frontchannel_logout_session_supported?`: `boolean`; `frontchannel_logout_supported?`: `boolean`; `grant_types_supported?`: `string`[]; `id_token_encryption_alg_values_supported?`: `string`[]; `id_token_encryption_enc_values_supported?`: `string`[]; `id_token_signing_alg_values_supported?`: `string`[]; `introspection_encryption_alg_values_supported?`: `string`[]; `introspection_encryption_enc_values_supported?`: `string`[]; `introspection_endpoint?`: `string`; `introspection_endpoint_auth_methods_supported?`: `string`[]; `introspection_endpoint_auth_signing_alg_values_supported?`: `string`[]; `introspection_signing_alg_values_supported?`: `string`[]; `issuer`: `string`; `jwks_uri?`: `string`; `mtls_endpoint_aliases?`: \{ \}; `op_policy_uri?`: `string`; `op_tos_uri?`: `string`; `pushed_authorization_request_endpoint?`: `string`; `registration_endpoint?`: `string`; `request_object_encryption_alg_values_supported?`: `string`[]; `request_object_encryption_enc_values_supported?`: `string`[]; `request_object_signing_alg_values_supported?`: `string`[]; `request_parameter_supported?`: `boolean`; `request_uri_parameter_supported?`: `boolean`; `require_pushed_authorization_requests?`: `boolean`; `require_request_uri_registration?`: `boolean`; `require_signed_request_object?`: `boolean`; `response_modes_supported?`: `string`[]; `response_types_supported?`: `string`[]; `revocation_endpoint?`: `string`; `revocation_endpoint_auth_methods_supported?`: `string`[]; `revocation_endpoint_auth_signing_alg_values_supported?`: `string`[]; `scopes_supported?`: `string`[]; `service_documentation?`: `string`; `signed_metadata?`: `string`; `subject_types_supported?`: `string`[]; `tls_client_certificate_bound_access_tokens?`: `boolean`; `token_endpoint?`: `string`; `token_endpoint_auth_methods_supported?`: `string`[]; `token_endpoint_auth_signing_alg_values_supported?`: `string`[]; `ui_locales_supported?`: `string`[]; `userinfo_encryption_alg_values_supported?`: `string`[]; `userinfo_encryption_enc_values_supported?`: `string`[]; `userinfo_endpoint?`: `string`; `userinfo_signing_alg_values_supported?`: `string`[]; \} | - | [src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts#L6) |
| `authServerMeta.acr_values_supported?` | `string`[] | JSON array containing a list of the Authentication Context Class References that this authorization server supports. | [src/plugins/internal/oidc/types.ts:354](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L354) |
| `authServerMeta.authorization_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response encryption (`alg` value). | [src/plugins/internal/oidc/types.ts:483](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L483) |
| `authServerMeta.authorization_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response encryption (`enc` value). | [src/plugins/internal/oidc/types.ts:488](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L488) |
| `authServerMeta.authorization_endpoint?` | `string` | URL of the authorization server's authorization endpoint. | [src/plugins/internal/oidc/types.ts:234](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L234) |
| `authServerMeta.authorization_response_iss_parameter_supported?` | `boolean` | Boolean value indicating whether the authorization server provides the `iss` parameter in the authorization response. | [src/plugins/internal/oidc/types.ts:473](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L473) |
| `authServerMeta.authorization_signing_alg_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response signing. | [src/plugins/internal/oidc/types.ts:478](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L478) |
| `authServerMeta.backchannel_authentication_endpoint?` | `string` | CIBA Backchannel Authentication Endpoint. | [src/plugins/internal/oidc/types.ts:492](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L492) |
| `authServerMeta.backchannel_authentication_request_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS signing algorithms supported for validation of signed CIBA authentication requests. | [src/plugins/internal/oidc/types.ts:497](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L497) |
| `authServerMeta.backchannel_logout_session_supported?` | `boolean` | Boolean value specifying whether the authorization server can pass a `sid` (session ID) Claim in the Logout Token to identify the RP session with the OP. | [src/plugins/internal/oidc/types.ts:534](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L534) |
| `authServerMeta.backchannel_logout_supported?` | `boolean` | Boolean value specifying whether the authorization server supports back-channel logout. | [src/plugins/internal/oidc/types.ts:538](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L538) |
| `authServerMeta.backchannel_token_delivery_modes_supported?` | `string`[] | Supported CIBA authentication result delivery modes. | [src/plugins/internal/oidc/types.ts:501](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L501) |
| `authServerMeta.backchannel_user_code_parameter_supported?` | `boolean` | Indicates whether the authorization server supports the use of the CIBA `user_code` parameter. | [src/plugins/internal/oidc/types.ts:505](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L505) |
| `authServerMeta.check_session_iframe?` | `string` | URL of an authorization server iframe that supports cross-origin communications for session state information with the RP Client, using the HTML5 postMessage API. | [src/plugins/internal/oidc/types.ts:510](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L510) |
| `authServerMeta.claim_types_supported?` | `string`[] | JSON array containing a list of the Claim Types that the authorization server supports. | [src/plugins/internal/oidc/types.ts:410](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L410) |
| `authServerMeta.claims_locales_supported?` | `string`[] | Languages and scripts supported for values in Claims being returned, represented as a JSON array of RFC 5646 language tag values. | [src/plugins/internal/oidc/types.ts:420](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L420) |
| `authServerMeta.claims_parameter_supported?` | `boolean` | Boolean value specifying whether the authorization server supports use of the `claims` parameter. | [src/plugins/internal/oidc/types.ts:425](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L425) |
| `authServerMeta.claims_supported?` | `string`[] | JSON array containing a list of the Claim Names of the Claims that the authorization server MAY be able to supply values for. | [src/plugins/internal/oidc/types.ts:415](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L415) |
| `authServerMeta.code_challenge_methods_supported?` | `string`[] | PKCE code challenge methods supported by this authorization server. | [src/plugins/internal/oidc/types.ts:328](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L328) |
| `authServerMeta.device_authorization_endpoint?` | `string` | URL of the authorization server's device authorization endpoint. | [src/plugins/internal/oidc/types.ts:336](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L336) |
| `authServerMeta.display_values_supported?` | `string`[] | JSON array containing a list of the `display` parameter values that the authorization server supports. | [src/plugins/internal/oidc/types.ts:406](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L406) |
| `authServerMeta.dpop_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS algorithms supported for DPoP proof JWTs. | [src/plugins/internal/oidc/types.ts:514](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L514) |
| `authServerMeta.end_session_endpoint?` | `string` | URL at the authorization server to which an RP can perform a redirect to request that the End-User be logged out at the authorization server. | [src/plugins/internal/oidc/types.ts:519](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L519) |
| `authServerMeta.frontchannel_logout_session_supported?` | `boolean` | Boolean value specifying whether the authorization server can pass `iss` (issuer) and `sid` (session ID) query parameters to identify the RP session with the authorization server when the `frontchannel_logout_uri` is used. | [src/plugins/internal/oidc/types.ts:525](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L525) |
| `authServerMeta.frontchannel_logout_supported?` | `boolean` | Boolean value specifying whether the authorization server supports HTTP-based logout. | [src/plugins/internal/oidc/types.ts:529](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L529) |
| `authServerMeta.grant_types_supported?` | `string`[] | JSON array containing a list of the `grant_type` values that this authorization server supports. | [src/plugins/internal/oidc/types.ts:265](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L265) |
| `authServerMeta.id_token_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of the JWE `alg` values supported by the authorization server for the ID Token. | [src/plugins/internal/oidc/types.ts:369](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L369) |
| `authServerMeta.id_token_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of the JWE `enc` values supported by the authorization server for the ID Token. | [src/plugins/internal/oidc/types.ts:374](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L374) |
| `authServerMeta.id_token_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS `alg` values supported by the authorization server for the ID Token. | [src/plugins/internal/oidc/types.ts:364](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L364) |
| `authServerMeta.introspection_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response content key encryption (`alg` value). | [src/plugins/internal/oidc/types.ts:463](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L463) |
| `authServerMeta.introspection_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response content encryption (`enc` value). | [src/plugins/internal/oidc/types.ts:468](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L468) |
| `authServerMeta.introspection_endpoint?` | `string` | URL of the authorization server's introspection endpoint. | [src/plugins/internal/oidc/types.ts:313](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L313) |
| `authServerMeta.introspection_endpoint_auth_methods_supported?` | `string`[] | JSON array containing a list of client authentication methods supported by this introspection endpoint. | [src/plugins/internal/oidc/types.ts:318](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L318) |
| `authServerMeta.introspection_endpoint_auth_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS signing algorithms supported by the introspection endpoint for the signature on the JWT used to authenticate the client at the introspection endpoint. | [src/plugins/internal/oidc/types.ts:324](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L324) |
| `authServerMeta.introspection_signing_alg_values_supported?` | `string`[] | JSON array containing a list of algorithms supported by the authorization server for introspection response signing. | [src/plugins/internal/oidc/types.ts:458](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L458) |
| `authServerMeta.issuer` | `string` | Authorization server's Issuer Identifier URL. | [src/plugins/internal/oidc/types.ts:230](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L230) |
| `authServerMeta.jwks_uri?` | `string` | URL of the authorization server's JWK Set document. | [src/plugins/internal/oidc/types.ts:242](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L242) |
| `authServerMeta.mtls_endpoint_aliases?` | \{ \} | JSON object containing alternative authorization server endpoints, which a client intending to do mutual TLS will use in preference to the conventional endpoints. | [src/plugins/internal/oidc/types.ts:345](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L345) |
| `authServerMeta.op_policy_uri?` | `string` | URL that the authorization server provides to the person registering the client to read about the authorization server's requirements on how the client can use the data provided by the authorization server. | [src/plugins/internal/oidc/types.ts:290](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L290) |
| `authServerMeta.op_tos_uri?` | `string` | URL that the authorization server provides to the person registering the client to read about the authorization server's terms of service. | [src/plugins/internal/oidc/types.ts:295](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L295) |
| `authServerMeta.pushed_authorization_request_endpoint?` | `string` | URL of the authorization server's pushed authorization request endpoint. | [src/plugins/internal/oidc/types.ts:449](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L449) |
| `authServerMeta.registration_endpoint?` | `string` | URL of the authorization server's Dynamic Client Registration Endpoint. | [src/plugins/internal/oidc/types.ts:246](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L246) |
| `authServerMeta.request_object_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of the JWE `alg` values supported by the authorization server for Request Objects. | [src/plugins/internal/oidc/types.ts:396](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L396) |
| `authServerMeta.request_object_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of the JWE `enc` values supported by the authorization server for Request Objects. | [src/plugins/internal/oidc/types.ts:401](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L401) |
| `authServerMeta.request_object_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS `alg` values supported by the authorization server for Request Objects. | [src/plugins/internal/oidc/types.ts:391](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L391) |
| `authServerMeta.request_parameter_supported?` | `boolean` | Boolean value specifying whether the authorization server supports use of the `request` parameter. | [src/plugins/internal/oidc/types.ts:430](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L430) |
| `authServerMeta.request_uri_parameter_supported?` | `boolean` | Boolean value specifying whether the authorization server supports use of the `request_uri` parameter. | [src/plugins/internal/oidc/types.ts:435](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L435) |
| `authServerMeta.require_pushed_authorization_requests?` | `boolean` | Indicates whether the authorization server accepts authorization requests only via PAR. | [src/plugins/internal/oidc/types.ts:453](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L453) |
| `authServerMeta.require_request_uri_registration?` | `boolean` | Boolean value specifying whether the authorization server requires any `request_uri` values used to be pre-registered. | [src/plugins/internal/oidc/types.ts:440](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L440) |
| `authServerMeta.require_signed_request_object?` | `boolean` | Indicates where authorization request needs to be protected as Request Object and provided through either `request` or `request_uri` parameter. | [src/plugins/internal/oidc/types.ts:445](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L445) |
| `authServerMeta.response_modes_supported?` | `string`[] | JSON array containing a list of the `response_mode` values that this authorization server supports. | [src/plugins/internal/oidc/types.ts:260](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L260) |
| `authServerMeta.response_types_supported?` | `string`[] | JSON array containing a list of the `response_type` values that this authorization server supports. | [src/plugins/internal/oidc/types.ts:255](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L255) |
| `authServerMeta.revocation_endpoint?` | `string` | URL of the authorization server's revocation endpoint. | [src/plugins/internal/oidc/types.ts:299](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L299) |
| `authServerMeta.revocation_endpoint_auth_methods_supported?` | `string`[] | JSON array containing a list of client authentication methods supported by this revocation endpoint. | [src/plugins/internal/oidc/types.ts:304](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L304) |
| `authServerMeta.revocation_endpoint_auth_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS signing algorithms supported by the revocation endpoint for the signature on the JWT used to authenticate the client at the revocation endpoint. | [src/plugins/internal/oidc/types.ts:309](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L309) |
| `authServerMeta.scopes_supported?` | `string`[] | JSON array containing a list of the `scope` values that this authorization server supports. | [src/plugins/internal/oidc/types.ts:250](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L250) |
| `authServerMeta.service_documentation?` | `string` | URL of a page containing human-readable information that developers might want or need to know when using the authorization server. | [src/plugins/internal/oidc/types.ts:279](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L279) |
| `authServerMeta.signed_metadata?` | `string` | Signed JWT containing metadata values about the authorization server as claims. | [src/plugins/internal/oidc/types.ts:332](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L332) |
| `authServerMeta.subject_types_supported?` | `string`[] | JSON array containing a list of the Subject Identifier types that this authorization server supports. | [src/plugins/internal/oidc/types.ts:359](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L359) |
| `authServerMeta.tls_client_certificate_bound_access_tokens?` | `boolean` | Indicates authorization server support for mutual-TLS client certificate-bound access tokens. | [src/plugins/internal/oidc/types.ts:340](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L340) |
| `authServerMeta.token_endpoint?` | `string` | URL of the authorization server's token endpoint. | [src/plugins/internal/oidc/types.ts:238](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L238) |
| `authServerMeta.token_endpoint_auth_methods_supported?` | `string`[] | JSON array containing a list of client authentication methods supported by this token endpoint. | [src/plugins/internal/oidc/types.ts:269](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L269) |
| `authServerMeta.token_endpoint_auth_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS signing algorithms supported by the token endpoint for the signature on the JWT used to authenticate the client at the token endpoint. | [src/plugins/internal/oidc/types.ts:274](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L274) |
| `authServerMeta.ui_locales_supported?` | `string`[] | Languages and scripts supported for the user interface, represented as a JSON array of language tag values from RFC 5646. | [src/plugins/internal/oidc/types.ts:284](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L284) |
| `authServerMeta.userinfo_encryption_alg_values_supported?` | `string`[] | JSON array containing a list of the JWE `alg` values supported by the UserInfo Endpoint. | [src/plugins/internal/oidc/types.ts:382](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L382) |
| `authServerMeta.userinfo_encryption_enc_values_supported?` | `string`[] | JSON array containing a list of the JWE `enc` values supported by the UserInfo Endpoint. | [src/plugins/internal/oidc/types.ts:386](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L386) |
| `authServerMeta.userinfo_endpoint?` | `string` | URL of the authorization server's UserInfo Endpoint. | [src/plugins/internal/oidc/types.ts:349](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L349) |
| `authServerMeta.userinfo_signing_alg_values_supported?` | `string`[] | JSON array containing a list of the JWS `alg` values supported by the UserInfo Endpoint. | [src/plugins/internal/oidc/types.ts:378](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L378) |
| <a id="callbackurl"></a> `callbackUrl` | `URL` | - | [src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts#L7) |
| <a id="expectedstate"></a> `expectedState?` | `string` | - | [src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts#L8) |

***

### ResolveAuthorizationRequestArgs

Defined in: [src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts#L10)

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="clientid-3"></a> `clientId` | `string` | - | [src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts#L12) |
| <a id="offer-2"></a> `offer` | \{ `credential_configuration_ids`: `string`[]; `credential_issuer`: `string`; `grants?`: \{ `authorization_code?`: \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \}; `urn:ietf:params:oauth:grant-type:pre-authorized_code?`: \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \}; \}; \} | - | [src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts#L11) |
| `offer.credential_configuration_ids` | `string`[] | array of unique strings that each identify one of the keys in name/value pairs stored in the `credential_configurations_supported` Credential Issuer Metadata | [src/plugins/internal/oidc/types.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L25) |
| `offer.credential_issuer` | `string` | url of the Credential Issuer from which the wallet is requested to obtain one or more Credentials the Wallet uses it to obtain the Credential Issuer's Metadata | [src/plugins/internal/oidc/types.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L20) |
| `offer.grants?` | \{ `authorization_code?`: \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \}; `urn:ietf:params:oauth:grant-type:pre-authorized_code?`: \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \}; \} | indicates the Grant Types the Authorization Server is prepared to process if `grants` is nil the Wallet must determine the Grant Types using the Metadata when multiple grants are present, it is at the Wallets discretion which to use | [src/plugins/internal/oidc/types.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L31) |
| `offer.grants.authorization_code?` | \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \} | - | [src/plugins/internal/oidc/types.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L32) |
| `offer.grants.authorization_code.authorization_server?` | `string` | can be used to identify the Authorization Server to use with this grant type when `authorization_servers` in Issuer Metadata has multiple entries | [src/plugins/internal/oidc/types.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L43) |
| `offer.grants.authorization_code.issuer_state?` | `string` | used to bind the Authorization Request with the Credential Issuer to a context if the Wallet decides to use the Authorization Code flow and received this value it must be included in the subsequent Authorization Reqest | [src/plugins/internal/oidc/types.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L38) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code?` | \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \} | - | [src/plugins/internal/oidc/types.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L46) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.authorization_server?` | `string` | can be used to identify the Authorization Server to use with this grant type when `authorization_servers` in Issuer Metadata has multiple entries | [src/plugins/internal/oidc/types.ts:63](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L63) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.interval?` | `number` | amount of time in seconds that the Wallet should wait between polling requests to the token endpoint | [src/plugins/internal/oidc/types.ts:58](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L58) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.pre-authorized_code` | `string` | code representing the Issuers authorization short lived and single use if the Wallet decides to use the pre-authorized_code flow, this value must be included in the subsequent Token Request | [src/plugins/internal/oidc/types.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L53) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code?` | \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \} | specifies whether the Authorization Server expects a presentation of a Transaction Code along with the Token Request | [src/plugins/internal/oidc/types.ts:68](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L68) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.description?` | `string` | - | [src/plugins/internal/oidc/types.ts:71](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L71) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.input_mode?` | `string` | - | [src/plugins/internal/oidc/types.ts:69](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L69) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.length?` | `number` | - | [src/plugins/internal/oidc/types.ts:70](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L70) |
| <a id="redirecturi-1"></a> `redirectUri` | `string` | - | [src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts#L13) |

***

### ResolveCredentialRequestArgs

Defined in: [src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts#L9)

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="clientid-4"></a> `clientId?` | `string` | - | [src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts#L11) |
| <a id="issuermeta-4"></a> `issuerMeta?` | \{ `authorization_servers?`: `string`[]; `batch_credential_endpoint?`: `string`; `credential_configurations_supported`: \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \}; `credential_endpoint`: `string`; `credential_identifiers_supported?`: `boolean`; `credential_issuer`: `string`; `credential_response_encryption?`: \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \}; `deferred_credential_endpoint?`: `string`; `display?`: \{ \}; `notification_endpoint?`: `string`; `signed_metadata?`: `string`; \} | - | [src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts#L12) |
| `issuerMeta.authorization_servers?` | `string`[] | - | [src/plugins/internal/oidc/types.ts:86](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L86) |
| `issuerMeta.batch_credential_endpoint?` | `string` | - | [src/plugins/internal/oidc/types.ts:95](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L95) |
| `issuerMeta.credential_configurations_supported` | \{[`key`: `string`]: \{ `credential_definition`: \{ `credentialSubject?`: \{ \}; `type`: `string`[]; \}; `credential_signing_alg_values_supported?`: `string`[]; `cryptographic_binding_methods_supported?`: `string`[]; `format`: `string`; `proof_types_supported?`: \{[`key`: `string`]: \{ `proof_signing_alg_values_supported`: `string`[]; \}; \}; `scope?`: `string`; \}; \} | - | [src/plugins/internal/oidc/types.ts:111](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L111) |
| `issuerMeta.credential_endpoint` | `string` | - | [src/plugins/internal/oidc/types.ts:90](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L90) |
| `issuerMeta.credential_identifiers_supported?` | `boolean` | - | [src/plugins/internal/oidc/types.ts:175](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L175) |
| `issuerMeta.credential_issuer` | `string` | - | [src/plugins/internal/oidc/types.ts:80](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L80) |
| `issuerMeta.credential_response_encryption?` | \{ `alg_values_supported`: `string`[]; `enc_values_supported`: `string`[]; `encryption_required`: `boolean`; \} | - | [src/plugins/internal/oidc/types.ts:155](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L155) |
| `issuerMeta.credential_response_encryption.alg_values_supported` | `string`[] | - | [src/plugins/internal/oidc/types.ts:159](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L159) |
| `issuerMeta.credential_response_encryption.enc_values_supported` | `string`[] | - | [src/plugins/internal/oidc/types.ts:163](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L163) |
| `issuerMeta.credential_response_encryption.encryption_required` | `boolean` | - | [src/plugins/internal/oidc/types.ts:169](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L169) |
| `issuerMeta.deferred_credential_endpoint?` | `string` | - | [src/plugins/internal/oidc/types.ts:100](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L100) |
| `issuerMeta.display?` | \{ \} | - | [src/plugins/internal/oidc/types.ts:178](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L178) |
| `issuerMeta.notification_endpoint?` | `string` | - | [src/plugins/internal/oidc/types.ts:105](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L105) |
| `issuerMeta.signed_metadata?` | `string` | - | [src/plugins/internal/oidc/types.ts:108](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L108) |
| <a id="offer-3"></a> `offer` | \{ `credential_configuration_ids`: `string`[]; `credential_issuer`: `string`; `grants?`: \{ `authorization_code?`: \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \}; `urn:ietf:params:oauth:grant-type:pre-authorized_code?`: \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \}; \}; \} | - | [src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts#L10) |
| `offer.credential_configuration_ids` | `string`[] | array of unique strings that each identify one of the keys in name/value pairs stored in the `credential_configurations_supported` Credential Issuer Metadata | [src/plugins/internal/oidc/types.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L25) |
| `offer.credential_issuer` | `string` | url of the Credential Issuer from which the wallet is requested to obtain one or more Credentials the Wallet uses it to obtain the Credential Issuer's Metadata | [src/plugins/internal/oidc/types.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L20) |
| `offer.grants?` | \{ `authorization_code?`: \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \}; `urn:ietf:params:oauth:grant-type:pre-authorized_code?`: \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \}; \} | indicates the Grant Types the Authorization Server is prepared to process if `grants` is nil the Wallet must determine the Grant Types using the Metadata when multiple grants are present, it is at the Wallets discretion which to use | [src/plugins/internal/oidc/types.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L31) |
| `offer.grants.authorization_code?` | \{ `authorization_server?`: `string`; `issuer_state?`: `string`; \} | - | [src/plugins/internal/oidc/types.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L32) |
| `offer.grants.authorization_code.authorization_server?` | `string` | can be used to identify the Authorization Server to use with this grant type when `authorization_servers` in Issuer Metadata has multiple entries | [src/plugins/internal/oidc/types.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L43) |
| `offer.grants.authorization_code.issuer_state?` | `string` | used to bind the Authorization Request with the Credential Issuer to a context if the Wallet decides to use the Authorization Code flow and received this value it must be included in the subsequent Authorization Reqest | [src/plugins/internal/oidc/types.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L38) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code?` | \{ `authorization_server?`: `string`; `interval?`: `number`; `pre-authorized_code`: `string`; `tx_code?`: \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \}; \} | - | [src/plugins/internal/oidc/types.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L46) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.authorization_server?` | `string` | can be used to identify the Authorization Server to use with this grant type when `authorization_servers` in Issuer Metadata has multiple entries | [src/plugins/internal/oidc/types.ts:63](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L63) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.interval?` | `number` | amount of time in seconds that the Wallet should wait between polling requests to the token endpoint | [src/plugins/internal/oidc/types.ts:58](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L58) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.pre-authorized_code` | `string` | code representing the Issuers authorization short lived and single use if the Wallet decides to use the pre-authorized_code flow, this value must be included in the subsequent Token Request | [src/plugins/internal/oidc/types.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L53) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code?` | \{ `description?`: `string`; `input_mode?`: `string`; `length?`: `number`; \} | specifies whether the Authorization Server expects a presentation of a Transaction Code along with the Token Request | [src/plugins/internal/oidc/types.ts:68](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L68) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.description?` | `string` | - | [src/plugins/internal/oidc/types.ts:71](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L71) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.input_mode?` | `string` | - | [src/plugins/internal/oidc/types.ts:69](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L69) |
| `offer.grants.urn:ietf:params:oauth:grant-type:pre-authorized_code.tx_code.length?` | `number` | - | [src/plugins/internal/oidc/types.ts:70](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L70) |
| <a id="tokenresponse-2"></a> `tokenResponse?` | \{ `access_token`: `string`; `c_nonce?`: `string`; `c_nonce_expires_in?`: `number`; `expires_in?`: `number`; `id_token?`: `string`; `refresh_expires_in?`: `number`; `refresh_token?`: `string`; `scope?`: `string`; `session_state?`: `string`; `token_type`: `string`; \} | - | [src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts#L13) |
| `tokenResponse.access_token` | `string` | - | [src/plugins/internal/oidc/types.ts:545](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L545) |
| `tokenResponse.c_nonce?` | `string` | - | [src/plugins/internal/oidc/types.ts:548](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L548) |
| `tokenResponse.c_nonce_expires_in?` | `number` | - | [src/plugins/internal/oidc/types.ts:549](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L549) |
| `tokenResponse.expires_in?` | `number` | - | [src/plugins/internal/oidc/types.ts:547](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L547) |
| `tokenResponse.id_token?` | `string` | - | [src/plugins/internal/oidc/types.ts:552](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L552) |
| `tokenResponse.refresh_expires_in?` | `number` | - | [src/plugins/internal/oidc/types.ts:551](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L551) |
| `tokenResponse.refresh_token?` | `string` | - | [src/plugins/internal/oidc/types.ts:550](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L550) |
| `tokenResponse.scope?` | `string` | - | [src/plugins/internal/oidc/types.ts:553](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L553) |
| `tokenResponse.session_state?` | `string` | - | [src/plugins/internal/oidc/types.ts:554](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L554) |
| `tokenResponse.token_type` | `string` | - | [src/plugins/internal/oidc/types.ts:546](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L546) |

***

### ResolveTokenRequestArgs

Defined in: [src/plugins/internal/oidc/connection/ResolveTokenRequest.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveTokenRequest.ts#L10)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="authorizationrequest-1"></a> `authorizationRequest` | [`AuthorizationRequest`](#authorizationrequest) | [src/plugins/internal/oidc/connection/ResolveTokenRequest.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveTokenRequest.ts#L11) |
| <a id="callbackurl-1"></a> `callbackUrl?` | `string` \| `URL` | [src/plugins/internal/oidc/connection/ResolveTokenRequest.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/connection/ResolveTokenRequest.ts#L12) |

## Type Aliases

### AuthServerMetadata

> **AuthServerMetadata** = `TB.Static`\<*typeof* [`AuthServerMetadata`](#authservermetadata-1)\>

Defined in: [src/plugins/internal/oidc/types.ts:225](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L225)

***

### Context

> **Context** = [`Context`](../../../overview/namespaces/Plugins.md#context)\<[`Modules`](#modules)\>

Defined in: [src/plugins/internal/oidc/plugin.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/plugin.ts#L6)

***

### CredentialOffer

> **CredentialOffer** = `TB.Static`\<*typeof* [`CredentialOffer`](#credentialoffer-1)\>

Defined in: [src/plugins/internal/oidc/types.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L13)

***

### IssuerMetadata

> **IssuerMetadata** = `TB.Static`\<*typeof* [`IssuerMetadata`](#issuermetadata-1)\>

Defined in: [src/plugins/internal/oidc/types.ts:77](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L77)

***

### Modules

> **Modules** = \{ `OIDC`: [`OIDCModule`](#oidcmodule); \}

Defined in: [src/plugins/internal/oidc/plugin.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/plugin.ts#L5)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="oidc"></a> `OIDC` | [`OIDCModule`](#oidcmodule) | [src/plugins/internal/oidc/plugin.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/plugin.ts#L5) |

***

### TokenResponse

> **TokenResponse** = `TB.Static`\<*typeof* [`TokenResponse`](#tokenresponse-4)\>

Defined in: [src/plugins/internal/oidc/types.ts:543](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L543)

## Variables

### AuthServerMetadata

> **AuthServerMetadata**: `TObject`\<\{ `acr_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `authorization_encryption_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `authorization_encryption_enc_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `authorization_endpoint`: `TOptional`\<`TString`\>; `authorization_response_iss_parameter_supported`: `TOptional`\<`TBoolean`\>; `authorization_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `backchannel_authentication_endpoint`: `TOptional`\<`TString`\>; `backchannel_authentication_request_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `backchannel_logout_session_supported`: `TOptional`\<`TBoolean`\>; `backchannel_logout_supported`: `TOptional`\<`TBoolean`\>; `backchannel_token_delivery_modes_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `backchannel_user_code_parameter_supported`: `TOptional`\<`TBoolean`\>; `check_session_iframe`: `TOptional`\<`TString`\>; `claim_types_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `claims_locales_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `claims_parameter_supported`: `TOptional`\<`TBoolean`\>; `claims_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `code_challenge_methods_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `device_authorization_endpoint`: `TOptional`\<`TString`\>; `display_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `dpop_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `end_session_endpoint`: `TOptional`\<`TString`\>; `frontchannel_logout_session_supported`: `TOptional`\<`TBoolean`\>; `frontchannel_logout_supported`: `TOptional`\<`TBoolean`\>; `grant_types_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `id_token_encryption_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `id_token_encryption_enc_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `id_token_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `introspection_encryption_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `introspection_encryption_enc_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `introspection_endpoint`: `TOptional`\<`TString`\>; `introspection_endpoint_auth_methods_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `introspection_endpoint_auth_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `introspection_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `issuer`: `TString`; `jwks_uri`: `TOptional`\<`TString`\>; `mtls_endpoint_aliases`: `TOptional`\<`TObject`\<\{ \}\>\>; `op_policy_uri`: `TOptional`\<`TString`\>; `op_tos_uri`: `TOptional`\<`TString`\>; `pushed_authorization_request_endpoint`: `TOptional`\<`TString`\>; `registration_endpoint`: `TOptional`\<`TString`\>; `request_object_encryption_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `request_object_encryption_enc_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `request_object_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `request_parameter_supported`: `TOptional`\<`TBoolean`\>; `request_uri_parameter_supported`: `TOptional`\<`TBoolean`\>; `require_pushed_authorization_requests`: `TOptional`\<`TBoolean`\>; `require_request_uri_registration`: `TOptional`\<`TBoolean`\>; `require_signed_request_object`: `TOptional`\<`TBoolean`\>; `response_modes_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `response_types_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `revocation_endpoint`: `TOptional`\<`TString`\>; `revocation_endpoint_auth_methods_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `revocation_endpoint_auth_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `scopes_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `service_documentation`: `TOptional`\<`TString`\>; `signed_metadata`: `TOptional`\<`TString`\>; `subject_types_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `tls_client_certificate_bound_access_tokens`: `TOptional`\<`TBoolean`\>; `token_endpoint`: `TOptional`\<`TString`\>; `token_endpoint_auth_methods_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `token_endpoint_auth_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `ui_locales_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `userinfo_encryption_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `userinfo_encryption_enc_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `userinfo_endpoint`: `TOptional`\<`TString`\>; `userinfo_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; \}\>

Defined in: [src/plugins/internal/oidc/types.ts:225](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L225)

***

### CredentialOffer

> **CredentialOffer**: `TObject`\<\{ `credential_configuration_ids`: `TArray`\<`TString`\>; `credential_issuer`: `TString`; `grants`: `TOptional`\<`TObject`\<\{ `authorization_code`: `TOptional`\<`TObject`\<\{ `authorization_server`: `TOptional`\<`TString`\>; `issuer_state`: `TOptional`\<`TString`\>; \}\>\>; `urn:ietf:params:oauth:grant-type:pre-authorized_code`: `TOptional`\<`TObject`\<\{ `authorization_server`: `TOptional`\<`TString`\>; `interval`: `TOptional`\<`TNumber`\>; `pre-authorized_code`: `TString`; `tx_code`: `TOptional`\<`TObject`\<\{ `description`: ...; `input_mode`: ...; `length`: ...; \}\>\>; \}\>\>; \}\>\>; \}\>

Defined in: [src/plugins/internal/oidc/types.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L13)

***

### IssuerMetadata

> **IssuerMetadata**: `TObject`\<\{ `authorization_servers`: `TOptional`\<`TArray`\<`TString`\>\>; `batch_credential_endpoint`: `TOptional`\<`TString`\>; `credential_configurations_supported`: `TRecord`\<`TString`, `TObject`\<\{ `credential_definition`: `TObject`\<\{ `credentialSubject`: `TOptional`\<`TObject`\<\{ \}\>\>; `type`: `TArray`\<`TString`\>; \}\>; `credential_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `cryptographic_binding_methods_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `format`: `TString`; `proof_types_supported`: `TOptional`\<`TRecord`\<`TString`, `TObject`\<\{ `proof_signing_alg_values_supported`: `TArray`\<`TString`\>; \}\>\>\>; `scope`: `TOptional`\<`TString`\>; \}\>\>; `credential_endpoint`: `TString`; `credential_identifiers_supported`: `TOptional`\<`TBoolean`\>; `credential_issuer`: `TString`; `credential_response_encryption`: `TOptional`\<`TObject`\<\{ `alg_values_supported`: `TArray`\<`TString`\>; `enc_values_supported`: `TArray`\<`TString`\>; `encryption_required`: `TBoolean`; \}\>\>; `deferred_credential_endpoint`: `TOptional`\<`TString`\>; `display`: `TOptional`\<`TObject`\<\{ \}\>\>; `notification_endpoint`: `TOptional`\<`TString`\>; `signed_metadata`: `TOptional`\<`TString`\>; \}\>

Defined in: [src/plugins/internal/oidc/types.ts:77](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L77)

***

### plugin

> `const` **plugin**: [`Plugin`](../../../overview/README.md#plugin)

Defined in: [src/plugins/internal/oidc/plugin.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/plugin.ts#L8)

***

### TokenResponse

> **TokenResponse**: `TObject`\<\{ `access_token`: `TString`; `c_nonce`: `TOptional`\<`TString`\>; `c_nonce_expires_in`: `TOptional`\<`TNumber`\>; `expires_in`: `TOptional`\<`TNumber`\>; `id_token`: `TOptional`\<`TString`\>; `refresh_expires_in`: `TOptional`\<`TNumber`\>; `refresh_token`: `TOptional`\<`TString`\>; `scope`: `TOptional`\<`TString`\>; `session_state`: `TOptional`\<`TString`\>; `token_type`: `TString`; \}\>

Defined in: [src/plugins/internal/oidc/types.ts:543](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/oidc/types.ts#L543)
