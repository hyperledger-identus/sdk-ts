[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / AgentContext

# Class: AgentContext

Defined in: [src/edge-agent/Context.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Context.ts#L9)

Context is provided to running tasks
it optimistically provides access to Modules

## Extends

- [`Context`](../namespaces/Utils/namespaces/Task/type-aliases/Context.md)\<\{ `Api`: [`Api`](../namespaces/Domain/interfaces/Api.md); `Apollo`: [`Apollo`](../namespaces/Domain/interfaces/Apollo.md); `Castor`: [`Castor`](../namespaces/Domain/interfaces/Castor.md); `Connections`: [`ConnectionsManager`](ConnectionsManager.md); `Events`: [`EventsManager`](EventsManager.md); `Jobs`: [`JobManager`](JobManager.md); `JWT`: [`JWT`](JWT.md); `Mercury`: [`Mercury`](../namespaces/Domain/interfaces/Mercury.md); `Plugins`: [`PluginManager`](PluginManager.md); `Pluto`: [`Pluto`](../namespaces/Domain/interfaces/Pluto.md); `SDJWT`: [`SDJWT`](SDJWT.md); `Seed`: [`Seed`](../namespaces/Domain/interfaces/Seed.md); \}\>

## Constructors

### Constructor

> **new AgentContext**(`modules`: \{ `Api`: [`Api`](../namespaces/Domain/interfaces/Api.md); `Apollo`: [`Apollo`](../namespaces/Domain/interfaces/Apollo.md); `Castor`: [`Castor`](../namespaces/Domain/interfaces/Castor.md); `Connections`: [`ConnectionsManager`](ConnectionsManager.md); `Events`: [`EventsManager`](EventsManager.md); `Jobs`: [`JobManager`](JobManager.md); `JWT`: [`JWT`](JWT.md); `Mercury`: [`Mercury`](../namespaces/Domain/interfaces/Mercury.md); `Plugins`: [`PluginManager`](PluginManager.md); `Pluto`: [`Pluto`](../namespaces/Domain/interfaces/Pluto.md); `SDJWT`: [`SDJWT`](SDJWT.md); `Seed`: [`Seed`](../namespaces/Domain/interfaces/Seed.md); \}): `AgentContext`

Defined in: [src/utils/tasks.ts:83](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L83)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `modules` | \{ `Api`: [`Api`](../namespaces/Domain/interfaces/Api.md); `Apollo`: [`Apollo`](../namespaces/Domain/interfaces/Apollo.md); `Castor`: [`Castor`](../namespaces/Domain/interfaces/Castor.md); `Connections`: [`ConnectionsManager`](ConnectionsManager.md); `Events`: [`EventsManager`](EventsManager.md); `Jobs`: [`JobManager`](JobManager.md); `JWT`: [`JWT`](JWT.md); `Mercury`: [`Mercury`](../namespaces/Domain/interfaces/Mercury.md); `Plugins`: [`PluginManager`](PluginManager.md); `Pluto`: [`Pluto`](../namespaces/Domain/interfaces/Pluto.md); `SDJWT`: [`SDJWT`](SDJWT.md); `Seed`: [`Seed`](../namespaces/Domain/interfaces/Seed.md); \} |
| `modules.Api` | [`Api`](../namespaces/Domain/interfaces/Api.md) |
| `modules.Apollo` | [`Apollo`](../namespaces/Domain/interfaces/Apollo.md) |
| `modules.Castor` | [`Castor`](../namespaces/Domain/interfaces/Castor.md) |
| `modules.Connections` | [`ConnectionsManager`](ConnectionsManager.md) |
| `modules.Events` | [`EventsManager`](EventsManager.md) |
| `modules.Jobs` | [`JobManager`](JobManager.md) |
| `modules.JWT` | [`JWT`](JWT.md) |
| `modules.Mercury` | [`Mercury`](../namespaces/Domain/interfaces/Mercury.md) |
| `modules.Plugins` | [`PluginManager`](PluginManager.md) |
| `modules.Pluto` | [`Pluto`](../namespaces/Domain/interfaces/Pluto.md) |
| `modules.SDJWT` | [`SDJWT`](SDJWT.md) |
| `modules.Seed` | [`Seed`](../namespaces/Domain/interfaces/Seed.md) |

#### Returns

`AgentContext`

#### Inherited from

`Task.Context<{ // Agent modules Connections: ConnectionsManager; Plugins: PluginManager; Events: EventsManager; Jobs: JobManager; // Building Blocks Api: Domain.Api; Apollo: Domain.Apollo; Castor: Domain.Castor; Mercury: Domain.Mercury; Pluto: Domain.Pluto; Seed: Domain.Seed; // internal modules JWT: JWT; SDJWT: SDJWT; }>.constructor`

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="api"></a> `Api` | `public` | [`Api`](../namespaces/Domain/interfaces/Api.md) | `Task.Context.Api` | [src/edge-agent/Context.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Context.ts#L17) |
| <a id="apollo"></a> `Apollo` | `public` | [`Apollo`](../namespaces/Domain/interfaces/Apollo.md) | `Task.Context.Apollo` | [src/edge-agent/Context.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Context.ts#L18) |
| <a id="castor"></a> `Castor` | `public` | [`Castor`](../namespaces/Domain/interfaces/Castor.md) | `Task.Context.Castor` | [src/edge-agent/Context.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Context.ts#L19) |
| <a id="connections"></a> `Connections` | `public` | [`ConnectionsManager`](ConnectionsManager.md) | `Task.Context.Connections` | [src/edge-agent/Context.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Context.ts#L11) |
| <a id="events"></a> `Events` | `public` | [`EventsManager`](EventsManager.md) | `Task.Context.Events` | [src/edge-agent/Context.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Context.ts#L13) |
| <a id="jobs"></a> `Jobs` | `public` | [`JobManager`](JobManager.md) | `Task.Context.Jobs` | [src/edge-agent/Context.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Context.ts#L14) |
| <a id="jwt"></a> `JWT` | `public` | [`JWT`](JWT.md) | `Task.Context.JWT` | [src/edge-agent/Context.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Context.ts#L25) |
| <a id="logger"></a> `logger` | `readonly` | [`Logger`](../namespaces/Utils/interfaces/Logger.md) | `Task.Context.logger` | [src/utils/tasks.ts:36](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L36) |
| <a id="mercury"></a> `Mercury` | `public` | [`Mercury`](../namespaces/Domain/interfaces/Mercury.md) | `Task.Context.Mercury` | [src/edge-agent/Context.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Context.ts#L20) |
| <a id="plugins"></a> `Plugins` | `public` | [`PluginManager`](PluginManager.md) | `Task.Context.Plugins` | [src/edge-agent/Context.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Context.ts#L12) |
| <a id="pluto"></a> `Pluto` | `public` | [`Pluto`](../namespaces/Domain/interfaces/Pluto.md) | `Task.Context.Pluto` | [src/edge-agent/Context.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Context.ts#L21) |
| <a id="sdjwt"></a> `SDJWT` | `public` | [`SDJWT`](SDJWT.md) | `Task.Context.SDJWT` | [src/edge-agent/Context.ts:26](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Context.ts#L26) |
| <a id="seed"></a> `Seed` | `public` | [`Seed`](../namespaces/Domain/interfaces/Seed.md) | `Task.Context.Seed` | [src/edge-agent/Context.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/Context.ts#L22) |

## Methods

### extend() {#extend}

> **extend**(`deps`: [`JsonObj`](../namespaces/Utils/type-aliases/JsonObj.md)): `this`

Defined in: [src/utils/tasks.ts:69](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L69)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deps` | [`JsonObj`](../namespaces/Utils/type-aliases/JsonObj.md) |

#### Returns

`this`

#### Inherited from

`Task.Context.extend`

***

### run() {#run}

> **run**\<`T`\>(`task`: [`Task`](../namespaces/Utils/classes/Task.md)\<`T`, `any`\>): `Promise`\<`T`\>

Defined in: [src/utils/tasks.ts:55](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L55)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `task` | [`Task`](../namespaces/Utils/classes/Task.md)\<`T`, `any`\> |

#### Returns

`Promise`\<`T`\>

#### Inherited from

`Task.Context.run`
