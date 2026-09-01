[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CollectionSchemas

# Type Alias: CollectionSchemas

> **CollectionSchemas** = `{ [K in keyof Collections]: Collections[K] extends { schema: infer S extends SchemaType } ? S : never }`

Defined in: [packages/lib/sdk/src/pluto/types.ts:93](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/pluto/types.ts#L93)

Maps each collection name to its concrete SchemaType.

Derived from the `schema` property of each entry in [Collections](Collections.md).
Used to parameterise [Query](Query.md) so that selectors are type-checked
against the real schema shape.
