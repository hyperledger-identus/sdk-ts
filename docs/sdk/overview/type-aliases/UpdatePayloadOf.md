[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / UpdatePayloadOf

# Type Alias: UpdatePayloadOf\<T\>

> **UpdatePayloadOf**\<`T`\> = `T` *extends* \{ `update`: (`opts`: infer O) => `unknown`; \} ? `O` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:93](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/types.ts#L93)

Extract the `update` payload type from a DID method instance type.
Resolves to `never` when the method does not support updating.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
