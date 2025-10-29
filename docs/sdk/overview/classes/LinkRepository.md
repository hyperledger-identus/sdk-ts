[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / LinkRepository

# Abstract Class: LinkRepository\<T\>

Defined in: [src/pluto/repositories/builders/LinkRepository.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/LinkRepository.ts#L9)

LinkRepository

Extends [BaseRepository](BaseRepository.md) to handle model relationships

## Extends

- [`BaseRepository`](BaseRepository.md)\<`T`\>

## Extended by

- [`DIDKeyLinkRepository`](DIDKeyLinkRepository.md)
- [`DIDLinkRepository`](DIDLinkRepository.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Storable`](../namespaces/Domain/namespaces/Pluto/interfaces/Storable.md) |

## Constructors

### Constructor

> **new LinkRepository**\<`T`\>(`store`: [`Store`](../namespaces/Pluto/interfaces/Store.md), `name`: `string`): `LinkRepository`\<`T`\>

Defined in: [src/pluto/repositories/builders/BaseRepository.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/BaseRepository.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Store`](../namespaces/Pluto/interfaces/Store.md) |
| `name` | `string` |

#### Returns

`LinkRepository`\<`T`\>

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`constructor`](BaseRepository.md#constructor)

## Methods

### delete() {#delete}

> **delete**(`uuid`: `string`): `Promise`\<`void`\>

Defined in: [src/pluto/repositories/builders/BaseRepository.ts:52](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/BaseRepository.ts#L52)

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

> **getModels**(`query?`: [`Query`](../type-aliases/Query.md)\<`T`\>): `Promise`\<`T`[]\>

Defined in: [src/pluto/repositories/builders/BaseRepository.ts:86](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/BaseRepository.ts#L86)

Search the Store for Models

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query?` | [`Query`](../type-aliases/Query.md)\<`T`\> | a Query object, a set of values and operators defining the query |

#### Returns

`Promise`\<`T`[]\>

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

[Domain.Models](../namespaces/Domain/namespaces/Models/README.md) if the query fails

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`getModels`](BaseRepository.md#getmodels)

***

### insert() {#insert}

> **insert**(`model`: [`OptionalId`](../type-aliases/OptionalId.md)\<`T`\>): `Promise`\<`T`\>

Defined in: [src/pluto/repositories/builders/LinkRepository.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/LinkRepository.ts#L12)

Persist the Model in the Store.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | [`OptionalId`](../type-aliases/OptionalId.md)\<`T`\> |  |

#### Returns

`Promise`\<`T`\>

#### Throws

[Domain.PlutoError.StoreInsertError](../namespaces/Domain/namespaces/PlutoError/classes/StoreInsertError.md) if insert fails

#### Overrides

[`BaseRepository`](BaseRepository.md).[`insert`](BaseRepository.md#insert)

***

### update() {#update}

> **update**(`model`: `T`): `Promise`\<`void`\>

Defined in: [src/pluto/repositories/builders/BaseRepository.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/BaseRepository.ts#L43)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | `T` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`update`](BaseRepository.md#update)
