[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreateOptions

# Type Alias: CreateOptions

> **CreateOptions** = \{ `keyRestoration`: [`KeyRestoration`](../namespaces/Domain/interfaces/KeyRestoration.md); \} & \{ `store`: [`Store`](../namespaces/Pluto/interfaces/Store.md); \} \| \{ `dbName`: `string`; `startOptions?`: [`StartOptions`](StartOptions.md); \}

Defined in: [packages/lib/sdk/src/pluto/Pluto.ts:208](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/pluto/Pluto.ts#L208)

Options for creating a Pluto instance via [Pluto.create](../classes/Pluto.md#create).

Provide **either** a pre-built `store` **or** a `dbName` (in which case
the default RIDB-backed store is created automatically).

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `keyRestoration` | [`KeyRestoration`](../namespaces/Domain/interfaces/KeyRestoration.md) | [packages/lib/sdk/src/pluto/Pluto.ts:209](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/pluto/Pluto.ts#L209) |
