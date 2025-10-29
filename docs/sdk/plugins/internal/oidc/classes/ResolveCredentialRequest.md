[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / ResolveCredentialRequest

# Class: ResolveCredentialRequest

Defined in: [src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts#L28)

OIDC Convenience Task
Credential Offer to issued Credential

OIDC Credential Issuance flow 3/3

steps
  - fetchIssuerMetadata
  - CreateCredentialRequest
  - send CredentialRequest 
  - store Credential

## Extends

- [`Task`](../../../../overview/namespaces/Utils/classes/Task.md)\<[`JWTCredential`](../../../../overview/classes/JWTCredential.md), [`ResolveCredentialRequestArgs`](../interfaces/ResolveCredentialRequestArgs.md)\>

## Constructors

### Constructor

> **new ResolveCredentialRequest**(...`args`: \[[`ResolveCredentialRequestArgs`](../interfaces/ResolveCredentialRequestArgs.md)\]): `ResolveCredentialRequest`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ResolveCredentialRequestArgs`](../interfaces/ResolveCredentialRequestArgs.md)\] |  |

#### Returns

`ResolveCredentialRequest`

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

> **run**(`ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<[`JWTCredential`](../../../../overview/classes/JWTCredential.md)\>

Defined in: [src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts#L29)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<[`JWTCredential`](../../../../overview/classes/JWTCredential.md)\>

#### Overrides

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`run`](../../../../overview/namespaces/Utils/classes/Task.md#run)
