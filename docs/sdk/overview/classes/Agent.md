[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Agent

# Class: Agent\<Extras\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:76](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L76)

Edge agent implementation

The optional tuple type parameter `Extras` carries the concrete types of
any extra DID methods passed to [Agent.initialize](#initialize), so that
`createDID`, `publishDID`, `updateDID` and `deactivateDID` only accept
method names that are actually registered and infer their payload types
directly from the passed DID method instances.

 Agent

## Extends

- [`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Extras` *extends* readonly `DIDMethodInput`[] | readonly \[\] |

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="property-api"></a> `api` | `readonly` | [`Api`](../namespaces/Domain/interfaces/Api.md) | - | - | [packages/lib/sdk/src/edge-agent/Agent.ts:91](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L91) |
| <a id="property-apollo"></a> `apollo` | `readonly` | [`Apollo`](../namespaces/Domain/interfaces/Apollo.md) | - | - | [packages/lib/sdk/src/edge-agent/Agent.ts:86](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L86) |
| <a id="property-backup"></a> `backup` | `public` | [`AgentBackup`](AgentBackup.md) | - | - | [packages/lib/sdk/src/edge-agent/Agent.ts:79](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L79) |
| <a id="property-castor"></a> `castor` | `readonly` | [`Castor`](Castor.md)\<`Extras`\> | - | - | [packages/lib/sdk/src/edge-agent/Agent.ts:87](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L87) |
| <a id="property-connections"></a> `connections` | `readonly` | [`ConnectionsManager`](ConnectionsManager.md) | - | - | [packages/lib/sdk/src/edge-agent/Agent.ts:80](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L80) |
| <a id="property-events"></a> `events` | `readonly` | [`EventsManager`](EventsManager.md) | - | - | [packages/lib/sdk/src/edge-agent/Agent.ts:81](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L81) |
| <a id="property-jobs"></a> `jobs` | `readonly` | [`JobManager`](JobManager.md) | - | - | [packages/lib/sdk/src/edge-agent/Agent.ts:82](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L82) |
| <a id="property-mercury"></a> `mercury` | `readonly` | [`Mercury`](../namespaces/Domain/interfaces/Mercury.md) | - | - | [packages/lib/sdk/src/edge-agent/Agent.ts:89](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L89) |
| <a id="property-plugins"></a> `plugins` | `readonly` | [`PluginManager`](PluginManager.md) | - | - | [packages/lib/sdk/src/edge-agent/Agent.ts:83](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L83) |
| <a id="property-pluto"></a> `pluto` | `readonly` | [`Pluto`](../namespaces/Domain/interfaces/Pluto.md) | - | - | [packages/lib/sdk/src/edge-agent/Agent.ts:88](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L88) |
| <a id="property-seed"></a> `seed` | `readonly` | [`SeedFunction`](../type-aliases/SeedFunction.md) | - | - | [packages/lib/sdk/src/edge-agent/Agent.ts:90](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L90) |
| <a id="property-state"></a> `state` | `public` | [`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md) | current status of the entity | [`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md).[`state`](../namespaces/Domain/namespaces/Startable/classes/Controller.md#property-state) | packages/shared/domain/build/index.d.ts:2330 |

## Accessors

### currentMediatorDID {#currentmediatordid}

#### Get Signature

> **get** **currentMediatorDID**(): [`DID`](../namespaces/Domain/classes/DID.md) \| `undefined`

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:223](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L223)

##### Deprecated

Get current mediator DID if available or null

##### Returns

[`DID`](../namespaces/Domain/classes/DID.md) \| `undefined`

***

### runtimeContext {#runtimecontext}

#### Get Signature

> **get** **runtimeContext**(): [`AgentContext`](AgentContext.md)

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:229](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L229)

##### Returns

[`AgentContext`](AgentContext.md)

## Methods

### ~~acceptDIDCommInvitation()~~ {#acceptdidcomminvitation}

> **acceptDIDCommInvitation**(`invitation`: [`OutOfBandInvitation`](../../plugins/internal/didcomm/classes/OutOfBandInvitation.md), `alias?`: `string`): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:520](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L520)

Asyncronously accept a didcomm v2 invitation, will create a pair between the Agent
 its connecting with and the current owner's did

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `invitation` | [`OutOfBandInvitation`](../../plugins/internal/didcomm/classes/OutOfBandInvitation.md) | - |
| `alias?` | `string` | - |

#### Returns

`Promise`\<`void`\>

#### Deprecated

- use `acceptInvitation`

***

### acceptInvitation() {#acceptinvitation}

> **acceptInvitation**(`invitation`: [`InvitationType`](../../plugins/internal/didcomm/type-aliases/InvitationType.md), `optionalAlias?`: `string`): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:442](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L442)

