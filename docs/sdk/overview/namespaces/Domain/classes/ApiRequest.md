[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / ApiRequest

# Class: ApiRequest

Defined in: packages/shared/domain/build/index.d.ts:216

## Extended by

- [`CredentialRequest`](../../../../plugins/internal/oidc/classes/CredentialRequest.md)
- [`TokenRequest`](../../../../plugins/internal/oidc/classes/TokenRequest.md)

## Constructors

### Constructor

> **new ApiRequest**(`url`: `URL`): `ApiRequest`

Defined in: packages/shared/domain/build/index.d.ts:222

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `URL` |

#### Returns

`ApiRequest`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-body"></a> `body?` | `public` | `string` \| [`JsonObj`](../type-aliases/JsonObj.md)\<`any`\> | packages/shared/domain/build/index.d.ts:221 |
| <a id="property-headers"></a> `headers` | `readonly` | `Headers` | packages/shared/domain/build/index.d.ts:218 |
| <a id="property-method"></a> `method` | `public` | [`HttpMethod`](../type-aliases/HttpMethod.md) | packages/shared/domain/build/index.d.ts:220 |
| <a id="property-params"></a> `params` | `readonly` | `URLSearchParams` | packages/shared/domain/build/index.d.ts:219 |
| <a id="property-url"></a> `url` | `readonly` | `URL` | packages/shared/domain/build/index.d.ts:217 |
