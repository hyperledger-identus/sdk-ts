[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / QuerySelector

# Type Alias: QuerySelector\<DocType\>

> **QuerySelector**\<`DocType`\> = `Partial`\<\{ \[Property in Paths\<DocType\>\]: QueryOperators\<any\> \| PropertyType\<DocType, Property\> \}\> & \{ `$and?`: `QuerySelector`\<`DocType`\>[]; `$nor?`: `QuerySelector`\<`DocType`\>[]; `$or?`: `QuerySelector`\<`DocType`\>[]; \}

Defined in: [src/pluto/types.ts:56](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/types.ts#L56)

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `$and?` | `QuerySelector`\<`DocType`\>[] | [src/pluto/types.ts:59](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/types.ts#L59) |
| `$nor?` | `QuerySelector`\<`DocType`\>[] | [src/pluto/types.ts:61](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/types.ts#L61) |
| `$or?` | `QuerySelector`\<`DocType`\>[] | [src/pluto/types.ts:60](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/types.ts#L60) |

## Type Parameters

| Type Parameter |
| ------ |
| `DocType` |
