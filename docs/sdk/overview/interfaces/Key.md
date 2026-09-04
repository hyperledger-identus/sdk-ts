[**@hyperledger/identus-sdk v8.1.2**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Key

# Interface: Key

Defined in: [packages/lib/sdk/src/pluto/models/Key.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/pluto/models/Key.ts#L14)

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
| <a id="property-alias"></a> `alias?` | `string` | Optional alias for searching | - | [packages/lib/sdk/src/pluto/models/Key.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/pluto/models/Key.ts#L23) |
| <a id="property-data"></a> `data` | `string` | All recorded key properties in a JSON string | - | [packages/lib/sdk/src/pluto/models/Key.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/pluto/models/Key.ts#L19) |
| <a id="property-index"></a> `index?` | `number` | Optional index to search by keyIndex | - | [packages/lib/sdk/src/pluto/models/Key.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/pluto/models/Key.ts#L27) |
| <a id="property-recoveryid"></a> `recoveryId` | `string` | - | - | [packages/lib/sdk/src/pluto/models/Key.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/pluto/models/Key.ts#L15) |
| <a id="property-uuid"></a> `uuid` | `string` | Universally Unique Identifier. should be unique across all items. | `Model.uuid` | packages/shared/domain/build/index.d.ts:404 |
