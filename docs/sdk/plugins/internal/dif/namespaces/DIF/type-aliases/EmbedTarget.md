[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [plugins/internal/dif](../../../README.md) / [DIF](../README.md) / EmbedTarget

# Type Alias: EmbedTarget\<T\>

> **EmbedTarget**\<`T`\> = \{ `presentation_submission`: [`Submission`](../namespaces/Presentation/interfaces/Submission.md); \} & `{ [k in T]?: string[] }`

Defined in: [packages/lib/sdk/src/plugins/internal/dif/types.ts:77](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/dif/types.ts#L77)

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `presentation_submission` | [`Submission`](../namespaces/Presentation/interfaces/Submission.md) | [packages/lib/sdk/src/plugins/internal/dif/types.ts:78](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/dif/types.ts#L78) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `string` | `"verifiablePresentation"` |
