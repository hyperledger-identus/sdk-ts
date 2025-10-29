[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Message

# Interface: Message

Defined in: [src/pluto/models/Message.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Message.ts#L11)

Definition for Message model
Represents [Message](../namespaces/Domain/namespaces/Message/README.md)

## See

Domain.Message

## Extends

- [`Model`](../type-aliases/Model.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="createdtime"></a> `createdTime` | `number` | - | - | [src/pluto/models/Message.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Message.ts#L19) |
| <a id="datajson"></a> `dataJson` | `string` | Stringified JSON values | - | [src/pluto/models/Message.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Message.ts#L15) |
| <a id="from"></a> `from?` | `string` | - | - | [src/pluto/models/Message.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Message.ts#L22) |
| <a id="id"></a> `id` | `string` | - | - | [src/pluto/models/Message.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Message.ts#L18) |
| <a id="isreceived"></a> `isReceived` | `number` | - | - | [src/pluto/models/Message.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Message.ts#L24) |
| <a id="piuri"></a> `piuri` | `string` | - | - | [src/pluto/models/Message.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Message.ts#L21) |
| <a id="thid"></a> `thid?` | `string` | - | - | [src/pluto/models/Message.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Message.ts#L20) |
| <a id="to"></a> `to?` | `string` | - | - | [src/pluto/models/Message.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/pluto/models/Message.ts#L23) |
| <a id="uuid"></a> `uuid` | `string` | Universally Unique Identifier. should be unique across all items. | `Model.uuid` | [src/domain/buildingBlocks/Pluto.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Pluto.ts#L23) |