Handle an invitation based on it's type

- `PrismOnboardingInvitation`: creates a new connection
- `OutOfBandInvitation`: 
    - no Attachment: creates a new connection
    - with Attachment: stores / emits the attached message

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `invitation` | [`InvitationType`](../../plugins/internal/didcomm/type-aliases/InvitationType.md) | an OOB or PrismOnboarding invitation |
| `optionalAlias?` | `string` | - |

#### Returns

`Promise`\<`void`\>

***

### addListener() {#addlistener}

> **addListener**\<`T`\>(`eventName`: `T`, `callback`: [`EventCallback`](../type-aliases/EventCallback.md)\<`T`\>): `number`

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:200](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L200)

Add an event listener to get notified from an Event "MESSAGE"

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ListenerKey`](../enumerations/ListenerKey.md) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `T` | - |
| `callback` | [`EventCallback`](../type-aliases/EventCallback.md)\<`T`\> | - |

#### Returns

`number`

***

### createDID() {#createdid}

> **createDID**\<`M`\>(`method`: `M`, `opts`: [`CreatePayloadOf`](../type-aliases/CreatePayloadOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\> & \{ `alias?`: `string`; \}): `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:306](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L306)

Create a new DID using the specified method, store it in Pluto,
and (for peer DIDs) update the mediator key list.

