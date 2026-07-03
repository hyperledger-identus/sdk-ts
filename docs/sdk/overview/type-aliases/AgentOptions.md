[**@hyperledger/identus-sdk v8.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / AgentOptions

# Type Alias: AgentOptions

> **AgentOptions** = \{ `didMethods?`: `DIDMethodInput`[]; `experiments?`: \{ `liveMode?`: `boolean`; \}; `mediatorDID?`: [`DID`](../namespaces/Domain/classes/DID.md) \| `string`; \}

Defined in: [packages/lib/sdk/src/edge-agent/types.ts:51](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/types.ts#L51)

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-didmethods"></a> ~~`didMethods?`~~ | `DIDMethodInput`[] | **Deprecated** Pass `didMethods` directly at the top level of `Agent.initialize({ pluto, didMethods, ... })` instead. The top-level form participates in type inference so `agent.createDID` sees your custom methods. | [packages/lib/sdk/src/edge-agent/types.ts:62](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/types.ts#L62) |
| <a id="property-experiments"></a> `experiments?` | \{ `liveMode?`: `boolean`; \} | - | [packages/lib/sdk/src/edge-agent/types.ts:53](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/types.ts#L53) |
| `experiments.liveMode?` | `boolean` | - | [packages/lib/sdk/src/edge-agent/types.ts:54](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/types.ts#L54) |
| <a id="property-mediatordid"></a> `mediatorDID?` | [`DID`](../namespaces/Domain/classes/DID.md) \| `string` | - | [packages/lib/sdk/src/edge-agent/types.ts:52](https://github.com/hyperledger-identus/sdk-ts/blob/b5f0a60034821e4996d061b01361bb3c04c7c9c3/packages/lib/sdk/src/edge-agent/types.ts#L52) |
