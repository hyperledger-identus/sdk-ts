[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / BackupManager

# Class: BackupManager

Defined in: [src/pluto/backup/BackupManager.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/backup/BackupManager.ts#L13)

BackupManager
handle the different versions of backup and restore

## Constructors

### Constructor

> **new BackupManager**(`Pluto`: [`Pluto`](Pluto.md), `Repositories`: \{ `CredentialMetadata`: [`CredentialMetadataRepository`](CredentialMetadataRepository.md); `Credentials`: [`CredentialRepository`](CredentialRepository.md); `DIDKeyLinks`: [`DIDKeyLinkRepository`](DIDKeyLinkRepository.md); `DIDLinks`: [`DIDLinkRepository`](DIDLinkRepository.md); `DIDs`: [`DIDRepository`](DIDRepository.md); `Keys`: [`KeyRepository`](KeyRepository.md); `LinkSecrets`: [`LinkSecretRepository`](LinkSecretRepository.md); `Messages`: [`MessageRepository`](MessageRepository.md); \}): `BackupManager`

Defined in: [src/pluto/backup/BackupManager.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/backup/BackupManager.ts#L14)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `Pluto` | [`Pluto`](Pluto.md) |
| `Repositories` | \{ `CredentialMetadata`: [`CredentialMetadataRepository`](CredentialMetadataRepository.md); `Credentials`: [`CredentialRepository`](CredentialRepository.md); `DIDKeyLinks`: [`DIDKeyLinkRepository`](DIDKeyLinkRepository.md); `DIDLinks`: [`DIDLinkRepository`](DIDLinkRepository.md); `DIDs`: [`DIDRepository`](DIDRepository.md); `Keys`: [`KeyRepository`](KeyRepository.md); `LinkSecrets`: [`LinkSecretRepository`](LinkSecretRepository.md); `Messages`: [`MessageRepository`](MessageRepository.md); \} |
| `Repositories.CredentialMetadata` | [`CredentialMetadataRepository`](CredentialMetadataRepository.md) |
| `Repositories.Credentials` | [`CredentialRepository`](CredentialRepository.md) |
| `Repositories.DIDKeyLinks` | [`DIDKeyLinkRepository`](DIDKeyLinkRepository.md) |
| `Repositories.DIDLinks` | [`DIDLinkRepository`](DIDLinkRepository.md) |
| `Repositories.DIDs` | [`DIDRepository`](DIDRepository.md) |
| `Repositories.Keys` | [`KeyRepository`](KeyRepository.md) |
| `Repositories.LinkSecrets` | [`LinkSecretRepository`](LinkSecretRepository.md) |
| `Repositories.Messages` | [`MessageRepository`](MessageRepository.md) |

#### Returns

`BackupManager`

## Methods

### backup() {#backup}

> **backup**(`version?`: `"0.0.1"`): `Promise`\<\{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}\>

Defined in: [src/pluto/backup/BackupManager.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/backup/BackupManager.ts#L25)

convert stored data to JSON

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `version?` | `"0.0.1"` | backup schema version |

#### Returns

`Promise`\<\{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}\>

***

### restore() {#restore}

> **restore**(`backup`: \{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}): `Promise`\<`void`\>

Defined in: [src/pluto/backup/BackupManager.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/backup/BackupManager.ts#L35)

convert JSON to stored data

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
