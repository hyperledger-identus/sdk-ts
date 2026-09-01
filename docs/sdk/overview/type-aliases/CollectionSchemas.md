[**@hyperledger/identus-sdk v8.1.2**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CollectionSchemas

# Type Alias: CollectionSchemas

> **CollectionSchemas** = `{ [K in keyof Collections]: Collections[K] extends { schema: infer S extends SchemaType } ? S : never }`

Defined in: [packages/lib/sdk/src/pluto/types.ts:93](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/pluto/types.ts#L93)

Maps each collection name to its concrete SchemaType.

Derived from the `schema` property of each entry in [Collections](Collections.md).
Used to parameterise [Query](Query.md) so that selectors are type-checked
against the real schema shape.
