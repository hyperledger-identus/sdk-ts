# Implementing a Custom DID Method

The SDK uses a pluggable DID method architecture. You can register your own DID methods alongside the built-in `prism` and `peer` methods. This guide walks through the full process.

## Overview

A custom DID method consists of two pieces:

1. **Method class** -- implement the `DIDMethod` interface
2. **Registration** -- pass an instance to the `Castor` constructor or to `Agent.initialize`'s `didMethods` option

No global type registration is required. TypeScript infers every payload and metadata type directly from your `DIDMethod` class, so `createDID`, `publishDID`, etc. are fully typed as soon as you pass your instance in.

## Step 1: Define Payload Types

Declare the types your method accepts and returns. These are plain TypeScript types and do **not** need to be registered anywhere global.

```typescript
// my-did-method/types.ts
import type * as Domain from "@hyperledger/identus-domain";

export type MyCreatePayload = {
  keys: { SIGNING_KEY: Domain.PrivateKey };
  services?: Domain.DIDDocument.Service[];
};

export type MyPublishPayload = {
  key: Domain.PrivateKey;
  did: Domain.DID;
};

export type MyMetadata = { txHash: string };
```

## Step 2: Implement the DIDMethod Interface

```typescript
// my-did-method/index.ts
import { DIDMethod, DIDMethodOperation, Domain } from "@hyperledger/identus-sdk";
import "./types"; // side-effect: augments DIDMethodTypeMap
import type { MyCreatePayload, MyPublishPayload, MyMetadata } from "./types";

class MyResolver implements Domain.DIDResolver {
  method = "mymethod";

  async resolve(didString: string): Promise<Domain.DIDDocument> {
    // Implement resolution logic
    // ...
  }
}

export class MyDIDMethod
  implements DIDMethod<MyMetadata, MyCreatePayload, MyPublishPayload>
{
  method = "mymethod" as const;
  resolver = new MyResolver();

  async create(opts: MyCreatePayload): Promise<Domain.DID> {
    const publicKey = opts.keys.SIGNING_KEY.publicKey();
    // Build and return a DID from the public key material
    const methodId = computeMethodId(publicKey);
    return new Domain.DID("did", "mymethod", methodId);
  }

  async publish(
    opts: MyPublishPayload
  ): Promise<DIDMethodOperation<MyMetadata>> {
    // Submit to a ledger, return metadata
    return { txHash: "0xabc..." };
  }

  async verifySignature(
    did: Domain.DID,
    challenge: Uint8Array,
    signature: Uint8Array
  ): Promise<boolean> {
    const doc = await this.resolver.resolve(did.toString());
    // ... verification logic
    return true;
  }
}
```

The two details that make type inference work:

- `method = "mymethod" as const` -- the `as const` gives the `method` field a literal string type, which the SDK uses as the dispatch key in `agent.createDID("mymethod", ...)`.
- A concretely typed `create(opts: MyCreatePayload)` (and, if present, `publish` / `update` / `deactivate`) -- payload types are inferred from these signatures.

### Optional Operations

The `DIDMethod` type has five generic parameters:

```
DIDMethod<TMetadata, CreatePayload, PublishPayload, UpdatePayload, DeactivatePayload>
```

Set any payload to `never` (or omit the parameter) to disable that operation. For example, the built-in `PeerDIDMethod` only supports `create` and `verifySignature` -- it has no `publish`, `update`, or `deactivate`:

```typescript
class PeerDIDMethod implements Domain.DIDMethod<never, CreatePayload> { ... }
```

## Step 3: Register with Castor or Agent

### Direct Castor usage

```typescript
import { Castor } from "@hyperledger/identus-sdk";
import { MyDIDMethod } from "./my-did-method";

const castor = new Castor(apollo, [new MyDIDMethod()] as const);

// Now fully typed:
const did = await castor.createDID("mymethod", {
  keys: { SIGNING_KEY: myPrivateKey },
});
```

### Via Agent

Prefer the top-level `didMethods` param on `Agent.initialize` -- it participates in type inference so `agent.createDID` knows about your method:

```typescript
import { Agent } from "@hyperledger/identus-sdk";
import { MyDIDMethod } from "./my-did-method";

const agent = Agent.initialize({
  pluto,
  didMethods: [new MyDIDMethod()],
});

await agent.createDID("mymethod", {
  keys: { SIGNING_KEY: myPrivateKey },
});
```

Custom methods passed via `didMethods` override built-in methods with the same `method` name (both at runtime and in the inferred types).

## Full Type Safety

All calls through `Castor` or `Agent` are fully type-checked against the methods you actually registered:

```typescript
// TypeScript knows `opts` must be MyCreatePayload
await agent.createDID("mymethod", {
  keys: { SIGNING_KEY: sk },
});

// TypeScript error: property 'MASTER_KEY' is missing
await agent.createDID("prism", {
  keys: { SIGNING_KEY: sk }, // Error!
});

// TypeScript error: method "bogus" is not registered
await agent.createDID("bogus", {}); // Error!

// TypeScript knows the return is MyMetadata
const meta = await agent.publishDID("mymethod", { key: sk, did });
console.log(meta.txHash);
```
