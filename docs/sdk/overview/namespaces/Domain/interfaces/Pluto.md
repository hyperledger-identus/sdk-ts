[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Pluto

# Interface: Pluto

Defined in: [src/domain/buildingBlocks/Pluto.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L13)

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

## Extends

- [`IController`](../namespaces/Startable/interfaces/IController.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="state"></a> `state` | [`State`](../namespaces/Startable/enumerations/State.md) | current status of the entity | [`IController`](../namespaces/Startable/interfaces/IController.md).[`state`](../namespaces/Startable/interfaces/IController.md#state) | [src/domain/protocols/Startable.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L22) |

## Methods

### backup() {#backup}

> **backup**(`version?`: `"0.0.1"`): `Promise`\<\{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:40](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L40)

create a Backup object from the stored data

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `version?` | `"0.0.1"` |

#### Returns

`Promise`\<\{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}\>

***

### deleteMessage() {#deletemessage}

> **deleteMessage**(`uuid`: `string`): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:175](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L175)

Delete a previously stored messages

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `uuid` | `string` |

#### Returns

`Promise`\<`void`\>

***

### getAllCredentials() {#getallcredentials}

> **getAllCredentials**(): `Promise`\<[`Credential`](../classes/Credential.md)[]\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:155](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L155)

Retrieve all the stored credentials

#### Returns

`Promise`\<[`Credential`](../classes/Credential.md)[]\>

***

### getAllDidPairs() {#getalldidpairs}

> **getAllDidPairs**(): `Promise`\<[`DIDPair`](../classes/DIDPair.md)[]\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:125](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L125)

Retrieve all stored DID pairs (DIDComm connections).

#### Returns

`Promise`\<[`DIDPair`](../classes/DIDPair.md)[]\>

***

### getAllMediators() {#getallmediators}

> **getAllMediators**(): `Promise`\<[`Mediator`](Mediator.md)[]\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:150](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L150)

Retrieve all stored mediators.

#### Returns

`Promise`\<[`Mediator`](Mediator.md)[]\>

***

### getAllMessages() {#getallmessages}

> **getAllMessages**(): `Promise`\<[`Message`](../classes/Message.md)[]\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:140](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L140)

Retrieve all stored DIDComm messages.

#### Returns

`Promise`\<[`Message`](../classes/Message.md)[]\>

***

### getAllPeerDIDs() {#getallpeerdids}

> **getAllPeerDIDs**(): `Promise`\<[`PeerDID`](../../../classes/PeerDID.md)[]\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:115](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L115)

Retrieve all stored Peer DIDs.

#### Returns

`Promise`\<[`PeerDID`](../../../classes/PeerDID.md)[]\>

***

### getAllPrismDIDs() {#getallprismdids}

> **getAllPrismDIDs**(): `Promise`\<[`PrismDID`](../classes/PrismDID.md)[]\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:110](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L110)

Retrieve all stored PRISM DIDs.

#### Returns

`Promise`\<[`PrismDID`](../classes/PrismDID.md)[]\>

***

### getCredentialMetadata() {#getcredentialmetadata}

> **getCredentialMetadata**(`name`: `string`): `Promise`\<[`CredentialMetadata`](../classes/CredentialMetadata.md) \| `null`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:57](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L57)

Fetch the Credential Metadata by its name

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` |  |

#### Returns

`Promise`\<[`CredentialMetadata`](../classes/CredentialMetadata.md) \| `null`\>

***

### getDIDPrivateKeysByDID() {#getdidprivatekeysbydid}

> **getDIDPrivateKeysByDID**(`did`: [`DID`](../classes/DID.md)): `Promise`\<[`PrivateKey`](../classes/PrivateKey.md)[]\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:120](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L120)

Retrieve available private keys for a given DID.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../classes/DID.md) |

#### Returns

`Promise`\<[`PrivateKey`](../classes/PrivateKey.md)[]\>

***

### getLinkSecret() {#getlinksecret}

> **getLinkSecret**(`name?`: `string`): `Promise`\<[`LinkSecret`](../classes/LinkSecret.md) \| `null`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:160](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L160)

Retrieve the stored link secret by its name

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name?` | `string` |

#### Returns

`Promise`\<[`LinkSecret`](../classes/LinkSecret.md) \| `null`\>

***

### getMessage() {#getmessage}

> **getMessage**(`id`: `string`): `Promise`\<[`Message`](../classes/Message.md) \| `null`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:145](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L145)

