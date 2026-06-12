[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / TokenRequest

# Class: TokenRequest

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/protocols/TokenRequest.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/protocols/TokenRequest.ts#L4)

## Extends

- [`ApiRequest`](../../../../overview/namespaces/Domain/classes/ApiRequest.md)

## Constructors

### Constructor

> **new TokenRequest**(`endpoint`: `string` \| `URL`, `grantType`: `"authorization_code"`, `body`: [`JsonObj`](../../../../overview/type-aliases/JsonObj.md)): `TokenRequest`

Defined in: [packages/lib/sdk/src/plugins/internal/oidc/protocols/TokenRequest.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oidc/protocols/TokenRequest.ts#L5)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `endpoint` | `string` \| `URL` |
| `grantType` | `"authorization_code"` |
| `body` | [`JsonObj`](../../../../overview/type-aliases/JsonObj.md) |

#### Returns

`TokenRequest`

#### Overrides

[`ApiRequest`](../../../../overview/namespaces/Domain/classes/ApiRequest.md).[`constructor`](../../../../overview/namespaces/Domain/classes/ApiRequest.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-body"></a> `body?` | `public` | `string` \| [`JsonObj`](../../../../overview/namespaces/Domain/type-aliases/JsonObj.md)\<`any`\> | [`ApiRequest`](../../../../overview/namespaces/Domain/classes/ApiRequest.md).[`body`](../../../../overview/namespaces/Domain/classes/ApiRequest.md#property-body) | packages/shared/domain/build/index.d.ts:221 |
| <a id="property-headers"></a> `headers` | `readonly` | `Headers` | [`ApiRequest`](../../../../overview/namespaces/Domain/classes/ApiRequest.md).[`headers`](../../../../overview/namespaces/Domain/classes/ApiRequest.md#property-headers) | packages/shared/domain/build/index.d.ts:218 |
| <a id="property-method"></a> `method` | `public` | [`HttpMethod`](../../../../overview/namespaces/Domain/type-aliases/HttpMethod.md) | [`ApiRequest`](../../../../overview/namespaces/Domain/classes/ApiRequest.md).[`method`](../../../../overview/namespaces/Domain/classes/ApiRequest.md#property-method) | packages/shared/domain/build/index.d.ts:220 |
| <a id="property-params"></a> `params` | `readonly` | `URLSearchParams` | [`ApiRequest`](../../../../overview/namespaces/Domain/classes/ApiRequest.md).[`params`](../../../../overview/namespaces/Domain/classes/ApiRequest.md#property-params) | packages/shared/domain/build/index.d.ts:219 |
| <a id="property-url"></a> `url` | `readonly` | `URL` | [`ApiRequest`](../../../../overview/namespaces/Domain/classes/ApiRequest.md).[`url`](../../../../overview/namespaces/Domain/classes/ApiRequest.md#property-url) | packages/shared/domain/build/index.d.ts:217 |
