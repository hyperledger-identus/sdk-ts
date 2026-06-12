[**@hyperledger/identus-sdk v7.0.0**](../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../README.md) / [plugins/internal/oea](../../README.md) / OEA

# OEA

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [DescriptorItemFormat](enumerations/DescriptorItemFormat.md) | - |
| [InputLimitDisclosure](enumerations/InputLimitDisclosure.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [CredentialOffer](interfaces/CredentialOffer.md) | - |
| [DescriptorItem](interfaces/DescriptorItem.md) | - |
| [PresentationRequest](interfaces/PresentationRequest.md) | - |
| [PresentationSubmission](interfaces/PresentationSubmission.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [DefinitionFormat](type-aliases/DefinitionFormat.md) | - |
| [InputConstraints](type-aliases/InputConstraints.md) | - |
| [InputDescriptor](type-aliases/InputDescriptor.md) | - |
| [InputField](type-aliases/InputField.md) | - |
| [InputFieldFilter](type-aliases/InputFieldFilter.md) | - |
| [JWTPresentationClaims](type-aliases/JWTPresentationClaims.md) | - |
| [PredicateType](type-aliases/PredicateType.md) | - |
| [SDJWTPresentationClaims](type-aliases/SDJWTPresentationClaims.md) | - |
| [SDJWTPresentationSubmission](type-aliases/SDJWTPresentationSubmission.md) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [JWT](variables/JWT.md) | W3C standard credential format identifier for JWT credentials |
| [PRISM\_JWT](variables/PRISM_JWT.md) | - |
| [PRISM\_SDJWT](variables/PRISM_SDJWT.md) | - |
| [ProtocolIds](variables/ProtocolIds.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [normalizeCredentialFormat](functions/normalizeCredentialFormat.md) | Normalizes a credential format string to the canonical format. Treats "jwt" and "prism/jwt" as equivalent (returns "prism/jwt" for backward compat). |
