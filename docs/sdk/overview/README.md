[**@hyperledger/identus-sdk v7.0.0**](../README.md)

***

[@hyperledger/identus-sdk](../README.md) / overview

# overview

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [Connection](namespaces/Connection/README.md) | - |
| [DIDLink](namespaces/DIDLink/README.md) | Declaration merge to group Types |
| [Domain](namespaces/Domain/README.md) | - |
| [Payload](namespaces/Payload/README.md) | - |
| [PeerDID](namespaces/PeerDID/README.md) | - |
| [Plugins](namespaces/Plugins/README.md) | - |
| [Pluto](namespaces/Pluto/README.md) | Pluto implementation |
| [Utils](namespaces/Utils/README.md) | - |

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [AnonCredsCredentialProperties](enumerations/AnonCredsCredentialProperties.md) | - |
| [JWT\_VC\_PROPS](enumerations/JWT_VC_PROPS.md) | - |
| [JWT\_VP\_PROPS](enumerations/JWT_VP_PROPS.md) | - |
| [ListenerKey](enumerations/ListenerKey.md) | - |
| [SDJWT\_VP\_PROPS](enumerations/SDJWT_VP_PROPS.md) | - |

## Classes

| Class | Description |
| ------ | ------ |
| [Agent](classes/Agent.md) | Edge agent implementation |
| [AgentBackup](classes/AgentBackup.md) | - |
| [AgentContext](classes/AgentContext.md) | Context is provided to running tasks it optimistically provides access to Modules |
| [AnonCredsCredential](classes/AnonCredsCredential.md) | Storable define properties a Domain object must implement to be compatible with Pluto |
| [ApiImpl](classes/ApiImpl.md) | Implement API using built in fetch |
| [Apollo](classes/Apollo.md) | Apollo defines the set of cryptographic operations. |
| [BackupManager](classes/BackupManager.md) | BackupManager handle the different versions of backup and restore |
| [BaseRepository](classes/BaseRepository.md) | BaseRepository |
| [CancellableTask](classes/CancellableTask.md) | - |
| [Castor](classes/Castor.md) | Castor is a powerful and flexible library for working with DIDs. Whether you are building a decentralised application or a more traditional system requiring secure and private identity management, Castor provides the tools and features you need to easily create, manage, and resolve DIDs. |
| [ConnectionsManager](classes/ConnectionsManager.md) | ConnectionsManager is responsible for handling Connections and Mediators |
| [CreateOOBOffer](classes/CreateOOBOffer.md) | Task class for creating out-of-band (OOB) credential offer invitations. |
| [CreateOOBPresentationRequest](classes/CreateOOBPresentationRequest.md) | Task class for creating out-of-band (OOB) presentation request invitations. |
| [~~CreatePresentation~~](classes/CreatePresentation.md) | - |
| [~~CreatePresentationRequest~~](classes/CreatePresentationRequest.md) | - |
| [CreatePrismDID](classes/CreatePrismDID.md) | Handle the creation of a PrismDID |
| [CredentialMetadataRepository](classes/CredentialMetadataRepository.md) | MapperRepository |
| [CredentialRepository](classes/CredentialRepository.md) | MapperRepository |
| [DIDCommWrapper](classes/DIDCommWrapper.md) | - |
| [DIDKeyLinkRepository](classes/DIDKeyLinkRepository.md) | LinkRepository |
| [DIDLinkRepository](classes/DIDLinkRepository.md) | LinkRepository |
| [DIDRepository](classes/DIDRepository.md) | MapperRepository |
| [EventsManager](classes/EventsManager.md) | An extension for the Edge agent that gives it capability of creating listeners for specific events and also emitting or notifying any listener available with the new event. |
| [ForwardMessage](classes/ForwardMessage.md) | - |
| [JobManager](classes/JobManager.md) | - |
| [JWT](classes/JWT.md) | used to enable Modules to propagate the Context and have access to runTask |
| [JWTCredential](classes/JWTCredential.md) | Storable define properties a Domain object must implement to be compatible with Pluto |
| [KeyRepository](classes/KeyRepository.md) | MapperRepository |
| [LinkRepository](classes/LinkRepository.md) | LinkRepository |
| [LinkSecretRepository](classes/LinkSecretRepository.md) | MapperRepository |
| [MapperRepository](classes/MapperRepository.md) | MapperRepository |
| [Mercury](classes/Mercury.md) | Mercury is a powerful and flexible library for working with decentralized identifiers and secure communications protocols. Whether you are a developer looking to build a secure and private messaging app or a more complex decentralized system requiring trusted peer-to-peer connections, Mercury provides the tools and features you need to establish, manage, and secure your communications easily. |
| [MessageRepository](classes/MessageRepository.md) | MapperRepository |
| [PeerDID](classes/PeerDID.md) | - |
| [PeerDIDService](classes/PeerDIDService.md) | Provides functionality to transfrom peerDIDServices from our interfaces into DIDComm module ones |
| [PKInstance](classes/PKInstance.md) | A Task encapsulates a unit of work |
| [Plugin](classes/Plugin.md) | Provide interface to augment the SDK. |
| [PluginManager](classes/PluginManager.md) | - |
| [Pluto](classes/Pluto.md) | Pluto is a storage interface describing storage requirements of the edge agents which will be implemented using this SDK. Implement this interface using your preferred underlying storage technology, most appropriate for your use case. |
| [RunProtocol](classes/RunProtocol.md) | Find and execute a task registered by plugins for the given pid (protocol identifier) |
| [SDJWT](classes/SDJWT.md) | used to enable Modules to propagate the Context and have access to runTask |
| [SDJWTCredential](classes/SDJWTCredential.md) | Storable define properties a Domain object must implement to be compatible with Pluto |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [Args\_RequestCredentialJWT](interfaces/Args_RequestCredentialJWT.md) | - |
| [Args\_RequestCredentialSDJWT](interfaces/Args_RequestCredentialSDJWT.md) | - |
| [Connection](interfaces/Connection.md) | Define the structure of a Connection |
| [CreateOOBOfferArgs](interfaces/CreateOOBOfferArgs.md) | Arguments for creating an out-of-band (OOB) offer invitation |
| [CreateOOBPresentationRequestArgs](interfaces/CreateOOBPresentationRequestArgs.md) | Arguments for creating an out-of-band (OOB) presentation request invitation |
| [CreatePresentationArgs](interfaces/CreatePresentationArgs.md) | Asyncronously create a verifiablePresentation from a valid stored verifiableCredential This is used when the verified requests a specific verifiable credential, this will create the actual instance of the presentation which we can share with the verifier. |
| [~~CreatePresentationRequestArgs~~](interfaces/CreatePresentationRequestArgs.md) | - |
| [CreatePrismDIDArgs](interfaces/CreatePrismDIDArgs.md) | - |
| [Credential](interfaces/Credential.md) | Definition for Storable Credential model Represents [Credential](namespaces/Domain/classes/Credential.md) |
| [CredentialMetadata](interfaces/CredentialMetadata.md) | Definition for CredentialMetadata model Represents [CredentialMetadata](namespaces/Domain/classes/CredentialMetadata.md) |
| [DID](interfaces/DID.md) | Definition for DID model Represents [DID](namespaces/Domain/classes/DID.md) |
| [DIDCommProtocol](interfaces/DIDCommProtocol.md) | - |
| [DIDKeyLink](interfaces/DIDKeyLink.md) | Definition for DID -> Key relationships |
| [DIDLink](interfaces/DIDLink.md) | Definition for DID -> DID relationships |
| [ForwardMessageBody](interfaces/ForwardMessageBody.md) | - |
| [IArgs](interfaces/IArgs.md) | RunProtocol exists to bridge the gap between the strong coupling to DIDComm messages and abstracting to Protocols |
| [IBackupTask](interfaces/IBackupTask.md) | - |
| [IRestoreTask](interfaces/IRestoreTask.md) | - |
| [JWTCredentialPayload](interfaces/JWTCredentialPayload.md) | - |
| [JWTPresentationPayload](interfaces/JWTPresentationPayload.md) | - |
| [Key](interfaces/Key.md) | Definition for Key model Represents [PrivateKey](namespaces/Domain/classes/PrivateKey.md) |
| [Message](interfaces/Message.md) | Definition for Message model Represents [Message](namespaces/Domain/namespaces/Message/README.md) |
| [Payload](interfaces/Payload.md) | General purpose struct to pass data around |
| [PeerDIDEncoded](interfaces/PeerDIDEncoded.md) | - |
| [PKInstanceArgs](interfaces/PKInstanceArgs.md) | - |
| [QueryOperators](interfaces/QueryOperators.md) | - |
| [SchemaGenerator](interfaces/SchemaGenerator.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [AgentOptions](type-aliases/AgentOptions.md) | - |
| [Args\_CredentialIssue](type-aliases/Args_CredentialIssue.md) | - |
| [Args\_CredentialOffer](type-aliases/Args_CredentialOffer.md) | - |
| [Args\_Message](type-aliases/Args_Message.md) | - |
| [Args\_PresentationRequest](type-aliases/Args_PresentationRequest.md) | - |
| [Args\_PresentationVerify](type-aliases/Args_PresentationVerify.md) | - |
| [Args\_RequestCredential](type-aliases/Args_RequestCredential.md) | - |
| [Args\_RevocationCheck](type-aliases/Args_RevocationCheck.md) | - |
| [Args\_Unknown](type-aliases/Args_Unknown.md) | - |
| [BackupAgent](type-aliases/BackupAgent.md) | define Agent requirements for Backup |
| [BackupExclude](type-aliases/BackupExclude.md) | - |
| [BackupOptions](type-aliases/BackupOptions.md) | - |
| [CollectionCreate](type-aliases/CollectionCreate.md) | - |
| [CollectionList](type-aliases/CollectionList.md) | - |
| [ConnectionEventArg](type-aliases/ConnectionEventArg.md) | - |
| [EventCallback](type-aliases/EventCallback.md) | - |
| [EventCallbacks](type-aliases/EventCallbacks.md) | - |
| [ExtractModelProperties](type-aliases/ExtractModelProperties.md) | - |
| [ExtraResolver](type-aliases/ExtraResolver.md) | - |
| [InvitationType](type-aliases/InvitationType.md) | - |
| [Join](type-aliases/Join.md) | - |
| [KeysFor](type-aliases/KeysFor.md) | - |
| [KeysOf](type-aliases/KeysOf.md) | - |
| [MasterKey](type-aliases/MasterKey.md) | - |
| [MessageEventArg](type-aliases/MessageEventArg.md) | - |
| [MigrationStrategies](type-aliases/MigrationStrategies.md) | - |
| [MigrationStrategy](type-aliases/MigrationStrategy.md) | - |
| [Model](type-aliases/Model.md) | Define common properties |
| [ModelOptionalKeys](type-aliases/ModelOptionalKeys.md) | - |
| [ModelPropertyNames](type-aliases/ModelPropertyNames.md) | - |
| [ModelRequiredKeys](type-aliases/ModelRequiredKeys.md) | - |
| [OptionalId](type-aliases/OptionalId.md) | - |
| [OptionalKeys](type-aliases/OptionalKeys.md) | - |
| [OptionalTypeToSchemaType](type-aliases/OptionalTypeToSchemaType.md) | - |
| [Paths](type-aliases/Paths.md) | - |
| [PlutoRepositories](type-aliases/PlutoRepositories.md) | - |
| [Prev](type-aliases/Prev.md) | - |
| [PropertyType](type-aliases/PropertyType.md) | - |
| [PropertyTypes](type-aliases/PropertyTypes.md) | - |
| [ProtocolType](type-aliases/ProtocolType.md) | Temporary workaround to smooth transition of internal module splitting and end-user consumables ProtocolType is a merging of all the supported ProtocolIds These have been split internally into Didcomm and OEA modules But we can hide that from our users until full support exists |
| [Query](type-aliases/Query.md) | Query type for Pluto |
| [QueryNoLimit](type-aliases/QueryNoLimit.md) | - |
| [QuerySelector](type-aliases/QuerySelector.md) | - |
| [QuerySelectorAndIndex](type-aliases/QuerySelectorAndIndex.md) | - |
| [QuerySortDirection](type-aliases/QuerySortDirection.md) | - |
| [QuerySortPart](type-aliases/QuerySortPart.md) | - |
| [RequiredKeys](type-aliases/RequiredKeys.md) | - |
| [RequiredTypeToSchemaType](type-aliases/RequiredTypeToSchemaType.md) | - |
| [RevokeEventArg](type-aliases/RevokeEventArg.md) | - |
| [RunProtocolArgs](type-aliases/RunProtocolArgs.md) | - |
| [StringKeys](type-aliases/StringKeys.md) | - |
| [Task](type-aliases/Task.md) | - |
| [~~TaskContext~~](type-aliases/TaskContext.md) | - |
| [TypedSchema](type-aliases/TypedSchema.md) | - |
| [WithId](type-aliases/WithId.md) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [AnonCredsRecoveryId](variables/AnonCredsRecoveryId.md) | - |
| [CredentialMetadataSchema](variables/CredentialMetadataSchema.md) | - |
| [CredentialMigration](variables/CredentialMigration.md) | - |
| [CredentialSchema](variables/CredentialSchema.md) | - |
| [DIDKeyLinkSchema](variables/DIDKeyLinkSchema.md) | - |
| [DIDLinkSchema](variables/DIDLinkSchema.md) | - |
| [DIDSchema](variables/DIDSchema.md) | - |
| [JWTVerifiableCredentialRecoveryId](variables/JWTVerifiableCredentialRecoveryId.md) | - |
| [KeySchema](variables/KeySchema.md) | - |
| [MessageSchema](variables/MessageSchema.md) | - |
| [ProtocolType](variables/ProtocolType.md) | - |
| [SDJWTVerifiableCredentialRecoveryId](variables/SDJWTVerifiableCredentialRecoveryId.md) | - |
| [~~Tasks~~](variables/Tasks.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [makeCollections](functions/makeCollections.md) | - |
| [repositoryFactory](functions/repositoryFactory.md) | Factory fn to instantiate all Repositories |
| [schemaFactory](functions/schemaFactory.md) | helper for creating Schemas handle repetitive and improve type safety |

## References

### ~~BasicMessage~~ {#basicmessage}

Re-exports [BasicMessage](../plugins/internal/didcomm/classes/BasicMessage.md)

***

### ~~BasicMessageBody~~ {#basicmessagebody}

Re-exports [BasicMessageBody](../plugins/internal/didcomm/interfaces/BasicMessageBody.md)

***

### ~~CredentialFormat~~ {#credentialformat}

Re-exports [CredentialFormat](../plugins/internal/didcomm/interfaces/CredentialFormat.md)

***

### ~~DIDCommConnection~~ {#didcommconnection}

Re-exports [DIDCommConnection](../plugins/internal/didcomm/classes/DIDCommConnection.md)

***

### ~~HandshakeRequest~~ {#handshakerequest}

Re-exports [HandshakeRequest](../plugins/internal/oea/classes/HandshakeRequest.md)

***

### ~~HandshakeRequestBody~~ {#handshakerequestbody}

Re-exports [HandshakeRequestBody](../plugins/internal/oea/interfaces/HandshakeRequestBody.md)

***

### ~~IssueCredential~~ {#issuecredential}

Re-exports [IssueCredential](../plugins/internal/didcomm/classes/IssueCredential.md)

***

### ~~IssueCredentialBody~~ {#issuecredentialbody}

Re-exports [IssueCredentialBody](../plugins/internal/didcomm/interfaces/IssueCredentialBody.md)

***

### KeyProperties {#keyproperties}

Re-exports [KeyProperties](namespaces/Domain/enumerations/KeyProperties.md)

***

### ~~OfferCredential~~ {#offercredential}

Re-exports [OfferCredential](../plugins/internal/didcomm/classes/OfferCredential.md)

***

### ~~OfferCredentialBody~~ {#offercredentialbody}

Re-exports [OfferCredentialBody](../plugins/internal/didcomm/interfaces/OfferCredentialBody.md)

***

### ~~OutOfBandInvitation~~ {#outofbandinvitation}

Re-exports [OutOfBandInvitation](../plugins/internal/didcomm/classes/OutOfBandInvitation.md)

***

### ~~OutOfBandInvitationBody~~ {#outofbandinvitationbody}

Re-exports [OutOfBandInvitationBody](../plugins/internal/didcomm/interfaces/OutOfBandInvitationBody.md)

***

### ~~Presentation~~ {#presentation}

Re-exports [Presentation](../plugins/internal/oea/classes/Presentation.md)

***

### ~~PresentationBody~~ {#presentationbody}

Re-exports [PresentationBody](../plugins/internal/oea/interfaces/PresentationBody.md)

***

### ~~ProposePresentation~~ {#proposepresentation}

Re-exports [ProposePresentation](../plugins/internal/oea/classes/ProposePresentation.md)

***

### ~~ProposePresentationBody~~ {#proposepresentationbody}

Re-exports [ProposePresentationBody](../plugins/internal/oea/interfaces/ProposePresentationBody.md)

***

### ~~RequestCredential~~ {#requestcredential}

Re-exports [RequestCredential](../plugins/internal/didcomm/classes/RequestCredential.md)

***

### ~~RequestPresentation~~ {#requestpresentation}

Re-exports [RequestPresentation](../plugins/internal/oea/classes/RequestPresentation.md)

***

### ~~RequestPresentationBody~~ {#requestpresentationbody}

Re-exports [RequestPresentationBody](../plugins/internal/oea/interfaces/RequestPresentationBody.md)
