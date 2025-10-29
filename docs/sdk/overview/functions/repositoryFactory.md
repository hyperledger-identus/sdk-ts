[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / repositoryFactory

# Function: repositoryFactory()

> **repositoryFactory**(`store`: [`Store`](../namespaces/Pluto/interfaces/Store.md), `keyRestoration`: [`KeyRestoration`](../namespaces/Domain/interfaces/KeyRestoration.md)): \{ `CredentialMetadata`: [`CredentialMetadataRepository`](../classes/CredentialMetadataRepository.md); `Credentials`: [`CredentialRepository`](../classes/CredentialRepository.md); `DIDKeyLinks`: [`DIDKeyLinkRepository`](../classes/DIDKeyLinkRepository.md); `DIDLinks`: [`DIDLinkRepository`](../classes/DIDLinkRepository.md); `DIDs`: [`DIDRepository`](../classes/DIDRepository.md); `Keys`: [`KeyRepository`](../classes/KeyRepository.md); `LinkSecrets`: [`LinkSecretRepository`](../classes/LinkSecretRepository.md); `Messages`: [`MessageRepository`](../classes/MessageRepository.md); \}

Defined in: [src/pluto/repositories/builders/factory.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/factory.ts#L21)

Factory fn to instantiate all Repositories

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `store` | [`Store`](../namespaces/Pluto/interfaces/Store.md) |  |
| `keyRestoration` | [`KeyRestoration`](../namespaces/Domain/interfaces/KeyRestoration.md) |  |

## Returns

\{ `CredentialMetadata`: [`CredentialMetadataRepository`](../classes/CredentialMetadataRepository.md); `Credentials`: [`CredentialRepository`](../classes/CredentialRepository.md); `DIDKeyLinks`: [`DIDKeyLinkRepository`](../classes/DIDKeyLinkRepository.md); `DIDLinks`: [`DIDLinkRepository`](../classes/DIDLinkRepository.md); `DIDs`: [`DIDRepository`](../classes/DIDRepository.md); `Keys`: [`KeyRepository`](../classes/KeyRepository.md); `LinkSecrets`: [`LinkSecretRepository`](../classes/LinkSecretRepository.md); `Messages`: [`MessageRepository`](../classes/MessageRepository.md); \}

list of instantiated Repostitories

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `CredentialMetadata` | [`CredentialMetadataRepository`](../classes/CredentialMetadataRepository.md) | [src/pluto/repositories/builders/factory.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/factory.ts#L23) |
| `Credentials` | [`CredentialRepository`](../classes/CredentialRepository.md) | [src/pluto/repositories/builders/factory.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/factory.ts#L22) |
| `DIDKeyLinks` | [`DIDKeyLinkRepository`](../classes/DIDKeyLinkRepository.md) | [src/pluto/repositories/builders/factory.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/factory.ts#L28) |
| `DIDLinks` | [`DIDLinkRepository`](../classes/DIDLinkRepository.md) | [src/pluto/repositories/builders/factory.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/factory.ts#L29) |
| `DIDs` | [`DIDRepository`](../classes/DIDRepository.md) | [src/pluto/repositories/builders/factory.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/factory.ts#L24) |
| `Keys` | [`KeyRepository`](../classes/KeyRepository.md) | [src/pluto/repositories/builders/factory.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/factory.ts#L25) |
| `LinkSecrets` | [`LinkSecretRepository`](../classes/LinkSecretRepository.md) | [src/pluto/repositories/builders/factory.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/factory.ts#L26) |
| `Messages` | [`MessageRepository`](../classes/MessageRepository.md) | [src/pluto/repositories/builders/factory.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/factory.ts#L27) |
