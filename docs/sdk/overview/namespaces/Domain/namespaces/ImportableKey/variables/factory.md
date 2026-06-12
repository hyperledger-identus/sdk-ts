[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [ImportableKey](../README.md) / factory

# Variable: factory()

> `const` **factory**: \<`T`\>(`ctor`: (`bytes`: `any`) => `T`, `opts`: [`Options`](../../../interfaces/Options.md)) => \{ `Buffer`: (`value`: `Buffer`) => `T`; `Hex`: (`value`: `string`) => `T`; `PEM`: (`value`: `string`) => `T`; `String`: (`value`: `string`, `encoding?`: `BufferEncoding`) => `T`; \}

Defined in: packages/shared/domain/build/index.d.ts:764

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
| `opts` | [`Options`](../../../interfaces/Options.md) | - |

## Returns

\{ `Buffer`: (`value`: `Buffer`) => `T`; `Hex`: (`value`: `string`) => `T`; `PEM`: (`value`: `string`) => `T`; `String`: (`value`: `string`, `encoding?`: `BufferEncoding`) => `T`; \}

object with importable functions

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `Buffer()` | (`value`: `Buffer`) => `T` | packages/shared/domain/build/index.d.ts:767 |
| `Hex()` | (`value`: `string`) => `T` | packages/shared/domain/build/index.d.ts:768 |
| `PEM()` | (`value`: `string`) => `T` | packages/shared/domain/build/index.d.ts:769 |
| `String()` | (`value`: `string`, `encoding?`: `BufferEncoding`) => `T` | packages/shared/domain/build/index.d.ts:770 |
