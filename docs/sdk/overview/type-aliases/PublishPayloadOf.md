[**@hyperledger/identus-sdk v8.1.2**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PublishPayloadOf

# Type Alias: PublishPayloadOf\<T\>

> **PublishPayloadOf**\<`T`\> = `T` *extends* \{ `publish`: (`opts`: infer O) => `unknown`; \} ? `O` : `never`

Defined in: [packages/lib/sdk/src/castor/methods/types.ts:87](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/castor/methods/types.ts#L87)

Extract the `publish` payload type from a DID method instance type.
Resolves to `never` when the method does not support publishing.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
