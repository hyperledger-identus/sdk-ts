[**@hyperledger/identus-sdk**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / JWT

# JWT

## Enumerations

### Claims

Defined in: [src/domain/utils/JWT.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L23)

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="aud"></a> `aud` | `"aud"` | [src/domain/utils/JWT.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L26) |
| <a id="exp"></a> `exp` | `"exp"` | [src/domain/utils/JWT.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L28) |
| <a id="iat"></a> `iat` | `"iat"` | [src/domain/utils/JWT.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L29) |
| <a id="iss"></a> `iss` | `"iss"` | [src/domain/utils/JWT.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L24) |
| <a id="jti"></a> `jti` | `"jti"` | [src/domain/utils/JWT.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L30) |
| <a id="nbf"></a> `nbf` | `"nbf"` | [src/domain/utils/JWT.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L27) |
| <a id="sub"></a> `sub` | `"sub"` | [src/domain/utils/JWT.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L25) |

## Interfaces

### DecodedObj

Defined in: [src/domain/utils/JWT.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L16)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data"></a> `data` | `string` | [src/domain/utils/JWT.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L20) |
| <a id="header"></a> `header` | [`Header`](#header-1) | [src/domain/utils/JWT.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L17) |
| <a id="payload"></a> `payload` | `JWTPayload` | [src/domain/utils/JWT.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L18) |
| <a id="signature"></a> `signature` | `string` | [src/domain/utils/JWT.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L19) |

***

### Header

Defined in: [src/domain/utils/JWT.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L8)

#### Indexable

\[`key`: `string`\]: `any`

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="alg"></a> `alg` | `string` | [src/domain/utils/JWT.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L10) |
| <a id="typ"></a> `typ` | `string` | [src/domain/utils/JWT.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L9) |

## Type Aliases

### Payload

> **Payload** = `JWTPayload`

Defined in: [src/domain/utils/JWT.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L14)

## Functions

### decode()

> **decode**(`jws`: `string`): [`DecodedObj`](#decodedobj)

Defined in: [src/domain/utils/JWT.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/utils/JWT.ts#L42)

decode a JWT into its parts
TODO move this to JWT component - needs removing from JWTCredential first

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `jws` | `string` |  |

#### Returns

[`DecodedObj`](#decodedobj)
