[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / JWT

# Class: JWT

Defined in: [packages/lib/sdk/src/pollux/utils/jwt/JWT.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/utils/jwt/JWT.ts#L11)

## Extends

- `Runner`

## Constructors

### Constructor

> **new JWT**(): `JWT`

#### Returns

`JWT`

#### Inherited from

`Task.Runner.constructor`

## Methods

### clone() {#clone}

> **clone**(): `JWT`

Defined in: [packages/lib/sdk/src/pollux/utils/jwt/JWT.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/utils/jwt/JWT.ts#L12)

#### Returns

`JWT`

#### Overrides

`Task.Runner.clone`

***

### decode() {#decode}

> **decode**(`jws`: `string`): `Promise`\<[`DecodedObj`](../namespaces/Domain/namespaces/JWT/interfaces/DecodedObj.md)\>

Defined in: [packages/lib/sdk/src/pollux/utils/jwt/JWT.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/utils/jwt/JWT.ts#L16)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jws` | `string` |

#### Returns

`Promise`\<[`DecodedObj`](../namespaces/Domain/namespaces/JWT/interfaces/DecodedObj.md)\>

***

### signWithDID() {#signwithdid}

> **signWithDID**(`did`: [`DID`](../namespaces/Domain/classes/DID.md), `payload`: `Partial`\<[`Payload`](../namespaces/Domain/namespaces/JWT/type-aliases/Payload.md)\>, `header?`: `Partial`\<[`Header`](../namespaces/Domain/namespaces/JWT/interfaces/Header.md)\>, `privateKey?`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md), `purpose?`: `"ISSUING_KEY"` \| `"AUTHENTICATION_KEY"`): `Promise`\<`string`\>

Defined in: [packages/lib/sdk/src/pollux/utils/jwt/JWT.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/utils/jwt/JWT.ts#L30)

Creates a signed JWT from a DID and Key

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) | - |
| `payload` | `Partial`\<[`Payload`](../namespaces/Domain/namespaces/JWT/type-aliases/Payload.md)\> | - |
| `header?` | `Partial`\<[`Header`](../namespaces/Domain/namespaces/JWT/interfaces/Header.md)\> | - |
| `privateKey?` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) | - |
| `purpose?` | `"ISSUING_KEY"` \| `"AUTHENTICATION_KEY"` | which verification relationship to use for key lookup (default: "assertionMethod") |

#### Returns

`Promise`\<`string`\>

***

### verify() {#verify}

> **verify**(`options`: \{ `holderDID?`: [`DID`](../namespaces/Domain/classes/DID.md); `issuerDID`: [`DID`](../namespaces/Domain/classes/DID.md); `jws`: `string`; \}): `Promise`\<`boolean`\>

Defined in: [packages/lib/sdk/src/pollux/utils/jwt/JWT.ts:40](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/utils/jwt/JWT.ts#L40)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `holderDID?`: [`DID`](../namespaces/Domain/classes/DID.md); `issuerDID`: [`DID`](../namespaces/Domain/classes/DID.md); `jws`: `string`; \} |
| `options.holderDID?` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `options.issuerDID` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `options.jws` | `string` |

#### Returns

`Promise`\<`boolean`\>

***

### withContext() {#withcontext}

> **withContext**(`ctx`: `ContextProxy`): `Runner`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:108](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L108)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | `ContextProxy` |

#### Returns

`Runner`

#### Inherited from

`Task.Runner.withContext`
