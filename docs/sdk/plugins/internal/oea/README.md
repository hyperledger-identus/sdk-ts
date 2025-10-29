[**@hyperledger/identus-sdk v7.0.0**](../../../README.md)

***

[@hyperledger/identus-sdk](../../../README.md) / plugins/internal/oea

# plugins/internal/oea

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

## Classes

| Class | Description |
| ------ | ------ |
| [HandlePresentation](classes/HandlePresentation.md) | A Task encapsulates a unit of work |
| [HandleRevocation](classes/HandleRevocation.md) | A Task encapsulates a unit of work |
| [HandshakeRequest](classes/HandshakeRequest.md) | - |
| [Presentation](classes/Presentation.md) | - |
| [ProposePresentation](classes/ProposePresentation.md) | - |
| [RequestPresentation](classes/RequestPresentation.md) | - |
| [RevocationNotification](classes/RevocationNotification.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [HandlePresentationArgs](interfaces/HandlePresentationArgs.md) | - |
| [HandleRevocationArgs](interfaces/HandleRevocationArgs.md) | Asyncronously prepare a request credential message from a valid offerCredential for now supporting w3c verifiable credentials offers. |
| [HandshakeRequestBody](interfaces/HandshakeRequestBody.md) | No specification available |
| [PresentationBody](interfaces/PresentationBody.md) | Specification: https://github.com/decentralized-identity/waci-didcomm/blob/main/present_proof/present-proof-v3.md#presentation |
| [PrismRevocationBody](interfaces/PrismRevocationBody.md) | No specification available |
| [ProposePresentationBody](interfaces/ProposePresentationBody.md) | Specification: https://github.com/decentralized-identity/waci-didcomm/blob/main/present_proof/present-proof-v3.md#propose-presentation |
| [RequestPresentationBody](interfaces/RequestPresentationBody.md) | Specification: https://github.com/decentralized-identity/waci-didcomm/blob/main/present_proof/present-proof-v3.md#request-presentation |

## Variables

| Variable | Description |
| ------ | ------ |
| [plugin](variables/plugin.md) | - |

## References

### CreatePresentation {#createpresentation}

Re-exports [CreatePresentation](../../../overview/classes/CreatePresentation.md)

***

### CreatePresentationArgs {#createpresentationargs}

Re-exports [CreatePresentationArgs](../../../overview/interfaces/CreatePresentationArgs.md)

***

### CreatePresentationRequest {#createpresentationrequest}

Re-exports [CreatePresentationRequest](../../../overview/classes/CreatePresentationRequest.md)

***

### CreatePresentationRequestArgs {#createpresentationrequestargs}

Re-exports [CreatePresentationRequestArgs](../../../overview/interfaces/CreatePresentationRequestArgs.md)
