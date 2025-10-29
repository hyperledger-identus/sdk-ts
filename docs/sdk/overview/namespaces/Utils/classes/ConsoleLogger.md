[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Utils](../README.md) / ConsoleLogger

# Class: ConsoleLogger

Defined in: [src/utils/logger.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/logger.ts#L27)

## Implements

- [`Logger`](../interfaces/Logger.md)

## Constructors

### Constructor

> **new ConsoleLogger**(`logLevel?`: [`LogLevel`](../type-aliases/LogLevel.md)): `ConsoleLogger`

Defined in: [src/utils/logger.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/logger.ts#L30)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `logLevel?` | [`LogLevel`](../type-aliases/LogLevel.md) |

#### Returns

`ConsoleLogger`

## Methods

### debug() {#debug}

> **debug**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [src/utils/logger.ts:44](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/logger.ts#L44)

very verbose information for debugging purposes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

#### Returns

`void`

#### Implementation of

[`Logger`](../interfaces/Logger.md).[`debug`](../interfaces/Logger.md#debug)

***

### error() {#error}

> **error**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [src/utils/logger.ts:56](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/logger.ts#L56)

unexpected or critical information

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

#### Returns

`void`

#### Implementation of

[`Logger`](../interfaces/Logger.md).[`error`](../interfaces/Logger.md#error)

***

### getLogLevel() {#getloglevel}

> **getLogLevel**(`level`: [`LogLevel`](../type-aliases/LogLevel.md)): `number`

Defined in: [src/utils/logger.ts:34](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/logger.ts#L34)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `level` | [`LogLevel`](../type-aliases/LogLevel.md) |

#### Returns

`number`

***

### info() {#info}

> **info**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [src/utils/logger.ts:48](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/logger.ts#L48)

verbose information about normal operation

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

#### Returns

`void`

#### Implementation of

[`Logger`](../interfaces/Logger.md).[`info`](../interfaces/Logger.md#info)

***

### warn() {#warn}

> **warn**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [src/utils/logger.ts:52](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/logger.ts#L52)

expected information that might warrant require attention

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

#### Returns

`void`

#### Implementation of

[`Logger`](../interfaces/Logger.md).[`warn`](../interfaces/Logger.md#warn)
