[**@hyperledger/identus-sdk v8.1.2**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreatePayload

# Type Alias: CreatePayload

> **CreatePayload** = \{ `keys`: [`RequiredPrismDIDSecretKeys`](RequiredPrismDIDSecretKeys.md); `services?`: [`Service`](../namespaces/Domain/namespaces/DIDDocument/classes/Service.md)[]; \}

Defined in: [packages/lib/sdk/src/castor/methods/prism/index.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/prism/index.ts#L22)

Options for creating a new Prism DID.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-keys"></a> `keys` | [`RequiredPrismDIDSecretKeys`](RequiredPrismDIDSecretKeys.md) | Key map. `MASTER_KEY` is required; other usages are optional. | [packages/lib/sdk/src/castor/methods/prism/index.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/prism/index.ts#L26) |
| <a id="property-services"></a> `services?` | [`Service`](../namespaces/Domain/namespaces/DIDDocument/classes/Service.md)[] | Optional DID Document services to embed. | [packages/lib/sdk/src/castor/methods/prism/index.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/prism/index.ts#L24) |
