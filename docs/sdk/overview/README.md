[**@hyperledger/identus-sdk v7.0.0**](../README.md)

***

[@hyperledger/identus-sdk](../README.md) / overview

# overview

<!-- title: Overview -->
<!-- sidebar_label: Overview -->
<!-- sidebar_position: 1 -->

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [Connection](namespaces/Connection/README.md) | - |
| [DIDLink](namespaces/DIDLink/README.md) | Declaration merge to group Types |
| [Domain](namespaces/Domain/README.md) | - |
| [PeerDID](namespaces/PeerDID/README.md) | - |
| [Plugins](namespaces/Plugins/README.md) | - |
| [Pluto](namespaces/Pluto/README.md) | Pluto implementation |

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [JWT\_VC\_PROPS](enumerations/JWT_VC_PROPS.md) | - |
| [JWT\_VP\_PROPS](enumerations/JWT_VP_PROPS.md) | - |
| [ListenerKey](enumerations/ListenerKey.md) | - |
| [SDJWT\_VP\_PROPS](enumerations/SDJWT_VP_PROPS.md) | - |
| [StorageType](enumerations/StorageType.md) | Enumeration of built-in storage types supported by RIDB. |

## Classes

| Class | Description |
| ------ | ------ |
| [Agent](classes/Agent.md) | Edge agent implementation |
| [AgentBackup](classes/AgentBackup.md) | - |
| [AgentContext](classes/AgentContext.md) | - |
| [ApiImpl](classes/ApiImpl.md) | Implement API using built in fetch |
| [Apollo](classes/Apollo.md) | Apollo defines the set of cryptographic operations. |
| [BackupManager](classes/BackupManager.md) | BackupManager handle the different versions of backup and restore |
| [BaseRepository](classes/BaseRepository.md) | BaseRepository |
| [CancellableTask](classes/CancellableTask.md) | - |
| [Castor](classes/Castor.md) | Castor is a powerful and flexible library for working with DIDs. Whether you are building a decentralised application or a more traditional system requiring secure and private identity management, Castor provides the tools and features you need to easily create, manage, and resolve DIDs. |
| [ConnectionsManager](classes/ConnectionsManager.md) | ConnectionsManager is responsible for handling Connections and Mediators |
| [CreatePeerDID](classes/CreatePeerDID.md) | Task class for creating and storing new peer DIDs. |
| [~~CreatePrismDID~~](classes/CreatePrismDID.md) | - |
| [CreatePrismDIDWithKeys](classes/CreatePrismDIDWithKeys.md) | Handle the creation of a PrismDID |
| [CredentialMetadataRepository](classes/CredentialMetadataRepository.md) | MapperRepository |
| [CredentialRepository](classes/CredentialRepository.md) | MapperRepository |
| [DIDCommDIDResolver](classes/DIDCommDIDResolver.md) | Bridges the SDK's [Castor](classes/Castor.md) DID resolution to the DIDComm library's `DIDResolver` interface. |
| [DIDCommSecretsResolver](classes/DIDCommSecretsResolver.md) | Bridges the SDK's key storage (Pluto) to the DIDComm library's `SecretsResolver` interface. |
| [DIDKeyLinkRepository](classes/DIDKeyLinkRepository.md) | LinkRepository |
| [DIDLinkRepository](classes/DIDLinkRepository.md) | LinkRepository |
| [DIDRepository](classes/DIDRepository.md) | MapperRepository |
| [EventsManager](classes/EventsManager.md) | An extension for the Edge agent that gives it capability of creating listeners for specific events and also emitting or notifying any listener available with the new event. |
| [ForwardMessage](classes/ForwardMessage.md) | - |
| [FromJWK](classes/FromJWK.md) | - |
| [JobManager](classes/JobManager.md) | - |
| [JWT](classes/JWT.md) | - |
| [JWTCredential](classes/JWTCredential.md) | Storable define properties a Domain object must implement to be compatible with Pluto |
| [KeyRepository](classes/KeyRepository.md) | MapperRepository |
| [LinkRepository](classes/LinkRepository.md) | LinkRepository |
| [LinkSecretRepository](classes/LinkSecretRepository.md) | MapperRepository |
| [MapperRepository](classes/MapperRepository.md) | MapperRepository |
| [Mercury](classes/Mercury.md) | Mercury is a powerful and flexible library for working with decentralized identifiers and secure communications protocols. Whether you are a developer looking to build a secure and private messaging app or a more complex decentralized system requiring trusted peer-to-peer connections, Mercury provides the tools and features you need to establish, manage, and secure your communications easily. |
| [MessageRepository](classes/MessageRepository.md) | MapperRepository |
| [PeerDID](classes/PeerDID.md) | - |
| [PeerDIDMethod](classes/PeerDIDMethod.md) | DID method implementation for `did:peer` (algorithm 2). |
| [PeerDIDService](classes/PeerDIDService.md) | Provides functionality to transfrom peerDIDServices from our interfaces into DIDComm module ones |
| [PKInstance](classes/PKInstance.md) | - |
| [Plugin](classes/Plugin.md) | Provide interface to augment the SDK. |
| [PluginManager](classes/PluginManager.md) | - |
| [Pluto](classes/Pluto.md) | Orchestration layer for SDK persistence. |
| [PrismDIDMethod](classes/PrismDIDMethod.md) | DID method implementation for `did:prism`. |
| [PrismKeyPathIndexTask](classes/PrismKeyPathIndexTask.md) | - |
| [SDJWT](classes/SDJWT.md) | - |
| [SDJWTCredential](classes/SDJWTCredential.md) | Storable define properties a Domain object must implement to be compatible with Pluto |
| [SignWithDID](classes/SignWithDID.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [Args\_RequestCredentialJWT](interfaces/Args_RequestCredentialJWT.md) | - |
| [Args\_RequestCredentialSDJWT](interfaces/Args_RequestCredentialSDJWT.md) | - |
| [Claim](interfaces/Claim.md) | A single attribute within an [Issuance](interfaces/Issuance.md). |
| [CollectionMap](interfaces/CollectionMap.md) | Maps every known table name to its corresponding Model interface. |
| [Connection](interfaces/Connection.md) | Define the structure of a Connection |
| [CreatePeerDIDArgs](interfaces/CreatePeerDIDArgs.md) | Arguments for creating a new peer DID |
| [CreatePrismDIDArgs](interfaces/CreatePrismDIDArgs.md) | - |
| [Credential](interfaces/Credential.md) | Definition for Storable Credential model Represents [Credential](namespaces/Domain/classes/Credential.md) |
| [CredentialMetadata](interfaces/CredentialMetadata.md) | Definition for CredentialMetadata model Represents [CredentialMetadata](namespaces/Domain/classes/CredentialMetadata.md) |
| [Ctor](interfaces/Ctor.md) | Constructor for T |
| [DID](interfaces/DID.md) | Definition for DID model Represents [DID](namespaces/Domain/classes/DID.md) |
| [DIDCommProtocol](interfaces/DIDCommProtocol.md) | - |
| [DIDKeyLink](interfaces/DIDKeyLink.md) | Definition for DID -> Key relationships |
| [DIDLink](interfaces/DIDLink.md) | Definition for DID -> DID relationships |
| [ForwardMessageBody](interfaces/ForwardMessageBody.md) | - |
| [FromJWKArgs](interfaces/FromJWKArgs.md) | - |
| [IArgs](interfaces/IArgs.md) | RunProtocol exists to bridge the gap between the strong coupling to DIDComm messages and abstracting to Protocols |
| [IBackupTask](interfaces/IBackupTask.md) | - |
| [IRestoreTask](interfaces/IRestoreTask.md) | - |
| [Issuance](interfaces/Issuance.md) | Model for credential issuance records. |
| [JWTCredentialPayload](interfaces/JWTCredentialPayload.md) | - |
| [JWTPresentationPayload](interfaces/JWTPresentationPayload.md) | - |
| [Key](interfaces/Key.md) | Definition for Key model Represents [PrivateKey](namespaces/Domain/classes/PrivateKey.md) |
| [Logger](interfaces/Logger.md) | - |
| [Message](interfaces/Message.md) | Definition for Message model Represents [Message](namespaces/Domain/classes/Message.md) |
| [PeerDIDEncoded](interfaces/PeerDIDEncoded.md) | - |
| [PKInstanceArgs](interfaces/PKInstanceArgs.md) | - |
| [PrismKeyPathIndexArgs](interfaces/PrismKeyPathIndexArgs.md) | Task to find the latest Prism DID KeyPathIndex |
| [SchemaGenerator](interfaces/SchemaGenerator.md) | Builder interface used inside schemaFactory callbacks to declaratively define a Model's schema. |
| [Settings](interfaces/Settings.md) | Model for persisting arbitrary key-value settings. |
| [SignWithDIDArgs](interfaces/SignWithDIDArgs.md) | Asyncronously sign with a DID |

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
| [Arrayable](type-aliases/Arrayable.md) | T is either an Array or a single item |
| [BackupExclude](type-aliases/BackupExclude.md) | define Agent requirements for Backup |
| [BackupOptions](type-aliases/BackupOptions.md) | - |
| [BaseStorage](type-aliases/BaseStorage.md) | Abstract base-class for custom storage backends. |
| [CollectionCreate](type-aliases/CollectionCreate.md) | Descriptor for a single RIDB collection. |
| [CollectionList](type-aliases/CollectionList.md) | A dictionary of additional (user-defined) collections that can be merged into the default set via [makeCollections](functions/makeCollections.md). |
| [Collections](type-aliases/Collections.md) | Typed map of all RIDB collections as returned by [makeCollections](functions/makeCollections.md). |
| [CollectionSchemas](type-aliases/CollectionSchemas.md) | Maps each collection name to its concrete SchemaType. |
| [ConnectionEventArg](type-aliases/ConnectionEventArg.md) | - |
| [CreateOptions](type-aliases/CreateOptions.md) | Options for creating a Pluto instance via [Pluto.create](classes/Pluto.md#create). |
| [CreatePayloadOf](type-aliases/CreatePayloadOf.md) | Extract the `create` payload type from a DID method instance type. |
| [CreatePrismDIDWithKeysArgs](type-aliases/CreatePrismDIDWithKeysArgs.md) | - |
| [DeactivatePayloadOf](type-aliases/DeactivatePayloadOf.md) | Extract the `deactivate` payload type from a DID method instance type. Resolves to `never` when the method does not support deactivating. |
| [DefaultDIDMethods](type-aliases/DefaultDIDMethods.md) | Tuple of DID methods Castor always registers by default. User-supplied extras are appended to this tuple. |
| [DIDKeys](type-aliases/DIDKeys.md) | Optional private-key map for DID creation, keyed by usage name. Every usage except `MASTER_KEY` is optional and holds an array of [PrivateKey](namespaces/Domain/classes/PrivateKey.md) instances. |
| [DIDMethod](type-aliases/DIDMethod.md) | Core abstraction for a pluggable DID method. |
| [DIDMethodOperation](type-aliases/DIDMethodOperation.md) | Generic wrapper for the return value of lifecycle operations (`publish`, `update`, `deactivate`). By default it resolves to `TMetadata` itself, but the second type parameter can override the concrete result type. |
| [EventCallback](type-aliases/EventCallback.md) | - |
| [EventCallbacks](type-aliases/EventCallbacks.md) | - |
| [JsonObj](type-aliases/JsonObj.md) | Construct a Type with a set of string Keys of type T | undefined To be used in place of Record for arbitrary data structs where the key does not definitely result in a T |
| [LogLevel](type-aliases/LogLevel.md) | - |
| [MasterKey](type-aliases/MasterKey.md) | - |
| [MessageEventArg](type-aliases/MessageEventArg.md) | - |
| [MetadataOf](type-aliases/MetadataOf.md) | Extract the metadata type returned by the lifecycle operations of a DID method instance type. Uses `publish` as the canonical source. |
| [MethodMapOf](type-aliases/MethodMapOf.md) | Build a `{ methodName: MethodInstance }` map from a tuple of DID method instances. When multiple entries share the same `method` name, later entries override earlier ones (so user-supplied extras can replace the built-in `prism` / `peer` implementations at the type level). |
| [MethodNameOf](type-aliases/MethodNameOf.md) | Extract the literal `method` name from a DID method instance type. Falls back to `string` when the method field is not a string literal. |
| [Model](type-aliases/Model.md) | Base model type shared by every Pluto storable entity. |
| [Nil](type-aliases/Nil.md) | no value shorthand |
| [Normalize](type-aliases/Normalize.md) | Flatten intersect to show single interface |
| [OptionalId](type-aliases/OptionalId.md) | - |
| [PlutoRepositories](type-aliases/PlutoRepositories.md) | - |
| [ProtocolType](type-aliases/ProtocolType.md) | Temporary workaround to smooth transition of internal module splitting and end-user consumables ProtocolType is a merging of all the supported ProtocolIds These have been split internally into Didcomm and OEA modules But we can hide that from our users until full support exists |
| [PublishPayloadOf](type-aliases/PublishPayloadOf.md) | Extract the `publish` payload type from a DID method instance type. Resolves to `never` when the method does not support publishing. |
| [Query](type-aliases/Query.md) | Query type used by Pluto repositories. |
| [QueryOptions](type-aliases/QueryOptions.md) | - |
| [QueryType](type-aliases/QueryType.md) | - |
| [RequiredPrismDIDSecretKeys](type-aliases/RequiredPrismDIDSecretKeys.md) | Key map that **requires** a `MASTER_KEY` entry. Used as the payload for Prism DID creation where a master signing key is mandatory. |
| [RevokeEventArg](type-aliases/RevokeEventArg.md) | - |
| [SeedFunction](type-aliases/SeedFunction.md) | - |
| [StartOptions](type-aliases/StartOptions.md) | Options passed to [createStore](functions/createStore.md) controlling how the database starts. |
| [TableName](type-aliases/TableName.md) | Union of all valid table names in the Pluto store. |
| [Task](type-aliases/Task.md) | - |
| [TypedSchema](type-aliases/TypedSchema.md) | Fully-typed RIDB schema derived from a Model interface `T`. |
| [UpdatePayloadOf](type-aliases/UpdatePayloadOf.md) | Extract the `update` payload type from a DID method instance type. Resolves to `never` when the method does not support updating. |
| [WithId](type-aliases/WithId.md) | - |
| [WithOptions](type-aliases/WithOptions.md) | Start options for the default RIDB-backed store. |
| [WithStart](type-aliases/WithStart.md) | Start option that delegates database initialisation to a custom function. |

## Variables

| Variable | Description |
| ------ | ------ |
| [CredentialMetadataSchema](variables/CredentialMetadataSchema.md) | - |
| [CredentialMigration](variables/CredentialMigration.md) | - |
| [CredentialSchema](variables/CredentialSchema.md) | - |
| [DIDKeyLinkSchema](variables/DIDKeyLinkSchema.md) | - |
| [DIDLinkSchema](variables/DIDLinkSchema.md) | - |
| [DIDSchema](variables/DIDSchema.md) | - |
| [IssuanceSchema](variables/IssuanceSchema.md) | RIDB schema for the [Issuance](interfaces/Issuance.md) model. Version 0 — `claims` stored as an encrypted array of objects. |
| [KeyMigration](variables/KeyMigration.md) | - |
| [KeySchema](variables/KeySchema.md) | - |
| [MessageMigration](variables/MessageMigration.md) | - |
| [MessageSchema](variables/MessageSchema.md) | - |
| [ProtocolType](variables/ProtocolType.md) | - |
| [SettingsSchema](variables/SettingsSchema.md) | RIDB schema for the [Settings](interfaces/Settings.md) model. Version 0 — all fields required, `value` encrypted. |
| [Utils](variables/Utils.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [createStore](functions/createStore.md) | Create a default [Pluto.Store](namespaces/Pluto/interfaces/Store.md) backed by RIDB. |
| [makeCollections](functions/makeCollections.md) | Build the complete map of Pluto collections. |
| [repositoryFactory](functions/repositoryFactory.md) | Factory fn to instantiate all Repositories |
