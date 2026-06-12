[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / AgentBackup

# Class: AgentBackup

Defined in: [packages/lib/sdk/src/edge-agent/Agent.Backup.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.Backup.ts#L12)

## Constructors

### Constructor

> **new AgentBackup**(`Agent`: [`Agent`](Agent.md)): `AgentBackup`

Defined in: [packages/lib/sdk/src/edge-agent/Agent.Backup.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.Backup.ts#L13)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `Agent` | [`Agent`](Agent.md) |

#### Returns

`AgentBackup`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-agent"></a> `Agent` | `readonly` | [`Agent`](Agent.md) | [packages/lib/sdk/src/edge-agent/Agent.Backup.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.Backup.ts#L14) |

## Methods

### createJWE() {#createjwe}

> **createJWE**(`options?`: [`BackupOptions`](../type-aliases/BackupOptions.md)): `Promise`\<`string`\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.Backup.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.Backup.ts#L33)

Creates a JWE (JSON Web Encryption) containing the backup data stored in Pluto.
The data can optionally be encrypted using a custom master key, compressed, 
and filtered to exclude specified fields.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`BackupOptions`](../type-aliases/BackupOptions.md) | Optional settings for the backup. |

#### Returns

`Promise`\<`string`\>

- A promise that resolves to the JWE string.

#### See

restore - Method to restore data from a JWE string.

***

### restore() {#restore}

> **restore**(`jwe`: `string`, `options?`: [`BackupOptions`](../type-aliases/BackupOptions.md)): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/edge-agent/Agent.Backup.ts:67](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Agent.Backup.ts#L67)

Decodes a JWE (JSON Web Encryption) string and restores the backup data to the store.
If the JWE is compressed (Base64-encoded), it will attempt to decompress it first.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `jwe` | `string` | The JWE string containing the encrypted backup data. |
| `options?` | [`BackupOptions`](../type-aliases/BackupOptions.md) | Optional settings for the backup. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves when the data is successfully restored.

#### See

createJWE - Method to create a JWE from the stored backup data.
