[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Castor

# Interface: Castor

Defined in: [src/domain/buildingBlocks/Castor.ts:4](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Castor.ts#L4)

## Methods

### createPeerDID() {#createpeerdid}

> **createPeerDID**(`publicKeys`: [`PublicKey`](../classes/PublicKey.md)[], `services`: [`Service`](../namespaces/DIDDocument/classes/Service.md)[]): `Promise`\<[`DID`](../classes/DID.md)\>

Defined in: [src/domain/buildingBlocks/Castor.ts:11](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Castor.ts#L11)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `publicKeys` | [`PublicKey`](../classes/PublicKey.md)[] |
| `services` | [`Service`](../namespaces/DIDDocument/classes/Service.md)[] |

#### Returns

`Promise`\<[`DID`](../classes/DID.md)\>

***

### createPrismDID() {#createprismdid}

> **createPrismDID**(`masterPublicKey`: [`PublicKey`](../classes/PublicKey.md), `services?`: [`Service`](../namespaces/DIDDocument/classes/Service.md)[], `authenticationKeys?`: ([`PublicKey`](../classes/PublicKey.md) \| [`KeyPair`](../classes/KeyPair.md))[]): `Promise`\<[`DID`](../classes/DID.md)\>

Defined in: [src/domain/buildingBlocks/Castor.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Castor.ts#L6)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `masterPublicKey` | [`PublicKey`](../classes/PublicKey.md) |
| `services?` | [`Service`](../namespaces/DIDDocument/classes/Service.md)[] |
| `authenticationKeys?` | ([`PublicKey`](../classes/PublicKey.md) \| [`KeyPair`](../classes/KeyPair.md))[] |

#### Returns

`Promise`\<[`DID`](../classes/DID.md)\>

***

### getEcnumbasis() {#getecnumbasis}

> **getEcnumbasis**(`did`: [`DID`](../classes/DID.md), `publicKey`: [`PublicKey`](../classes/PublicKey.md)): `string`

Defined in: [src/domain/buildingBlocks/Castor.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Castor.ts#L21)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../classes/DID.md) |
| `publicKey` | [`PublicKey`](../classes/PublicKey.md) |

#### Returns

`string`

***

### parseDID() {#parsedid}

> **parseDID**(`did`: `string`): [`DID`](../classes/DID.md)

Defined in: [src/domain/buildingBlocks/Castor.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Castor.ts#L5)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | `string` |

#### Returns

[`DID`](../classes/DID.md)

***

### resolveDID() {#resolvedid}

> **resolveDID**(`did`: `string` \| [`DID`](../classes/DID.md)): `Promise`\<[`DIDDocument`](../classes/DIDDocument.md)\>

Defined in: [src/domain/buildingBlocks/Castor.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Castor.ts#L15)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | `string` \| [`DID`](../classes/DID.md) |

#### Returns

`Promise`\<[`DIDDocument`](../classes/DIDDocument.md)\>

***

### verifySignature() {#verifysignature}

> **verifySignature**(`did`: [`DID`](../classes/DID.md), `challenge`: `Uint8Array`, `signature`: `Uint8Array`): `Promise`\<`boolean`\>

Defined in: [src/domain/buildingBlocks/Castor.ts:16](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Castor.ts#L16)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `did` | [`DID`](../classes/DID.md) |
| `challenge` | `Uint8Array` |
| `signature` | `Uint8Array` |

#### Returns

`Promise`\<`boolean`\>
