[**@hyperledger/identus-sdk**](../../../README.md)

***

[@hyperledger/identus-sdk](../../../README.md) / [overview](../../README.md) / Domain

# Domain

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [AgentError](namespaces/AgentError.md) | - |
| [ApolloError](namespaces/ApolloError.md) | - |
| [Backup](namespaces/Backup.md) | - |
| [CastorError](namespaces/CastorError.md) | - |
| [CommonError](namespaces/CommonError.md) | - |
| [DIDDocument](namespaces/DIDDocument/README.md) | - |
| [ExportableKey](namespaces/ExportableKey.md) | Declaration merge to contain key conversion functions |
| [ImportableKey](namespaces/ImportableKey.md) | - |
| [JWK](namespaces/JWK-1.md) | JWK definitions based on https://www.iana.org/assignments/jose/jose.xhtml |
| [JWT](namespaces/JWT.md) | - |
| [MercuryError](namespaces/MercuryError.md) | - |
| [Message](namespaces/Message/README.md) | - |
| [Models](namespaces/Models.md) | - |
| [PEM](namespaces/PEM-1.md) | - |
| [Pluto](namespaces/Pluto.md) | - |
| [PlutoError](namespaces/PlutoError.md) | - |
| [PolluxError](namespaces/PolluxError.md) | - |
| [Protocols](namespaces/Protocols.md) | - |
| [Schema](namespaces/Schema-1.md) | - |
| [Startable](namespaces/Startable.md) | Define controls for managing entity lifecycle. |
| [StorableKey](namespaces/StorableKey/README.md) | - |

## Enumerations

### CredentialType

Defined in: [src/domain/models/VerifiableCredential.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L18)

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="anoncreds"></a> `AnonCreds` | `"AnonCreds"` | [src/domain/models/VerifiableCredential.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L22) |
| <a id="jwt"></a> `JWT` | `"prism/jwt"` | [src/domain/models/VerifiableCredential.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L19) |
| <a id="sdjwt"></a> `SDJWT` | `"vc+sd-jwt"` | [src/domain/models/VerifiableCredential.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L20) |
| <a id="unknown"></a> `Unknown` | `"Unknown"` | [src/domain/models/VerifiableCredential.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L23) |
| <a id="w3c"></a> `W3C` | `"w3c"` | [src/domain/models/VerifiableCredential.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L21) |

***

### Curve

