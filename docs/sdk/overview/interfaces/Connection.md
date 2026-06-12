[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Connection

# Interface: Connection

Defined in: [packages/lib/sdk/src/edge-agent/connections/Connection.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/connections/Connection.ts#L9)

Define the structure of a Connection

Connections are used to capture Protocol specific behaviours and metadata

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-close"></a> `close?` | () => `Promise`\<`void`\> | handle any desired teardown | [packages/lib/sdk/src/edge-agent/connections/Connection.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/connections/Connection.ts#L29) |
| <a id="property-receive"></a> `receive?` | (`protocol`: `any`, `ctx`: `any`) => `Promise`\<`void`\> | called when a Message is received from this connection | [packages/lib/sdk/src/edge-agent/connections/Connection.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/connections/Connection.ts#L25) |
| <a id="property-send"></a> `send` | (`protocol`: `any`, `ctx`: `any`) => `Promise`\<`any`\> | handle delivering a Message to the connected entity | [packages/lib/sdk/src/edge-agent/connections/Connection.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/connections/Connection.ts#L21) |
| <a id="property-state"></a> `state` | [`State`](../namespaces/Connection/enumerations/State.md) | current condition of the connection | [packages/lib/sdk/src/edge-agent/connections/Connection.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/connections/Connection.ts#L17) |
| <a id="property-uri"></a> `uri` | `string` | unique identifer for the connection | [packages/lib/sdk/src/edge-agent/connections/Connection.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/edge-agent/connections/Connection.ts#L13) |
