[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [plugins/internal/dif](../../../README.md) / [DIF](../README.md) / EmbedTarget

# Type Alias: EmbedTarget\<T\>

> **EmbedTarget**\<`T`\> = \{ `presentation_submission`: [`Submission`](../namespaces/Presentation/interfaces/Submission.md); \} & `{ [k in T]?: string[] }`

Defined in: [src/plugins/internal/dif/types.ts:77](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/dif/types.ts#L77)

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `presentation_submission` | [`Submission`](../namespaces/Presentation/interfaces/Submission.md) | [src/plugins/internal/dif/types.ts:78](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/dif/types.ts#L78) |

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `string` | `"verifiablePresentation"` |
