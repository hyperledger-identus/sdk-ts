[**@hyperledger/identus-sdk v8.1.1**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / ProtocolType

# Type Alias: ProtocolType

> **ProtocolType** = *typeof* [`ProtocolIds`](../../plugins/internal/didcomm/variables/ProtocolIds.md) \| *typeof* [`ProtocolIds`](../../plugins/internal/oea/namespaces/OEA/variables/ProtocolIds.md)

Defined in: [packages/lib/sdk/src/edge-agent/types.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/2339594d2f94c77f1b65e16649c0597d971fc865/packages/lib/sdk/src/edge-agent/types.ts#L21)

Temporary workaround to smooth transition of internal module splitting and end-user consumables
ProtocolType is a merging of all the supported ProtocolIds
These have been split internally into Didcomm and OEA modules
But we can hide that from our users until full support exists
