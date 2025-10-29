[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Pluto](../README.md) / Store

# Interface: Store

Defined in: [src/pluto/Pluto.ts:71](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L71)

Store interface for Pluto persistence layer

This interface defines the contract for database operations on Models.
Implementations must handle CRUD operations for all supported model types.

Supported Models:
- Models.Credential - Verifiable credentials
- Models.CredentialMetadata - Metadata for credential schemas
- Models.DID - Decentralized identifiers
- Models.Key - Private keys
- Models.Message - DIDComm messages
- Models.DIDKeyLink - Links between DIDs and keys
- Models.DIDLink - Links between DIDs (pairs, mediators, routing)

Supported Tables:
- "credentials" - Stores credential data
- "credential-metadata" - Stores credential metadata
- "dids" - Stores DID documents
- "keys" - Stores private keys
- "messages" - Stores DIDComm messages
- "didkey-link" - Stores DID-key relationships
- "did-link" - Stores DID-DID relationships

## Methods

### delete() {#delete}

> **delete**(`table`: `string`, `uuid`: `string`): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:191](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L191)

Delete a row from the Store

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `table` | `string` | Valid table name. Must be one of: "credentials", "credential-metadata", "didkey-link", "did-link", "dids", "keys", "messages" |
| `uuid` | `string` | The unique identifier of the record to delete |

#### Returns

`Promise`\<`void`\>

Promise that resolves when the record is successfully deleted

#### Examples

Delete a credential by its uuid
```ts
  await store.delete("credentials", "credential-123");
```

Delete a DID by its uuid
```ts
  await store.delete("dids", "did:example:123");
```

#### Throws

Error if the record with the given uuid is not found or table name is not recognized

***

### insert() {#insert}

> **insert**\<`T`\>(`table`: `string`, `model`: `T`): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:142](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L142)

Persist new data in the Store.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* [`Storable`](../../Domain/namespaces/Pluto/interfaces/Storable.md) | The model type that extends Models.Model (e.g., Models.Credential, Models.DID, Models.Key, etc.) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `table` | `string` | Valid table name. Must be one of: "credentials", "credential-metadata", "didkey-link", "did-link", "dids", "keys", "messages" |
| `model` | `T` | The model instance to persist. Must include all required properties and should have a valid uuid |

#### Returns

`Promise`\<`void`\>

Promise that resolves when the model is successfully persisted

#### Example

Insert a new credential
```ts
  const credential: Models.Credential = {
    uuid: "credential-123",
    recoveryId: "jwt",
    dataJson: JSON.stringify(credentialData),
    id: "credential-id",
    issuer: "did:example:issuer"
  };
  await store.insert<Models.Credential>("credentials", credential);
```

#### Throws

Error if the model is invalid or table name is not recognized

***

### query() {#query}

> **query**\<`T`\>(`table`: `string`, `query?`: [`Query`](../../../type-aliases/Query.md)\<`T`\>): `Promise`\<`T`[]\>

Defined in: [src/pluto/Pluto.ts:117](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L117)

Run a query to fetch data from the Store

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* [`Storable`](../../Domain/namespaces/Pluto/interfaces/Storable.md) | The model type that extends Models.Model (e.g., Models.Credential, Models.DID, Models.Key, etc.) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `table` | `string` | Valid table name. Must be one of: "credentials", "credential-metadata", "didkey-link", "did-link", "dids", "keys", "messages" |
| `query?` | [`Query`](../../../type-aliases/Query.md)\<`T`\> | Optional Query object with selector conditions and operators for filtering results Query behavior: - Properties within an object will be AND'ed together - Different objects in $or array will be OR'd together - Omit query parameter to fetch all records from the table |

#### Returns

`Promise`\<`T`[]\>

Promise resolving to array of models matching the query criteria

#### Examples

Search for credentials by uuid and issuer
```ts
  store.query<Models.Credential>("credentials", { 
    selector: { uuid: "credential-123", issuer: "did:example:issuer" }
  })
```

Search for DIDs with method "prism" OR "peer"
```ts
  store.query<Models.DID>("dids", { 
    selector: { $or: [{ method: "prism" }, { method: "peer" }] }
  })
```

Fetch all messages from the table
```ts
  store.query<Models.Message>("messages")
```

***

### start()? {#start}

> `optional` **start**(): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:76](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L76)

Handle any necessary startup.
Will be called first before any usage, if provided.

#### Returns

`Promise`\<`void`\>

***

### stop()? {#stop}

> `optional` **stop**(): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:81](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L81)

Handle any necessary teardown.

#### Returns

`Promise`\<`void`\>

***

### update() {#update}

> **update**\<`T`\>(`table`: `string`, `model`: `T`): `Promise`\<`void`\>

Defined in: [src/pluto/Pluto.ts:168](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/Pluto.ts#L168)

Update an existing row in the Store

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* [`Storable`](../../Domain/namespaces/Pluto/interfaces/Storable.md) | The model type that extends Models.Model (e.g., Models.Credential, Models.DID, Models.Key, etc.) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `table` | `string` | Valid table name. Must be one of: "credentials", "credential-metadata", "didkey-link", "did-link", "dids", "keys", "messages" |
| `model` | `T` | The model instance with updated data. Must include the uuid to identify the record to update |

#### Returns

`Promise`\<`void`\>

Promise that resolves when the model is successfully updated

#### Example

Update a credential to mark it as revoked
```ts
  const updatedCredential: Models.Credential = {
    uuid: "credential-123",
    recoveryId: "jwt",
    dataJson: JSON.stringify(updatedCredentialData),
    id: "credential-id",
    issuer: "did:example:issuer",
    revoked: true
  };
  await store.update<Models.Credential>("credentials", updatedCredential);
```

#### Throws

Error if the model with the given uuid is not found or table name is not recognized
