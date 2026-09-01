[**@hyperledger/identus-sdk v8.1.2**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / UpdatePayloadOf

# Type Alias: UpdatePayloadOf\<T\>

> **UpdatePayloadOf**\<`T`\> = `T` *extends* \{ `update`: (`opts`: infer O) => `unknown`; \} ? `O` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:93](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/types.ts#L93)

Extract the `update` payload type from a DID method instance type.
Resolves to `never` when the method does not support updating.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
