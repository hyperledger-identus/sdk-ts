[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Paths

# Type Alias: Paths\<T, D\>

> **Paths**\<`T`, `D`\> = \[`D`\] *extends* \[`never`\] ? `never` : `T` *extends* `object` ? \{ \[K in keyof T\]-?: K extends string \| number ? \`$\{K\}\` \| (Paths\<T\[K\], Prev\[D\]\> extends infer R ? Join\<K, R\> : never) : never \}\[keyof `T`\] : `""`

Defined in: [src/pluto/types.ts:50](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/types.ts#L50)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `D` *extends* `number` | `10` |
