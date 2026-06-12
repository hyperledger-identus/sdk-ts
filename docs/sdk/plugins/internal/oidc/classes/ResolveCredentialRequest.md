[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / ResolveCredentialRequest

# Class: ResolveCredentialRequest

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts#L29)

OIDC Convenience Task
Credential Offer to issued Credential

OIDC Credential Issuance flow 3/3

steps
  - fetchIssuerMetadata
  - CreateCredentialRequest
  - send CredentialRequest 
  - store Credential

## Extends

- `Task`\<[`JWTCredential`](../../../../overview/classes/JWTCredential.md), [`ResolveCredentialRequestArgs`](../interfaces/ResolveCredentialRequestArgs.md)\>

## Constructors

### Constructor

> **new ResolveCredentialRequest**(...`args`: \[[`ResolveCredentialRequestArgs`](../interfaces/ResolveCredentialRequestArgs.md)\]): `ResolveCredentialRequest`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ResolveCredentialRequestArgs`](../interfaces/ResolveCredentialRequestArgs.md)\] | - |

#### Returns

`ResolveCredentialRequest`

#### Inherited from

`Task<JWTCredential, ResolveCredentialRequestArgs>.constructor`

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

> **run**(`ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<[`JWTCredential`](../../../../overview/classes/JWTCredential.md)\>

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/connection/ResolveCredentialRequest.ts#L30)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<[`JWTCredential`](../../../../overview/classes/JWTCredential.md)\>

#### Overrides

`Task.run`
