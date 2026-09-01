[**@hyperledger/identus-sdk v8.1.2**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [plugins/internal/oea](../../../README.md) / [OEA](../README.md) / normalizeCredentialFormat

# Function: normalizeCredentialFormat()

> **normalizeCredentialFormat**(`format`: `string`): `string`

Defined in: [packages/lib/sdk/src/plugins/internal/oea/types.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/plugins/internal/oea/types.ts#L28)

Normalizes a credential format string to the canonical format.
Treats "jwt" and "prism/jwt" as equivalent (returns "prism/jwt" for backward compat).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `format` | `string` | The credential format string to normalize |

## Returns

`string`

The canonical format string
