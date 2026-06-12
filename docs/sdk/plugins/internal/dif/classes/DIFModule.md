[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/dif](../README.md) / DIFModule

# Class: DIFModule

Defined in: [packages/lib/sdk/src/plugins/internal/dif/module/index.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/dif/module/index.ts#L5)

## Extends

- `Runner`

## Constructors

### Constructor

> **new DIFModule**(): `DIFModule`

#### Returns

`DIFModule`

#### Inherited from

`Task.Runner.constructor`

## Methods

### clone() {#clone}

> **clone**(): `DIFModule`

Defined in: [packages/lib/sdk/src/plugins/internal/dif/module/index.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/dif/module/index.ts#L6)

#### Returns

`DIFModule`

#### Overrides

`Task.Runner.clone`

***

### createPresentationDefinition() {#createpresentationdefinition}

> **createPresentationDefinition**(`claims`: [`JsonObj`](../../../../overview/type-aliases/JsonObj.md)\<[`Filter`](../namespaces/DIF/namespaces/Presentation/namespaces/Definition/namespaces/Field/interfaces/Filter.md)\>, `opts?`: \{ `issuer?`: `string`; \}): `Promise`\<[`Request`](../namespaces/DIF/namespaces/Presentation/interfaces/Request.md)\>

Defined in: [packages/lib/sdk/src/plugins/internal/dif/module/index.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/dif/module/index.ts#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `claims` | [`JsonObj`](../../../../overview/type-aliases/JsonObj.md)\<[`Filter`](../namespaces/DIF/namespaces/Presentation/namespaces/Definition/namespaces/Field/interfaces/Filter.md)\> |
| `opts?` | \{ `issuer?`: `string`; \} |
| `opts.issuer?` | `string` |

#### Returns

`Promise`\<[`Request`](../namespaces/DIF/namespaces/Presentation/interfaces/Request.md)\>

***

### withContext() {#withcontext}

> **withContext**(`ctx`: `ContextProxy`): `Runner`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:108](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L108)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | `ContextProxy` |

#### Returns

`Runner`

#### Inherited from

`Task.Runner.withContext`
