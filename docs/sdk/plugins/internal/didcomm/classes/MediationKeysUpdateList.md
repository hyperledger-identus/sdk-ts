[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / MediationKeysUpdateList

# Class: MediationKeysUpdateList

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L19)

## Constructors

### Constructor

> **new MediationKeysUpdateList**(`from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `recipientDids`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md)[], `id?`: `string`): `MediationKeysUpdateList`

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L27)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `from` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `to` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) |
| `recipientDids` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md)[] |
| `id` | `string` |

#### Returns

`MediationKeysUpdateList`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-body"></a> `body` | `public` | [`MediationKeysUpdateListBody`](../interfaces/MediationKeysUpdateListBody.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L22) |
| <a id="property-from"></a> `from` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L23) |
| <a id="property-id"></a> `id` | `public` | `string` | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:25](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L25) |
| <a id="property-to"></a> `to` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:24](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L24) |
| <a id="property-type"></a> `type` | `static` | `"https://didcomm.org/coordinate-mediation/2.0/keylist-update"` | `ProtocolIds.MediationKeysUpdate` | [packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L20) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L39)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)
