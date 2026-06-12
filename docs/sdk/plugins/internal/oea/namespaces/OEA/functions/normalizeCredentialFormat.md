[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [plugins/internal/oea](../../../README.md) / [OEA](../README.md) / normalizeCredentialFormat

# Function: normalizeCredentialFormat()

> **normalizeCredentialFormat**(`format`: `string`): `string`

Defined in: [packages/lib/sdk/src/plugins/internal/oea/types.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/types.ts#L28)

Normalizes a credential format string to the canonical format.
Treats "jwt" and "prism/jwt" as equivalent (returns "prism/jwt" for backward compat).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `format` | `string` | The credential format string to normalize |

## Returns

`string`

The canonical format string
