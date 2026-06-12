[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / Message

# Interface: Message

Defined in: [packages/lib/sdk/src/pluto/models/Message.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Message.ts#L12)

Definition for Message model
Represents [Message](../namespaces/Domain/classes/Message.md)

## See

Domain.Message

## Extends

- [`Model`](../type-aliases/Model.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-createdtime"></a> `createdTime` | `number` | - | - | [packages/lib/sdk/src/pluto/models/Message.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Message.ts#L20) |
| <a id="property-datajson"></a> `dataJson` | `string` | Stringified JSON values | - | [packages/lib/sdk/src/pluto/models/Message.ts:16](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Message.ts#L16) |
| <a id="property-from"></a> `from?` | `string` | - | - | [packages/lib/sdk/src/pluto/models/Message.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Message.ts#L23) |
| <a id="property-id"></a> `id` | `string` | - | - | [packages/lib/sdk/src/pluto/models/Message.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Message.ts#L19) |
| <a id="property-isreceived"></a> `isReceived` | `number` | - | - | [packages/lib/sdk/src/pluto/models/Message.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Message.ts#L25) |
| <a id="property-piuri"></a> `piuri` | `string` | - | - | [packages/lib/sdk/src/pluto/models/Message.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Message.ts#L22) |
| <a id="property-read"></a> `read` | `boolean` | - | - | [packages/lib/sdk/src/pluto/models/Message.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Message.ts#L26) |
| <a id="property-thid"></a> `thid?` | `string` | - | - | [packages/lib/sdk/src/pluto/models/Message.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Message.ts#L21) |
| <a id="property-to"></a> `to?` | `string` | - | - | [packages/lib/sdk/src/pluto/models/Message.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/models/Message.ts#L24) |
| <a id="property-uuid"></a> `uuid` | `string` | Universally Unique Identifier. should be unique across all items. | `Model.uuid` | packages/shared/domain/build/index.d.ts:404 |
