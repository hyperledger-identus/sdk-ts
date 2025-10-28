[**@hyperledger/identus-sdk**](../../../README.md)

***

[@hyperledger/identus-sdk](../../../README.md) / [overview](../../README.md) / Utils

# Utils

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [Task](namespaces/Task.md) | - |

## Classes

### ConsoleLogger

Defined in: [src/utils/logger.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/logger.ts#L27)

#### Implements

- [`Logger`](#logger)

#### Constructors

##### Constructor

> **new ConsoleLogger**(`logLevel?`: [`LogLevel`](#loglevel)): [`ConsoleLogger`](#consolelogger)

Defined in: [src/utils/logger.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/logger.ts#L30)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `logLevel?` | [`LogLevel`](#loglevel) |

###### Returns

[`ConsoleLogger`](#consolelogger)

#### Methods

##### debug()

> **debug**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [src/utils/logger.ts:44](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/logger.ts#L44)

very verbose information for debugging purposes

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

###### Returns

`void`

###### Implementation of

[`Logger`](#logger).[`debug`](#debug-2)

##### error()

> **error**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [src/utils/logger.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/logger.ts#L56)

unexpected or critical information

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

###### Returns

`void`

###### Implementation of

[`Logger`](#logger).[`error`](#error-2)

##### getLogLevel()

> **getLogLevel**(`level`: [`LogLevel`](#loglevel)): `number`

Defined in: [src/utils/logger.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/logger.ts#L34)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `level` | [`LogLevel`](#loglevel) |

###### Returns

`number`

##### info()

> **info**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [src/utils/logger.ts:48](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/logger.ts#L48)

verbose information about normal operation

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

###### Returns

`void`

###### Implementation of

[`Logger`](#logger).[`info`](#info-2)

##### warn()

> **warn**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [src/utils/logger.ts:52](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/logger.ts#L52)

expected information that might warrant require attention

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

###### Returns

`void`

###### Implementation of

[`Logger`](#logger).[`warn`](#warn-2)

***

### `abstract` Task\<T, Args\>

Defined in: [src/utils/tasks.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L11)

A Task encapsulates a unit of work

args constructor parameter is mandatory if Args type given
args constructor parameter is optional if no Args type given

#### Extended by

- [`FetchCredentialDefinition`](../../../plugins/internal/anoncreds.md#fetchcredentialdefinition)
- [`fetchSchema`](../../../plugins/internal/anoncreds.md#fetchschema)
- [`CreateAuthorizationRequest`](../../../plugins/internal/oidc/README.md#createauthorizationrequest)
- [`ProcessCallbackUrl`](../../../plugins/internal/oidc/README.md#processcallbackurl)
- [`ResolveAuthorizationRequest`](../../../plugins/internal/oidc/README.md#resolveauthorizationrequest)
- [`ResolveCredentialRequest`](../../../plugins/internal/oidc/README.md#resolvecredentialrequest)
- [`ResolveTokenRequest`](../../../plugins/internal/oidc/README.md#resolvetokenrequest)
- [`CreateCredentialRequest`](../../../plugins/internal/oidc/README.md#createcredentialrequest)
- [`FetchAuthServerMeta`](../../../plugins/internal/oidc/README.md#fetchauthservermeta)
- [`FetchIssuerMetadata`](../../../plugins/internal/oidc/README.md#fetchissuermetadata)
- [`ParseCredentialOffer`](../../../plugins/internal/oidc/README.md#parsecredentialoffer)
- [`Task`](../Plugins.md#task)
- [`CreatePrismDID`](../../README.md#createprismdid-2)
- [`CreateOOBOffer`](../../README.md#createooboffer)
- [`RunProtocol`](../../README.md#runprotocol)
- [`PKInstance`](../../README.md#pkinstance)
- [`CreateOOBPresentationRequest`](../../README.md#createoobpresentationrequest)
- [`CreatePresentationRequest`](../../README.md#createpresentationrequest)
- [`CreatePresentation`](../../README.md#createpresentation)
- [`HandlePresentation`](../../../plugins/internal/oea/README.md#handlepresentation)
- [`HandleRevocation`](../../../plugins/internal/oea/README.md#handlerevocation)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `Args` | `unknown` |

#### Constructors

##### Constructor

> **new Task**\<`T`, `Args`\>(...`args`: `unknown` *extends* `Args` ? \[\] : \[`Args`\]): [`Task`](#task)\<`T`, `Args`\>

Defined in: [src/utils/tasks.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L18)

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`args` | `unknown` *extends* `Args` ? \[\] : \[`Args`\] |  |

###### Returns

[`Task`](#task)\<`T`, `Args`\>

#### Methods

##### log()

> **log**(): `unknown`

Defined in: [src/utils/tasks.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L26)

###### Returns

`unknown`

##### run()

> `abstract` **run**(`ctx`: [`Context`](namespaces/Task.md#context)): `Promise`\<`T`\>

Defined in: [src/utils/tasks.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/tasks.ts#L23)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](namespaces/Task.md#context) |

###### Returns

`Promise`\<`T`\>

## Interfaces

### Ctor\<T\>

Defined in: [src/utils/types.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/types.ts#L4)

Constructor for T

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

#### Constructors

##### Constructor

> **new Ctor**(...`args`: `any`[]): `T`

Defined in: [src/utils/types.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/types.ts#L5)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `any`[] |

###### Returns

`T`

***

### Logger

Defined in: [src/utils/logger.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/logger.ts#L6)

#### Methods

##### debug()

> **debug**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [src/utils/logger.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/logger.ts#L10)

very verbose information for debugging purposes

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

###### Returns

`void`

##### error()

> **error**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [src/utils/logger.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/logger.ts#L22)

unexpected or critical information

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

###### Returns

`void`

##### info()

> **info**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [src/utils/logger.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/logger.ts#L14)

verbose information about normal operation

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

###### Returns

`void`

##### warn()

> **warn**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [src/utils/logger.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/logger.ts#L18)

expected information that might warrant require attention

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

###### Returns

`void`

## Type Aliases

### Arrayable\<T\>

> **Arrayable**\<`T`\> = `T` \| `T`[]

Defined in: [src/utils/types.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/types.ts#L19)

T is either an Array or a single item

meant for use with function parameters to pass one or many items

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### See

asArray

***

### JsonObj\<T\>

> **JsonObj**\<`T`\> = `Record`\<`string`, `T` \| `undefined`\>

Defined in: [src/utils/types.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/types.ts#L26)

Construct a Type with a set of string Keys of type T | undefined
To be used in place of Record for arbitrary data structs
where the key does not definitely result in a T

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

***

### LogLevel

> **LogLevel** = `"debug"` \| `"info"` \| `"warn"` \| `"error"` \| `"none"`

Defined in: [src/utils/logger.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/logger.ts#L25)

***

### Nil

> **Nil** = `undefined` \| `null`

Defined in: [src/utils/types.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/types.ts#L11)

no value shorthand

***

### Normalize\<T\>

> **Normalize**\<`T`\> = `T` *extends* `object` ? `{ [P in keyof T]: T[P] }` : `T`

Defined in: [src/utils/types.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/types.ts#L33)

Flatten intersect to show single interface

Usage: `type flat = Normalize<A & B>`

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Functions

### asArray()

#### Call Signature

> **asArray**\<`T`\>(`items`: [`Nil`](#nil) \| `T` \| `T`[]): `T`[]

Defined in: [src/utils/guards.ts:81](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/guards.ts#L81)

asArray
convert a value to an array

##### Type Parameters

| Type Parameter |
| ------ |
| `T` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `items` | [`Nil`](#nil) \| `T` \| `T`[] | the value to be converted - nullish returns empty array - single item returns array with item - array returns array |

##### Returns

`T`[]

#### Call Signature

> **asArray**\<`T`, `U`\>(`items`: [`Nil`](#nil) \| `T` \| `T`[], `guard`: (`item`: `unknown`) => `item is U`): `U`[]

Defined in: [src/utils/guards.ts:88](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/guards.ts#L88)

asArray
convert a value to an array with type guard

##### Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `items` | [`Nil`](#nil) \| `T` \| `T`[] | the value to be converted |
| `guard` | (`item`: `unknown`) => `item is U` | Typeguard to filter items ensuring item types |

##### Returns

`U`[]

***

### asJsonObj()

> **asJsonObj**(`value`: `unknown`): [`JsonObj`](#jsonobj)

Defined in: [src/utils/guards.ts:99](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/guards.ts#L99)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

[`JsonObj`](#jsonobj)

***

### expect()

> **expect**\<`T`\>(`value`: `T`, `error?`: `string` \| `Error` \| [`Ctor`](#ctor)\<`Error`\>): `Exclude`\<`T`, [`Nil`](#nil)\>

Defined in: [src/utils/guards.ts:119](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/guards.ts#L119)

expect
assert a value is notNil and return the value typed as such
panic otherwise

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `T` | the value to check |
| `error?` | `string` \| `Error` \| [`Ctor`](#ctor)\<`Error`\> | custom error |

#### Returns

`Exclude`\<`T`, [`Nil`](#nil)\>

***

### isArray()

> **isArray**(`value`: `unknown`): `value is unknown[]`

Defined in: [src/utils/guards.ts:65](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/guards.ts#L65)

isArray
Typeguard - check a value is an Array

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

`value is unknown[]`

***

### isEmpty()

> **isEmpty**(`value`: `unknown`): `value is Nil`

Defined in: [src/utils/guards.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/guards.ts#L29)

isEmpty
Logic - check a given value is considered empty
empty depends on typeof value:
- null
- undefined
- array: length = 0
- string: length = 0

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

`value is Nil`

#### See

 - isNil
 - isString
 - isArray

***

### isNil()

> **isNil**(`value`: `unknown`): `value is Nil`

Defined in: [src/utils/guards.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/guards.ts#L8)

isNullish
Typeguard - check a value is undefined or null

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

`value is Nil`

***

### isObject()

> **isObject**\<`T`\>(`value`: `T`): value is Exclude\<T & Record\<string, any\>, any\[\] \| Nil \| ((args: any) =\> any)\>

Defined in: [src/utils/guards.ts:46](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/guards.ts#L46)

isObject
Typeguard - check a value is an object in the conceptual sense not the JS sense
excluding JS overlap with:
  null
  Arrays
  Functions

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T` |

#### Returns

value is Exclude\<T & Record\<string, any\>, any\[\] \| Nil \| ((args: any) =\> any)\>

***

### isString()

> **isString**(`value`: `unknown`): `value is string`

Defined in: [src/utils/guards.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/guards.ts#L53)

isString
TypeGuard to check a value is a string

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

`value is string`

***

### notEmptyString()

> **notEmptyString**(`value`: `unknown`): `value is string`

Defined in: [src/utils/guards.ts:59](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/guards.ts#L59)

notEmptyString
Typeguard + Logic - check a value is a string with contents

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

`value is string`

***

### notNil()

> **notNil**\<`T`\>(`value`: [`Nil`](#nil) \| `T`): `value is T`

Defined in: [src/utils/guards.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/guards.ts#L15)

notNil
Typeguard - check a value is neither undefined or null

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Nil`](#nil) \| `T` |

#### Returns

`value is T`

#### See

isNil

***

### validate()

> **validate**\<`T`\>(`json`: `unknown`, `schema`: `T`): `asserts json is Static<T>`

Defined in: [src/utils/validation.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/validation.ts#L26)

validate
Type assertion - assert a value matches a schema

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `TObject`\<`TProperties`\> |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `json` | `unknown` |  |
| `schema` | `T` |  |

#### Returns

`asserts json is Static<T>`

#### Throws

Error - list of issues

***

### validateSafe()

> **validateSafe**\<`T`\>(`json`: `unknown`, `schema`: `T`): `json is Static<T>`

Defined in: [src/utils/validation.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/utils/validation.ts#L13)

validateSafe
Typeguard - check a value matches a schema

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `TObject`\<`TProperties`\> |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `json` | `unknown` |  |
| `schema` | `T` |  |

#### Returns

`json is Static<T>`
