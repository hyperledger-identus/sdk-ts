[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Pluto

# Class: Pluto

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:48](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L48)

Orchestration layer for SDK persistence.

`Pluto` translates between Domain classes (e.g. `Domain.DID`,
`Domain.Credential`) and the underlying [Pluto.Store](../namespaces/Pluto/interfaces/Store.md),
managing relationships and business logic.

**Preferred instantiation** is via the static [Pluto.create](#create) factory.

## Example

```ts
const pluto = await Pluto.create({
  dbName: "my-wallet",
  keyRestoration: apollo,
});
```

## Extends

- [`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md)

## Implements

- [`Pluto`](../namespaces/Domain/interfaces/Pluto.md)

## Constructors

### Constructor

> **new Pluto**(`store`: [`Store`](../namespaces/Pluto/interfaces/Store.md), `keyRestoration`: [`KeyRestoration`](../namespaces/Domain/interfaces/KeyRestoration.md)): `Pluto`

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:285](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L285)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `store` | [`Store`](../namespaces/Pluto/interfaces/Store.md) | - |
| `keyRestoration` | [`KeyRestoration`](../namespaces/Domain/interfaces/KeyRestoration.md) | - |

#### Returns

`Pluto`

#### Deprecated

Use Pluto.create() instead

#### Overrides

[`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md).[`constructor`](../namespaces/Domain/namespaces/Startable/classes/Controller.md#constructor)

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="property-backupmgr"></a> `BackupMgr` | `public` | [`BackupManager`](BackupManager.md) | Manager for wallet backup and restore operations. | - | [packages/lib/sdk/src/pluto/Pluto.ts:231](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L231) |
| <a id="property-state"></a> `state` | `public` | [`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md) | current status of the entity | [`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`state`](../namespaces/Domain/interfaces/Pluto.md#property-state) [`Controller`](../namespaces/Domain/namespaces/Startable/classes/Controller.md).[`state`](../namespaces/Domain/namespaces/Startable/classes/Controller.md#property-state) | packages/shared/domain/build/index.d.ts:2330 |
| <a id="property-store"></a> `store` | `readonly` | [`Store`](../namespaces/Pluto/interfaces/Store.md) | - | - | [packages/lib/sdk/src/pluto/Pluto.ts:286](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L286) |

## Methods

### backup() {#backup}

> **backup**(`version?`: `"0.0.1"`): `Promise`\<\{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:316](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L316)

Create a full backup of the wallet.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `version?` | `"0.0.1"` | Optional backup format version. |

#### Returns

`Promise`\<\{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}\>

Serialised backup payload.

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`backup`](../namespaces/Domain/interfaces/Pluto.md#backup)

***

### deleteMessage() {#deletemessage}

> **deleteMessage**(`id`: `string`): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:334](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L334)

Delete a message by its identifier.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The message `id` (not the `uuid`). |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`deleteMessage`](../namespaces/Domain/interfaces/Pluto.md#deletemessage)

***

### getAllCredentials() {#getallcredentials}

> **getAllCredentials**(): `Promise`\<[`Credential`](../namespaces/Domain/classes/Credential.md)[]\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:356](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L356)

Retrieve all stored credentials.

#### Returns

`Promise`\<[`Credential`](../namespaces/Domain/classes/Credential.md)[]\>

Array of [Domain.Credential](../namespaces/Domain/classes/Credential.md) instances.

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getAllCredentials`](../namespaces/Domain/interfaces/Pluto.md#getallcredentials)

***

### getAllDidPairs() {#getalldidpairs}

> **getAllDidPairs**(): `Promise`\<[`DIDPair`](../namespaces/Domain/classes/DIDPair.md)[]\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:655](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L655)

Retrieve all stored DID pairs.

#### Returns

`Promise`\<[`DIDPair`](../namespaces/Domain/classes/DIDPair.md)[]\>

Array of [Domain.DIDPair](../namespaces/Domain/classes/DIDPair.md) instances.

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getAllDidPairs`](../namespaces/Domain/interfaces/Pluto.md#getalldidpairs)

***

### getAllMediators() {#getallmediators}

> **getAllMediators**(): `Promise`\<[`Mediator`](../namespaces/Domain/interfaces/Mediator.md)[]\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:726](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L726)

Retrieve all stored mediator configurations.

Each mediator consists of a host DID, a mediator DID, and a routing DID.

#### Returns

