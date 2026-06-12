[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Issuance

# Interface: Issuance

Defined in: [packages/lib/sdk/src/pluto/models/Issuance.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Issuance.ts#L23)

Model for credential issuance records.

Tracks the claims, format, and issuing DID for a credential
that is being (or has been) issued.  The `claims` array is
encrypted at rest.

## Extends

- [`Model`](../type-aliases/Model.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-automaticissuance"></a> `automaticIssuance?` | `boolean` | Whether the credential should be issued automatically. | - | [packages/lib/sdk/src/pluto/models/Issuance.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Issuance.ts#L31) |
| <a id="property-claims"></a> `claims` | [`Claim`](Claim.md)[] | Set of claims to include in the issued credential. | - | [packages/lib/sdk/src/pluto/models/Issuance.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Issuance.ts#L27) |
| <a id="property-credentialformat"></a> `credentialFormat` | `string` | Credential format identifier (e.g. `"jwt"`, `"anoncreds"`). | - | [packages/lib/sdk/src/pluto/models/Issuance.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Issuance.ts#L29) |
| <a id="property-id"></a> `id` | `string` | Application-defined identifier for this issuance. | - | [packages/lib/sdk/src/pluto/models/Issuance.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Issuance.ts#L25) |
| <a id="property-issuingdid"></a> `issuingDID` | `string` | DID of the issuer. | - | [packages/lib/sdk/src/pluto/models/Issuance.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Issuance.ts#L33) |
| <a id="property-uuid"></a> `uuid` | `string` | Universally Unique Identifier. should be unique across all items. | `Model.uuid` | packages/shared/domain/build/index.d.ts:404 |
