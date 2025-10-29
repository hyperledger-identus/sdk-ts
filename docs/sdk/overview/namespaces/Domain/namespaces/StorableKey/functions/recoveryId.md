[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [StorableKey](../README.md) / recoveryId

# Function: recoveryId()

> **recoveryId**(`algorithm`: [`algorithm`](../namespaces/RecoveryId/type-aliases/algorithm.md), ...`suffix`: [`privacy`](../namespaces/RecoveryId/type-aliases/privacy.md)[]): `string`

Defined in: [src/domain/models/keyManagement/StorableKey.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/StorableKey.ts#L26)

Factory for RecoveryId.
Nomenclature:
  - algorithm first
  - arbitrary suffixes for customisation
  - separated by "+"

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `algorithm` | [`algorithm`](../namespaces/RecoveryId/type-aliases/algorithm.md) |  |
| ...`suffix` | [`privacy`](../namespaces/RecoveryId/type-aliases/privacy.md)[] |  |

## Returns

`string`
