[**@hyperledger/identus-sdk v8.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Plugins](../README.md) / Task

# Abstract Class: Task\<T, R\>

Defined in: [packages/lib/sdk/src/plugins/types.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/types.ts#L6)

## Extends

- `Task`\<[`Payload`](../../Domain/interfaces/Payload.md)\<`R`\>, `T`\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |
| `R` | `unknown` |

## Constructors

### Constructor

> **new Task**\<`T`, `R`\>(...`args`: `unknown` *extends* `T` ? \[\] : \[`T`\]): `Task`\<`T`, `R`\>

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | `unknown` *extends* `T` ? \[\] : \[`T`\] | - |

#### Returns

`Task`\<`T`, `R`\>

#### Inherited from

`Utils.Task<Payload<R>, T>.constructor`

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Utils.Task.log`

***

### run() {#run}

> `abstract` **run**(`ctx`: `any`): `Promise`\<[`Payload`](../../Domain/interfaces/Payload.md)\<`R`\>\>

Defined in: [packages/lib/sdk/src/utils/tasks.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/tasks.ts#L24)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | `any` |

#### Returns

`Promise`\<[`Payload`](../../Domain/interfaces/Payload.md)\<`R`\>\>

#### Inherited from

`Utils.Task.run`
