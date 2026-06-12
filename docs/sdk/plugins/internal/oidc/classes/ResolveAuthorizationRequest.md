[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / ResolveAuthorizationRequest

# Class: ResolveAuthorizationRequest

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts#L31)

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

- `Task`\<[`AuthorizationRequest`](AuthorizationRequest.md), [`ResolveAuthorizationRequestArgs`](../interfaces/ResolveAuthorizationRequestArgs.md)\>

## Constructors

### Constructor

> **new ResolveAuthorizationRequest**(...`args`: \[[`ResolveAuthorizationRequestArgs`](../interfaces/ResolveAuthorizationRequestArgs.md)\]): `ResolveAuthorizationRequest`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ResolveAuthorizationRequestArgs`](../interfaces/ResolveAuthorizationRequestArgs.md)\] | - |

#### Returns

`ResolveAuthorizationRequest`

#### Inherited from

`Utils.Task<AuthorizationRequest, ResolveAuthorizationRequestArgs>.constructor`

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Utils.Task.log`

***

### run() {#run}

> **run**(`ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<[`AuthorizationRequest`](AuthorizationRequest.md)\>

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/connection/ResolveAuthorizationRequest.ts#L32)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<[`AuthorizationRequest`](AuthorizationRequest.md)\>

#### Overrides

`Utils.Task.run`
