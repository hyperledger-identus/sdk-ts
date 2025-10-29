[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [JWK](../README.md) / Base

# Interface: Base

Defined in: [src/domain/models/keyManagement/exportable/JWK.ts:29](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L29)

## Extended by

- [`EC`](EC.md)
- [`OCT`](OCT.md)
- [`OKP`](OKP.md)
- [`RSA`](RSA.md)

## Indexable

\[`propName`: `string`\]: `unknown`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="alg"></a> `alg?` | `string` | [src/domain/models/keyManagement/exportable/JWK.ts:31](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L31) |
| <a id="ext"></a> `ext?` | `boolean` | [src/domain/models/keyManagement/exportable/JWK.ts:33](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L33) |
| <a id="key_ops"></a> `key_ops?` | [`key_ops`](../type-aliases/key_ops.md)[] | [src/domain/models/keyManagement/exportable/JWK.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L35) |
| <a id="kid"></a> `kid?` | `string` | [src/domain/models/keyManagement/exportable/JWK.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L37) |
| <a id="kty"></a> `kty?` | `string` | [src/domain/models/keyManagement/exportable/JWK.ts:39](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L39) |
| <a id="use"></a> `use?` | `"sig"` \| `"enc"` | [src/domain/models/keyManagement/exportable/JWK.ts:41](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L41) |
| <a id="x5c"></a> `x5c?` | `string`[] | [src/domain/models/keyManagement/exportable/JWK.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L43) |
| <a id="x5t"></a> `x5t?` | `string` | [src/domain/models/keyManagement/exportable/JWK.ts:45](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L45) |
| <a id="x5ts256"></a> `x5t#S256?` | `string` | [src/domain/models/keyManagement/exportable/JWK.ts:47](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L47) |
| <a id="x5u"></a> `x5u?` | `string` | [src/domain/models/keyManagement/exportable/JWK.ts:49](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L49) |
