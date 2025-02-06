[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / DIDResolver

# Class: DIDResolver

[Domain](../modules/Domain.md).DIDResolver

## Table of contents

### Constructors

- [constructor](Domain.DIDResolver.md#constructor)

### Properties

- [method](Domain.DIDResolver.md#method)

### Methods

- [resolve](Domain.DIDResolver.md#resolve)

## Constructors

### constructor

• **new DIDResolver**(): [`DIDResolver`](Domain.DIDResolver.md)

#### Returns

[`DIDResolver`](Domain.DIDResolver.md)

## Properties

### method

• `Abstract` **method**: `string`

#### Defined in

[src/domain/models/DIDResolver.ts:4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/DIDResolver.ts#L4)

## Methods

### resolve

▸ **resolve**(`didString`): `Promise`\<[`DIDDocument`](Domain.DIDDocument.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didString` | `string` |

#### Returns

`Promise`\<[`DIDDocument`](Domain.DIDDocument.md)\>

#### Defined in

[src/domain/models/DIDResolver.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/models/DIDResolver.ts#L5)
