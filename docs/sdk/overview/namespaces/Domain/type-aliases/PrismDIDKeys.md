[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / PrismDIDKeys

# Type Alias: PrismDIDKeys

> **PrismDIDKeys** = `Partial`\<`Record`\<keyof *typeof* [`PrismDIDKeyUsage`](../variables/PrismDIDKeyUsage.md), ([`PublicKey`](../classes/PublicKey.md) \| [`KeyPair`](../classes/KeyPair.md))[]\>\>

Defined in: packages/shared/domain/build/index.d.ts:2393

Maps PrismDIDKeyUsage member names to arrays of public keys.
Used to assign keys to the correct verification relationships when creating a Prism DID.

## Example

```ts
{ ISSUING_KEY: [issuingPublicKey], AUTHENTICATION_KEY: [authPublicKey] }
```
