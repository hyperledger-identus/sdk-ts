[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / SchemaGenerator

# Interface: SchemaGenerator\<T\>

Defined in: [src/pluto/models/Schema.ts:67](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L67)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Methods

### addProperty() {#addproperty}

#### Call Signature

> **addProperty**\<`P`\>(`type`: `P`, `key`: [`KeysFor`](../type-aliases/KeysFor.md)\<`T`, `P`\>, `opts?`: `any`): `void`

Defined in: [src/pluto/models/Schema.ts:68](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L68)

##### Type Parameters

| Type Parameter |
| ------ |
| `P` *extends* [`PropertyTypes`](../type-aliases/PropertyTypes.md) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `P` |
| `key` | [`KeysFor`](../type-aliases/KeysFor.md)\<`T`, `P`\> |
| `opts?` | `any` |

##### Returns

`void`

#### Call Signature

> **addProperty**(`type`: [`PropertyTypes`](../type-aliases/PropertyTypes.md), `key`: `string`, `opts?`: `any`): `void`

Defined in: [src/pluto/models/Schema.ts:69](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L69)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`PropertyTypes`](../type-aliases/PropertyTypes.md) |
| `key` | `string` |
| `opts?` | `any` |

##### Returns

`void`

***

### setEncrypted() {#setencrypted}

> **setEncrypted**\<`K`\>(...`keys`: `K`[]): `K`[]

Defined in: [src/pluto/models/Schema.ts:70](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L70)

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`keys` | `K`[] |

#### Returns

`K`[]

***

### setRequired() {#setrequired}

> **setRequired**(...`keys`: [`StringKeys`](../type-aliases/StringKeys.md)\<`T`\>[]): `void`

Defined in: [src/pluto/models/Schema.ts:71](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L71)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`keys` | [`StringKeys`](../type-aliases/StringKeys.md)\<`T`\>[] |

#### Returns

`void`

***

### setVersion() {#setversion}

> **setVersion**(`version`: `number`): `void`

Defined in: [src/pluto/models/Schema.ts:72](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Schema.ts#L72)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `version` | `number` |

#### Returns

`void`
