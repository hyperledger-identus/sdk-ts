[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DIDKeyLinkRepository

# Class: DIDKeyLinkRepository

Defined in: [src/pluto/repositories/relationships/DIDKeyLinkRepository.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/relationships/DIDKeyLinkRepository.ts#L5)

LinkRepository

Extends [BaseRepository](BaseRepository.md) to handle model relationships

## Extends

- [`LinkRepository`](LinkRepository.md)\<[`DIDKeyLink`](../interfaces/DIDKeyLink.md)\>

## Constructors

### Constructor

> **new DIDKeyLinkRepository**(`store`: [`Store`](../namespaces/Pluto/interfaces/Store.md)): `DIDKeyLinkRepository`

Defined in: [src/pluto/repositories/relationships/DIDKeyLinkRepository.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/relationships/DIDKeyLinkRepository.ts#L6)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Store`](../namespaces/Pluto/interfaces/Store.md) |

#### Returns

`DIDKeyLinkRepository`

#### Overrides

[`LinkRepository`](LinkRepository.md).[`constructor`](LinkRepository.md#constructor)

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

[`LinkRepository`](LinkRepository.md).[`delete`](LinkRepository.md#delete)

***

### getModels() {#getmodels}

> **getModels**(`query?`: [`Query`](../type-aliases/Query.md)\<[`DIDKeyLink`](../interfaces/DIDKeyLink.md)\>): `Promise`\<[`DIDKeyLink`](../interfaces/DIDKeyLink.md)[]\>

Defined in: [src/pluto/repositories/builders/BaseRepository.ts:86](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/BaseRepository.ts#L86)

Search the Store for Models

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query?` | [`Query`](../type-aliases/Query.md)\<[`DIDKeyLink`](../interfaces/DIDKeyLink.md)\> | a Query object, a set of values and operators defining the query |

#### Returns

`Promise`\<[`DIDKeyLink`](../interfaces/DIDKeyLink.md)[]\>

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

[`LinkRepository`](LinkRepository.md).[`getModels`](LinkRepository.md#getmodels)

***

### insert() {#insert}

> **insert**(`model`: [`OptionalId`](../type-aliases/OptionalId.md)\<[`DIDKeyLink`](../interfaces/DIDKeyLink.md)\>): `Promise`\<[`DIDKeyLink`](../interfaces/DIDKeyLink.md)\>

Defined in: [src/pluto/repositories/builders/LinkRepository.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/LinkRepository.ts#L12)

Persist the Model in the Store.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | [`OptionalId`](../type-aliases/OptionalId.md)\<[`DIDKeyLink`](../interfaces/DIDKeyLink.md)\> |  |

#### Returns

`Promise`\<[`DIDKeyLink`](../interfaces/DIDKeyLink.md)\>

#### Throws

[Domain.PlutoError.StoreInsertError](../namespaces/Domain/namespaces/PlutoError/classes/StoreInsertError.md) if insert fails

#### Inherited from

[`LinkRepository`](LinkRepository.md).[`insert`](LinkRepository.md#insert)

***

### update() {#update}

> **update**(`model`: [`DIDKeyLink`](../interfaces/DIDKeyLink.md)): `Promise`\<`void`\>

Defined in: [src/pluto/repositories/builders/BaseRepository.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/BaseRepository.ts#L43)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`DIDKeyLink`](../interfaces/DIDKeyLink.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`LinkRepository`](LinkRepository.md).[`update`](LinkRepository.md#update)
