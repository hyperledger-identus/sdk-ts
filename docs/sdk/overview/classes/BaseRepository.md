[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / BaseRepository

# Abstract Class: BaseRepository\<T\>

Defined in: [src/pluto/repositories/builders/BaseRepository.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/BaseRepository.ts#L14)

BaseRepository

Encapsulate the functionality for interacting with the Store

## Extended by

- [`MapperRepository`](MapperRepository.md)
- [`LinkRepository`](LinkRepository.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Model`](../type-aliases/Model.md) |

## Constructors

### Constructor

> **new BaseRepository**\<`T`\>(`store`: [`Store`](../namespaces/Pluto/interfaces/Store.md), `name`: `string`): `BaseRepository`\<`T`\>

Defined in: [src/pluto/repositories/builders/BaseRepository.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/BaseRepository.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Store`](../namespaces/Pluto/interfaces/Store.md) |
| `name` | `string` |

#### Returns

`BaseRepository`\<`T`\>

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

***

### insert() {#insert}

> **insert**(`model`: `T`): `Promise`\<`T`\>

Defined in: [src/pluto/repositories/builders/BaseRepository.ts:32](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/BaseRepository.ts#L32)

Persist the Model in the Store.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | `T` |  |

#### Returns

`Promise`\<`T`\>

#### Throws

[Domain.PlutoError.StoreInsertError](../namespaces/Domain/namespaces/PlutoError/classes/StoreInsertError.md) if insert fails

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