Retrieve a DIDComm message by ID.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Message`](../classes/Message.md) \| `null`\>

***

### getPairByDID() {#getpairbydid}

> **getPairByDID**(`did`: [`DID`](../classes/DID.md)): `Promise`\<[`DIDPair`](../classes/DIDPair.md) \| `null`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:130](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L130)

Retrieve a DID pair containing a given DID as either host or receiver.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../classes/DID.md) |

#### Returns

`Promise`\<[`DIDPair`](../classes/DIDPair.md) \| `null`\>

***

### getPairByName() {#getpairbyname}

> **getPairByName**(`name`: `string`): `Promise`\<[`DIDPair`](../classes/DIDPair.md) \| `null`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:135](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L135)

Retrieve a DID pair by a given pair name.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`Promise`\<[`DIDPair`](../classes/DIDPair.md) \| `null`\>

***

### restore() {#restore}

> **restore**(`backup`: \{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:46](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L46)

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

***

### revokeCredential() {#revokecredential}

> **revokeCredential**(`credential`: [`Credential`](../classes/Credential.md)): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:170](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L170)

Revoke a Credential

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `credential` | [`Credential`](../classes/Credential.md) |

#### Returns

`Promise`\<`void`\>

***

### start() {#start}

> **start**(): `Promise`\<[`State`](../namespaces/Startable/enumerations/State.md)\>

Defined in: [src/domain/protocols/Startable.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L30)

handle the startup of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../namespaces/Startable/enumerations/State.md)\>

#### Inherited from

[`IController`](../namespaces/Startable/interfaces/IController.md).[`start`](../namespaces/Startable/interfaces/IController.md#start)

***

### stop() {#stop}

> **stop**(): `Promise`\<[`State`](../namespaces/Startable/enumerations/State.md)\>

Defined in: [src/domain/protocols/Startable.ts:38](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/protocols/Startable.ts#L38)

handle the teardown of an entity

updates `state` according to lifecycle

#### Returns

`Promise`\<[`State`](../namespaces/Startable/enumerations/State.md)\>

#### Inherited from

[`IController`](../namespaces/Startable/interfaces/IController.md).[`stop`](../namespaces/Startable/interfaces/IController.md#stop)

***

### storeCredential() {#storecredential}

> **storeCredential**(`credential`: [`Credential`](../classes/Credential.md)): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:105](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L105)

Store a Credential into the Database

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `credential` | [`Credential`](../classes/Credential.md) |

#### Returns

`Promise`\<`void`\>

***

### storeCredentialMetadata() {#storecredentialmetadata}

> **storeCredentialMetadata**(`metadata`: [`CredentialMetadata`](../classes/CredentialMetadata.md)): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:51](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L51)

Store the Credential Metadata

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `metadata` | [`CredentialMetadata`](../classes/CredentialMetadata.md) |

#### Returns

`Promise`\<`void`\>

***

### storeDID() {#storedid}

> **storeDID**(`did`: [`DID`](../classes/DID.md), `keys?`: [`Arrayable`](../../Utils/type-aliases/Arrayable.md)\<[`PrivateKey`](../classes/PrivateKey.md)\>, `alias?`: `string`): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:63](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L63)

Store a DID
with optional private key(s) and alias

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../classes/DID.md) |
| `keys?` | [`Arrayable`](../../Utils/type-aliases/Arrayable.md)\<[`PrivateKey`](../classes/PrivateKey.md)\> |
| `alias?` | `string` |

#### Returns

`Promise`\<`void`\>

***

### storeDIDPair() {#storedidpair}

> **storeDIDPair**(`host`: [`DID`](../classes/DID.md), `receiver`: [`DID`](../classes/DID.md), `name`: `string`): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:80](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L80)

Store a named pair of DIDs representing a DIDComm connection.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `host` | [`DID`](../classes/DID.md) |
| `receiver` | [`DID`](../classes/DID.md) |
| `name` | `string` |

#### Returns

`Promise`\<`void`\>

***

### storeLinkSecret() {#storelinksecret}

> **storeLinkSecret**(`linkSecret`: [`LinkSecret`](../classes/LinkSecret.md)): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:165](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L165)

Store a new linkSecret

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `linkSecret` | [`LinkSecret`](../classes/LinkSecret.md) |

#### Returns

`Promise`\<`void`\>

***

### storeMediator() {#storemediator}

> **storeMediator**(`mediator`: [`Mediator`](Mediator.md)): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:100](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L100)

Store a mediator information.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mediator` | [`Mediator`](Mediator.md) |

#### Returns

`Promise`\<`void`\>

***

### storeMessage() {#storemessage}

> **storeMessage**(`message`: [`Message`](../classes/Message.md)): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:85](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L85)

Store a DIDComm message.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](../classes/Message.md) |

#### Returns

`Promise`\<`void`\>

***

### storeMessages() {#storemessages}

> **storeMessages**(`messages`: [`Message`](../classes/Message.md)[]): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:90](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L90)

Store an array of DIDComm messages

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `messages` | [`Message`](../classes/Message.md)[] |

#### Returns

`Promise`\<`void`\>

***

### ~~storePeerDID()~~ {#storepeerdid}

> **storePeerDID**(`did`: [`DID`](../classes/DID.md), `privateKeys`: [`PrivateKey`](../classes/PrivateKey.md)[]): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:75](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L75)

Store a Peer DID and an array of its privateKeys.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../classes/DID.md) |
| `privateKeys` | [`PrivateKey`](../classes/PrivateKey.md)[] |

#### Returns

`Promise`\<`void`\>

#### Deprecated

use storeDID instead

***

### ~~storePrismDID()~~ {#storeprismdid}

> **storePrismDID**(`did`: [`DID`](../classes/DID.md), `privateKey`: [`PrivateKey`](../classes/PrivateKey.md), `alias?`: `string`): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:69](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L69)

Store a PRISM DID and its private key with given metadata.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../classes/DID.md) |
| `privateKey` | [`PrivateKey`](../classes/PrivateKey.md) |
| `alias?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Deprecated

use storeDID instead

***

### storePrivateKey() {#storeprivatekey}

> **storePrivateKey**(`privateKey`: [`PrivateKey`](../classes/PrivateKey.md)): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:95](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L95)

Store a list of private keys with its metadata and a reference to the DID it belongs to.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `privateKey` | [`PrivateKey`](../classes/PrivateKey.md) |

#### Returns

`Promise`\<`void`\>
