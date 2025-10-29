[**@hyperledger/identus-sdk v7.0.0**](../../../README.md)

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
| [Protocols](namespaces/Protocols/README.md) | - |

## Classes

| Class | Description |
| ------ | ------ |
| [AuthorizationRequest](classes/AuthorizationRequest.md) | - |
| [AuthorizationResponse](classes/AuthorizationResponse.md) | - |
| [CreateAuthorizationRequest](classes/CreateAuthorizationRequest.md) | manage the creation of an Authorization Request |
| [CreateCredentialRequest](classes/CreateCredentialRequest.md) | create a CredentialRequest for the given offer a connection with the relevant Issuer must have already been established |
| [CredentialRequest](classes/CredentialRequest.md) | - |
| [FetchAuthServerMeta](classes/FetchAuthServerMeta.md) | try to retrieve Authorization Server Metadata from the give URI `/.well-known/openid-configuration` will be appended to the URI |
| [FetchIssuerMetadata](classes/FetchIssuerMetadata.md) | try to retrieve Issuer Metadata from the given URI `/.well-known/openid-credential-issuer` will be appended to the uri |
| [OIDCConnection](classes/OIDCConnection.md) | Define the structure of a Connection |
| [OIDCModule](classes/OIDCModule.md) | https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html |
| [ParseCredentialOffer](classes/ParseCredentialOffer.md) | validates the offer is correctly formed OIDC Credential Offer returns the offer Typed as such |
| [ProcessCallbackUrl](classes/ProcessCallbackUrl.md) | A Task encapsulates a unit of work |
| [ResolveAuthorizationRequest](classes/ResolveAuthorizationRequest.md) | OIDC Convenience Task Credential Offer to Authorization Request |
| [ResolveCredentialRequest](classes/ResolveCredentialRequest.md) | OIDC Convenience Task Credential Offer to issued Credential |
| [ResolveTokenRequest](classes/ResolveTokenRequest.md) | OIDC Convenience Task CallbackUrl to established Connection |
| [TokenRequest](classes/TokenRequest.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [AuthorizationRequestMetadata](interfaces/AuthorizationRequestMetadata.md) | - |
| [CreateAuthorizationRequestArgs](interfaces/CreateAuthorizationRequestArgs.md) | - |
| [CreateCredentialRequestArgs](interfaces/CreateCredentialRequestArgs.md) | - |
| [FetchAuthServerMetaArgs](interfaces/FetchAuthServerMetaArgs.md) | - |
| [FetchIssuerMetadataArgs](interfaces/FetchIssuerMetadataArgs.md) | - |
| [ParseCredentialOfferArgs](interfaces/ParseCredentialOfferArgs.md) | attempt to extract a Credential Offer from the given value |
| [ProcessCallbackUrlArgs](interfaces/ProcessCallbackUrlArgs.md) | - |
| [ResolveAuthorizationRequestArgs](interfaces/ResolveAuthorizationRequestArgs.md) | - |
| [ResolveCredentialRequestArgs](interfaces/ResolveCredentialRequestArgs.md) | - |
| [ResolveTokenRequestArgs](interfaces/ResolveTokenRequestArgs.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [AuthServerMetadata](type-aliases/AuthServerMetadata.md) | - |
| [Context](type-aliases/Context.md) | - |
| [CredentialOffer](type-aliases/CredentialOffer.md) | - |
| [IssuerMetadata](type-aliases/IssuerMetadata.md) | - |
| [Modules](type-aliases/Modules.md) | - |
| [TokenResponse](type-aliases/TokenResponse.md) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [AuthServerMetadata](variables/AuthServerMetadata.md) | - |
| [CredentialOffer](variables/CredentialOffer.md) | - |
| [IssuerMetadata](variables/IssuerMetadata.md) | - |
| [plugin](variables/plugin.md) | - |
| [TokenResponse](variables/TokenResponse.md) | - |
