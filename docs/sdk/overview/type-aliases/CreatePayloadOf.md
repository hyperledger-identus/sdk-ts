[**@hyperledger/identus-sdk v8.1.1**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreatePayloadOf

# Type Alias: CreatePayloadOf\<T\>

> **CreatePayloadOf**\<`T`\> = `T` *extends* \{ `create`: (`opts`: infer O) => `unknown`; \} ? `O` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:81](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/castor/methods/types.ts#L81)

Extract the `create` payload type from a DID method instance type.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
