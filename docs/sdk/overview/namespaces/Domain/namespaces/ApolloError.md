[**@hyperledger/identus-sdk**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / ApolloError

# ApolloError

## Classes

### ApolloLibError

Defined in: [src/domain/models/errors/Apollo.ts:100](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L100)

thrown when Apollo library returns unexpected result

#### Extends

- [`SDKError`](CommonError.md#sdkerror)

#### Constructors

##### Constructor

> **new ApolloLibError**(`message`: `string`): [`ApolloLibError`](#apolloliberror)

Defined in: [src/domain/models/errors/Apollo.ts:101](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L101)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

###### Returns

[`ApolloLibError`](#apolloliberror)

###### Overrides

[`SDKError`](CommonError.md#sdkerror).[`constructor`](CommonError.md#sdkerror#constructor-1)

***

### CouldNotParseMessageString

Defined in: [src/domain/models/errors/Apollo.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L24)

// ??

#### Extends

- [`SDKError`](CommonError.md#sdkerror)

#### Constructors

##### Constructor

> **new CouldNotParseMessageString**(): [`CouldNotParseMessageString`](#couldnotparsemessagestring)

Defined in: [src/domain/models/errors/Apollo.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L25)

###### Returns

[`CouldNotParseMessageString`](#couldnotparsemessagestring)

###### Overrides

[`SDKError`](CommonError.md#sdkerror).[`constructor`](CommonError.md#sdkerror#constructor-1)

***

### InvalidDerivationPath

Defined in: [src/domain/models/errors/Apollo.ts:91](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L91)

thrown when failing to create a DerivationPath

#### Extends

- [`SDKError`](CommonError.md#sdkerror)

#### Constructors

##### Constructor

> **new InvalidDerivationPath**(`message`: `string`): [`InvalidDerivationPath`](#invalidderivationpath)

Defined in: [src/domain/models/errors/Apollo.ts:92](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L92)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

###### Returns

[`InvalidDerivationPath`](#invalidderivationpath)

###### Overrides

[`SDKError`](CommonError.md#sdkerror).[`constructor`](CommonError.md#sdkerror#constructor-1)

***

### InvalidKeyCurve

Defined in: [src/domain/models/errors/Apollo.ts:55](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L55)

thrown when given Key Curve is not supported

#### Extends

- [`SDKError`](CommonError.md#sdkerror)

#### Constructors

##### Constructor

> **new InvalidKeyCurve**(`keyCurve?`: `string`, `options?`: [`Curve`](../README.md#curve)[]): [`InvalidKeyCurve`](#invalidkeycurve)

Defined in: [src/domain/models/errors/Apollo.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L56)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `keyCurve?` | `string` |
| `options?` | [`Curve`](../README.md#curve)[] |

###### Returns

[`InvalidKeyCurve`](#invalidkeycurve)

###### Overrides

[`SDKError`](CommonError.md#sdkerror).[`constructor`](CommonError.md#sdkerror#constructor-1)

***

### InvalidKeyType

Defined in: [src/domain/models/errors/Apollo.ts:65](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L65)

thrown when give Key Type is not supported

#### Extends

- [`SDKError`](CommonError.md#sdkerror)

#### Constructors

##### Constructor

> **new InvalidKeyType**(`keyType?`: `string`, `options?`: [`KeyTypes`](../README.md#keytypes)[]): [`InvalidKeyType`](#invalidkeytype)

Defined in: [src/domain/models/errors/Apollo.ts:66](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L66)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `keyType?` | `string` |
| `options?` | [`KeyTypes`](../README.md#keytypes)[] |

###### Returns

[`InvalidKeyType`](#invalidkeytype)

###### Overrides

[`SDKError`](CommonError.md#sdkerror).[`constructor`](CommonError.md#sdkerror#constructor-1)

***

### KeyInitializationError

Defined in: [src/domain/models/errors/Apollo.ts:84](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L84)

thrown when failing to create a key

#### Extends

- [`SDKError`](CommonError.md#sdkerror)

#### Constructors

##### Constructor

> **new KeyInitializationError**(`message`: `string`): [`KeyInitializationError`](#keyinitializationerror)

Defined in: [src/domain/models/errors/Apollo.ts:85](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L85)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

###### Returns

[`KeyInitializationError`](#keyinitializationerror)

###### Overrides

[`SDKError`](CommonError.md#sdkerror).[`constructor`](CommonError.md#sdkerror#constructor-1)

***

### KeyRestoratonFailed

Defined in: [src/domain/models/errors/Apollo.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L46)

thrown when Key recovery fails during restoration attempt

#### Extends

- [`SDKError`](CommonError.md#sdkerror)

#### Constructors

##### Constructor

> **new KeyRestoratonFailed**(`key?`: [`StorableKey`](../README.md#storablekey)): [`KeyRestoratonFailed`](#keyrestoratonfailed)

Defined in: [src/domain/models/errors/Apollo.ts:47](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L47)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `key?` | [`StorableKey`](../README.md#storablekey) |

###### Returns

[`KeyRestoratonFailed`](#keyrestoratonfailed)

###### Overrides

[`SDKError`](CommonError.md#sdkerror).[`constructor`](CommonError.md#sdkerror#constructor-1)

***

### MissingKeyParameters

Defined in: [src/domain/models/errors/Apollo.ts:75](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L75)

thrown when expected parameter is missing for Key operation

#### Extends

- [`SDKError`](CommonError.md#sdkerror)

#### Constructors

##### Constructor

> **new MissingKeyParameters**(...`missing`: `string`[]): [`MissingKeyParameters`](#missingkeyparameters)

Defined in: [src/domain/models/errors/Apollo.ts:76](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L76)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`missing` | `string`[] |

###### Returns

[`MissingKeyParameters`](#missingkeyparameters)

###### Overrides

[`SDKError`](CommonError.md#sdkerror).[`constructor`](CommonError.md#sdkerror#constructor-1)

***

### MnemonicLengthError

Defined in: [src/domain/models/errors/Apollo.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L17)

thrown when the number of Mnemonic words is different to expected

#### Extends

- [`SDKError`](CommonError.md#sdkerror)

#### Constructors

##### Constructor

> **new MnemonicLengthError**(): [`MnemonicLengthError`](#mnemoniclengtherror)

Defined in: [src/domain/models/errors/Apollo.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L18)

###### Returns

[`MnemonicLengthError`](#mnemoniclengtherror)

###### Overrides

[`SDKError`](CommonError.md#sdkerror).[`constructor`](CommonError.md#sdkerror#constructor-1)

***

### MnemonicWordError

Defined in: [src/domain/models/errors/Apollo.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L8)

thrown when at least one Mnemonic word does not match in the wordlist

#### Extends

- [`SDKError`](CommonError.md#sdkerror)

#### Constructors

##### Constructor

> **new MnemonicWordError**(`words?`: `string`[]): [`MnemonicWordError`](#mnemonicworderror)

Defined in: [src/domain/models/errors/Apollo.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/errors/Apollo.ts#L9)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `words?` | `string`[] |

###### Returns

[`MnemonicWordError`](#mnemonicworderror)

###### Overrides

[`SDKError`](CommonError.md#sdkerror).[`constructor`](CommonError.md#sdkerror#constructor-1)
