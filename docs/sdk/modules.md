[@hyperledger/identus-edge-agent-sdk](README.md) / Exports

# @hyperledger/identus-edge-agent-sdk

## Table of contents

### References

- [KeyProperties](modules.md#keyproperties)

### Namespaces

- [Domain](modules/Domain.md)
- [OIDC](modules/OIDC.md)
- [PeerDID](modules/PeerDID.md)
- [Pluto](modules/Pluto.md)

### Enumerations

- [AnonCredsCredentialProperties](enums/AnonCredsCredentialProperties.md)
- [ListenerKey](enums/ListenerKey.md)
- [ProtocolType](enums/ProtocolType.md)

### Classes

- [Agent](classes/Agent.md)
- [AnonCredsCredential](classes/AnonCredsCredential.md)
- [ApiImpl](classes/ApiImpl.md)
- [Apollo](classes/Apollo.md)
- [BasicMediatorHandler](classes/BasicMediatorHandler.md)
- [BasicMessage](classes/BasicMessage.md)
- [Castor](classes/Castor.md)
- [ConnectionsManager](classes/ConnectionsManager.md)
- [DIDCommWrapper](classes/DIDCommWrapper.md)
- [HandshakeRequest](classes/HandshakeRequest.md)
- [IssueCredential](classes/IssueCredential.md)
- [JWTCredential](classes/JWTCredential.md)
- [MediatorHandler](classes/MediatorHandler.md)
- [Mercury](classes/Mercury.md)
- [OIDCAgent](classes/OIDCAgent.md)
- [OfferCredential](classes/OfferCredential.md)
- [OutOfBandInvitation](classes/OutOfBandInvitation.md)
- [PeerDID](classes/PeerDID-1.md)
- [PeerDIDService](classes/PeerDIDService.md)
- [Pluto](classes/Pluto-1.md)
- [Pollux](classes/Pollux.md)
- [Presentation](classes/Presentation.md)
- [ProposePresentation](classes/ProposePresentation.md)
- [PublicMediatorStore](classes/PublicMediatorStore.md)
- [RequestPresentation](classes/RequestPresentation.md)
- [SDJWTCredential](classes/SDJWTCredential.md)
- [Store](classes/Store.md)

### Interfaces

- [AgentMessageEvents](interfaces/AgentMessageEvents.md)
- [BasicMessageBody](interfaces/BasicMessageBody.md)
- [ConnectionsManagerInterface](interfaces/ConnectionsManagerInterface.md)
- [DIDCommProtocol](interfaces/DIDCommProtocol.md)
- [HandshakeRequestBody](interfaces/HandshakeRequestBody.md)
- [MediationGrantBody](interfaces/MediationGrantBody.md)
- [MediationKeysUpdateListBody](interfaces/MediationKeysUpdateListBody.md)
- [MediatorStore](interfaces/MediatorStore.md)
- [PeerDIDEncoded](interfaces/PeerDIDEncoded.md)
- [PickupAttachment](interfaces/PickupAttachment.md)
- [PickupReceivedBody](interfaces/PickupReceivedBody.md)
- [PickupRequestBody](interfaces/PickupRequestBody.md)
- [PresentationBody](interfaces/PresentationBody.md)
- [PrismOnboardingInvitationBody](interfaces/PrismOnboardingInvitationBody.md)
- [PrismRevocationBody](interfaces/PrismRevocationBody.md)
- [ProblemReportBody](interfaces/ProblemReportBody.md)
- [ProofTypes](interfaces/ProofTypes.md)
- [RequestPresentationBody](interfaces/RequestPresentationBody.md)

### Type Aliases

- [CollectionList](modules.md#collectionlist)
- [ConnectionEventArg](modules.md#connectioneventarg)
- [EventCallback](modules.md#eventcallback)
- [MessageEventArg](modules.md#messageeventarg)
- [OutOfBandInvitationBody](modules.md#outofbandinvitationbody)
- [ProposePresentationBody](modules.md#proposepresentationbody)
- [RevokeEventArg](modules.md#revokeeventarg)

### Variables

- [AnonCredsRecoveryId](modules.md#anoncredsrecoveryid)
- [JWTVerifiableCredentialRecoveryId](modules.md#jwtverifiablecredentialrecoveryid)
- [SDJWTVerifiableCredentialRecoveryId](modules.md#sdjwtverifiablecredentialrecoveryid)

### Functions

- [isPresentationDefinitionRequestType](modules.md#ispresentationdefinitionrequesttype)
- [makeCollections](modules.md#makecollections)

## References

### KeyProperties

Re-exports [KeyProperties](enums/Domain.KeyProperties.md)

## Type Aliases

### CollectionList

Ƭ **CollectionList**: `Record`\<`string`, `CollectionCreate`\>

#### Defined in

[src/pluto/rxdb/collections.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/pluto/rxdb/collections.ts#L17)

___

### ConnectionEventArg

Ƭ **ConnectionEventArg**: [`DIDPair`](classes/Domain.DIDPair.md)

#### Defined in

[src/edge-agent/types/index.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/edge-agent/types/index.ts#L49)

___

### EventCallback

Ƭ **EventCallback**: (`arg`: [`MessageEventArg`](modules.md#messageeventarg) \| [`ConnectionEventArg`](modules.md#connectioneventarg) \| [`RevokeEventArg`](modules.md#revokeeventarg)) => `void`

#### Type declaration

▸ (`arg`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | [`MessageEventArg`](modules.md#messageeventarg) \| [`ConnectionEventArg`](modules.md#connectioneventarg) \| [`RevokeEventArg`](modules.md#revokeeventarg) |

##### Returns

`void`

#### Defined in

[src/edge-agent/types/index.ts:51](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/edge-agent/types/index.ts#L51)

___

### MessageEventArg

Ƭ **MessageEventArg**: [`Message`](classes/Domain.Message-1.md)[]

#### Defined in

[src/edge-agent/types/index.ts:48](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/edge-agent/types/index.ts#L48)

___

### OutOfBandInvitationBody

Ƭ **OutOfBandInvitationBody**: [`HandshakeRequestBody`](interfaces/HandshakeRequestBody.md)

#### Defined in

[src/edge-agent/protocols/types.ts:74](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/edge-agent/protocols/types.ts#L74)

___

### ProposePresentationBody

Ƭ **ProposePresentationBody**: [`RequestPresentationBody`](interfaces/RequestPresentationBody.md)

#### Defined in

[src/edge-agent/protocols/types.ts:59](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/edge-agent/protocols/types.ts#L59)

___

### RevokeEventArg

Ƭ **RevokeEventArg**: [`Credential`](classes/Domain.Credential.md)

#### Defined in

[src/edge-agent/types/index.ts:50](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/edge-agent/types/index.ts#L50)

## Variables

### AnonCredsRecoveryId

• `Const` **AnonCredsRecoveryId**: ``"anonCreds+credential"``

#### Defined in

[src/pollux/models/AnonCredsVerifiableCredential.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/pollux/models/AnonCredsVerifiableCredential.ts#L21)

___

### JWTVerifiableCredentialRecoveryId

• `Const` **JWTVerifiableCredentialRecoveryId**: ``"jwt+credential"``

#### Defined in

[src/pollux/models/JWTVerifiableCredential.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/pollux/models/JWTVerifiableCredential.ts#L22)

___

### SDJWTVerifiableCredentialRecoveryId

• `Const` **SDJWTVerifiableCredentialRecoveryId**: ``"sd+jwt+credential"``

#### Defined in

[src/pollux/models/SDJWTVerifiableCredential.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/pollux/models/SDJWTVerifiableCredential.ts#L19)

## Functions

### isPresentationDefinitionRequestType

▸ **isPresentationDefinitionRequestType**\<`Type`\>(`request`, `type`): request is PresentationDefinitionRequest\<Type\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CredentialType`](enums/Domain.CredentialType.md) = [`JWT`](enums/Domain.CredentialType.md#jwt) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`PresentationDefinitionRequest`](modules/Domain.md#presentationdefinitionrequest)\<`Type`\> |
| `type` | `Type` |

#### Returns

request is PresentationDefinitionRequest\<Type\>

#### Defined in

[src/pollux/utils/claims.ts:88](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/pollux/utils/claims.ts#L88)

___

### makeCollections

▸ **makeCollections**(`additional?`): [`CollectionList`](modules.md#collectionlist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `additional?` | [`CollectionList`](modules.md#collectionlist) |

#### Returns

[`CollectionList`](modules.md#collectionlist)

#### Defined in

[src/pluto/rxdb/collections.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/pluto/rxdb/collections.ts#L19)
