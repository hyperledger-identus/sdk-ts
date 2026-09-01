[**@hyperledger/identus-sdk v8.1.1**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/anoncreds](../README.md) / fetchSchema

# Class: fetchSchema

Defined in: [packages/lib/sdk/src/plugins/internal/anoncreds/FetchSchema.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/anoncreds/FetchSchema.ts#L9)

## Extends

- `Task`\<[`Schema`](../type-aliases/Schema.md), [`FetchSchemaArgs`](../interfaces/FetchSchemaArgs.md)\>

## Constructors

### Constructor

> **new fetchSchema**(...`args`: \[[`FetchSchemaArgs`](../interfaces/FetchSchemaArgs.md)\]): `fetchSchema`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`FetchSchemaArgs`](../interfaces/FetchSchemaArgs.md)\] | - |

#### Returns

`fetchSchema`

#### Inherited from

`Task<Types.Schema, FetchSchemaArgs>.constructor`

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Task.log`

***

### run() {#run}

> **run**(`ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<`CredentialSchemaType`\>

Defined in: [packages/lib/sdk/src/plugins/internal/anoncreds/FetchSchema.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/anoncreds/FetchSchema.ts#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<`CredentialSchemaType`\>

#### Overrides

`Task.run`
