<!-- sidebar_position: 3 -->

# Custom Store

The `Pluto.Store` interface defines the minimal contract that Pluto requires for persistence. Implement it to use any database or storage mechanism of your choice.

## Interface

```ts
interface Store {
  start?(): Promise<void>;
  stop?(): Promise<void>;
  query<K extends TableName>(table: K, query?: Query<CollectionSchemas[K]>): Promise<CollectionMap[K][]>;
  insert<K extends TableName>(table: K, model: CollectionMap[K]): Promise<void>;
  update<K extends TableName>(table: K, model: CollectionMap[K]): Promise<void>;
  delete(table: TableName, uuid: string): Promise<void>;
}
```

## Table Names

Your store must handle the following tables:

| Table | Model | Description |
|-------|-------|-------------|
| `credentials` | `Credential` | Verifiable credentials |
| `credential-metadata` | `CredentialMetadata` | Credential schema metadata |
| `dids` | `DID` | Decentralized identifiers |
| `keys` | `Key` | Private keys (encrypted) |
| `messages` | `Message` | DIDComm messages |
| `didkey-link` | `DIDKeyLink` | DID ↔ Key relationships |
| `did-link` | `DIDLink` | DID ↔ DID relationships (pairs, mediators) |
| `settings` | `Settings` | Key-value settings |
| `issuance` | `Issuance` | Credential issuance records |

## Example Implementation

```ts
import { Domain, Pluto, Agent } from "@hyperledger/identus-sdk";

class MyCustomStore implements Pluto.Store {
  private db = new Map<string, Map<string, any>>();

  async start() {
    // Initialise your storage backend
  }

  async stop() {
    // Clean up connections
  }

  async query<K extends TableName>(
    table: K,
    query?: Query<CollectionSchemas[K]>
  ): Promise<CollectionMap[K][]> {
    const tableData = this.db.get(table);
    if (!tableData) return [];

    const entries = Array.from(tableData.values());

    if (!query?.selector) return entries;

    // Apply selector filters
    return entries.filter(entry =>
      Object.entries(query.selector!).every(
        ([key, value]) => entry[key] === value
      )
    );
  }

  async insert<K extends TableName>(
    table: K,
    model: CollectionMap[K]
  ): Promise<void> {
    if (!this.db.has(table)) {
      this.db.set(table, new Map());
    }
    this.db.get(table)!.set(model.uuid, model);
  }

  async update<K extends TableName>(
    table: K,
    model: CollectionMap[K]
  ): Promise<void> {
    const tableData = this.db.get(table);
    if (!tableData?.has(model.uuid)) {
      throw new Error(`Record ${model.uuid} not found in ${table}`);
    }
    tableData.set(model.uuid, model);
  }

  async delete(table: TableName, uuid: string): Promise<void> {
    this.db.get(table)?.delete(uuid);
  }
}
```

## Using Your Custom Store

```ts
const store = new MyCustomStore();
const pluto = await Pluto.create({
  store,
  keyRestoration: apollo,
});

const agent = Agent.initialize({ pluto, ...etc });
```

## Query Operators

The `query` parameter uses a `selector` object to filter results. Key behaviours:

- **Equality**: `{ selector: { method: "prism" } }` — match records where `method` equals `"prism"`.
- **Logical OR**: `{ selector: { $or: [{ method: "prism" }, { method: "peer" }] } }` — match either condition.
- **Logical AND**: `{ selector: { $and: [{ role: 1 }, { hostId: "abc" }] } }` — match all conditions.
- **No selector**: Omit `selector` to return all records from the table.