The method name is statically checked against the DID methods actually
registered on this Agent (the built-in `prism` / `peer` plus any
custom ones supplied via [Agent.initialize](#initialize)) and the payload
type is inferred directly from the matching DID method instance.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `M` *extends* `string` | registered DID method name (e.g. `"prism"`, `"peer"`, or a custom method) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `method` | `M` | the DID method to use |
| `opts` | [`CreatePayloadOf`](../type-aliases/CreatePayloadOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\> & \{ `alias?`: `string`; \} | method-specific creation options; may include an optional `alias` string that is persisted alongside the DID |

#### Returns

`Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

the newly created DID

#### Example

```ts
const prismDID = await agent.createDID('prism', {
  keys: { MASTER_KEY: masterSK },
  alias: 'my-issuer',
});

const peerDID = await agent.createDID('peer', {
  keys: {
    AUTHENTICATION_KEY: [authSK],
    KEY_AGREEMENT_KEY: [agreementSK],
  },
});
```

***

### createPeerDID() {#createpeerdid}

> **createPeerDID**(`services?`: [`Service`](../namespaces/Domain/namespaces/DIDDocument/classes/Service.md)[], `updateMediator?`: `boolean`): `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:397](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L397)

Asyncronously Create a new PeerDID

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `services?` | [`Service`](../namespaces/Domain/namespaces/DIDDocument/classes/Service.md)[] | `[]` | - |
| `updateMediator?` | `boolean` | `true` | - |

#### Returns

`Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

***

### createPresentationForRequestProof() {#createpresentationforrequestproof}

> **createPresentationForRequestProof**(`request`: [`RequestPresentation`](../../plugins/internal/oea/classes/RequestPresentation.md), `credential`: [`Credential`](../namespaces/Domain/classes/Credential.md)): `Promise`\<[`Presentation`](../../plugins/internal/oea/classes/Presentation.md)\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:677](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L677)

Asyncronously create a verifiablePresentation from a valid stored verifiableCredential
This is used when the verified requests a specific verifiable credential, this will create the actual
instance of the presentation which we can share with the verifier.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `request` | [`RequestPresentation`](../../plugins/internal/oea/classes/RequestPresentation.md) | - |
| `credential` | [`Credential`](../namespaces/Domain/classes/Credential.md) | - |

#### Returns

`Promise`\<[`Presentation`](../../plugins/internal/oea/classes/Presentation.md)\>

***

### createPrismDID() {#createprismdid}

> **createPrismDID**(`alias`: `string`, `services?`: [`Service`](../namespaces/Domain/namespaces/DIDDocument/classes/Service.md)[], `keyPathIndex?`: `number`): `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:381](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L381)

Asyncronously create a new PrismDID

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `alias` | `string` | `undefined` | - |
| `services?` | [`Service`](../namespaces/Domain/namespaces/DIDDocument/classes/Service.md)[] | `[]` | - |
| `keyPathIndex?` | `number` | `undefined` | - |

#### Returns

`Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

***

### deactivateDID() {#deactivatedid}

> **deactivateDID**\<`M`\>(`method`: `M`, `opts`: [`DeactivatePayloadOf`](../type-aliases/DeactivatePayloadOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>): `Promise`\<[`MetadataOf`](../type-aliases/MetadataOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:366](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L366)

Deactivate a DID via its registered method.

The method name and payload are statically checked against the DID
methods registered on this Agent.

#### Type Parameters

| Type Parameter |
| ------ |
| `M` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `M` |
| `opts` | [`DeactivatePayloadOf`](../type-aliases/DeactivatePayloadOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\> |

#### Returns

`Promise`\<[`MetadataOf`](../type-aliases/MetadataOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>\>

***

### handle() {#handle}

> **handle**(`message`: [`Message`](../namespaces/Domain/classes/Message.md)): `Promise`\<`any`\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:580](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L580)

Find and execute a task registered for the given Message.piuri

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`Message`](../namespaces/Domain/classes/Message.md) | - |

#### Returns

`Promise`\<`any`\>

***

### handlePresentation() {#handlepresentation}

> **handlePresentation**(`presentation`: [`Presentation`](../../plugins/internal/oea/classes/Presentation.md)): `Promise`\<`boolean`\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:723](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L723)

Initiate the Presentation and presentationSubmission

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `presentation` | [`Presentation`](../../plugins/internal/oea/classes/Presentation.md) | - |

#### Returns

`Promise`\<`boolean`\>

***

### initiatePresentationRequest() {#initiatepresentationrequest}

> **initiatePresentationRequest**\<`T`\>(`type`: `T`, `toDID`: [`DID`](../namespaces/Domain/classes/DID.md), `presentationClaims`: [`PresentationClaims`](../../plugins/internal/oea/type-aliases/PresentationClaims.md)\<`T`\>): `Promise`\<[`RequestPresentation`](../../plugins/internal/oea/classes/RequestPresentation.md)\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:710](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L710)

Initiate a PresentationRequest from the SDK, to create oob Verification Requests

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`CredentialType`](../../plugins/internal/oea/enumerations/CredentialType.md) | [`JWT`](../../plugins/internal/oea/enumerations/CredentialType.md#enumeration-member-jwt) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `T` | - |
| `toDID` | [`DID`](../namespaces/Domain/classes/DID.md) | - |
| `presentationClaims` | [`PresentationClaims`](../../plugins/internal/oea/type-aliases/PresentationClaims.md)\<`T`\> | - |

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

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:596](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L596)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `credential` | [`Credential`](../namespaces/Domain/classes/Credential.md) | - |

#### Returns

`Promise`\<`boolean`\>

***

### parseInvitation() {#parseinvitation}

> **parseInvitation**(`str`: `string`): `Promise`\<[`InvitationType`](../../plugins/internal/didcomm/type-aliases/InvitationType.md)\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:425](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L425)

Asyncronously parse an invitation from a valid json string

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | - |

#### Returns

`Promise`\<[`InvitationType`](../../plugins/internal/didcomm/type-aliases/InvitationType.md)\>

***

### parseOOBInvitation() {#parseoobinvitation}

> **parseOOBInvitation**(`url`: `URL`): `Promise`\<[`OutOfBandInvitation`](../../plugins/internal/didcomm/classes/OutOfBandInvitation.md)\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:500](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L500)

Asyncronously parse an out of band invitation from a URI as the oob come in format of valid URL

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `URL` | - |

#### Returns

`Promise`\<[`OutOfBandInvitation`](../../plugins/internal/didcomm/classes/OutOfBandInvitation.md)\>

***

### parsePrismInvitation() {#parseprisminvitation}

> **parsePrismInvitation**(`str`: `string`): `Promise`\<[`PrismOnboardingInvitation`](../../plugins/internal/didcomm/classes/PrismOnboardingInvitation.md)\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:461](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L461)

Asyncronously parse a prismOnboarding invitation from a string

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | - |

#### Returns

`Promise`\<[`PrismOnboardingInvitation`](../../plugins/internal/didcomm/classes/PrismOnboardingInvitation.md)\>

***

### prepareRequestCredentialWithIssuer() {#preparerequestcredentialwithissuer}

> **prepareRequestCredentialWithIssuer**(`offer`: [`OfferCredential`](../../plugins/internal/didcomm/classes/OfferCredential.md)): `Promise`\<[`RequestCredential`](../../plugins/internal/didcomm/classes/RequestCredential.md)\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:644](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L644)

Asyncronously prepare a request credential message from a valid offerCredential for now supporting w3c verifiable credentials offers.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offer` | [`OfferCredential`](../../plugins/internal/didcomm/classes/OfferCredential.md) | - |

#### Returns

`Promise`\<[`RequestCredential`](../../plugins/internal/didcomm/classes/RequestCredential.md)\>

***

### processIssuedCredentialMessage() {#processissuedcredentialmessage}

> **processIssuedCredentialMessage**(`issueCredential`: [`IssueCredential`](../../plugins/internal/didcomm/classes/IssueCredential.md)): `Promise`\<[`Credential`](../namespaces/Domain/classes/Credential.md)\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:659](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L659)

