[**@hyperledger/identus-sdk**](../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../README.md) / [plugins/internal/dif](../../README.md) / DIF

# DIF

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [Presentation](namespaces/Presentation/README.md) | - |

## Type Aliases

### EmbedTarget\<T\>

> **EmbedTarget**\<`T`\> = \{ `presentation_submission`: [`Submission`](namespaces/Presentation/README.md#submission); \} & `{ [k in T]?: string[] }`

Defined in: [src/plugins/internal/dif/types.ts:77](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L77)

#### Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `presentation_submission` | [`Submission`](namespaces/Presentation/README.md#submission) | [src/plugins/internal/dif/types.ts:78](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L78) |

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `string` | `"verifiablePresentation"` |

## Variables

### PRESENTATION

> `const` **PRESENTATION**: `"dif/presentation-exchange/submission@v1.0"` = `'dif/presentation-exchange/submission@v1.0'`

Defined in: [src/plugins/internal/dif/types.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L3)

***

### PRESENTATION\_REQUEST

> `const` **PRESENTATION\_REQUEST**: `"dif/presentation-exchange/definitions@v1.0"` = `'dif/presentation-exchange/definitions@v1.0'`

Defined in: [src/plugins/internal/dif/types.ts:2](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L2)
