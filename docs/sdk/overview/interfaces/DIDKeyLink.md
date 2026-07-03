[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DIDKeyLink

# Interface: DIDKeyLink

Defined in: [packages/lib/sdk/src/pluto/models/relationships/DIDKeyLink.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/pluto/models/relationships/DIDKeyLink.ts#L9)

Definition for DID -> Key relationships

## Extends

- [`Model`](../type-aliases/Model.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-alias"></a> `alias?` | `string` | Optional name for the relationship | - | [packages/lib/sdk/src/pluto/models/relationships/DIDKeyLink.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/pluto/models/relationships/DIDKeyLink.ts#L21) |
| <a id="property-didid"></a> `didId` | `string` | UUID of DID | - | [packages/lib/sdk/src/pluto/models/relationships/DIDKeyLink.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/pluto/models/relationships/DIDKeyLink.ts#L13) |
| <a id="property-keyid"></a> `keyId` | `string` | UUID of Key | - | [packages/lib/sdk/src/pluto/models/relationships/DIDKeyLink.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/pluto/models/relationships/DIDKeyLink.ts#L17) |
| <a id="property-uuid"></a> `uuid` | `string` | Universally Unique Identifier. should be unique across all items. | `Model.uuid` | packages/shared/domain/build/index.d.ts:404 |
