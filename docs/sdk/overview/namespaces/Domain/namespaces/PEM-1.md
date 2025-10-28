[**@hyperledger/identus-sdk**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / PEM

# PEM

## Functions

### fromKey()

> **fromKey**(`key`: [`Key`](../README.md#key), `label`: `string`): `string`

Defined in: [src/domain/models/keyManagement/exportable/PEM.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/PEM.ts#L41)

create a PEM from a Key

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | [`Key`](../README.md#key) | Cryptographic key |
| `label` | `string` | PEM header / footer label |

#### Returns

`string`

***

### toRaw()

> **toRaw**(`pem`: `string`, `label`: `string`): `Buffer`

Defined in: [src/domain/models/keyManagement/exportable/PEM.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/PEM.ts#L17)

create a Uint8Array from a PEM

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pem` | `string` |  |
| `label` | `string` | expected header / footer label |

#### Returns

`Buffer`
