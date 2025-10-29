[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Utils](../README.md) / Task

# Abstract Class: Task\<T, Args\>

Defined in: [src/utils/tasks.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L11)

A Task encapsulates a unit of work

args constructor parameter is mandatory if Args type given
args constructor parameter is optional if no Args type given

## Extended by

- [`FetchCredentialDefinition`](../../../../plugins/internal/anoncreds/classes/FetchCredentialDefinition.md)
- [`fetchSchema`](../../../../plugins/internal/anoncreds/classes/fetchSchema.md)
- [`CreateAuthorizationRequest`](../../../../plugins/internal/oidc/classes/CreateAuthorizationRequest.md)
- [`ProcessCallbackUrl`](../../../../plugins/internal/oidc/classes/ProcessCallbackUrl.md)
- [`ResolveAuthorizationRequest`](../../../../plugins/internal/oidc/classes/ResolveAuthorizationRequest.md)
- [`ResolveCredentialRequest`](../../../../plugins/internal/oidc/classes/ResolveCredentialRequest.md)
- [`ResolveTokenRequest`](../../../../plugins/internal/oidc/classes/ResolveTokenRequest.md)
- [`CreateCredentialRequest`](../../../../plugins/internal/oidc/classes/CreateCredentialRequest.md)
- [`FetchAuthServerMeta`](../../../../plugins/internal/oidc/classes/FetchAuthServerMeta.md)
- [`FetchIssuerMetadata`](../../../../plugins/internal/oidc/classes/FetchIssuerMetadata.md)
- [`ParseCredentialOffer`](../../../../plugins/internal/oidc/classes/ParseCredentialOffer.md)
- [`Task`](../../Plugins/classes/Task.md)
- [`CreatePrismDID`](../../../classes/CreatePrismDID.md)
- [`CreateOOBOffer`](../../../classes/CreateOOBOffer.md)
- [`RunProtocol`](../../../classes/RunProtocol.md)
- [`PKInstance`](../../../classes/PKInstance.md)
- [`CreateOOBPresentationRequest`](../../../classes/CreateOOBPresentationRequest.md)
- [`CreatePresentationRequest`](../../../classes/CreatePresentationRequest.md)
- [`CreatePresentation`](../../../classes/CreatePresentation.md)
- [`HandlePresentation`](../../../../plugins/internal/oea/classes/HandlePresentation.md)
- [`HandleRevocation`](../../../../plugins/internal/oea/classes/HandleRevocation.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `Args` | `unknown` |

## Constructors

### Constructor

> **new Task**\<`T`, `Args`\>(...`args`: `unknown` *extends* `Args` ? \[\] : \[`Args`\]): `Task`\<`T`, `Args`\>

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L18)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | `unknown` *extends* `Args` ? \[\] : \[`Args`\] |  |

#### Returns

`Task`\<`T`, `Args`\>

## Methods

### log() {#log}

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L26)

#### Returns

`unknown`

***

### run() {#run}

> `abstract` **run**(`ctx`: [`Context`](../namespaces/Task/type-aliases/Context.md)): `Promise`\<`T`\>

Defined in: [src/utils/tasks.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L23)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../namespaces/Task/type-aliases/Context.md) |

#### Returns

`Promise`\<`T`\>
