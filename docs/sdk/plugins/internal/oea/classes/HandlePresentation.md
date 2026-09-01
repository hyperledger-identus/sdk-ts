[**@hyperledger/identus-sdk v8.1.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / HandlePresentation

# Class: HandlePresentation

Defined in: [packages/lib/sdk/src/plugins/internal/oea/tasks/HandlePresentation.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/internal/oea/tasks/HandlePresentation.ts#L11)

## Extends

- `Task`\<`boolean`, [`HandlePresentationArgs`](../interfaces/HandlePresentationArgs.md)\>

## Constructors

### Constructor

> **new HandlePresentation**(...`args`: \[[`HandlePresentationArgs`](../interfaces/HandlePresentationArgs.md)\]): `HandlePresentation`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`HandlePresentationArgs`](../interfaces/HandlePresentationArgs.md)\] | - |

#### Returns

`HandlePresentation`

#### Inherited from

`Task<boolean, Args>.constructor`

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### run() {#run}

> **run**(`ctx`: [`Context`](../../../../overview/namespaces/Plugins/type-aliases/Context.md)): `Promise`\<`any`\>

Defined in: [packages/lib/sdk/src/plugins/internal/oea/tasks/HandlePresentation.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/internal/oea/tasks/HandlePresentation.ts#L12)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../../../../overview/namespaces/Plugins/type-aliases/Context.md) |

#### Returns

`Promise`\<`any`\>

#### Overrides

`Task.run`
