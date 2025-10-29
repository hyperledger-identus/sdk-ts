[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [JWK](../README.md) / EC

# Interface: EC

Defined in: [src/domain/models/keyManagement/exportable/JWK.ts:55](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L55)

## Extends

- [`Base`](Base.md)

## Indexable

\[`propName`: `string`\]: `unknown`

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="alg"></a> `alg?` | `string` | - | [`Base`](Base.md).[`alg`](Base.md#alg) | [src/domain/models/keyManagement/exportable/JWK.ts:31](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L31) |
| <a id="crv"></a> `crv` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:58](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L58) |
| <a id="d"></a> `d?` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:60](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L60) |
| <a id="ext"></a> `ext?` | `boolean` | - | [`Base`](Base.md).[`ext`](Base.md#ext) | [src/domain/models/keyManagement/exportable/JWK.ts:33](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L33) |
| <a id="key_ops"></a> `key_ops?` | [`key_ops`](../type-aliases/key_ops.md)[] | - | [`Base`](Base.md).[`key_ops`](Base.md#key_ops) | [src/domain/models/keyManagement/exportable/JWK.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L35) |
| <a id="kid"></a> `kid?` | `string` | - | [`Base`](Base.md).[`kid`](Base.md#kid) | [src/domain/models/keyManagement/exportable/JWK.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L37) |
| <a id="kty"></a> `kty` | `"EC"` | [`Base`](Base.md).[`kty`](Base.md#kty) | - | [src/domain/models/keyManagement/exportable/JWK.ts:56](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L56) |
| <a id="use"></a> `use?` | `"sig"` \| `"enc"` | - | [`Base`](Base.md).[`use`](Base.md#use) | [src/domain/models/keyManagement/exportable/JWK.ts:41](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L41) |
| <a id="x"></a> `x?` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:62](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L62) |
| <a id="x5c"></a> `x5c?` | `string`[] | - | [`Base`](Base.md).[`x5c`](Base.md#x5c) | [src/domain/models/keyManagement/exportable/JWK.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L43) |
| <a id="x5t"></a> `x5t?` | `string` | - | [`Base`](Base.md).[`x5t`](Base.md#x5t) | [src/domain/models/keyManagement/exportable/JWK.ts:45](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L45) |
| <a id="x5ts256"></a> `x5t#S256?` | `string` | - | [`Base`](Base.md).[`x5t#S256`](Base.md#x5ts256) | [src/domain/models/keyManagement/exportable/JWK.ts:47](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L47) |
| <a id="x5u"></a> `x5u?` | `string` | - | [`Base`](Base.md).[`x5u`](Base.md#x5u) | [src/domain/models/keyManagement/exportable/JWK.ts:49](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L49) |
| <a id="y"></a> `y?` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:64](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L64) |
