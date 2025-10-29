[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / KeyPair

# Abstract Class: KeyPair

Defined in: [src/domain/models/KeyPair.ts:4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/KeyPair.ts#L4)

## Constructors

### Constructor

> **new KeyPair**(): `KeyPair`

#### Returns

`KeyPair`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="privatekey"></a> `privateKey` | `abstract` | [`PrivateKey`](PrivateKey.md) | [src/domain/models/KeyPair.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/KeyPair.ts#L10) |
| <a id="publickey"></a> `publicKey` | `abstract` | [`PublicKey`](PublicKey.md) | [src/domain/models/KeyPair.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/KeyPair.ts#L9) |

## Accessors

### curve {#curve}

#### Get Signature

> **get** **curve**(): `string`

Defined in: [src/domain/models/KeyPair.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/KeyPair.ts#L5)

##### Returns

`string`
