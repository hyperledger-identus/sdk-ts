[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / ApiResponse

# Class: ApiResponse\<T\>

Defined in: [src/domain/models/Api.ts:45](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L45)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

## Constructors

### Constructor

> **new ApiResponse**\<`T`\>(`body`: `T`, `status`: `number`, `statusText`: `string`, `headersInit`: `Record`\<`string`, `any`\>): `ApiResponse`\<`T`\>

Defined in: [src/domain/models/Api.ts:48](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L48)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `body` | `T` | `undefined` |
| `status` | `number` | `undefined` |
| `statusText` | `string` | `"OK"` |
| `headersInit` | `Record`\<`string`, `any`\> | `{}` |

#### Returns

`ApiResponse`\<`T`\>

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="body"></a> `body` | `readonly` | `T` | `undefined` | [src/domain/models/Api.ts:49](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L49) |
| <a id="headers"></a> `headers` | `readonly` | `Headers` | `undefined` | [src/domain/models/Api.ts:46](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L46) |
| <a id="status"></a> `status` | `readonly` | `number` | `undefined` | [src/domain/models/Api.ts:50](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L50) |
| <a id="statustext"></a> `statusText` | `readonly` | `string` | `"OK"` | [src/domain/models/Api.ts:51](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L51) |

## Accessors

### httpStatus {#httpstatus}

#### Get Signature

> **get** **httpStatus**(): `number`

Defined in: [src/domain/models/Api.ts:57](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/Api.ts#L57)

##### Returns

`number`
