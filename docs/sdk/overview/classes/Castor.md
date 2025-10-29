[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Castor

# Class: Castor

Defined in: [src/castor/Castor.ts:42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/castor/Castor.ts#L42)

Castor is a powerful and flexible library for working with DIDs. Whether you are building a decentralised application
or a more traditional system requiring secure and private identity management, Castor provides the tools and features
you need to easily create, manage, and resolve DIDs.

 Castor

## Implements

- [`Castor`](../namespaces/Domain/interfaces/Castor.md)

## Constructors

### Constructor

> **new Castor**(`apollo`: [`Apollo`](../namespaces/Domain/interfaces/Apollo.md), `extraResolvers`: [`ExtraResolver`](../type-aliases/ExtraResolver.md)[], `prismResolverEndpoint`: `string`): `Castor`

Defined in: [src/castor/Castor.ts:52](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/castor/Castor.ts#L52)

Creates an instance of Castor as soon as a valid cryptographic interface is provided (Apollo).

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `apollo` | [`Apollo`](../namespaces/Domain/interfaces/Apollo.md) | `undefined` |  |
| `extraResolvers` | [`ExtraResolver`](../type-aliases/ExtraResolver.md)[] | `[]` |  |
| `prismResolverEndpoint` | `string` | `"https://raw.githubusercontent.com/FabioPinheiro/prism-vdr/refs/heads/main/mainnet/diddoc/"` | - |

#### Returns

`Castor`

## Methods

### createPeerDID() {#createpeerdid}

> **createPeerDID**(`publicKeys`: [`PublicKey`](../namespaces/Domain/classes/PublicKey.md)[], `services`: [`Service`](../namespaces/Domain/namespaces/DIDDocument/classes/Service.md)[]): `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

Defined in: [src/castor/Castor.ts:241](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/castor/Castor.ts#L241)

Creates a DID for a peer (a device or server that acts as a DID subject) using given key agreement
and authentication key pairs and a list of services.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `publicKeys` | [`PublicKey`](../namespaces/Domain/classes/PublicKey.md)[] |  |
| `services` | [`Service`](../namespaces/Domain/namespaces/DIDDocument/classes/Service.md)[] |  |

#### Returns

`Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

#### Example

This function creates new peer DID, using a given key agreement, authentication key pairs, and a list of services. It may throw an error if the key pairs or services are invalid.

```ts
const peerDid = await castor.createPeerDID(
    [keyPairFromCurveEd25519, keyPairFromCurveX25519],
    [exampleService]
);
```

#### Implementation of

[`Castor`](../namespaces/Domain/interfaces/Castor.md).[`createPeerDID`](../namespaces/Domain/interfaces/Castor.md#createpeerdid)

***

### createPrismDID() {#createprismdid}

> **createPrismDID**(`key`: [`PublicKey`](../namespaces/Domain/classes/PublicKey.md) \| [`KeyPair`](../namespaces/Domain/classes/KeyPair.md), `services?`: [`Service`](../namespaces/Domain/namespaces/DIDDocument/classes/Service.md)[], `authenticationKeys?`: ([`PublicKey`](../namespaces/Domain/classes/PublicKey.md) \| [`KeyPair`](../namespaces/Domain/classes/KeyPair.md))[], `issuanceKeys?`: ([`PublicKey`](../namespaces/Domain/classes/PublicKey.md) \| [`KeyPair`](../namespaces/Domain/classes/KeyPair.md))[]): `Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

Defined in: [src/castor/Castor.ts:165](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/castor/Castor.ts#L165)

Creates a DID for a prism (a device or server that acts as a DID owner and controller) using a
given master public key and list of services.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `key` | [`PublicKey`](../namespaces/Domain/classes/PublicKey.md) \| [`KeyPair`](../namespaces/Domain/classes/KeyPair.md) | `undefined` |  |
| `services?` | [`Service`](../namespaces/Domain/namespaces/DIDDocument/classes/Service.md)[] | `undefined` |  |
| `authenticationKeys?` | ([`PublicKey`](../namespaces/Domain/classes/PublicKey.md) \| [`KeyPair`](../namespaces/Domain/classes/KeyPair.md))[] | `[]` |  |
| `issuanceKeys?` | ([`PublicKey`](../namespaces/Domain/classes/PublicKey.md) \| [`KeyPair`](../namespaces/Domain/classes/KeyPair.md))[] | `[]` |  |

#### Returns

`Promise`\<[`DID`](../namespaces/Domain/classes/DID.md)\>

#### Example

This function creates a new `prism` DID, using a given master Public Key and a list of Services.
The Public Key may be an individual Key or a KeyPair
It may throw an error if the master Public Key or Services are invalid.

```ts
const exampleServiceEndpoint = new Domain.DIDDocument.Service("didcomm", ["DIDCommMessaging"], {
 uri: "https://example.com/endpoint",
 accept: ["didcomm/v2"],
 routingKeys: ["did:example:somemediator#somekey"],
});
const prismDid = await castor.createPrismDID(
 keyPairFromCurveSecp256K1.publicKey,
 [exampleServiceEndpoint]
);
```

#### Implementation of

[`Castor`](../namespaces/Domain/interfaces/Castor.md).[`createPrismDID`](../namespaces/Domain/interfaces/Castor.md#createprismdid)

***

### createPrismDIDAtalaObject() {#createprismdidatalaobject}

> **createPrismDIDAtalaObject**(`key`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md), `did`: [`DID`](../namespaces/Domain/classes/DID.md)): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [src/castor/Castor.ts:90](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/castor/Castor.ts#L90)

Creates a Prism DID Atala Object, a buffer contained the prism did create operation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) |  |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) |  |

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### getEcnumbasis() {#getecnumbasis}

> **getEcnumbasis**(`did`: [`DID`](../namespaces/Domain/classes/DID.md), `publicKey`: [`PublicKey`](../namespaces/Domain/classes/PublicKey.md)): `string`

Defined in: [src/castor/Castor.ts:445](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/castor/Castor.ts#L445)

Returns ecnumbasis from a valid DID and its related publicKey

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) |  |
| `publicKey` | [`PublicKey`](../namespaces/Domain/classes/PublicKey.md) |  |

#### Returns

`string`

#### Implementation of

[`Castor`](../namespaces/Domain/interfaces/Castor.md).[`getEcnumbasis`](../namespaces/Domain/interfaces/Castor.md#getecnumbasis)

***

### parseDID() {#parsedid}

> **parseDID**(`did`: `string`): [`DID`](../namespaces/Domain/classes/DID.md)

Defined in: [src/castor/Castor.ts:80](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/castor/Castor.ts#L80)

Parses a string representation of a Decentralized Identifier (DID) into a DID object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `did` | `string` |  |

#### Returns

[`DID`](../namespaces/Domain/classes/DID.md)

#### Example

This function takes a string representation of a DID and returns an instance of `Domain.DID`. It may throw an error if the string is not a valid
DID.

```ts
const parsedPrismDid = castor.parseDID(
 "did:prism:b6c0c33d701ac1b9a262a14454d1bbde3d127d697a76950963c5fd930605:Cj8KPRI7CgdtYXN0ZXIwEAFKLgoJc2VmsxEiECSTjyV7sUfCr_ArpN9rvCwR9fRMAhcsr_S7ZRiJk4p5k"
);
```

#### Implementation of

[`Castor`](../namespaces/Domain/interfaces/Castor.md).[`parseDID`](../namespaces/Domain/interfaces/Castor.md#parsedid)

***

### resolveDID() {#resolvedid}

> **resolveDID**(`didstr`: `string` \| [`DID`](../namespaces/Domain/classes/DID.md)): `Promise`\<[`DIDDocument`](../namespaces/Domain/classes/DIDDocument.md)\>

Defined in: [src/castor/Castor.ts:266](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/castor/Castor.ts#L266)

Asynchronously resolves a DID to its corresponding DID Document. This function may throw an error if
the DID is invalid or the document cannot be retrieved.
**Note:** only `prism` and `peer` DID methods are currently supported!

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `didstr` | `string` \| [`DID`](../namespaces/Domain/classes/DID.md) |  |

#### Returns

`Promise`\<[`DIDDocument`](../namespaces/Domain/classes/DIDDocument.md)\>

#### Example

This function asynchronously resolves a DID to its corresponding DID Document. It may throw an error if the DID is invalid or the document is unretrievable.

```ts
const didDocument = await castor.resolveDID("did:prism:123456")
```

#### Implementation of

[`Castor`](../namespaces/Domain/interfaces/Castor.md).[`resolveDID`](../namespaces/Domain/interfaces/Castor.md#resolvedid)

***

### verifySignature() {#verifysignature}

> **verifySignature**(`did`: [`DID`](../namespaces/Domain/classes/DID.md), `challenge`: `Uint8Array`, `signature`: `Uint8Array`): `Promise`\<`boolean`\>

Defined in: [src/castor/Castor.ts:336](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/castor/Castor.ts#L336)

Verifies the authenticity of a signature using the corresponding DID Document, challenge, and signature data.
This function returns a boolean value indicating whether the signature is valid or not. This function may throw
an error if the DID Document or signature data are invalid.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) |  |
| `challenge` | `Uint8Array` |  |
| `signature` | `Uint8Array` |  |

#### Returns

`Promise`\<`boolean`\>

#### Example

This function verifies the authenticity of a signature using given DID, challenge, and signature data. It returns a boolean value indicating whether the signature is valid or not. It may throw an error if the DID or signature data are invalid.

```ts
const message = "data to sign";
const messageBytes = new TextEncoder().encode(message);
const {mnemonics, seed} = apollo.createRandomSeed();
const privateKey = apollo.createPublicKey({
  type: KeyTypes.EC,
  curve: Curve.SECP256K1,
  seed: Buffer.from(seed.value).toString("hex"),
  derivationPath: "m/0'/0'/0'"
});
if (privateKey.isSignable()) {
  const signature = privateKey.sign(message);
  const did = castor.parseDID("did:prism:123456");
  const challenge = messageBytes
  const isValid = castor.verifySignature(
      castor.parseDID("did:prism:123456"),
      challenge, // Uint8Array
      signature // Uint8Array
  );
}
```

#### Implementation of

[`Castor`](../namespaces/Domain/interfaces/Castor.md).[`verifySignature`](../namespaces/Domain/interfaces/Castor.md#verifysignature)
