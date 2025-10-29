[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / CreateAuthorizationRequest

# Class: CreateAuthorizationRequest

Defined in: [src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts#L29)

manage the creation of an Authorization Request

## Param

## Param

## Param

## Param

## Param

## Param

## Extends

- [`Task`](../../../../overview/namespaces/Utils/classes/Task.md)\<[`AuthorizationRequest`](AuthorizationRequest.md), [`CreateAuthorizationRequestArgs`](../interfaces/CreateAuthorizationRequestArgs.md)\>

## Constructors

### Constructor

> **new CreateAuthorizationRequest**(...`args`: \[[`CreateAuthorizationRequestArgs`](../interfaces/CreateAuthorizationRequestArgs.md)\]): `CreateAuthorizationRequest`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`CreateAuthorizationRequestArgs`](../interfaces/CreateAuthorizationRequestArgs.md)\] |  |

#### Returns

`CreateAuthorizationRequest`

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

> **run**(): `Promise`\<[`AuthorizationRequest`](AuthorizationRequest.md)\>

Defined in: [src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts#L30)

#### Returns

`Promise`\<[`AuthorizationRequest`](AuthorizationRequest.md)\>

#### Overrides

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`run`](../../../../overview/namespaces/Utils/classes/Task.md#run)
