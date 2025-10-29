[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / OptionalTypeToSchemaType

# Type Alias: OptionalTypeToSchemaType\<T\>

> **OptionalTypeToSchemaType**\<`T`\> = `T` *extends* `string` ? \{ `type`: `"string"`; \} : `T` *extends* `number` ? \{ `type`: `"number"`; \} : `T` *extends* `boolean` ? \{ `type`: `"boolean"`; \} : `never`

Defined in: [src/pluto/models/Schema.ts:32](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L32)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
