# DID Provider Module

Create and manage PRISM DIDs in offline-first, browser-based Edge Agent scenarios.

## Overview

The `did-provider` module provides reusable helpers for PRISM DID creation using the Hyperledger Identus TypeScript SDK. It is designed for:

- Browser-based, offline-first applications (no backend dependency)
- Deterministic DID creation (for testing and reproducibility)
- Simple, zero-dependency DID lifecycle management

## Installation

```bash
yarn add @hyperledger/identus-sdk
```

## Usage

### Basic DID Creation

Create a random PRISM DID:

```typescript
import { createPrismDID } from '@hyperledger/identus-sdk';

const result = await createPrismDID();
console.log('Full DID:', result.did);
console.log('Short Form:', result.shortFormDid);
console.log('Private Key (hex):', result.privateKeyHex);
```

### Deterministic DID (Testing)

Create a DID with a fixed seed for reproducibility:

```typescript
const result = await createPrismDID({ seed: 'my-test-seed' });
// Same seed always produces the same DID
```

## API Reference

### `createPrismDID(options?): Promise<DIDCreateResult>`

#### Parameters
- `options` (optional):
  - `seed?: string` — Deterministic seed for reproducible DID creation. If omitted, a random seed is generated.
  - `label?: string` — Reserved for future use (e.g., DID naming).

#### Returns
- `DIDCreateResult`:
  - `did: string` — Full-form PRISM DID (e.g., `did:prism:abc123...`)
  - `shortFormDid: string` — Short-form PRISM DID (first 3 components, e.g., `did:prism:abc123`)
  - `privateKeyHex: string` — Private key in hexadecimal format (for storage or export)

#### Throws
- May throw if underlying Apollo/Castor operations fail or if native WASM dependencies are unavailable.

## Integration with Offline-First Web Dashboard

In the mentorship project's unified SSI agent dashboard, this module is used in:

1. **DID Creation Flow** — User requests new DID → helper generates → short form displayed for preview
2. **Export / Backup** — User exports DID and private key for wallet integration
3. **Testing & Demos** — Deterministic seed for reproducible, shareable demo scenarios

## Next Steps

After creating a DID, typical workflows include:

1. **Publishing to Cardano** — Use CIP-30 wallet (MeshSDK) to publish DID to Cardano blockchain
2. **Issuance Flows** — Use the DID as issuer for verifiable credentials
3. **DIDComm Messaging** — Establish connections and send protocol messages
4. **Resolution** — Resolve DIDs using the Cardano network or a centralized resolver

## Example: Full Workflow

```typescript
import { createPrismDID } from '@hyperledger/identus-sdk';

async function setupDIDForDashboard() {
  // 1. Create DID
  const didResult = await createPrismDID();
  
  // 2. Store locally (e.g., localStorage, IndexedDB)
  localStorage.setItem('prism_did', JSON.stringify(didResult));
  
  // 3. Display in dashboard
  console.log('Your PRISM DID:', didResult.shortFormDid);
  
  // 4. Later: publish to Cardano using CIP-30 wallet
  // (see docs/cardano-integration.md)
  
  return didResult;
}
```

## See Also

- [PRISM DID Method Spec](https://github.com/input-output-hk/prism-did-method-spec)
- [W3C DID Core](https://www.w3.org/TR/did-core/)
- [Hyperledger Identus Cloud Agent](https://github.com/hyperledger/identus)
- [Cardano CIP-30 (Dapp Connector)](https://cips.cardano.org/cips/cip30/)

## Contributing

This module is part of the Hyperledger Identus TypeScript SDK. Contributions welcome!

- Report issues: [GitHub Issues](https://github.com/hyperledger-identus/sdk-ts/issues)
- Discussions: [Identus Discord](https://discord.gg/identus)
