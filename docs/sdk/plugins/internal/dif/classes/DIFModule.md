[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/dif](../README.md) / DIFModule

# Class: DIFModule

Defined in: [src/plugins/internal/dif/module/index.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/dif/module/index.ts#L5)

used to enable Modules to propagate the Context
and have access to runTask

## Extends

- [`Runner`](../../../../overview/namespaces/Utils/namespaces/Task/classes/Runner.md)

## Constructors

### Constructor

> **new DIFModule**(): `DIFModule`

#### Returns

`DIFModule`

#### Inherited from

[`Runner`](../../../../overview/namespaces/Utils/namespaces/Task/classes/Runner.md).[`constructor`](../../../../overview/namespaces/Utils/namespaces/Task/classes/Runner.md#constructor)

## Methods

### clone() {#clone}

> **clone**(): `DIFModule`

Defined in: [src/plugins/internal/dif/module/index.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/dif/module/index.ts#L6)

#### Returns

`DIFModule`

#### Overrides

[`Runner`](../../../../overview/namespaces/Utils/namespaces/Task/classes/Runner.md).[`clone`](../../../../overview/namespaces/Utils/namespaces/Task/classes/Runner.md#clone)

***

### createPresentationDefinition() {#createpresentationdefinition}

> **createPresentationDefinition**(`claims`: [`JsonObj`](../../../../overview/namespaces/Utils/type-aliases/JsonObj.md)\<[`Filter`](../namespaces/DIF/namespaces/Presentation/namespaces/Definition/namespaces/Field/interfaces/Filter.md)\>, `opts?`: \{ `issuer?`: `string`; \}): `Promise`\<[`Request`](../namespaces/DIF/namespaces/Presentation/interfaces/Request.md)\>

Defined in: [src/plugins/internal/dif/module/index.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/dif/module/index.ts#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `claims` | [`JsonObj`](../../../../overview/namespaces/Utils/type-aliases/JsonObj.md)\<[`Filter`](../namespaces/DIF/namespaces/Presentation/namespaces/Definition/namespaces/Field/interfaces/Filter.md)\> |
| `opts?` | \{ `issuer?`: `string`; \} |
| `opts.issuer?` | `string` |

#### Returns

`Promise`\<[`Request`](../namespaces/DIF/namespaces/Presentation/interfaces/Request.md)\>

***

### withContext() {#withcontext}

> **withContext**(`ctx`: [`Context`](../../../../overview/namespaces/Utils/namespaces/Task/type-aliases/Context.md)): [`Runner`](../../../../overview/namespaces/Utils/namespaces/Task/classes/Runner.md)

Defined in: [src/utils/tasks.ts:103](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L103)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../../../../overview/namespaces/Utils/namespaces/Task/type-aliases/Context.md) |

#### Returns

[`Runner`](../../../../overview/namespaces/Utils/namespaces/Task/classes/Runner.md)

#### Inherited from

[`Runner`](../../../../overview/namespaces/Utils/namespaces/Task/classes/Runner.md).[`withContext`](../../../../overview/namespaces/Utils/namespaces/Task/classes/Runner.md#withcontext)
