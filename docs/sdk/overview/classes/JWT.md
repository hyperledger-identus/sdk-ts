[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / JWT

# Class: JWT

Defined in: [src/pollux/utils/jwt/JWT.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/utils/jwt/JWT.ts#L10)

used to enable Modules to propagate the Context
and have access to runTask

## Extends

- [`Runner`](../namespaces/Utils/namespaces/Task/classes/Runner.md)

## Constructors

### Constructor

> **new JWT**(): `JWT`

#### Returns

`JWT`

#### Inherited from

[`Runner`](../namespaces/Utils/namespaces/Task/classes/Runner.md).[`constructor`](../namespaces/Utils/namespaces/Task/classes/Runner.md#constructor)

## Methods

### clone() {#clone}

> **clone**(): `JWT`

Defined in: [src/pollux/utils/jwt/JWT.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/utils/jwt/JWT.ts#L11)

#### Returns

`JWT`

#### Overrides

[`Runner`](../namespaces/Utils/namespaces/Task/classes/Runner.md).[`clone`](../namespaces/Utils/namespaces/Task/classes/Runner.md#clone)

***

### decode() {#decode}

> **decode**(`jws`: `string`): `Promise`\<[`DecodedObj`](../namespaces/Domain/namespaces/JWT/interfaces/DecodedObj.md)\>

Defined in: [src/pollux/utils/jwt/JWT.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/utils/jwt/JWT.ts#L15)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jws` | `string` |

#### Returns

`Promise`\<[`DecodedObj`](../namespaces/Domain/namespaces/JWT/interfaces/DecodedObj.md)\>

***

### signWithDID() {#signwithdid}

> **signWithDID**(`did`: [`DID`](../namespaces/Domain/classes/DID.md), `payload`: `Partial`\<[`Payload`](../namespaces/Domain/namespaces/JWT/type-aliases/Payload.md)\>, `header?`: `Partial`\<[`Header`](../namespaces/Domain/namespaces/JWT/interfaces/Header.md)\>, `privateKey?`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)): `Promise`\<`string`\>

Defined in: [src/pollux/utils/jwt/JWT.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/utils/jwt/JWT.ts#L28)

Creates a signed JWT from a DID and Key

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `did` | [`DID`](../namespaces/Domain/classes/DID.md) |  |
| `payload` | `Partial`\<[`Payload`](../namespaces/Domain/namespaces/JWT/type-aliases/Payload.md)\> |  |
| `header?` | `Partial`\<[`Header`](../namespaces/Domain/namespaces/JWT/interfaces/Header.md)\> |  |
| `privateKey?` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) |  |

#### Returns

`Promise`\<`string`\>

***

### verify() {#verify}

> **verify**(`options`: \{ `holderDID?`: [`DID`](../namespaces/Domain/classes/DID.md); `issuerDID`: [`DID`](../namespaces/Domain/classes/DID.md); `jws`: `string`; \}): `Promise`\<`boolean`\>

Defined in: [src/pollux/utils/jwt/JWT.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/utils/jwt/JWT.ts#L37)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `holderDID?`: [`DID`](../namespaces/Domain/classes/DID.md); `issuerDID`: [`DID`](../namespaces/Domain/classes/DID.md); `jws`: `string`; \} |
| `options.holderDID?` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `options.issuerDID` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `options.jws` | `string` |

#### Returns

`Promise`\<`boolean`\>

***

### withContext() {#withcontext}

> **withContext**(`ctx`: [`Context`](../namespaces/Utils/namespaces/Task/type-aliases/Context.md)): [`Runner`](../namespaces/Utils/namespaces/Task/classes/Runner.md)

Defined in: [src/utils/tasks.ts:103](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L103)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../namespaces/Utils/namespaces/Task/type-aliases/Context.md) |

#### Returns

[`Runner`](../namespaces/Utils/namespaces/Task/classes/Runner.md)

#### Inherited from

[`Runner`](../namespaces/Utils/namespaces/Task/classes/Runner.md).[`withContext`](../namespaces/Utils/namespaces/Task/classes/Runner.md#withcontext)
