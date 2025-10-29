[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Utils](../../../README.md) / [Task](../README.md) / ContextProxy

# Class: ContextProxy

Defined in: [src/utils/tasks.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L35)

Context using proxy so we can extend arbitrarily

## Constructors

### Constructor

> **new ContextProxy**(`opts`: [`JsonObj`](../../../type-aliases/JsonObj.md)): `ContextProxy`

Defined in: [src/utils/tasks.ts:40](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L40)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | [`JsonObj`](../../../type-aliases/JsonObj.md) |

#### Returns

`ContextProxy`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="logger"></a> `logger` | `readonly` | [`Logger`](../../../interfaces/Logger.md) | [src/utils/tasks.ts:36](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L36) |

## Methods

### extend() {#extend}

> **extend**(`deps`: [`JsonObj`](../../../type-aliases/JsonObj.md)): `this`

Defined in: [src/utils/tasks.ts:69](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L69)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deps` | [`JsonObj`](../../../type-aliases/JsonObj.md) |

#### Returns

`this`

***

### run() {#run}

> **run**\<`T`\>(`task`: [`Task`](../../../classes/Task.md)\<`T`, `any`\>): `Promise`\<`T`\>

Defined in: [src/utils/tasks.ts:55](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L55)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `task` | [`Task`](../../../classes/Task.md)\<`T`, `any`\> |

#### Returns

`Promise`\<`T`\>