Extract the verifiableCredential object from the Issue credential message asyncronously

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `issueCredential` | [`IssueCredential`](../../plugins/internal/didcomm/classes/IssueCredential.md) | - |

#### Returns

`Promise`\<[`Credential`](../namespaces/Domain/classes/Credential.md)\>

***

### publishDID() {#publishdid}

> **publishDID**\<`M`\>(`method`: `M`, `opts`: [`PublishPayloadOf`](../type-aliases/PublishPayloadOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>): `Promise`\<[`MetadataOf`](../type-aliases/MetadataOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:340](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L340)

Publish a DID via its registered method.

The method name and payload are statically checked against the DID
methods registered on this Agent; the return type is the metadata
type declared by the matching DID method instance.

#### Type Parameters

| Type Parameter |
| ------ |
| `M` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `M` |
| `opts` | [`PublishPayloadOf`](../type-aliases/PublishPayloadOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\> |

#### Returns

`Promise`\<[`MetadataOf`](../type-aliases/MetadataOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>\>

***

### removeListener() {#removelistener}

> **removeListener**\<`T`\>(`eventName`: `T`, `callback`: [`EventCallback`](../type-aliases/EventCallback.md)\<`T`\>): `void`

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:210](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L210)

Remove event listener, used by stop procedure

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ListenerKey`](../enumerations/ListenerKey.md) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `T` | - |
| `callback` | [`EventCallback`](../type-aliases/EventCallback.md)\<`T`\> | - |

#### Returns

`void`

***

### ~~revealCredentialFields()~~ {#revealcredentialfields}

> **revealCredentialFields**(`credential`: [`Credential`](../namespaces/Domain/classes/Credential.md), `fields`: `string`[]): `Promise`\<\{ \}\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:620](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L620)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `credential` | [`Credential`](../namespaces/Domain/classes/Credential.md) | - |
| `fields` | `string`[] | - |

#### Returns

`Promise`\<\{ \}\>

#### Deprecated

This method can be used by holders in order to disclose the value of a Credential
JWT are just encoded plainText
Anoncreds will really need to be disclosed as the fields are encoded.

***

### runTask() {#runtask}

> **runTask**\<`T`\>(`task`: `Task`\<`T`\>): `Promise`\<`T`\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:256](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L256)

run the given Task

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `task` | `Task`\<`T`\> | - |

#### Returns

`Promise`\<`T`\>

***

### send() {#send}

#### Call Signature

> **send**(`message`: [`ApiRequest`](../namespaces/Domain/classes/ApiRequest.md)): `Promise`\<[`ApiResponse`](../namespaces/Domain/classes/ApiResponse.md)\<`unknown`\> \| `undefined`\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:567](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L567)

Handle sending a Protocol

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`ApiRequest`](../namespaces/Domain/classes/ApiRequest.md) | - |

##### Returns

`Promise`\<[`ApiResponse`](../namespaces/Domain/classes/ApiResponse.md)\<`unknown`\> \| `undefined`\>

#### Call Signature

> **send**(`message`: [`Message`](../namespaces/Domain/classes/Message.md)): `Promise`\<[`Message`](../namespaces/Domain/classes/Message.md) \| `undefined`\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:568](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L568)

Handle sending a Protocol

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`Message`](../namespaces/Domain/classes/Message.md) | - |

##### Returns

`Promise`\<[`Message`](../namespaces/Domain/classes/Message.md) \| `undefined`\>

***

### ~~sendMessage()~~ {#sendmessage}

> **sendMessage**(`message`: [`Message`](../namespaces/Domain/classes/Message.md) \| [`ApiRequest`](../namespaces/Domain/classes/ApiRequest.md)): `Promise`\<[`Message`](../namespaces/Domain/classes/Message.md) \| `undefined`\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:556](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L556)

Asyncronously send a didcomm Message

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`Message`](../namespaces/Domain/classes/Message.md) \| [`ApiRequest`](../namespaces/Domain/classes/ApiRequest.md) | - |

#### Returns

`Promise`\<[`Message`](../namespaces/Domain/classes/Message.md) \| `undefined`\>

#### Deprecated

use `send` instead

***

### signWith() {#signwith}

> **signWith**(`did`: [`DID`](../namespaces/Domain/classes/DID.md), `message`: `Uint8Array`): `Promise`\<[`Signature`](../namespaces/Domain/interfaces/Signature.md)\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:413](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L413)

Asyncronously sign a message with a DID

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) | - |
| `message` | `Uint8Array` | - |

#### Returns

`Promise`\<[`Signature`](../namespaces/Domain/interfaces/Signature.md)\>

***

### start() {#start}

> **start**(): `Promise`\<[`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md)\>

Defined in: packages/shared/domain/build/index.d.ts:2347

handle the startup of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md)\>

