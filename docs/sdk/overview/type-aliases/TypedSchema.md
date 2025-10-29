[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / TypedSchema

# Type Alias: TypedSchema\<T\>

> **TypedSchema**\<`T`\> = \{ `encrypted`: [`ModelPropertyNames`](ModelPropertyNames.md)\<`T`\>[]; `indexes?`: `string`[]; `primaryKey`: `string`; `properties`: \{ \[K in "uuid" \| ModelRequiredKeys\<T\> \| ModelOptionalKeys\<T\>\]: K extends "uuid" ? \{ maxLength: 60; required: true; type: "string" \} : K extends ModelRequiredKeys\<T\> ? RequiredTypeToSchemaType\<T\[K\]\> : K extends ModelOptionalKeys\<T\> ? OptionalTypeToSchemaType\<T\[K\]\> : never \}; `type`: `string`; `version`: `number`; \}

Defined in: [src/pluto/models/Schema.ts:39](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L39)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="encrypted"></a> `encrypted` | [`ModelPropertyNames`](ModelPropertyNames.md)\<`T`\>[] | [src/pluto/models/Schema.ts:40](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L40) |
| <a id="indexes"></a> `indexes?` | `string`[] | [src/pluto/models/Schema.ts:44](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L44) |
| <a id="primarykey"></a> `primaryKey` | `string` | [src/pluto/models/Schema.ts:42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L42) |
| <a id="properties"></a> `properties` | \{ \[K in "uuid" \| ModelRequiredKeys\<T\> \| ModelOptionalKeys\<T\>\]: K extends "uuid" ? \{ maxLength: 60; required: true; type: "string" \} : K extends ModelRequiredKeys\<T\> ? RequiredTypeToSchemaType\<T\[K\]\> : K extends ModelOptionalKeys\<T\> ? OptionalTypeToSchemaType\<T\[K\]\> : never \} | [src/pluto/models/Schema.ts:45](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L45) |
| <a id="type"></a> `type` | `string` | [src/pluto/models/Schema.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L43) |
| <a id="version"></a> `version` | `number` | [src/pluto/models/Schema.ts:41](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L41) |
