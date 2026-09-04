[**@hyperledger/identus-sdk v8.1.2**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CreatePayloadOf

# Type Alias: CreatePayloadOf\<T\>

> **CreatePayloadOf**\<`T`\> = `T` *extends* \{ `create`: (`opts`: infer O) => `unknown`; \} ? `O` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:81](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/types.ts#L81)

Extract the `create` payload type from a DID method instance type.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
