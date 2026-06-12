[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DIDLink

# Interface: DIDLink

Defined in: [packages/lib/sdk/src/pluto/models/relationships/DIDLink.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/relationships/DIDLink.ts#L9)

Definition for DID -> DID relationships

## Extends

- [`Model`](../type-aliases/Model.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-alias"></a> `alias?` | `string` | Optional name for the relationship | - | [packages/lib/sdk/src/pluto/models/relationships/DIDLink.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/relationships/DIDLink.ts#L26) |
| <a id="property-hostid"></a> `hostId` | `string` | UUID of the host DID | - | [packages/lib/sdk/src/pluto/models/relationships/DIDLink.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/relationships/DIDLink.ts#L18) |
| <a id="property-role"></a> `role` | `number` | Relationship of the DIDs **See** DIDLink.role enum | - | [packages/lib/sdk/src/pluto/models/relationships/DIDLink.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/relationships/DIDLink.ts#L14) |
| <a id="property-targetid"></a> `targetId` | `string` | UUID of the target DID | - | [packages/lib/sdk/src/pluto/models/relationships/DIDLink.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/relationships/DIDLink.ts#L22) |
| <a id="property-uuid"></a> `uuid` | `string` | Universally Unique Identifier. should be unique across all items. | `Model.uuid` | packages/shared/domain/build/index.d.ts:404 |
