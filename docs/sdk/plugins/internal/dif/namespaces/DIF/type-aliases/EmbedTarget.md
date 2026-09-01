[**@hyperledger/identus-sdk v8.1.1**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [plugins/internal/dif](../../../README.md) / [DIF](../README.md) / EmbedTarget

# Type Alias: EmbedTarget\<T\>

> **EmbedTarget**\<`T`\> = \{ `presentation_submission`: [`Submission`](../namespaces/Presentation/interfaces/Submission.md); \} & `{ [k in T]?: string[] }`

Defined in: [packages/lib/sdk/src/plugins/internal/dif/types.ts:77](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/dif/types.ts#L77)

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `presentation_submission` | [`Submission`](../namespaces/Presentation/interfaces/Submission.md) | [packages/lib/sdk/src/plugins/internal/dif/types.ts:78](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/dif/types.ts#L78) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `string` | `"verifiablePresentation"` |
