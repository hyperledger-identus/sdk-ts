[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / IArgs

# Interface: IArgs\<T, D\>

Defined in: [src/edge-agent/helpers/RunProtocol.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/RunProtocol.ts#L14)

RunProtocol exists to bridge the gap between
the strong coupling to DIDComm messages and abstracting to Protocols

When the abstraction happens this should be removable

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |
| `D` *extends* [`JsonObj`](../namespaces/Utils/type-aliases/JsonObj.md) |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data"></a> `data` | `D` | [src/edge-agent/helpers/RunProtocol.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/RunProtocol.ts#L20) |
| <a id="pid"></a> `pid` | `string` | [src/edge-agent/helpers/RunProtocol.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/RunProtocol.ts#L18) |
| <a id="type"></a> `type` | `T` | [src/edge-agent/helpers/RunProtocol.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/helpers/RunProtocol.ts#L16) |
