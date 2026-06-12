[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / repositoryFactory

# Function: repositoryFactory()

> **repositoryFactory**(`store`: [`Store`](../namespaces/Pluto/interfaces/Store.md), `keyRestoration`: [`KeyRestoration`](../namespaces/Domain/interfaces/KeyRestoration.md)): \{ `CredentialMetadata`: [`CredentialMetadataRepository`](../classes/CredentialMetadataRepository.md); `Credentials`: [`CredentialRepository`](../classes/CredentialRepository.md); `DIDKeyLinks`: [`DIDKeyLinkRepository`](../classes/DIDKeyLinkRepository.md); `DIDLinks`: [`DIDLinkRepository`](../classes/DIDLinkRepository.md); `DIDs`: [`DIDRepository`](../classes/DIDRepository.md); `Keys`: [`KeyRepository`](../classes/KeyRepository.md); `LinkSecrets`: [`LinkSecretRepository`](../classes/LinkSecretRepository.md); `Messages`: [`MessageRepository`](../classes/MessageRepository.md); \}

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/factory.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/factory.ts#L21)

Factory fn to instantiate all Repositories

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `store` | [`Store`](../namespaces/Pluto/interfaces/Store.md) | - |
| `keyRestoration` | [`KeyRestoration`](../namespaces/Domain/interfaces/KeyRestoration.md) | - |

## Returns

\{ `CredentialMetadata`: [`CredentialMetadataRepository`](../classes/CredentialMetadataRepository.md); `Credentials`: [`CredentialRepository`](../classes/CredentialRepository.md); `DIDKeyLinks`: [`DIDKeyLinkRepository`](../classes/DIDKeyLinkRepository.md); `DIDLinks`: [`DIDLinkRepository`](../classes/DIDLinkRepository.md); `DIDs`: [`DIDRepository`](../classes/DIDRepository.md); `Keys`: [`KeyRepository`](../classes/KeyRepository.md); `LinkSecrets`: [`LinkSecretRepository`](../classes/LinkSecretRepository.md); `Messages`: [`MessageRepository`](../classes/MessageRepository.md); \}

list of instantiated Repostitories

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `CredentialMetadata` | [`CredentialMetadataRepository`](../classes/CredentialMetadataRepository.md) | [packages/lib/sdk/src/pluto/repositories/builders/factory.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/factory.ts#L23) |
| `Credentials` | [`CredentialRepository`](../classes/CredentialRepository.md) | [packages/lib/sdk/src/pluto/repositories/builders/factory.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/factory.ts#L22) |
| `DIDKeyLinks` | [`DIDKeyLinkRepository`](../classes/DIDKeyLinkRepository.md) | [packages/lib/sdk/src/pluto/repositories/builders/factory.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/factory.ts#L28) |
| `DIDLinks` | [`DIDLinkRepository`](../classes/DIDLinkRepository.md) | [packages/lib/sdk/src/pluto/repositories/builders/factory.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/factory.ts#L29) |
| `DIDs` | [`DIDRepository`](../classes/DIDRepository.md) | [packages/lib/sdk/src/pluto/repositories/builders/factory.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/factory.ts#L24) |
| `Keys` | [`KeyRepository`](../classes/KeyRepository.md) | [packages/lib/sdk/src/pluto/repositories/builders/factory.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/factory.ts#L25) |
| `LinkSecrets` | [`LinkSecretRepository`](../classes/LinkSecretRepository.md) | [packages/lib/sdk/src/pluto/repositories/builders/factory.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/factory.ts#L26) |
| `Messages` | [`MessageRepository`](../classes/MessageRepository.md) | [packages/lib/sdk/src/pluto/repositories/builders/factory.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/factory.ts#L27) |
