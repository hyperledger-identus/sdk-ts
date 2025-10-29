[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / ResolveAuthorizationRequest

# Class: ResolveAuthorizationRequest

Defined in: [src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts:31](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts#L31)

OIDC Convenience Task
Credential Offer to Authorization Request

OIDC Connection flow 1/2
OIDC Credential Issuance flow 1/3

steps
  - fetchIssuerMetadata
  - fetchAuthorizationServerMetadata
  - createAuthorizationRequest

## Param

## Extends

- [`Task`](../../../../overview/namespaces/Utils/classes/Task.md)\<[`AuthorizationRequest`](AuthorizationRequest.md), [`ResolveAuthorizationRequestArgs`](../interfaces/ResolveAuthorizationRequestArgs.md)\>

## Constructors

### Constructor

> **new ResolveAuthorizationRequest**(...`args`: \[[`ResolveAuthorizationRequestArgs`](../interfaces/ResolveAuthorizationRequestArgs.md)\]): `ResolveAuthorizationRequest`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ResolveAuthorizationRequestArgs`](../interfaces/ResolveAuthorizationRequestArgs.md)\] |  |

#### Returns

`ResolveAuthorizationRequest`

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

> **run**(`ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<[`AuthorizationRequest`](AuthorizationRequest.md)\>

Defined in: [src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts:32](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts#L32)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<[`AuthorizationRequest`](AuthorizationRequest.md)\>

#### Overrides

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`run`](../../../../overview/namespaces/Utils/classes/Task.md#run)
