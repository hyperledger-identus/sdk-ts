[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / ProtocolType

# Type Alias: ProtocolType

> **ProtocolType** = *typeof* [`ProtocolIds`](../../plugins/internal/didcomm/variables/ProtocolIds.md) \| *typeof* [`ProtocolIds`](../../plugins/internal/oea/namespaces/OEA/variables/ProtocolIds.md)

Defined in: [src/edge-agent/types/index.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/types/index.ts#L18)

Temporary workaround to smooth transition of internal module splitting and end-user consumables
ProtocolType is a merging of all the supported ProtocolIds
These have been split internally into Didcomm and OEA modules
But we can hide that from our users until full support exists
