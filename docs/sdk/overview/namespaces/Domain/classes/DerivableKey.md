[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / DerivableKey

# Abstract Class: DerivableKey

Defined in: [src/domain/models/keyManagement/DerivableKey.ts:3](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/DerivableKey.ts#L3)

## Constructors

### Constructor

> **new DerivableKey**(): `DerivableKey`

#### Returns

`DerivableKey`

## Methods

### derive() {#derive}

> `abstract` **derive**(`derivationPath`: `string`): [`PrivateKey`](PrivateKey.md)

Defined in: [src/domain/models/keyManagement/DerivableKey.ts:4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/DerivableKey.ts#L4)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `derivationPath` | `string` |

#### Returns

[`PrivateKey`](PrivateKey.md)
