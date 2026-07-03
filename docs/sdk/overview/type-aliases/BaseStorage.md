[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / BaseStorage

# Type Alias: BaseStorage

> **BaseStorage** = *typeof* `BaseStorageCore`

Defined in: [packages/lib/sdk/src/pluto/types.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/pluto/types.ts#L22)

Abstract base-class for custom storage backends.

Provide a subclass of `BaseStorage` to [WithOptions.storageType](WithOptions.md#property-storagetype)
to persist data in a non-default location (e.g. filesystem, cloud).
