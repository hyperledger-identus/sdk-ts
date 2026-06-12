[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Key

# Interface: Key

Defined in: [packages/lib/sdk/src/pluto/models/Key.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Key.ts#L14)

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
| <a id="property-alias"></a> `alias?` | `string` | Optional alias for searching | - | [packages/lib/sdk/src/pluto/models/Key.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Key.ts#L23) |
| <a id="property-data"></a> `data` | `string` | All recorded key properties in a JSON string | - | [packages/lib/sdk/src/pluto/models/Key.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Key.ts#L19) |
| <a id="property-index"></a> `index?` | `number` | Optional index to search by keyIndex | - | [packages/lib/sdk/src/pluto/models/Key.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Key.ts#L27) |
| <a id="property-recoveryid"></a> `recoveryId` | `string` | - | - | [packages/lib/sdk/src/pluto/models/Key.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Key.ts#L15) |
| <a id="property-uuid"></a> `uuid` | `string` | Universally Unique Identifier. should be unique across all items. | `Model.uuid` | packages/shared/domain/build/index.d.ts:404 |
