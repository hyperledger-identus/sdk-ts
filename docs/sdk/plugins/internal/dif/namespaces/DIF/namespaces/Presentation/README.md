[**@hyperledger/identus-sdk**](../../../../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../../../../README.md) / [plugins/internal/dif](../../../../README.md) / [DIF](../../README.md) / Presentation

# Presentation

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [Definition](namespaces/Definition/README.md) | - |
| [Submission](namespaces/Submission.md) | - |

## Interfaces

### Definition

Defined in: [src/plugins/internal/dif/types.ts:6](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L6)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="format"></a> `format?` | [`Format`](namespaces/Definition/README.md#format-1) | [src/plugins/internal/dif/types.ts:9](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L9) |
| <a id="id"></a> `id` | `string` | [src/plugins/internal/dif/types.ts:7](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L7) |
| <a id="input_descriptors"></a> `input_descriptors` | [`InputDescriptor`](namespaces/Definition/README.md#inputdescriptor)[] | [src/plugins/internal/dif/types.ts:8](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L8) |

***

### Request

Defined in: [src/plugins/internal/dif/types.ts:55](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L55)

#### Indexable

\[`key`: `string`\]: `any`

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="presentation_definition"></a> `presentation_definition` | [`Definition`](#definition) | [src/plugins/internal/dif/types.ts:56](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L56) |

***

### Submission

Defined in: [src/plugins/internal/dif/types.ts:60](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L60)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="definition_id"></a> `definition_id` | `string` | [src/plugins/internal/dif/types.ts:62](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L62) |
| <a id="descriptor_map"></a> `descriptor_map` | [`DescriptorItem`](namespaces/Submission.md#descriptoritem)[] | [src/plugins/internal/dif/types.ts:63](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L63) |
| <a id="id-1"></a> `id` | `string` | [src/plugins/internal/dif/types.ts:61](https://github.com/hyperledger-identus/sdk-ts/blob/4243600f6763168a55268042deaef84553d9c943/src/plugins/internal/dif/types.ts#L61) |
