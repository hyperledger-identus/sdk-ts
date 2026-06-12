[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / BaseRepository

# Abstract Class: BaseRepository\<K\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts#L14)

BaseRepository

Encapsulate the functionality for interacting with the Store

## Extended by

- [`MapperRepository`](MapperRepository.md)
- [`LinkRepository`](LinkRepository.md)

## Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* [`TableName`](../type-aliases/TableName.md) |

## Constructors

### Constructor

> **new BaseRepository**\<`K`\>(`store`: [`Store`](../namespaces/Pluto/interfaces/Store.md), `name`: `K`): `BaseRepository`\<`K`\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Store`](../namespaces/Pluto/interfaces/Store.md) |
| `name` | `K` |

#### Returns

`BaseRepository`\<`K`\>

## Methods

### delete() {#delete}

> **delete**(`uuid`: `string`): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts#L53)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `uuid` | `string` |

#### Returns

`Promise`\<`void`\>

***

### getModels() {#getmodels}

> **getModels**(`query?`: [`Query`](../type-aliases/Query.md)\<[`CollectionSchemas`](../type-aliases/CollectionSchemas.md)\[`K`\]\>): `Promise`\<[`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\][]\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts:87](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts#L87)

Search the Store for Models

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query?` | [`Query`](../type-aliases/Query.md)\<[`CollectionSchemas`](../type-aliases/CollectionSchemas.md)\[`K`\]\> | a Query object, a set of values and operators defining the query |

#### Returns

`Promise`\<[`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\][]\>

Array of matched Models

#### See

../types.ts

#### Examples

search for a model with uuid and name
```ts
  repo.getModels({ selector: { uuid: "1", name: "eg" }})
```

search for models with uuid of 1 or 2
```ts
  repo.getModels({ selector: { $or: [{ uuid: "1" }, { uuid: "2" }] }})
```

search for all models
```ts
  repo.getModels()
```

#### Throws

Domain.Models if the query fails

***

### insert() {#insert}

> **insert**(`model`: [`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\]): `Promise`\<[`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\]\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts#L32)

Persist the Model in the Store.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | [`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\] | - |

#### Returns

`Promise`\<[`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\]\>

#### Throws

[Domain.PlutoError.StoreInsertError](../namespaces/Domain/namespaces/PlutoError/type-aliases/StoreInsertError.md) if insert fails

***

### update() {#update}

> **update**(`model`: [`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\]): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts#L44)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\] |

#### Returns

`Promise`\<`void`\>
