[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / VerifiableKey

# Abstract Class: VerifiableKey

Defined in: [src/domain/models/keyManagement/VerifiableKey.ts:1](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/VerifiableKey.ts#L1)

## Constructors

### Constructor

> **new VerifiableKey**(): `VerifiableKey`

#### Returns

`VerifiableKey`

## Methods

### verify() {#verify}

> `abstract` **verify**(`message`: `Buffer`, `signature`: `Buffer`): `boolean`

Defined in: [src/domain/models/keyManagement/VerifiableKey.ts:2](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/VerifiableKey.ts#L2)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `Buffer` |
| `signature` | `Buffer` |

#### Returns

`boolean`
