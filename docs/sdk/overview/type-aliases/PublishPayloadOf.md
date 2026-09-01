[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PublishPayloadOf

# Type Alias: PublishPayloadOf\<T\>

> **PublishPayloadOf**\<`T`\> = `T` *extends* \{ `publish`: (`opts`: infer O) => `unknown`; \} ? `O` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:87](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/castor/methods/types.ts#L87)

Extract the `publish` payload type from a DID method instance type.
Resolves to `never` when the method does not support publishing.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
