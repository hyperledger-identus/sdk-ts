[**@hyperledger/identus-sdk v8.1.3**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreatePayloadOf

# Type Alias: CreatePayloadOf\<T\>

> **CreatePayloadOf**\<`T`\> = `T` *extends* \{ `create`: (`opts`: infer O) => `unknown`; \} ? `O` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:81](https://github.com/hyperledger-identus/sdk-ts/blob/4ce15c3080f44e7e00a0b9a53e696f0a8ec66794/packages/lib/sdk/src/castor/methods/types.ts#L81)

Extract the `create` payload type from a DID method instance type.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
