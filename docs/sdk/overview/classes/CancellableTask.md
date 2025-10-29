[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CancellableTask

# Class: CancellableTask\<T\>

Defined in: [src/edge-agent/helpers/Task.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/Task.ts#L5)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### Constructor

> **new CancellableTask**\<`T`\>(`task`: [`Task`](../type-aliases/Task.md)\<`T`\>, `repeatEvery?`: `number`): `CancellableTask`\<`T`\>

Defined in: [src/edge-agent/helpers/Task.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/Task.ts#L11)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `task` | [`Task`](../type-aliases/Task.md)\<`T`\> |
| `repeatEvery?` | `number` |

#### Returns

`CancellableTask`\<`T`\>

## Methods

### callback() {#callback}

> **callback**(`fn`: (`response`: `T`) => `void`): `Promise`\<`void`\>

Defined in: [src/edge-agent/helpers/Task.ts:64](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/Task.ts#L64)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fn` | (`response`: `T`) => `void` |

#### Returns

`Promise`\<`void`\>

***

### cancel() {#cancel}

> **cancel**(): `void`

Defined in: [src/edge-agent/helpers/Task.ts:48](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/Task.ts#L48)

#### Returns

`void`

***

### then() {#then}

> **then**(): `Promise`\<`T`\>

Defined in: [src/edge-agent/helpers/Task.ts:60](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/Task.ts#L60)

#### Returns

`Promise`\<`T`\>
