[**@hyperledger/identus-sdk v8.1.1**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [plugins/internal/oea](../../../README.md) / [OEA](../README.md) / normalizeCredentialFormat

# Function: normalizeCredentialFormat()

> **normalizeCredentialFormat**(`format`: `string`): `string`

Defined in: [packages/lib/sdk/src/plugins/internal/oea/types.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/plugins/internal/oea/types.ts#L28)

Normalizes a credential format string to the canonical format.
Treats "jwt" and "prism/jwt" as equivalent (returns "prism/jwt" for backward compat).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `format` | `string` | The credential format string to normalize |

## Returns

`string`

The canonical format string
