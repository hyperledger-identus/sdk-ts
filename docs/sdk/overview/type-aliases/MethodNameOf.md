[**@hyperledger/identus-sdk v8.1.1**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / MethodNameOf

# Type Alias: MethodNameOf\<T\>

> **MethodNameOf**\<`T`\> = `T` *extends* \{ `method`: infer N; \} ? `N` *extends* `string` ? `N` : `never` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:74](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/castor/methods/types.ts#L74)

Extract the literal `method` name from a DID method instance type.
Falls back to `string` when the method field is not a string literal.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
