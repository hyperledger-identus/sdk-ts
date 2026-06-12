[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / HandleRevocation

# Class: HandleRevocation

Defined in: [packages/lib/sdk/src/plugins/internal/oea/tasks/HandleRevocation.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/tasks/HandleRevocation.ts#L19)

## Extends

- `Task`\<`void`, [`HandleRevocationArgs`](../interfaces/HandleRevocationArgs.md)\>

## Constructors

### Constructor

> **new HandleRevocation**(...`args`: \[[`HandleRevocationArgs`](../interfaces/HandleRevocationArgs.md)\]): `HandleRevocation`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`HandleRevocationArgs`](../interfaces/HandleRevocationArgs.md)\] | - |

#### Returns

`HandleRevocation`

#### Inherited from

`Task<void, Args>.constructor`

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### run() {#run}

> **run**(`ctx`: [`Context`](../../didcomm/type-aliases/Context.md)): `Promise`\<`void`\>

Defined in: [packages/lib/sdk/src/plugins/internal/oea/tasks/HandleRevocation.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/tasks/HandleRevocation.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../../didcomm/type-aliases/Context.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

`Task.run`
