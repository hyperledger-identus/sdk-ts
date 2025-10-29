[**@hyperledger/identus-sdk v7.0.0**](../../../README.md)

***

[@hyperledger/identus-sdk](../../../README.md) / [overview](../../README.md) / Domain

# Domain

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [AgentError](namespaces/AgentError/README.md) | - |
| [ApolloError](namespaces/ApolloError/README.md) | - |
| [Backup](namespaces/Backup/README.md) | - |
| [CastorError](namespaces/CastorError/README.md) | - |
| [CommonError](namespaces/CommonError/README.md) | - |
| [DIDDocument](namespaces/DIDDocument/README.md) | - |
| [ExportableKey](namespaces/ExportableKey/README.md) | Declaration merge to contain key conversion functions |
| [ImportableKey](namespaces/ImportableKey/README.md) | - |
| [JWK](namespaces/JWK/README.md) | JWK definitions based on https://www.iana.org/assignments/jose/jose.xhtml |
| [JWT](namespaces/JWT/README.md) | - |
| [MercuryError](namespaces/MercuryError/README.md) | - |
| [Message](namespaces/Message/README.md) | - |
| [Models](namespaces/Models/README.md) | - |
| [PEM](namespaces/PEM/README.md) | - |
| [Pluto](namespaces/Pluto/README.md) | - |
| [PlutoError](namespaces/PlutoError/README.md) | - |
| [PolluxError](namespaces/PolluxError/README.md) | - |
| [Protocols](namespaces/Protocols/README.md) | - |
| [Schema](namespaces/Schema/README.md) | - |
| [Startable](namespaces/Startable/README.md) | Define controls for managing entity lifecycle. |
| [StorableKey](namespaces/StorableKey/README.md) | - |

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [CredentialType](enumerations/CredentialType.md) | - |
| [Curve](enumerations/Curve.md) | - |
| [JWT\_ALG](enumerations/JWT_ALG.md) | - |
| [KeyProperties](enumerations/KeyProperties.md) | - |
| [KeyTypes](enumerations/KeyTypes.md) | - |
| [MessageDirection](enumerations/MessageDirection.md) | - |

## Classes

| Class | Description |
| ------ | ------ |
| [ApiError](classes/ApiError.md) | - |
| [ApiRequest](classes/ApiRequest.md) | - |
| [ApiResponse](classes/ApiResponse.md) | - |
| [AttachmentDescriptor](classes/AttachmentDescriptor.md) | - |
| [Credential](classes/Credential.md) | Storable define properties a Domain object must implement to be compatible with Pluto |
| [CredentialMetadata](classes/CredentialMetadata.md) | Storable define properties a Domain object must implement to be compatible with Pluto |
| [DerivableKey](classes/DerivableKey.md) | - |
| [DID](classes/DID.md) | Storable define properties a Domain object must implement to be compatible with Pluto |
| [DIDDocument](classes/DIDDocument.md) | - |
| [DIDPair](classes/DIDPair.md) | - |
| [DIDResolver](classes/DIDResolver.md) | - |
| [DIDUrl](classes/DIDUrl.md) | - |
| [Key](classes/Key.md) | - |
| [KeyPair](classes/KeyPair.md) | - |
| [LinkSecret](classes/LinkSecret.md) | Storable define properties a Domain object must implement to be compatible with Pluto |
| [Message](classes/Message.md) | Storable define properties a Domain object must implement to be compatible with Pluto |
| [PrismDID](classes/PrismDID.md) | - |
| [PrivateKey](classes/PrivateKey.md) | Storable define properties a Domain object must implement to be compatible with Pluto |
| [PublicKey](classes/PublicKey.md) | - |
| [SignableKey](classes/SignableKey.md) | - |
| [VerifiableKey](classes/VerifiableKey.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [Api](interfaces/Api.md) | Api Dependency |
| [Apollo](interfaces/Apollo.md) | - |
| [AttachmentBase64](interfaces/AttachmentBase64.md) | - |
| [AttachmentHeader](interfaces/AttachmentHeader.md) | - |
| [AttachmentJws](interfaces/AttachmentJws.md) | - |
| [AttachmentJwsData](interfaces/AttachmentJwsData.md) | - |
| [AttachmentLinkData](interfaces/AttachmentLinkData.md) | - |
| [Castor](interfaces/Castor.md) | - |
| [KeyCurve](interfaces/KeyCurve.md) | - |
| [KeyRestoration](interfaces/KeyRestoration.md) | KeyRestoration protocol defines methods for verifying and restoring cryptographic keys from raw data. |
| [Mediator](interfaces/Mediator.md) | - |
| [Mercury](interfaces/Mercury.md) | - |
| [Options](interfaces/Options.md) | Factory options to customise export / import functions |
| [Pluto](interfaces/Pluto.md) | Pluto is a storage interface describing storage requirements of the edge agents which will be implemented using this SDK. Implement this interface using your preferred underlying storage technology, most appropriate for your use case. |
| [ProvableCredential](interfaces/ProvableCredential.md) | - |
| [Seed](interfaces/Seed.md) | - |
| [SeedWords](interfaces/SeedWords.md) | - |
| [Signature](interfaces/Signature.md) | - |
| [StorableCredential](interfaces/StorableCredential.md) | - |
| [StorableKey](interfaces/StorableKey.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [AttachmentData](type-aliases/AttachmentData.md) | - |
| [AttachmentJsonData](type-aliases/AttachmentJsonData.md) | - |
| [Claim](type-aliases/Claim.md) | - |
| [ExportableKey](type-aliases/ExportableKey.md) | ExportableKey defines the formats a crypographic key can be converted to Default is all |
| [HttpMethod](type-aliases/HttpMethod.md) | - |
| [JsonString](type-aliases/JsonString.md) | - |
| [JWK](type-aliases/JWK.md) | JWK |
| [MnemonicWordList](type-aliases/MnemonicWordList.md) | - |
| [PresentationClaims](type-aliases/PresentationClaims.md) | - |
| [Schema](type-aliases/Schema.md) | - |
| [W3CVerifiableCredential](type-aliases/W3CVerifiableCredential.md) | - |
| [W3CVerifiablePresentation](type-aliases/W3CVerifiablePresentation.md) | - |
| [W3CVerifiablePresentationProof](type-aliases/W3CVerifiablePresentationProof.md) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [credential](variables/credential.md) | - |
| [did](variables/did.md) | - |
| [didpair](variables/didpair.md) | - |
| [key](variables/key.md) | - |
| [linksecret](variables/linksecret.md) | - |
| [mediator](variables/mediator.md) | - |
| [message](variables/message.md) | - |
| [Schema](variables/Schema.md) | - |
