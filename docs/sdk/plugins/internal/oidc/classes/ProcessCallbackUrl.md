[**@hyperledger/identus-sdk v8.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / ProcessCallbackUrl

# Class: ProcessCallbackUrl

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts#L12)

## Extends

- `Task`\<[`AuthorizationResponse`](AuthorizationResponse.md), [`ProcessCallbackUrlArgs`](../interfaces/ProcessCallbackUrlArgs.md)\>

## Constructors

### Constructor

> **new ProcessCallbackUrl**(...`args`: \[[`ProcessCallbackUrlArgs`](../interfaces/ProcessCallbackUrlArgs.md)\]): `ProcessCallbackUrl`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ProcessCallbackUrlArgs`](../interfaces/ProcessCallbackUrlArgs.md)\] | - |

#### Returns

`ProcessCallbackUrl`

#### Inherited from

`Utils.Task<AuthorizationResponse, ProcessCallbackUrlArgs>.constructor`

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/tasks.ts#L27)

#### Returns

`unknown`

#### Inherited from

`Utils.Task.log`

***

### run() {#run}

> **run**(): `Promise`\<[`AuthorizationResponse`](AuthorizationResponse.md)\>

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts#L13)

#### Returns

`Promise`\<[`AuthorizationResponse`](AuthorizationResponse.md)\>

#### Overrides

`Utils.Task.run`
