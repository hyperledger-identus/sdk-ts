[**@hyperledger/identus-sdk v8.1.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PluginManager

# Class: PluginManager

Defined in: [packages/lib/sdk/src/plugins/PluginManager.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/PluginManager.ts#L4)

## Constructors

### Constructor

> **new PluginManager**(): `PluginManager`

#### Returns

`PluginManager`

## Methods

### findProtocol() {#findprotocol}

> **findProtocol**(`type`: `string`, `id`: `string`): [`Ctor`](../interfaces/Ctor.md)\<`Task`\<`any`, `unknown`\>\> \| `null`

Defined in: [packages/lib/sdk/src/plugins/PluginManager.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/PluginManager.ts#L19)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `id` | `string` |

#### Returns

[`Ctor`](../interfaces/Ctor.md)\<`Task`\<`any`, `unknown`\>\> \| `null`

***

### getModules() {#getmodules}

> **getModules**(): \{\[`k`: `string`\]: `any`; \}

Defined in: [packages/lib/sdk/src/plugins/PluginManager.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/PluginManager.ts#L11)

#### Returns

\{\[`k`: `string`\]: `any`; \}

***

### register() {#register}

> **register**(`plugin`: [`Plugin`](Plugin.md)): `void`

Defined in: [packages/lib/sdk/src/plugins/PluginManager.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/170e1efdccd6a1bbc55c6992c3fbf0ba2b84a0ed/packages/lib/sdk/src/plugins/PluginManager.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `plugin` | [`Plugin`](Plugin.md) |

#### Returns

`void`
