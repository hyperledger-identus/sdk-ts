[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / schemaFactory

# Function: schemaFactory()

> **schemaFactory**\<`T`\>(`generator`: (`schema`: [`SchemaGenerator`](../interfaces/SchemaGenerator.md)\<`T`\>) => `void`): [`TypedSchema`](../type-aliases/TypedSchema.md)\<`T`\>

Defined in: [src/pluto/models/Schema.ts:82](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L82)

helper for creating Schemas
handle repetitive and improve type safety

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `generator` | (`schema`: [`SchemaGenerator`](../interfaces/SchemaGenerator.md)\<`T`\>) => `void` |  |

## Returns

[`TypedSchema`](../type-aliases/TypedSchema.md)\<`T`\>
