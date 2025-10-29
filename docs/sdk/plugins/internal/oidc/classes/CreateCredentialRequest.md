[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / CreateCredentialRequest

# Class: CreateCredentialRequest

Defined in: [src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts#L26)

create a CredentialRequest for the given offer
a connection with the relevant Issuer must have already been established

## Param

## Param

## Param

## Extends

- [`Task`](../../../../overview/namespaces/Utils/classes/Task.md)\<[`CredentialRequest`](CredentialRequest.md), [`CreateCredentialRequestArgs`](../interfaces/CreateCredentialRequestArgs.md)\>

## Constructors

### Constructor

> **new CreateCredentialRequest**(...`args`: \[[`CreateCredentialRequestArgs`](../interfaces/CreateCredentialRequestArgs.md)\]): `CreateCredentialRequest`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`CreateCredentialRequestArgs`](../interfaces/CreateCredentialRequestArgs.md)\] |  |

#### Returns

`CreateCredentialRequest`

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

> **run**(`ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<[`CredentialRequest`](CredentialRequest.md)\>

Defined in: [src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts#L27)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<[`CredentialRequest`](CredentialRequest.md)\>

#### Overrides

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`run`](../../../../overview/namespaces/Utils/classes/Task.md#run)
