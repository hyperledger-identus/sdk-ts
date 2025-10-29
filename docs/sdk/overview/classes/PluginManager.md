[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PluginManager

# Class: PluginManager

Defined in: [src/plugins/PluginManager.ts:4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/PluginManager.ts#L4)

## Constructors

### Constructor

> **new PluginManager**(): `PluginManager`

#### Returns

`PluginManager`

## Methods

### findProtocol() {#findprotocol}

> **findProtocol**(`type`: `string`, `id`: `string`): [`Ctor`](../namespaces/Utils/interfaces/Ctor.md)\<[`Task`](../namespaces/Utils/classes/Task.md)\<`any`, `unknown`\>\> \| `null`

Defined in: [src/plugins/PluginManager.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/PluginManager.ts#L19)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `id` | `string` |

#### Returns

[`Ctor`](../namespaces/Utils/interfaces/Ctor.md)\<[`Task`](../namespaces/Utils/classes/Task.md)\<`any`, `unknown`\>\> \| `null`

***

### getModules() {#getmodules}

> **getModules**(): \{\[`k`: `string`\]: `any`; \}

Defined in: [src/plugins/PluginManager.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/PluginManager.ts#L11)

#### Returns

\{\[`k`: `string`\]: `any`; \}

***

### register() {#register}

> **register**(`plugin`: [`Plugin`](Plugin.md)): `void`

Defined in: [src/plugins/PluginManager.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/PluginManager.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `plugin` | [`Plugin`](Plugin.md) |

#### Returns

`void`
