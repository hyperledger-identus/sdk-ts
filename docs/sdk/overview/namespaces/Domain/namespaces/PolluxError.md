[**@hyperledger/identus-sdk**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / PolluxError

# PolluxError

## Classes

### CredentialRevocationTypeInvalid

Defined in: [src/domain/models/errors/Pollux.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L38)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new CredentialRevocationTypeInvalid**(`message?`: `string`): [`CredentialRevocationTypeInvalid`](#credentialrevocationtypeinvalid)

Defined in: [src/domain/models/errors/Pollux.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L39)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`CredentialRevocationTypeInvalid`](#credentialrevocationtypeinvalid)

###### Overrides

`Error.constructor`

***

### CredentialTypeNotSupported

Defined in: [src/domain/models/errors/Pollux.ts:62](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L62)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new CredentialTypeNotSupported**(`message?`: `string`): [`CredentialTypeNotSupported`](#credentialtypenotsupported)

Defined in: [src/domain/models/errors/Pollux.ts:63](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L63)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`CredentialTypeNotSupported`](#credentialtypenotsupported)

###### Overrides

`Error.constructor`

***

### InvalidCredentialError

Defined in: [src/domain/models/errors/Pollux.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L3)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidCredentialError**(`message?`: `string`): [`InvalidCredentialError`](#invalidcredentialerror)

Defined in: [src/domain/models/errors/Pollux.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L4)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidCredentialError`](#invalidcredentialerror)

###### Overrides

`Error.constructor`

***

### InvalidCredentialStatus

Defined in: [src/domain/models/errors/Pollux.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L44)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidCredentialStatus**(`message?`: `string`): [`InvalidCredentialStatus`](#invalidcredentialstatus)

Defined in: [src/domain/models/errors/Pollux.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidCredentialStatus`](#invalidcredentialstatus)

###### Overrides

`Error.constructor`

***

### InvalidDescriptorFormatError

Defined in: [src/domain/models/errors/Pollux.ts:98](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L98)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidDescriptorFormatError**(`message?`: `string`): [`InvalidDescriptorFormatError`](#invaliddescriptorformaterror)

Defined in: [src/domain/models/errors/Pollux.ts:99](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L99)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidDescriptorFormatError`](#invaliddescriptorformaterror)

###### Overrides

`Error.constructor`

***

### InvalidJWK

Defined in: [src/domain/models/errors/Pollux.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L30)

#### Extends

- [`SDKError`](CommonError.md#sdkerror)

#### Constructors

##### Constructor

> **new InvalidJWK**(`message`: `string`): [`InvalidJWK`](#invalidjwk)

Defined in: [src/domain/models/errors/Pollux.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L31)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

###### Returns

[`InvalidJWK`](#invalidjwk)

###### Overrides

[`SDKError`](CommonError.md#sdkerror).[`constructor`](CommonError.md#sdkerror#constructor-1)

***

### InvalidJWKParameters

Defined in: [src/domain/models/errors/Pollux.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L22)

#### Extends

- [`SDKError`](CommonError.md#sdkerror)

#### Constructors

##### Constructor

> **new InvalidJWKParameters**(`parameters`: `string` \| `string`[], `message?`: `string`): [`InvalidJWKParameters`](#invalidjwkparameters)

Defined in: [src/domain/models/errors/Pollux.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `parameters` | `string` \| `string`[] |
| `message?` | `string` |

###### Returns

[`InvalidJWKParameters`](#invalidjwkparameters)

###### Overrides

[`SDKError`](CommonError.md#sdkerror).[`constructor`](CommonError.md#sdkerror#constructor-1)

***

### InvalidJWTString

Defined in: [src/domain/models/errors/Pollux.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L9)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidJWTString**(`message?`: `string`): [`InvalidJWTString`](#invalidjwtstring)

Defined in: [src/domain/models/errors/Pollux.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L10)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidJWTString`](#invalidjwtstring)

###### Overrides

`Error.constructor`

***

### InvalidPresentationDefinitionError

Defined in: [src/domain/models/errors/Pollux.ts:68](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L68)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidPresentationDefinitionError**(`message?`: `string`): [`InvalidPresentationDefinitionError`](#invalidpresentationdefinitionerror)

Defined in: [src/domain/models/errors/Pollux.ts:69](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L69)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidPresentationDefinitionError`](#invalidpresentationdefinitionerror)

###### Overrides

`Error.constructor`

***

### InvalidPresentationError

Defined in: [src/domain/models/errors/Pollux.ts:92](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L92)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidPresentationError**(`message?`: `string`): [`InvalidPresentationError`](#invalidpresentationerror)

Defined in: [src/domain/models/errors/Pollux.ts:93](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L93)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidPresentationError`](#invalidpresentationerror)

###### Overrides

`Error.constructor`

***

### InvalidPresentationProofArgs

Defined in: [src/domain/models/errors/Pollux.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L15)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidPresentationProofArgs**(`message?`: `string`): [`InvalidPresentationProofArgs`](#invalidpresentationproofargs)

Defined in: [src/domain/models/errors/Pollux.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L16)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidPresentationProofArgs`](#invalidpresentationproofargs)

###### Overrides

`Error.constructor`

***

### InvalidRevocationStatusResponse

Defined in: [src/domain/models/errors/Pollux.ts:50](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L50)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidRevocationStatusResponse**(`message?`: `string`): [`InvalidRevocationStatusResponse`](#invalidrevocationstatusresponse)

Defined in: [src/domain/models/errors/Pollux.ts:51](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L51)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidRevocationStatusResponse`](#invalidrevocationstatusresponse)

###### Overrides

`Error.constructor`

***

### InvalidRevocationStatusResponseSignature

Defined in: [src/domain/models/errors/Pollux.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L56)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidRevocationStatusResponseSignature**(`message?`: `string`): [`InvalidRevocationStatusResponseSignature`](#invalidrevocationstatusresponsesignature)

Defined in: [src/domain/models/errors/Pollux.ts:57](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L57)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`InvalidRevocationStatusResponseSignature`](#invalidrevocationstatusresponsesignature)

###### Overrides

`Error.constructor`

***

### InvalidVerifyCredentialError

Defined in: [src/domain/models/errors/Pollux.ts:86](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L86)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidVerifyCredentialError**(`credentialId`: `string`, `reason`: `string`): [`InvalidVerifyCredentialError`](#invalidverifycredentialerror)

Defined in: [src/domain/models/errors/Pollux.ts:87](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L87)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `credentialId` | `string` |
| `reason` | `string` |

###### Returns

[`InvalidVerifyCredentialError`](#invalidverifycredentialerror)

###### Overrides

`Error.constructor`

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="reason"></a> `reason` | `public` | `string` | [src/domain/models/errors/Pollux.ts:87](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L87) |

***

### InvalidVerifyFormatError

Defined in: [src/domain/models/errors/Pollux.ts:80](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L80)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new InvalidVerifyFormatError**(`reason`: `string`): [`InvalidVerifyFormatError`](#invalidverifyformaterror)

Defined in: [src/domain/models/errors/Pollux.ts:81](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L81)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason` | `string` |

###### Returns

[`InvalidVerifyFormatError`](#invalidverifyformaterror)

###### Overrides

`Error.constructor`

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="reason-1"></a> `reason` | `public` | `string` | [src/domain/models/errors/Pollux.ts:81](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L81) |

***

### NoDomainOrChallengeFound

Defined in: [src/domain/models/errors/Pollux.ts:74](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L74)

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new NoDomainOrChallengeFound**(`message?`: `string`): [`NoDomainOrChallengeFound`](#nodomainorchallengefound)

Defined in: [src/domain/models/errors/Pollux.ts:75](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L75)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`NoDomainOrChallengeFound`](#nodomainorchallengefound)

###### Overrides

`Error.constructor`

***

### RevocationError

Defined in: [src/domain/models/errors/Pollux.ts:107](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Pollux.ts#L107)

general Revocation error, message should contain details

#### Extends

- `Error`

#### Constructors

##### Constructor

> **new RevocationError**(`message?`: `string`): [`RevocationError`](#revocationerror)

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1082

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`RevocationError`](#revocationerror)

###### Inherited from

`Error.constructor`

##### Constructor

> **new RevocationError**(`message?`: `string`, `options?`: `ErrorOptions`): [`RevocationError`](#revocationerror)

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1082

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |
| `options?` | `ErrorOptions` |

###### Returns

[`RevocationError`](#revocationerror)

###### Inherited from

`Error.constructor`
