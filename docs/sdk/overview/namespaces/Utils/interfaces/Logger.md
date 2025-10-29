[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Utils](../README.md) / Logger

# Interface: Logger

Defined in: [src/utils/logger.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/logger.ts#L6)

## Methods

### debug() {#debug}

> **debug**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [src/utils/logger.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/logger.ts#L10)

very verbose information for debugging purposes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

#### Returns

`void`

***

### error() {#error}

> **error**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [src/utils/logger.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/logger.ts#L22)

unexpected or critical information

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

#### Returns

`void`

***

### info() {#info}

> **info**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [src/utils/logger.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/logger.ts#L14)

verbose information about normal operation

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

#### Returns

`void`

***

### warn() {#warn}

> **warn**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [src/utils/logger.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/utils/logger.ts#L18)

expected information that might warrant require attention

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

#### Returns

`void`