`Promise`\<[`Mediator`](../namespaces/Domain/interfaces/Mediator.md)[]\>

Array of [Domain.Mediator](../namespaces/Domain/interfaces/Mediator.md) objects.

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getAllMediators`](../namespaces/Domain/interfaces/Pluto.md#getallmediators)

***

### getAllMessages() {#getallmessages}

> **getAllMessages**(): `Promise`\<[`Message`](../namespaces/Domain/classes/Message.md)[]\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:625](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L625)

Retrieve all stored messages.

#### Returns

`Promise`\<[`Message`](../namespaces/Domain/classes/Message.md)[]\>

Array of [Domain.Message](../namespaces/Domain/classes/Message.md) instances.

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getAllMessages`](../namespaces/Domain/interfaces/Pluto.md#getallmessages)

***

### getAllPeerDIDs() {#getallpeerdids}

> **getAllPeerDIDs**(): `Promise`\<[`PeerDID`](PeerDID.md)[]\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:550](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L550)

Retrieve all stored Peer DIDs with their key material.

#### Returns

`Promise`\<[`PeerDID`](PeerDID.md)[]\>

Array of [PeerDID](PeerDID.md) instances.

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getAllPeerDIDs`](../namespaces/Domain/interfaces/Pluto.md#getallpeerdids)

***

### getAllPrismDIDs() {#getallprismdids}

> **getAllPrismDIDs**(): `Promise`\<[`PrismDID`](../namespaces/Domain/classes/PrismDID.md)[]\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:485](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L485)

Retrieve all stored Prism DIDs with their keys.

#### Returns

`Promise`\<[`PrismDID`](../namespaces/Domain/classes/PrismDID.md)[]\>

Array of [Domain.PrismDID](../namespaces/Domain/classes/PrismDID.md) instances.

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getAllPrismDIDs`](../namespaces/Domain/interfaces/Pluto.md#getallprismdids)

***

### getCredentialMetadata() {#getcredentialmetadata}

> **getCredentialMetadata**(`name`: `string`): `Promise`\<[`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md) \| `null`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:391](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L391)

Retrieve credential metadata by name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The metadata name/key. |

#### Returns

`Promise`\<[`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md) \| `null`\>

The matching metadata or `null`.

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getCredentialMetadata`](../namespaces/Domain/interfaces/Pluto.md#getcredentialmetadata)

***

### getDIDByDIDOrAlias() {#getdidbydidoralias}

> **getDIDByDIDOrAlias**(`didOrAlias`: `string`): `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md) \| `null`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:513](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L513)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `didOrAlias` | `string` |

#### Returns

`Promise`\<[`DID`](../namespaces/Domain/classes/DID.md) \| `null`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getDIDByDIDOrAlias`](../namespaces/Domain/interfaces/Pluto.md#getdidbydidoralias)

***

### getDIDPrivateKeysByDID() {#getdidprivatekeysbydid}

> **getDIDPrivateKeysByDID**(`did`: [`DID`](../namespaces/Domain/classes/DID.md)): `Promise`\<[`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)[]\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:432](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L432)

Get all private keys linked to a DID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) | The DID whose keys should be retrieved. |

#### Returns

`Promise`\<[`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)[]\>

Array of [Domain.PrivateKey](../namespaces/Domain/classes/PrivateKey.md) instances.

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getDIDPrivateKeysByDID`](../namespaces/Domain/interfaces/Pluto.md#getdidprivatekeysbydid)

***

### getLinkSecret() {#getlinksecret}

> **getLinkSecret**(`name?`: `string`): `Promise`\<[`LinkSecret`](../namespaces/Domain/classes/LinkSecret.md) \| `null`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:411](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L411)

Retrieve a link secret by name.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `name` | `string` | `Domain.LinkSecret.defaultName` | Defaults to [Domain.LinkSecret.defaultName](../namespaces/Domain/classes/LinkSecret.md#property-defaultname). |

#### Returns

`Promise`\<[`LinkSecret`](../namespaces/Domain/classes/LinkSecret.md) \| `null`\>

The matching link secret or `null`.

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getLinkSecret`](../namespaces/Domain/interfaces/Pluto.md#getlinksecret)

***

### getMessage() {#getmessage}

> **getMessage**(`id`: `string`): `Promise`\<[`Message`](../namespaces/Domain/classes/Message.md) \| `null`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:617](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L617)

Retrieve a single message by its protocol-level id.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The message `id`. |

#### Returns

`Promise`\<[`Message`](../namespaces/Domain/classes/Message.md) \| `null`\>

The matching [Domain.Message](../namespaces/Domain/classes/Message.md) or `null`.

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getMessage`](../namespaces/Domain/interfaces/Pluto.md#getmessage)

***

### getPairByDID() {#getpairbydid}

> **getPairByDID**(`did`: [`DID`](../namespaces/Domain/classes/DID.md)): `Promise`\<[`DIDPair`](../namespaces/Domain/classes/DIDPair.md) \| `null`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:669](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L669)

