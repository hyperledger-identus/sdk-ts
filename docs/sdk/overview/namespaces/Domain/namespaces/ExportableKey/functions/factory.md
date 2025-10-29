[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [ExportableKey](../README.md) / factory

# Function: factory()

> **factory**(`key`: [`PublicKey`](../../../classes/PublicKey.md) \| [`PrivateKey`](../../../classes/PrivateKey.md), `opts`: [`Options`](../../../interfaces/Options.md)): \{ `Buffer`: () => `Buffer`\<`ArrayBufferLike`\>; `Hex`: () => `string`; `JWK`: (`base?`: [`Base`](../../JWK/interfaces/Base.md)) => [`JWK`](../../../type-aliases/JWK.md); `PEM`: () => `string`; `String`: (`encoding?`: `BufferEncoding`) => `string`; \}

Defined in: [src/domain/models/keyManagement/exportable/ExportableKey.ts:56](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/ExportableKey.ts#L56)

factory to create Key property with desired functions
which allow converting the Key raw into different formats

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | [`PublicKey`](../../../classes/PublicKey.md) \| [`PrivateKey`](../../../classes/PrivateKey.md) |  |
| `opts` | [`Options`](../../../interfaces/Options.md) |  |

## Returns

\{ `Buffer`: () => `Buffer`\<`ArrayBufferLike`\>; `Hex`: () => `string`; `JWK`: (`base?`: [`Base`](../../JWK/interfaces/Base.md)) => [`JWK`](../../../type-aliases/JWK.md); `PEM`: () => `string`; `String`: (`encoding?`: `BufferEncoding`) => `string`; \}

object with exportable functions

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `Buffer()` | () => `Buffer`\<`ArrayBufferLike`\> | [src/domain/models/keyManagement/exportable/ExportableKey.ts:57](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/ExportableKey.ts#L57) |
| `Hex()` | () => `string` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:59](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/ExportableKey.ts#L59) |
| `JWK()` | (`base?`: [`Base`](../../JWK/interfaces/Base.md)) => [`JWK`](../../../type-aliases/JWK.md) | [src/domain/models/keyManagement/exportable/ExportableKey.ts:60](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/ExportableKey.ts#L60) |
| `PEM()` | () => `string` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:61](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/ExportableKey.ts#L61) |
| `String()` | (`encoding?`: `BufferEncoding`) => `string` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:62](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/ExportableKey.ts#L62) |
