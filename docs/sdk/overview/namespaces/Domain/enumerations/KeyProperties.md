[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / KeyProperties

# Enumeration: KeyProperties

Defined in: packages/shared/domain/build/index.d.ts:548

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="enumeration-member-algorithm"></a> `algorithm` | `"algorithm"` | The 'algorithm' corresponds to the cryptographic algorithm associated with the key. | packages/shared/domain/build/index.d.ts:556 |
| <a id="enumeration-member-chaincode"></a> `chainCode` | `"chainCode"` | The 'chainCode' used for key derivation. hex encoded value. `const chainCode = Buffer.from(props[KeyProperties.chainCode], "hex");` | packages/shared/domain/build/index.d.ts:577 |
| <a id="enumeration-member-curve"></a> `curve` | `"curve"` | The 'curve' represents the elliptic curve used for an elliptic-curve key. | packages/shared/domain/build/index.d.ts:560 |
| <a id="enumeration-member-curvepointx"></a> `curvePointX` | `"curvePoint.x"` | The 'curvePointX' represents the x-coordinate of a curve point for an elliptic-curve key. | packages/shared/domain/build/index.d.ts:590 |
| <a id="enumeration-member-curvepointy"></a> `curvePointY` | `"curvePoint.y"` | The 'curvePointY' represents the y-coordinate of a curve point for an elliptic-curve key. | packages/shared/domain/build/index.d.ts:594 |
| <a id="enumeration-member-derivationpath"></a> `derivationPath` | `"derivationPath"` | The 'derivationPath' refers to the path used to derive a key in a hierarchical deterministic (HD) key generation scheme. | packages/shared/domain/build/index.d.ts:585 |
| <a id="enumeration-member-derivationschema"></a> `derivationSchema` | `"derivationSchema"` | The 'derivationSchema' corresponds to derivationSchema used. | packages/shared/domain/build/index.d.ts:568 |
| <a id="enumeration-member-index"></a> `index` | `"index"` | - | packages/shared/domain/build/index.d.ts:586 |
| <a id="enumeration-member-rawkey"></a> `rawKey` | `"raw"` | The 'rawKey' refers to the raw binary form of the key. | packages/shared/domain/build/index.d.ts:581 |
| <a id="enumeration-member-seed"></a> `seed` | `"seed"` | The 'seed' corresponds to the seed value from which a key is derived. | packages/shared/domain/build/index.d.ts:564 |
| <a id="enumeration-member-type"></a> `type` | `"type"` | The 'type' corresponds to the type of key. | packages/shared/domain/build/index.d.ts:552 |