Find the DID pair that includes the given DID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) | Either side of the pair. |

#### Returns

`Promise`\<[`DIDPair`](../namespaces/Domain/classes/DIDPair.md) \| `null`\>

The matching [Domain.DIDPair](../namespaces/Domain/classes/DIDPair.md) or `null`.

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getPairByDID`](../namespaces/Domain/interfaces/Pluto.md#getpairbydid)

***

### getPairByName() {#getpairbyname}

> **getPairByName**(`alias`: `string`): `Promise`\<[`DIDPair`](../namespaces/Domain/classes/DIDPair.md) \| `null`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:692](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L692)

Find a DID pair by its alias.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `alias` | `string` | The pair alias. |

#### Returns

`Promise`\<[`DIDPair`](../namespaces/Domain/classes/DIDPair.md) \| `null`\>

The matching [Domain.DIDPair](../namespaces/Domain/classes/DIDPair.md) or `null`.

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`getPairByName`](../namespaces/Domain/interfaces/Pluto.md#getpairbyname)

***

### restore() {#restore}

> **restore**(`backup`: \{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:325](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L325)

Restore wallet data from a backup.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `backup` | \{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \} | A backup payload previously created by [backup](#backup). |
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

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:366](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L366)

Mark a credential as revoked.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `credential` | [`Credential`](../namespaces/Domain/classes/Credential.md) | The credential to revoke. Must be storable. |

#### Returns

`Promise`\<`void`\>

#### Throws

Error if the credential is null or not storable.

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`revokeCredential`](../namespaces/Domain/interfaces/Pluto.md#revokecredential)

***

### start() {#start}

> **start**(): `Promise`\<[`State`](../namespaces/Domain/namespaces/Startable/enumerations/State.md)\>

Defined in: packages/shared/domain/build/index.d.ts:2347

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

Defined in: packages/shared/domain/build/index.d.ts:2348

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

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:348](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L348)

Persist a credential.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `credential` | [`Credential`](../namespaces/Domain/classes/Credential.md) | The [Domain.Credential](../namespaces/Domain/classes/Credential.md) to store. |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storeCredential`](../namespaces/Domain/interfaces/Pluto.md#storecredential)

***

### storeCredentialMetadata() {#storecredentialmetadata}

> **storeCredentialMetadata**(`metadata`: [`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md)): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:382](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L382)

Persist credential metadata (e.g. schema information).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `metadata` | [`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md) | The [Domain.CredentialMetadata](../namespaces/Domain/classes/CredentialMetadata.md) to store. |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storeCredentialMetadata`](../namespaces/Domain/interfaces/Pluto.md#storecredentialmetadata)

***

### storeDID() {#storedid}

> **storeDID**(`did`: [`DID`](../namespaces/Domain/classes/DID.md), `keys?`: [`Arrayable`](../type-aliases/Arrayable.md)\<[`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)\>, `alias?`: `string`): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:449](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L449)

Store a DID with optional associated keys and alias.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) | The [Domain.DID](../namespaces/Domain/classes/DID.md) to persist. |
| `keys?` | [`Arrayable`](../type-aliases/Arrayable.md)\<[`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)\> | Optional private key(s) to link to the DID. |
| `alias?` | `string` | Optional human-readable name. |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storeDID`](../namespaces/Domain/interfaces/Pluto.md#storedid)

***

### storeDIDPair() {#storedidpair}

> **storeDIDPair**(`host`: [`DID`](../namespaces/Domain/classes/DID.md), `receiver`: [`DID`](../namespaces/Domain/classes/DID.md), `alias`: `string`): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:639](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L639)

