[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / KeysOf

# Type Alias: KeysOf\<T, X\>

> **KeysOf**\<`T`, `X`\> = `{ [K in keyof T]-?: X extends T[K] ? K : never }`\[[`StringKeys`](StringKeys.md)\<`T`\>\]

Defined in: [src/pluto/models/Schema.ts:56](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L56)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `X` |
