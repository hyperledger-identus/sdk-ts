[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / MapperRepository

# Abstract Class: MapperRepository\<K, D\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/MapperRepository.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/MapperRepository.ts#L13)

MapperRepository

Extends [BaseRepository](BaseRepository.md) to handle Store interactions
while mapping between a Domain class and a Model object

## Extends

- [`BaseRepository`](BaseRepository.md)\<`K`\>

## Extended by

- [`CredentialRepository`](CredentialRepository.md)
- [`CredentialMetadataRepository`](CredentialMetadataRepository.md)
- [`DIDRepository`](DIDRepository.md)
- [`KeyRepository`](KeyRepository.md)
- [`LinkSecretRepository`](LinkSecretRepository.md)
- [`MessageRepository`](MessageRepository.md)

## Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* [`TableName`](../type-aliases/TableName.md) |
| `D` *extends* [`Storable`](../namespaces/Domain/namespaces/Pluto/interfaces/Storable.md) |

## Constructors

### Constructor

> **new MapperRepository**\<`K`, `D`\>(`store`: [`Store`](../namespaces/Pluto/interfaces/Store.md), `name`: `K`): `MapperRepository`\<`K`, `D`\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/BaseRepository.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Store`](../namespaces/Pluto/interfaces/Store.md) |
| `name` | `K` |

#### Returns

`MapperRepository`\<`K`, `D`\>

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`constructor`](BaseRepository.md#constructor)

## Methods

### byUUID() {#byuuid}

> **byUUID**(`uuid`: `string`): `Promise`\<`D` \| `null`\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/MapperRepository.ts:75](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/MapperRepository.ts#L75)

Utility fn for common use of find with uuid

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `uuid` | `string` | - |

#### Returns

`Promise`\<`D` \| `null`\>

first found Domain instance or undefined

#### Throws

[Domain.PlutoError.StoreQueryFailed](../namespaces/Domain/namespaces/PlutoError/type-aliases/StoreQueryFailed.md) if the query fails

***

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

### find() {#find}

> **find**(`selector?`: `Partial`\<[`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\]\>): `Promise`\<`D`[]\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/MapperRepository.ts:48](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/MapperRepository.ts#L48)

Search for instances based on given values

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector?` | `Partial`\<[`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\]\> | object with matchable properties |

#### Returns

`Promise`\<`D`[]\>

all found Domain instances

#### Throws

[Domain.PlutoError.StoreQueryFailed](../namespaces/Domain/namespaces/PlutoError/type-aliases/StoreQueryFailed.md) if the query fails

***

### findOne() {#findone}

> **findOne**(`selector?`: `Partial`\<[`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\]\>): `Promise`\<`D` \| `null`\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/MapperRepository.ts:61](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/MapperRepository.ts#L61)

Search for single instance based on given values

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector?` | `Partial`\<[`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\]\> | object with matchable properties |

#### Returns

`Promise`\<`D` \| `null`\>

first found Domain instance or null

#### Throws

[Domain.PlutoError.StoreQueryFailed](../namespaces/Domain/namespaces/PlutoError/type-aliases/StoreQueryFailed.md) if the query fails

***

### get() {#get}

> **get**(`query?`: [`Query`](../type-aliases/Query.md)\<[`CollectionSchemas`](../type-aliases/CollectionSchemas.md)\[`K`\]\>): `Promise`\<`D`[]\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/MapperRepository.ts:36](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/MapperRepository.ts#L36)

Search the Store, mapping any found to Domain

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query?` | [`Query`](../type-aliases/Query.md)\<[`CollectionSchemas`](../type-aliases/CollectionSchemas.md)\[`K`\]\> | either an object or array of objects with matchable properties |

#### Returns

`Promise`\<`D`[]\>

Array of matched Domain instances

#### Throws

[Domain.PlutoError.StoreQueryFailed](../namespaces/Domain/namespaces/PlutoError/type-aliases/StoreQueryFailed.md) if the query fails

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

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`insert`](BaseRepository.md#insert)

***

### save() {#save}

> **save**(`domain`: `D`): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/MapperRepository.ts:88](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/MapperRepository.ts#L88)

Persist the Domain instance in the Store.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `domain` | `D` | Will be mapped to relevant Model for persistance |

#### Returns

`Promise`\<`void`\>

#### See

[BaseRepository.insert](BaseRepository.md#insert)

#### Throws

[Domain.PlutoError.StoreInsertError](../namespaces/Domain/namespaces/PlutoError/type-aliases/StoreInsertError.md) if insert fails

***

### toDomain() {#todomain}

> `abstract` **toDomain**(`model`: [`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\]): `D`

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/MapperRepository.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/MapperRepository.ts#L21)

Map from a Model to the Domain class

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | [`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\] | the stored Model with a uuid |

#### Returns

`D`

Domain with uuid set

***

### toModel() {#tomodel}

> `abstract` **toModel**(`domain`: `D`): [`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\]

Defined in: [packages/lib/sdk/src/pluto/repositories/builders/MapperRepository.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/repositories/builders/MapperRepository.ts#L27)

Map from a Domain class to a Model

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `domain` | `D` | may be missing uuid |

#### Returns

[`CollectionMap`](../interfaces/CollectionMap.md)\[`K`\]

Model potentially without uuid

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
