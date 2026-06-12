[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / createStore

# Function: createStore()

> **createStore**(`dbName`: `string`, `options?`: [`StartOptions`](../type-aliases/StartOptions.md)): `Promise`\<[`Store`](../namespaces/Pluto/interfaces/Store.md)\>

Defined in: [packages/lib/sdk/src/pluto/store/index.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/store/index.ts#L45)

Create a default [Pluto.Store](../namespaces/Pluto/interfaces/Store.md) backed by RIDB.

The returned store registers all built-in collection schemas and
migrations, and can optionally be encrypted or use a custom
storage backend.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dbName` | `string` | Logical database name (e.g. `"identus-pluto"`). |
| `options` | [`StartOptions`](../type-aliases/StartOptions.md) | Control how the database is initialised. - Pass [WithOptions](../type-aliases/WithOptions.md) to configure encryption or a custom `storageType`. - Pass [WithStart](../type-aliases/WithStart.md) to take full control of the startup sequence. |

## Returns

`Promise`\<[`Store`](../namespaces/Pluto/interfaces/Store.md)\>

A `Pluto.Store` instance ready to be passed to [Pluto.create](../classes/Pluto.md#create).

## Examples

Create a store with default settings
```ts
import { createStore, Pluto } from "@hyperledger/identus-sdk";

const store = await createStore("my-db");
const pluto = await Pluto.create({ store, keyRestoration: apollo });
```

Create an encrypted store
```ts
const store = await createStore("my-db", { password: "super-secret" });
```
