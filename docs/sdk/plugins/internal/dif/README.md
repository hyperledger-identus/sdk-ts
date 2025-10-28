[**@hyperledger/identus-sdk**](../../../README.md)

***

[@hyperledger/identus-sdk](../../../README.md) / plugins/internal/dif

# plugins/internal/dif

This export contains the DIF plugin for the Identus SDK
Please use the following export

## How to use
Typescript / esmodules

```typescript
import * as DIF from "@hyperledger/identus-sdk/plugins/dif";
```

Or with cjs modules

```typescript
const DIF = require("@hyperledger/identus-sdk/plugins/dif");
```

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [DIF](namespaces/DIF/README.md) | - |

## Classes

### DIFModule

Defined in: [src/plugins/internal/dif/module/index.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/module/index.ts#L5)

used to enable Modules to propagate the Context
and have access to runTask

#### Extends

- [`Runner`](../../../overview/namespaces/Utils/namespaces/Task.md#runner)

#### Constructors

##### Constructor

> **new DIFModule**(): [`DIFModule`](#difmodule)

###### Returns

[`DIFModule`](#difmodule)

###### Inherited from

[`Runner`](../../../overview/namespaces/Utils/namespaces/Task.md#runner).[`constructor`](../../../overview/namespaces/Utils/namespaces/Task.md#runner#constructor-1)

#### Methods

##### clone()

> **clone**(): [`DIFModule`](#difmodule)

Defined in: [src/plugins/internal/dif/module/index.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/module/index.ts#L6)

###### Returns

[`DIFModule`](#difmodule)

###### Overrides

[`Runner`](../../../overview/namespaces/Utils/namespaces/Task.md#runner).[`clone`](../../../overview/namespaces/Utils/namespaces/Task.md#runner#clone)

##### createPresentationDefinition()

> **createPresentationDefinition**(`claims`: [`JsonObj`](../../../overview/namespaces/Utils/README.md#jsonobj)\<[`Filter`](namespaces/DIF/namespaces/Presentation/namespaces/Definition/namespaces/Field.md#filter)\>, `opts?`: \{ `issuer?`: `string`; \}): `Promise`\<[`Request`](namespaces/DIF/namespaces/Presentation/README.md#request)\>

Defined in: [src/plugins/internal/dif/module/index.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/module/index.ts#L10)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `claims` | [`JsonObj`](../../../overview/namespaces/Utils/README.md#jsonobj)\<[`Filter`](namespaces/DIF/namespaces/Presentation/namespaces/Definition/namespaces/Field.md#filter)\> |
| `opts?` | \{ `issuer?`: `string`; \} |
| `opts.issuer?` | `string` |

###### Returns

`Promise`\<[`Request`](namespaces/DIF/namespaces/Presentation/README.md#request)\>

##### withContext()

> **withContext**(`ctx`: [`Context`](../../../overview/namespaces/Utils/namespaces/Task.md#context)): [`Runner`](../../../overview/namespaces/Utils/namespaces/Task.md#runner)

Defined in: [src/utils/tasks.ts:103](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L103)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../../../overview/namespaces/Utils/namespaces/Task.md#context) |

###### Returns

[`Runner`](../../../overview/namespaces/Utils/namespaces/Task.md#runner)

###### Inherited from

[`Runner`](../../../overview/namespaces/Utils/namespaces/Task.md#runner).[`withContext`](../../../overview/namespaces/Utils/namespaces/Task.md#runner#withcontext)

## Type Aliases

### Context

> **Context** = [`Context`](../../../overview/namespaces/Plugins.md#context)\<[`Modules`](#modules) & [`Context`](../anoncreds.md#context)\>

Defined in: [src/plugins/internal/dif/index.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/index.ts#L30)

***

### Modules

> **Modules** = \{ `DIF`: [`DIFModule`](#difmodule); \}

Defined in: [src/plugins/internal/dif/index.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/index.ts#L29)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="dif"></a> `DIF` | [`DIFModule`](#difmodule) | [src/plugins/internal/dif/index.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/index.ts#L29) |

## Variables

### plugin

> `const` **plugin**: [`Plugin`](../../../overview/README.md#plugin)

Defined in: [src/plugins/internal/dif/index.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/index.ts#L31)
