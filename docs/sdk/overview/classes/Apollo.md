[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Apollo

# Class: Apollo

Defined in: [src/apollo/Apollo.ts:107](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/apollo/Apollo.ts#L107)

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
  /// The 'seed'  corresponds to the seed value from which a key is derived.,
  seed = "seed",
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
| <a id="ed25519privatekey"></a> `Ed25519PrivateKey` | `static` | *typeof* `Ed25519PrivateKey` | `Ed25519PrivateKey` | [src/apollo/Apollo.ts:110](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/apollo/Apollo.ts#L110) |
| <a id="secp256k1privatekey"></a> `Secp256k1PrivateKey` | `static` | *typeof* `Secp256k1PrivateKey` | `Secp256k1PrivateKey` | [src/apollo/Apollo.ts:109](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/apollo/Apollo.ts#L109) |
| <a id="x25519privatekey"></a> `X25519PrivateKey` | `static` | *typeof* `X25519PrivateKey` | `X25519PrivateKey` | [src/apollo/Apollo.ts:111](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/apollo/Apollo.ts#L111) |

## Methods

### createPrivateKey() {#createprivatekey}

> **createPrivateKey**(`parameters`: \{\[`name`: `string`\]: `any`; \}): [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)

Defined in: [src/apollo/Apollo.ts:291](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/apollo/Apollo.ts#L291)

Creates a private key based on the current cryptographic abstraction

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `parameters` | \{\[`name`: `string`\]: `any`; \} |  |

#### Returns

[`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)

#### Examples

Create an EC Key with secp256k1 curve

```ts
 const privateKey = apollo.createPrivateKey({
   curve: Curve.SECP256K1,
   seed: Buffer.from(seed.value).toString("hex"),
 });
```

Create an EC Key with secp256k1 curve, but also specify a derivationPath

```ts
 const privateKey = apollo.createPrivateKey({
   curve: Curve.SECP256K1,
   seed: Buffer.from(seed.value).toString("hex"),
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

> **createPublicKey**(`parameters`: \{\[`name`: `string`\]: `any`; \}): [`PublicKey`](../namespaces/Domain/classes/PublicKey.md)

Defined in: [src/apollo/Apollo.ts:202](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/apollo/Apollo.ts#L202)

Creates a public key based on the current cryptographic abstraction

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `parameters` | \{\[`name`: `string`\]: `any`; \} |  |

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

Defined in: [src/apollo/Apollo.ts:125](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/apollo/Apollo.ts#L125)

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

Defined in: [src/apollo/Apollo.ts:174](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/apollo/Apollo.ts#L174)

Creates a random seed and a corresponding set of mnemonic phrases.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `passphrase?` | `string` |  |

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

Defined in: [src/apollo/Apollo.ts:143](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/apollo/Apollo.ts#L143)

Takes in a set of mnemonics and a passphrase, and returns a seed object used to generate a private key.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mnemonics` | [`MnemonicWordList`](../namespaces/Domain/type-aliases/MnemonicWordList.md) |  |
| `passphrase?` | `string` |  |

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

Defined in: [src/apollo/Apollo.ts:405](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/apollo/Apollo.ts#L405)

Restores a PrivateKey from the given StorableKey

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | [`StorableKey`](../namespaces/Domain/interfaces/StorableKey.md) |  |

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

Defined in: [src/apollo/Apollo.ts:420](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/apollo/Apollo.ts#L420)

Restores a PublicKey from the given StorableKey

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | [`StorableKey`](../namespaces/Domain/interfaces/StorableKey.md) |  |

#### Returns

[`PublicKey`](../namespaces/Domain/classes/PublicKey.md)

PublicKey instance

#### Throws

if the restoration process fails, this method throws an error

#### Implementation of

[`KeyRestoration`](../namespaces/Domain/interfaces/KeyRestoration.md).[`restorePublicKey`](../namespaces/Domain/interfaces/KeyRestoration.md#restorepublickey)
