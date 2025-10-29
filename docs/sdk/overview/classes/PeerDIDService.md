[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PeerDIDService

# Class: PeerDIDService

Defined in: [src/peer-did/PeerDID.ts:47](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/peer-did/PeerDID.ts#L47)

Provides functionality to transfrom peerDIDServices from our interfaces into DIDComm module ones

## Constructors

### Constructor

> **new PeerDIDService**(`type`: `string`, `serviceEndpoint`: `string`, `routingKeys?`: `string`[], `accept?`: `string`[]): `PeerDIDService`

Defined in: [src/peer-did/PeerDID.ts:53](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/peer-did/PeerDID.ts#L53)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `serviceEndpoint` | `string` |
| `routingKeys?` | `string`[] |
| `accept?` | `string`[] |

#### Returns

`PeerDIDService`

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="accept"></a> `accept?` | `readonly` | `string`[] | `undefined` | [src/peer-did/PeerDID.ts:51](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/peer-did/PeerDID.ts#L51) |
| <a id="routingkeys"></a> `routingKeys?` | `readonly` | `string`[] | `undefined` | [src/peer-did/PeerDID.ts:50](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/peer-did/PeerDID.ts#L50) |
| <a id="serviceendpoint"></a> `serviceEndpoint` | `readonly` | `string` | `undefined` | [src/peer-did/PeerDID.ts:49](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/peer-did/PeerDID.ts#L49) |
| <a id="type"></a> `type` | `readonly` | `string` | `undefined` | [src/peer-did/PeerDID.ts:48](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/peer-did/PeerDID.ts#L48) |
| <a id="codingkeys"></a> `CodingKeys` | `readonly` | \{ `accept`: `string`; `routingKeys`: `string`; `serviceEndpoint`: `string`; `type`: `string`; \} | `undefined` | [src/peer-did/PeerDID.ts:68](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/peer-did/PeerDID.ts#L68) |
| `CodingKeys.accept` | `public` | `string` | `"a"` | [src/peer-did/PeerDID.ts:72](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/peer-did/PeerDID.ts#L72) |
| `CodingKeys.routingKeys` | `public` | `string` | `"r"` | [src/peer-did/PeerDID.ts:71](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/peer-did/PeerDID.ts#L71) |
| `CodingKeys.serviceEndpoint` | `public` | `string` | `"s"` | [src/peer-did/PeerDID.ts:70](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/peer-did/PeerDID.ts#L70) |
| `CodingKeys.type` | `public` | `string` | `"t"` | [src/peer-did/PeerDID.ts:69](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/peer-did/PeerDID.ts#L69) |
| <a id="didcommmessagingencodedkey"></a> `DIDCommMessagingEncodedKey` | `readonly` | `"dm"` | `"dm"` | [src/peer-did/PeerDID.ts:66](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/peer-did/PeerDID.ts#L66) |
| <a id="didcommmessagingkey"></a> `DIDCommMessagingKey` | `readonly` | `"DIDCommMessaging"` | `"DIDCommMessaging"` | [src/peer-did/PeerDID.ts:65](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/peer-did/PeerDID.ts#L65) |

## Methods

### encode() {#encode}

> **encode**(): [`PeerDIDEncoded`](../interfaces/PeerDIDEncoded.md)

Defined in: [src/peer-did/PeerDID.ts:75](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/peer-did/PeerDID.ts#L75)

#### Returns

[`PeerDIDEncoded`](../interfaces/PeerDIDEncoded.md)

***

### decode() {#decode}

> `static` **decode**(`encoded`: [`PeerDIDEncoded`](../interfaces/PeerDIDEncoded.md)): `PeerDIDService`

Defined in: [src/peer-did/PeerDID.ts:89](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/peer-did/PeerDID.ts#L89)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `encoded` | [`PeerDIDEncoded`](../interfaces/PeerDIDEncoded.md) |

#### Returns

`PeerDIDService`
