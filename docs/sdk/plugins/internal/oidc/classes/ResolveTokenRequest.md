[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / ResolveTokenRequest

# Class: ResolveTokenRequest

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/connection/ResolveTokenRequest.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/connection/ResolveTokenRequest.ts#L34)

OIDC Convenience Task
CallbackUrl to established Connection

OIDC Connection flow 2/2
OIDC Credential Issuance flow 2/3

manage fetching a Token from the Authorization Server
establishing a connection for future use
steps
  - processCallbackUrl
  - send a TokenRequest
  - add a Connection

## Param

## Param

## Extends

- `Task`\<[`TokenResponse`](../type-aliases/TokenResponse.md), [`ResolveTokenRequestArgs`](../interfaces/ResolveTokenRequestArgs.md)\>

## Constructors

### Constructor

> **new ResolveTokenRequest**(...`args`: \[[`ResolveTokenRequestArgs`](../interfaces/ResolveTokenRequestArgs.md)\]): `ResolveTokenRequest`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ResolveTokenRequestArgs`](../interfaces/ResolveTokenRequestArgs.md)\] | - |

#### Returns

`ResolveTokenRequest`

#### Inherited from

`Task<TokenResponse, ResolveTokenRequestArgs>.constructor`

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

> **run**(`ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<\{ `access_token`: `string`; `c_nonce?`: `string`; `c_nonce_expires_in?`: `number`; `expires_in?`: `number`; `id_token?`: `string`; `refresh_expires_in?`: `number`; `refresh_token?`: `string`; `scope?`: `string`; `session_state?`: `string`; `token_type`: `string`; \}\>

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/connection/ResolveTokenRequest.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/connection/ResolveTokenRequest.ts#L35)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<\{ `access_token`: `string`; `c_nonce?`: `string`; `c_nonce_expires_in?`: `number`; `expires_in?`: `number`; `id_token?`: `string`; `refresh_expires_in?`: `number`; `refresh_token?`: `string`; `scope?`: `string`; `session_state?`: `string`; `token_type`: `string`; \}\>

#### Overrides

`Task.run`
