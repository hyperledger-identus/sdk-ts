[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/oea](../README.md) / HandshakeRequest

# Class: HandshakeRequest

Defined in: [packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts:17](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L17)

## Constructors

### Constructor

> **new HandshakeRequest**(`body`: [`HandshakeRequestBody`](../interfaces/HandshakeRequestBody.md), `from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `thid?`: `string`, `id?`: `string`): `HandshakeRequest`

Defined in: [packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `body` | [`HandshakeRequestBody`](../interfaces/HandshakeRequestBody.md) |
| `from` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `to` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `thid?` | `string` |
| `id?` | `string` |

#### Returns

`HandshakeRequest`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-body"></a> `body` | `public` | [`HandshakeRequestBody`](../interfaces/HandshakeRequestBody.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L21) |
| <a id="property-from"></a> `from` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L22) |
| <a id="property-id"></a> `id` | `public` | `string` | `undefined` | [packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L25) |
| <a id="property-thid"></a> `thid?` | `public` | `string` | `undefined` | [packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L24) |
| <a id="property-to"></a> `to` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L23) |
| <a id="property-type"></a> `type` | `static` | `"https://atalaprism.io/mercury/connections/1.0/request"` | `OEA.ProtocolIds.ConnectionRequest` | [packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L18) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L28)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

***

### fromMessage() {#frommessage}

> `static` **fromMessage**(`msg`: [`Message`](../../../../overview/namespaces/Domain/classes/Message.md), `from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md)): `HandshakeRequest`

Defined in: [packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts:40](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L40)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `msg` | [`Message`](../../../../overview/namespaces/Domain/classes/Message.md) |
| `from` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |

#### Returns

`HandshakeRequest`

***

### fromOutOfBand() {#fromoutofband}

> `static` **fromOutOfBand**(`inviteMessage`: [`OutOfBandInvitation`](../../didcomm/classes/OutOfBandInvitation.md), `from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md)): `HandshakeRequest`

Defined in: [packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts:67](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/oea/protocols/HandshakeRequest.ts#L67)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `inviteMessage` | [`OutOfBandInvitation`](../../didcomm/classes/OutOfBandInvitation.md) |
| `from` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |

#### Returns

`HandshakeRequest`
