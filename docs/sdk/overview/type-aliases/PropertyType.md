[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PropertyType

# Type Alias: PropertyType\<Type, Property\>

> **PropertyType**\<`Type`, `Property`\> = `string` *extends* `Property` ? `unknown` : `Property` *extends* keyof `Type` ? `Type`\[`Property`\] : `Property` *extends* `` `${number}` `` ? `Type` *extends* `ReadonlyArray`\<infer ArrayType\> ? `ArrayType` : `unknown` : `Property` *extends* `` `${infer Key}.${infer Rest}` `` ? `Key` *extends* `` `${number}` `` ? `Type` *extends* `ReadonlyArray`\<infer ArrayType\> ? `PropertyType`\<`ArrayType`, `Rest`\> : `unknown` : `Key` *extends* keyof `Type` ? `Type`\[`Key`\] *extends* `Map`\<`string`, infer MapType\> ? `MapType` : `PropertyType`\<`Type`\[`Key`\], `Rest`\> : `unknown` : `unknown`

Defined in: [src/pluto/types.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/types.ts#L6)

## Type Parameters

| Type Parameter |
| ------ |
| `Type` |
| `Property` *extends* `string` |
