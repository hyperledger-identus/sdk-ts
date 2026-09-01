[**@hyperledger/identus-sdk v8.1.2**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / MethodNameOf

# Type Alias: MethodNameOf\<T\>

> **MethodNameOf**\<`T`\> = `T` *extends* \{ `method`: infer N; \} ? `N` *extends* `string` ? `N` : `never` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:74](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/types.ts#L74)

Extract the literal `method` name from a DID method instance type.
Falls back to `string` when the method field is not a string literal.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
