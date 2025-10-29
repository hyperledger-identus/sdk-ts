[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Agent

# Class: Agent

Defined in: [src/edge-agent/Agent.ts:50](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L50)

Edge agent implementation

 Agent

## Extends

- [`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md)

## Constructors

### Constructor

> **new Agent**(`apollo`: [`Apollo`](../namespaces/Domain/interfaces/Apollo.md), `castor`: [`Castor`](../namespaces/Domain/interfaces/Castor.md), `pluto`: [`Pluto`](../namespaces/Domain/interfaces/Pluto.md), `mercury`: [`Mercury`](../namespaces/Domain/interfaces/Mercury.md), `seed`: [`Seed`](../namespaces/Domain/interfaces/Seed.md), `api`: [`Api`](../namespaces/Domain/interfaces/Api.md), `options?`: [`AgentOptions`](../type-aliases/AgentOptions.md)): `Agent`

Defined in: [src/edge-agent/Agent.ts:61](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L61)

Creates an instance of Agent.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `apollo` | [`Apollo`](../namespaces/Domain/interfaces/Apollo.md) |
| `castor` | [`Castor`](../namespaces/Domain/interfaces/Castor.md) |
| `pluto` | [`Pluto`](../namespaces/Domain/interfaces/Pluto.md) |
| `mercury` | [`Mercury`](../namespaces/Domain/interfaces/Mercury.md) |
| `seed` | [`Seed`](../namespaces/Domain/interfaces/Seed.md) |
| `api` | [`Api`](../namespaces/Domain/interfaces/Api.md) |
| `options?` | [`AgentOptions`](../type-aliases/AgentOptions.md) |

#### Returns

`Agent`

#### Overrides

[`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md).[`constructor`](../namespaces/Domain/namespaces/Startable/classes/Controller.md#constructor)

## Properties

| Property | Modifier | Type | Default value | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="api"></a> `api` | `readonly` | [`Api`](../namespaces/Domain/interfaces/Api.md) | `undefined` | - | - | [src/edge-agent/Agent.ts:67](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L67) |
| <a id="apollo"></a> `apollo` | `readonly` | [`Apollo`](../namespaces/Domain/interfaces/Apollo.md) | `undefined` | - | - | [src/edge-agent/Agent.ts:62](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L62) |
| <a id="backup"></a> `backup` | `public` | [`AgentBackup`](AgentBackup.md) | `undefined` | - | - | [src/edge-agent/Agent.ts:51](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L51) |
| <a id="castor"></a> `castor` | `readonly` | [`Castor`](../namespaces/Domain/interfaces/Castor.md) | `undefined` | - | - | [src/edge-agent/Agent.ts:63](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L63) |
| <a id="connections"></a> `connections` | `readonly` | [`ConnectionsManager`](ConnectionsManager.md) | `undefined` | - | - | [src/edge-agent/Agent.ts:52](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L52) |
| <a id="events"></a> `events` | `readonly` | [`EventsManager`](EventsManager.md) | `undefined` | - | - | [src/edge-agent/Agent.ts:53](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L53) |
| <a id="jobs"></a> `jobs` | `readonly` | [`JobManager`](JobManager.md) | `undefined` | - | - | [src/edge-agent/Agent.ts:54](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L54) |
| <a id="mercury"></a> `mercury` | `readonly` | [`Mercury`](../namespaces/Domain/interfaces/Mercury.md) | `undefined` | - | - | [src/edge-agent/Agent.ts:65](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L65) |
| <a id="plugins"></a> `plugins` | `readonly` | [`PluginManager`](PluginManager.md) | `undefined` | - | - | [src/edge-agent/Agent.ts:55](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L55) |
| <a id="pluto"></a> `pluto` | `readonly` | [`Pluto`](../namespaces/Domain/interfaces/Pluto.md) | `undefined` | - | - | [src/edge-agent/Agent.ts:64](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L64) |
| <a id="seed"></a> `seed` | `readonly` | [`Seed`](../namespaces/Domain/interfaces/Seed.md) | `undefined` | - | - | [src/edge-agent/Agent.ts:66](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L66) |
| <a id="state"></a> `state` | `public` | [`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md) | `State.STOPPED` | current status of the entity | [`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md).[`state`](../namespaces/Domain/namespaces/Startable/classes/Controller.md#state) | [src/domain/protocols/Startable.ts:42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L42) |

## Accessors

### currentMediatorDID {#currentmediatordid}

#### Get Signature

> **get** **currentMediatorDID**(): [`DID`](../namespaces/Domain/classes/DID.md) \| `undefined`

Defined in: [src/edge-agent/Agent.ts:183](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L183)

##### Deprecated

Get current mediator DID if available or null

##### Returns

[`DID`](../namespaces/Domain/classes/DID.md) \| `undefined`

## Methods

### ~~acceptDIDCommInvitation()~~ {#acceptdidcomminvitation}

> **acceptDIDCommInvitation**(`invitation`: [`OutOfBandInvitation`](../../plugins/internal/didcomm/classes/OutOfBandInvitation.md), `alias?`: `string`): `Promise`\<`void`\>

Defined in: [src/edge-agent/Agent.ts:366](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L366)

Asyncronously accept a didcomm v2 invitation, will create a pair between the Agent
 its connecting with and the current owner's did

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `invitation` | [`OutOfBandInvitation`](../../plugins/internal/didcomm/classes/OutOfBandInvitation.md) |  |
| `alias?` | `string` | - |

#### Returns

`Promise`\<`void`\>

#### Deprecated

- use `acceptInvitation`

***

### acceptInvitation() {#acceptinvitation}

> **acceptInvitation**(`invitation`: [`InvitationType`](../type-aliases/InvitationType.md), `optionalAlias?`: `string`): `Promise`\<`void`\>

Defined in: [src/edge-agent/Agent.ts:288](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L288)

Handle an invitation based on it's type

- `PrismOnboardingInvitation`: creates a new connection
- `OutOfBandInvitation`: 
    - no Attachment: creates a new connection
    - with Attachment: stores / emits the attached message

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `invitation` | [`InvitationType`](../type-aliases/InvitationType.md) | an OOB or PrismOnboarding invitation |
| `optionalAlias?` | `string` | - |

#### Returns

`Promise`\<`void`\>

***

### addListener() {#addlistener}

> **addListener**\<`T`\>(`eventName`: `T`, `callback`: [`EventCallback`](../type-aliases/EventCallback.md)\<`T`\>): `number`

Defined in: [src/edge-agent/Agent.ts:160](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L160)

Add an event listener to get notified from an Event "MESSAGE"

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ListenerKey`](../enumerations/ListenerKey.md) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `T` |  |
| `callback` | [`EventCallback`](../type-aliases/EventCallback.md)\<`T`\> |  |

#### Returns

`number`

***

### createNewPeerDID() {#createnewpeerdid}

> **createNewPeerDID**(`services?`: [`Service`](../namespaces/Domain/namespaces/DIDDocument/classes/Service.md)[], `updateMediator?`: `boolean`): `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

Defined in: [src/edge-agent/Agent.ts:243](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L243)

Asyncronously Create a new PeerDID

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `services?` | [`Service`](../namespaces/Domain/namespaces/DIDDocument/classes/Service.md)[] | `[]` |  |
| `updateMediator?` | `boolean` | `true` |  |

#### Returns

`Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

***

### createNewPrismDID() {#createnewprismdid}

> **createNewPrismDID**(`alias`: `string`, `services?`: [`Service`](../namespaces/Domain/namespaces/DIDDocument/classes/Service.md)[], `keyPathIndex?`: `number`): `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

Defined in: [src/edge-agent/Agent.ts:226](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L226)

Asyncronously create a new PrismDID

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `alias` | `string` | `undefined` |  |
| `services?` | [`Service`](../namespaces/Domain/namespaces/DIDDocument/classes/Service.md)[] | `[]` |  |
| `keyPathIndex?` | `number` | `undefined` |  |

#### Returns

`Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

***

### createPresentationForRequestProof() {#createpresentationforrequestproof}

> **createPresentationForRequestProof**(`request`: [`RequestPresentation`](../../plugins/internal/oea/classes/RequestPresentation.md), `credential`: [`Credential`](../namespaces/Domain/classes/Credential.md)): `Promise`\<[`Presentation`](../../plugins/internal/oea/classes/Presentation.md)\>

Defined in: [src/edge-agent/Agent.ts:522](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L522)

Asyncronously create a verifiablePresentation from a valid stored verifiableCredential
This is used when the verified requests a specific verifiable credential, this will create the actual
instance of the presentation which we can share with the verifier.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | [`RequestPresentation`](../../plugins/internal/oea/classes/RequestPresentation.md) |  |
| `credential` | [`Credential`](../namespaces/Domain/classes/Credential.md) |  |

#### Returns

`Promise`\<[`Presentation`](../../plugins/internal/oea/classes/Presentation.md)\>

***

### handle() {#handle}

> **handle**(`message`: [`Message`](../namespaces/Domain/classes/Message.md)): `Promise`\<`any`\>

Defined in: [src/edge-agent/Agent.ts:426](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L426)

Find and execute a task registered for the given Message.piuri

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`Message`](../namespaces/Domain/classes/Message.md) |  |

#### Returns

`Promise`\<`any`\>

***

### handlePresentation() {#handlepresentation}

> **handlePresentation**(`presentation`: [`Presentation`](../../plugins/internal/oea/classes/Presentation.md)): `Promise`\<`boolean`\>

Defined in: [src/edge-agent/Agent.ts:568](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L568)

Initiate the Presentation and presentationSubmission

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `presentation` | [`Presentation`](../../plugins/internal/oea/classes/Presentation.md) |  |

#### Returns

`Promise`\<`boolean`\>

***

### initiatePresentationRequest() {#initiatepresentationrequest}

> **initiatePresentationRequest**\<`T`\>(`type`: `T`, `toDID`: [`DID`](../namespaces/Domain/classes/DID.md), `presentationClaims`: [`PresentationClaims`](../namespaces/Domain/type-aliases/PresentationClaims.md)\<`T`\>): `Promise`\<[`RequestPresentation`](../../plugins/internal/oea/classes/RequestPresentation.md)\>

Defined in: [src/edge-agent/Agent.ts:555](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L555)

Initiate a PresentationRequest from the SDK, to create oob Verification Requests

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`CredentialType`](../namespaces/Domain/enumerations/CredentialType.md) | [`JWT`](../namespaces/Domain/enumerations/CredentialType.md#jwt) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `T` |  |
| `toDID` | [`DID`](../namespaces/Domain/classes/DID.md) |  |
| `presentationClaims` | [`PresentationClaims`](../namespaces/Domain/type-aliases/PresentationClaims.md)\<`T`\> |  |

#### Returns

`Promise`\<[`RequestPresentation`](../../plugins/internal/oea/classes/RequestPresentation.md)\>

1. Example use-case: Send a Presentation Request for a JWT credential issued by a specific issuer
```ts
 agent.initiatePresentationRequest(
   Domain.CredentialType.JWT,
   toDID,
   { issuer: Domain.DID.fromString("did:peer:12345"), claims: {}}
);
```

2. Example use-case: Send a Presentation Request for a JWT credential issued by a specific issuer and specific claims
```ts
 agent.initiatePresentationRequest(
   Domain.CredentialType.JWT,
   toDID,
   { issuer: Domain.DID.fromString("did:peer:12345"), claims: {email: {type: 'string', pattern:'email@email.com'}}}
);
```

***

### isCredentialRevoked() {#iscredentialrevoked}

> **isCredentialRevoked**(`credential`: [`Credential`](../namespaces/Domain/classes/Credential.md)): `Promise`\<`boolean`\>

Defined in: [src/edge-agent/Agent.ts:442](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L442)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `credential` | [`Credential`](../namespaces/Domain/classes/Credential.md) |  |

#### Returns

`Promise`\<`boolean`\>

***

### parseInvitation() {#parseinvitation}

> **parseInvitation**(`str`: `string`): `Promise`\<[`InvitationType`](../type-aliases/InvitationType.md)\>

Defined in: [src/edge-agent/Agent.ts:271](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L271)

Asyncronously parse an invitation from a valid json string

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` |  |

#### Returns

`Promise`\<[`InvitationType`](../type-aliases/InvitationType.md)\>

***

### parseOOBInvitation() {#parseoobinvitation}

> **parseOOBInvitation**(`url`: `URL`): `Promise`\<[`OutOfBandInvitation`](../../plugins/internal/didcomm/classes/OutOfBandInvitation.md)\>

Defined in: [src/edge-agent/Agent.ts:346](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L346)

Asyncronously parse an out of band invitation from a URI as the oob come in format of valid URL

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `URL` |  |

#### Returns

`Promise`\<[`OutOfBandInvitation`](../../plugins/internal/didcomm/classes/OutOfBandInvitation.md)\>

***

### parsePrismInvitation() {#parseprisminvitation}

> **parsePrismInvitation**(`str`: `string`): `Promise`\<[`PrismOnboardingInvitation`](../../plugins/internal/didcomm/classes/PrismOnboardingInvitation.md)\>

Defined in: [src/edge-agent/Agent.ts:307](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L307)

Asyncronously parse a prismOnboarding invitation from a string

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` |  |

#### Returns

`Promise`\<[`PrismOnboardingInvitation`](../../plugins/internal/didcomm/classes/PrismOnboardingInvitation.md)\>

***

### prepareRequestCredentialWithIssuer() {#preparerequestcredentialwithissuer}

> **prepareRequestCredentialWithIssuer**(`offer`: [`OfferCredential`](../../plugins/internal/didcomm/classes/OfferCredential.md)): `Promise`\<[`RequestCredential`](../../plugins/internal/didcomm/classes/RequestCredential.md)\>

Defined in: [src/edge-agent/Agent.ts:489](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L489)

Asyncronously prepare a request credential message from a valid offerCredential for now supporting w3c verifiable credentials offers.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offer` | [`OfferCredential`](../../plugins/internal/didcomm/classes/OfferCredential.md) |  |

#### Returns

`Promise`\<[`RequestCredential`](../../plugins/internal/didcomm/classes/RequestCredential.md)\>

***

### processIssuedCredentialMessage() {#processissuedcredentialmessage}

> **processIssuedCredentialMessage**(`issueCredential`: [`IssueCredential`](../../plugins/internal/didcomm/classes/IssueCredential.md)): `Promise`\<[`Credential`](../namespaces/Domain/classes/Credential.md)\>

Defined in: [src/edge-agent/Agent.ts:504](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L504)

Extract the verifiableCredential object from the Issue credential message asyncronously

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `issueCredential` | [`IssueCredential`](../../plugins/internal/didcomm/classes/IssueCredential.md) |  |

#### Returns

`Promise`\<[`Credential`](../namespaces/Domain/classes/Credential.md)\>

***

### removeListener() {#removelistener}

> **removeListener**\<`T`\>(`eventName`: `T`, `callback`: [`EventCallback`](../type-aliases/EventCallback.md)\<`T`\>): `void`

Defined in: [src/edge-agent/Agent.ts:170](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L170)

Remove event listener, used by stop procedure

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ListenerKey`](../enumerations/ListenerKey.md) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `T` |  |
| `callback` | [`EventCallback`](../type-aliases/EventCallback.md)\<`T`\> |  |

#### Returns

`void`

***

### ~~revealCredentialFields()~~ {#revealcredentialfields}

> **revealCredentialFields**(`credential`: [`Credential`](../namespaces/Domain/classes/Credential.md), `fields`: `string`[], `linkSecret`: `string`): `Promise`\<\{ \}\>

Defined in: [src/edge-agent/Agent.ts:463](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L463)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `credential` | [`Credential`](../namespaces/Domain/classes/Credential.md) |  |
| `fields` | `string`[] | - |
| `linkSecret` | `string` | - |

#### Returns

`Promise`\<\{ \}\>

#### Deprecated

This method can be used by holders in order to disclose the value of a Credential
JWT are just encoded plainText
Anoncreds will really need to be disclosed as the fields are encoded.

***

### runTask() {#runtask}

> **runTask**\<`T`\>(`task`: [`Task`](../namespaces/Utils/classes/Task.md)\<`T`\>): `Promise`\<`T`\>

Defined in: [src/edge-agent/Agent.ts:195](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L195)

run the given Task

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `task` | [`Task`](../namespaces/Utils/classes/Task.md)\<`T`\> |  |

#### Returns

`Promise`\<`T`\>

***

### send() {#send}

#### Call Signature

> **send**(`message`: [`ApiRequest`](../namespaces/Domain/classes/ApiRequest.md)): `Promise`\<[`ApiResponse`](../namespaces/Domain/classes/ApiResponse.md)\<`unknown`\> \| `undefined`\>

Defined in: [src/edge-agent/Agent.ts:413](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L413)

Handle sending a Protocol

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`ApiRequest`](../namespaces/Domain/classes/ApiRequest.md) |  |

##### Returns

`Promise`\<[`ApiResponse`](../namespaces/Domain/classes/ApiResponse.md)\<`unknown`\> \| `undefined`\>

#### Call Signature

> **send**(`message`: [`Message`](../namespaces/Domain/classes/Message.md)): `Promise`\<[`Message`](../namespaces/Domain/classes/Message.md) \| `undefined`\>

Defined in: [src/edge-agent/Agent.ts:414](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L414)

Handle sending a Protocol

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`Message`](../namespaces/Domain/classes/Message.md) |  |

##### Returns

`Promise`\<[`Message`](../namespaces/Domain/classes/Message.md) \| `undefined`\>

***

### ~~sendMessage()~~ {#sendmessage}

> **sendMessage**(`message`: [`ApiRequest`](../namespaces/Domain/classes/ApiRequest.md) \| [`Message`](../namespaces/Domain/classes/Message.md)): `Promise`\<[`Message`](../namespaces/Domain/classes/Message.md) \| `undefined`\>

Defined in: [src/edge-agent/Agent.ts:402](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L402)

Asyncronously send a didcomm Message

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`ApiRequest`](../namespaces/Domain/classes/ApiRequest.md) \| [`Message`](../namespaces/Domain/classes/Message.md) |  |

#### Returns

`Promise`\<[`Message`](../namespaces/Domain/classes/Message.md) \| `undefined`\>

#### Deprecated

use `send` instead

***

### signWith() {#signwith}

> **signWith**(`did`: [`DID`](../namespaces/Domain/classes/DID.md), `message`: `Uint8Array`): `Promise`\<[`Signature`](../namespaces/Domain/interfaces/Signature.md)\>

Defined in: [src/edge-agent/Agent.ts:259](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L259)

Asyncronously sign a message with a DID

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) |  |
| `message` | `Uint8Array` |  |

#### Returns

`Promise`\<[`Signature`](../namespaces/Domain/interfaces/Signature.md)\>

***

### start() {#start}

> **start**(): `Promise`\<[`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md)\>

Defined in: [src/domain/protocols/Startable.ts:62](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L62)

handle the startup of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md)\>

#### Inherited from

[`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md).[`start`](../namespaces/Domain/namespaces/Startable/classes/Controller.md#start)

***

### startFetchingMessages() {#startfetchingmessages}

> **startFetchingMessages**(`period?`: `number`): `Promise`\<`void`\>

Defined in: [src/edge-agent/Agent.ts:381](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L381)

Start the fetch messages long running job

sends a PickupRequest to all mediator connections

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `period?` | `number` |  |

#### Returns

`Promise`\<`void`\>

***

### stop() {#stop}

> **stop**(): `Promise`\<[`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md)\>

Defined in: [src/domain/protocols/Startable.ts:72](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L72)

handle the teardown of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md)\>

