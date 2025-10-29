[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / MediationRequest

# Class: MediationRequest

Defined in: [src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L5)

## Constructors

### Constructor

> **new MediationRequest**(`from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `id`: `string`): `MediationRequest`

Defined in: [src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:12](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L12)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `from` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `to` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `id` | `string` |

#### Returns

`MediationRequest`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="from"></a> `from` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L8) |
| <a id="id"></a> `id` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L10) |
| <a id="to"></a> `to` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L9) |
| <a id="type"></a> `type` | `static` | `"https://didcomm.org/coordinate-mediation/2.0/mediate-request"` | `ProtocolIds.MediationRequest` | [src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L6) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:18](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L18)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)
