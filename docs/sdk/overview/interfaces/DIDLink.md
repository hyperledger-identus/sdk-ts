[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DIDLink

# Interface: DIDLink

Defined in: [src/pluto/models/relationships/DIDLink.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/relationships/DIDLink.ts#L9)

Definition for DID -> DID relationships

## Extends

- [`Model`](../type-aliases/Model.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="alias"></a> `alias?` | `string` | Optional name for the relationship | - | [src/pluto/models/relationships/DIDLink.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/relationships/DIDLink.ts#L26) |
| <a id="hostid"></a> `hostId` | `string` | UUID of the host DID | - | [src/pluto/models/relationships/DIDLink.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/relationships/DIDLink.ts#L18) |
| <a id="role"></a> `role` | `number` | Relationship of the DIDs **See** DIDLink.role enum | - | [src/pluto/models/relationships/DIDLink.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/relationships/DIDLink.ts#L14) |
| <a id="targetid"></a> `targetId` | `string` | UUID of the target DID | - | [src/pluto/models/relationships/DIDLink.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/relationships/DIDLink.ts#L22) |
| <a id="uuid"></a> `uuid` | `string` | Universally Unique Identifier. should be unique across all items. | `Model.uuid` | [src/domain/buildingBlocks/Pluto.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L23) |
