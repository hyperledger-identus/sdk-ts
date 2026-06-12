[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreatePayloadOf

# Type Alias: CreatePayloadOf\<T\>

> **CreatePayloadOf**\<`T`\> = `T` *extends* \{ `create`: (`opts`: infer O) => `unknown`; \} ? `O` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:81](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/types.ts#L81)

Extract the `create` payload type from a DID method instance type.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
