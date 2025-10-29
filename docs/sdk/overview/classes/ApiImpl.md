[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / ApiImpl

# Class: ApiImpl

Defined in: [src/edge-agent/helpers/FetchApi.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/FetchApi.ts#L6)

Implement API using built in fetch

## Implements

- [`Api`](../namespaces/Domain/interfaces/Api.md)

## Constructors

### Constructor

> **new ApiImpl**(): `FetchApi`

#### Returns

`FetchApi`

## Methods

### request() {#request}

> **request**\<`T`\>(`method`: [`HttpMethod`](../namespaces/Domain/type-aliases/HttpMethod.md), `urlStr`: `string`, `urlParameters`: `Map`\<`string`, `string`\>, `httpHeaders`: `Map`\<`string`, `string`\>, `body?`: `string` \| `Record`\<`string`, `any`\>): `Promise`\<[`ApiResponse`](../namespaces/Domain/classes/ApiResponse.md)\<`T`\>\>

Defined in: [src/edge-agent/helpers/FetchApi.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/FetchApi.ts#L7)

make a request
return an ApiResponse on any 2xx status
throw ApiError otherwise

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `method` | [`HttpMethod`](../namespaces/Domain/type-aliases/HttpMethod.md) | - |
| `urlStr` | `string` | - |
| `urlParameters` | `Map`\<`string`, `string`\> |  |
| `httpHeaders` | `Map`\<`string`, `string`\> |  |
| `body?` | `string` \| `Record`\<`string`, `any`\> |  |

#### Returns

`Promise`\<[`ApiResponse`](../namespaces/Domain/classes/ApiResponse.md)\<`T`\>\>

#### Implementation of

[`Api`](../namespaces/Domain/interfaces/Api.md).[`request`](../namespaces/Domain/interfaces/Api.md#request)
