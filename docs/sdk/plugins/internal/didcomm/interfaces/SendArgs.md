[**@hyperledger/identus-sdk v8.1.2**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / SendArgs

# Interface: SendArgs

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/tasks/Send.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/plugins/internal/didcomm/tasks/Send.ts#L15)

attempt to deliver a Message across a Connection

attempt to find the Connection for the Message.to
in ctx.Connections

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-connection"></a> `connection?` | [`Connection`](../../../../overview/interfaces/Connection.md) | Connection to use | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/Send.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/plugins/internal/didcomm/tasks/Send.ts#L24) |
| <a id="property-message"></a> `message` | [`Message`](../../../../overview/namespaces/Domain/classes/Message.md) \| [`ApiRequest`](../../../../overview/namespaces/Domain/classes/ApiRequest.md) | Message to be delivered | [packages/lib/sdk/src/plugins/internal/didcomm/tasks/Send.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/plugins/internal/didcomm/tasks/Send.ts#L19) |
