[@hyperledger/identus-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / [PlutoError](../modules/Domain.PlutoError.md) / PrivateKeyNotStorable

# Class: PrivateKeyNotStorable

[Domain](../modules/Domain.md).[PlutoError](../modules/Domain.PlutoError.md).PrivateKeyNotStorable

## Hierarchy

- `Error`

  ↳ **`PrivateKeyNotStorable`**

## Table of contents

### Constructors

- [constructor](Domain.PlutoError.PrivateKeyNotStorable.md#constructor)

### Properties

- [cause](Domain.PlutoError.PrivateKeyNotStorable.md#cause)
- [message](Domain.PlutoError.PrivateKeyNotStorable.md#message)
- [name](Domain.PlutoError.PrivateKeyNotStorable.md#name)
- [stack](Domain.PlutoError.PrivateKeyNotStorable.md#stack)
- [prepareStackTrace](Domain.PlutoError.PrivateKeyNotStorable.md#preparestacktrace)
- [stackTraceLimit](Domain.PlutoError.PrivateKeyNotStorable.md#stacktracelimit)

### Methods

- [captureStackTrace](Domain.PlutoError.PrivateKeyNotStorable.md#capturestacktrace)

## Constructors

### constructor

• **new PrivateKeyNotStorable**(`message?`): [`PrivateKeyNotStorable`](Domain.PlutoError.PrivateKeyNotStorable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`PrivateKeyNotStorable`](Domain.PlutoError.PrivateKeyNotStorable.md)

#### Overrides

Error.constructor

#### Defined in

[src/domain/models/errors/Pluto.ts:62](https://github.com/hyperledger-identus/sdk-ts/blob/966e04ee4b9d4ba9d1e404c4d3d062abcf854530/src/domain/models/errors/Pluto.ts#L62)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:27

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:29

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:20
