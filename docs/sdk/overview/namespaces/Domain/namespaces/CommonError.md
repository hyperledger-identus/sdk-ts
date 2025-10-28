[**@hyperledger/identus-sdk**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / CommonError

# CommonError

## Classes

### ExpectError

Defined in: [src/domain/models/errors/Common.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Common.ts#L12)

#### Extends

- [`SDKError`](#sdkerror)

#### Constructors

##### Constructor

> **new ExpectError**(`msg?`: `string`): [`ExpectError`](#expecterror)

Defined in: [src/domain/models/errors/Common.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Common.ts#L13)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg?` | `string` |

###### Returns

[`ExpectError`](#expecterror)

###### Overrides

[`SDKError`](#sdkerror).[`constructor`](#constructor-1)

***

### SDKError

Defined in: [src/domain/models/errors/Common.ts:1](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Common.ts#L1)

#### Extends

- `Error`

#### Extended by

- [`MnemonicWordError`](ApolloError.md#mnemonicworderror)
- [`MnemonicLengthError`](ApolloError.md#mnemoniclengtherror)
- [`CouldNotParseMessageString`](ApolloError.md#couldnotparsemessagestring)
- [`KeyRestoratonFailed`](ApolloError.md#keyrestoratonfailed)
- [`InvalidKeyCurve`](ApolloError.md#invalidkeycurve)
- [`InvalidKeyType`](ApolloError.md#invalidkeytype)
- [`MissingKeyParameters`](ApolloError.md#missingkeyparameters)
- [`KeyInitializationError`](ApolloError.md#keyinitializationerror)
- [`InvalidDerivationPath`](ApolloError.md#invalidderivationpath)
- [`ApolloLibError`](ApolloError.md#apolloliberror)
- [`UnknownError`](#unknownerror)
- [`ExpectError`](#expecterror)
- [`ValidationError`](#validationerror)
- [`InvalidJWKParameters`](PolluxError.md#invalidjwkparameters)
- [`InvalidJWK`](PolluxError.md#invalidjwk)

#### Constructors

##### Constructor

> **new SDKError**(`code`: `number`, `message`: `string`): [`SDKError`](#sdkerror)

Defined in: [src/domain/models/errors/Common.ts:2](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Common.ts#L2)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | `number` |
| `message` | `string` |

###### Returns

[`SDKError`](#sdkerror)

###### Overrides

`Error.constructor`

***

### UnknownError

Defined in: [src/domain/models/errors/Common.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Common.ts#L8)

#### Extends

- [`SDKError`](#sdkerror)

#### Constructors

##### Constructor

> **new UnknownError**(): [`UnknownError`](#unknownerror)

Defined in: [src/domain/models/errors/Common.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Common.ts#L9)

###### Returns

[`UnknownError`](#unknownerror)

###### Overrides

[`SDKError`](#sdkerror).[`constructor`](#constructor-1)

***

### ValidationError

Defined in: [src/domain/models/errors/Common.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Common.ts#L16)

#### Extends

- [`SDKError`](#sdkerror)

#### Constructors

##### Constructor

> **new ValidationError**(`errors?`: `string`[]): [`ValidationError`](#validationerror)

Defined in: [src/domain/models/errors/Common.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Common.ts#L17)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `errors?` | `string`[] |

###### Returns

[`ValidationError`](#validationerror)

###### Overrides

[`SDKError`](#sdkerror).[`constructor`](#constructor-1)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="errors"></a> `errors?` | `readonly` | `string`[] | [src/domain/models/errors/Common.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Common.ts#L17) |
