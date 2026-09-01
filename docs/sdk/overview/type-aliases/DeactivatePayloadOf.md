[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DeactivatePayloadOf

# Type Alias: DeactivatePayloadOf\<T\>

> **DeactivatePayloadOf**\<`T`\> = `T` *extends* \{ `deactivate`: (`opts`: infer O) => `unknown`; \} ? `O` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:99](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/types.ts#L99)

Extract the `deactivate` payload type from a DID method instance type.
Resolves to `never` when the method does not support deactivating.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
