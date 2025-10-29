[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oidc](../README.md) / TokenRequest

# Class: TokenRequest

Defined in: [src/plugins/internal/oidc/protocols/TokenRequest.ts:4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/protocols/TokenRequest.ts#L4)

## Extends

- [`ApiRequest`](../../../../overview/namespaces/Domain/classes/ApiRequest.md)

## Constructors

### Constructor

> **new TokenRequest**(`endpoint`: `string` \| `URL`, `grantType`: `"authorization_code"`, `body`: [`JsonObj`](../../../../overview/namespaces/Utils/type-aliases/JsonObj.md)): `TokenRequest`

Defined in: [src/plugins/internal/oidc/protocols/TokenRequest.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/oidc/protocols/TokenRequest.ts#L5)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `endpoint` | `string` \| `URL` |
| `grantType` | `"authorization_code"` |
| `body` | [`JsonObj`](../../../../overview/namespaces/Utils/type-aliases/JsonObj.md) |

#### Returns

`TokenRequest`

#### Overrides

[`ApiRequest`](../../../../overview/namespaces/Domain/classes/ApiRequest.md).[`constructor`](../../../../overview/namespaces/Domain/classes/ApiRequest.md#constructor)

## Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="body"></a> `body?` | `public` | `string` \| [`JsonObj`](../../../../overview/namespaces/Utils/type-aliases/JsonObj.md) | `undefined` | [`ApiRequest`](../../../../overview/namespaces/Domain/classes/ApiRequest.md).[`body`](../../../../overview/namespaces/Domain/classes/ApiRequest.md#body) | [src/domain/models/Api.ts:40](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L40) |
| <a id="headers"></a> `headers` | `readonly` | `Headers` | `undefined` | [`ApiRequest`](../../../../overview/namespaces/Domain/classes/ApiRequest.md).[`headers`](../../../../overview/namespaces/Domain/classes/ApiRequest.md#headers) | [src/domain/models/Api.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L37) |
| <a id="method"></a> `method` | `public` | [`HttpMethod`](../../../../overview/namespaces/Domain/type-aliases/HttpMethod.md) | `"GET"` | [`ApiRequest`](../../../../overview/namespaces/Domain/classes/ApiRequest.md).[`method`](../../../../overview/namespaces/Domain/classes/ApiRequest.md#method) | [src/domain/models/Api.ts:39](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L39) |
| <a id="params"></a> `params` | `readonly` | `URLSearchParams` | `undefined` | [`ApiRequest`](../../../../overview/namespaces/Domain/classes/ApiRequest.md).[`params`](../../../../overview/namespaces/Domain/classes/ApiRequest.md#params) | [src/domain/models/Api.ts:38](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L38) |
| <a id="url"></a> `url` | `readonly` | `URL` | `undefined` | [`ApiRequest`](../../../../overview/namespaces/Domain/classes/ApiRequest.md).[`url`](../../../../overview/namespaces/Domain/classes/ApiRequest.md#url) | [src/domain/models/Api.ts:42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L42) |
