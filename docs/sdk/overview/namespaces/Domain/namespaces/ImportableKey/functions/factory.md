[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [ImportableKey](../README.md) / factory

# Function: factory()

> **factory**\<`T`\>(`ctor`: (`bytes`: `any`) => `T`, `opts`: [`Options`](../../../interfaces/Options.md)): \{ `Buffer`: (`value`: `Buffer`) => `T`; `Hex`: (`value`: `string`) => `T`; `PEM`: (`value`: `string`) => `T`; `String`: (`value`: `string`, `encoding?`: `BufferEncoding`) => `T`; \}

Defined in: [src/domain/models/keyManagement/exportable/ExportableKey.ts:83](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/ExportableKey.ts#L83)

factory to create Key property with desired functions
allows creation of a given Key through different data types

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Key`](../../../classes/Key.md) |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ctor` | (`bytes`: `any`) => `T` | the Key Class |
| `opts` | [`Options`](../../../interfaces/Options.md) |  |

## Returns

\{ `Buffer`: (`value`: `Buffer`) => `T`; `Hex`: (`value`: `string`) => `T`; `PEM`: (`value`: `string`) => `T`; `String`: (`value`: `string`, `encoding?`: `BufferEncoding`) => `T`; \}

object with importable functions

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `Buffer()` | (`value`: `Buffer`) => `T` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:84](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/ExportableKey.ts#L84) |
| `Hex()` | (`value`: `string`) => `T` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:86](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/ExportableKey.ts#L86) |
| `PEM()` | (`value`: `string`) => `T` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:87](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/ExportableKey.ts#L87) |
| `String()` | (`value`: `string`, `encoding?`: `BufferEncoding`) => `T` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:88](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/ExportableKey.ts#L88) |
