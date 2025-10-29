[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / KeyProperties

# Enumeration: KeyProperties

Defined in: [src/domain/models/KeyProperties.ts:1](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/KeyProperties.ts#L1)

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="algorithm"></a> `algorithm` | `"algorithm"` | The 'algorithm' corresponds to the cryptographic algorithm associated with the key. | [src/domain/models/KeyProperties.ts:5](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/KeyProperties.ts#L5) |
| <a id="chaincode"></a> `chainCode` | `"chainCode"` | The 'chainCode' used for key derivation. hex encoded value. `const chainCode = Buffer.from(props[KeyProperties.chainCode], "hex");` | [src/domain/models/KeyProperties.ts:30](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/KeyProperties.ts#L30) |
| <a id="curve"></a> `curve` | `"curve"` | The 'curve' represents the elliptic curve used for an elliptic-curve key. | [src/domain/models/KeyProperties.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/KeyProperties.ts#L10) |
| <a id="curvepointx"></a> `curvePointX` | `"curvePoint.x"` | The 'curvePointX' represents the x-coordinate of a curve point for an elliptic-curve key. | [src/domain/models/KeyProperties.ts:46](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/KeyProperties.ts#L46) |
| <a id="curvepointy"></a> `curvePointY` | `"curvePoint.y"` | The 'curvePointY' represents the y-coordinate of a curve point for an elliptic-curve key. | [src/domain/models/KeyProperties.ts:51](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/KeyProperties.ts#L51) |
| <a id="derivationpath"></a> `derivationPath` | `"derivationPath"` | The 'derivationPath' refers to the path used to derive a key in a hierarchical deterministic (HD) key generation scheme. | [src/domain/models/KeyProperties.ts:40](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/KeyProperties.ts#L40) |
| <a id="derivationschema"></a> `derivationSchema` | `"derivationSchema"` | The 'derivationSchema' corresponds to derivationSchema used. | [src/domain/models/KeyProperties.ts:20](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/KeyProperties.ts#L20) |
| <a id="index"></a> `index` | `"index"` | - | [src/domain/models/KeyProperties.ts:41](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/KeyProperties.ts#L41) |
| <a id="rawkey"></a> `rawKey` | `"raw"` | The 'rawKey' refers to the raw binary form of the key. | [src/domain/models/KeyProperties.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/KeyProperties.ts#L35) |
| <a id="seed"></a> `seed` | `"seed"` | The 'seed' corresponds to the seed value from which a key is derived. | [src/domain/models/KeyProperties.ts:15](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/KeyProperties.ts#L15) |
