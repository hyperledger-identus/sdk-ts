[**@hyperledger/identus-sdk v8.1.3**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / BaseStorage

# Type Alias: BaseStorage

> **BaseStorage** = *typeof* `BaseStorageCore`

Defined in: [packages/lib/sdk/src/pluto/types.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4ce15c3080f44e7e00a0b9a53e696f0a8ec66794/packages/lib/sdk/src/pluto/types.ts#L22)

Abstract base-class for custom storage backends.

Provide a subclass of `BaseStorage` to [WithOptions.storageType](WithOptions.md#property-storagetype)
to persist data in a non-default location (e.g. filesystem, cloud).
