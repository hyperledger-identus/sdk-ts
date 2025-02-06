[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [Protocols](../modules/Domain.Protocols.md) / KeyRestoration

# Interface: KeyRestoration

[Domain](../modules/Domain.md).[Protocols](../modules/Domain.Protocols.md).KeyRestoration

KeyRestoration protocol defines methods for verifying and restoring cryptographic keys from raw data.

## Implemented by

- [`Apollo`](../classes/Apollo.md)

## Table of contents

### Methods

- [restorePrivateKey](Domain.Protocols.KeyRestoration.md#restoreprivatekey)
- [restorePublicKey](Domain.Protocols.KeyRestoration.md#restorepublickey)

## Methods

### restorePrivateKey

▸ **restorePrivateKey**(`key`): [`PrivateKey`](../classes/Domain.PrivateKey.md)

Restores a PrivateKey from the given StorableKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`StorableKey`](Domain.StorableKey-1.md) |

#### Returns

[`PrivateKey`](../classes/Domain.PrivateKey.md)

PrivateKey instance

**`Throws`**

if the restoration process fails

#### Defined in

[src/domain/protocols/KeyRestoration.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/protocols/KeyRestoration.ts#L14)

___

### restorePublicKey

▸ **restorePublicKey**(`key`): [`PublicKey`](../classes/Domain.PublicKey.md)

Restores a PublicKey from the given StorableKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`StorableKey`](Domain.StorableKey-1.md) |

#### Returns

[`PublicKey`](../classes/Domain.PublicKey.md)

PublicKey instance

**`Throws`**

if the restoration process fails, this method throws an error

#### Defined in

[src/domain/protocols/KeyRestoration.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/b1a74ed6fd4a9050ce3bb69d50435414a88a059a/src/domain/protocols/KeyRestoration.ts#L23)
