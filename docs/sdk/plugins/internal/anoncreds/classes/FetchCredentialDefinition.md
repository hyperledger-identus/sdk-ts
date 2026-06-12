[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/anoncreds](../README.md) / FetchCredentialDefinition

# Class: FetchCredentialDefinition

Defined in: [packages/lib/sdk/src/plugins/internal/anoncreds/FetchCredentialDefinition.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/FetchCredentialDefinition.ts#L9)

## Extends

- `Task`\<[`CredentialDefinition`](../type-aliases/CredentialDefinition.md), [`FetchCredentialDefinitionArgs`](../interfaces/FetchCredentialDefinitionArgs.md)\>

## Constructors

### Constructor

> **new FetchCredentialDefinition**(...`args`: \[[`FetchCredentialDefinitionArgs`](../interfaces/FetchCredentialDefinitionArgs.md)\]): `FetchCredentialDefinition`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`FetchCredentialDefinitionArgs`](../interfaces/FetchCredentialDefinitionArgs.md)\] | - |

#### Returns

`FetchCredentialDefinition`

#### Inherited from

`Task<Types.CredentialDefinition, FetchCredentialDefinitionArgs>.constructor`

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

> **run**(`ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<`CredentialDefinitionType`\>

Defined in: [packages/lib/sdk/src/plugins/internal/anoncreds/FetchCredentialDefinition.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/anoncreds/FetchCredentialDefinition.ts#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<`CredentialDefinitionType`\>

#### Overrides

`Task.run`
