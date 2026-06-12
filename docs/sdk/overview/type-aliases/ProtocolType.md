[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / ProtocolType

# Type Alias: ProtocolType

> **ProtocolType** = *typeof* [`ProtocolIds`](../../plugins/internal/didcomm/variables/ProtocolIds.md) \| *typeof* [`ProtocolIds`](../../plugins/internal/oea/namespaces/OEA/variables/ProtocolIds.md)

Defined in: [packages/lib/sdk/src/edge-agent/types.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/types.ts#L21)

Temporary workaround to smooth transition of internal module splitting and end-user consumables
ProtocolType is a merging of all the supported ProtocolIds
These have been split internally into Didcomm and OEA modules
But we can hide that from our users until full support exists
