<!-- sidebar_position: 2 -->

# Default Store (RIDB)

The SDK ships with a ready-to-use store backed by [RIDB](https://www.npmjs.com/package/@trust0/ridb) — a TypeScript-first reactive database that supports encryption, schema migrations, and pluggable storage backends.

## Basic Usage

```ts
import { Pluto } from "@hyperledger/identus-sdk";

// Pluto.create() automatically creates the default store when given a dbName
const pluto = await Pluto.create({
  dbName: "identus-wallet",
  keyRestoration: apollo,
});
```

## Encrypted Storage

Pass a `password` in `startOptions` to encrypt all sensitive fields at rest:

```ts
const pluto = await Pluto.create({
  dbName: "identus-wallet",
  keyRestoration: apollo,
  startOptions: {
    password: "my-strong-password",
  },
});
```

Fields marked as encrypted in each model schema (e.g. `dataJson`, `rawHex`, `claims`, `value`) will be automatically encrypted before persistence and decrypted on read.

## Custom Storage Backend

By default, RIDB uses an in-memory storage backend. To persist data to disk, IndexedDB, or another target, pass a `storageType`:

```ts
import { Pluto, StorageType } from "@hyperledger/identus-sdk";

const pluto = await Pluto.create({
  dbName: "identus-wallet",
  keyRestoration: apollo,
  startOptions: {
    storageType: StorageType.IndexDB,
  },
});
```

### Available Storage Types

| Type | Description |
|------|-------------|
| `StorageType.InMemory` | Default. Data lives only in memory. |
| `StorageType.IndexDB` | Browser IndexedDB-backed persistence. |

You can also provide a custom `BaseStorage` subclass for other backends.

## Manual Store Creation

For advanced use-cases, create the store separately via `createStore`:

```ts
import { createStore, Pluto } from "@hyperledger/identus-sdk";

const store = await createStore("my-db", {
  password: "secret",
});

const pluto = await Pluto.create({
  store,
  keyRestoration: apollo,
});
```

## Custom Initialisation

If you need full control over the database start sequence, use the `WithStart` option:

```ts
const pluto = await Pluto.create({
  dbName: "identus-wallet",
  keyRestoration: apollo,
  startOptions: {
    start: async () => {
      // your custom initialisation logic
    },
  },
});
```
