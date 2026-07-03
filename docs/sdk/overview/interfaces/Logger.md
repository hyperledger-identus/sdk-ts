[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Logger

# Interface: Logger

Defined in: [packages/lib/sdk/src/utils/logger.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/logger.ts#L9)

## Methods

### debug() {#debug}

> **debug**(`message`: `string`, ...`params`: `any`[]): `void`

Defined in: [packages/lib/sdk/src/utils/logger.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/logger.ts#L13)

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

Defined in: [packages/lib/sdk/src/utils/logger.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/logger.ts#L25)

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

Defined in: [packages/lib/sdk/src/utils/logger.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/logger.ts#L17)

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

Defined in: [packages/lib/sdk/src/utils/logger.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/utils/logger.ts#L21)

expected information that might warrant require attention

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| ...`params` | `any`[] |

#### Returns

`void`
