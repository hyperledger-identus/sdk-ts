[**@hyperledger/identus-sdk**](../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../README.md) / [overview](../../../../README.md) / [Domain](../../README.md) / StorableKey

# StorableKey

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [RecoveryId](namespaces/RecoveryId.md) | - |

## Functions

### recoveryId()

> **recoveryId**(`algorithm`: [`algorithm`](namespaces/RecoveryId.md#algorithm), ...`suffix`: [`privacy`](namespaces/RecoveryId.md#privacy)[]): `string`

Defined in: [src/domain/models/keyManagement/StorableKey.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/StorableKey.ts#L26)

Factory for RecoveryId.
Nomenclature:
  - algorithm first
  - arbitrary suffixes for customisation
  - separated by "+"

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `algorithm` | [`algorithm`](namespaces/RecoveryId.md#algorithm) |  |
| ...`suffix` | [`privacy`](namespaces/RecoveryId.md#privacy)[] |  |

#### Returns

`string`
