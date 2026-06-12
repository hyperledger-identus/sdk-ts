[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DIDLinkRepository

# Class: DIDLinkRepository

Defined in: [packages/lib/sdk/src/pluto/repositories/relationships/DIDLinkRepository.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/relationships/DIDLinkRepository.ts#L5)

LinkRepository

Extends [BaseRepository](BaseRepository.md) to handle model relationships

## Extends

- [`LinkRepository`](LinkRepository.md)\<`"did-link"`\>

## Constructors

### Constructor

> **new DIDLinkRepository**(`store`: [`Store`](../namespaces/Pluto/interfaces/Store.md)): `DIDLinkRepository`

Defined in: [packages/lib/sdk/src/pluto/repositories/relationships/DIDLinkRepository.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/relationships/DIDLinkRepository.ts#L6)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Store`](../namespaces/Pluto/interfaces/Store.md) |

#### Returns

`DIDLinkRepository`

#### Overrides

[`LinkRepository`](LinkRepository.md).[`constructor`](LinkRepository.md#constructor)

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

[`LinkRepository`](LinkRepository.md).[`delete`](LinkRepository.md#delete)

***

### getModels() {#getmodels}

> **getModels**(`query?`: [`Query`](../type-aliases/Query.md)\<[`TypedSchema`](../type-aliases/TypedSchema.md)\<[`DIDLink`](../interfaces/DIDLink.md)\>\>): `Promise`\<[`DIDLink`](../interfaces/DIDLink.md)[]\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts:87](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts#L87)

Search the Store for Models

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query?` | [`Query`](../type-aliases/Query.md)\<[`TypedSchema`](../type-aliases/TypedSchema.md)\<[`DIDLink`](../interfaces/DIDLink.md)\>\> | a Query object, a set of values and operators defining the query |

#### Returns

`Promise`\<[`DIDLink`](../interfaces/DIDLink.md)[]\>

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

[`LinkRepository`](LinkRepository.md).[`getModels`](LinkRepository.md#getmodels)

***

### insert() {#insert}

> **insert**(`model`: [`OptionalId`](../type-aliases/OptionalId.md)\<[`DIDLink`](../interfaces/DIDLink.md)\>): `Promise`\<[`DIDLink`](../interfaces/DIDLink.md)\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/LinkRepository.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/LinkRepository.ts#L12)

Persist the Model in the Store.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | [`OptionalId`](../type-aliases/OptionalId.md)\<[`DIDLink`](../interfaces/DIDLink.md)\> | - |

#### Returns

`Promise`\<[`DIDLink`](../interfaces/DIDLink.md)\>

#### Throws

[Domain.PlutoError.StoreInsertError](../namespaces/Domain/namespaces/PlutoError/type-aliases/StoreInsertError.md) if insert fails

#### Inherited from

[`LinkRepository`](LinkRepository.md).[`insert`](LinkRepository.md#insert)

***

### update() {#update}

> **update**(`model`: [`DIDLink`](../interfaces/DIDLink.md)): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts#L44)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`DIDLink`](../interfaces/DIDLink.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`LinkRepository`](LinkRepository.md).[`update`](LinkRepository.md#update)
