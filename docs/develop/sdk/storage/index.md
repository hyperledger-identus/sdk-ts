<!-- sidebar_position: 1 -->

# Storage (Pluto)

Pluto is the SDK storage layer, responsible for persisting and retrieving data within the SDK.
Storage is a complex concern, so Pluto is designed for **maximum flexibility** balanced with **ease-of-use**. Multiple levels of abstraction are provided so an implementation can be curated specifically to the use-case.

To reduce the minimum amount of work required to get started, a full default implementation is provided out-of-the-box via RIDB.

## Architecture Overview

```
┌──────────────┐
│    Agent     │  ← uses Domain classes (DID, Credential, Message …)
└──────┬───────┘
       │
┌──────▼───────┐
│    Pluto     │  ← orchestration layer: maps Domain ↔ Models
└──────┬───────┘
       │
┌──────▼───────┐
│ Repositories │  ← typed CRUD + mapping logic
└──────┬───────┘
       │
┌──────▼───────┐
│    Store     │  ← pluggable persistence (insert / query / update / delete)
└──────────────┘
```

### Pluto (orchestration)

- Always deals with **Domain classes** (`Domain.DID`, `Domain.Credential`, etc.)
- Manages relationships between entities (e.g. DID → Key links)
- Handles business logic and error handling
- Created via the static factory `Pluto.create()`

### Repositories

- Map between Domain classes and internal **Models** (flat, storable objects)
- Provide typed query methods (`find`, `findOne`, `byUUID`, `save`)
- Encapsulate persistence details from Pluto

### Models

- Flat interfaces extending `Model` (an object with a `uuid` property)
- Define the database schema via `schemaFactory`

### Store

- Simplified CRUD interface (`query`, `insert`, `update`, `delete`)
- The only layer you need to implement for a **custom storage backend**

## Quick Start

The fastest way to get a working Pluto:

```ts
import { Pluto } from "@hyperledger/identus-sdk";

const pluto = await Pluto.create({
  dbName: "my-wallet",
  keyRestoration: apollo,
});

const agent = Agent.initialize({ pluto, ...etc });
```

## Guides

| Guide | Description |
|-------|-------------|
| [Default Store](./default-store.md) | Using the built-in RIDB store with encryption and custom backends |
| [Custom Store](./custom-store.md) | Implementing your own `Pluto.Store` for full control |
| [Data Models](./models.md) | Reference for all collection schemas |
