[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / CredentialMetadata

# Class: CredentialMetadata

Defined in: packages/shared/domain/build/index.d.ts:1765

Storable
define properties a Domain object must implement to be compatible with Pluto

## Implements

- [`Storable`](../namespaces/Pluto/interfaces/Storable.md)

## Constructors

### Constructor

> **new CredentialMetadata**(`type`: [`CredentialType`](../../../../plugins/internal/oea/enumerations/CredentialType.md), `name`: `string`, `json`: `Record`\<`string`, `any`\>): `CredentialMetadata`

Defined in: packages/shared/domain/build/index.d.ts:1770

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`CredentialType`](../../../../plugins/internal/oea/enumerations/CredentialType.md) |
| `name` | `string` |
| `json` | `Record`\<`string`, `any`\> |

#### Returns

`CredentialMetadata`

## Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-name"></a> `name` | `readonly` | `string` | - | packages/shared/domain/build/index.d.ts:1767 |
| <a id="property-type"></a> `type` | `readonly` | [`CredentialType`](../../../../plugins/internal/oea/enumerations/CredentialType.md) | - | packages/shared/domain/build/index.d.ts:1766 |
| <a id="property-uuid"></a> `uuid` | `readonly` | `string` | Universally Unique Identifier. should be unique across all items. | packages/shared/domain/build/index.d.ts:1769 |

## Methods

### isType() {#istype}

> **isType**(`type`: [`CredentialType`](../../../../plugins/internal/oea/enumerations/CredentialType.md)): `boolean`

Defined in: packages/shared/domain/build/index.d.ts:1777

Check the CredentialType of this Metadata

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | [`CredentialType`](../../../../plugins/internal/oea/enumerations/CredentialType.md) | - |

#### Returns

`boolean`

***

### toJSON() {#tojson}

> **toJSON**(): `Record`\<`string`, `any`\>

Defined in: packages/shared/domain/build/index.d.ts:1783

Get the raw CredentialMetadata JSON

#### Returns

`Record`\<`string`, `any`\>

JSON
