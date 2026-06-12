[**@hyperledger/identus-sdk v7.0.0**](../../../README.md)

***

[@hyperledger/identus-sdk](../../../README.md) / plugins/internal/didcomm

# plugins/internal/didcomm

<!-- title: DIDComm -->
<!-- sidebar_label: DIDComm -->
<!-- sidebar_position: 2 -->

This export contains the DIDComm plugin for the Identus SDK

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [InvitationTypes](enumerations/InvitationTypes.md) | - |

## Classes

| Class | Description |
| ------ | ------ |
| [BasicMessage](classes/BasicMessage.md) | - |
| [CreateOOBOffer](classes/CreateOOBOffer.md) | Task class for creating out-of-band (OOB) credential offer invitations. |
| [CreateOOBPresentationRequest](classes/CreateOOBPresentationRequest.md) | Task class for creating out-of-band (OOB) presentation request invitations. |
| [DIDCommConnection](classes/DIDCommConnection.md) | Define the structure of a Connection |
| [IssueCredential](classes/IssueCredential.md) | - |
| [MediationKeysUpdateList](classes/MediationKeysUpdateList.md) | - |
| [MediationRequest](classes/MediationRequest.md) | - |
| [MediatorConnection](classes/MediatorConnection.md) | Define the structure of a Connection |
| [OfferCredential](classes/OfferCredential.md) | - |
| [OutOfBandInvitation](classes/OutOfBandInvitation.md) | - |
| [ParseInvitation](classes/ParseInvitation.md) | Task class for parsing different types of invitations. |
| [ParseOOBInvitation](classes/ParseOOBInvitation.md) | - |
| [ParsePrismInvitation](classes/ParsePrismInvitation.md) | - |
| [PickupReceived](classes/PickupReceived.md) | - |
| [PickupRequest](classes/PickupRequest.md) | - |
| [PrismOnboardingInvitation](classes/PrismOnboardingInvitation.md) | - |
| [ProblemReport](classes/ProblemReport.md) | - |
| [ProposeCredential](classes/ProposeCredential.md) | - |
| [RequestCredential](classes/RequestCredential.md) | - |
| [Send](classes/Send.md) | - |
| [StartFetchingMessages](classes/StartFetchingMessages.md) | - |
| [StartMediator](classes/StartMediator.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [Attribute](interfaces/Attribute.md) | - |
| [BasicMessageBody](interfaces/BasicMessageBody.md) | Specification: https://didcomm.org/basicmessage/2.0/ |
| [CreateOOBOfferArgs](interfaces/CreateOOBOfferArgs.md) | Arguments for creating an out-of-band (OOB) offer invitation |
| [CreateOOBPresentationRequestArgs](interfaces/CreateOOBPresentationRequestArgs.md) | Arguments for creating an out-of-band (OOB) presentation request invitation |
| [CredentialFormat](interfaces/CredentialFormat.md) | Specification: https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential#request-credential |
| [CredentialPreview](interfaces/CredentialPreview.md) | Specification: https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential#preview-credential |
| [IssueCredentialBody](interfaces/IssueCredentialBody.md) | Specification: https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential#issue-credential |
| [MediationKeysUpdateListBody](interfaces/MediationKeysUpdateListBody.md) | Specification: https://didcomm.org/coordinate-mediation/2.0/ |
| [OfferCredentialBody](interfaces/OfferCredentialBody.md) | Specification: https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential#offer-credential |
| [OutOfBandInvitationBody](interfaces/OutOfBandInvitationBody.md) | - |
| [ParseInvitationArgs](interfaces/ParseInvitationArgs.md) | Arguments for parsing an invitation |
| [ParseOOBInvitationArgs](interfaces/ParseOOBInvitationArgs.md) | parse OOB invitation |
| [ParsePrismInvitationArgs](interfaces/ParsePrismInvitationArgs.md) | parse a prismOnboarding invitation |
| [PickupReceivedBody](interfaces/PickupReceivedBody.md) | Specification: https://didcomm.org/messagepickup/3.0/ |
| [PickupRequestBody](interfaces/PickupRequestBody.md) | Specification: https://didcomm.org/messagepickup/3.0/ |
| [PrismOnboardingInvitationBody](interfaces/PrismOnboardingInvitationBody.md) | - |
| [ProblemReportBody](interfaces/ProblemReportBody.md) | Specification: https://identity.foundation/didcomm-messaging/spec/#problem-reports |
| [ProposeCredentialBody](interfaces/ProposeCredentialBody.md) | Specification: https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential#propose-credential |
| [RequestCredentialBody](interfaces/RequestCredentialBody.md) | - |
| [SendArgs](interfaces/SendArgs.md) | attempt to deliver a Message across a Connection |
| [StartFetchingMessagesArgs](interfaces/StartFetchingMessagesArgs.md) | Handle the setup of fetching messages from the Mediator |
| [StartMediatorArgs](interfaces/StartMediatorArgs.md) | Handle existing mediator logic either reconnects existing mediator or tries to establish new connection |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [Context](type-aliases/Context.md) | - |
| [InvitationType](type-aliases/InvitationType.md) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [plugin](variables/plugin.md) | - |
| [ProtocolIds](variables/ProtocolIds.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [validateCredentialPreview](functions/validateCredentialPreview.md) | - |
