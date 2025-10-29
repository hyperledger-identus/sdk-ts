[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / AgentBackup

# Class: AgentBackup

Defined in: [src/edge-agent/Agent.Backup.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.Backup.ts#L24)

## Constructors

### Constructor

> **new AgentBackup**(`Agent`: [`BackupAgent`](../type-aliases/BackupAgent.md)): `AgentBackup`

Defined in: [src/edge-agent/Agent.Backup.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.Backup.ts#L27)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `Agent` | [`BackupAgent`](../type-aliases/BackupAgent.md) |

#### Returns

`AgentBackup`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="agent"></a> `Agent` | `readonly` | [`BackupAgent`](../type-aliases/BackupAgent.md) | [src/edge-agent/Agent.Backup.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.Backup.ts#L28) |

## Methods

### createJWE() {#createjwe}

> **createJWE**(`options?`: [`BackupOptions`](../type-aliases/BackupOptions.md)): `Promise`\<`string`\>

Defined in: [src/edge-agent/Agent.Backup.ts:47](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.Backup.ts#L47)

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

Defined in: [src/edge-agent/Agent.Backup.ts:81](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Agent.Backup.ts#L81)

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
