[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DIDKeyLink

# Interface: DIDKeyLink

Defined in: [src/pluto/models/relationships/DIDKeyLink.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/relationships/DIDKeyLink.ts#L9)

Definition for DID -> Key relationships

## Extends

- [`Model`](../type-aliases/Model.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="alias"></a> `alias?` | `string` | Optional name for the relationship | - | [src/pluto/models/relationships/DIDKeyLink.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/relationships/DIDKeyLink.ts#L21) |
| <a id="didid"></a> `didId` | `string` | UUID of DID | - | [src/pluto/models/relationships/DIDKeyLink.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/relationships/DIDKeyLink.ts#L13) |
| <a id="keyid"></a> `keyId` | `string` | UUID of Key | - | [src/pluto/models/relationships/DIDKeyLink.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/relationships/DIDKeyLink.ts#L17) |
| <a id="uuid"></a> `uuid` | `string` | Universally Unique Identifier. should be unique across all items. | `Model.uuid` | [src/domain/buildingBlocks/Pluto.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L23) |
