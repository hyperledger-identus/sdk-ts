[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / BasicMessage

# Class: BasicMessage

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L14)

## Constructors

### Constructor

> **new BasicMessage**(`body`: [`BasicMessageBody`](../interfaces/BasicMessageBody.md), `from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `thid?`: `string`): `BasicMessage`

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L17)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`BasicMessageBody`](../interfaces/BasicMessageBody.md) |
| `from` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `to` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `thid?` | `string` |

#### Returns

`BasicMessage`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-body"></a> `body` | `public` | [`BasicMessageBody`](../interfaces/BasicMessageBody.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L18) |
| <a id="property-from"></a> `from` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L19) |
| <a id="property-thid"></a> `thid?` | `public` | `string` | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L21) |
| <a id="property-to"></a> `to` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L20) |
| <a id="property-type"></a> `type` | `static` | `"https://didcomm.org/basicmessage/2.0/message"` | `ProtocolIds.BasicMessage` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L15) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/other/BasicMessage.ts#L24)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)
