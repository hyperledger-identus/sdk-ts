[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Utils](../../../README.md) / [Task](../README.md) / Runner

# Abstract Class: Runner

Defined in: [src/utils/tasks.ts:97](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L97)

used to enable Modules to propagate the Context
and have access to runTask

## Extended by

- [`JWT`](../../../../../classes/JWT.md)
- [`SDJWT`](../../../../../classes/SDJWT.md)
- [`DIFModule`](../../../../../../plugins/internal/dif/classes/DIFModule.md)

## Constructors

### Constructor

> **new Runner**(): `Runner`

#### Returns

`Runner`

## Methods

### clone() {#clone}

> `abstract` **clone**(): `Runner`

Defined in: [src/utils/tasks.ts:101](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L101)

#### Returns

`Runner`

***

### withContext() {#withcontext}

> **withContext**(`ctx`: [`Context`](../type-aliases/Context.md)): `Runner`

Defined in: [src/utils/tasks.ts:103](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/tasks.ts#L103)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ctx` | [`Context`](../type-aliases/Context.md) |

#### Returns

`Runner`
