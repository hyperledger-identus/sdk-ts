[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Pluto

# Class: Pluto

Defined in: [src/pluto/Pluto.ts:46](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L46)

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

## Extends

- [`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md)

## Implements

- [`Pluto`](../namespaces/Domain/interfaces/Pluto.md)

## Constructors

### Constructor

> **new Pluto**(`store`: [`Store`](../namespaces/Pluto/interfaces/Store.md), `keyRestoration`: [`KeyRestoration`](../namespaces/Domain/interfaces/KeyRestoration.md)): `Pluto`

Defined in: [src/pluto/Pluto.ts:199](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L199)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Store`](../namespaces/Pluto/interfaces/Store.md) |
| `keyRestoration` | [`KeyRestoration`](../namespaces/Domain/interfaces/KeyRestoration.md) |

#### Returns

`Pluto`

#### Overrides

[`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md).[`constructor`](../namespaces/Domain/namespaces/Startable/classes/Controller.md#constructor)

## Properties

| Property | Modifier | Type | Default value | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="backupmgr"></a> `BackupMgr` | `public` | [`BackupManager`](BackupManager.md) | `undefined` | - | - | [src/pluto/Pluto.ts:196](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L196) |
| <a id="state"></a> `state` | `public` | [`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md) | `State.STOPPED` | current status of the entity | [`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`state`](../namespaces/Domain/interfaces/Pluto.md#state) [`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md).[`state`](../namespaces/Domain/namespaces/Startable/classes/Controller.md#state) | [src/domain/protocols/Startable.ts:42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L42) |

## Methods

### backup() {#backup}

> **backup**(`version?`: `"0.0.1"`): `Promise`\<\{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}\>

Defined in: [src/pluto/Pluto.ts:221](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L221)

Backups *

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `version?` | `"0.0.1"` |

#### Returns

`Promise`\<\{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`backup`](../namespaces/Domain/interfaces/Pluto.md#backup)

***

### deleteMessage() {#deletemessage}

> **deleteMessage**(`id`: `string`): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:229](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L229)

Delete a previously stored messages

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`deleteMessage`](../namespaces/Domain/interfaces/Pluto.md#deletemessage)

***

### getAllCredentials() {#getallcredentials}

> **getAllCredentials**(): `Promise`\<[`Credential`](../namespaces/Domain/classes/Credential.md)[]\>

Defined in: [src/pluto/Pluto.ts:243](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L243)

Retrieve all the stored credentials

#### Returns

`Promise`\<[`Credential`](../namespaces/Domain/classes/Credential.md)[]\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getAllCredentials`](../namespaces/Domain/interfaces/Pluto.md#getallcredentials)

***

### getAllDidPairs() {#getalldidpairs}

> **getAllDidPairs**(): `Promise`\<[`DIDPair`](../namespaces/Domain/classes/DIDPair.md)[]\>

Defined in: [src/pluto/Pluto.ts:436](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L436)

Retrieve all stored DID pairs (DIDComm connections).

#### Returns

`Promise`\<[`DIDPair`](../namespaces/Domain/classes/DIDPair.md)[]\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getAllDidPairs`](../namespaces/Domain/interfaces/Pluto.md#getalldidpairs)

***

### getAllMediators() {#getallmediators}

> **getAllMediators**(): `Promise`\<[`Mediator`](../namespaces/Domain/interfaces/Mediator.md)[]\>

Defined in: [src/pluto/Pluto.ts:488](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L488)

Mediators *

#### Returns

`Promise`\<[`Mediator`](../namespaces/Domain/interfaces/Mediator.md)[]\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getAllMediators`](../namespaces/Domain/interfaces/Pluto.md#getallmediators)

***

### getAllMessages() {#getallmessages}

> **getAllMessages**(): `Promise`\<[`Message`](../namespaces/Domain/classes/Message.md)[]\>

Defined in: [src/pluto/Pluto.ts:417](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L417)

Retrieve all stored DIDComm messages.

#### Returns

`Promise`\<[`Message`](../namespaces/Domain/classes/Message.md)[]\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getAllMessages`](../namespaces/Domain/interfaces/Pluto.md#getallmessages)

***

### getAllPeerDIDs() {#getallpeerdids}

> **getAllPeerDIDs**(): `Promise`\<[`PeerDID`](PeerDID.md)[]\>

Defined in: [src/pluto/Pluto.ts:359](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L359)

Retrieve all stored Peer DIDs.

#### Returns

`Promise`\<[`PeerDID`](PeerDID.md)[]\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getAllPeerDIDs`](../namespaces/Domain/interfaces/Pluto.md#getallpeerdids)

***

### getAllPrismDIDs() {#getallprismdids}

> **getAllPrismDIDs**(): `Promise`\<[`PrismDID`](../namespaces/Domain/classes/PrismDID.md)[]\>

Defined in: [src/pluto/Pluto.ts:321](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L321)

Retrieve all stored PRISM DIDs.

#### Returns

`Promise`\<[`PrismDID`](../namespaces/Domain/classes/PrismDID.md)[]\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getAllPrismDIDs`](../namespaces/Domain/interfaces/Pluto.md#getallprismdids)

***

### getCredentialMetadata() {#getcredentialmetadata}

> **getCredentialMetadata**(`name`: `string`): `Promise`\<[`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md) \| `null`\>

Defined in: [src/pluto/Pluto.ts:264](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L264)

Fetch the Credential Metadata by its name

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` |  |

#### Returns

`Promise`\<[`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md) \| `null`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getCredentialMetadata`](../namespaces/Domain/interfaces/Pluto.md#getcredentialmetadata)

***

### getDIDPrivateKeysByDID() {#getdidprivatekeysbydid}

> **getDIDPrivateKeysByDID**(`did`: [`DID`](../namespaces/Domain/classes/DID.md)): `Promise`\<[`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)[]\>

Defined in: [src/pluto/Pluto.ts:286](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L286)

Retrieve available private keys for a given DID.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) |

#### Returns

`Promise`\<[`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)[]\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getDIDPrivateKeysByDID`](../namespaces/Domain/interfaces/Pluto.md#getdidprivatekeysbydid)

***

### getLinkSecret() {#getlinksecret}

> **getLinkSecret**(`name`: `string`): `Promise`\<[`LinkSecret`](../namespaces/Domain/classes/LinkSecret.md) \| `null`\>

Defined in: [src/pluto/Pluto.ts:275](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L275)

Retrieve the stored link secret by its name

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `name` | `string` | `Domain.LinkSecret.defaultName` |

#### Returns

`Promise`\<[`LinkSecret`](../namespaces/Domain/classes/LinkSecret.md) \| `null`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getLinkSecret`](../namespaces/Domain/interfaces/Pluto.md#getlinksecret)

***

### getMessage() {#getmessage}

> **getMessage**(`id`: `string`): `Promise`\<[`Message`](../namespaces/Domain/classes/Message.md) \| `null`\>

Defined in: [src/pluto/Pluto.ts:413](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L413)

Retrieve a DIDComm message by ID.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Message`](../namespaces/Domain/classes/Message.md) \| `null`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getMessage`](../namespaces/Domain/interfaces/Pluto.md#getmessage)

***

### getPairByDID() {#getpairbydid}

> **getPairByDID**(`did`: [`DID`](../namespaces/Domain/classes/DID.md)): `Promise`\<[`DIDPair`](../namespaces/Domain/classes/DIDPair.md) \| `null`\>

Defined in: [src/pluto/Pluto.ts:444](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L444)

Retrieve a DID pair containing a given DID as either host or receiver.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) |

#### Returns

`Promise`\<[`DIDPair`](../namespaces/Domain/classes/DIDPair.md) \| `null`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getPairByDID`](../namespaces/Domain/interfaces/Pluto.md#getpairbydid)

***

### getPairByName() {#getpairbyname}

> **getPairByName**(`alias`: `string`): `Promise`\<[`DIDPair`](../namespaces/Domain/classes/DIDPair.md) \| `null`\>

Defined in: [src/pluto/Pluto.ts:461](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L461)

Retrieve a DID pair by a given pair name.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `alias` | `string` |

#### Returns

`Promise`\<[`DIDPair`](../namespaces/Domain/classes/DIDPair.md) \| `null`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getPairByName`](../namespaces/Domain/interfaces/Pluto.md#getpairbyname)

***

### restore() {#restore}

> **restore**(`backup`: \{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:225](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L225)

load the given data into the store

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `backup` | \{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \} |  |
| `backup.credentials` | \{ `data`: `string`; `recovery_id`: `string`; \}[] | - |
| `backup.did_pairs` | \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[] | - |
| `backup.dids` | \{ `alias?`: `string`; `did`: `string`; \}[] | - |
| `backup.keys` | \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[] | - |
| `backup.link_secret?` | `string` | - |
| `backup.mediators` | \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[] | - |
| `backup.messages` | `string`[] | - |
| `backup.version?` | `"0.0.1"` | - |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`restore`](../namespaces/Domain/interfaces/Pluto.md#restore)

***

### revokeCredential() {#revokecredential}

> **revokeCredential**(`credential`: [`Credential`](../namespaces/Domain/classes/Credential.md)): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:248](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L248)

Revoke a Credential

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `credential` | [`Credential`](../namespaces/Domain/classes/Credential.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`revokeCredential`](../namespaces/Domain/interfaces/Pluto.md#revokecredential)

***

### start() {#start}

> **start**(): `Promise`\<[`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md)\>

Defined in: [src/domain/protocols/Startable.ts:62](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L62)

handle the startup of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md)\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`start`](../namespaces/Domain/interfaces/Pluto.md#start)

#### Inherited from

[`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md).[`start`](../namespaces/Domain/namespaces/Startable/classes/Controller.md#start)

***

### stop() {#stop}

> **stop**(): `Promise`\<[`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md)\>

Defined in: [src/domain/protocols/Startable.ts:72](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L72)

handle the teardown of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md)\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`stop`](../namespaces/Domain/interfaces/Pluto.md#stop)

#### Inherited from

[`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md).[`stop`](../namespaces/Domain/namespaces/Startable/classes/Controller.md#stop)

***

### storeCredential() {#storecredential}

> **storeCredential**(`credential`: [`Credential`](../namespaces/Domain/classes/Credential.md)): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:239](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L239)

Credentials *

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `credential` | [`Credential`](../namespaces/Domain/classes/Credential.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storeCredential`](../namespaces/Domain/interfaces/Pluto.md#storecredential)

***

### storeCredentialMetadata() {#storecredentialmetadata}

> **storeCredentialMetadata**(`metadata`: [`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md)): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:260](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L260)

Credential Metadata *

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `metadata` | [`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storeCredentialMetadata`](../namespaces/Domain/interfaces/Pluto.md#storecredentialmetadata)

***

### storeDID() {#storedid}

> **storeDID**(`did`: [`DID`](../namespaces/Domain/classes/DID.md), `keys?`: [`Arrayable`](../namespaces/Utils/type-aliases/Arrayable.md)\<[`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)\>, `alias?`: `string`): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:296](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L296)

DIDs *

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `keys?` | [`Arrayable`](../namespaces/Utils/type-aliases/Arrayable.md)\<[`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)\> |
| `alias?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storeDID`](../namespaces/Domain/interfaces/Pluto.md#storedid)

***

### storeDIDPair() {#storedidpair}

> **storeDIDPair**(`host`: [`DID`](../namespaces/Domain/classes/DID.md), `receiver`: [`DID`](../namespaces/Domain/classes/DID.md), `alias`: `string`): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:424](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L424)

DID Pairs *

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `host` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `receiver` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `alias` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storeDIDPair`](../namespaces/Domain/interfaces/Pluto.md#storedidpair)

***

### storeLinkSecret() {#storelinksecret}

> **storeLinkSecret**(`linkSecret`: [`LinkSecret`](../namespaces/Domain/classes/LinkSecret.md)): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:271](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L271)

LinkSecret *

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `linkSecret` | [`LinkSecret`](../namespaces/Domain/classes/LinkSecret.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storeLinkSecret`](../namespaces/Domain/interfaces/Pluto.md#storelinksecret)

***

### storeMediator() {#storemediator}

> **storeMediator**(`mediator`: [`Mediator`](../namespaces/Domain/interfaces/Mediator.md)): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:524](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L524)

Store a mediator information.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mediator` | [`Mediator`](../namespaces/Domain/interfaces/Mediator.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storeMediator`](../namespaces/Domain/interfaces/Pluto.md#storemediator)

***

### storeMessage() {#storemessage}

> **storeMessage**(`message`: [`Message`](../namespaces/Domain/classes/Message.md)): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:403](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L403)

Messages *

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](../namespaces/Domain/classes/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storeMessage`](../namespaces/Domain/interfaces/Pluto.md#storemessage)

***

### storeMessages() {#storemessages}

> **storeMessages**(`messages`: [`Message`](../namespaces/Domain/classes/Message.md)[]): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:407](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L407)

Store an array of DIDComm messages

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `messages` | [`Message`](../namespaces/Domain/classes/Message.md)[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storeMessages`](../namespaces/Domain/interfaces/Pluto.md#storemessages)

***

### storePeerDID() {#storepeerdid}

> **storePeerDID**(`did`: [`DID`](../namespaces/Domain/classes/DID.md), `privateKeys`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)[]): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:351](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L351)

Peer DIDs *

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `privateKeys` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)[] |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storePeerDID`](../namespaces/Domain/interfaces/Pluto.md#storepeerdid)

***

### storePrismDID() {#storeprismdid}

> **storePrismDID**(`did`: [`DID`](../namespaces/Domain/classes/DID.md), `privateKey`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md), `alias?`: `string`): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:310](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L310)

Prism DIDs *

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `privateKey` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) |
| `alias?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storePrismDID`](../namespaces/Domain/interfaces/Pluto.md#storeprismdid)

***

### storePrivateKey() {#storeprivatekey}

> **storePrivateKey**(`privateKey`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:282](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L282)

PrivateKeys *

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `privateKey` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storePrivateKey`](../namespaces/Domain/interfaces/Pluto.md#storeprivatekey)
