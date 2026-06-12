[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / SDJWT

# Class: SDJWT

Defined in: [packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts#L32)

## Extends

- `Runner`

## Constructors

### Constructor

> **new SDJWT**(): `SDJWT`

#### Returns

`SDJWT`

#### Inherited from

`Task.Runner.constructor`

## Methods

### clone() {#clone}

> **clone**(): `SDJWT`

Defined in: [packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts#L33)

#### Returns

`SDJWT`

#### Overrides

`Task.Runner.clone`

***

### createPresentationFor() {#createpresentationfor}

> **createPresentationFor**\<`T`\>(`options`: \{ `jws`: `string`; `kb?`: `KBOptions`; `presentationFrame?`: `PFrame`\<`T`\>; `privateKey`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md); \}): `Promise`\<`string`\>

Defined in: [packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts:125](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts#L125)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `SdJwtVcPayload` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `jws`: `string`; `kb?`: `KBOptions`; `presentationFrame?`: `PFrame`\<`T`\>; `privateKey`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md); \} |
| `options.jws` | `string` |
| `options.kb?` | `KBOptions` |
| `options.presentationFrame?` | `PFrame`\<`T`\> |
| `options.privateKey` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) |

#### Returns

`Promise`\<`string`\>

***

### decode() {#decode}

> **decode**(`jws`: `string`): `DecodedSDJwt`

Defined in: [packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts#L37)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jws` | `string` |

#### Returns

`DecodedSDJwt`

***

### getPKConfig() {#getpkconfig}

> **getPKConfig**(`publicKey`: [`PublicKey`](../namespaces/Domain/classes/PublicKey.md)): `SDJWTVCConfig`

Defined in: [packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts:150](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts#L150)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `publicKey` | [`PublicKey`](../namespaces/Domain/classes/PublicKey.md) |

#### Returns

`SDJWTVCConfig`

***

### getSKConfig() {#getskconfig}

> **getSKConfig**(`privateKey`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md)): `SDJWTVCConfig`

Defined in: [packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts:184](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts#L184)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `privateKey` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) |

#### Returns

`SDJWTVCConfig`

***

### reveal() {#reveal}

> **reveal**(`disclosedPayload`: `Record`\<`string`, `unknown`\>, `disclosures`: `Disclosure`\<`unknown`\>[]): `Promise`\<`unknown`\>

Defined in: [packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts:139](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts#L139)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `disclosedPayload` | `Record`\<`string`, `unknown`\> |
| `disclosures` | `Disclosure`\<`unknown`\>[] |

#### Returns

`Promise`\<`unknown`\>

***

### sign() {#sign}

> **sign**\<`E`\>(`options`: \{ `disclosureFrame`: `DisclosureFrame`\<`E`\>; `issuerDID`: [`DID`](../namespaces/Domain/classes/DID.md); `kid?`: `string`; `payload`: `E`; `privateKey?`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md); `purpose?`: `"ISSUING_KEY"` \| `"AUTHENTICATION_KEY"`; \}): `Promise`\<`string`\>

Defined in: [packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts#L41)

#### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* `SdJwtVcPayload` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `disclosureFrame`: `DisclosureFrame`\<`E`\>; `issuerDID`: [`DID`](../namespaces/Domain/classes/DID.md); `kid?`: `string`; `payload`: `E`; `privateKey?`: [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md); `purpose?`: `"ISSUING_KEY"` \| `"AUTHENTICATION_KEY"`; \} |
| `options.disclosureFrame` | `DisclosureFrame`\<`E`\> |
| `options.issuerDID` | [`DID`](../namespaces/Domain/classes/DID.md) |
| `options.kid?` | `string` |
| `options.payload` | `E` |
| `options.privateKey?` | [`PrivateKey`](../namespaces/Domain/classes/PrivateKey.md) |
| `options.purpose?` | `"ISSUING_KEY"` \| `"AUTHENTICATION_KEY"` |

#### Returns

`Promise`\<`string`\>

***

### verify() {#verify}

> **verify**(`options`: \{ `issuerDID`: [`DID`](../namespaces/Domain/classes/DID.md); `jws`: `string`; `requiredClaimKeys?`: `string`[]; `requiredKeyBindings?`: `boolean`; \}): `Promise`\<`boolean`\>

Defined in: [packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts:59](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pollux/utils/jwt/SDJWT.ts#L59)

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

> **withContext**(`ctx`: `ContextProxy`): `Runner`

Defined in: [packages/lib/sdk/src/utils/tasks.ts:108](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/utils/tasks.ts#L108)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | `ContextProxy` |

#### Returns

`Runner`

#### Inherited from

`Task.Runner.withContext`
