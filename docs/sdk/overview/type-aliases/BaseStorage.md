[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / BaseStorage

# Type Alias: BaseStorage

> **BaseStorage** = *typeof* `BaseStorageCore`

Defined in: [packages/lib/sdk/src/pluto/types.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/pluto/types.ts#L22)

Abstract base-class for custom storage backends.

Provide a subclass of `BaseStorage` to [WithOptions.storageType](WithOptions.md#property-storagetype)
to persist data in a non-default location (e.g. filesystem, cloud).
