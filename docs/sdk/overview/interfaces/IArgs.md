[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / IArgs

# Interface: IArgs\<T, D\>

Defined in: [packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts#L15)

RunProtocol exists to bridge the gap between
the strong coupling to DIDComm messages and abstracting to Protocols

When the abstraction happens this should be removable

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |
| `D` *extends* `object` |

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="property-data"></a> `data` | `D` | [packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts#L21) |
| <a id="property-pid"></a> `pid` | `string` | [packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts#L19) |
| <a id="property-type"></a> `type` | `T` | [packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts#L17) |
