---
id: configuration
title: Configuration
---

The `did:prism` resolver can be configured to use a custom endpoint for resolving short-form DIDs. This is useful if you want to use your own resolver or a resolver provided by a third party.

## Agent Configuration

The easiest way to configure the `did:prism` resolver is to provide the `resolverEndpoint` option when initializing the `Agent`.

Here's an example of how to configure the `Agent` to use a custom resolver endpoint:

```typescript
import { Agent } from '@hyperledger/identus-sdk';

const agent = Agent.initialize({
  pluto: myPlutoInstance,
  options: {
    resolverEndpoint: 'https://my-custom-resolver.com/dids/',
  },
});
```

The `resolverEndpoint` should be the base URL of the resolver, and the DID will be appended to it. For example, if you are resolving `did:prism:123`, the resolver will make a GET request to `https://my-custom-resolver.com/dids/did:prism:123`.

The default resolver endpoint is `https://raw.githubusercontent.com/FabioPinheiro/prism-vdr/refs/heads/main/mainnet/diddoc/`.

## Castor Configuration

If you are using `Castor` directly, you can configure the resolver endpoint in the `Castor` constructor:

```typescript
import { Apollo, Castor } from '@hyperledger/identus-sdk';

const apollo = new Apollo();
const castor = new Castor(apollo, [], 'https://my-custom-resolver.com/dids/');
```
