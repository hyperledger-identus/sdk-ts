---
id: what-is-did-prism
title: What is a did:prism?
---

`did:prism` is a decentralized identifier (DID) method that is built on the Cardano blockchain. It is designed to be a scalable, secure, and interoperable way to manage digital identities. To interact with the Cardano blockchain for creating and managing `did:prism` on-chain, the SDK uses the [CIP-30](https://cips.cardano.org/cip/CIP-30) specification, which defines a standard way to connect with browser-based Cardano wallet extensions.

## `did:prism` DID Formats

The `did:prism` method supports two different formats for DIDs:

*   **Long Form (Offline) DID:** This is a self-contained DID that includes all the information needed to resolve it. It can be created and used offline, without needing to interact with the Cardano blockchain. This is useful for scenarios where you need to create a DID quickly and without an internet connection.

*   **Short Form DID:** This is a shorter, more user-friendly DID that is created by publishing a long-form DID to the Cardano blockchain. The short-form DID can be resolved by querying the blockchain for the corresponding long-form DID.

## `did:prism` DID Structure

A `did:prism` DID has the following structure:

```
did:prism:<method-specific-id>
```

The `method-specific-id` is a base64url-encoded string that contains the initial state of the DID. For long-form DIDs, this state includes the public keys and services associated with the DID. For short-form DIDs, this state is a hash of the initial state of the long-form DID.
