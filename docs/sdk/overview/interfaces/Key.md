[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Key

# Interface: Key

Defined in: [src/pluto/models/Key.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Key.ts#L12)

Definition for Key model
Represents [PrivateKey](../namespaces/Domain/classes/PrivateKey.md)

## See

 - Domain.Key
 - Domain.StorableKey

## Extends

- [`Model`](../type-aliases/Model.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="alias"></a> `alias?` | `string` | Optional name | - | [src/pluto/models/Key.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Key.ts#L21) |
| <a id="index"></a> `index?` | `number` | - | - | [src/pluto/models/Key.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Key.ts#L22) |
| <a id="rawhex"></a> `rawHex` | `string` | Hex encoded Key.raw | - | [src/pluto/models/Key.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Key.ts#L17) |
| <a id="recoveryid"></a> `recoveryId` | `string` | - | - | [src/pluto/models/Key.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Key.ts#L13) |
| <a id="uuid"></a> `uuid` | `string` | Universally Unique Identifier. should be unique across all items. | `Model.uuid` | [src/domain/buildingBlocks/Pluto.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L23) |
