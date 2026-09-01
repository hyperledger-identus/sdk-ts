[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / CancellableTask

# Class: CancellableTask\<T\>

Defined in: [packages/lib/sdk/src/edge-agent/helpers/Task.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/edge-agent/helpers/Task.ts#L5)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### Constructor

> **new CancellableTask**\<`T`\>(`task`: [`Task`](../type-aliases/Task.md)\<`T`\>, `repeatEvery?`: `number`): `CancellableTask`\<`T`\>

Defined in: [packages/lib/sdk/src/edge-agent/helpers/Task.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/edge-agent/helpers/Task.ts#L11)

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

Defined in: [packages/lib/sdk/src/edge-agent/helpers/Task.ts:60](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/edge-agent/helpers/Task.ts#L60)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fn` | (`response`: `T`) => `void` |

#### Returns

`Promise`\<`void`\>

***

### cancel() {#cancel}

> **cancel**(): `void`

Defined in: [packages/lib/sdk/src/edge-agent/helpers/Task.ts:48](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/edge-agent/helpers/Task.ts#L48)

#### Returns

`void`
