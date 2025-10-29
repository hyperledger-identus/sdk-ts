[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / makeCollections

# Function: makeCollections()

> **makeCollections**(`additional`: [`CollectionList`](../type-aliases/CollectionList.md)): \{ `credential-metadata`: \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md)\>; \}; `credentials`: \{ `migrationStrategies`: [`MigrationStrategies`](../type-aliases/MigrationStrategies.md); `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`Credential`](../interfaces/Credential.md)\>; \}; `did-link`: \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`DIDLink`](../interfaces/DIDLink.md)\>; \}; `didkey-link`: \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`DIDKeyLink`](../interfaces/DIDKeyLink.md)\>; \}; `dids`: \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`DID`](../interfaces/DID.md)\>; \}; `keys`: \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`Key`](../interfaces/Key.md)\>; \}; `messages`: \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`Message`](../interfaces/Message.md)\>; \}; \}

Defined in: [src/pluto/collections/index.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/collections/index.ts#L14)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `additional` | [`CollectionList`](../type-aliases/CollectionList.md) |

## Returns

\{ `credential-metadata`: \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md)\>; \}; `credentials`: \{ `migrationStrategies`: [`MigrationStrategies`](../type-aliases/MigrationStrategies.md); `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`Credential`](../interfaces/Credential.md)\>; \}; `did-link`: \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`DIDLink`](../interfaces/DIDLink.md)\>; \}; `didkey-link`: \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`DIDKeyLink`](../interfaces/DIDKeyLink.md)\>; \}; `dids`: \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`DID`](../interfaces/DID.md)\>; \}; `keys`: \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`Key`](../interfaces/Key.md)\>; \}; `messages`: \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`Message`](../interfaces/Message.md)\>; \}; \}

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `credential-metadata` | \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md)\>; \} | - | [src/pluto/collections/index.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/collections/index.ts#L19) |
| `credential-metadata.schema` | [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md)\> | `Models.CredentialMetadataSchema` | [src/pluto/collections/index.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/collections/index.ts#L19) |
| `credentials` | \{ `migrationStrategies`: [`MigrationStrategies`](../type-aliases/MigrationStrategies.md); `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`Credential`](../interfaces/Credential.md)\>; \} | - | [src/pluto/collections/index.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/collections/index.ts#L18) |
| `credentials.migrationStrategies` | [`MigrationStrategies`](../type-aliases/MigrationStrategies.md) | `Models.CredentialMigration` | [src/pluto/collections/index.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/collections/index.ts#L18) |
| `credentials.schema` | [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`Credential`](../interfaces/Credential.md)\> | `Models.CredentialSchema` | [src/pluto/collections/index.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/collections/index.ts#L18) |
| `did-link` | \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`DIDLink`](../interfaces/DIDLink.md)\>; \} | - | [src/pluto/collections/index.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/collections/index.ts#L21) |
| `did-link.schema` | [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`DIDLink`](../interfaces/DIDLink.md)\> | `Models.DIDLinkSchema` | [src/pluto/collections/index.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/collections/index.ts#L21) |
| `didkey-link` | \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`DIDKeyLink`](../interfaces/DIDKeyLink.md)\>; \} | - | [src/pluto/collections/index.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/collections/index.ts#L20) |
| `didkey-link.schema` | [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`DIDKeyLink`](../interfaces/DIDKeyLink.md)\> | `Models.DIDKeyLinkSchema` | [src/pluto/collections/index.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/collections/index.ts#L20) |
| `dids` | \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`DID`](../interfaces/DID.md)\>; \} | - | [src/pluto/collections/index.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/collections/index.ts#L22) |
| `dids.schema` | [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`DID`](../interfaces/DID.md)\> | `Models.DIDSchema` | [src/pluto/collections/index.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/collections/index.ts#L22) |
| `keys` | \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`Key`](../interfaces/Key.md)\>; \} | - | [src/pluto/collections/index.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/collections/index.ts#L23) |
| `keys.schema` | [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`Key`](../interfaces/Key.md)\> | `Models.KeySchema` | [src/pluto/collections/index.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/collections/index.ts#L23) |
| `messages` | \{ `schema`: [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`Message`](../interfaces/Message.md)\>; \} | - | [src/pluto/collections/index.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/collections/index.ts#L24) |
| `messages.schema` | [`TypedSchema`](../type-aliases/TypedSchema.md)\<[`Message`](../interfaces/Message.md)\> | `Models.MessageSchema` | [src/pluto/collections/index.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/collections/index.ts#L24) |
