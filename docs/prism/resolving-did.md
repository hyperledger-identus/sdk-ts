---
id: resolving-did
title: Resolving a did:prism
---

A `did:prism` DID can be resolved to a DID Document, which contains information about the DID, such as its public keys and services.

## Resolving with the Agent

If you have an `Agent` instance, you can use its `castor` instance to resolve a `did:prism` DID.

Here's an example of how to resolve a `did:prism` DID using the `Agent`:

```typescript
import { Agent } from '@hyperledger/identus-sdk';

const agent = Agent.initialize({
  pluto: myPlutoInstance,
});

const did = 'did:prism:b6c0c33d701ac1b9a262a14454d1bbde3d127d697a76950963c5fd930605:Cj8KPRI7CgdtYXN0ZXIwEAFKLgoJc2VmsxEiECSTjyV7sUfCr_ArpN9rvCwR9fRMAhcsr_S7ZRiJk4p5k';
const didDocument = await agent.castor.resolveDID(did);

console.log(didDocument);
```

The `resolveDID` method will automatically handle both long-form and short-form DIDs. For short-form DIDs, it will use the configured `resolverEndpoint` to fetch the DID Document.

## Resolving with Castor

If you are using `Castor` directly, you can use the `resolveDID` method to resolve a `did:prism` DID.

Here's an example of how to resolve a `did:prism` DID using `Castor`:

```typescript
import { Apollo, Castor } from '@hyperledger/identus-sdk';

const apollo = new Apollo();
const castor = new Castor(apollo);

const did = 'did:prism:b6c0c33d701ac1b9a262a14454d1bbde3d127d697a76950963c5fd930605:Cj8KPRI7CgdtYXN0ZXIwEAFKLgoJc2VmsxEiECSTjyV7sUfCr_ArpN9rvCwR9fRMAhcsr_S7ZRiJk4p5k';
const didDocument = await castor.resolveDID(did);

console.log(didDocument);
```
