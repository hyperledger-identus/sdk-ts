[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Plugin

# Class: Plugin

Defined in: [src/plugins/Plugin.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/Plugin.ts#L12)

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
| <a id="modules"></a> `modules` | `readonly` | `Map`\<`string`, `any`\> | [src/plugins/Plugin.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/Plugin.ts#L13) |
| <a id="tasks"></a> `tasks` | `readonly` | `Map`\<`string`, [`Ctor`](../namespaces/Utils/interfaces/Ctor.md)\<[`Task`](../namespaces/Utils/classes/Task.md)\<`any`, `unknown`\>\>\> | [src/plugins/Plugin.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/Plugin.ts#L14) |

## Methods

### addModule() {#addmodule}

> **addModule**(`key`: `string`, `module`: `any`): `this`

Defined in: [src/plugins/Plugin.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/Plugin.ts#L17)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `module` | `any` |

#### Returns

`this`

***

### register() {#register}

> **register**(`pids`: [`Arrayable`](../namespaces/Utils/type-aliases/Arrayable.md)\<`string`\>, `task`: [`Ctor`](../namespaces/Utils/interfaces/Ctor.md)\<[`Task`](../namespaces/Utils/classes/Task.md)\<`any`, `unknown`\>\>): `this`

Defined in: [src/plugins/Plugin.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/Plugin.ts#L25)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pids` | [`Arrayable`](../namespaces/Utils/type-aliases/Arrayable.md)\<`string`\> |
| `task` | [`Ctor`](../namespaces/Utils/interfaces/Ctor.md)\<[`Task`](../namespaces/Utils/classes/Task.md)\<`any`, `unknown`\>\> |

#### Returns

`this`
