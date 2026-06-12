[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Apollo

# Class: Apollo

Defined in: [packages/lib/sdk/src/apollo/Apollo.ts:210](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/apollo/Apollo.ts#L210)

Apollo defines the set of cryptographic operations.

We by default are implementing Secp256k1, Ed25519 and X25519 Private and Public key from our generic abstractions.
When you are using one of those type of keys, for example with:

```ts
 const privateKey = apollo.createPrivateKey({
   curve: Curve.ED25519,
 });
```
All the properties you pass to the createPrivateKey are just the default keyProperty keys and the values are strings, buffers are represented in hex format also as strings to simplify conversion later

You can know check if this key can sign with:

```ts
if (privateKey.isSignable()) {
 //the sign method will be available inside this if
 privateKey.sign(message)
}
//not outside

const signature = privateKey.isSignable() && privateKey.sign(message)
//This last one would also would but if your key was not signable would return false
```

PublicKeys follow the same concept, imagine you already have an instance of a publicKey, then..

```ts
if (publicKey.canVerify()) {
 privateKey.verify(challenge, signature)
}
//not outside
```

All keys know also have a generic list of properties which can be accessed at any stage, for example:

```ts
privateKey.getProperty(KeyProperties.curve)
```

Would give your the Curve value.

Find below all the complete list of KeyProperties that are available.

```ts
export enum KeyProperties {
  /// The 'kid'  represents a key's identifier.
  kid = "kid",
  /// The 'algorithm'  corresponds to the cryptographic algorithm associated with the key.,
  algorithm = "algorithm",
  /// The 'curve'  represents the elliptic curve used for an elliptic-curve key.,
  curve = "curve",
  /// The 'rawKey'  refers to the raw binary form of the key.,
  rawKey = "raw",
  /// The 'derivationPath'  refers to the path used to derive a key in a hierarchical deterministic (HD) key generation scheme.,
  derivationPath = "derivationPath",
  index = "index",
  /// The 'type'  denotes the type of the key.,
  type = "type",
  /// The 'curvePointX'  represents the x-coordinate of a curve point for an elliptic-curve key.,
  curvePointX = "curvePoint.x",
  /// The 'curvePointY'  represents the y-coordinate of a curve point for an elliptic-curve key.,
  curvePointY = "curvePoint.y",
}
```

 Apollo

## Implements

- [`Apollo`](../namespaces/Domain/interfaces/Apollo.md)
- [`KeyRestoration`](../namespaces/Domain/interfaces/KeyRestoration.md)

## Constructors

### Constructor

> **new Apollo**(): `Apollo`

#### Returns

`Apollo`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-ed25519privatekey"></a> `Ed25519PrivateKey` | `static` | *typeof* `Ed25519PrivateKey` | `Ed25519PrivateKey` | [packages/lib/sdk/src/apollo/Apollo.ts:213](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/apollo/Apollo.ts#L213) |
| <a id="property-secp256k1privatekey"></a> `Secp256k1PrivateKey` | `static` | *typeof* `Secp256k1PrivateKey` | `Secp256k1PrivateKey` | [packages/lib/sdk/src/apollo/Apollo.ts:212](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/apollo/Apollo.ts#L212) |
| <a id="property-x25519privatekey"></a> `X25519PrivateKey` | `static` | *typeof* `X25519PrivateKey` | `X25519PrivateKey` | [packages/lib/sdk/src/apollo/Apollo.ts:214](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/apollo/Apollo.ts#L214) |

## Methods

### createPrivateKey() {#createprivatekey}

> **createPrivateKey**(`parameters`: [`KeyOptions`](../namespaces/Domain/type-aliases/KeyOptions.md)): [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)

Defined in: [packages/lib/sdk/src/apollo/Apollo.ts:400](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/apollo/Apollo.ts#L400)

Asyncronously creates a private key based on the current cryptographic abstraction

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `parameters` | [`KeyOptions`](../namespaces/Domain/type-aliases/KeyOptions.md) | - |

#### Returns

[`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)

#### Examples

Creating a EC Key with secp256k1 curve from an external seed
```ts
 const privateKey = apollo.createPrivateKey({
   curve: Curve.SECP256K1,
   seed: seed.value, // As a uint8array
 });
```

Create an EC Key with secp256k1 curve

```ts
 const privateKey = apollo.createPrivateKey({
   curve: Curve.SECP256K1,
   seed: seed.value,
 });
```

Create an EC Key with secp256k1 curve, but also specify a derivationPath

```ts
 const privateKey = apollo.createPrivateKey({
   curve: Curve.SECP256K1,
   seed: seed.value,
   derivationPath: "m/0'/0'/0'"
 });
```

Create an EC Key with ed25519 curve, ED25519 keys do not use derivation,
passing the seed or derivation path will make no effect.
Calling this function just generates a new random privateKey for that curve

```ts
 const privateKey = apollo.createPrivateKey({
   curve: Curve.ED25519,
 });
```

Create an EC Key with X25519 curve, X25519 keys do not use derivation,
passing the seed or derivation path will make no effect.
Calling this function just generates a new random privateKey for that curve

```ts
 const privateKey = apollo.createPrivateKey({
   curve: Curve.X25519,
 });
```

#### Implementation of

[`Apollo`](../namespaces/Domain/interfaces/Apollo.md).[`createPrivateKey`](../namespaces/Domain/interfaces/Apollo.md#createprivatekey)

***

### createPublicKey() {#createpublickey}

> **createPublicKey**(`parameters`: [`KeyOptions`](../namespaces/Domain/type-aliases/KeyOptions.md)): [`PublicKey`](../namespaces/Domain/classes/PublicKey.md)

Defined in: [packages/lib/sdk/src/apollo/Apollo.ts:305](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/apollo/Apollo.ts#L305)

Creates a public key based on the current cryptographic abstraction

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `parameters` | [`KeyOptions`](../namespaces/Domain/type-aliases/KeyOptions.md) | - |

#### Returns

[`PublicKey`](../namespaces/Domain/classes/PublicKey.md)

#### Example

Create an EC Key with secp256k1 curve

```ts
 const privateKey = apollo.createPublicKey({
   curve: Curve.SECP256K1,
   raw: Buffer.from(new Arra(64).fill(1)),
 });
```

#### Implementation of

[`Apollo`](../namespaces/Domain/interfaces/Apollo.md).[`createPublicKey`](../namespaces/Domain/interfaces/Apollo.md#createpublickey)

***

### createRandomMnemonics() {#createrandommnemonics}

> **createRandomMnemonics**(): [`MnemonicWordList`](../namespaces/Domain/type-aliases/MnemonicWordList.md)

Defined in: [packages/lib/sdk/src/apollo/Apollo.ts:228](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/apollo/Apollo.ts#L228)

Creates a random set of mnemonic phrases that can be used as a seed for generating a private key.

#### Returns

[`MnemonicWordList`](../namespaces/Domain/type-aliases/MnemonicWordList.md)

#### Example

This function creates a random mnemonic phrase whose usage is as a seed for generating a private key.

```ts
 const mnemonics = apollo.createRandomMnemonics();
```

#### Implementation of

[`Apollo`](../namespaces/Domain/interfaces/Apollo.md).[`createRandomMnemonics`](../namespaces/Domain/interfaces/Apollo.md#createrandommnemonics)

***

### createRandomSeed() {#createrandomseed}

> **createRandomSeed**(`passphrase?`: `string`): [`SeedWords`](../namespaces/Domain/interfaces/SeedWords.md)

Defined in: [packages/lib/sdk/src/apollo/Apollo.ts:277](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/apollo/Apollo.ts#L277)

Creates a random seed and a corresponding set of mnemonic phrases.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `passphrase?` | `string` | - |

#### Returns

[`SeedWords`](../namespaces/Domain/interfaces/SeedWords.md)

#### Example

This function creates a random mnemonic phrase and seed.

```ts
 const {mnemonics, seed} = apollo.createRandomSeed();
```

#### Implementation of

[`Apollo`](../namespaces/Domain/interfaces/Apollo.md).[`createRandomSeed`](../namespaces/Domain/interfaces/Apollo.md#createrandomseed)

***

### createSeed() {#createseed}

> **createSeed**(`mnemonics`: [`MnemonicWordList`](../namespaces/Domain/type-aliases/MnemonicWordList.md), `passphrase?`: `string`): [`Seed`](../namespaces/Domain/interfaces/Seed.md)

Defined in: [packages/lib/sdk/src/apollo/Apollo.ts:246](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/apollo/Apollo.ts#L246)

Takes in a set of mnemonics and a passphrase, and returns a seed object used to generate a private key.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mnemonics` | [`MnemonicWordList`](../namespaces/Domain/type-aliases/MnemonicWordList.md) | - |
| `passphrase?` | `string` | - |

#### Returns

[`Seed`](../namespaces/Domain/interfaces/Seed.md)

#### Example

This function takes mnemonics and passphrases and creates a seed object to generate a private key. It may throw an error if the mnemonics are invalid.

```ts
 const seed = apollo.createSeed(mnemonics, "my-secret-passphrase");
```

#### Implementation of

[`Apollo`](../namespaces/Domain/interfaces/Apollo.md).[`createSeed`](../namespaces/Domain/interfaces/Apollo.md#createseed)

***

### restorePrivateKey() {#restoreprivatekey}

> **restorePrivateKey**(`key`: [`StorableKey`](../namespaces/Domain/interfaces/StorableKey.md)): [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)

Defined in: [packages/lib/sdk/src/apollo/Apollo.ts:433](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/apollo/Apollo.ts#L433)

Restores a PrivateKey from the given StorableKey

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | [`StorableKey`](../namespaces/Domain/interfaces/StorableKey.md) | - |

#### Returns

[`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)

PrivateKey instance

#### Throws

if the restoration process fails

#### Implementation of

[`KeyRestoration`](../namespaces/Domain/interfaces/KeyRestoration.md).[`restorePrivateKey`](../namespaces/Domain/interfaces/KeyRestoration.md#restoreprivatekey)

***

### restorePublicKey() {#restorepublickey}

> **restorePublicKey**(`key`: [`StorableKey`](../namespaces/Domain/interfaces/StorableKey.md)): [`PublicKey`](../namespaces/Domain/classes/PublicKey.md)

Defined in: [packages/lib/sdk/src/apollo/Apollo.ts:466](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/apollo/Apollo.ts#L466)

Restores a PublicKey from the given StorableKey

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | [`StorableKey`](../namespaces/Domain/interfaces/StorableKey.md) | - |

#### Returns

[`PublicKey`](../namespaces/Domain/classes/PublicKey.md)

PublicKey instance

#### Throws

if the restoration process fails, this method throws an error

#### Implementation of

[`KeyRestoration`](../namespaces/Domain/interfaces/KeyRestoration.md).[`restorePublicKey`](../namespaces/Domain/interfaces/KeyRestoration.md#restorepublickey)
