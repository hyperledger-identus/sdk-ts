[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / ApiResponse

# Class: ApiResponse\<T\>

Defined in: packages/shared/domain/build/index.d.ts:224

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

## Constructors

### Constructor

> **new ApiResponse**\<`T`\>(`body`: `T`, `status`: `number`, `statusText?`: `string`, `headersInit?`: `Record`\<`string`, `any`\>): `ApiResponse`\<`T`\>

Defined in: packages/shared/domain/build/index.d.ts:229

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | `T` |
| `status` | `number` |
| `statusText?` | `string` |
| `headersInit?` | `Record`\<`string`, `any`\> |

#### Returns

`ApiResponse`\<`T`\>

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-body"></a> `body` | `readonly` | `T` | packages/shared/domain/build/index.d.ts:225 |
| <a id="property-headers"></a> `headers` | `readonly` | `Headers` | packages/shared/domain/build/index.d.ts:228 |
| <a id="property-status"></a> `status` | `readonly` | `number` | packages/shared/domain/build/index.d.ts:226 |
| <a id="property-statustext"></a> `statusText` | `readonly` | `string` | packages/shared/domain/build/index.d.ts:227 |

## Accessors

### httpStatus {#httpstatus}

#### Get Signature

> **get** **httpStatus**(): `number`

Defined in: packages/shared/domain/build/index.d.ts:230

##### Returns

`number`
