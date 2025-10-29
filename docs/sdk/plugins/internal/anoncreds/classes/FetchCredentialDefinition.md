[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/anoncreds](../README.md) / FetchCredentialDefinition

# Class: FetchCredentialDefinition

Defined in: [src/plugins/internal/anoncreds/FetchCredentialDefinition.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/anoncreds/FetchCredentialDefinition.ts#L9)

A Task encapsulates a unit of work

args constructor parameter is mandatory if Args type given
args constructor parameter is optional if no Args type given

## Extends

- [`Task`](../../../../overview/namespaces/Utils/classes/Task.md)\<[`CredentialDefinition`](../type-aliases/CredentialDefinition.md), [`FetchCredentialDefinitionArgs`](../interfaces/FetchCredentialDefinitionArgs.md)\>

## Constructors

### Constructor

> **new FetchCredentialDefinition**(...`args`: \[[`FetchCredentialDefinitionArgs`](../interfaces/FetchCredentialDefinitionArgs.md)\]): `FetchCredentialDefinition`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`FetchCredentialDefinitionArgs`](../interfaces/FetchCredentialDefinitionArgs.md)\] |  |

#### Returns

`FetchCredentialDefinition`

#### Inherited from

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`constructor`](../../../../overview/namespaces/Utils/classes/Task.md#constructor)

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L26)

#### Returns

`unknown`

#### Inherited from

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`log`](../../../../overview/namespaces/Utils/classes/Task.md#log)

***

### run() {#run}

> **run**(`ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<`CredentialDefinitionType`\>

Defined in: [src/plugins/internal/anoncreds/FetchCredentialDefinition.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/anoncreds/FetchCredentialDefinition.ts#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<`CredentialDefinitionType`\>

#### Overrides

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`run`](../../../../overview/namespaces/Utils/classes/Task.md#run)
