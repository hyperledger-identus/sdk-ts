[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / AgentContext

# Class: AgentContext

Defined in: [packages/lib/sdk/src/edge-agent/Context.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Context.ts#L10)

## Extends

- `Context`\<\{ `Api`: [`Api`](../namespaces/Domain/interfaces/Api.md); `Apollo`: [`Apollo`](../namespaces/Domain/interfaces/Apollo.md); `Castor`: [`Castor`](../namespaces/Domain/interfaces/Castor.md); `Connections`: [`ConnectionsManager`](ConnectionsManager.md); `Events`: [`EventsManager`](EventsManager.md); `Jobs`: [`JobManager`](JobManager.md); `JWT`: [`JWT`](JWT.md); `Mercury`: [`Mercury`](../namespaces/Domain/interfaces/Mercury.md); `Plugins`: [`PluginManager`](PluginManager.md); `Pluto`: [`Pluto`](../namespaces/Domain/interfaces/Pluto.md); `SDJWT`: [`SDJWT`](SDJWT.md); `Seed`: [`SeedFunction`](../type-aliases/SeedFunction.md); \}\>

## Constructors

### Constructor

> **new AgentContext**(`modules`: \{ `Api`: [`Api`](../namespaces/Domain/interfaces/Api.md); `Apollo`: [`Apollo`](../namespaces/Domain/interfaces/Apollo.md); `Castor`: [`Castor`](../namespaces/Domain/interfaces/Castor.md); `Connections`: [`ConnectionsManager`](ConnectionsManager.md); `Events`: [`EventsManager`](EventsManager.md); `Jobs`: [`JobManager`](JobManager.md); `JWT`: [`JWT`](JWT.md); `Mercury`: [`Mercury`](../namespaces/Domain/interfaces/Mercury.md); `Plugins`: [`PluginManager`](PluginManager.md); `Pluto`: [`Pluto`](../namespaces/Domain/interfaces/Pluto.md); `SDJWT`: [`SDJWT`](SDJWT.md); `Seed`: [`SeedFunction`](../type-aliases/SeedFunction.md); \}): `AgentContext`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:88](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L88)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `modules` | \{ `Api`: [`Api`](../namespaces/Domain/interfaces/Api.md); `Apollo`: [`Apollo`](../namespaces/Domain/interfaces/Apollo.md); `Castor`: [`Castor`](../namespaces/Domain/interfaces/Castor.md); `Connections`: [`ConnectionsManager`](ConnectionsManager.md); `Events`: [`EventsManager`](EventsManager.md); `Jobs`: [`JobManager`](JobManager.md); `JWT`: [`JWT`](JWT.md); `Mercury`: [`Mercury`](../namespaces/Domain/interfaces/Mercury.md); `Plugins`: [`PluginManager`](PluginManager.md); `Pluto`: [`Pluto`](../namespaces/Domain/interfaces/Pluto.md); `SDJWT`: [`SDJWT`](SDJWT.md); `Seed`: [`SeedFunction`](../type-aliases/SeedFunction.md); \} |
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
| `modules.Seed` | [`SeedFunction`](../type-aliases/SeedFunction.md) |

#### Returns

`AgentContext`

#### Inherited from

`Task.Context<{ // Agent modules Connections: ConnectionsManager; Plugins: PluginManager; Events: EventsManager; Jobs: JobManager; // Building Blocks Api: Domain.Api; Apollo: Domain.Apollo; Castor: Domain.Castor; Mercury: Domain.Mercury; Pluto: Domain.Pluto; // Asyncronously fetch the short lived seed Seed: SeedFunction // internal modules JWT: JWT; SDJWT: SDJWT; }>.constructor`

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-api"></a> `Api` | `public` | [`Api`](../namespaces/Domain/interfaces/Api.md) | `Task.Context.Api` | [packages/lib/sdk/src/edge-agent/Context.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Context.ts#L18) |
| <a id="property-apollo"></a> `Apollo` | `public` | [`Apollo`](../namespaces/Domain/interfaces/Apollo.md) | `Task.Context.Apollo` | [packages/lib/sdk/src/edge-agent/Context.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Context.ts#L19) |
| <a id="property-castor"></a> `Castor` | `public` | [`Castor`](../namespaces/Domain/interfaces/Castor.md) | `Task.Context.Castor` | [packages/lib/sdk/src/edge-agent/Context.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Context.ts#L20) |
| <a id="property-connections"></a> `Connections` | `public` | [`ConnectionsManager`](ConnectionsManager.md) | `Task.Context.Connections` | [packages/lib/sdk/src/edge-agent/Context.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Context.ts#L12) |
| <a id="property-events"></a> `Events` | `public` | [`EventsManager`](EventsManager.md) | `Task.Context.Events` | [packages/lib/sdk/src/edge-agent/Context.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Context.ts#L14) |
| <a id="property-jobs"></a> `Jobs` | `public` | [`JobManager`](JobManager.md) | `Task.Context.Jobs` | [packages/lib/sdk/src/edge-agent/Context.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Context.ts#L15) |
| <a id="property-jwt"></a> `JWT` | `public` | [`JWT`](JWT.md) | `Task.Context.JWT` | [packages/lib/sdk/src/edge-agent/Context.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Context.ts#L28) |
| <a id="property-logger"></a> `logger` | `readonly` | [`Logger`](../interfaces/Logger.md) | `Task.Context.logger` | [packages/lib/sdk/src/utils/tasks.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L37) |
| <a id="property-mercury"></a> `Mercury` | `public` | [`Mercury`](../namespaces/Domain/interfaces/Mercury.md) | `Task.Context.Mercury` | [packages/lib/sdk/src/edge-agent/Context.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Context.ts#L21) |
| <a id="property-plugins"></a> `Plugins` | `public` | [`PluginManager`](PluginManager.md) | `Task.Context.Plugins` | [packages/lib/sdk/src/edge-agent/Context.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Context.ts#L13) |
| <a id="property-pluto"></a> `Pluto` | `public` | [`Pluto`](../namespaces/Domain/interfaces/Pluto.md) | `Task.Context.Pluto` | [packages/lib/sdk/src/edge-agent/Context.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Context.ts#L22) |
| <a id="property-sdjwt"></a> `SDJWT` | `public` | [`SDJWT`](SDJWT.md) | `Task.Context.SDJWT` | [packages/lib/sdk/src/edge-agent/Context.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Context.ts#L29) |
| <a id="property-seed"></a> `Seed` | `public` | [`SeedFunction`](../type-aliases/SeedFunction.md) | `Task.Context.Seed` | [packages/lib/sdk/src/edge-agent/Context.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/Context.ts#L25) |

## Methods

### extend() {#extend}

> **extend**(`deps`: `Record`\<`string`, `unknown`\>): `this`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:74](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L74)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `deps` | `Record`\<`string`, `unknown`\> |

#### Returns

`this`

#### Inherited from

`Task.Context.extend`

***

### run() {#run}

> **run**\<`T`\>(`task`: `Task`\<`T`, `any`\>): `Promise`\<`T`\>

Defined in: [packages/lib/sdk/src/utils/tasks.ts:60](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L60)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `task` | `Task`\<`T`, `any`\> |

#### Returns

`Promise`\<`T`\>

#### Inherited from

`Task.Context.run`
