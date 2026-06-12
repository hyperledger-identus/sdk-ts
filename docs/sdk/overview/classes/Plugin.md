[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Plugin

# Class: Plugin

Defined in: [packages/lib/sdk/src/plugins/Plugin.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/Plugin.ts#L12)

Provide interface to augment the SDK.

Currently able to:
- register protocol handlers
- extend the running context

## Constructors

### Constructor

> **new Plugin**(): `Plugin`

#### Returns

`Plugin`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-modules"></a> `modules` | `readonly` | `Map`\<`string`, `any`\> | [packages/lib/sdk/src/plugins/Plugin.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/Plugin.ts#L13) |
| <a id="property-tasks"></a> `tasks` | `readonly` | `Map`\<`string`, [`Ctor`](../interfaces/Ctor.md)\<`Task`\<`any`, `unknown`\>\>\> | [packages/lib/sdk/src/plugins/Plugin.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/Plugin.ts#L14) |

## Methods

### addModule() {#addmodule}

> **addModule**(`key`: `string`, `module`: `any`): `this`

Defined in: [packages/lib/sdk/src/plugins/Plugin.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/Plugin.ts#L17)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `module` | `any` |

#### Returns

`this`

***

### register() {#register}

> **register**(`pids`: [`Arrayable`](../type-aliases/Arrayable.md)\<`string`\>, `task`: [`Ctor`](../interfaces/Ctor.md)\<`Task`\<`any`, `unknown`\>\>): `this`

Defined in: [packages/lib/sdk/src/plugins/Plugin.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/Plugin.ts#L25)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pids` | [`Arrayable`](../type-aliases/Arrayable.md)\<`string`\> |
| `task` | [`Ctor`](../interfaces/Ctor.md)\<`Task`\<`any`, `unknown`\>\> |

#### Returns

`this`
