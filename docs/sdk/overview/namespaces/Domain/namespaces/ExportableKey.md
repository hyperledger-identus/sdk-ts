[**@hyperledger/identus-sdk**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / ExportableKey

# ExportableKey

Declaration merge to contain key conversion functions

## Interfaces

### Common

Defined in: [src/domain/models/keyManagement/exportable/ExportableKey.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L29)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="to"></a> `to` | \{ `Buffer`: () => `Buffer`; `String`: (`encoding?`: `BufferEncoding`) => `string`; \} | [src/domain/models/keyManagement/exportable/ExportableKey.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L30) |
| `to.Buffer` | () => `Buffer` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L31) |
| `to.String` | (`encoding?`: `BufferEncoding`) => `string` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L32) |

***

### JWK

Defined in: [src/domain/models/keyManagement/exportable/ExportableKey.ts:36](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L36)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="to-1"></a> `to` | \{ `JWK`: (`base?`: [`Base`](JWK-1.md#base)) => [`JWK`](../README.md#jwk); \} | [src/domain/models/keyManagement/exportable/ExportableKey.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L37) |
| `to.JWK` | (`base?`: [`Base`](JWK-1.md#base)) => [`JWK`](../README.md#jwk) | [src/domain/models/keyManagement/exportable/ExportableKey.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L38) |

***

### PEM

Defined in: [src/domain/models/keyManagement/exportable/ExportableKey.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L42)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="to-2"></a> `to` | \{ `PEM`: () => `string`; \} | [src/domain/models/keyManagement/exportable/ExportableKey.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L43) |
| `to.PEM` | () => `string` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L44) |

## Type Aliases

### All

> **All** = [`Common`](#common) & [`JWK`](#jwk) & [`PEM`](#pem)

Defined in: [src/domain/models/keyManagement/exportable/ExportableKey.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L27)

## Functions

### factory()

> **factory**(`key`: [`PublicKey`](../README.md#publickey-3) \| [`PrivateKey`](../README.md#privatekey-2), `opts`: [`Options`](../README.md#options)): \{ `Buffer`: () => `Buffer`\<`ArrayBufferLike`\>; `Hex`: () => `string`; `JWK`: (`base?`: [`Base`](JWK-1.md#base)) => [`JWK`](../README.md#jwk); `PEM`: () => `string`; `String`: (`encoding?`: `BufferEncoding`) => `string`; \}

Defined in: [src/domain/models/keyManagement/exportable/ExportableKey.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L56)

factory to create Key property with desired functions
which allow converting the Key raw into different formats

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | [`PublicKey`](../README.md#publickey-3) \| [`PrivateKey`](../README.md#privatekey-2) |  |
| `opts` | [`Options`](../README.md#options) |  |

#### Returns

\{ `Buffer`: () => `Buffer`\<`ArrayBufferLike`\>; `Hex`: () => `string`; `JWK`: (`base?`: [`Base`](JWK-1.md#base)) => [`JWK`](../README.md#jwk); `PEM`: () => `string`; `String`: (`encoding?`: `BufferEncoding`) => `string`; \}

object with exportable functions

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `Buffer()` | () => `Buffer`\<`ArrayBufferLike`\> | [src/domain/models/keyManagement/exportable/ExportableKey.ts:57](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L57) |
| `Hex()` | () => `string` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:59](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L59) |
| `JWK()` | (`base?`: [`Base`](JWK-1.md#base)) => [`JWK`](../README.md#jwk) | [src/domain/models/keyManagement/exportable/ExportableKey.ts:60](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L60) |
| `PEM()` | () => `string` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:61](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L61) |
| `String()` | (`encoding?`: `BufferEncoding`) => `string` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:62](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L62) |
