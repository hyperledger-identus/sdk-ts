[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / KeyRestoration

# Interface: KeyRestoration

Defined in: packages/shared/domain/build/index.d.ts:2272

KeyRestoration protocol defines methods for verifying and restoring cryptographic keys from raw data.

## Methods

### restorePrivateKey() {#restoreprivatekey}

> **restorePrivateKey**(`key`: [`StorableKey`](StorableKey.md)): [`PrivateKey`](../classes/PrivateKey.md)

Defined in: packages/shared/domain/build/index.d.ts:2280

Restores a PrivateKey from the given StorableKey

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | [`StorableKey`](StorableKey.md) | - |

#### Returns

[`PrivateKey`](../classes/PrivateKey.md)

PrivateKey instance

#### Throws

if the restoration process fails

***

### restorePublicKey() {#restorepublickey}

> **restorePublicKey**(`key`: [`StorableKey`](StorableKey.md)): [`PublicKey`](../classes/PublicKey.md)

Defined in: packages/shared/domain/build/index.d.ts:2288

Restores a PublicKey from the given StorableKey

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | [`StorableKey`](StorableKey.md) | - |

#### Returns

[`PublicKey`](../classes/PublicKey.md)

PublicKey instance

#### Throws

if the restoration process fails, this method throws an error
