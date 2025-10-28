[**@hyperledger/identus-sdk**](../../../../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../../../../README.md) / [plugins/internal/dif](../../../../../../README.md) / [DIF](../../../../README.md) / [Presentation](../../README.md) / Definition

# Definition

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [Field](namespaces/Field.md) | - |

## Interfaces

### Constraints

Defined in: [src/plugins/internal/dif/types.ts:26](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L26)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="fields"></a> `fields` | [`Field`](#field)[] | [src/plugins/internal/dif/types.ts:27](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L27) |
| <a id="limit_disclosure"></a> `limit_disclosure` | [`InputLimitDisclosure`](#inputlimitdisclosure) | [src/plugins/internal/dif/types.ts:28](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L28) |

***

### Field

Defined in: [src/plugins/internal/dif/types.ts:33](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L33)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="filter"></a> `filter?` | [`Filter`](namespaces/Field.md#filter) | [src/plugins/internal/dif/types.ts:38](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L38) |
| <a id="id"></a> `id?` | `string` | [src/plugins/internal/dif/types.ts:35](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L35) |
| <a id="name"></a> `name?` | `string` | [src/plugins/internal/dif/types.ts:37](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L37) |
| <a id="optional"></a> `optional?` | `boolean` | [src/plugins/internal/dif/types.ts:39](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L39) |
| <a id="path"></a> `path` | `string`[] | [src/plugins/internal/dif/types.ts:34](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L34) |
| <a id="purpose"></a> `purpose?` | `string` | [src/plugins/internal/dif/types.ts:36](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L36) |

***

### InputDescriptor

Defined in: [src/plugins/internal/dif/types.ts:18](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L18)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="constraints-1"></a> `constraints` | [`Constraints`](#constraints) | [src/plugins/internal/dif/types.ts:20](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L20) |
| <a id="format"></a> `format?` | [`Format`](#format-1) | [src/plugins/internal/dif/types.ts:23](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L23) |
| <a id="id-1"></a> `id` | `string` | [src/plugins/internal/dif/types.ts:19](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L19) |
| <a id="name-1"></a> `name?` | `string` | [src/plugins/internal/dif/types.ts:21](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L21) |
| <a id="purpose-1"></a> `purpose?` | `string` | [src/plugins/internal/dif/types.ts:22](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L22) |

## Type Aliases

### Format

> **Format** = \{ `jwt?`: \{ `alg`: `string`[]; \}; `sdjwt?`: \{ `alg`: `string`[]; \}; \}

Defined in: [src/plugins/internal/dif/types.ts:13](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L13)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="jwt"></a> `jwt?` | \{ `alg`: `string`[]; \} | [src/plugins/internal/dif/types.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L14) |
| `jwt.alg` | `string`[] | [src/plugins/internal/dif/types.ts:14](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L14) |
| <a id="sdjwt"></a> `sdjwt?` | \{ `alg`: `string`[]; \} | [src/plugins/internal/dif/types.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L15) |
| `sdjwt.alg` | `string`[] | [src/plugins/internal/dif/types.ts:15](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L15) |

***

### InputLimitDisclosure

> **InputLimitDisclosure** = `"required"` \| `"preferred"`

Defined in: [src/plugins/internal/dif/types.ts:31](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L31)

***

### PredicateType

> **PredicateType** = `string` \| `number`

Defined in: [src/plugins/internal/dif/types.ts:52](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L52)