#### Inherited from

[`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md).[`stop`](../namespaces/Domain/namespaces/Startable/classes/Controller.md#stop)

***

### stopFetchingMessages() {#stopfetchingmessages}

> **stopFetchingMessages**(): `void`

Defined in: [src/edge-agent/Agent.ts:390](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L390)

Stop the fetch message long running job

#### Returns

`void`

***

### verifiableCredentials() {#verifiablecredentials}

> **verifiableCredentials**(): `Promise`\<[`Credential`](../namespaces/Domain/classes/Credential.md)[]\>

Defined in: [src/edge-agent/Agent.ts:478](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L478)

Asyncronously get all verifiable credentials

#### Returns

`Promise`\<[`Credential`](../namespaces/Domain/classes/Credential.md)[]\>

***

### initialize() {#initialize}

> `static` **initialize**(`params`: \{ `api?`: [`Api`](../namespaces/Domain/interfaces/Api.md); `apollo?`: [`Apollo`](../namespaces/Domain/interfaces/Apollo.md); `castor?`: [`Castor`](../namespaces/Domain/interfaces/Castor.md); `mediatorDID?`: `string` \| [`DID`](../namespaces/Domain/classes/DID.md); `mercury?`: [`Mercury`](../namespaces/Domain/interfaces/Mercury.md); `options?`: [`AgentOptions`](../type-aliases/AgentOptions.md); `pluto`: [`Pluto`](../namespaces/Domain/interfaces/Pluto.md); `seed?`: [`Seed`](../namespaces/Domain/interfaces/Seed.md); \}): `Agent`

Defined in: [src/edge-agent/Agent.ts:97](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.ts#L97)

Convenience initializer for Agent
allowing default instantiation, omitting all but the absolute necessary parameters

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `api?`: [`Api`](../namespaces/Domain/interfaces/Api.md); `apollo?`: [`Apollo`](../namespaces/Domain/interfaces/Apollo.md); `castor?`: [`Castor`](../namespaces/Domain/interfaces/Castor.md); `mediatorDID?`: `string` \| [`DID`](../namespaces/Domain/classes/DID.md); `mercury?`: [`Mercury`](../namespaces/Domain/interfaces/Mercury.md); `options?`: [`AgentOptions`](../type-aliases/AgentOptions.md); `pluto`: [`Pluto`](../namespaces/Domain/interfaces/Pluto.md); `seed?`: [`Seed`](../namespaces/Domain/interfaces/Seed.md); \} | dependencies object |
| `params.api?` | [`Api`](../namespaces/Domain/interfaces/Api.md) |  |
| `params.apollo?` | [`Apollo`](../namespaces/Domain/interfaces/Apollo.md) |  |
| `params.castor?` | [`Castor`](../namespaces/Domain/interfaces/Castor.md) |  |
| `params.mediatorDID?` | `string` \| [`DID`](../namespaces/Domain/classes/DID.md) | did of the mediator to be used |
| `params.mercury?` | [`Mercury`](../namespaces/Domain/interfaces/Mercury.md) |  |
| `params.options?` | [`AgentOptions`](../type-aliases/AgentOptions.md) | - |
| `params.pluto` | [`Pluto`](../namespaces/Domain/interfaces/Pluto.md) | storage implementation |
| `params.seed?` | [`Seed`](../namespaces/Domain/interfaces/Seed.md) |  |

#### Returns

`Agent`
