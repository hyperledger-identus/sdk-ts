[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PublishPayloadOf

# Type Alias: PublishPayloadOf\<T\>

> **PublishPayloadOf**\<`T`\> = `T` *extends* \{ `publish`: (`opts`: infer O) => `unknown`; \} ? `O` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:87](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/types.ts#L87)

Extract the `publish` payload type from a DID method instance type.
Resolves to `never` when the method does not support publishing.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
