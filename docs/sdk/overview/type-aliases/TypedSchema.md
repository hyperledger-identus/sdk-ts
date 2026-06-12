[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / TypedSchema

# Type Alias: TypedSchema\<T\>

> **TypedSchema**\<`T`\> = \{ `encrypted`: `ModelPropertyNames`\<`T`\>[]; `indexes?`: `string`[]; `primaryKey`: `string`; `properties`: \{ \[K in "uuid" \| ModelRequiredKeys\<T\> \| ModelOptionalKeys\<T\>\]: K extends "uuid" ? \{ required: true; type: "string" \} : K extends ModelRequiredKeys\<T\> ? RequiredTypeToSchemaType\<T\[K\]\> : K extends ModelOptionalKeys\<T\> ? OptionalTypeToSchemaType\<T\[K\]\> : never \}; `type`: `string`; `version`: `number`; \}

Defined in: [packages/lib/sdk/src/pluto/types.ts:202](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/types.ts#L202)

Fully-typed RIDB schema derived from a Model interface `T`.

Used by schemaFactory to produce schemas whose `properties`
object mirrors the Model's fields with correct `type` and `required` flags.

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | A Model interface (e.g. [Models.Credential](../interfaces/Credential.md)). |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="property-encrypted"></a> `encrypted` | `ModelPropertyNames`\<`T`\>[] | [packages/lib/sdk/src/pluto/types.ts:203](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/types.ts#L203) |
| <a id="property-indexes"></a> `indexes?` | `string`[] | [packages/lib/sdk/src/pluto/types.ts:207](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/types.ts#L207) |
| <a id="property-primarykey"></a> `primaryKey` | `string` | [packages/lib/sdk/src/pluto/types.ts:205](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/types.ts#L205) |
| <a id="property-properties"></a> `properties` | \{ \[K in "uuid" \| ModelRequiredKeys\<T\> \| ModelOptionalKeys\<T\>\]: K extends "uuid" ? \{ required: true; type: "string" \} : K extends ModelRequiredKeys\<T\> ? RequiredTypeToSchemaType\<T\[K\]\> : K extends ModelOptionalKeys\<T\> ? OptionalTypeToSchemaType\<T\[K\]\> : never \} | [packages/lib/sdk/src/pluto/types.ts:208](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/types.ts#L208) |
| <a id="property-type"></a> `type` | `string` | [packages/lib/sdk/src/pluto/types.ts:206](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/types.ts#L206) |
| <a id="property-version"></a> `version` | `number` | [packages/lib/sdk/src/pluto/types.ts:204](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/types.ts#L204) |
