[**@hyperledger/identus-sdk**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / plugins/internal/didcomm

# plugins/internal/didcomm

This export contains the DIDComm plugin for the Identus SDK

## Enumerations

### InvitationTypes

Defined in: [src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts#L3)

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="outofband"></a> `OUTOFBAND` | `0` | [src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts#L4) |
| <a id="prism_onboard"></a> `PRISM_ONBOARD` | `1` | [src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts#L5) |

## Classes

### BasicMessage

Defined in: [src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L14)

#### Constructors

##### Constructor

> **new BasicMessage**(`body`: [`BasicMessageBody`](#basicmessagebody-1), `from`: [`DID`](../../overview/namespaces/Domain/README.md#did), `to`: [`DID`](../../overview/namespaces/Domain/README.md#did), `thid?`: `string`): [`BasicMessage`](#basicmessage)

Defined in: [src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`BasicMessageBody`](#basicmessagebody-1) |
| `from` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `to` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `thid?` | `string` |

###### Returns

[`BasicMessage`](#basicmessage)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="body"></a> `body` | `public` | [`BasicMessageBody`](#basicmessagebody-1) | `undefined` | [src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L18) |
| <a id="from"></a> `from` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L19) |
| <a id="thid"></a> `thid?` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L21) |
| <a id="to"></a> `to` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L20) |
| <a id="type"></a> `type` | `static` | `"https://didcomm.org/basicmessage/2.0/message"` | `ProtocolIds.BasicMessage` | [src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L15) |

#### Methods

##### makeMessage()

> **makeMessage**(): [`Message`](../../overview/namespaces/Domain/README.md#message)

Defined in: [src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L24)

###### Returns

[`Message`](../../overview/namespaces/Domain/README.md#message)

***

### DIDCommConnection

Defined in: [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L8)

Define the structure of a Connection

Connections are used to capture Protocol specific behaviours and metadata

#### Extended by

- [`MediatorConnection`](#mediatorconnection)

#### Implements

- [`Connection`](../../overview/README.md#connection-1)

#### Constructors

##### Constructor

> **new DIDCommConnection**(`uri`: `string`, `host`: `string`, `alias?`: `string`): [`DIDCommConnection`](#didcommconnection)

Defined in: [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L12)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `uri` | `string` |
| `host` | `string` |
| `alias?` | `string` |

###### Returns

[`DIDCommConnection`](#didcommconnection)

#### Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="alias"></a> `alias?` | `readonly` | `string` | `undefined` | - | [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L15) |
| <a id="host"></a> `host` | `readonly` | `string` | `undefined` | - | [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L14) |
| <a id="state"></a> `state` | `public` | [`State`](../../overview/namespaces/Connection.md#state) | `Connection.State.NEW` | current condition of the connection | [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L10) |
| <a id="type-1"></a> `type` | `readonly` | `"DIDComm"` | `"DIDComm"` | - | [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L9) |
| <a id="uri"></a> `uri` | `readonly` | `string` | `undefined` | unique identifer for the connection | [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L13) |

#### Methods

##### receive()

> **receive**(`message`: `undefined` \| [`Message`](../../overview/namespaces/Domain/README.md#message), `ctx`: [`AgentContext`](../../overview/README.md#agentcontext)): `Promise`\<`any`\>

Defined in: [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L34)

called when a Message is received from this connection

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `undefined` \| [`Message`](../../overview/namespaces/Domain/README.md#message) |
| `ctx` | [`AgentContext`](../../overview/README.md#agentcontext) |

###### Returns

`Promise`\<`any`\>

###### Implementation of

[`Connection`](../../overview/README.md#connection-1).[`receive`](../../overview/README.md#connection-1#receive)

##### send()

> **send**(`msg`: [`Message`](../../overview/namespaces/Domain/README.md#message), `ctx`: [`AgentContext`](../../overview/README.md#agentcontext)): `Promise`\<`any`\>

Defined in: [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L18)

handle delivering a Message to the connected entity

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | [`Message`](../../overview/namespaces/Domain/README.md#message) |
| `ctx` | [`AgentContext`](../../overview/README.md#agentcontext) |

###### Returns

`Promise`\<`any`\>

###### Implementation of

[`Connection`](../../overview/README.md#connection-1).[`send`](../../overview/README.md#connection-1#send-3)

***

### IssueCredential

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L19)

#### Constructors

##### Constructor

> **new IssueCredential**(`body`: [`IssueCredentialBody`](#issuecredentialbody-1), `attachments`: [`AttachmentDescriptor`](../../overview/namespaces/Domain/README.md#attachmentdescriptor)[], `from`: [`DID`](../../overview/namespaces/Domain/README.md#did), `to`: [`DID`](../../overview/namespaces/Domain/README.md#did), `thid?`: `string`, `id?`: `string`): [`IssueCredential`](#issuecredential)

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L22)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`IssueCredentialBody`](#issuecredentialbody-1) |
| `attachments` | [`AttachmentDescriptor`](../../overview/namespaces/Domain/README.md#attachmentdescriptor)[] |
| `from` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `to` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `thid?` | `string` |
| `id?` | `string` |

###### Returns

[`IssueCredential`](#issuecredential)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="attachments"></a> `attachments` | `public` | [`AttachmentDescriptor`](../../overview/namespaces/Domain/README.md#attachmentdescriptor)[] | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L24) |
| <a id="body-1"></a> `body` | `public` | [`IssueCredentialBody`](#issuecredentialbody-1) | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L23) |
| <a id="from-1"></a> `from` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L25) |
| <a id="id"></a> `id` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L28) |
| <a id="thid-1"></a> `thid?` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L27) |
| <a id="to-1"></a> `to` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L26) |
| <a id="type-2"></a> `type` | `static` | `"https://didcomm.org/issue-credential/3.0/issue-credential"` | `ProtocolIds.IssueCredential` | [src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L20) |

#### Methods

##### getCredentialStrings()

> **getCredentialStrings**(): `string`[]

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L44)

###### Returns

`string`[]

##### makeMessage()

> **makeMessage**(): [`Message`](../../overview/namespaces/Domain/README.md#message)

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L31)

###### Returns

[`Message`](../../overview/namespaces/Domain/README.md#message)

##### fromMessage()

> `static` **fromMessage**(`msg`: [`Message`](../../overview/namespaces/Domain/README.md#message)): [`IssueCredential`](#issuecredential)

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:57](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | [`Message`](../../overview/namespaces/Domain/README.md#message) |

###### Returns

[`IssueCredential`](#issuecredential)

***

### MediationKeysUpdateList

Defined in: [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L19)

#### Constructors

##### Constructor

> **new MediationKeysUpdateList**(`from`: [`DID`](../../overview/namespaces/Domain/README.md#did), `to`: [`DID`](../../overview/namespaces/Domain/README.md#did), `recipientDids`: [`DID`](../../overview/namespaces/Domain/README.md#did)[], `id`: `string`): [`MediationKeysUpdateList`](#mediationkeysupdatelist)

Defined in: [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L27)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `from` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `to` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `recipientDids` | [`DID`](../../overview/namespaces/Domain/README.md#did)[] |
| `id` | `string` |

###### Returns

[`MediationKeysUpdateList`](#mediationkeysupdatelist)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="body-2"></a> `body` | `public` | [`MediationKeysUpdateListBody`](#mediationkeysupdatelistbody-1) | `undefined` | [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L22) |
| <a id="from-2"></a> `from` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L23) |
| <a id="id-1"></a> `id` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L25) |
| <a id="to-2"></a> `to` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L24) |
| <a id="type-3"></a> `type` | `static` | `"https://didcomm.org/coordinate-mediation/2.0/keylist-update"` | `ProtocolIds.MediationKeysUpdate` | [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L20) |

#### Methods

##### makeMessage()

> **makeMessage**(): [`Message`](../../overview/namespaces/Domain/README.md#message)

Defined in: [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L39)

###### Returns

[`Message`](../../overview/namespaces/Domain/README.md#message)

***

### MediationRequest

Defined in: [src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L5)

#### Constructors

##### Constructor

> **new MediationRequest**(`from`: [`DID`](../../overview/namespaces/Domain/README.md#did), `to`: [`DID`](../../overview/namespaces/Domain/README.md#did), `id`: `string`): [`MediationRequest`](#mediationrequest)

Defined in: [src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L12)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `from` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `to` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `id` | `string` |

###### Returns

[`MediationRequest`](#mediationrequest)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="from-3"></a> `from` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L8) |
| <a id="id-2"></a> `id` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L10) |
| <a id="to-3"></a> `to` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L9) |
| <a id="type-4"></a> `type` | `static` | `"https://didcomm.org/coordinate-mediation/2.0/mediate-request"` | `ProtocolIds.MediationRequest` | [src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L6) |

#### Methods

##### makeMessage()

> **makeMessage**(): [`Message`](../../overview/namespaces/Domain/README.md#message)

Defined in: [src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L18)

###### Returns

[`Message`](../../overview/namespaces/Domain/README.md#message)

***

### MediatorConnection

Defined in: [src/plugins/internal/didcomm/connection/MediatorConnection.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L6)

Define the structure of a Connection

Connections are used to capture Protocol specific behaviours and metadata

#### Extends

- [`DIDCommConnection`](#didcommconnection)

#### Constructors

##### Constructor

> **new MediatorConnection**(`uri`: `string`, `host`: `string`, `routingDID?`: `string`): [`MediatorConnection`](#mediatorconnection)

Defined in: [src/plugins/internal/didcomm/connection/MediatorConnection.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L9)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `uri` | `string` |
| `host` | `string` |
| `routingDID?` | `string` |

###### Returns

[`MediatorConnection`](#mediatorconnection)

###### Overrides

[`DIDCommConnection`](#didcommconnection).[`constructor`](#constructor-1)

#### Properties

| Property | Modifier | Type | Default value | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="alias-1"></a> `alias?` | `readonly` | `string` | `undefined` | - | [`DIDCommConnection`](#didcommconnection).[`alias`](#alias) | [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L15) |
| <a id="host-1"></a> `host` | `readonly` | `string` | `undefined` | - | [`DIDCommConnection`](#didcommconnection).[`host`](#host) | [src/plugins/internal/didcomm/connection/MediatorConnection.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L11) |
| <a id="routingdid"></a> `routingDID?` | `public` | `string` | `undefined` | - | - | [src/plugins/internal/didcomm/connection/MediatorConnection.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L12) |
| <a id="state-1"></a> `state` | `public` | [`State`](../../overview/namespaces/Connection.md#state) | `Connection.State.NEW` | current condition of the connection | [`DIDCommConnection`](#didcommconnection).[`state`](#state) | [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L10) |
| <a id="type-5"></a> `type` | `readonly` | `"DIDComm"` | `"DIDComm"` | - | [`DIDCommConnection`](#didcommconnection).[`type`](#type-1) | [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L9) |
| <a id="uri-1"></a> `uri` | `readonly` | `string` | `undefined` | unique identifer for the connection | [`DIDCommConnection`](#didcommconnection).[`uri`](#uri) | [src/plugins/internal/didcomm/connection/MediatorConnection.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L10) |

#### Accessors

##### liveMode

###### Get Signature

> **get** **liveMode**(): `boolean`

Defined in: [src/plugins/internal/didcomm/connection/MediatorConnection.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L17)

###### Returns

`boolean`

#### Methods

##### asMediator()

> **asMediator**(): [`Mediator`](../../overview/namespaces/Domain/README.md#mediator)

Defined in: [src/plugins/internal/didcomm/connection/MediatorConnection.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L21)

###### Returns

[`Mediator`](../../overview/namespaces/Domain/README.md#mediator)

##### close()

> **close**(): `Promise`\<`void`\>

Defined in: [src/plugins/internal/didcomm/connection/MediatorConnection.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L29)

###### Returns

`Promise`\<`void`\>

##### receive()

> **receive**(`message`: `undefined` \| [`Message`](../../overview/namespaces/Domain/README.md#message), `ctx`: [`AgentContext`](../../overview/README.md#agentcontext)): `Promise`\<`any`\>

Defined in: [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L34)

called when a Message is received from this connection

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `undefined` \| [`Message`](../../overview/namespaces/Domain/README.md#message) |
| `ctx` | [`AgentContext`](../../overview/README.md#agentcontext) |

###### Returns

`Promise`\<`any`\>

###### Inherited from

[`DIDCommConnection`](#didcommconnection).[`receive`](#receive)

##### send()

> **send**(`msg`: [`Message`](../../overview/namespaces/Domain/README.md#message), `ctx`: [`AgentContext`](../../overview/README.md#agentcontext)): `Promise`\<`any`\>

Defined in: [src/plugins/internal/didcomm/connection/DIDCommConnection.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/DIDCommConnection.ts#L18)

handle delivering a Message to the connected entity

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | [`Message`](../../overview/namespaces/Domain/README.md#message) |
| `ctx` | [`AgentContext`](../../overview/README.md#agentcontext) |

###### Returns

`Promise`\<`any`\>

###### Inherited from

[`DIDCommConnection`](#didcommconnection).[`send`](#send)

##### useLiveMode()

> **useLiveMode**(`socket`: `WebSocket`): `Promise`\<`void`\>

Defined in: [src/plugins/internal/didcomm/connection/MediatorConnection.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/connection/MediatorConnection.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `socket` | `WebSocket` |

###### Returns

`Promise`\<`void`\>

***

### OfferCredential

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L23)

#### Constructors

##### Constructor

> **new OfferCredential**(`body`: [`OfferCredentialBody`](#offercredentialbody-1), `attachments`: [`AttachmentDescriptor`](../../overview/namespaces/Domain/README.md#attachmentdescriptor)[], `from?`: [`DID`](../../overview/namespaces/Domain/README.md#did), `to?`: [`DID`](../../overview/namespaces/Domain/README.md#did), `thid?`: `string`, `id?`: `string`): [`OfferCredential`](#offercredential)

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L26)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`OfferCredentialBody`](#offercredentialbody-1) |
| `attachments` | [`AttachmentDescriptor`](../../overview/namespaces/Domain/README.md#attachmentdescriptor)[] |
| `from?` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `to?` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `thid?` | `string` |
| `id?` | `string` |

###### Returns

[`OfferCredential`](#offercredential)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="attachments-1"></a> `attachments` | `public` | [`AttachmentDescriptor`](../../overview/namespaces/Domain/README.md#attachmentdescriptor)[] | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L28) |
| <a id="body-3"></a> `body` | `public` | [`OfferCredentialBody`](#offercredentialbody-1) | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L27) |
| <a id="from-4"></a> `from?` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L29) |
| <a id="id-3"></a> `id` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L32) |
| <a id="thid-2"></a> `thid?` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L31) |
| <a id="to-4"></a> `to?` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L30) |
| <a id="type-6"></a> `type` | `static` | `"https://didcomm.org/issue-credential/3.0/offer-credential"` | `ProtocolIds.OfferCredential` | [src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L24) |

#### Methods

##### makeMessage()

> **makeMessage**(): [`Message`](../../overview/namespaces/Domain/README.md#message)

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:47](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L47)

###### Returns

[`Message`](../../overview/namespaces/Domain/README.md#message)

##### fromMessage()

> `static` **fromMessage**(`msg`: [`Message`](../../overview/namespaces/Domain/README.md#message)): [`OfferCredential`](#offercredential)

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:60](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L60)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | [`Message`](../../overview/namespaces/Domain/README.md#message) |

###### Returns

[`OfferCredential`](#offercredential)

***

### OutOfBandInvitation

Defined in: [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L12)

#### Constructors

##### Constructor

> **new OutOfBandInvitation**(`body`: [`OutOfBandInvitationBody`](#outofbandinvitationbody-1), `from`: `string`, `id`: `string`, `attachments`: [`AttachmentDescriptor`](../../overview/namespaces/Domain/README.md#attachmentdescriptor)[], `expiration`: `null` \| `number`): [`OutOfBandInvitation`](#outofbandinvitation)

Defined in: [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L17)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `body` | [`OutOfBandInvitationBody`](#outofbandinvitationbody-1) | `undefined` |
| `from` | `string` | `undefined` |
| `id` | `string` | `...` |
| `attachments` | [`AttachmentDescriptor`](../../overview/namespaces/Domain/README.md#attachmentdescriptor)[] | `[]` |
| `expiration` | `null` \| `number` | `null` |

###### Returns

[`OutOfBandInvitation`](#outofbandinvitation)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="attachments-2"></a> `attachments` | `public` | [`AttachmentDescriptor`](../../overview/namespaces/Domain/README.md#attachmentdescriptor)[] | `[]` | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L21) |
| <a id="body-4"></a> `body` | `public` | [`OutOfBandInvitationBody`](#outofbandinvitationbody-1) | `undefined` | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L18) |
| <a id="expiration"></a> `expiration` | `public` | `null` \| `number` | `null` | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L22) |
| <a id="from-5"></a> `from` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L19) |
| <a id="id-4"></a> `id` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L20) |
| <a id="piuri"></a> `piuri` | `public` | `"https://didcomm.org/out-of-band/2.0/invitation"` | `ProtocolIds.OOBInvitation` | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L15) |
| <a id="type-7"></a> `type` | `public` | `"https://didcomm.org/out-of-band/2.0/invitation"` | `ProtocolIds.OOBInvitation` | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L13) |

#### Accessors

##### isExpired

###### Get Signature

> **get** **isExpired**(): `boolean`

Defined in: [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L25)

###### Returns

`boolean`

#### Methods

##### ~~parsePrismOnboardingInvitationFromJson()~~

> `static` **parsePrismOnboardingInvitationFromJson**(`json`: `string`): [`PrismOnboardingInvitation`](#prismonboardinginvitation)

Defined in: [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L39)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `json` | `string` |  |

###### Returns

[`PrismOnboardingInvitation`](#prismonboardinginvitation)

###### Deprecated

***

### PickupReceived

Defined in: [src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L14)

#### Constructors

##### Constructor

> **new PickupReceived**(`body`: [`PickupReceivedBody`](#pickupreceivedbody-1), `from`: [`DID`](../../overview/namespaces/Domain/README.md#did), `to`: [`DID`](../../overview/namespaces/Domain/README.md#did)): [`PickupReceived`](#pickupreceived)

Defined in: [src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`PickupReceivedBody`](#pickupreceivedbody-1) |
| `from` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `to` | [`DID`](../../overview/namespaces/Domain/README.md#did) |

###### Returns

[`PickupReceived`](#pickupreceived)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="body-5"></a> `body` | `public` | [`PickupReceivedBody`](#pickupreceivedbody-1) | `undefined` | [src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L18) |
| <a id="from-6"></a> `from` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L19) |
| <a id="to-5"></a> `to` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L20) |
| <a id="type-8"></a> `type` | `static` | `"https://didcomm.org/messagepickup/3.0/messages-received"` | `ProtocolIds.PickupReceived` | [src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L15) |

#### Methods

##### makeMessage()

> **makeMessage**(): [`Message`](../../overview/namespaces/Domain/README.md#message)

Defined in: [src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L23)

###### Returns

[`Message`](../../overview/namespaces/Domain/README.md#message)

***

### PickupRequest

Defined in: [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L15)

#### Constructors

##### Constructor

> **new PickupRequest**(`body`: [`PickupRequestBody`](#pickuprequestbody-1), `from`: [`DID`](../../overview/namespaces/Domain/README.md#did), `to`: [`DID`](../../overview/namespaces/Domain/README.md#did)): [`PickupRequest`](#pickuprequest)

Defined in: [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L18)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`PickupRequestBody`](#pickuprequestbody-1) |
| `from` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `to` | [`DID`](../../overview/namespaces/Domain/README.md#did) |

###### Returns

[`PickupRequest`](#pickuprequest)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="body-6"></a> `body` | `public` | [`PickupRequestBody`](#pickuprequestbody-1) | `undefined` | [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L19) |
| <a id="from-7"></a> `from` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L20) |
| <a id="to-6"></a> `to` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L21) |
| <a id="type-9"></a> `type` | `static` | `"https://didcomm.org/messagepickup/3.0/delivery-request"` | `ProtocolIds.PickupRequest` | [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L16) |

#### Methods

##### makeMessage()

> **makeMessage**(): [`Message`](../../overview/namespaces/Domain/README.md#message)

Defined in: [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L24)

###### Returns

[`Message`](../../overview/namespaces/Domain/README.md#message)

***

### PrismOnboardingInvitation

Defined in: [src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts#L14)

#### Constructors

##### Constructor

> **new PrismOnboardingInvitation**(`onboardEndpoint`: `string`, `from?`: [`DID`](../../overview/namespaces/Domain/README.md#did), `type?`: [`InvitationTypes`](#invitationtypes)): [`PrismOnboardingInvitation`](#prismonboardinginvitation)

Defined in: [src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `onboardEndpoint` | `string` |
| `from?` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `type?` | [`InvitationTypes`](#invitationtypes) |

###### Returns

[`PrismOnboardingInvitation`](#prismonboardinginvitation)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="from-8"></a> `from?` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts#L19) |
| <a id="onboardendpoint"></a> `onboardEndpoint` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts#L18) |
| <a id="type-10"></a> `type` | `public` | [`InvitationTypes`](#invitationtypes) | `InvitationTypes.PRISM_ONBOARD` | [src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts#L15) |

***

### ProblemReport

Defined in: [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L20)

#### Constructors

##### Constructor

> **new ProblemReport**(`body`: [`ProblemReportBody`](#problemreportbody-1), `from`: [`DID`](../../overview/namespaces/Domain/README.md#did), `to`: [`DID`](../../overview/namespaces/Domain/README.md#did), `thid?`: `string`): [`ProblemReport`](#problemreport)

Defined in: [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`ProblemReportBody`](#problemreportbody-1) |
| `from` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `to` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `thid?` | `string` |

###### Returns

[`ProblemReport`](#problemreport)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="body-7"></a> `body` | `public` | [`ProblemReportBody`](#problemreportbody-1) | `undefined` | [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L24) |
| <a id="from-9"></a> `from` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L25) |
| <a id="thid-3"></a> `thid?` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L27) |
| <a id="to-7"></a> `to` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L26) |
| <a id="type-11"></a> `type` | `static` | `"https://didcomm.org/report-problem/2.0/problem-report"` | `ProtocolIds.ProblemReporting` | [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L21) |

#### Methods

##### makeMessage()

> **makeMessage**(): [`Message`](../../overview/namespaces/Domain/README.md#message)

Defined in: [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L30)

###### Returns

[`Message`](../../overview/namespaces/Domain/README.md#message)

***

### ProposeCredential

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L21)

#### Constructors

##### Constructor

> **new ProposeCredential**(`body`: [`ProposeCredentialBody`](#proposecredentialbody-1), `attachments`: [`AttachmentDescriptor`](../../overview/namespaces/Domain/README.md#attachmentdescriptor)[], `from?`: [`DID`](../../overview/namespaces/Domain/README.md#did), `to?`: [`DID`](../../overview/namespaces/Domain/README.md#did), `thid?`: `string`, `id?`: `string`): [`ProposeCredential`](#proposecredential)

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L24)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`ProposeCredentialBody`](#proposecredentialbody-1) |
| `attachments` | [`AttachmentDescriptor`](../../overview/namespaces/Domain/README.md#attachmentdescriptor)[] |
| `from?` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `to?` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `thid?` | `string` |
| `id?` | `string` |

###### Returns

[`ProposeCredential`](#proposecredential)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="attachments-3"></a> `attachments` | `public` | [`AttachmentDescriptor`](../../overview/namespaces/Domain/README.md#attachmentdescriptor)[] | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L26) |
| <a id="body-8"></a> `body` | `public` | [`ProposeCredentialBody`](#proposecredentialbody-1) | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L25) |
| <a id="from-10"></a> `from?` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L27) |
| <a id="id-5"></a> `id` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L30) |
| <a id="thid-4"></a> `thid?` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L29) |
| <a id="to-8"></a> `to?` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L28) |
| <a id="type-12"></a> `type` | `static` | `"https://didcomm.org/issue-credential/3.0/propose-credential"` | `ProtocolIds.ProposeCredential` | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L22) |

#### Methods

##### makeMessage()

> **makeMessage**(): [`Message`](../../overview/namespaces/Domain/README.md#message)

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L33)

###### Returns

[`Message`](../../overview/namespaces/Domain/README.md#message)

##### fromMessage()

> `static` **fromMessage**(`msg`: [`Message`](../../overview/namespaces/Domain/README.md#message)): [`ProposeCredential`](#proposecredential)

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L46)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | [`Message`](../../overview/namespaces/Domain/README.md#message) |

###### Returns

[`ProposeCredential`](#proposecredential)

***

### RequestCredential

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L25)

#### Constructors

##### Constructor

> **new RequestCredential**(`body`: [`RequestCredentialBody`](#requestcredentialbody-1), `attachments`: [`AttachmentDescriptor`](../../overview/namespaces/Domain/README.md#attachmentdescriptor)[], `from`: [`DID`](../../overview/namespaces/Domain/README.md#did), `to?`: [`DID`](../../overview/namespaces/Domain/README.md#did), `thid?`: `string`, `id?`: `string`): [`RequestCredential`](#requestcredential)

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L28)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`RequestCredentialBody`](#requestcredentialbody-1) |
| `attachments` | [`AttachmentDescriptor`](../../overview/namespaces/Domain/README.md#attachmentdescriptor)[] |
| `from` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `to?` | [`DID`](../../overview/namespaces/Domain/README.md#did) |
| `thid?` | `string` |
| `id?` | `string` |

###### Returns

[`RequestCredential`](#requestcredential)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="attachments-4"></a> `attachments` | `public` | [`AttachmentDescriptor`](../../overview/namespaces/Domain/README.md#attachmentdescriptor)[] | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L30) |
| <a id="body-9"></a> `body` | `public` | [`RequestCredentialBody`](#requestcredentialbody-1) | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L29) |
| <a id="from-11"></a> `from` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L31) |
| <a id="id-6"></a> `id` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L34) |
| <a id="thid-5"></a> `thid?` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L33) |
| <a id="to-9"></a> `to?` | `public` | [`DID`](../../overview/namespaces/Domain/README.md#did) | `undefined` | [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L32) |
| <a id="type-13"></a> `type` | `static` | `"https://didcomm.org/issue-credential/3.0/request-credential"` | `ProtocolIds.RequestCredential` | [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L26) |

#### Methods

##### makeMessage()

> **makeMessage**(): [`Message`](../../overview/namespaces/Domain/README.md#message)

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:52](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L52)

###### Returns

[`Message`](../../overview/namespaces/Domain/README.md#message)

##### fromMessage()

> `static` **fromMessage**(`msg`: [`Message`](../../overview/namespaces/Domain/README.md#message)): [`RequestCredential`](#requestcredential)

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:65](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | [`Message`](../../overview/namespaces/Domain/README.md#message) |

###### Returns

[`RequestCredential`](#requestcredential)

## Interfaces

### Attribute

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts#L17)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="media_type"></a> `media_type?` | `string` \| [`Nil`](../../overview/namespaces/Utils/README.md#nil) | [src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts#L20) |
| <a id="name"></a> `name` | `string` | [src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts#L18) |
| <a id="value"></a> `value` | `string` | [src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts#L19) |

***

### BasicMessageBody

Defined in: [src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L9)

Specification:
https://didcomm.org/basicmessage/2.0/

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="content"></a> `content` | `string` | [src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L11) |

***

### CredentialFormat

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L11)

Specification:
https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential#request-credential

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="attach_id"></a> `attach_id` | `string` | [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L12) |
| <a id="format"></a> `format` | `string` | [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L13) |

***

### CredentialPreview

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts#L8)

Specification:
https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential#preview-credential

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="body-10"></a> `body` | \{ `attributes`: [`Attribute`](#attribute)[]; \} | [src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts#L12) |
| `body.attributes` | [`Attribute`](#attribute)[] | [src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts#L13) |
| <a id="id-7"></a> `id?` | `string` | [src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts#L11) |
| <a id="type-14"></a> `type` | `string` | [src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts#L10) |

***

### IssueCredentialBody

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L12)

Specification:
https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential#issue-credential

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="comment"></a> `comment?` | `string` | [src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L14) |
| <a id="replacement_id"></a> `replacement_id?` | `string` | [src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential.ts#L16) |

***

### MediationKeysUpdateListBody

Defined in: [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L10)

Specification:
https://didcomm.org/coordinate-mediation/2.0/

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="updates"></a> `updates` | \{ `action`: `"add"`; `recipient_did`: `string`; \}[] | [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L11) |

***

### OfferCredentialBody

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L12)

Specification: 
https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential#offer-credential

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="comment-1"></a> `comment?` | `string` | [src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L18) |
| <a id="credential_preview"></a> `credential_preview` | [`CredentialPreview`](#credentialpreview) | [src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L20) |
| <a id="goal_code"></a> `goal_code?` | `any` | [src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L14) |
| <a id="replacement_id-1"></a> `replacement_id?` | `string` | [src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/OfferCredential.ts#L16) |

***

### OutOfBandInvitationBody

Defined in: [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L6)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="accept"></a> `accept?` | `string`[] | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L9) |
| <a id="goal"></a> `goal?` | `string` | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L8) |
| <a id="goal_code-1"></a> `goal_code?` | `string` | [src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/OutOfBandInvitation.ts#L7) |

***

### PickupReceivedBody

Defined in: [src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L9)

Specification:
https://didcomm.org/messagepickup/3.0/

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="message_id_list"></a> `message_id_list` | `string`[] | [src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupReceived.ts#L11) |

***

### PickupRequestBody

Defined in: [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L8)

Specification:
https://didcomm.org/messagepickup/3.0/

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="limit"></a> `limit` | `number` | [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L10) |
| <a id="recipient_did"></a> `recipient_did?` | `string` | [src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/pickup/PickupRequest.ts#L12) |

***

### PrismOnboardingInvitationBody

Defined in: [src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts#L8)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="from-12"></a> `from` | `string` | [src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts#L11) |
| <a id="onboardingendpoint"></a> `onboardingEndpoint` | `string` | [src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts#L10) |
| <a id="type-15"></a> `type` | `string` | [src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation.ts#L9) |

***

### ProblemReportBody

Defined in: [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L9)

Specification:
https://identity.foundation/didcomm-messaging/spec/#problem-reports

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="args"></a> `args?` | `string`[] | [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L15) |
| <a id="code"></a> `code` | `string` | [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L11) |
| <a id="comment-2"></a> `comment?` | `string` | [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L13) |
| <a id="escalate_to"></a> `escalate_to?` | `string` | [src/plugins/internal/didcomm/protocols/other/ProblemReport.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/other/ProblemReport.ts#L17) |

***

### ProposeCredentialBody

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L12)

Specification:
https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential#propose-credential

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="comment-3"></a> `comment?` | `string` | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L16) |
| <a id="credential_preview-1"></a> `credential_preview?` | [`CredentialPreview`](#credentialpreview) | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L18) |
| <a id="goal_code-2"></a> `goal_code?` | `string` | [src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/ProposeCredential.ts#L14) |

***

### RequestCredentialBody

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L16)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="comment-4"></a> `comment?` | `string` | [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L20) |
| <a id="formats"></a> `formats` | [`CredentialFormat`](#credentialformat)[] | [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L22) |
| <a id="goal_code-3"></a> `goal_code?` | `string` | [src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/RequestCredential.ts#L18) |

## Type Aliases

### Context

> **Context** = [`Context`](../../overview/namespaces/Plugins.md#context)

Defined in: [src/plugins/internal/didcomm/plugin.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/plugin.ts#L14)

## Variables

### plugin

> `const` **plugin**: [`Plugin`](../../overview/README.md#plugin)

Defined in: [src/plugins/internal/didcomm/plugin.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/plugin.ts#L15)

***

### ProtocolIds

> `const` **ProtocolIds**: \{ `BasicMessage`: `"https://didcomm.org/basicmessage/2.0/message"`; `CredentialPreview`: `"https://didcomm.org/issue-credential/3.0/credential-preview"`; `IssueCredential`: `"https://didcomm.org/issue-credential/3.0/issue-credential"`; `LiveDeliveryChange`: `"https://didcomm.org/messagepickup/3.0/live-delivery-change"`; `MediationDeny`: `"https://didcomm.org/coordinate-mediation/2.0/mediate-deny"`; `MediationGrant`: `"https://didcomm.org/coordinate-mediation/2.0/mediate-grant"`; `MediationKeysUpdate`: `"https://didcomm.org/coordinate-mediation/2.0/keylist-update"`; `MediationRequest`: `"https://didcomm.org/coordinate-mediation/2.0/mediate-request"`; `OfferCredential`: `"https://didcomm.org/issue-credential/3.0/offer-credential"`; `OOBInvitation`: `"https://didcomm.org/out-of-band/2.0/invitation"`; `PickupDelivery`: `"https://didcomm.org/messagepickup/3.0/delivery"`; `PickupReceived`: `"https://didcomm.org/messagepickup/3.0/messages-received"`; `PickupRequest`: `"https://didcomm.org/messagepickup/3.0/delivery-request"`; `PickupStatus`: `"https://didcomm.org/messagepickup/3.0/status"`; `ProblemReporting`: `"https://didcomm.org/report-problem/2.0/problem-report"`; `ProposeCredential`: `"https://didcomm.org/issue-credential/3.0/propose-credential"`; `RequestCredential`: `"https://didcomm.org/issue-credential/3.0/request-credential"`; \}

Defined in: [src/plugins/internal/didcomm/types.ts:1](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L1)

#### Type declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="basicmessage-1"></a> `BasicMessage` | `"https://didcomm.org/basicmessage/2.0/message"` | `"https://didcomm.org/basicmessage/2.0/message"` | [src/plugins/internal/didcomm/types.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L3) |
| <a id="credentialpreview-1"></a> `CredentialPreview` | `"https://didcomm.org/issue-credential/3.0/credential-preview"` | `"https://didcomm.org/issue-credential/3.0/credential-preview"` | [src/plugins/internal/didcomm/types.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L20) |
| <a id="issuecredential-1"></a> `IssueCredential` | `"https://didcomm.org/issue-credential/3.0/issue-credential"` | `"https://didcomm.org/issue-credential/3.0/issue-credential"` | [src/plugins/internal/didcomm/types.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L24) |
| <a id="livedeliverychange"></a> `LiveDeliveryChange` | `"https://didcomm.org/messagepickup/3.0/live-delivery-change"` | `"https://didcomm.org/messagepickup/3.0/live-delivery-change"` | [src/plugins/internal/didcomm/types.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L18) |
| <a id="mediationdeny"></a> `MediationDeny` | `"https://didcomm.org/coordinate-mediation/2.0/mediate-deny"` | `"https://didcomm.org/coordinate-mediation/2.0/mediate-deny"` | [src/plugins/internal/didcomm/types.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L11) |
| <a id="mediationgrant"></a> `MediationGrant` | `"https://didcomm.org/coordinate-mediation/2.0/mediate-grant"` | `"https://didcomm.org/coordinate-mediation/2.0/mediate-grant"` | [src/plugins/internal/didcomm/types.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L10) |
| <a id="mediationkeysupdate"></a> `MediationKeysUpdate` | `"https://didcomm.org/coordinate-mediation/2.0/keylist-update"` | `"https://didcomm.org/coordinate-mediation/2.0/keylist-update"` | [src/plugins/internal/didcomm/types.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L12) |
| <a id="mediationrequest-1"></a> `MediationRequest` | `"https://didcomm.org/coordinate-mediation/2.0/mediate-request"` | `"https://didcomm.org/coordinate-mediation/2.0/mediate-request"` | [src/plugins/internal/didcomm/types.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L9) |
| <a id="offercredential-1"></a> `OfferCredential` | `"https://didcomm.org/issue-credential/3.0/offer-credential"` | `"https://didcomm.org/issue-credential/3.0/offer-credential"` | [src/plugins/internal/didcomm/types.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L22) |
| <a id="oobinvitation"></a> `OOBInvitation` | `"https://didcomm.org/out-of-band/2.0/invitation"` | `"https://didcomm.org/out-of-band/2.0/invitation"` | [src/plugins/internal/didcomm/types.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L7) |
| <a id="pickupdelivery"></a> `PickupDelivery` | `"https://didcomm.org/messagepickup/3.0/delivery"` | `"https://didcomm.org/messagepickup/3.0/delivery"` | [src/plugins/internal/didcomm/types.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L15) |
| <a id="pickupreceived-1"></a> `PickupReceived` | `"https://didcomm.org/messagepickup/3.0/messages-received"` | `"https://didcomm.org/messagepickup/3.0/messages-received"` | [src/plugins/internal/didcomm/types.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L17) |
| <a id="pickuprequest-1"></a> `PickupRequest` | `"https://didcomm.org/messagepickup/3.0/delivery-request"` | `"https://didcomm.org/messagepickup/3.0/delivery-request"` | [src/plugins/internal/didcomm/types.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L14) |
| <a id="pickupstatus"></a> `PickupStatus` | `"https://didcomm.org/messagepickup/3.0/status"` | `"https://didcomm.org/messagepickup/3.0/status"` | [src/plugins/internal/didcomm/types.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L16) |
| <a id="problemreporting"></a> `ProblemReporting` | `"https://didcomm.org/report-problem/2.0/problem-report"` | `"https://didcomm.org/report-problem/2.0/problem-report"` | [src/plugins/internal/didcomm/types.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L5) |
| <a id="proposecredential-1"></a> `ProposeCredential` | `"https://didcomm.org/issue-credential/3.0/propose-credential"` | `"https://didcomm.org/issue-credential/3.0/propose-credential"` | [src/plugins/internal/didcomm/types.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L21) |
| <a id="requestcredential-1"></a> `RequestCredential` | `"https://didcomm.org/issue-credential/3.0/request-credential"` | `"https://didcomm.org/issue-credential/3.0/request-credential"` | [src/plugins/internal/didcomm/types.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/types.ts#L23) |

## Functions

### validateCredentialPreview()

> **validateCredentialPreview**(`value`: `unknown`): `value is CredentialPreview`

Defined in: [src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/didcomm/protocols/issueCredential/CredentialPreview.ts#L23)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

`value is CredentialPreview`
