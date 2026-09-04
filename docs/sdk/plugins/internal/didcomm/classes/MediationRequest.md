[**@hyperledger/identus-sdk v8.1.2**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / MediationRequest

# Class: MediationRequest

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:5](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L5)

## Constructors

### Constructor

> **new MediationRequest**(`from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `id?`: `string`): `MediationRequest`

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L12)

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
| <a id="property-from"></a> `from` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L8) |
| <a id="property-id"></a> `id` | `public` | `string` | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L10) |
| <a id="property-to"></a> `to` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L9) |
| <a id="property-type"></a> `type` | `static` | `"https://didcomm.org/coordinate-mediation/2.0/mediate-request"` | `ProtocolIds.MediationRequest` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L6) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/5a2cd1f0ed4e00a35c63d03f877a5bdce569f623/packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationRequest.ts#L18)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)
