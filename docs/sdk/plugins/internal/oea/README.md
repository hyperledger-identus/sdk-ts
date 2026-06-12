[**@hyperledger/identus-sdk v7.0.0**](../../../README.md)

***

[@hyperledger/identus-sdk](../../../README.md) / plugins/internal/oea

# plugins/internal/oea

<!-- title: OEA -->
<!-- sidebar_label: OEA -->
<!-- sidebar_position: 4 -->

This export contains the OEA plugin for the Identus SDK
Please use the following export

## How to use
Typescript / esmodules

```typescript
import * as OEA from "@hyperledger/identus-sdk/plugins/oea";
```

Or with cjs modules

```typescript
const OEA = require("@hyperledger/identus-sdk/plugins/oea");
```

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [OEA](namespaces/OEA/README.md) | - |

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [CredentialType](enumerations/CredentialType.md) | - |
| [JWT\_ALG](enumerations/JWT_ALG.md) | - |

## Classes

| Class | Description |
| ------ | ------ |
| [CreatePresentation](classes/CreatePresentation.md) | - |
| [CreatePresentationRequest](classes/CreatePresentationRequest.md) | - |
| [HandlePresentation](classes/HandlePresentation.md) | - |
| [HandleRevocation](classes/HandleRevocation.md) | - |
| [HandshakeRequest](classes/HandshakeRequest.md) | - |
| [Presentation](classes/Presentation.md) | - |
| [ProposePresentation](classes/ProposePresentation.md) | - |
| [RequestPresentation](classes/RequestPresentation.md) | - |
| [RevocationNotification](classes/RevocationNotification.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [CreatePresentationArgs](interfaces/CreatePresentationArgs.md) | Asyncronously create a verifiablePresentation from a valid stored verifiableCredential This is used when the verified requests a specific verifiable credential, this will create the actual instance of the presentation which we can share with the verifier. |
| [CreatePresentationRequestArgs](interfaces/CreatePresentationRequestArgs.md) | - |
| [HandlePresentationArgs](interfaces/HandlePresentationArgs.md) | - |
| [HandleRevocationArgs](interfaces/HandleRevocationArgs.md) | Asyncronously prepare a request credential message from a valid offerCredential for now supporting w3c verifiable credentials offers. |
| [HandshakeRequestBody](interfaces/HandshakeRequestBody.md) | No specification available |
| [PresentationBody](interfaces/PresentationBody.md) | Specification: https://github.com/decentralized-identity/waci-didcomm/blob/main/present_proof/present-proof-v3.md#presentation |
| [PrismRevocationBody](interfaces/PrismRevocationBody.md) | No specification available |
| [ProposePresentationBody](interfaces/ProposePresentationBody.md) | Specification: https://github.com/decentralized-identity/waci-didcomm/blob/main/present_proof/present-proof-v3.md#propose-presentation |
| [RequestPresentationBody](interfaces/RequestPresentationBody.md) | Specification: https://github.com/decentralized-identity/waci-didcomm/blob/main/present_proof/present-proof-v3.md#request-presentation |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [CreatePresentationRequestTaskContext](type-aliases/CreatePresentationRequestTaskContext.md) | - |
| [PresentationClaims](type-aliases/PresentationClaims.md) | - |
| [W3CVerifiableCredential](type-aliases/W3CVerifiableCredential.md) | - |
| [W3CVerifiablePresentation](type-aliases/W3CVerifiablePresentation.md) | - |
| [W3CVerifiablePresentationProof](type-aliases/W3CVerifiablePresentationProof.md) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [plugin](variables/plugin.md) | - |
