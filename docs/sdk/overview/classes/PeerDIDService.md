[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / PeerDIDService

# Class: PeerDIDService

Defined in: [packages/lib/sdk/src/castor/methods/peer/PeerDID.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/PeerDID.ts#L8)

Provides functionality to transfrom peerDIDServices from our interfaces into DIDComm module ones

## Constructors

### Constructor

> **new PeerDIDService**(`type`: `string`, `serviceEndpoint`: `string`, `routingKeys?`: `string`[], `accept?`: `string`[]): `PeerDIDService`

Defined in: [packages/lib/sdk/src/castor/methods/peer/PeerDID.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/PeerDID.ts#L14)

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
| <a id="property-accept"></a> `accept?` | `readonly` | `string`[] | `undefined` | [packages/lib/sdk/src/castor/methods/peer/PeerDID.ts:12](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/PeerDID.ts#L12) |
| <a id="property-routingkeys"></a> `routingKeys?` | `readonly` | `string`[] | `undefined` | [packages/lib/sdk/src/castor/methods/peer/PeerDID.ts:11](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/PeerDID.ts#L11) |
| <a id="property-serviceendpoint"></a> `serviceEndpoint` | `readonly` | `string` | `undefined` | [packages/lib/sdk/src/castor/methods/peer/PeerDID.ts:10](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/PeerDID.ts#L10) |
| <a id="property-type"></a> `type` | `readonly` | `string` | `undefined` | [packages/lib/sdk/src/castor/methods/peer/PeerDID.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/PeerDID.ts#L9) |
| <a id="property-codingkeys"></a> `CodingKeys` | `readonly` | \{ `accept`: `string`; `routingKeys`: `string`; `serviceEndpoint`: `string`; `type`: `string`; \} | `undefined` | [packages/lib/sdk/src/castor/methods/peer/PeerDID.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/PeerDID.ts#L29) |
| `CodingKeys.accept` | `public` | `string` | `"a"` | [packages/lib/sdk/src/castor/methods/peer/PeerDID.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/PeerDID.ts#L33) |
| `CodingKeys.routingKeys` | `public` | `string` | `"r"` | [packages/lib/sdk/src/castor/methods/peer/PeerDID.ts:32](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/PeerDID.ts#L32) |
| `CodingKeys.serviceEndpoint` | `public` | `string` | `"s"` | [packages/lib/sdk/src/castor/methods/peer/PeerDID.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/PeerDID.ts#L31) |
| `CodingKeys.type` | `public` | `string` | `"t"` | [packages/lib/sdk/src/castor/methods/peer/PeerDID.ts:30](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/PeerDID.ts#L30) |
| <a id="property-didcommmessagingencodedkey"></a> `DIDCommMessagingEncodedKey` | `readonly` | `"dm"` | `"dm"` | [packages/lib/sdk/src/castor/methods/peer/PeerDID.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/PeerDID.ts#L27) |
| <a id="property-didcommmessagingkey"></a> `DIDCommMessagingKey` | `readonly` | `"DIDCommMessaging"` | `"DIDCommMessaging"` | [packages/lib/sdk/src/castor/methods/peer/PeerDID.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/PeerDID.ts#L26) |

## Methods

### encode() {#encode}

> **encode**(): [`PeerDIDEncoded`](../interfaces/PeerDIDEncoded.md)

Defined in: [packages/lib/sdk/src/castor/methods/peer/PeerDID.ts:36](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/PeerDID.ts#L36)

#### Returns

[`PeerDIDEncoded`](../interfaces/PeerDIDEncoded.md)

***

### decode() {#decode}

> `static` **decode**(`encoded`: [`PeerDIDEncoded`](../interfaces/PeerDIDEncoded.md)): `PeerDIDService`

Defined in: [packages/lib/sdk/src/castor/methods/peer/PeerDID.ts:50](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/castor/methods/peer/PeerDID.ts#L50)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `encoded` | [`PeerDIDEncoded`](../interfaces/PeerDIDEncoded.md) |

#### Returns

`PeerDIDService`
