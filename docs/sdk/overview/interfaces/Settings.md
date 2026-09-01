[**@hyperledger/identus-sdk v8.1.2**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Settings

# Interface: Settings

Defined in: [packages/lib/sdk/src/pluto/models/Settings.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/pluto/models/Settings.ts#L9)

Model for persisting arbitrary key-value settings.

The `value` field is encrypted at rest.

## Extends

- [`Model`](../type-aliases/Model.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-id"></a> `id` | `string` | Application-defined identifier. | - | [packages/lib/sdk/src/pluto/models/Settings.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/pluto/models/Settings.ts#L11) |
| <a id="property-key"></a> `key` | `string` | Setting name / lookup key. | - | [packages/lib/sdk/src/pluto/models/Settings.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/pluto/models/Settings.ts#L13) |
| <a id="property-uuid"></a> `uuid` | `string` | Universally Unique Identifier. should be unique across all items. | `Model.uuid` | packages/shared/domain/build/index.d.ts:404 |
| <a id="property-value"></a> `value` | `string` | Setting payload (encrypted at rest). | - | [packages/lib/sdk/src/pluto/models/Settings.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/pluto/models/Settings.ts#L15) |
