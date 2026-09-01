[**@hyperledger/identus-sdk v8.1.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / IssuerMetadata

# Variable: IssuerMetadata

> **IssuerMetadata**: `TObject`\<\{ `authorization_servers`: `TOptional`\<`TArray`\<`TString`\>\>; `batch_credential_endpoint`: `TOptional`\<`TString`\>; `credential_configurations_supported`: `TRecord`\<`TString`, `TObject`\<\{ `credential_definition`: `TObject`\<\{ `credentialSubject`: `TOptional`\<`TObject`\<\{ \}\>\>; `type`: `TArray`\<`TString`\>; \}\>; `credential_signing_alg_values_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `cryptographic_binding_methods_supported`: `TOptional`\<`TArray`\<`TString`\>\>; `format`: `TString`; `proof_types_supported`: `TOptional`\<`TRecord`\<`TString`, `TObject`\<\{ `proof_signing_alg_values_supported`: `TArray`\<`TString`\>; \}\>\>\>; `scope`: `TOptional`\<`TString`\>; \}\>\>; `credential_endpoint`: `TString`; `credential_identifiers_supported`: `TOptional`\<`TBoolean`\>; `credential_issuer`: `TString`; `credential_response_encryption`: `TOptional`\<`TObject`\<\{ `alg_values_supported`: `TArray`\<`TString`\>; `enc_values_supported`: `TArray`\<`TString`\>; `encryption_required`: `TBoolean`; \}\>\>; `deferred_credential_endpoint`: `TOptional`\<`TString`\>; `display`: `TOptional`\<`TObject`\<\{ \}\>\>; `notification_endpoint`: `TOptional`\<`TString`\>; `signed_metadata`: `TOptional`\<`TString`\>; \}\>

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/types.ts:77](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/internal/oidc/types.ts#L77)
