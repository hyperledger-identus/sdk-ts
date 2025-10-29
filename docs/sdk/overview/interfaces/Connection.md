[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Connection

# Interface: Connection

Defined in: [src/edge-agent/connections/Connection.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/Connection.ts#L9)

Define the structure of a Connection

Connections are used to capture Protocol specific behaviours and metadata

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="close"></a> `close?` | () => `Promise`\<`void`\> | handle any desired teardown | [src/edge-agent/connections/Connection.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/Connection.ts#L29) |
| <a id="receive"></a> `receive?` | (`protocol`: `any`, `ctx`: `any`) => `Promise`\<`void`\> | called when a Message is received from this connection | [src/edge-agent/connections/Connection.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/Connection.ts#L25) |
| <a id="send"></a> `send` | (`protocol`: `any`, `ctx`: `any`) => `Promise`\<`any`\> | handle delivering a Message to the connected entity | [src/edge-agent/connections/Connection.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/Connection.ts#L21) |
| <a id="state"></a> `state` | [`State`](../namespaces/Connection/enumerations/State.md) | current condition of the connection | [src/edge-agent/connections/Connection.ts:17](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/Connection.ts#L17) |
| <a id="uri"></a> `uri` | `string` | unique identifer for the connection | [src/edge-agent/connections/Connection.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/Connection.ts#L13) |
