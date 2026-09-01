[**@hyperledger/identus-sdk v8.1.1**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / BaseStorage

# Type Alias: BaseStorage

> **BaseStorage** = *typeof* `BaseStorageCore`

Defined in: [packages/lib/sdk/src/pluto/types.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/pluto/types.ts#L22)

Abstract base-class for custom storage backends.

Provide a subclass of `BaseStorage` to [WithOptions.storageType](WithOptions.md#property-storagetype)
to persist data in a non-default location (e.g. filesystem, cloud).
