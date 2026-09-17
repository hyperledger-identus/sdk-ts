[**@hyperledger/identus-sdk v8.1.3**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PublishPayloadOf

# Type Alias: PublishPayloadOf\<T\>

> **PublishPayloadOf**\<`T`\> = `T` *extends* \{ `publish`: (`opts`: infer O) => `unknown`; \} ? `O` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:87](https://github.com/hyperledger-identus/sdk-ts/blob/4ce15c3080f44e7e00a0b9a53e696f0a8ec66794/packages/lib/sdk/src/castor/methods/types.ts#L87)

Extract the `publish` payload type from a DID method instance type.
Resolves to `never` when the method does not support publishing.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
