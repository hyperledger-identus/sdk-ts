# Implementing a Custom DID Method

The SDK uses a pluggable DID method architecture. You can register your own DID methods alongside the built-in `prism` and `peer` methods. This guide walks through the full process.

## Overview

A custom DID method consists of three pieces:

1. **Type augmentation** -- declare your method's payload types in `DIDMethodTypeMap`
2. **Method class** -- implement the `DIDMethod` interface
3. **Registration** -- pass your method to the `Castor` constructor or `Agent` options

## Step 1: Define Payload Types and Augment the Type Map

Create a module that declares your method's payloads and augments `DIDMethodTypeMap`. This gives `createDID`, `publishDID`, etc. full type safety for your method.

```typescript
// my-did-method/types.ts
import { Domain } from "@hyperledger/identus-sdk";

export type MyCreatePayload = {
  keys: { SIGNING_KEY: Domain.PrivateKey };
  services?: Domain.DIDDocument.Service[];
};

export type MyPublishPayload = {
  key: DomainPrivateKey;
  did: Domain.DID;
};

export type MyMetadata = { txHash: string };

// Augment the global type map
declare module "@hyperledger/identus-sdk" {
  interface DIDMethodTypeMap {
    mymethod: {
      createPayload: MyCreatePayload;
      publishPayload: MyPublishPayload;
      metadata: MyMetadata;
    };
  }
}
```

**How it works:** `DIDMethodTypeMap` is an empty interface in `@hyperledger/identus-sdk`. Each DID method adds entries to it using TypeScript's [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html). The SDK's `DIDMethods`, `InferCreatePayload<M>`, etc. are mapped types that read from this map, so TypeScript automatically knows the correct payload and return types when you call `castor.createDID('mymethod', ...)`.

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
    return new DID("did", "mymethod", methodId);
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
    // Resolve the DID and verify the signature
    const doc = await this.resolver.resolve(did.toString());
    // ... verification logic
    return true;
  }
}
```

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

const castor = new Castor(apollo, [new MyDIDMethod()]);

// Now fully typed:
const did = await castor.createDID("mymethod", {
  keys: { SIGNING_KEY: myPrivateKey },
});
```

### Via Agent options

```typescript
import { Agent } from "@hyperledger/identus-sdk";
import { MyDIDMethod } from "./my-did-method";

const agent = Agent.initialize({
  pluto,
  didMethods: [new MyDIDMethod()],
});
```

Custom methods passed via `didMethods` override built-in methods with the same `method` name.

## Full Type Safety

After augmenting `DIDMethodTypeMap`, all calls through `Castor` or `Agent` are fully type-checked:

```typescript
// TypeScript knows `opts` must be MyCreatePayload
await castor.createDID("mymethod", {
  keys: { SIGNING_KEY: sk },
});

// TypeScript error: property 'MASTER_KEY' is missing
await castor.createDID("prism", {
  keys: { SIGNING_KEY: sk }, // Error!
});

// TypeScript knows the return is MyMetadata
const meta = await castor.publishDID("mymethod", { key: sk, did });
console.log(meta); // Uint8Array with the blockchain operation, or for other sources
```
