[**@hyperledger/identus-sdk**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / JWK

# JWK

JWK definitions
based on https://www.iana.org/assignments/jose/jose.xhtml

## Interfaces

### Base

Defined in: [src/domain/models/keyManagement/exportable/JWK.ts:29](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L29)

#### Extended by

- [`EC`](#ec)
- [`OCT`](#oct)
- [`OKP`](#okp)
- [`RSA`](#rsa)

#### Indexable

\[`propName`: `string`\]: `unknown`

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="alg"></a> `alg?` | `string` | [src/domain/models/keyManagement/exportable/JWK.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L31) |
| <a id="ext"></a> `ext?` | `boolean` | [src/domain/models/keyManagement/exportable/JWK.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L33) |
| <a id="key_ops"></a> `key_ops?` | [`key_ops`](#key_ops-5)[] | [src/domain/models/keyManagement/exportable/JWK.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L35) |
| <a id="kid"></a> `kid?` | `string` | [src/domain/models/keyManagement/exportable/JWK.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L37) |
| <a id="kty"></a> `kty?` | `string` | [src/domain/models/keyManagement/exportable/JWK.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L39) |
| <a id="use"></a> `use?` | `"sig"` \| `"enc"` | [src/domain/models/keyManagement/exportable/JWK.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L41) |
| <a id="x5c"></a> `x5c?` | `string`[] | [src/domain/models/keyManagement/exportable/JWK.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L43) |
| <a id="x5t"></a> `x5t?` | `string` | [src/domain/models/keyManagement/exportable/JWK.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L45) |
| <a id="x5ts256"></a> `x5t#S256?` | `string` | [src/domain/models/keyManagement/exportable/JWK.ts:47](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L47) |
| <a id="x5u"></a> `x5u?` | `string` | [src/domain/models/keyManagement/exportable/JWK.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L49) |

***

### EC

Defined in: [src/domain/models/keyManagement/exportable/JWK.ts:55](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L55)

#### Extends

- [`Base`](#base)

#### Indexable

\[`propName`: `string`\]: `unknown`

#### Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="alg-1"></a> `alg?` | `string` | - | [`Base`](#base).[`alg`](#alg) | [src/domain/models/keyManagement/exportable/JWK.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L31) |
| <a id="crv"></a> `crv` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:58](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L58) |
| <a id="d"></a> `d?` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:60](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L60) |
| <a id="ext-1"></a> `ext?` | `boolean` | - | [`Base`](#base).[`ext`](#ext) | [src/domain/models/keyManagement/exportable/JWK.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L33) |
| <a id="key_ops-1"></a> `key_ops?` | [`key_ops`](#key_ops-5)[] | - | [`Base`](#base).[`key_ops`](#key_ops) | [src/domain/models/keyManagement/exportable/JWK.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L35) |
| <a id="kid-1"></a> `kid?` | `string` | - | [`Base`](#base).[`kid`](#kid) | [src/domain/models/keyManagement/exportable/JWK.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L37) |
| <a id="kty-1"></a> `kty` | `"EC"` | [`Base`](#base).[`kty`](#kty) | - | [src/domain/models/keyManagement/exportable/JWK.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L56) |
| <a id="use-1"></a> `use?` | `"sig"` \| `"enc"` | - | [`Base`](#base).[`use`](#use) | [src/domain/models/keyManagement/exportable/JWK.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L41) |
| <a id="x"></a> `x?` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:62](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L62) |
| <a id="x5c-1"></a> `x5c?` | `string`[] | - | [`Base`](#base).[`x5c`](#x5c) | [src/domain/models/keyManagement/exportable/JWK.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L43) |
| <a id="x5t-1"></a> `x5t?` | `string` | - | [`Base`](#base).[`x5t`](#x5t) | [src/domain/models/keyManagement/exportable/JWK.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L45) |
| <a id="x5ts256-1"></a> `x5t#S256?` | `string` | - | [`Base`](#base).[`x5t#S256`](#x5ts256) | [src/domain/models/keyManagement/exportable/JWK.ts:47](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L47) |
| <a id="x5u-1"></a> `x5u?` | `string` | - | [`Base`](#base).[`x5u`](#x5u) | [src/domain/models/keyManagement/exportable/JWK.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L49) |
| <a id="y"></a> `y?` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:64](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L64) |

***

### OCT

Defined in: [src/domain/models/keyManagement/exportable/JWK.ts:68](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L68)

#### Extends

- [`Base`](#base)

#### Indexable

\[`propName`: `string`\]: `unknown`

#### Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="alg-2"></a> `alg?` | `string` | - | [`Base`](#base).[`alg`](#alg) | [src/domain/models/keyManagement/exportable/JWK.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L31) |
| <a id="ext-2"></a> `ext?` | `boolean` | - | [`Base`](#base).[`ext`](#ext) | [src/domain/models/keyManagement/exportable/JWK.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L33) |
| <a id="k"></a> `k` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:71](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L71) |
| <a id="key_ops-2"></a> `key_ops?` | [`key_ops`](#key_ops-5)[] | - | [`Base`](#base).[`key_ops`](#key_ops) | [src/domain/models/keyManagement/exportable/JWK.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L35) |
| <a id="kid-2"></a> `kid?` | `string` | - | [`Base`](#base).[`kid`](#kid) | [src/domain/models/keyManagement/exportable/JWK.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L37) |
| <a id="kty-2"></a> `kty` | `"oct"` | [`Base`](#base).[`kty`](#kty) | - | [src/domain/models/keyManagement/exportable/JWK.ts:69](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L69) |
| <a id="use-2"></a> `use?` | `"sig"` \| `"enc"` | - | [`Base`](#base).[`use`](#use) | [src/domain/models/keyManagement/exportable/JWK.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L41) |
| <a id="x5c-2"></a> `x5c?` | `string`[] | - | [`Base`](#base).[`x5c`](#x5c) | [src/domain/models/keyManagement/exportable/JWK.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L43) |
| <a id="x5t-2"></a> `x5t?` | `string` | - | [`Base`](#base).[`x5t`](#x5t) | [src/domain/models/keyManagement/exportable/JWK.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L45) |
| <a id="x5ts256-2"></a> `x5t#S256?` | `string` | - | [`Base`](#base).[`x5t#S256`](#x5ts256) | [src/domain/models/keyManagement/exportable/JWK.ts:47](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L47) |
| <a id="x5u-2"></a> `x5u?` | `string` | - | [`Base`](#base).[`x5u`](#x5u) | [src/domain/models/keyManagement/exportable/JWK.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L49) |

***

### OKP

Defined in: [src/domain/models/keyManagement/exportable/JWK.ts:75](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L75)

#### Extends

- [`Base`](#base)

#### Indexable

\[`propName`: `string`\]: `unknown`

#### Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="alg-3"></a> `alg?` | `string` | - | [`Base`](#base).[`alg`](#alg) | [src/domain/models/keyManagement/exportable/JWK.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L31) |
| <a id="crv-1"></a> `crv` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:78](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L78) |
| <a id="d-1"></a> `d?` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:80](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L80) |
| <a id="ext-3"></a> `ext?` | `boolean` | - | [`Base`](#base).[`ext`](#ext) | [src/domain/models/keyManagement/exportable/JWK.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L33) |
| <a id="key_ops-3"></a> `key_ops?` | [`key_ops`](#key_ops-5)[] | - | [`Base`](#base).[`key_ops`](#key_ops) | [src/domain/models/keyManagement/exportable/JWK.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L35) |
| <a id="kid-3"></a> `kid?` | `string` | - | [`Base`](#base).[`kid`](#kid) | [src/domain/models/keyManagement/exportable/JWK.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L37) |
| <a id="kty-3"></a> `kty` | `"OKP"` | [`Base`](#base).[`kty`](#kty) | - | [src/domain/models/keyManagement/exportable/JWK.ts:76](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L76) |
| <a id="use-3"></a> `use?` | `"sig"` \| `"enc"` | - | [`Base`](#base).[`use`](#use) | [src/domain/models/keyManagement/exportable/JWK.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L41) |
| <a id="x-1"></a> `x` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:82](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L82) |
| <a id="x5c-3"></a> `x5c?` | `string`[] | - | [`Base`](#base).[`x5c`](#x5c) | [src/domain/models/keyManagement/exportable/JWK.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L43) |
| <a id="x5t-3"></a> `x5t?` | `string` | - | [`Base`](#base).[`x5t`](#x5t) | [src/domain/models/keyManagement/exportable/JWK.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L45) |
| <a id="x5ts256-3"></a> `x5t#S256?` | `string` | - | [`Base`](#base).[`x5t#S256`](#x5ts256) | [src/domain/models/keyManagement/exportable/JWK.ts:47](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L47) |
| <a id="x5u-3"></a> `x5u?` | `string` | - | [`Base`](#base).[`x5u`](#x5u) | [src/domain/models/keyManagement/exportable/JWK.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L49) |

***

### RSA

Defined in: [src/domain/models/keyManagement/exportable/JWK.ts:86](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L86)

#### Extends

- [`Base`](#base)

#### Indexable

\[`propName`: `string`\]: `unknown`

#### Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="alg-4"></a> `alg?` | `string` | - | [`Base`](#base).[`alg`](#alg) | [src/domain/models/keyManagement/exportable/JWK.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L31) |
| <a id="d-2"></a> `d` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:88](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L88) |
| <a id="dp"></a> `dp` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:89](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L89) |
| <a id="dq"></a> `dq` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:90](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L90) |
| <a id="e"></a> `e` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:91](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L91) |
| <a id="ext-4"></a> `ext?` | `boolean` | - | [`Base`](#base).[`ext`](#ext) | [src/domain/models/keyManagement/exportable/JWK.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L33) |
| <a id="key_ops-4"></a> `key_ops?` | [`key_ops`](#key_ops-5)[] | - | [`Base`](#base).[`key_ops`](#key_ops) | [src/domain/models/keyManagement/exportable/JWK.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L35) |
| <a id="kid-4"></a> `kid?` | `string` | - | [`Base`](#base).[`kid`](#kid) | [src/domain/models/keyManagement/exportable/JWK.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L37) |
| <a id="kty-4"></a> `kty` | `"RSA"` | [`Base`](#base).[`kty`](#kty) | - | [src/domain/models/keyManagement/exportable/JWK.ts:87](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L87) |
| <a id="n"></a> `n` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:92](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L92) |
| <a id="oth"></a> `oth` | \{ `d?`: `string`; `r?`: `string`; `t?`: `string`; \}[] | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:93](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L93) |
| <a id="p"></a> `p` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:98](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L98) |
| <a id="q"></a> `q` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:99](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L99) |
| <a id="qi"></a> `qi` | `string` | - | - | [src/domain/models/keyManagement/exportable/JWK.ts:100](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L100) |
| <a id="use-4"></a> `use?` | `"sig"` \| `"enc"` | - | [`Base`](#base).[`use`](#use) | [src/domain/models/keyManagement/exportable/JWK.ts:41](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L41) |
| <a id="x5c-4"></a> `x5c?` | `string`[] | - | [`Base`](#base).[`x5c`](#x5c) | [src/domain/models/keyManagement/exportable/JWK.ts:43](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L43) |
| <a id="x5t-4"></a> `x5t?` | `string` | - | [`Base`](#base).[`x5t`](#x5t) | [src/domain/models/keyManagement/exportable/JWK.ts:45](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L45) |
| <a id="x5ts256-4"></a> `x5t#S256?` | `string` | - | [`Base`](#base).[`x5t#S256`](#x5ts256) | [src/domain/models/keyManagement/exportable/JWK.ts:47](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L47) |
| <a id="x5u-4"></a> `x5u?` | `string` | - | [`Base`](#base).[`x5u`](#x5u) | [src/domain/models/keyManagement/exportable/JWK.ts:49](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L49) |

## Type Aliases

### key\_ops

> **key\_ops** = `"sign"` \| `"verify"` \| `"encrypt"` \| `"decrypt"` \| `"wrapKey"` \| `"unwrapKey"` \| `"deriveKey"` \| `"deriveBits"`

Defined in: [src/domain/models/keyManagement/exportable/JWK.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L18)

## Functions

### fromKey()

> **fromKey**(`key`: [`PublicKey`](../README.md#publickey-3) \| [`PrivateKey`](../README.md#privatekey-2), `base`: [`Base`](#base)): [`JWK`](../README.md#jwk)

Defined in: [src/domain/models/keyManagement/exportable/JWK.ts:111](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/domain/models/keyManagement/exportable/JWK.ts#L111)

create a JWK from a given Key

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | [`PublicKey`](../README.md#publickey-3) \| [`PrivateKey`](../README.md#privatekey-2) |  |
| `base` | [`Base`](#base) | set of JWK properties to be added |

#### Returns

[`JWK`](../README.md#jwk)
