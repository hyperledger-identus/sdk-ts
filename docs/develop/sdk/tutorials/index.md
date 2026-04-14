<!-- sidebar_position: 1 -->

# Tutorials

Here, we have the basic implementations and tutorials for the Identus Edge Agent JS SDK, but most things run cross platform with minor differences.

## Adding custom did methods

The SDK uses a pluggable DID method architecture. You can register your own DID methods alongside the built-in `prism` and `peer` methods, or `custom`. This guide walks through the full process.

DID method implementations will need to follow the specs and define the required functions:

- create
- verifySignature

Optionally, if the DID can be published onChain or somewhere else you can customize the `update`, `deactivate` and `publish`.

```typescript
type Metadata = {}
type CreatePayload = {}
type PublishPayload = {}
type UpdatePayload = {}
type DeactivatePayload = {}

type MyDIDMethod = DIDMethod<Metadata, CreatePayload, PublishPayload, UpdatePayload, DeactivatePayload>
```

[Start tutorial](./CustomDIDMethod.md)

## Verification

Start a verification flow from an Edge Agent (Verifier wallet) and another holder to request (a did) to send you a credential proof for a specific issuer and specific claims.

[Start tutorial](./Verification.md)

## Connectionless Credential Offer

How to handle a Connectionless Credential Offer.

[Start tutorial](./connectionless/ConnectionlessOffer.md)

## Connectionless presentation

Trigger the verifier to generate an out of band verification request. It will work exactly as the didcomm connection invitation links

[Start tutorial](./connectionless/ConnectionlessPresentation.md)

## Backup

Secure wallet backups through robust encryption using a master key derived from a seed, adhering to the BIP32 standard.

[Start tutorial](./Backup.md)

## OpenID Connect (OIDC) Credential Offer

How to request and parse connectionless credential offers via OpenID4VCI (OIDC).

[Start tutorial](./oidc/CredentialOffer.md)
