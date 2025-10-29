[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / RequiredKeys

# Type Alias: RequiredKeys\<T\>

> **RequiredKeys**\<`T`\> = `{ [K in keyof T]-?: {} extends Pick<T, K> ? never : K }`\[keyof `T`\]

Defined in: [src/pluto/models/Schema.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L9)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
