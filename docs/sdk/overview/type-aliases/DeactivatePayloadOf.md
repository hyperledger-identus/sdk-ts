[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DeactivatePayloadOf

# Type Alias: DeactivatePayloadOf\<T\>

> **DeactivatePayloadOf**\<`T`\> = `T` *extends* \{ `deactivate`: (`opts`: infer O) => `unknown`; \} ? `O` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:99](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/types.ts#L99)

Extract the `deactivate` payload type from a DID method instance type.
Resolves to `never` when the method does not support deactivating.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
