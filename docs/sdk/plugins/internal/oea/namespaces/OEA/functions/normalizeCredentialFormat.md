[**@hyperledger/identus-sdk v8.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [plugins/internal/oea](../../../README.md) / [OEA](../README.md) / normalizeCredentialFormat

# Function: normalizeCredentialFormat()

> **normalizeCredentialFormat**(`format`: `string`): `string`

Defined in: [packages/lib/sdk/src/plugins/internal/oea/types.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/plugins/internal/oea/types.ts#L28)

Normalizes a credential format string to the canonical format.
Treats "jwt" and "prism/jwt" as equivalent (returns "prism/jwt" for backward compat).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `format` | `string` | The credential format string to normalize |

## Returns

`string`

The canonical format string
