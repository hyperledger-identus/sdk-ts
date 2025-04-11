[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](Domain.md) / JWT

# Namespace: JWT

[Domain](Domain.md).JWT

## Table of contents

### Interfaces

- [DecodedObj](../interfaces/Domain.JWT.DecodedObj.md)
- [Header](../interfaces/Domain.JWT.Header.md)

### Type Aliases

- [Payload](Domain.JWT.md#payload)

### Functions

- [decode](Domain.JWT.md#decode)
- [sign](Domain.JWT.md#sign)

## Type Aliases

### Payload

Ƭ **Payload**: `JWTPayload`

#### Defined in

[src/domain/utils/JWT.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/domain/utils/JWT.ts#L15)

## Functions

### decode

▸ **decode**(`jws`): [`DecodedObj`](../interfaces/Domain.JWT.DecodedObj.md)

decode a JWT into its parts

#### Parameters

| Name | Type |
| :------ | :------ |
| `jws` | `string` |

#### Returns

[`DecodedObj`](../interfaces/Domain.JWT.DecodedObj.md)

#### Defined in

[src/domain/utils/JWT.ts:68](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/domain/utils/JWT.ts#L68)

___

### sign

▸ **sign**(`issuer`, `privateKey`, `payload`, `header?`): `Promise`\<`string`\>

Creates a signed JWT

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuer` | [`DID`](../classes/Domain.DID.md) |
| `privateKey` | [`PrivateKey`](../classes/Domain.PrivateKey.md) |
| `payload` | `Partial`\<`JWTPayload`\> |
| `header?` | `Partial`\<[`Header`](../interfaces/Domain.JWT.Header.md)\> |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/domain/utils/JWT.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/bc699428ddd8313d8025ef810d8e7784a65f26cc/src/domain/utils/JWT.ts#L33)