Store a DID pair relationship.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `host` | [`DID`](../namespaces/Domain/classes/DID.md) | The local/host DID. |
| `receiver` | [`DID`](../namespaces/Domain/classes/DID.md) | The remote/target DID. |
| `alias` | `string` | Human-readable name for this pair. |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storeDIDPair`](../namespaces/Domain/interfaces/Pluto.md#storedidpair)

***

### storeLinkSecret() {#storelinksecret}

> **storeLinkSecret**(`linkSecret`: [`LinkSecret`](../namespaces/Domain/classes/LinkSecret.md)): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:402](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L402)

Persist an AnonCreds link secret.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `linkSecret` | [`LinkSecret`](../namespaces/Domain/classes/LinkSecret.md) | The [Domain.LinkSecret](../namespaces/Domain/classes/LinkSecret.md) to store. |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storeLinkSecret`](../namespaces/Domain/interfaces/Pluto.md#storelinksecret)

***

### storeMediator() {#storemediator}

> **storeMediator**(`mediator`: [`Mediator`](../namespaces/Domain/interfaces/Mediator.md)): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:770](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L770)

Persist a mediator configuration.

Stores the three DIDs involved (host, mediator, routing) and
creates the internal DID-link relationships.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mediator` | [`Mediator`](../namespaces/Domain/interfaces/Mediator.md) | The [Domain.Mediator](../namespaces/Domain/interfaces/Mediator.md) to store. |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storeMediator`](../namespaces/Domain/interfaces/Pluto.md#storemediator)

***

### storeMessage() {#storemessage}

> **storeMessage**(`message`: [`Message`](../namespaces/Domain/classes/Message.md)): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:598](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L598)

Persist a single DIDComm message.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`Message`](../namespaces/Domain/classes/Message.md) | The [Domain.Message](../namespaces/Domain/classes/Message.md) to store. |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storeMessage`](../namespaces/Domain/interfaces/Pluto.md#storemessage)

***

### storeMessages() {#storemessages}

> **storeMessages**(`messages`: [`Message`](../namespaces/Domain/classes/Message.md)[]): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:606](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L606)

Persist multiple DIDComm messages.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `messages` | [`Message`](../namespaces/Domain/classes/Message.md)[] | The messages to store. |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storeMessages`](../namespaces/Domain/interfaces/Pluto.md#storemessages)

***

### storePeerDID() {#storepeerdid}

> **storePeerDID**(`did`: [`DID`](../namespaces/Domain/classes/DID.md), `privateKeys`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)[]): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:538](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L538)

Store a Peer DID and its associated private keys.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) | The Peer [Domain.DID](../namespaces/Domain/classes/DID.md). |
| `privateKeys` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)[] | The keys that constitute the Peer DID. |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storePeerDID`](../namespaces/Domain/interfaces/Pluto.md#storepeerdid)

***

### storePrismDID() {#storeprismdid}

> **storePrismDID**(`did`: [`DID`](../namespaces/Domain/classes/DID.md), `privateKey`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md), `alias?`: `string`): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:470](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L470)

Store a Prism DID and its associated private key.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) | The Prism [Domain.DID](../namespaces/Domain/classes/DID.md). |
| `privateKey` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) | The key used to control the DID. |
| `alias?` | `string` | Optional human-readable name. |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storePrismDID`](../namespaces/Domain/interfaces/Pluto.md#storeprismdid)

***

### storePrivateKey() {#storeprivatekey}

> **storePrivateKey**(`privateKey`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:422](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L422)

Persist a private key.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `privateKey` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) | The [Domain.PrivateKey](../namespaces/Domain/classes/PrivateKey.md) to store. |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Pluto`](../namespaces/Domain/interfaces/Pluto.md).[`storePrivateKey`](../namespaces/Domain/interfaces/Pluto.md#storeprivatekey)

***

### create() {#create}

> `static` **create**(`options`: [`CreateOptions`](../type-aliases/CreateOptions.md)): `Promise`\<`Pluto`\>

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:267](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/Pluto.ts#L267)

Create and start a new Pluto instance.

When a `dbName` is provided (instead of a pre-built `store`), the
default RIDB-backed store is created automatically.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`CreateOptions`](../type-aliases/CreateOptions.md) | See [CreateOptions](../type-aliases/CreateOptions.md). |

#### Returns

`Promise`\<`Pluto`\>

A started Pluto instance ready for use.

#### Examples

Using the default store
```ts
const pluto = await Pluto.create({
  dbName: "identus-wallet",
  keyRestoration: apollo,
});
```

Using a custom store
```ts
const pluto = await Pluto.create({
  store: myCustomStore,
  keyRestoration: apollo,
});
```
