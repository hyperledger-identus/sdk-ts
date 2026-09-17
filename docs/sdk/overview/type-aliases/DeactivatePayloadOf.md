[**@hyperledger/identus-sdk v8.1.3**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DeactivatePayloadOf

# Type Alias: DeactivatePayloadOf\<T\>

> **DeactivatePayloadOf**\<`T`\> = `T` *extends* \{ `deactivate`: (`opts`: infer O) => `unknown`; \} ? `O` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:99](https://github.com/hyperledger-identus/sdk-ts/blob/4ce15c3080f44e7e00a0b9a53e696f0a8ec66794/packages/lib/sdk/src/castor/methods/types.ts#L99)

Extract the `deactivate` payload type from a DID method instance type.
Resolves to `never` when the method does not support deactivating.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
