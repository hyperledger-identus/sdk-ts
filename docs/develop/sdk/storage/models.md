<!-- sidebar_position: 4 -->

# Data Models

Pluto persists data in flat, storable Model interfaces. Each model has a `uuid` primary key and declares its schema via `schemaFactory`.

Fields marked **🔒** are encrypted at rest when using an encrypted store.

---

## Credential

Table: `credentials` | Schema version: `2`

Represents a verifiable credential (JWT, SD-JWT, or AnonCreds).

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | `string` | ✅ | Primary key |
| `recoveryId` | `string` | ✅ | Credential type identifier |
| `dataJson` 🔒 | `string` | ✅ | Serialised credential payload |
| `id` | `string` | ✅ | Credential identifier |
| `issuer` | `string` | | Issuer DID |
| `subject` | `string` | | Subject DID |
| `credentialCreated` | `string` | | Creation timestamp |
| `credentialUpdated` | `string` | | Last update timestamp |
| `credentialSchema` | `string` | | Schema identifier |
| `validUntil` | `number` | | Expiry (epoch ms) |
| `revoked` | `boolean` | | Revocation status |
| `status` | `string` | | General status |

---

## CredentialMetadata

Table: `credential-metadata` | Schema version: `0`

Metadata for credential schemas.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | `string` | ✅ | Primary key |
| `recoveryId` | `string` | ✅ | Recovery identifier |
| `dataJson` 🔒 | `string` | ✅ | Serialised metadata |
| `name` | `string` | ✅ | Lookup key |

---

## DID

Table: `dids` | Schema version: `0`

A Decentralized Identifier.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | `string` | ✅ | Primary key (full DID string) |
| `schema` | `string` | ✅ | DID schema |
| `method` | `string` | ✅ | DID method (`prism`, `peer`, etc.) |
| `alias` | `string` | | Human-readable name |
| `status` | `string` | | DID status |

---

## Key

Table: `keys` | Schema version: `0`

A private key.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | `string` | ✅ | Primary key |
| `recoveryId` | `string` | ✅ | Key type identifier |
| `rawHex` 🔒 | `string` | ✅ | Hex-encoded raw key bytes |
| `alias` | `string` | | Human-readable name |
| `index` | `number` | | Derivation index |

---

## Message

Table: `messages` | Schema version: `1`

A DIDComm message.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | `string` | ✅ | Primary key |
| `dataJson` 🔒 | `string` | ✅ | Full serialised message |
| `id` | `string` | ✅ | Protocol-level message id |
| `piuri` | `string` | ✅ | Protocol message type URI |
| `isReceived` | `number` | ✅ | Direction flag (0 = sent, 1 = received) |
| `read` | `boolean` | ✅ | Read status |
| `createdTime` | `number` | | Creation timestamp |
| `thid` 🔒 | `string` | | Thread identifier |
| `from` | `string` | | Sender DID |
| `to` | `string` | | Recipient DID |

---

## DIDKeyLink

Table: `didkey-link` | Schema version: `0`

Links a DID to a Key.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | `string` | ✅ | Primary key |
| `didId` | `string` | ✅ | UUID of the related DID |
| `keyId` | `string` | ✅ | UUID of the related Key |
| `alias` | `string` | | Relationship name |

---

## DIDLink

Table: `did-link` | Schema version: `0`

Links two DIDs together with a role.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | `string` | ✅ | Primary key |
| `role` | `number` | ✅ | Relationship type (see below) |
| `hostId` | `string` | ✅ | UUID of the host DID |
| `targetId` | `string` | ✅ | UUID of the target DID |
| `alias` | `string` | | Relationship name |

**Role values:**

| Value | Name | Description |
|-------|------|-------------|
| `0` | `unknown` | Unmapped |
| `1` | `pair` | DID pair |
| `2` | `mediator` | Mediator DID |
| `3` | `routing` | Routing DID |

---

## Settings

Table: `settings` | Schema version: `0`

Arbitrary key-value settings.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | `string` | ✅ | Primary key |
| `id` | `string` | ✅ | Application-defined identifier |
| `key` | `string` | ✅ | Setting name |
| `value` 🔒 | `string` | ✅ | Setting payload |

---

## Issuance

Table: `issuance` | Schema version: `0`

Credential issuance records.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uuid` | `string` | ✅ | Primary key |
| `id` | `string` | ✅ | Application-defined identifier |
| `claims` 🔒 | `Claim[]` | ✅ | Array of `{ name, value, type }` |
| `credentialFormat` | `string` | ✅ | Format (e.g. `jwt`, `anoncreds`) |
| `issuingDID` | `string` | ✅ | Issuer DID string |
| `automaticIssuance` | `boolean` | | Auto-issue flag |
