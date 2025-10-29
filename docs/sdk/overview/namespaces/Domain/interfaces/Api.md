[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Api

# Interface: Api

Defined in: [src/domain/models/Api.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L15)

Api Dependency

## Methods

### request() {#request}

> **request**\<`T`\>(`httpMethod`: [`HttpMethod`](../type-aliases/HttpMethod.md), `url`: `string`, `urlParameters?`: `Map`\<`string`, `string`\>, `httpHeaders?`: `Map`\<`string`, `string`\>, `body?`: `string` \| `Record`\<`string`, `any`\>): `Promise`\<[`ApiResponse`](../classes/ApiResponse.md)\<`T`\>\>

Defined in: [src/domain/models/Api.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L27)

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
| `httpMethod` | [`HttpMethod`](../type-aliases/HttpMethod.md) |  |
| `url` | `string` |  |
| `urlParameters?` | `Map`\<`string`, `string`\> |  |
| `httpHeaders?` | `Map`\<`string`, `string`\> |  |
| `body?` | `string` \| `Record`\<`string`, `any`\> |  |

#### Returns

`Promise`\<[`ApiResponse`](../classes/ApiResponse.md)\<`T`\>\>
