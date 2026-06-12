[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / SchemaGenerator

# Interface: SchemaGenerator\<T\>

Defined in: [packages/lib/sdk/src/pluto/types.ts:260](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/types.ts#L260)

Builder interface used inside schemaFactory callbacks
to declaratively define a Model's schema.

## Example

```ts
schemaFactory<MyModel>(schema => {
  schema.addProperty("string", "name");
  schema.setRequired("name");
  schema.setEncrypted("name");
  schema.setVersion(1);
});
```

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` | The Model interface the schema describes. |

## Methods

### addProperty() {#addproperty}

#### Call Signature

> **addProperty**\<`P`\>(`type`: `P`, `key`: `KeysFor`\<`T`, `P`\>, `opts?`: `any`): `void`

Defined in: [packages/lib/sdk/src/pluto/types.ts:262](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/types.ts#L262)

Register a property with a RIDB field type.

##### Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* `"string"` \| `"number"` \| `"boolean"` \| `"object"` \| `"array"` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `P` |
| `key` | `KeysFor`\<`T`, `P`\> |
| `opts?` | `any` |

##### Returns

`void`

#### Call Signature

> **addProperty**(`type`: `"string"` \| `"number"` \| `"boolean"` \| `"object"` \| `"array"`, `key`: `string`, `opts?`: `any`): `void`

Defined in: [packages/lib/sdk/src/pluto/types.ts:263](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/types.ts#L263)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `"string"` \| `"number"` \| `"boolean"` \| `"object"` \| `"array"` |
| `key` | `string` |
| `opts?` | `any` |

##### Returns

`void`

***

### setEncrypted() {#setencrypted}

> **setEncrypted**\<`K`\>(...`keys`: `K`[]): `K`[]

Defined in: [packages/lib/sdk/src/pluto/types.ts:265](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/types.ts#L265)

Mark one or more properties as encrypted-at-rest.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`keys` | `K`[] |

#### Returns

`K`[]

***

### setRequired() {#setrequired}

> **setRequired**(...`keys`: `Exclude`\<`Extract`\<keyof `T`, `string`\>, `"uuid"`\>[]): `void`

Defined in: [packages/lib/sdk/src/pluto/types.ts:267](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/types.ts#L267)

Mark one or more properties as required.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`keys` | `Exclude`\<`Extract`\<keyof `T`, `string`\>, `"uuid"`\>[] |

#### Returns

`void`

***

### setVersion() {#setversion}

> **setVersion**(`version`: `number`): `void`

Defined in: [packages/lib/sdk/src/pluto/types.ts:269](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/types.ts#L269)

Set the schema version (used for migrations).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `version` | `number` |

#### Returns

`void`
