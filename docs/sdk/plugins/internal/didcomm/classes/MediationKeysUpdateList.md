[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [plugins/internal/didcomm](../README.md) / MediationKeysUpdateList

# Class: MediationKeysUpdateList

Defined in: [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:19](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L19)

## Constructors

### Constructor

> **new MediationKeysUpdateList**(`from`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `to`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md), `recipientDids`: [`DID`](../../../../overview/namespaces/Domain/classes/DID.md)[], `id`: `string`): `MediationKeysUpdateList`

Defined in: [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L27)

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
| <a id="body"></a> `body` | `public` | [`MediationKeysUpdateListBody`](../interfaces/MediationKeysUpdateListBody.md) | `undefined` | [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:22](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L22) |
| <a id="from"></a> `from` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L23) |
| <a id="id"></a> `id` | `public` | `string` | `undefined` | [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:25](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L25) |
| <a id="to"></a> `to` | `public` | [`DID`](../../../../overview/namespaces/Domain/classes/DID.md) | `undefined` | [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:24](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L24) |
| <a id="type"></a> `type` | `static` | `"https://didcomm.org/coordinate-mediation/2.0/keylist-update"` | `ProtocolIds.MediationKeysUpdate` | [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L20) |

## Methods

### makeMessage() {#makemessage}

> **makeMessage**(): [`Message`](../../../../overview/namespaces/Domain/classes/Message.md)

Defined in: [src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts:39](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/plugins/internal/didcomm/protocols/mediation/MediationKeysUpdateList.ts#L39)

#### Returns

[`Message`](../../../../overview/namespaces/Domain/classes/Message.md)
