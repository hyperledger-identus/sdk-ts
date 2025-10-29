[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / SDJWT

# Class: SDJWT

Defined in: [src/pollux/utils/jwt/SDJWT.ts:28](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/utils/jwt/SDJWT.ts#L28)

used to enable Modules to propagate the Context
and have access to runTask

## Extends

- [`Runner`](../namespaces/Utils/namespaces/Task/classes/Runner.md)

## Constructors

### Constructor

> **new SDJWT**(): `SDJWT`

#### Returns

`SDJWT`

#### Inherited from

[`Runner`](../namespaces/Utils/namespaces/Task/classes/Runner.md).[`constructor`](../namespaces/Utils/namespaces/Task/classes/Runner.md#constructor)

## Methods

### clone() {#clone}

> **clone**(): `SDJWT`

Defined in: [src/pollux/utils/jwt/SDJWT.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/utils/jwt/SDJWT.ts#L29)

#### Returns

`SDJWT`

#### Overrides

[`Runner`](../namespaces/Utils/namespaces/Task/classes/Runner.md).[`clone`](../namespaces/Utils/namespaces/Task/classes/Runner.md#clone)

***

### createPresentationFor() {#createpresentationfor}

> **createPresentationFor**\<`T`\>(`options`: \{ `jws`: `string`; `presentationFrame?`: `PFrame`\<`T`\>; `privateKey`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md); \}): `Promise`\<`string`\>

Defined in: [src/pollux/utils/jwt/SDJWT.ts:97](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/utils/jwt/SDJWT.ts#L97)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `SdJwtVcPayload` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `jws`: `string`; `presentationFrame?`: `PFrame`\<`T`\>; `privateKey`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md); \} |
| `options.jws` | `string` |
| `options.presentationFrame?` | `PFrame`\<`T`\> |
| `options.privateKey` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) |

#### Returns

`Promise`\<`string`\>

***

### decode() {#decode}

> **decode**(`jws`: `string`): `DecodedSDJwt`

Defined in: [src/pollux/utils/jwt/SDJWT.ts:33](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/utils/jwt/SDJWT.ts#L33)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jws` | `string` |

#### Returns

`DecodedSDJwt`

***

### getPKConfig() {#getpkconfig}

> **getPKConfig**(`publicKey`: [`PublicKey`](../namespaces/Domain/classes/PublicKey.md)): `SDJWTVCConfig`

Defined in: [src/pollux/utils/jwt/SDJWT.ts:117](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/utils/jwt/SDJWT.ts#L117)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `publicKey` | [`PublicKey`](../namespaces/Domain/classes/PublicKey.md) |

#### Returns

`SDJWTVCConfig`

***

### getSKConfig() {#getskconfig}

> **getSKConfig**(`privateKey`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)): `SDJWTVCConfig`

Defined in: [src/pollux/utils/jwt/SDJWT.ts:151](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/utils/jwt/SDJWT.ts#L151)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `privateKey` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) |

#### Returns

`SDJWTVCConfig`

***

### reveal() {#reveal}

> **reveal**(`disclosedPayload`: `Record`\<`string`, `unknown`\>, `disclosures`: `Disclosure`\<`unknown`\>[]): `Promise`\<`unknown`\>

Defined in: [src/pollux/utils/jwt/SDJWT.ts:106](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/utils/jwt/SDJWT.ts#L106)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `disclosedPayload` | `Record`\<`string`, `unknown`\> |
| `disclosures` | `Disclosure`\<`unknown`\>[] |

#### Returns

`Promise`\<`unknown`\>

***

### sign() {#sign}

> **sign**\<`E`\>(`options`: \{ `disclosureFrame`: `DisclosureFrame`\<`E`\>; `issuerDID`: [`DID`](../namespaces/Domain/classes/DID.md); `kid?`: `string`; `payload`: `E`; `privateKey?`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md); \}): `Promise`\<`string`\>

Defined in: [src/pollux/utils/jwt/SDJWT.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/utils/jwt/SDJWT.ts#L37)

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `SdJwtVcPayload` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `disclosureFrame`: `DisclosureFrame`\<`E`\>; `issuerDID`: [`DID`](../namespaces/Domain/classes/DID.md); `kid?`: `string`; `payload`: `E`; `privateKey?`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md); \} |
| `options.disclosureFrame` | `DisclosureFrame`\<`E`\> |
| `options.issuerDID` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `options.kid?` | `string` |
| `options.payload` | `E` |
| `options.privateKey?` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) |

#### Returns

`Promise`\<`string`\>

***

### verify() {#verify}

> **verify**(`options`: \{ `issuerDID`: [`DID`](../namespaces/Domain/classes/DID.md); `jws`: `string`; `requiredClaimKeys?`: `string`[]; `requiredKeyBindings?`: `boolean`; \}): `Promise`\<`boolean`\>

Defined in: [src/pollux/utils/jwt/SDJWT.ts:53](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pollux/utils/jwt/SDJWT.ts#L53)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `issuerDID`: [`DID`](../namespaces/Domain/classes/DID.md); `jws`: `string`; `requiredClaimKeys?`: `string`[]; `requiredKeyBindings?`: `boolean`; \} |
| `options.issuerDID` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `options.jws` | `string` |
| `options.requiredClaimKeys?` | `string`[] |
| `options.requiredKeyBindings?` | `boolean` |

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
