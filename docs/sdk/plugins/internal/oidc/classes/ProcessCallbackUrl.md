[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / ProcessCallbackUrl

# Class: ProcessCallbackUrl

Defined in: [src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts#L11)

A Task encapsulates a unit of work

args constructor parameter is mandatory if Args type given
args constructor parameter is optional if no Args type given

## Extends

- [`Task`](../../../../overview/namespaces/Utils/classes/Task.md)\<[`AuthorizationResponse`](AuthorizationResponse.md), [`ProcessCallbackUrlArgs`](../interfaces/ProcessCallbackUrlArgs.md)\>

## Constructors

### Constructor

> **new ProcessCallbackUrl**(...`args`: \[[`ProcessCallbackUrlArgs`](../interfaces/ProcessCallbackUrlArgs.md)\]): `ProcessCallbackUrl`

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | \[[`ProcessCallbackUrlArgs`](../interfaces/ProcessCallbackUrlArgs.md)\] |  |

#### Returns

`ProcessCallbackUrl`

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

> **run**(): `Promise`\<[`AuthorizationResponse`](AuthorizationResponse.md)\>

Defined in: [src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/connection/ProcessCallbackUrl.ts#L12)

#### Returns

`Promise`\<[`AuthorizationResponse`](AuthorizationResponse.md)\>

#### Overrides

[`Task`](../../../../overview/namespaces/Utils/classes/Task.md).[`run`](../../../../overview/namespaces/Utils/classes/Task.md#run)
