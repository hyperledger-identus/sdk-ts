[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / DIDCommSecretsResolver

# Class: DIDCommSecretsResolver

Defined in: [packages/lib/sdk/src/mercury/DIDCommSecretsResolver.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/mercury/DIDCommSecretsResolver.ts#L12)

Bridges the SDK's key storage (Pluto) to the DIDComm library's
`SecretsResolver` interface.

Looks up Peer DID private keys stored in Pluto and converts them
into JWK-based `Secret` objects consumable by the DIDComm WASM layer.

## Implements

- `SecretsResolver`

## Constructors

### Constructor

> **new DIDCommSecretsResolver**(`apollo`: [`Apollo`](../namespaces/Domain/interfaces/Apollo.md), `castor`: [`Castor`](../namespaces/Domain/interfaces/Castor.md), `pluto`: [`Pluto`](../namespaces/Domain/interfaces/Pluto.md)): `DIDCommSecretsResolver`

Defined in: [packages/lib/sdk/src/mercury/DIDCommSecretsResolver.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/mercury/DIDCommSecretsResolver.ts#L13)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `apollo` | [`Apollo`](../namespaces/Domain/interfaces/Apollo.md) |
| `castor` | [`Castor`](../namespaces/Domain/interfaces/Castor.md) |
| `pluto` | [`Pluto`](../namespaces/Domain/interfaces/Pluto.md) |

#### Returns

`DIDCommSecretsResolver`

## Methods

### find\_secrets() {#find_secrets}

> **find\_secrets**(`secret_ids`: `string`[]): `Promise`\<`string`[]\>

Defined in: [packages/lib/sdk/src/mercury/DIDCommSecretsResolver.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/mercury/DIDCommSecretsResolver.ts#L46)

Find all secrets that have one of the given IDs.
Return secrets only for key IDs for which a secret is present.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `secret_ids` | `string`[] |

#### Returns

`Promise`\<`string`[]\>

possible empty list of all secrets that have one of the given IDs.

#### Throws

DIDCommIoError - IO error in resolving process

#### Throws

DIDCommInvalidState - Code error or unexpected state was detected

Note to throw compatible error use code like this

```
let e = Error("Unble perform io operation");
e.name = "DIDCommIoError"
throw e
```

#### Implementation of

`DIDComm.SecretsResolver.find_secrets`

***

### get\_secret() {#get_secret}

> **get\_secret**(`secret_id`: `string`): `Promise`\<`Secret` \| `null`\>

Defined in: [packages/lib/sdk/src/mercury/DIDCommSecretsResolver.ts:57](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/mercury/DIDCommSecretsResolver.ts#L57)

Finds secret (usually private key) identified by the given key ID.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `secret_id` | `string` |

#### Returns

`Promise`\<`Secret` \| `null`\>

A secret (usually private key) or None of there is no secret for the given ID

#### Throws

DIDCommIoError - IO error in resolving process

#### Throws

DIDCommInvalidState - Code error or unexpected state was detected

```
let e = Error("Unble perform io operation");
e.name = "DIDCommIoError"
throw e
```

#### Implementation of

`DIDComm.SecretsResolver.get_secret`
