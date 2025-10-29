[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / MapperRepository

# Abstract Class: MapperRepository\<T, D\>

Defined in: [src/pluto/repositories/builders/MapperRepository.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/MapperRepository.ts#L13)

MapperRepository

Extends [BaseRepository](BaseRepository.md) to handle Store interactions
while mapping between a Domain class and a Model object

## Extends

- [`BaseRepository`](BaseRepository.md)\<`T`\>

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
| `T` *extends* [`Model`](../type-aliases/Model.md) |
| `D` *extends* [`Storable`](../namespaces/Domain/namespaces/Pluto/interfaces/Storable.md) |

## Constructors

### Constructor

> **new MapperRepository**\<`T`, `D`\>(`store`: [`Store`](../namespaces/Pluto/interfaces/Store.md), `name`: `string`): `MapperRepository`\<`T`, `D`\>

Defined in: [src/pluto/repositories/builders/BaseRepository.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/BaseRepository.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Store`](../namespaces/Pluto/interfaces/Store.md) |
| `name` | `string` |

#### Returns

`MapperRepository`\<`T`, `D`\>

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`constructor`](BaseRepository.md#constructor)

## Methods

### byUUID() {#byuuid}

> **byUUID**(`uuid`: `string`): `Promise`\<`D` \| `null`\>

Defined in: [src/pluto/repositories/builders/MapperRepository.ts:75](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/MapperRepository.ts#L75)

Utility fn for common use of find with uuid

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `uuid` | `string` |  |

#### Returns

`Promise`\<`D` \| `null`\>

first found Domain instance or undefined

#### Throws

[Domain.PlutoError.StoreQueryFailed](../namespaces/Domain/namespaces/PlutoError/classes/StoreQueryFailed.md) if the query fails

***

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

### find() {#find}

> **find**(`selector?`: `Partial`\<`T`\>): `Promise`\<`D`[]\>

Defined in: [src/pluto/repositories/builders/MapperRepository.ts:48](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/MapperRepository.ts#L48)

Search for instances based on given values

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector?` | `Partial`\<`T`\> | object with matchable properties |

#### Returns

`Promise`\<`D`[]\>

all found Domain instances

#### Throws

[Domain.PlutoError.StoreQueryFailed](../namespaces/Domain/namespaces/PlutoError/classes/StoreQueryFailed.md) if the query fails

***

### findOne() {#findone}

> **findOne**(`selector?`: `Partial`\<`T`\>): `Promise`\<`D` \| `null`\>

Defined in: [src/pluto/repositories/builders/MapperRepository.ts:61](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/MapperRepository.ts#L61)

Search for single instance based on given values

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector?` | `Partial`\<`T`\> | object with matchable properties |

#### Returns

`Promise`\<`D` \| `null`\>

first found Domain instance or null

#### Throws

[Domain.PlutoError.StoreQueryFailed](../namespaces/Domain/namespaces/PlutoError/classes/StoreQueryFailed.md) if the query fails

***

### get() {#get}

> **get**(`query?`: [`Query`](../type-aliases/Query.md)\<`T`\>): `Promise`\<`D`[]\>

Defined in: [src/pluto/repositories/builders/MapperRepository.ts:36](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/MapperRepository.ts#L36)

Search the Store, mapping any found to Domain

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query?` | [`Query`](../type-aliases/Query.md)\<`T`\> | either an object or array of objects with matchable properties |

#### Returns

`Promise`\<`D`[]\>

Array of matched Domain instances

#### Throws

[Domain.PlutoError.StoreQueryFailed](../namespaces/Domain/namespaces/PlutoError/classes/StoreQueryFailed.md) if the query fails

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

#### Inherited from

[`BaseRepository`](BaseRepository.md).[`insert`](BaseRepository.md#insert)

***

### save() {#save}

> **save**(`domain`: `D`): `Promise`\<`void`\>

Defined in: [src/pluto/repositories/builders/MapperRepository.ts:89](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/MapperRepository.ts#L89)

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

[Domain.PlutoError.StoreInsertError](../namespaces/Domain/namespaces/PlutoError/classes/StoreInsertError.md) if insert fails

***

### toDomain() {#todomain}

> `abstract` **toDomain**(`model`: `T`): `D`

Defined in: [src/pluto/repositories/builders/MapperRepository.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/MapperRepository.ts#L21)

Map from a Model to the Domain class

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | `T` | the stored Model with a uuid |

#### Returns

`D`

Domain with uuid set

***

### toModel() {#tomodel}

> `abstract` **toModel**(`domain`: `D`): `T`

Defined in: [src/pluto/repositories/builders/MapperRepository.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/MapperRepository.ts#L27)

Map from a Domain class to a Model

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `domain` | `D` | may be missing uuid |

#### Returns

`T`

Model potentially without uuid

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
