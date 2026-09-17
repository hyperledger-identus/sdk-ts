[**@hyperledger/identus-sdk v8.1.3**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [plugins/internal/dif](../../../README.md) / [DIF](../README.md) / EmbedTarget

# Type Alias: EmbedTarget\<T\>

> **EmbedTarget**\<`T`\> = \{ `presentation_submission`: [`Submission`](../namespaces/Presentation/interfaces/Submission.md); \} & `{ [k in T]?: string[] }`

Defined in: [packages/lib/sdk/src/plugins/internal/dif/types.ts:77](https://github.com/hyperledger-identus/sdk-ts/blob/4ce15c3080f44e7e00a0b9a53e696f0a8ec66794/packages/lib/sdk/src/plugins/internal/dif/types.ts#L77)

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `presentation_submission` | [`Submission`](../namespaces/Presentation/interfaces/Submission.md) | [packages/lib/sdk/src/plugins/internal/dif/types.ts:78](https://github.com/hyperledger-identus/sdk-ts/blob/4ce15c3080f44e7e00a0b9a53e696f0a8ec66794/packages/lib/sdk/src/plugins/internal/dif/types.ts#L78) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `string` | `"verifiablePresentation"` |
