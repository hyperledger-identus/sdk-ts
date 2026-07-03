[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / IArgs

# Interface: IArgs\<T, D\>

Defined in: [packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts#L15)

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
| <a id="property-data"></a> `data` | `D` | [packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts#L21) |
| <a id="property-pid"></a> `pid` | `string` | [packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts#L19) |
| <a id="property-type"></a> `type` | `T` | [packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/helpers/RunProtocol.ts#L17) |
