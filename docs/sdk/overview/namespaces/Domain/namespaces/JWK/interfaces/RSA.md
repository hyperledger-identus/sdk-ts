[**@hyperledger/identus-sdk v7.0.0**](../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../README.md) / [overview](../../../../../README.md) / [Domain](../../../README.md) / [JWK](../README.md) / RSA

# Interface: RSA

Defined in: [src/domain/models/keyManagement/exportable/JWK.ts:86](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L86)

## Extends

- [`Base`](Base.md)

## Indexable

\[`propName`: `string`\]: `unknown`

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="alg"></a> `alg?` | `string` | - | [`Base`](Base.md).[`alg`](Base.md#alg) | [src/domain/models/keyManagement/exportable/JWK.ts:31](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L31) |
| <a id="d"></a> `d` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:88](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L88) |
| <a id="dp"></a> `dp` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:89](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L89) |
| <a id="dq"></a> `dq` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:90](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L90) |
| <a id="e"></a> `e` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:91](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L91) |
| <a id="ext"></a> `ext?` | `boolean` | - | [`Base`](Base.md).[`ext`](Base.md#ext) | [src/domain/models/keyManagement/exportable/JWK.ts:33](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L33) |
| <a id="key_ops"></a> `key_ops?` | [`key_ops`](../type-aliases/key_ops.md)[] | - | [`Base`](Base.md).[`key_ops`](Base.md#key_ops) | [src/domain/models/keyManagement/exportable/JWK.ts:35](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L35) |
| <a id="kid"></a> `kid?` | `string` | - | [`Base`](Base.md).[`kid`](Base.md#kid) | [src/domain/models/keyManagement/exportable/JWK.ts:37](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L37) |
| <a id="kty"></a> `kty` | `"RSA"` | [`Base`](Base.md).[`kty`](Base.md#kty) | - | [src/domain/models/keyManagement/exportable/JWK.ts:87](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L87) |
| <a id="n"></a> `n` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:92](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L92) |
| <a id="oth"></a> `oth` | \{ `d?`: `string`; `r?`: `string`; `t?`: `string`; \}[] | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:93](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L93) |
| <a id="p"></a> `p` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:98](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L98) |
| <a id="q"></a> `q` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:99](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L99) |
| <a id="qi"></a> `qi` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:100](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L100) |
| <a id="use"></a> `use?` | `"sig"` \| `"enc"` | - | [`Base`](Base.md).[`use`](Base.md#use) | [src/domain/models/keyManagement/exportable/JWK.ts:41](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L41) |
| <a id="x5c"></a> `x5c?` | `string`[] | - | [`Base`](Base.md).[`x5c`](Base.md#x5c) | [src/domain/models/keyManagement/exportable/JWK.ts:43](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L43) |
| <a id="x5t"></a> `x5t?` | `string` | - | [`Base`](Base.md).[`x5t`](Base.md#x5t) | [src/domain/models/keyManagement/exportable/JWK.ts:45](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L45) |
| <a id="x5ts256"></a> `x5t#S256?` | `string` | - | [`Base`](Base.md).[`x5t#S256`](Base.md#x5ts256) | [src/domain/models/keyManagement/exportable/JWK.ts:47](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L47) |
| <a id="x5u"></a> `x5u?` | `string` | - | [`Base`](Base.md).[`x5u`](Base.md#x5u) | [src/domain/models/keyManagement/exportable/JWK.ts:49](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/models/keyManagement/exportable/JWK.ts#L49) |