#### Inherited from

[`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md).[`start`](../namespaces/Domain/namespaces/Startable/classes/Controller.md#start)

***

### startFetchingMessages() {#startfetchingmessages}

> **startFetchingMessages**(`period?`: `number`): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:535](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L535)

Start the fetch messages long running job

sends a PickupRequest to all mediator connections

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `period?` | `number` | - |

#### Returns

`Promise`\<`void`\>

***

### stop() {#stop}

> **stop**(): `Promise`\<[`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md)\>

Defined in: packages/shared/domain/build/index.d.ts:2348

handle the teardown of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md)\>

#### Inherited from

[`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md).[`stop`](../namespaces/Domain/namespaces/Startable/classes/Controller.md#stop)

***

### stopFetchingMessages() {#stopfetchingmessages}

> **stopFetchingMessages**(): `void`

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:544](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L544)

Stop the fetch message long running job

#### Returns

`void`

***

### updateDID() {#updatedid}

> **updateDID**\<`M`\>(`method`: `M`, `opts`: [`UpdatePayloadOf`](../type-aliases/UpdatePayloadOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>): `Promise`\<[`MetadataOf`](../type-aliases/MetadataOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:353](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L353)

Update a DID via its registered method.

The method name and payload are statically checked against the DID
methods registered on this Agent.

#### Type Parameters

| Type Parameter |
| ------ |
| `M` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | `M` |
| `opts` | [`UpdatePayloadOf`](../type-aliases/UpdatePayloadOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\> |

#### Returns

`Promise`\<[`MetadataOf`](../type-aliases/MetadataOf.md)\<[`MethodMapOf`](../type-aliases/MethodMapOf.md)\<readonly \[[`PrismDIDMethod`](PrismDIDMethod.md), [`PeerDIDMethod`](PeerDIDMethod.md), `Extras`\]\>\[`M`\]\>\>

***

### verifiableCredentials() {#verifiablecredentials}

> **verifiableCredentials**(): `Promise`\<[`Credential`](../namespaces/Domain/classes/Credential.md)[]\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:633](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L633)

Asyncronously get all verifiable credentials

#### Returns

`Promise`\<[`Credential`](../namespaces/Domain/classes/Credential.md)[]\>

***

### initialize() {#initialize}

> `static` **initialize**\<`ExtraMethods`\>(`params`: \{ `api?`: [`Api`](../namespaces/Domain/interfaces/Api.md); `apollo?`: [`Apollo`](../namespaces/Domain/interfaces/Apollo.md); `castor?`: [`Castor`](Castor.md)\<`ExtraMethods`\>; `didMethods?`: `ExtraMethods`; `mediatorDID?`: `string` \| [`DID`](../namespaces/Domain/classes/DID.md); `mercury?`: [`Mercury`](../namespaces/Domain/interfaces/Mercury.md); `options?`: [`AgentOptions`](../type-aliases/AgentOptions.md); `pluto`: [`Pluto`](../namespaces/Domain/interfaces/Pluto.md); `seed?`: [`SeedFunction`](../type-aliases/SeedFunction.md); \}): `Agent`\<`ExtraMethods`\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.ts:127](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.ts#L127)

Convenience initializer for Agent
allowing default instantiation, omitting all but the absolute necessary parameters.

DID methods registered through the top-level `didMethods` param are
propagated through to the Agent's type parameter, so `agent.createDID`
and friends are fully typed against them (defaults `"prism" | "peer"`
plus any extras).

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `ExtraMethods` *extends* readonly `DIDMethodInput`[] | readonly \[\] |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `api?`: [`Api`](../namespaces/Domain/interfaces/Api.md); `apollo?`: [`Apollo`](../namespaces/Domain/interfaces/Apollo.md); `castor?`: [`Castor`](Castor.md)\<`ExtraMethods`\>; `didMethods?`: `ExtraMethods`; `mediatorDID?`: `string` \| [`DID`](../namespaces/Domain/classes/DID.md); `mercury?`: [`Mercury`](../namespaces/Domain/interfaces/Mercury.md); `options?`: [`AgentOptions`](../type-aliases/AgentOptions.md); `pluto`: [`Pluto`](../namespaces/Domain/interfaces/Pluto.md); `seed?`: [`SeedFunction`](../type-aliases/SeedFunction.md); \} | dependencies object |
| `params.api?` | [`Api`](../namespaces/Domain/interfaces/Api.md) | - |
| `params.apollo?` | [`Apollo`](../namespaces/Domain/interfaces/Apollo.md) | - |
| `params.castor?` | [`Castor`](Castor.md)\<`ExtraMethods`\> | - |
| `params.didMethods?` | `ExtraMethods` | custom DID methods to register alongside the built-in prism/peer methods |
| `params.mediatorDID?` | `string` \| [`DID`](../namespaces/Domain/classes/DID.md) | did of the mediator to be used |
| `params.mercury?` | [`Mercury`](../namespaces/Domain/interfaces/Mercury.md) | - |
| `params.options?` | [`AgentOptions`](../type-aliases/AgentOptions.md) | - |
| `params.pluto` | [`Pluto`](../namespaces/Domain/interfaces/Pluto.md) | storage implementation |
| `params.seed?` | [`SeedFunction`](../type-aliases/SeedFunction.md) | - |

#### Returns

`Agent`\<`ExtraMethods`\>
