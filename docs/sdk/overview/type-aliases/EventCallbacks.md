[**@hyperledger/identus-sdk v8.1.2**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / EventCallbacks

# Type Alias: EventCallbacks

> **EventCallbacks** = \{ `connection`: (`connection`: [`ConnectionEventArg`](ConnectionEventArg.md)) => `void` \| `Promise`\<`void`\>; `message`: (`messages`: [`MessageEventArg`](MessageEventArg.md)) => `void` \| `Promise`\<`void`\>; `revoke`: (`revoke`: [`RevokeEventArg`](RevokeEventArg.md)) => `void` \| `Promise`\<`void`\>; \}

Defined in: [packages/lib/sdk/src/edge-agent/types.ts:76](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/edge-agent/types.ts#L76)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="property-connection"></a> `connection` | (`connection`: [`ConnectionEventArg`](ConnectionEventArg.md)) => `void` \| `Promise`\<`void`\> | [packages/lib/sdk/src/edge-agent/types.ts:78](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/edge-agent/types.ts#L78) |
| <a id="property-message"></a> `message` | (`messages`: [`MessageEventArg`](MessageEventArg.md)) => `void` \| `Promise`\<`void`\> | [packages/lib/sdk/src/edge-agent/types.ts:77](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/edge-agent/types.ts#L77) |
| <a id="property-revoke"></a> `revoke` | (`revoke`: [`RevokeEventArg`](RevokeEventArg.md)) => `void` \| `Promise`\<`void`\> | [packages/lib/sdk/src/edge-agent/types.ts:79](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/edge-agent/types.ts#L79) |
