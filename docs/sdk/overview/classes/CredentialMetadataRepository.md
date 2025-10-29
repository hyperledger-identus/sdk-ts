[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CredentialMetadataRepository

# Class: CredentialMetadataRepository

Defined in: [src/pluto/repositories/CredentialMetadataRepository.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/CredentialMetadataRepository.ts#L6)

MapperRepository

Extends [BaseRepository](BaseRepository.md) to handle Store interactions
while mapping between a Domain class and a Model object

## Extends

- [`MapperRepository`](MapperRepository.md)\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md), [`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md)\>

## Constructors

### Constructor

> **new CredentialMetadataRepository**(`store`: [`Store`](../namespaces/Pluto/interfaces/Store.md)): `CredentialMetadataRepository`

Defined in: [src/pluto/repositories/CredentialMetadataRepository.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/CredentialMetadataRepository.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `store` | [`Store`](../namespaces/Pluto/interfaces/Store.md) |

#### Returns

`CredentialMetadataRepository`

#### Overrides

[`MapperRepository`](MapperRepository.md).[`constructor`](MapperRepository.md#constructor)

## Methods

### byUUID() {#byuuid}

> **byUUID**(`uuid`: `string`): `Promise`\<[`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md) \| `null`\>

Defined in: [src/pluto/repositories/builders/MapperRepository.ts:75](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/MapperRepository.ts#L75)

Utility fn for common use of find with uuid

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `uuid` | `string` |  |

#### Returns

`Promise`\<[`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md) \| `null`\>

first found Domain instance or undefined

#### Throws

[Domain.PlutoError.StoreQueryFailed](../namespaces/Domain/namespaces/PlutoError/classes/StoreQueryFailed.md) if the query fails

#### Inherited from

[`MapperRepository`](MapperRepository.md).[`byUUID`](MapperRepository.md#byuuid)

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

[`MapperRepository`](MapperRepository.md).[`delete`](MapperRepository.md#delete)

***

### find() {#find}

> **find**(`selector?`: `Partial`\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md)\>): `Promise`\<[`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md)[]\>

Defined in: [src/pluto/repositories/builders/MapperRepository.ts:48](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/MapperRepository.ts#L48)

Search for instances based on given values

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector?` | `Partial`\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md)\> | object with matchable properties |

#### Returns

`Promise`\<[`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md)[]\>

all found Domain instances

#### Throws

[Domain.PlutoError.StoreQueryFailed](../namespaces/Domain/namespaces/PlutoError/classes/StoreQueryFailed.md) if the query fails

#### Inherited from

[`MapperRepository`](MapperRepository.md).[`find`](MapperRepository.md#find)

***

### findOne() {#findone}

> **findOne**(`selector?`: `Partial`\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md)\>): `Promise`\<[`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md) \| `null`\>

Defined in: [src/pluto/repositories/builders/MapperRepository.ts:61](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/MapperRepository.ts#L61)

Search for single instance based on given values

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `selector?` | `Partial`\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md)\> | object with matchable properties |

#### Returns

`Promise`\<[`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md) \| `null`\>

first found Domain instance or null

#### Throws

[Domain.PlutoError.StoreQueryFailed](../namespaces/Domain/namespaces/PlutoError/classes/StoreQueryFailed.md) if the query fails

#### Inherited from

[`MapperRepository`](MapperRepository.md).[`findOne`](MapperRepository.md#findone)

***

### get() {#get}

> **get**(`query?`: [`Query`](../type-aliases/Query.md)\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md)\>): `Promise`\<[`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md)[]\>

Defined in: [src/pluto/repositories/builders/MapperRepository.ts:36](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/MapperRepository.ts#L36)

Search the Store, mapping any found to Domain

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query?` | [`Query`](../type-aliases/Query.md)\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md)\> | either an object or array of objects with matchable properties |

#### Returns

`Promise`\<[`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md)[]\>

Array of matched Domain instances

#### Throws

[Domain.PlutoError.StoreQueryFailed](../namespaces/Domain/namespaces/PlutoError/classes/StoreQueryFailed.md) if the query fails

#### Inherited from

[`MapperRepository`](MapperRepository.md).[`get`](MapperRepository.md#get)

***

### getModels() {#getmodels}

> **getModels**(`query?`: [`Query`](../type-aliases/Query.md)\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md)\>): `Promise`\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md)[]\>

Defined in: [src/pluto/repositories/builders/BaseRepository.ts:86](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/BaseRepository.ts#L86)

Search the Store for Models

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query?` | [`Query`](../type-aliases/Query.md)\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md)\> | a Query object, a set of values and operators defining the query |

#### Returns

`Promise`\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md)[]\>

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

[`MapperRepository`](MapperRepository.md).[`getModels`](MapperRepository.md#getmodels)

***

### insert() {#insert}

> **insert**(`model`: [`CredentialMetadata`](../interfaces/CredentialMetadata.md)): `Promise`\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md)\>

Defined in: [src/pluto/repositories/builders/BaseRepository.ts:32](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/BaseRepository.ts#L32)

Persist the Model in the Store.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | [`CredentialMetadata`](../interfaces/CredentialMetadata.md) |  |

#### Returns

`Promise`\<[`CredentialMetadata`](../interfaces/CredentialMetadata.md)\>

#### Throws

[Domain.PlutoError.StoreInsertError](../namespaces/Domain/namespaces/PlutoError/classes/StoreInsertError.md) if insert fails

#### Inherited from

[`MapperRepository`](MapperRepository.md).[`insert`](MapperRepository.md#insert)

***

### parseCredentialType() {#parsecredentialtype}

> **parseCredentialType**(`model`: [`CredentialMetadata`](../interfaces/CredentialMetadata.md)): [`CredentialType`](../namespaces/Domain/enumerations/CredentialType.md)

Defined in: [src/pluto/repositories/CredentialMetadataRepository.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/CredentialMetadataRepository.ts#L28)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`CredentialMetadata`](../interfaces/CredentialMetadata.md) |

#### Returns

[`CredentialType`](../namespaces/Domain/enumerations/CredentialType.md)

***

### save() {#save}

> **save**(`domain`: [`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md)): `Promise`\<`void`\>

Defined in: [src/pluto/repositories/builders/MapperRepository.ts:89](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/MapperRepository.ts#L89)

Persist the Domain instance in the Store.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `domain` | [`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md) | Will be mapped to relevant Model for persistance |

#### Returns

`Promise`\<`void`\>

#### See

[BaseRepository.insert](BaseRepository.md#insert)

#### Throws

[Domain.PlutoError.StoreInsertError](../namespaces/Domain/namespaces/PlutoError/classes/StoreInsertError.md) if insert fails

#### Inherited from

[`MapperRepository`](MapperRepository.md).[`save`](MapperRepository.md#save)

***

### toDomain() {#todomain}

> **toDomain**(`model`: [`CredentialMetadata`](../interfaces/CredentialMetadata.md)): [`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md)

Defined in: [src/pluto/repositories/CredentialMetadataRepository.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/CredentialMetadataRepository.ts#L11)

Map from a Model to the Domain class

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | [`CredentialMetadata`](../interfaces/CredentialMetadata.md) | the stored Model with a uuid |

#### Returns

[`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md)

Domain with uuid set

#### Overrides

[`MapperRepository`](MapperRepository.md).[`toDomain`](MapperRepository.md#todomain)

***

### toModel() {#tomodel}

> **toModel**(`domain`: [`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md)): [`CredentialMetadata`](../interfaces/CredentialMetadata.md)

Defined in: [src/pluto/repositories/CredentialMetadataRepository.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/CredentialMetadataRepository.ts#L19)

Map from a Domain class to a Model

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `domain` | [`CredentialMetadata`](../namespaces/Domain/classes/CredentialMetadata.md) | may be missing uuid |

#### Returns

[`CredentialMetadata`](../interfaces/CredentialMetadata.md)

Model potentially without uuid

#### Overrides

[`MapperRepository`](MapperRepository.md).[`toModel`](MapperRepository.md#tomodel)

***

### update() {#update}

> **update**(`model`: [`CredentialMetadata`](../interfaces/CredentialMetadata.md)): `Promise`\<`void`\>

Defined in: [src/pluto/repositories/builders/BaseRepository.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/repositories/builders/BaseRepository.ts#L43)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`CredentialMetadata`](../interfaces/CredentialMetadata.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`MapperRepository`](MapperRepository.md).[`update`](MapperRepository.md#update)
