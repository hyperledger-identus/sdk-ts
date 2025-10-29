[**@hyperledger/identus-sdk v7.0.0**](../../../README.md)

***

[@hyperledger/identus-sdk](../../../README.md) / [overview](../../README.md) / Utils

# Utils

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [Task](namespaces/Task/README.md) | - |

## Classes

| Class | Description |
| ------ | ------ |
| [ConsoleLogger](classes/ConsoleLogger.md) | - |
| [Task](classes/Task.md) | A Task encapsulates a unit of work |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [Ctor](interfaces/Ctor.md) | Constructor for T |
| [Logger](interfaces/Logger.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [Arrayable](type-aliases/Arrayable.md) | T is either an Array or a single item |
| [JsonObj](type-aliases/JsonObj.md) | Construct a Type with a set of string Keys of type T | undefined To be used in place of Record for arbitrary data structs where the key does not definitely result in a T |
| [LogLevel](type-aliases/LogLevel.md) | - |
| [Nil](type-aliases/Nil.md) | no value shorthand |
| [Normalize](type-aliases/Normalize.md) | Flatten intersect to show single interface |

## Functions

| Function | Description |
| ------ | ------ |
| [asArray](functions/asArray.md) | asArray convert a value to an array |
| [asJsonObj](functions/asJsonObj.md) | - |
| [expect](functions/expect.md) | expect assert a value is notNil and return the value typed as such panic otherwise |
| [isArray](functions/isArray.md) | isArray Typeguard - check a value is an Array |
| [isEmpty](functions/isEmpty.md) | isEmpty Logic - check a given value is considered empty empty depends on typeof value: - null - undefined - array: length = 0 - string: length = 0 |
| [isNil](functions/isNil.md) | isNullish Typeguard - check a value is undefined or null |
| [isObject](functions/isObject.md) | isObject Typeguard - check a value is an object in the conceptual sense not the JS sense excluding JS overlap with: null Arrays Functions |
| [isString](functions/isString.md) | isString TypeGuard to check a value is a string |
| [notEmptyString](functions/notEmptyString.md) | notEmptyString Typeguard + Logic - check a value is a string with contents |
| [notNil](functions/notNil.md) | notNil Typeguard - check a value is neither undefined or null |
| [validate](functions/validate.md) | validate Type assertion - assert a value matches a schema |
| [validateSafe](functions/validateSafe.md) | validateSafe Typeguard - check a value matches a schema |
