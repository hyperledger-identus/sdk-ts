[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [StorableKey](../README.md) / recoveryId

# Variable: recoveryId()

> `const` **recoveryId**: (`algorithm`: [`algorithm`](../namespaces/RecoveryId/type-aliases/algorithm.md), ...`suffix`: [`suffix`](../namespaces/RecoveryId/type-aliases/suffix.md)[]) => `string`

Defined in: packages/shared/domain/build/index.d.ts:624

Factory for RecoveryId.
Nomenclature:
  - algorithm first
  - arbitrary suffixes for customisation
  - separated by "+"

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `algorithm` | [`algorithm`](../namespaces/RecoveryId/type-aliases/algorithm.md) | - |
| ...`suffix` | [`suffix`](../namespaces/RecoveryId/type-aliases/suffix.md)[] | - |

## Returns

`string`
