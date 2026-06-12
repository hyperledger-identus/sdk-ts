[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / AuthorizationResponse

# Class: AuthorizationResponse

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts:1](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts#L1)

## Constructors

### Constructor

> **new AuthorizationResponse**(`callbackUrl`: `string` \| `URL`, `code`: `string`): `AuthorizationResponse`

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts#L5)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callbackUrl` | `string` \| `URL` |
| `code` | `string` |

#### Returns

`AuthorizationResponse`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-code"></a> `code` | `readonly` | `string` | [packages/lib/sdk/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts#L3) |
| <a id="property-url"></a> `url` | `readonly` | `URL` | [packages/lib/sdk/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts:2](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts#L2) |

## Accessors

### issuer {#issuer}

#### Get Signature

> **get** **issuer**(): `string` \| `null`

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts#L18)

##### Returns

`string` \| `null`

***

### params {#params}

#### Get Signature

> **get** **params**(): `URLSearchParams`

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts#L13)

##### Returns

`URLSearchParams`

***

### state {#state}

#### Get Signature

> **get** **state**(): `string` \| `null`

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/protocols/AuthorizationResponse.ts#L22)

##### Returns

`string` \| `null`
