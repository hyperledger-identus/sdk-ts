[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [ExportableKey](../README.md) / factory

# Variable: factory()

> `const` **factory**: (`key`: [`PublicKey`](../../../classes/PublicKey.md) \| [`PrivateKey`](../../../classes/PrivateKey.md), `opts`: [`Options`](../../../interfaces/Options.md)) => \{ `Buffer`: () => `Buffer`\<`ArrayBufferLike`\>; `Hex`: () => `string`; `JWK`: (`base?`: [`Base`](../../JWK/interfaces/Base.md)) => [`JWK`](../interfaces/JWK.md); `PEM`: () => `string`; `String`: (`encoding?`: `BufferEncoding`) => `string`; \}

Defined in: packages/shared/domain/build/index.d.ts:747

factory to create Key property with desired functions
which allow converting the Key raw into different formats

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | [`PublicKey`](../../../classes/PublicKey.md) \| [`PrivateKey`](../../../classes/PrivateKey.md) | - |
| `opts` | [`Options`](../../../interfaces/Options.md) | - |

## Returns

\{ `Buffer`: () => `Buffer`\<`ArrayBufferLike`\>; `Hex`: () => `string`; `JWK`: (`base?`: [`Base`](../../JWK/interfaces/Base.md)) => [`JWK`](../interfaces/JWK.md); `PEM`: () => `string`; `String`: (`encoding?`: `BufferEncoding`) => `string`; \}

object with exportable functions

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `Buffer()` | () => `Buffer`\<`ArrayBufferLike`\> | packages/shared/domain/build/index.d.ts:748 |
| `Hex()` | () => `string` | packages/shared/domain/build/index.d.ts:749 |
| `JWK()` | (`base?`: [`Base`](../../JWK/interfaces/Base.md)) => [`JWK`](../interfaces/JWK.md) | packages/shared/domain/build/index.d.ts:750 |
| `PEM()` | () => `string` | packages/shared/domain/build/index.d.ts:751 |
| `String()` | (`encoding?`: `BufferEncoding`) => `string` | packages/shared/domain/build/index.d.ts:752 |
