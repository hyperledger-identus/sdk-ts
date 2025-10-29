[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / ResolveTokenRequest

# Class: ResolveTokenRequest

Defined in: [src/plugins/internal/oidc/connection/ResolveTokenRequest.ts:33](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/ResolveTokenRequest.ts#L33)

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

- [`Task`](../../../../overview/namespaces/Utils/classes/Task.md)\<[`TokenResponse`](../type-aliases/TokenResponse.md), [`ResolveTokenRequestArgs`](../interfaces/ResolveTokenRequestArgs.md)\>

## Constructors

### Constructor

> **new ResolveTokenRequest**(...`args`: \[[`ResolveTokenRequestArgs`](../interfaces/ResolveTokenRequestArgs.md)\]): `ResolveTokenRequest`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ResolveTokenRequestArgs`](../interfaces/ResolveTokenRequestArgs.md)\] |  |

#### Returns

`ResolveTokenRequest`

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

> **run**(`ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<\{ `access_token`: `string`; `c_nonce?`: `string`; `c_nonce_expires_in?`: `number`; `expires_in?`: `number`; `id_token?`: `string`; `refresh_expires_in?`: `number`; `refresh_token?`: `string`; `scope?`: `string`; `session_state?`: `string`; `token_type`: `string`; \}\>

Defined in: [src/plugins/internal/oidc/connection/ResolveTokenRequest.ts:34](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/ResolveTokenRequest.ts#L34)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<\{ `access_token`: `string`; `c_nonce?`: `string`; `c_nonce_expires_in?`: `number`; `expires_in?`: `number`; `id_token?`: `string`; `refresh_expires_in?`: `number`; `refresh_token?`: `string`; `scope?`: `string`; `session_state?`: `string`; `token_type`: `string`; \}\>

#### Overrides

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`run`](../../../../overview/namespaces/Utils/classes/Task.md#run)
