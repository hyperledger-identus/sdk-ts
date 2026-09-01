[**@hyperledger/identus-sdk v8.1.2**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DIDMethodOperation

# Type Alias: DIDMethodOperation\<TMetadata, TRes\>

> **DIDMethodOperation**\<`TMetadata`, `TRes`\> = `TRes`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/types.ts#L8)

Generic wrapper for the return value of lifecycle operations
(`publish`, `update`, `deactivate`).
By default it resolves to `TMetadata` itself, but the second type
parameter can override the concrete result type.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TMetadata` | `unknown` |
| `TRes` | `TMetadata` |
