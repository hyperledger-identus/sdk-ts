[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / QueryType

# Type Alias: QueryType\<T\>

> **QueryType**\<`T`\> = `{ [K in keyof T["properties"] as ExtractType<T["properties"][K]["type"]> extends undefined ? never : K]?: OperatorOrType<ExtractType<T["properties"][K]["type"]>> }` & `LogicalOperators`\<`T`\> \| `LogicalOperators`\<`T`\>[]

Defined in: node\_modules/@trust0/ridb-core/build/ridb\_core.d.ts:97

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `SchemaType` |