Defined in: [src/domain/models/keyManagement/Curve.ts:1](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Curve.ts#L1)

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="ed25519"></a> `ED25519` | `"Ed25519"` | [src/domain/models/keyManagement/Curve.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Curve.ts#L3) |
| <a id="secp256k1"></a> `SECP256K1` | `"secp256k1"` | [src/domain/models/keyManagement/Curve.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Curve.ts#L4) |
| <a id="x25519"></a> `X25519` | `"X25519"` | [src/domain/models/keyManagement/Curve.ts:2](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Curve.ts#L2) |

***

### JWT\_ALG

Defined in: [src/domain/models/VerifiableCredential.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L12)

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="eddsa"></a> `EdDSA` | `"EdDSA"` | [src/domain/models/VerifiableCredential.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L14) |
| <a id="es256k"></a> `ES256K` | `"ES256K"` | [src/domain/models/VerifiableCredential.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L13) |
| <a id="unknown-1"></a> `unknown` | `"unknown"` | [src/domain/models/VerifiableCredential.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L15) |

***

### KeyProperties

Defined in: [src/domain/models/KeyProperties.ts:1](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/KeyProperties.ts#L1)

#### Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="algorithm"></a> `algorithm` | `"algorithm"` | The 'algorithm' corresponds to the cryptographic algorithm associated with the key. | [src/domain/models/KeyProperties.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/KeyProperties.ts#L5) |
| <a id="chaincode"></a> `chainCode` | `"chainCode"` | The 'chainCode' used for key derivation. hex encoded value. `const chainCode = Buffer.from(props[KeyProperties.chainCode], "hex");` | [src/domain/models/KeyProperties.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/KeyProperties.ts#L30) |
| <a id="curve-1"></a> `curve` | `"curve"` | The 'curve' represents the elliptic curve used for an elliptic-curve key. | [src/domain/models/KeyProperties.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/KeyProperties.ts#L10) |
| <a id="curvepointx"></a> `curvePointX` | `"curvePoint.x"` | The 'curvePointX' represents the x-coordinate of a curve point for an elliptic-curve key. | [src/domain/models/KeyProperties.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/KeyProperties.ts#L46) |
| <a id="curvepointy"></a> `curvePointY` | `"curvePoint.y"` | The 'curvePointY' represents the y-coordinate of a curve point for an elliptic-curve key. | [src/domain/models/KeyProperties.ts:51](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/KeyProperties.ts#L51) |
| <a id="derivationpath"></a> `derivationPath` | `"derivationPath"` | The 'derivationPath' refers to the path used to derive a key in a hierarchical deterministic (HD) key generation scheme. | [src/domain/models/KeyProperties.ts:40](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/KeyProperties.ts#L40) |
| <a id="derivationschema"></a> `derivationSchema` | `"derivationSchema"` | The 'derivationSchema' corresponds to derivationSchema used. | [src/domain/models/KeyProperties.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/KeyProperties.ts#L20) |
| <a id="index"></a> `index` | `"index"` | - | [src/domain/models/KeyProperties.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/KeyProperties.ts#L41) |
| <a id="rawkey"></a> `rawKey` | `"raw"` | The 'rawKey' refers to the raw binary form of the key. | [src/domain/models/KeyProperties.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/KeyProperties.ts#L35) |
| <a id="seed"></a> `seed` | `"seed"` | The 'seed' corresponds to the seed value from which a key is derived. | [src/domain/models/KeyProperties.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/KeyProperties.ts#L15) |

***

### KeyTypes

Defined in: [src/domain/models/keyManagement/KeyTypes.ts:1](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/KeyTypes.ts#L1)

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="curve25519"></a> `Curve25519` | `"Curve25519"` | [src/domain/models/keyManagement/KeyTypes.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/KeyTypes.ts#L3) |
| <a id="ec"></a> `EC` | `"EC"` | [src/domain/models/keyManagement/KeyTypes.ts:2](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/KeyTypes.ts#L2) |
| <a id="unknown-2"></a> `unknown` | `"unknown"` | [src/domain/models/keyManagement/KeyTypes.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/KeyTypes.ts#L4) |

***

### MessageDirection

Defined in: [src/domain/models/Message.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L15)

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="received"></a> `RECEIVED` | `1` | [src/domain/models/Message.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L17) |
| <a id="sent"></a> `SENT` | `0` | [src/domain/models/Message.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L16) |

## Classes

### ApiError

Defined in: [src/domain/models/Api.ts:62](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L62)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new ApiError**(`status`: `number`, `statusText`: `string`, `body`: `any`): [`ApiError`](#apierror)

Defined in: [src/domain/models/Api.ts:63](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L63)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | `number` |
| `statusText` | `string` |
| `body` | `any` |

###### Returns

[`ApiError`](#apierror)

###### Overrides

`Error.constructor`

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="body"></a> `body` | `readonly` | `any` | [src/domain/models/Api.ts:66](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L66) |
| <a id="status"></a> `status` | `readonly` | `number` | [src/domain/models/Api.ts:64](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L64) |
| <a id="statustext"></a> `statusText` | `readonly` | `string` | [src/domain/models/Api.ts:65](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L65) |

***

### ApiRequest

Defined in: [src/domain/models/Api.ts:36](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L36)

#### Extended by

- [`CredentialRequest`](../../../plugins/internal/oidc/README.md#credentialrequest)
- [`TokenRequest`](../../../plugins/internal/oidc/README.md#tokenrequest)

#### Constructors

##### Constructor

> **new ApiRequest**(`url`: `URL`): [`ApiRequest`](#apirequest)

Defined in: [src/domain/models/Api.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L42)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `URL` |

###### Returns

[`ApiRequest`](#apirequest)

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="body-1"></a> `body?` | `public` | `string` \| [`JsonObj`](../Utils/README.md#jsonobj) | `undefined` | [src/domain/models/Api.ts:40](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L40) |
| <a id="headers"></a> `headers` | `readonly` | `Headers` | `undefined` | [src/domain/models/Api.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L37) |
| <a id="method"></a> `method` | `public` | [`HttpMethod`](#httpmethod) | `"GET"` | [src/domain/models/Api.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L39) |
| <a id="params"></a> `params` | `readonly` | `URLSearchParams` | `undefined` | [src/domain/models/Api.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L38) |
| <a id="url"></a> `url` | `readonly` | `URL` | `undefined` | [src/domain/models/Api.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L42) |

***

### ApiResponse\<T\>

Defined in: [src/domain/models/Api.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L45)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

#### Constructors

##### Constructor

> **new ApiResponse**\<`T`\>(`body`: `T`, `status`: `number`, `statusText`: `string`, `headersInit`: `Record`\<`string`, `any`\>): [`ApiResponse`](#apiresponse)\<`T`\>

Defined in: [src/domain/models/Api.ts:48](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L48)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `body` | `T` | `undefined` |
| `status` | `number` | `undefined` |
| `statusText` | `string` | `"OK"` |
| `headersInit` | `Record`\<`string`, `any`\> | `{}` |

###### Returns

[`ApiResponse`](#apiresponse)\<`T`\>

#### Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="body-2"></a> `body` | `readonly` | `T` | `undefined` | [src/domain/models/Api.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L49) |
| <a id="headers-1"></a> `headers` | `readonly` | `Headers` | `undefined` | [src/domain/models/Api.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L46) |
| <a id="status-1"></a> `status` | `readonly` | `number` | `undefined` | [src/domain/models/Api.ts:50](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L50) |
| <a id="statustext-1"></a> `statusText` | `readonly` | `string` | `"OK"` | [src/domain/models/Api.ts:51](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L51) |

#### Accessors

##### httpStatus

###### Get Signature

> **get** **httpStatus**(): `number`

Defined in: [src/domain/models/Api.ts:57](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L57)

###### Returns

`number`

***

### AttachmentDescriptor

Defined in: [src/domain/models/MessageAttachment.ts:40](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L40)

#### Constructors

##### Constructor

> **new AttachmentDescriptor**(`data`: [`AttachmentData`](#attachmentdata), `mediaType?`: `string`, `id?`: `string`, `filename?`: `string`[], `format?`: `string`, `lastModTime?`: `string`, `byteCount?`: `number`, `description?`: `string`): [`AttachmentDescriptor`](#attachmentdescriptor)

Defined in: [src/domain/models/MessageAttachment.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L41)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`AttachmentData`](#attachmentdata) |
| `mediaType?` | `string` |
| `id?` | `string` |
| `filename?` | `string`[] |
| `format?` | `string` |
| `lastModTime?` | `string` |
| `byteCount?` | `number` |
| `description?` | `string` |

###### Returns

[`AttachmentDescriptor`](#attachmentdescriptor)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="bytecount"></a> `byteCount?` | `readonly` | `number` | [src/domain/models/MessageAttachment.ts:48](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L48) |
| <a id="data"></a> `data` | `readonly` | [`AttachmentData`](#attachmentdata) | [src/domain/models/MessageAttachment.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L42) |
| <a id="description"></a> `description?` | `readonly` | `string` | [src/domain/models/MessageAttachment.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L49) |
| <a id="filename"></a> `filename?` | `readonly` | `string`[] | [src/domain/models/MessageAttachment.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L45) |
| <a id="format"></a> `format?` | `readonly` | `string` | [src/domain/models/MessageAttachment.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L46) |
| <a id="id"></a> `id` | `readonly` | `string` | [src/domain/models/MessageAttachment.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L44) |
| <a id="lastmodtime"></a> `lastModTime?` | `readonly` | `string` | [src/domain/models/MessageAttachment.ts:47](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L47) |
| <a id="mediatype"></a> `mediaType?` | `readonly` | `string` | [src/domain/models/MessageAttachment.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L43) |

#### Accessors

##### payload

###### Get Signature

> **get** **payload**(): `any`

Defined in: [src/domain/models/MessageAttachment.ts:52](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L52)

###### Returns

`any`

#### Methods

##### build()

> `static` **build**\<`T`\>(`payload`: `T`, `id`: `string`, `mediaType`: `string`, `filename?`: `string`[], `format?`: `string`, `lastModTime?`: `string`, `byteCount?`: `number`, `description?`: `string`): [`AttachmentDescriptor`](#attachmentdescriptor)

Defined in: [src/domain/models/MessageAttachment.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L56)

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `payload` | `T` | `undefined` |
| `id` | `string` | `...` |
| `mediaType` | `string` | `"application/json"` |
| `filename?` | `string`[] | `undefined` |
| `format?` | `string` | `undefined` |
| `lastModTime?` | `string` | `undefined` |
| `byteCount?` | `number` | `undefined` |
| `description?` | `string` | `undefined` |

###### Returns

[`AttachmentDescriptor`](#attachmentdescriptor)

***

### `abstract` Credential

Defined in: [src/domain/models/Credential.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L6)

Storable
define properties a Domain object must implement to be compatible with Pluto

#### Extended by

- [`AnonCredsCredential`](../../README.md#anoncredscredential)
- [`JWTCredential`](../../README.md#jwtcredential)
- [`SDJWTCredential`](../../README.md#sdjwtcredential)

#### Implements

- [`Storable`](namespaces/Pluto.md#storable)

#### Constructors

##### Constructor

> **new Credential**(): [`Credential`](#credential)

###### Returns

[`Credential`](#credential)

#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="claims"></a> `claims` | `abstract` | [`Claim`](#claim)[] | - | [src/domain/models/Credential.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L12) |
| <a id="credentialtype-1"></a> `credentialType` | `abstract` | [`CredentialType`](#credentialtype) | - | [src/domain/models/Credential.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L7) |
| <a id="id-1"></a> `id` | `abstract` | `string` | - | [src/domain/models/Credential.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L9) |
| <a id="issuer"></a> `issuer` | `abstract` | `string` | - | [src/domain/models/Credential.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L10) |
| <a id="properties"></a> `properties` | `abstract` | `Map`\<`string`, `any`\> | - | [src/domain/models/Credential.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L13) |
| <a id="recoveryid"></a> `recoveryId` | `abstract` | `string` | - | [src/domain/models/Credential.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L8) |
| <a id="subject"></a> `subject` | `abstract` | `string` | - | [src/domain/models/Credential.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L11) |
| <a id="uuid"></a> `uuid` | `readonly` | `string` | Universally Unique Identifier. should be unique across all items. | [src/domain/models/Credential.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L15) |

#### Methods

##### getProperty()

> **getProperty**(`name`: `string`): `any`

Defined in: [src/domain/models/Credential.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`any`

##### isProvable()

> **isProvable**(): `this is ProvableCredential`

Defined in: [src/domain/models/Credential.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L21)

###### Returns

`this is ProvableCredential`

##### isRevoked()

> **isRevoked**(): `boolean`

Defined in: [src/domain/models/Credential.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L29)

###### Returns

`boolean`

##### isStorable()

> **isStorable**(): `this is StorableCredential`

Defined in: [src/domain/models/Credential.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L25)

###### Returns

`this is StorableCredential`

***

### CredentialMetadata

Defined in: [src/domain/models/CredentialMetadata.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/CredentialMetadata.ts#L4)

Storable
define properties a Domain object must implement to be compatible with Pluto

#### Implements

- [`Storable`](namespaces/Pluto.md#storable)

#### Constructors

##### Constructor

> **new CredentialMetadata**(`type`: [`CredentialType`](#credentialtype), `name`: `string`, `json`: `Record`\<`string`, `any`\>): [`CredentialMetadata`](#credentialmetadata)

Defined in: [src/domain/models/CredentialMetadata.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/CredentialMetadata.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`CredentialType`](#credentialtype) |
| `name` | `string` |
| `json` | `Record`\<`string`, `any`\> |

###### Returns

[`CredentialMetadata`](#credentialmetadata)

#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="name"></a> `name` | `readonly` | `string` | - | [src/domain/models/CredentialMetadata.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/CredentialMetadata.ts#L9) |
| <a id="type"></a> `type` | `readonly` | [`CredentialType`](#credentialtype) | - | [src/domain/models/CredentialMetadata.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/CredentialMetadata.ts#L8) |
| <a id="uuid-1"></a> `uuid` | `readonly` | `string` | Universally Unique Identifier. should be unique across all items. | [src/domain/models/CredentialMetadata.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/CredentialMetadata.ts#L5) |

#### Methods

##### isType()

> **isType**(`type`: [`CredentialType`](#credentialtype)): `boolean`

Defined in: [src/domain/models/CredentialMetadata.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/CredentialMetadata.ts#L19)

Check the CredentialType of this Metadata

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | [`CredentialType`](#credentialtype) |  |

###### Returns

`boolean`

##### toJSON()

> **toJSON**(): `Record`\<`string`, `any`\>

Defined in: [src/domain/models/CredentialMetadata.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/CredentialMetadata.ts#L28)

Get the raw CredentialMetadata JSON

###### Returns

`Record`\<`string`, `any`\>

JSON

***

### `abstract` DerivableKey

Defined in: [src/domain/models/keyManagement/DerivableKey.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/DerivableKey.ts#L3)

#### Constructors

##### Constructor

> **new DerivableKey**(): [`DerivableKey`](#derivablekey)

###### Returns

[`DerivableKey`](#derivablekey)

#### Methods

##### derive()

> `abstract` **derive**(`derivationPath`: `string`): [`PrivateKey`](#privatekey-2)

Defined in: [src/domain/models/keyManagement/DerivableKey.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/DerivableKey.ts#L4)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `derivationPath` | `string` |

###### Returns

[`PrivateKey`](#privatekey-2)

***

### DID

Defined in: [src/domain/models/DID.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DID.ts#L4)

Storable
define properties a Domain object must implement to be compatible with Pluto

#### Implements

- [`Storable`](namespaces/Pluto.md#storable)

#### Constructors

##### Constructor

> **new DID**(`schema`: `string`, `method`: `string`, `methodId`: `string`): [`DID`](#did)

Defined in: [src/domain/models/DID.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DID.ts#L10)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `schema` | `string` |
| `method` | `string` |
| `methodId` | `string` |

###### Returns

[`DID`](#did)

#### Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="method-1"></a> `method` | `readonly` | `string` | - | [src/domain/models/DID.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DID.ts#L7) |
| <a id="methodid"></a> `methodId` | `readonly` | `string` | - | [src/domain/models/DID.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DID.ts#L8) |
| <a id="schema"></a> `schema` | `readonly` | `string` | - | [src/domain/models/DID.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DID.ts#L6) |
| <a id="uuid-2"></a> `uuid` | `readonly` | `string` | Universally Unique Identifier. should be unique across all items. | [src/domain/models/DID.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DID.ts#L5) |

#### Methods

##### toString()

> **toString**(): `string`

Defined in: [src/domain/models/DID.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DID.ts#L17)

Returns a string representation of an object.

###### Returns

`string`

##### from()

> `static` **from**(`value`: `unknown`): [`DID`](#did)

Defined in: [src/domain/models/DID.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DID.ts#L26)

parse value into a DID

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | some representation of a DID |

###### Returns

[`DID`](#did)

##### fromString()

> `static` **fromString**(`text`: `string`): [`DID`](#did)

Defined in: [src/domain/models/DID.ts:47](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DID.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

###### Returns

[`DID`](#did)

##### getMethodFromString()

> `static` **getMethodFromString**(`text`: `string`): `undefined` \| `string`

Defined in: [src/domain/models/DID.ts:70](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DID.ts#L70)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

###### Returns

`undefined` \| `string`

##### getMethodIdFromString()

> `static` **getMethodIdFromString**(`text`: `string`): `string`

Defined in: [src/domain/models/DID.ts:75](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DID.ts#L75)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

###### Returns

`string`

##### getSchemaFromString()

> `static` **getSchemaFromString**(`text`: `string`): `undefined` \| `string`

Defined in: [src/domain/models/DID.ts:65](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DID.ts#L65)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

###### Returns

`undefined` \| `string`

##### replaceDID()

> `static` **replaceDID**(`oldStr`: `string`, `did`: [`DID`](#did)): `string`

Defined in: [src/domain/models/DID.ts:81](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DID.ts#L81)

replace with a new DID

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldStr` | `string` |
| `did` | [`DID`](#did) |

###### Returns

`string`

***

### DIDDocument

Defined in: [src/domain/models/DIDDocument.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L5)

#### Constructors

##### Constructor

> **new DIDDocument**(`id`: [`DID`](#did), `coreProperties`: [`CoreProperty`](namespaces/DIDDocument/README.md#coreproperty)[]): [`DIDDocument`](#diddocument)

Defined in: [src/domain/models/DIDDocument.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L6)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | [`DID`](#did) |
| `coreProperties` | [`CoreProperty`](namespaces/DIDDocument/README.md#coreproperty)[] |

###### Returns

[`DIDDocument`](#diddocument)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="coreproperties"></a> `coreProperties` | `public` | [`CoreProperty`](namespaces/DIDDocument/README.md#coreproperty)[] | [src/domain/models/DIDDocument.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L8) |
| <a id="id-2"></a> `id` | `public` | [`DID`](#did) | [src/domain/models/DIDDocument.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L7) |

#### Accessors

##### assertionMethod

###### Get Signature

> **get** **assertionMethod**(): [`VerificationMethod`](namespaces/DIDDocument/README.md#verificationmethod)[]

Defined in: [src/domain/models/DIDDocument.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L39)

###### Returns

[`VerificationMethod`](namespaces/DIDDocument/README.md#verificationmethod)[]

##### authentication

###### Get Signature

> **get** **authentication**(): [`VerificationMethod`](namespaces/DIDDocument/README.md#verificationmethod)[]

Defined in: [src/domain/models/DIDDocument.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L17)

###### Returns

[`VerificationMethod`](namespaces/DIDDocument/README.md#verificationmethod)[]

##### capabilityDelegation

###### Get Signature

> **get** **capabilityDelegation**(): [`VerificationMethod`](namespaces/DIDDocument/README.md#verificationmethod)[]

Defined in: [src/domain/models/DIDDocument.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L32)

###### Returns

[`VerificationMethod`](namespaces/DIDDocument/README.md#verificationmethod)[]

##### capabilityInvocation

###### Get Signature

> **get** **capabilityInvocation**(): [`VerificationMethod`](namespaces/DIDDocument/README.md#verificationmethod)[]

Defined in: [src/domain/models/DIDDocument.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L25)

###### Returns

[`VerificationMethod`](namespaces/DIDDocument/README.md#verificationmethod)[]

##### keyAgreement

###### Get Signature

> **get** **keyAgreement**(): [`VerificationMethod`](namespaces/DIDDocument/README.md#verificationmethod)[]

Defined in: [src/domain/models/DIDDocument.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L46)

###### Returns

[`VerificationMethod`](namespaces/DIDDocument/README.md#verificationmethod)[]

##### services

###### Get Signature

> **get** **services**(): [`Service`](namespaces/DIDDocument/README.md#service)[]

Defined in: [src/domain/models/DIDDocument.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L11)

###### Returns

[`Service`](namespaces/DIDDocument/README.md#service)[]

##### verificationMethods

###### Get Signature

> **get** **verificationMethods**(): [`VerificationMethod`](namespaces/DIDDocument/README.md#verificationmethod)[]

Defined in: [src/domain/models/DIDDocument.ts:54](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L54)

###### Returns

[`VerificationMethod`](namespaces/DIDDocument/README.md#verificationmethod)[]

#### Methods

##### cloneWithNewDID()

> `static` **cloneWithNewDID**(`doc`: [`DIDDocument`](#diddocument), `newDid`: [`DID`](#did)): [`DIDDocument`](#diddocument)

Defined in: [src/domain/models/DIDDocument.ts:190](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L190)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `doc` | [`DIDDocument`](#diddocument) |
| `newDid` | [`DID`](#did) |

###### Returns

[`DIDDocument`](#diddocument)

##### fromJSON()

> `static` **fromJSON**(`didDocumentJson`: `any`): [`DIDDocument`](#diddocument)

Defined in: [src/domain/models/DIDDocument.ts:62](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDDocument.ts#L62)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `didDocumentJson` | `any` |

###### Returns

[`DIDDocument`](#diddocument)

***

### DIDPair

Defined in: [src/domain/models/DIDPair.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDPair.ts#L3)

#### Constructors

##### Constructor

> **new DIDPair**(`host`: [`DID`](#did), `receiver`: [`DID`](#did), `name`: `string`): [`DIDPair`](#didpair)

Defined in: [src/domain/models/DIDPair.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDPair.ts#L4)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `host` | [`DID`](#did) |
| `receiver` | [`DID`](#did) |
| `name` | `string` |

###### Returns

[`DIDPair`](#didpair)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="host"></a> `host` | `readonly` | [`DID`](#did) | [src/domain/models/DIDPair.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDPair.ts#L5) |
| <a id="name-1"></a> `name` | `readonly` | `string` | [src/domain/models/DIDPair.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDPair.ts#L7) |
| <a id="receiver"></a> `receiver` | `readonly` | [`DID`](#did) | [src/domain/models/DIDPair.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDPair.ts#L6) |

***

### `abstract` DIDResolver

Defined in: [src/domain/models/DIDResolver.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDResolver.ts#L3)

#### Constructors

##### Constructor

> **new DIDResolver**(): [`DIDResolver`](#didresolver)

###### Returns

[`DIDResolver`](#didresolver)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="method-2"></a> `method` | `abstract` | `string` | [src/domain/models/DIDResolver.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDResolver.ts#L4) |

#### Methods

##### resolve()

> `abstract` **resolve**(`didString`: `string`): `Promise`\<[`DIDDocument`](#diddocument)\>

Defined in: [src/domain/models/DIDResolver.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDResolver.ts#L5)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `didString` | `string` |

###### Returns

`Promise`\<[`DIDDocument`](#diddocument)\>

***

### DIDUrl

Defined in: [src/domain/models/DIDUrl.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDUrl.ts#L3)

#### Constructors

##### Constructor

> **new DIDUrl**(`did`: [`DID`](#did), `path`: `string`[], `parameters`: `Map`\<`string`, `string`\>, `fragment`: `string`): [`DIDUrl`](#didurl)

Defined in: [src/domain/models/DIDUrl.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDUrl.ts#L9)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `did` | [`DID`](#did) | `undefined` |
| `path` | `string`[] | `[]` |
| `parameters` | `Map`\<`string`, `string`\> | `...` |
| `fragment` | `string` | `""` |

###### Returns

[`DIDUrl`](#didurl)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="did-1"></a> `did` | [`DID`](#did) | [src/domain/models/DIDUrl.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDUrl.ts#L4) |
| <a id="fragment"></a> `fragment` | `string` | [src/domain/models/DIDUrl.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDUrl.ts#L7) |
| <a id="parameters"></a> `parameters` | `Map`\<`string`, `string`\> | [src/domain/models/DIDUrl.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDUrl.ts#L6) |
| <a id="path"></a> `path` | `string`[] | [src/domain/models/DIDUrl.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDUrl.ts#L5) |

#### Methods

##### fragmentString()

> **fragmentString**(): `string`

Defined in: [src/domain/models/DIDUrl.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDUrl.ts#L35)

###### Returns

`string`

##### pathString()

> **pathString**(): `string`

Defined in: [src/domain/models/DIDUrl.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDUrl.ts#L25)

###### Returns

`string`

##### queryString()

> **queryString**(): `string`

Defined in: [src/domain/models/DIDUrl.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDUrl.ts#L29)

###### Returns

`string`

##### string()

> **string**(): `string`

Defined in: [src/domain/models/DIDUrl.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/DIDUrl.ts#L21)

###### Returns

`string`

***

### `abstract` Key

Defined in: [src/domain/models/keyManagement/Key.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L11)

#### Extended by

- [`PrivateKey`](#privatekey-2)
- [`PublicKey`](#publickey-3)

#### Constructors

##### Constructor

> **new Key**(): [`Key`](#key)

###### Returns

[`Key`](#key)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="keyspecification"></a> `keySpecification` | `abstract` | `Map`\<`string`, `string`\> | [src/domain/models/keyManagement/Key.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L13) |
| <a id="raw"></a> `raw` | `abstract` | `Uint8Array` | [src/domain/models/keyManagement/Key.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L15) |
| <a id="size"></a> `size` | `abstract` | `number` | [src/domain/models/keyManagement/Key.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L14) |
| <a id="to"></a> `to` | `abstract` | \{ `Buffer`: () => `Buffer`; `String`: (`encoding?`: `BufferEncoding`) => `string`; \} | [src/domain/models/keyManagement/Key.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L16) |
| `to.Buffer` | `public` | () => `Buffer` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L31) |
| `to.String` | `public` | (`encoding?`: `BufferEncoding`) => `string` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L32) |
| <a id="type-1"></a> `type` | `abstract` | [`KeyTypes`](#keytypes) | [src/domain/models/keyManagement/Key.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L12) |

#### Accessors

##### alg

###### Get Signature

> **get** **alg**(): [`JWT_ALG`](#jwt_alg)

Defined in: [src/domain/models/keyManagement/Key.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L25)

###### Returns

[`JWT_ALG`](#jwt_alg)

##### curve

###### Get Signature

> **get** **curve**(): `string`

Defined in: [src/domain/models/keyManagement/Key.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L20)

###### Returns

`string`

#### Methods

##### canVerify()

> **canVerify**(): `this is VerifiableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L53)

###### Returns

`this is VerifiableKey`

##### getEncoded()

> `abstract` **getEncoded**(): `Uint8Array`

Defined in: [src/domain/models/keyManagement/Key.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L18)

###### Returns

`Uint8Array`

##### getProperty()

> **getProperty**(`name`: `string`): `undefined` \| `string`

Defined in: [src/domain/models/keyManagement/Key.ts:57](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`undefined` \| `string`

##### isCurve()

> **isCurve**\<`T`\>(`curve`: `string`): `this is T`

Defined in: [src/domain/models/keyManagement/Key.ts:61](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L61)

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `curve` | `string` |

###### Returns

`this is T`

##### isDerivable()

> **isDerivable**(): `this is DerivableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L37)

###### Returns

`this is DerivableKey`

##### isExportable()

> **isExportable**(): `this is All`

Defined in: [src/domain/models/keyManagement/Key.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L41)

###### Returns

`this is All`

##### isSignable()

> **isSignable**(): `this is SignableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L45)

###### Returns

`this is SignableKey`

##### isStorable()

> **isStorable**(): `this is StorableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L49)

###### Returns

`this is StorableKey`

***

### `abstract` KeyPair

Defined in: [src/domain/models/KeyPair.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/KeyPair.ts#L4)

#### Constructors

##### Constructor

> **new KeyPair**(): [`KeyPair`](#keypair)

###### Returns

[`KeyPair`](#keypair)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="privatekey"></a> `privateKey` | `abstract` | [`PrivateKey`](#privatekey-2) | [src/domain/models/KeyPair.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/KeyPair.ts#L10) |
| <a id="publickey"></a> `publicKey` | `abstract` | [`PublicKey`](#publickey-3) | [src/domain/models/KeyPair.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/KeyPair.ts#L9) |

#### Accessors

##### curve

###### Get Signature

> **get** **curve**(): `string`

Defined in: [src/domain/models/KeyPair.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/KeyPair.ts#L5)

###### Returns

`string`

***

### LinkSecret

Defined in: [src/domain/models/LinkSecret.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/LinkSecret.ts#L3)

Storable
define properties a Domain object must implement to be compatible with Pluto

#### Implements

- [`Storable`](namespaces/Pluto.md#storable)

#### Constructors

##### Constructor

> **new LinkSecret**(`secret`: `string`, `name`: `string`): [`LinkSecret`](#linksecret)

Defined in: [src/domain/models/LinkSecret.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/LinkSecret.ts#L8)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `secret` | `string` | `undefined` |
| `name` | `string` | `LinkSecret.defaultName` |

###### Returns

[`LinkSecret`](#linksecret)

#### Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="name-2"></a> `name` | `readonly` | `string` | `LinkSecret.defaultName` | - | [src/domain/models/LinkSecret.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/LinkSecret.ts#L10) |
| <a id="secret"></a> `secret` | `readonly` | `string` | `undefined` | - | [src/domain/models/LinkSecret.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/LinkSecret.ts#L9) |
| <a id="uuid-3"></a> `uuid` | `readonly` | `string` | `undefined` | Universally Unique Identifier. should be unique across all items. | [src/domain/models/LinkSecret.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/LinkSecret.ts#L6) |
| <a id="defaultname"></a> `defaultName` | `static` | `string` | `"default"` | - | [src/domain/models/LinkSecret.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/LinkSecret.ts#L4) |

***

### Message

Defined in: [src/domain/models/Message.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L20)

Storable
define properties a Domain object must implement to be compatible with Pluto

#### Implements

- [`Storable`](namespaces/Pluto.md#storable)

#### Constructors

##### Constructor

> **new Message**(`body`: `string` \| [`JsonObj`](../Utils/README.md#jsonobj), `id`: `string`, `piuri`: `string`, `from?`: [`DID`](#did), `to?`: [`DID`](#did), `attachments?`: [`AttachmentDescriptor`](#attachmentdescriptor)[], `thid?`: `string`, `extraHeaders?`: [`JsonObj`](../Utils/README.md#jsonobj), `createdTime?`: `number`, `expiresTimePlus?`: `number`, `ack?`: `string`[], `direction?`: [`MessageDirection`](#messagedirection), `fromPrior?`: `string`, `pthid?`: `string`): [`Message`](#message)

Defined in: [src/domain/models/Message.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L24)

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `body` | `string` \| [`JsonObj`](../Utils/README.md#jsonobj) | `undefined` |
| `id` | `string` | `...` |
| `piuri` | `string` | `undefined` |
| `from?` | [`DID`](#did) | `undefined` |
| `to?` | [`DID`](#did) | `undefined` |
| `attachments?` | [`AttachmentDescriptor`](#attachmentdescriptor)[] | `[]` |
| `thid?` | `string` | `undefined` |
| `extraHeaders?` | [`JsonObj`](../Utils/README.md#jsonobj) | `{}` |
| `createdTime?` | `number` | `...` |
| `expiresTimePlus?` | `number` | `...` |
| `ack?` | `string`[] | `[]` |
| `direction?` | [`MessageDirection`](#messagedirection) | `MessageDirection.RECEIVED` |
| `fromPrior?` | `string` | `undefined` |
| `pthid?` | `string` | `undefined` |

###### Returns

[`Message`](#message)

#### Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="ack"></a> `ack` | `readonly` | `string`[] | `[]` | - | [src/domain/models/Message.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L35) |
| <a id="attachments"></a> `attachments` | `readonly` | [`AttachmentDescriptor`](#attachmentdescriptor)[] | `[]` | - | [src/domain/models/Message.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L30) |
| <a id="body-3"></a> `body` | `readonly` | [`JsonObj`](../Utils/README.md#jsonobj) | `undefined` | - | [src/domain/models/Message.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L22) |
| <a id="createdtime"></a> `createdTime` | `readonly` | `number` | `undefined` | - | [src/domain/models/Message.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L33) |
| <a id="direction"></a> `direction` | `public` | [`MessageDirection`](#messagedirection) | `MessageDirection.RECEIVED` | - | [src/domain/models/Message.ts:36](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L36) |
| <a id="expirestimeplus"></a> `expiresTimePlus` | `readonly` | `number` | `undefined` | - | [src/domain/models/Message.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L34) |
| <a id="extraheaders"></a> `extraHeaders` | `readonly` | [`JsonObj`](../Utils/README.md#jsonobj) | `{}` | - | [src/domain/models/Message.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L32) |
| <a id="from-2"></a> `from?` | `readonly` | [`DID`](#did) | `undefined` | - | [src/domain/models/Message.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L28) |
| <a id="fromprior"></a> `fromPrior?` | `readonly` | `string` | `undefined` | - | [src/domain/models/Message.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L37) |
| <a id="id-3"></a> `id` | `readonly` | `string` | `undefined` | - | [src/domain/models/Message.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L26) |
| <a id="piuri"></a> `piuri` | `readonly` | `string` | `undefined` | - | [src/domain/models/Message.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L27) |
| <a id="pthid"></a> `pthid?` | `readonly` | `string` | `undefined` | - | [src/domain/models/Message.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L38) |
| <a id="thid"></a> `thid?` | `readonly` | `string` | `undefined` | - | [src/domain/models/Message.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L31) |
| <a id="to-1"></a> `to?` | `readonly` | [`DID`](#did) | `undefined` | - | [src/domain/models/Message.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L29) |
| <a id="uuid-4"></a> `uuid` | `public` | `string` | `undefined` | Universally Unique Identifier. should be unique across all items. | [src/domain/models/Message.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L21) |

#### Methods

##### fromJson()

> `static` **fromJson**(`jsonString`: `any`): [`Message`](#message)

Defined in: [src/domain/models/Message.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `any` |

###### Returns

[`Message`](#message)

##### isBase64Attachment()

> `static` **isBase64Attachment**(`data`: `any`): `data is AttachmentBase64`

Defined in: [src/domain/models/Message.ts:140](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L140)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `any` |

###### Returns

`data is AttachmentBase64`

##### isJsonAttachment()

> `static` **isJsonAttachment**(`data`: `any`): `data is AttachmentJsonData`

Defined in: [src/domain/models/Message.ts:144](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Message.ts#L144)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `any` |

###### Returns

`data is AttachmentJsonData`

***

### PrismDID

Defined in: [src/domain/models/PrismDID.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/PrismDID.ts#L5)

#### Constructors

##### Constructor

> **new PrismDID**(`did`: [`DID`](#did), `privateKey`: [`PrivateKey`](#privatekey-2), `alias?`: `string`): [`PrismDID`](#prismdid)

Defined in: [src/domain/models/PrismDID.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/PrismDID.ts#L6)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](#did) |
| `privateKey` | [`PrivateKey`](#privatekey-2) |
| `alias?` | `string` |

###### Returns

[`PrismDID`](#prismdid)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="alias"></a> `alias?` | `readonly` | `string` | [src/domain/models/PrismDID.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/PrismDID.ts#L9) |
| <a id="did-2"></a> `did` | `readonly` | [`DID`](#did) | [src/domain/models/PrismDID.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/PrismDID.ts#L7) |
| <a id="privatekey-1"></a> `privateKey` | `readonly` | [`PrivateKey`](#privatekey-2) | [src/domain/models/PrismDID.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/PrismDID.ts#L8) |

#### Methods

##### parseMethodId()

> `static` **parseMethodId**(`value`: `string` \| `string`[]): `string`

Defined in: [src/domain/models/PrismDID.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/PrismDID.ts#L12)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` \| `string`[] |

###### Returns

`string`

***

### `abstract` PrivateKey

Defined in: [src/domain/models/keyManagement/PrivateKey.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/PrivateKey.ts#L6)

Storable
define properties a Domain object must implement to be compatible with Pluto

#### Extends

- [`Key`](#key)

#### Implements

- [`Storable`](namespaces/Pluto.md#storable)

#### Constructors

##### Constructor

> **new PrivateKey**(): [`PrivateKey`](#privatekey-2)

###### Returns

[`PrivateKey`](#privatekey-2)

###### Inherited from

[`Key`](#key).[`constructor`](#constructor-12)

#### Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="keyspecification-1"></a> `keySpecification` | `abstract` | `Map`\<`string`, `string`\> | - | [`Key`](#key).[`keySpecification`](#keyspecification) | [src/domain/models/keyManagement/Key.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L13) |
| <a id="raw-1"></a> `raw` | `abstract` | `Uint8Array` | - | [`Key`](#key).[`raw`](#raw) | [src/domain/models/keyManagement/Key.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L15) |
| <a id="size-1"></a> `size` | `abstract` | `number` | - | [`Key`](#key).[`size`](#size) | [src/domain/models/keyManagement/Key.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L14) |
| <a id="to-2"></a> `to` | `abstract` | \{ `Buffer`: () => `Buffer`; `String`: (`encoding?`: `BufferEncoding`) => `string`; \} | - | [`Key`](#key).[`to`](#to) | [src/domain/models/keyManagement/Key.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L16) |
| `to.Buffer` | `public` | () => `Buffer` | - | - | [src/domain/models/keyManagement/exportable/ExportableKey.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L31) |
| `to.String` | `public` | (`encoding?`: `BufferEncoding`) => `string` | - | - | [src/domain/models/keyManagement/exportable/ExportableKey.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L32) |
| <a id="type-2"></a> `type` | `abstract` | [`KeyTypes`](#keytypes) | - | [`Key`](#key).[`type`](#type-1) | [src/domain/models/keyManagement/Key.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L12) |
| <a id="uuid-5"></a> `uuid` | `readonly` | `string` | Universally Unique Identifier. should be unique across all items. | - | [src/domain/models/keyManagement/PrivateKey.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/PrivateKey.ts#L9) |

#### Accessors

##### alg

###### Get Signature

> **get** **alg**(): [`JWT_ALG`](#jwt_alg)

Defined in: [src/domain/models/keyManagement/Key.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L25)

###### Returns

[`JWT_ALG`](#jwt_alg)

###### Inherited from

[`Key`](#key).[`alg`](#alg)

##### curve

###### Get Signature

> **get** **curve**(): `string`

Defined in: [src/domain/models/keyManagement/PrivateKey.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/PrivateKey.ts#L11)

###### Returns

`string`

###### Overrides

[`Key`](#key).[`curve`](#curve-2)

##### index

###### Get Signature

> **get** **index**(): `undefined` \| `number`

Defined in: [src/domain/models/keyManagement/PrivateKey.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/PrivateKey.ts#L23)

Derivation index.
The index of the key in the derivation path.
Only applicable for HD keys

###### Returns

`undefined` \| `number`

##### value

###### Get Signature

> **get** **value**(): `Uint8Array`\<`ArrayBuffer`\>

Defined in: [src/domain/models/keyManagement/PrivateKey.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/PrivateKey.ts#L30)

###### Returns

`Uint8Array`\<`ArrayBuffer`\>

#### Methods

##### canVerify()

> **canVerify**(): `this is VerifiableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L53)

###### Returns

`this is VerifiableKey`

###### Inherited from

[`Key`](#key).[`canVerify`](#canverify)

##### getEncoded()

> `abstract` **getEncoded**(): `Uint8Array`

Defined in: [src/domain/models/keyManagement/Key.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L18)

###### Returns

`Uint8Array`

###### Inherited from

[`Key`](#key).[`getEncoded`](#getencoded)

##### getProperty()

> **getProperty**(`name`: `string`): `undefined` \| `string`

Defined in: [src/domain/models/keyManagement/Key.ts:57](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`undefined` \| `string`

###### Inherited from

[`Key`](#key).[`getProperty`](#getproperty-2)

##### isCurve()

> **isCurve**\<`T`\>(`curve`: `string`): `this is T`

Defined in: [src/domain/models/keyManagement/Key.ts:61](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L61)

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `curve` | `string` |

###### Returns

`this is T`

###### Inherited from

[`Key`](#key).[`isCurve`](#iscurve)

##### isDerivable()

> **isDerivable**(): `this is DerivableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L37)

###### Returns

`this is DerivableKey`

###### Inherited from

[`Key`](#key).[`isDerivable`](#isderivable)

##### isExportable()

> **isExportable**(): `this is All`

Defined in: [src/domain/models/keyManagement/Key.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L41)

###### Returns

`this is All`

###### Inherited from

[`Key`](#key).[`isExportable`](#isexportable)

##### isSignable()

> **isSignable**(): `this is SignableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L45)

###### Returns

`this is SignableKey`

###### Inherited from

[`Key`](#key).[`isSignable`](#issignable)

##### isStorable()

> **isStorable**(): `this is StorableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L49)

###### Returns

`this is StorableKey`

###### Inherited from

[`Key`](#key).[`isStorable`](#isstorable-2)

##### publicKey()

> `abstract` **publicKey**(): [`PublicKey`](#publickey-3)

Defined in: [src/domain/models/keyManagement/PrivateKey.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/PrivateKey.ts#L7)

###### Returns

[`PublicKey`](#publickey-3)

***

### `abstract` PublicKey

Defined in: [src/domain/models/keyManagement/PublicKey.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/PublicKey.ts#L3)

#### Extends

- [`Key`](#key)

#### Constructors

##### Constructor

> **new PublicKey**(): [`PublicKey`](#publickey-3)

###### Returns

[`PublicKey`](#publickey-3)

###### Inherited from

[`Key`](#key).[`constructor`](#constructor-12)

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="keyspecification-2"></a> `keySpecification` | `abstract` | `Map`\<`string`, `string`\> | [`Key`](#key).[`keySpecification`](#keyspecification) | [src/domain/models/keyManagement/Key.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L13) |
| <a id="raw-2"></a> `raw` | `abstract` | `Uint8Array` | [`Key`](#key).[`raw`](#raw) | [src/domain/models/keyManagement/Key.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L15) |
| <a id="size-2"></a> `size` | `abstract` | `number` | [`Key`](#key).[`size`](#size) | [src/domain/models/keyManagement/Key.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L14) |
| <a id="to-3"></a> `to` | `abstract` | \{ `Buffer`: () => `Buffer`; `String`: (`encoding?`: `BufferEncoding`) => `string`; \} | [`Key`](#key).[`to`](#to) | [src/domain/models/keyManagement/Key.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L16) |
| `to.Buffer` | `public` | () => `Buffer` | - | [src/domain/models/keyManagement/exportable/ExportableKey.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L31) |
| `to.String` | `public` | (`encoding?`: `BufferEncoding`) => `string` | - | [src/domain/models/keyManagement/exportable/ExportableKey.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L32) |
| <a id="type-3"></a> `type` | `abstract` | [`KeyTypes`](#keytypes) | [`Key`](#key).[`type`](#type-1) | [src/domain/models/keyManagement/Key.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L12) |

#### Accessors

##### alg

###### Get Signature

> **get** **alg**(): [`JWT_ALG`](#jwt_alg)

Defined in: [src/domain/models/keyManagement/Key.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L25)

###### Returns

[`JWT_ALG`](#jwt_alg)

###### Inherited from

[`Key`](#key).[`alg`](#alg)

##### curve

###### Get Signature

> **get** **curve**(): `string`

Defined in: [src/domain/models/keyManagement/Key.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L20)

###### Returns

`string`

###### Inherited from

[`Key`](#key).[`curve`](#curve-2)

##### value

###### Get Signature

> **get** **value**(): `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/domain/models/keyManagement/PublicKey.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/PublicKey.ts#L4)

###### Returns

`Uint8Array`\<`ArrayBufferLike`\>

#### Methods

##### canVerify()

> **canVerify**(): `this is VerifiableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L53)

###### Returns

`this is VerifiableKey`

###### Inherited from

[`Key`](#key).[`canVerify`](#canverify)

##### getEncoded()

> `abstract` **getEncoded**(): `Uint8Array`

Defined in: [src/domain/models/keyManagement/Key.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L18)

###### Returns

`Uint8Array`

###### Inherited from

[`Key`](#key).[`getEncoded`](#getencoded)

##### getProperty()

> **getProperty**(`name`: `string`): `undefined` \| `string`

Defined in: [src/domain/models/keyManagement/Key.ts:57](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`undefined` \| `string`

###### Inherited from

[`Key`](#key).[`getProperty`](#getproperty-2)

##### isCurve()

> **isCurve**\<`T`\>(`curve`: `string`): `this is T`

Defined in: [src/domain/models/keyManagement/Key.ts:61](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L61)

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `curve` | `string` |

###### Returns

`this is T`

###### Inherited from

[`Key`](#key).[`isCurve`](#iscurve)

##### isDerivable()

> **isDerivable**(): `this is DerivableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L37)

###### Returns

`this is DerivableKey`

###### Inherited from

[`Key`](#key).[`isDerivable`](#isderivable)

##### isExportable()

> **isExportable**(): `this is All`

Defined in: [src/domain/models/keyManagement/Key.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L41)

###### Returns

`this is All`

###### Inherited from

[`Key`](#key).[`isExportable`](#isexportable)

##### isSignable()

> **isSignable**(): `this is SignableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L45)

###### Returns

`this is SignableKey`

###### Inherited from

[`Key`](#key).[`isSignable`](#issignable)

##### isStorable()

> **isStorable**(): `this is StorableKey`

Defined in: [src/domain/models/keyManagement/Key.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/Key.ts#L49)

###### Returns

`this is StorableKey`

###### Inherited from

[`Key`](#key).[`isStorable`](#isstorable-2)

***

### `abstract` SignableKey

Defined in: [src/domain/models/keyManagement/SignableKey.ts:1](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/SignableKey.ts#L1)

#### Constructors

##### Constructor

> **new SignableKey**(): [`SignableKey`](#signablekey)

###### Returns

[`SignableKey`](#signablekey)

#### Methods

##### sign()

> `abstract` **sign**(`message`: `Buffer`): `Buffer`

Defined in: [src/domain/models/keyManagement/SignableKey.ts:2](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/SignableKey.ts#L2)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `Buffer` |

###### Returns

`Buffer`

***

### `abstract` VerifiableKey

Defined in: [src/domain/models/keyManagement/VerifiableKey.ts:1](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/VerifiableKey.ts#L1)

#### Constructors

##### Constructor

> **new VerifiableKey**(): [`VerifiableKey`](#verifiablekey)

###### Returns

[`VerifiableKey`](#verifiablekey)

#### Methods

##### verify()

> `abstract` **verify**(`message`: `Buffer`, `signature`: `Buffer`): `boolean`

Defined in: [src/domain/models/keyManagement/VerifiableKey.ts:2](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/VerifiableKey.ts#L2)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `Buffer` |
| `signature` | `Buffer` |

###### Returns

`boolean`

## Interfaces

### Api

Defined in: [src/domain/models/Api.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L15)

Api Dependency

#### Methods

##### request()

> **request**\<`T`\>(`httpMethod`: [`HttpMethod`](#httpmethod), `url`: `string`, `urlParameters?`: `Map`\<`string`, `string`\>, `httpHeaders?`: `Map`\<`string`, `string`\>, `body?`: `string` \| `Record`\<`string`, `any`\>): `Promise`\<[`ApiResponse`](#apiresponse)\<`T`\>\>

Defined in: [src/domain/models/Api.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L27)

make a request
return an ApiResponse on any 2xx status
throw ApiError otherwise

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `httpMethod` | [`HttpMethod`](#httpmethod) |  |
| `url` | `string` |  |
| `urlParameters?` | `Map`\<`string`, `string`\> |  |
| `httpHeaders?` | `Map`\<`string`, `string`\> |  |
| `body?` | `string` \| `Record`\<`string`, `any`\> |  |

###### Returns

`Promise`\<[`ApiResponse`](#apiresponse)\<`T`\>\>

***

### Apollo

Defined in: [src/domain/buildingBlocks/Apollo.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Apollo.ts#L6)

#### Methods

##### createPrivateKey()

> **createPrivateKey**(`parameters`: \{[`name`: `string`]: `any`; \}): [`PrivateKey`](#privatekey-2)

Defined in: [src/domain/buildingBlocks/Apollo.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Apollo.ts#L10)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `parameters` | \{[`name`: `string`]: `any`; \} |

###### Returns

[`PrivateKey`](#privatekey-2)

##### createPublicKey()

> **createPublicKey**(`parameters`: \{[`name`: `string`]: `any`; \}): [`PublicKey`](#publickey-3)

Defined in: [src/domain/buildingBlocks/Apollo.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Apollo.ts#L13)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `parameters` | \{[`name`: `string`]: `any`; \} |

###### Returns

[`PublicKey`](#publickey-3)

##### createRandomMnemonics()

> **createRandomMnemonics**(): [`MnemonicWordList`](#mnemonicwordlist)

Defined in: [src/domain/buildingBlocks/Apollo.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Apollo.ts#L7)

###### Returns

[`MnemonicWordList`](#mnemonicwordlist)

##### createRandomSeed()

> **createRandomSeed**(`passphrase?`: `string`): [`SeedWords`](#seedwords)

Defined in: [src/domain/buildingBlocks/Apollo.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Apollo.ts#L9)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `passphrase?` | `string` |

###### Returns

[`SeedWords`](#seedwords)

##### createSeed()

> **createSeed**(`mnemonics`: [`MnemonicWordList`](#mnemonicwordlist), `passphrase`: `string`): [`Seed`](#seed-1)

Defined in: [src/domain/buildingBlocks/Apollo.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Apollo.ts#L8)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `mnemonics` | [`MnemonicWordList`](#mnemonicwordlist) |
| `passphrase` | `string` |

###### Returns

[`Seed`](#seed-1)

***

### AttachmentBase64

Defined in: [src/domain/models/MessageAttachment.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L19)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="base64"></a> `base64` | `string` | [src/domain/models/MessageAttachment.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L20) |

***

### AttachmentHeader

Defined in: [src/domain/models/MessageAttachment.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L4)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="children"></a> `children` | `string` | [src/domain/models/MessageAttachment.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L5) |

***

### AttachmentJws

Defined in: [src/domain/models/MessageAttachment.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L8)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="header"></a> `header` | [`AttachmentHeader`](#attachmentheader) | [src/domain/models/MessageAttachment.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L9) |
| <a id="protectedstr"></a> `protectedStr` | `string` | [src/domain/models/MessageAttachment.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L10) |
| <a id="signature"></a> `signature` | `string` | [src/domain/models/MessageAttachment.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L11) |

***

### AttachmentJwsData

Defined in: [src/domain/models/MessageAttachment.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L14)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="base64-1"></a> `base64` | `string` | [src/domain/models/MessageAttachment.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L15) |
| <a id="jws"></a> `jws` | [`AttachmentJws`](#attachmentjws) | [src/domain/models/MessageAttachment.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L16) |

***

### AttachmentLinkData

Defined in: [src/domain/models/MessageAttachment.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L23)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="hash"></a> `hash` | `string` | [src/domain/models/MessageAttachment.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L25) |
| <a id="links"></a> `links` | `string`[] | [src/domain/models/MessageAttachment.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L24) |

***

### Castor

Defined in: [src/domain/buildingBlocks/Castor.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Castor.ts#L4)

#### Methods

##### createPeerDID()

> **createPeerDID**(`publicKeys`: [`PublicKey`](#publickey-3)[], `services`: [`Service`](namespaces/DIDDocument/README.md#service)[]): `Promise`\<[`DID`](#did)\>

Defined in: [src/domain/buildingBlocks/Castor.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Castor.ts#L11)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `publicKeys` | [`PublicKey`](#publickey-3)[] |
| `services` | [`Service`](namespaces/DIDDocument/README.md#service)[] |

###### Returns

`Promise`\<[`DID`](#did)\>

##### createPrismDID()

> **createPrismDID**(`masterPublicKey`: [`PublicKey`](#publickey-3), `services?`: [`Service`](namespaces/DIDDocument/README.md#service)[], `authenticationKeys?`: ([`PublicKey`](#publickey-3) \| [`KeyPair`](#keypair))[]): `Promise`\<[`DID`](#did)\>

Defined in: [src/domain/buildingBlocks/Castor.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Castor.ts#L6)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `masterPublicKey` | [`PublicKey`](#publickey-3) |
| `services?` | [`Service`](namespaces/DIDDocument/README.md#service)[] |
| `authenticationKeys?` | ([`PublicKey`](#publickey-3) \| [`KeyPair`](#keypair))[] |

###### Returns

`Promise`\<[`DID`](#did)\>

##### getEcnumbasis()

> **getEcnumbasis**(`did`: [`DID`](#did), `publicKey`: [`PublicKey`](#publickey-3)): `string`

Defined in: [src/domain/buildingBlocks/Castor.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Castor.ts#L21)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](#did) |
| `publicKey` | [`PublicKey`](#publickey-3) |

###### Returns

`string`

##### parseDID()

> **parseDID**(`did`: `string`): [`DID`](#did)

Defined in: [src/domain/buildingBlocks/Castor.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Castor.ts#L5)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | `string` |

###### Returns

[`DID`](#did)

##### resolveDID()

> **resolveDID**(`did`: `string` \| [`DID`](#did)): `Promise`\<[`DIDDocument`](#diddocument)\>

Defined in: [src/domain/buildingBlocks/Castor.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Castor.ts#L15)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | `string` \| [`DID`](#did) |

###### Returns

`Promise`\<[`DIDDocument`](#diddocument)\>

##### verifySignature()

> **verifySignature**(`did`: [`DID`](#did), `challenge`: `Uint8Array`, `signature`: `Uint8Array`): `Promise`\<`boolean`\>

Defined in: [src/domain/buildingBlocks/Castor.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Castor.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](#did) |
| `challenge` | `Uint8Array` |
| `signature` | `Uint8Array` |

###### Returns

`Promise`\<`boolean`\>

***

### KeyCurve

Defined in: [src/domain/models/keyManagement/KeyCurve.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/KeyCurve.ts#L3)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="curve-6"></a> `curve` | [`Curve`](#curve) | [src/domain/models/keyManagement/KeyCurve.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/KeyCurve.ts#L4) |
| <a id="index-2"></a> `index?` | `number` | [src/domain/models/keyManagement/KeyCurve.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/KeyCurve.ts#L5) |

***

### KeyRestoration

Defined in: [src/domain/protocols/KeyRestoration.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/KeyRestoration.ts#L6)

KeyRestoration protocol defines methods for verifying and restoring cryptographic keys from raw data.

#### Methods

##### restorePrivateKey()

> **restorePrivateKey**(`key`: [`StorableKey`](#storablekey)): [`PrivateKey`](#privatekey-2)

Defined in: [src/domain/protocols/KeyRestoration.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/KeyRestoration.ts#L14)

Restores a PrivateKey from the given StorableKey

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | [`StorableKey`](#storablekey) |  |

###### Returns

[`PrivateKey`](#privatekey-2)

PrivateKey instance

###### Throws

if the restoration process fails

##### restorePublicKey()

> **restorePublicKey**(`key`: [`StorableKey`](#storablekey)): [`PublicKey`](#publickey-3)

Defined in: [src/domain/protocols/KeyRestoration.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/KeyRestoration.ts#L23)

Restores a PublicKey from the given StorableKey

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | [`StorableKey`](#storablekey) |  |

###### Returns

[`PublicKey`](#publickey-3)

PublicKey instance

###### Throws

if the restoration process fails, this method throws an error

***

### Mediator

Defined in: [src/domain/models/Mediator.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Mediator.ts#L3)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="hostdid"></a> `hostDID` | [`DID`](#did) | [src/domain/models/Mediator.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Mediator.ts#L4) |
| <a id="mediatordid"></a> `mediatorDID` | [`DID`](#did) | [src/domain/models/Mediator.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Mediator.ts#L6) |
| <a id="routingdid"></a> `routingDID` | [`DID`](#did) | [src/domain/models/Mediator.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Mediator.ts#L5) |

***

### Mercury

Defined in: [src/domain/buildingBlocks/Mercury.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Mercury.ts#L3)

#### Methods

##### packMessage()

> **packMessage**(`message`: [`Message`](#message)): `Promise`\<`string`\>

Defined in: [src/domain/buildingBlocks/Mercury.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Mercury.ts#L4)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](#message) |

###### Returns

`Promise`\<`string`\>

##### sendMessage()

> **sendMessage**(`message`: [`Message`](#message)): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [src/domain/buildingBlocks/Mercury.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Mercury.ts#L6)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](#message) |

###### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

##### sendMessageParseMessage()

> **sendMessageParseMessage**(`message`: [`Message`](#message)): `Promise`\<`undefined` \| [`Message`](#message)\>

Defined in: [src/domain/buildingBlocks/Mercury.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Mercury.ts#L7)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](#message) |

###### Returns

`Promise`\<`undefined` \| [`Message`](#message)\>

##### unpackMessage()

> **unpackMessage**(`message`: `string`): `Promise`\<[`Message`](#message)\>

Defined in: [src/domain/buildingBlocks/Mercury.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Mercury.ts#L5)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

###### Returns

`Promise`\<[`Message`](#message)\>

***

### Options

Defined in: [src/domain/models/keyManagement/exportable/ExportableKey.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L19)

Factory options to customise export / import functions

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="pemlabel"></a> `pemLabel` | `string` | [src/domain/models/keyManagement/exportable/ExportableKey.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L20) |

***

### Pluto

Defined in: [src/domain/buildingBlocks/Pluto.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L13)

Pluto is a storage interface describing storage requirements of the edge agents
which will be implemented using this SDK. Implement this interface using your
preferred underlying storage technology, most appropriate for your use case.

#### Extends

- [`IController`](namespaces/Startable.md#icontroller)

#### Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="state"></a> `state` | [`State`](namespaces/Startable.md#state) | current status of the entity | [`IController`](namespaces/Startable.md#icontroller).[`state`](namespaces/Startable.md#icontroller#state-2) | [src/domain/protocols/Startable.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/Startable.ts#L22) |

#### Methods

##### backup()

> **backup**(`version?`: `"0.0.1"`): `Promise`\<\{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:40](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L40)

create a Backup object from the stored data

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `version?` | `"0.0.1"` |

###### Returns

`Promise`\<\{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}\>

##### deleteMessage()

> **deleteMessage**(`uuid`: `string`): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:175](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L175)

Delete a previously stored messages

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `uuid` | `string` |

###### Returns

`Promise`\<`void`\>

##### getAllCredentials()

> **getAllCredentials**(): `Promise`\<[`Credential`](#credential)[]\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:155](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L155)

Retrieve all the stored credentials

###### Returns

`Promise`\<[`Credential`](#credential)[]\>

##### getAllDidPairs()

> **getAllDidPairs**(): `Promise`\<[`DIDPair`](#didpair)[]\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:125](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L125)

Retrieve all stored DID pairs (DIDComm connections).

###### Returns

`Promise`\<[`DIDPair`](#didpair)[]\>

##### getAllMediators()

> **getAllMediators**(): `Promise`\<[`Mediator`](#mediator)[]\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:150](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L150)

Retrieve all stored mediators.

###### Returns

`Promise`\<[`Mediator`](#mediator)[]\>

##### getAllMessages()

> **getAllMessages**(): `Promise`\<[`Message`](#message)[]\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:140](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L140)

Retrieve all stored DIDComm messages.

###### Returns

`Promise`\<[`Message`](#message)[]\>

##### getAllPeerDIDs()

> **getAllPeerDIDs**(): `Promise`\<[`PeerDID`](../../README.md#peerdid)[]\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:115](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L115)

Retrieve all stored Peer DIDs.

###### Returns

`Promise`\<[`PeerDID`](../../README.md#peerdid)[]\>

##### getAllPrismDIDs()

> **getAllPrismDIDs**(): `Promise`\<[`PrismDID`](#prismdid)[]\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:110](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L110)

Retrieve all stored PRISM DIDs.

###### Returns

`Promise`\<[`PrismDID`](#prismdid)[]\>

##### getCredentialMetadata()

> **getCredentialMetadata**(`name`: `string`): `Promise`\<`null` \| [`CredentialMetadata`](#credentialmetadata)\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:57](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L57)

Fetch the Credential Metadata by its name

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` |  |

###### Returns

`Promise`\<`null` \| [`CredentialMetadata`](#credentialmetadata)\>

##### getDIDPrivateKeysByDID()

> **getDIDPrivateKeysByDID**(`did`: [`DID`](#did)): `Promise`\<[`PrivateKey`](#privatekey-2)[]\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:120](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L120)

Retrieve available private keys for a given DID.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](#did) |

###### Returns

`Promise`\<[`PrivateKey`](#privatekey-2)[]\>

##### getLinkSecret()

> **getLinkSecret**(`name?`: `string`): `Promise`\<`null` \| [`LinkSecret`](#linksecret)\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:160](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L160)

Retrieve the stored link secret by its name

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name?` | `string` |

###### Returns

`Promise`\<`null` \| [`LinkSecret`](#linksecret)\>

##### getMessage()

> **getMessage**(`id`: `string`): `Promise`\<`null` \| [`Message`](#message)\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:145](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L145)

Retrieve a DIDComm message by ID.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

###### Returns

`Promise`\<`null` \| [`Message`](#message)\>

##### getPairByDID()

> **getPairByDID**(`did`: [`DID`](#did)): `Promise`\<`null` \| [`DIDPair`](#didpair)\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:130](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L130)

Retrieve a DID pair containing a given DID as either host or receiver.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](#did) |

###### Returns

`Promise`\<`null` \| [`DIDPair`](#didpair)\>

##### getPairByName()

> **getPairByName**(`name`: `string`): `Promise`\<`null` \| [`DIDPair`](#didpair)\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:135](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L135)

Retrieve a DID pair by a given pair name.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

###### Returns

`Promise`\<`null` \| [`DIDPair`](#didpair)\>

##### restore()

> **restore**(`backup`: \{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L46)

load the given data into the store

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `backup` | \{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \} |  |
| `backup.credentials` | \{ `data`: `string`; `recovery_id`: `string`; \}[] | - |
| `backup.did_pairs` | \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[] | - |
| `backup.dids` | \{ `alias?`: `string`; `did`: `string`; \}[] | - |
| `backup.keys` | \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[] | - |
| `backup.link_secret?` | `string` | - |
| `backup.mediators` | \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[] | - |
| `backup.messages` | `string`[] | - |
| `backup.version?` | `"0.0.1"` | - |

###### Returns

`Promise`\<`void`\>

##### revokeCredential()

> **revokeCredential**(`credential`: [`Credential`](#credential)): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:170](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L170)

Revoke a Credential

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `credential` | [`Credential`](#credential) |

###### Returns

`Promise`\<`void`\>

##### start()

> **start**(): `Promise`\<[`State`](namespaces/Startable.md#state)\>

Defined in: [src/domain/protocols/Startable.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/Startable.ts#L30)

handle the startup of an entity

updates `state` according to lifecycle

###### Returns

`Promise`\<[`State`](namespaces/Startable.md#state)\>

###### Inherited from

[`IController`](namespaces/Startable.md#icontroller).[`start`](namespaces/Startable.md#icontroller#start-2)

##### stop()

> **stop**(): `Promise`\<[`State`](namespaces/Startable.md#state)\>

Defined in: [src/domain/protocols/Startable.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/protocols/Startable.ts#L38)

handle the teardown of an entity

updates `state` according to lifecycle

###### Returns

`Promise`\<[`State`](namespaces/Startable.md#state)\>

###### Inherited from

[`IController`](namespaces/Startable.md#icontroller).[`stop`](namespaces/Startable.md#icontroller#stop-2)

##### storeCredential()

> **storeCredential**(`credential`: [`Credential`](#credential)): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:105](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L105)

Store a Credential into the Database

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `credential` | [`Credential`](#credential) |

###### Returns

`Promise`\<`void`\>

##### storeCredentialMetadata()

> **storeCredentialMetadata**(`metadata`: [`CredentialMetadata`](#credentialmetadata)): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:51](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L51)

Store the Credential Metadata

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `metadata` | [`CredentialMetadata`](#credentialmetadata) |

###### Returns

`Promise`\<`void`\>

##### storeDID()

> **storeDID**(`did`: [`DID`](#did), `keys?`: [`Arrayable`](../Utils/README.md#arrayable)\<[`PrivateKey`](#privatekey-2)\>, `alias?`: `string`): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:63](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L63)

Store a DID
with optional private key(s) and alias

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](#did) |
| `keys?` | [`Arrayable`](../Utils/README.md#arrayable)\<[`PrivateKey`](#privatekey-2)\> |
| `alias?` | `string` |

###### Returns

`Promise`\<`void`\>

##### storeDIDPair()

> **storeDIDPair**(`host`: [`DID`](#did), `receiver`: [`DID`](#did), `name`: `string`): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:80](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L80)

Store a named pair of DIDs representing a DIDComm connection.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `host` | [`DID`](#did) |
| `receiver` | [`DID`](#did) |
| `name` | `string` |

###### Returns

`Promise`\<`void`\>

##### storeLinkSecret()

> **storeLinkSecret**(`linkSecret`: [`LinkSecret`](#linksecret)): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:165](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L165)

Store a new linkSecret

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `linkSecret` | [`LinkSecret`](#linksecret) |

###### Returns

`Promise`\<`void`\>

##### storeMediator()

> **storeMediator**(`mediator`: [`Mediator`](#mediator)): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:100](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L100)

Store a mediator information.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `mediator` | [`Mediator`](#mediator) |

###### Returns

`Promise`\<`void`\>

##### storeMessage()

> **storeMessage**(`message`: [`Message`](#message)): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:85](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L85)

Store a DIDComm message.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](#message) |

###### Returns

`Promise`\<`void`\>

##### storeMessages()

> **storeMessages**(`messages`: [`Message`](#message)[]): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:90](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L90)

Store an array of DIDComm messages

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `messages` | [`Message`](#message)[] |

###### Returns

`Promise`\<`void`\>

##### ~~storePeerDID()~~

> **storePeerDID**(`did`: [`DID`](#did), `privateKeys`: [`PrivateKey`](#privatekey-2)[]): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:75](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L75)

Store a Peer DID and an array of its privateKeys.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](#did) |
| `privateKeys` | [`PrivateKey`](#privatekey-2)[] |

###### Returns

`Promise`\<`void`\>

###### Deprecated

use storeDID instead

##### ~~storePrismDID()~~

> **storePrismDID**(`did`: [`DID`](#did), `privateKey`: [`PrivateKey`](#privatekey-2), `alias?`: `string`): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:69](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L69)

Store a PRISM DID and its private key with given metadata.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](#did) |
| `privateKey` | [`PrivateKey`](#privatekey-2) |
| `alias?` | `string` |

###### Returns

`Promise`\<`void`\>

###### Deprecated

use storeDID instead

##### storePrivateKey()

> **storePrivateKey**(`privateKey`: [`PrivateKey`](#privatekey-2)): `Promise`\<`void`\>

Defined in: [src/domain/buildingBlocks/Pluto.ts:95](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/buildingBlocks/Pluto.ts#L95)

Store a list of private keys with its metadata and a reference to the DID it belongs to.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `privateKey` | [`PrivateKey`](#privatekey-2) |

###### Returns

`Promise`\<`void`\>

***

### ProvableCredential

Defined in: [src/domain/models/Credential.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L35)

#### Methods

##### presentation()

> **presentation**(): `unknown`

Defined in: [src/domain/models/Credential.ts:36](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L36)

###### Returns

`unknown`

##### verifiableCredential()

> **verifiableCredential**(): `unknown`

Defined in: [src/domain/models/Credential.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L37)

###### Returns

`unknown`

***

### Seed

Defined in: [src/domain/models/Seed.ts:1](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Seed.ts#L1)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="value-2"></a> `value` | `Uint8Array` | [src/domain/models/Seed.ts:2](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Seed.ts#L2) |

***

### SeedWords

Defined in: [src/domain/models/SeedWords.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/SeedWords.ts#L4)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="mnemonics"></a> `mnemonics` | [`MnemonicWordList`](#mnemonicwordlist) | [src/domain/models/SeedWords.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/SeedWords.ts#L5) |
| <a id="seed-2"></a> `seed` | [`Seed`](#seed-1) | [src/domain/models/SeedWords.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/SeedWords.ts#L6) |

***

### Signature

Defined in: [src/domain/models/Signature.ts:1](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Signature.ts#L1)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="value-3"></a> `value` | `Uint8Array` | [src/domain/models/Signature.ts:2](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Signature.ts#L2) |

***

### StorableCredential

Defined in: [src/domain/models/Credential.ts:40](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L40)

#### Methods

##### toStorable()

> **toStorable**(): \{ `availableClaims?`: `string`[]; `credentialCreated?`: `string`; `credentialData`: `string`; `credentialSchema?`: `string`; `credentialUpdated?`: `string`; `id`: `string`; `issuer?`: `string`; `recoveryId`: `string`; `revoked?`: `boolean`; `subject?`: `string`; `validUntil?`: `number`; \}

Defined in: [src/domain/models/Credential.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L41)

###### Returns

\{ `availableClaims?`: `string`[]; `credentialCreated?`: `string`; `credentialData`: `string`; `credentialSchema?`: `string`; `credentialUpdated?`: `string`; `id`: `string`; `issuer?`: `string`; `recoveryId`: `string`; `revoked?`: `boolean`; `subject?`: `string`; `validUntil?`: `number`; \}

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `availableClaims?` | `string`[] | [src/domain/models/Credential.ts:52](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L52) |
| `credentialCreated?` | `string` | [src/domain/models/Credential.ts:47](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L47) |
| `credentialData` | `string` | [src/domain/models/Credential.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L44) |
| `credentialSchema?` | `string` | [src/domain/models/Credential.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L49) |
| `credentialUpdated?` | `string` | [src/domain/models/Credential.ts:48](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L48) |
| `id` | `string` | [src/domain/models/Credential.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L42) |
| `issuer?` | `string` | [src/domain/models/Credential.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L45) |
| `recoveryId` | `string` | [src/domain/models/Credential.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L43) |
| `revoked?` | `boolean` | [src/domain/models/Credential.ts:51](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L51) |
| `subject?` | `string` | [src/domain/models/Credential.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L46) |
| `validUntil?` | `number` | [src/domain/models/Credential.ts:50](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L50) |

***

### StorableKey

Defined in: [src/domain/models/keyManagement/StorableKey.ts:2](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/StorableKey.ts#L2)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="index-3"></a> `index?` | `number` | [src/domain/models/keyManagement/StorableKey.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/StorableKey.ts#L5) |
| <a id="raw-3"></a> `raw` | `Uint8Array` | [src/domain/models/keyManagement/StorableKey.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/StorableKey.ts#L4) |
| <a id="recoveryid-1"></a> `recoveryId` | `string` | [src/domain/models/keyManagement/StorableKey.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/StorableKey.ts#L3) |

## Type Aliases

### AttachmentData

> **AttachmentData** = [`AttachmentJsonData`](#attachmentjsondata) \| [`AttachmentLinkData`](#attachmentlinkdata) \| [`AttachmentBase64`](#attachmentbase64) \| [`AttachmentJwsData`](#attachmentjwsdata) \| [`AttachmentJws`](#attachmentjws) \| [`AttachmentHeader`](#attachmentheader)

Defined in: [src/domain/models/MessageAttachment.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L32)

***

### AttachmentJsonData

> **AttachmentJsonData** = \{ `json`: `any`; \}

Defined in: [src/domain/models/MessageAttachment.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L28)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="json"></a> `json` | `any` | [src/domain/models/MessageAttachment.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/MessageAttachment.ts#L29) |

***

### Claim

> **Claim** = `Record`\<`string`, `any`\>

Defined in: [src/domain/models/Credential.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Credential.ts#L4)

***

### ExportableKey

> **ExportableKey** = [`All`](namespaces/ExportableKey.md#all)

Defined in: [src/domain/models/keyManagement/exportable/ExportableKey.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/ExportableKey.ts#L14)

ExportableKey defines the formats a crypographic key can be converted to
Default is all

***

### HttpMethod

> **HttpMethod** = `"DELETE"` \| `"GET"` \| `"POST"` \| `"PUT"`

Defined in: [src/domain/models/Api.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/Api.ts#L3)

***

### JsonString

> **JsonString** = `string`

Defined in: [src/domain/models/index.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/index.ts#L24)

***

### JWK

> **JWK** = [`EC`](namespaces/JWK-1.md#ec) \| [`OCT`](namespaces/JWK-1.md#oct) \| [`OKP`](namespaces/JWK-1.md#okp) \| [`RSA`](namespaces/JWK-1.md#rsa)

Defined in: [src/domain/models/keyManagement/exportable/JWK.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L11)

JWK

***

### MnemonicWordList

> **MnemonicWordList** = \[`string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`\] \| \[`string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`, `string`\]

Defined in: [src/domain/models/WordList.ts:1](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/WordList.ts#L1)

***

### PresentationClaims\<T\>

> **PresentationClaims**\<`T`\> = `T` *extends* [`JWT`](#jwt) ? [`JWTPresentationClaims`](../../../plugins/internal/oea/namespaces/OEA.md#jwtpresentationclaims) : `T` *extends* [`SDJWT`](#sdjwt) ? [`SDJWTPresentationClaims`](../../../plugins/internal/oea/namespaces/OEA.md#sdjwtpresentationclaims) : `T` *extends* [`AnonCreds`](#anoncreds) ? [`Claims`](../../../plugins/internal/anoncreds.md#claims) : `never`

Defined in: [src/domain/models/VerifiableCredential.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L5)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* [`CredentialType`](#credentialtype) | [`JWT`](#jwt) |

***

### Schema

> **Schema** = `TB.Static`\<*typeof* [`Schema`](#schema-2)\>

Defined in: [src/domain/backup/v0\_0\_1.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/backup/v0_0_1.ts#L39)

***

### W3CVerifiableCredential

> **W3CVerifiableCredential** = \{ `@context`: \[`"https://www.w3.org/2018/credentials/v1"`\]; `credentialSchema?`: \{ `id`: `string`; `type`: `string`; \}; `credentialStatus?`: `unknown`; `credentialSubject`: `Record`\<`string`, `any`\>; `evidence?`: \{ `id`: `string`; `type`: `string`; \}; `expirationDate?`: `string`; `issuanceDate`: `string`; `issued?`: `string`; `issuer`: `string`; `refreshService?`: \{ `id`: `string`; `type`: `string`; \}; `termsOfUse?`: \{ `id`: `string`; `type`: `string`; \}; `type`: \[`"VerifiableCredential"`\]; `validFrom?`: \{ `id`: `string`; `type`: `string`; \}; `validUntil?`: \{ `id`: `string`; `type`: `string`; \}; \}

Defined in: [src/domain/models/VerifiableCredential.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L26)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="context"></a> `@context` | \[`"https://www.w3.org/2018/credentials/v1"`\] | [src/domain/models/VerifiableCredential.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L27) |
| <a id="credentialschema"></a> `credentialSchema?` | \{ `id`: `string`; `type`: `string`; \} | [src/domain/models/VerifiableCredential.ts:54](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L54) |
| `credentialSchema.id` | `string` | [src/domain/models/VerifiableCredential.ts:55](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L55) |
| `credentialSchema.type` | `string` | [src/domain/models/VerifiableCredential.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L56) |
| <a id="credentialstatus"></a> `credentialStatus?` | `unknown` | [src/domain/models/VerifiableCredential.ts:58](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L58) |
| <a id="credentialsubject-1"></a> `credentialSubject` | `Record`\<`string`, `any`\> | [src/domain/models/VerifiableCredential.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L32) |
| <a id="evidence"></a> `evidence?` | \{ `id`: `string`; `type`: `string`; \} | [src/domain/models/VerifiableCredential.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L34) |
| `evidence.id` | `string` | [src/domain/models/VerifiableCredential.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L35) |
| `evidence.type` | `string` | [src/domain/models/VerifiableCredential.ts:36](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L36) |
| <a id="expirationdate"></a> `expirationDate?` | `string` | [src/domain/models/VerifiableCredential.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L33) |
| <a id="issuancedate"></a> `issuanceDate` | `string` | [src/domain/models/VerifiableCredential.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L30) |
| <a id="issued"></a> `issued?` | `string` | [src/domain/models/VerifiableCredential.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L31) |
| <a id="issuer-1"></a> `issuer` | `string` | [src/domain/models/VerifiableCredential.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L29) |
| <a id="refreshservice"></a> `refreshService?` | \{ `id`: `string`; `type`: `string`; \} | [src/domain/models/VerifiableCredential.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L38) |
| `refreshService.id` | `string` | [src/domain/models/VerifiableCredential.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L39) |
| `refreshService.type` | `string` | [src/domain/models/VerifiableCredential.ts:40](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L40) |
| <a id="termsofuse"></a> `termsOfUse?` | \{ `id`: `string`; `type`: `string`; \} | [src/domain/models/VerifiableCredential.ts:42](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L42) |
| `termsOfUse.id` | `string` | [src/domain/models/VerifiableCredential.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L43) |
| `termsOfUse.type` | `string` | [src/domain/models/VerifiableCredential.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L44) |
| <a id="type-4"></a> `type` | \[`"VerifiableCredential"`\] | [src/domain/models/VerifiableCredential.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L28) |
| <a id="validfrom"></a> `validFrom?` | \{ `id`: `string`; `type`: `string`; \} | [src/domain/models/VerifiableCredential.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L46) |
| `validFrom.id` | `string` | [src/domain/models/VerifiableCredential.ts:47](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L47) |
| `validFrom.type` | `string` | [src/domain/models/VerifiableCredential.ts:48](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L48) |
| <a id="validuntil"></a> `validUntil?` | \{ `id`: `string`; `type`: `string`; \} | [src/domain/models/VerifiableCredential.ts:50](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L50) |
| `validUntil.id` | `string` | [src/domain/models/VerifiableCredential.ts:51](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L51) |
| `validUntil.type` | `string` | [src/domain/models/VerifiableCredential.ts:52](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L52) |

***

### W3CVerifiablePresentation

> **W3CVerifiablePresentation** = \{ `@context`: \[`"https://www.w3.org/2018/presentations/v1"`\]; `proof?`: [`W3CVerifiablePresentationProof`](#w3cverifiablepresentationproof-1); `type`: \[`"VerifiablePresentation"`\]; `verifiableCredential`: `string`[]; \}

Defined in: [src/domain/models/VerifiableCredential.ts:62](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L62)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="context-1"></a> `@context` | \[`"https://www.w3.org/2018/presentations/v1"`\] | [src/domain/models/VerifiableCredential.ts:63](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L63) |
| <a id="proof"></a> `proof?` | [`W3CVerifiablePresentationProof`](#w3cverifiablepresentationproof-1) | [src/domain/models/VerifiableCredential.ts:70](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L70) |
| <a id="type-5"></a> `type` | \[`"VerifiablePresentation"`\] | [src/domain/models/VerifiableCredential.ts:66](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L66) |
| <a id="verifiablecredential-2"></a> `verifiableCredential` | `string`[] | [src/domain/models/VerifiableCredential.ts:69](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L69) |

***

### W3CVerifiablePresentationProof

> **W3CVerifiablePresentationProof** = \{ `challenge`: `string`; `domain`: `string`; \}

Defined in: [src/domain/models/VerifiableCredential.ts:73](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L73)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="challenge"></a> `challenge` | `string` | [src/domain/models/VerifiableCredential.ts:74](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L74) |
| <a id="domain"></a> `domain` | `string` | [src/domain/models/VerifiableCredential.ts:75](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/VerifiableCredential.ts#L75) |

## Variables

### credential

> `const` **credential**: `TObject`\<\{ `data`: `TString`; `recovery_id`: `TString`; \}\>

Defined in: [src/domain/backup/v0\_0\_1.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/backup/v0_0_1.ts#L6)

***

### did

> `const` **did**: `TObject`\<\{ `alias`: `TOptional`\<`TString`\>; `did`: `TString`; \}\>

Defined in: [src/domain/backup/v0\_0\_1.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/backup/v0_0_1.ts#L11)

***

### didpair

> `const` **didpair**: `TObject`\<\{ `alias`: `TString`; `holder`: `TString`; `recipient`: `TString`; \}\>

Defined in: [src/domain/backup/v0\_0\_1.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/backup/v0_0_1.ts#L16)

***

### key

> `const` **key**: `TObject`\<\{ `did`: `TOptional`\<`TString`\>; `index`: `TOptional`\<`TNumber`\>; `key`: `TString`; `recovery_id`: `TString`; \}\>

Defined in: [src/domain/backup/v0\_0\_1.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/backup/v0_0_1.ts#L22)

***

### linksecret

> `const` **linksecret**: `TOptional`\<`TString`\>

Defined in: [src/domain/backup/v0\_0\_1.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/backup/v0_0_1.ts#L37)

***

### mediator

> `const` **mediator**: `TObject`\<\{ `holder_did`: `TString`; `mediator_did`: `TString`; `routing_did`: `TString`; \}\>

Defined in: [src/domain/backup/v0\_0\_1.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/backup/v0_0_1.ts#L29)

***

### message

> `const` **message**: `TString`

Defined in: [src/domain/backup/v0\_0\_1.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/backup/v0_0_1.ts#L35)

***

### Schema

> `const` **Schema**: `TObject`\<\{ `credentials`: `TArray`\<`TObject`\<\{ `data`: `TString`; `recovery_id`: `TString`; \}\>\>; `did_pairs`: `TArray`\<`TObject`\<\{ `alias`: `TString`; `holder`: `TString`; `recipient`: `TString`; \}\>\>; `dids`: `TArray`\<`TObject`\<\{ `alias`: `TOptional`\<`TString`\>; `did`: `TString`; \}\>\>; `keys`: `TArray`\<`TObject`\<\{ `did`: `TOptional`\<`TString`\>; `index`: `TOptional`\<`TNumber`\>; `key`: `TString`; `recovery_id`: `TString`; \}\>\>; `link_secret`: `TOptional`\<`TString`\>; `mediators`: `TArray`\<`TObject`\<\{ `holder_did`: `TString`; `mediator_did`: `TString`; `routing_did`: `TString`; \}\>\>; `messages`: `TArray`\<`TString`\>; `version`: `TOptional`\<`TLiteral`\<`"0.0.1"`\>\>; \}\>

Defined in: [src/domain/backup/v0\_0\_1.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/backup/v0_0_1.ts#L39)
