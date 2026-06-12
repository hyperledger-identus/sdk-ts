[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / CreateAuthorizationRequest

# Class: CreateAuthorizationRequest

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts#L29)

manage the creation of an Authorization Request

## Param

## Param

## Param

## Param

## Param

## Param

## Extends

- `Task`\<[`AuthorizationRequest`](AuthorizationRequest.md), [`CreateAuthorizationRequestArgs`](../interfaces/CreateAuthorizationRequestArgs.md)\>

## Constructors

### Constructor

> **new CreateAuthorizationRequest**(...`args`: \[[`CreateAuthorizationRequestArgs`](../interfaces/CreateAuthorizationRequestArgs.md)\]): `CreateAuthorizationRequest`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`CreateAuthorizationRequestArgs`](../interfaces/CreateAuthorizationRequestArgs.md)\] | - |

#### Returns

`CreateAuthorizationRequest`

#### Inherited from

`Utils.Task<AuthorizationRequest, CreateAuthorizationRequestArgs>.constructor`

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

> **run**(): `Promise`\<[`AuthorizationRequest`](AuthorizationRequest.md)\>

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/connection/CreateAuthorizationRequest.ts#L30)

#### Returns

`Promise`\<[`AuthorizationRequest`](AuthorizationRequest.md)\>

#### Overrides

`Utils.Task.run`
