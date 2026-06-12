[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / CreateCredentialRequest

# Class: CreateCredentialRequest

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts#L26)

create a CredentialRequest for the given offer
a connection with the relevant Issuer must have already been established

## Param

## Param

## Param

## Extends

- `Task`\<[`CredentialRequest`](CredentialRequest.md), [`CreateCredentialRequestArgs`](../interfaces/CreateCredentialRequestArgs.md)\>

## Constructors

### Constructor

> **new CreateCredentialRequest**(...`args`: \[[`CreateCredentialRequestArgs`](../interfaces/CreateCredentialRequestArgs.md)\]): `CreateCredentialRequest`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`CreateCredentialRequestArgs`](../interfaces/CreateCredentialRequestArgs.md)\] | - |

#### Returns

`CreateCredentialRequest`

#### Inherited from

`Utils.Task<CredentialRequest, CreateCredentialRequestArgs>.constructor`

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

> **run**(`ctx`: [`Context`](../type-aliases/Context.md)): `Promise`\<[`CredentialRequest`](CredentialRequest.md)\>

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/tasks/CreateCredentialRequest.ts#L27)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Promise`\<[`CredentialRequest`](CredentialRequest.md)\>

#### Overrides

`Utils.Task.run`
