[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / LinkRepository

# Abstract Class: LinkRepository\<K\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/LinkRepository.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/LinkRepository.ts#L10)

LinkRepository

Extends [BaseRepository](BaseRepository.md) to handle model relationships

## Extends

- [`BaseRepository`](BaseRepository.md)\<`K`\>

## Extended by

- [`DIDKeyLinkRepository`](DIDKeyLinkRepository.md)
- [`DIDLinkRepository`](DIDLinkRepository.md)

## Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* [`TableName`](../type-aliases/TableName.md) |

## Constructors

### Constructor

> **new LinkRepository**\<`K`\>(`store`: [`Store`](../namespaces/Pluto/interfaces/Store.md), `name`: `K`): `LinkRepository`\<`K`\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Store`](../namespaces/Pluto/interfaces/Store.md) |
| `name` | `K` |

#### Returns

`LinkRepository`\<`K`\>

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`constructor`](BaseRepository.md#constructor)

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

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`delete`](BaseRepository.md#delete)

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

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`getModels`](BaseRepository.md#getmodels)

***

### insert() {#insert}

> **insert**(`model`: [`OptionalId`](../type-aliases/OptionalId.md)\<[`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\]\>): `Promise`\<[`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\]\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/LinkRepository.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/LinkRepository.ts#L12)

Persist the Model in the Store.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | [`OptionalId`](../type-aliases/OptionalId.md)\<[`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\]\> | - |

#### Returns

`Promise`\<[`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\]\>

#### Throws

[Domain.PlutoError.StoreInsertError](../namespaces/Domain/namespaces/PlutoError/type-aliases/StoreInsertError.md) if insert fails

#### Overrides

[`BaseRepository`](BaseRepository.md).[`insert`](BaseRepository.md#insert)

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

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`update`](BaseRepository.md#update)
