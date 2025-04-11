[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / MediatorStore

# Interface: MediatorStore

## Implemented by

- [`PublicMediatorStore`](../classes/PublicMediatorStore.md)

## Table of contents

### Methods

- [getAllMediators](MediatorStore.md#getallmediators)
- [storeMediator](MediatorStore.md#storemediator)

## Methods

### getAllMediators

▸ **getAllMediators**(): `Promise`\<[`Mediator`](Domain.Mediator.md)[]\>

#### Returns

`Promise`\<[`Mediator`](Domain.Mediator.md)[]\>

#### Defined in

[src/edge-agent/types/index.ts:99](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/edge-agent/types/index.ts#L99)

___

### storeMediator

▸ **storeMediator**(`mediator`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediator` | [`Mediator`](Domain.Mediator.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/edge-agent/types/index.ts:97](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/edge-agent/types/index.ts#L97)
