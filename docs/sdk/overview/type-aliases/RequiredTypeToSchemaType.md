[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / RequiredTypeToSchemaType

# Type Alias: RequiredTypeToSchemaType\<T\>

> **RequiredTypeToSchemaType**\<`T`\> = `T` *extends* `string` ? \{ `required`: `true`; `type`: `"string"`; \} : `T` *extends* `number` ? \{ `required`: `true`; `type`: `"number"`; \} : `T` *extends* `boolean` ? \{ `required`: `true`; `type`: `"boolean"`; \} : `never`

Defined in: [src/pluto/models/Schema.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L25)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
