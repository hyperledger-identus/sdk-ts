[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / ApiRequest

# Class: ApiRequest

Defined in: [src/domain/models/Api.ts:36](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L36)

## Extended by

- [`CredentialRequest`](../../../../plugins/internal/oidc/classes/CredentialRequest.md)
- [`TokenRequest`](../../../../plugins/internal/oidc/classes/TokenRequest.md)

## Constructors

### Constructor

> **new ApiRequest**(`url`: `URL`): `ApiRequest`

Defined in: [src/domain/models/Api.ts:42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L42)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `URL` |

#### Returns

`ApiRequest`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="body"></a> `body?` | `public` | `string` \| [`JsonObj`](../../Utils/type-aliases/JsonObj.md) | `undefined` | [src/domain/models/Api.ts:40](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L40) |
| <a id="headers"></a> `headers` | `readonly` | `Headers` | `undefined` | [src/domain/models/Api.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L37) |
| <a id="method"></a> `method` | `public` | [`HttpMethod`](../type-aliases/HttpMethod.md) | `"GET"` | [src/domain/models/Api.ts:39](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L39) |
| <a id="params"></a> `params` | `readonly` | `URLSearchParams` | `undefined` | [src/domain/models/Api.ts:38](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L38) |
| <a id="url"></a> `url` | `readonly` | `URL` | `undefined` | [src/domain/models/Api.ts:42](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L42) |
