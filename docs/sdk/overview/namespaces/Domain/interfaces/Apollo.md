[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Apollo

# Interface: Apollo

Defined in: [src/domain/buildingBlocks/Apollo.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Apollo.ts#L6)

## Methods

### createPrivateKey() {#createprivatekey}

> **createPrivateKey**(`parameters`: \{\[`name`: `string`\]: `any`; \}): [`PrivateKey`](../classes/PrivateKey.md)

Defined in: [src/domain/buildingBlocks/Apollo.ts:10](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Apollo.ts#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `parameters` | \{\[`name`: `string`\]: `any`; \} |

#### Returns

[`PrivateKey`](../classes/PrivateKey.md)

***

### createPublicKey() {#createpublickey}

> **createPublicKey**(`parameters`: \{\[`name`: `string`\]: `any`; \}): [`PublicKey`](../classes/PublicKey.md)

Defined in: [src/domain/buildingBlocks/Apollo.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Apollo.ts#L13)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `parameters` | \{\[`name`: `string`\]: `any`; \} |

#### Returns

[`PublicKey`](../classes/PublicKey.md)

***

### createRandomMnemonics() {#createrandommnemonics}

> **createRandomMnemonics**(): [`MnemonicWordList`](../type-aliases/MnemonicWordList.md)

Defined in: [src/domain/buildingBlocks/Apollo.ts:7](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Apollo.ts#L7)

#### Returns

[`MnemonicWordList`](../type-aliases/MnemonicWordList.md)

***

### createRandomSeed() {#createrandomseed}

> **createRandomSeed**(`passphrase?`: `string`): [`SeedWords`](SeedWords.md)

Defined in: [src/domain/buildingBlocks/Apollo.ts:9](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Apollo.ts#L9)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `passphrase?` | `string` |

#### Returns

[`SeedWords`](SeedWords.md)

***

### createSeed() {#createseed}

> **createSeed**(`mnemonics`: [`MnemonicWordList`](../type-aliases/MnemonicWordList.md), `passphrase`: `string`): [`Seed`](Seed.md)

Defined in: [src/domain/buildingBlocks/Apollo.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/buildingBlocks/Apollo.ts#L8)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mnemonics` | [`MnemonicWordList`](../type-aliases/MnemonicWordList.md) |
| `passphrase` | `string` |

#### Returns

[`Seed`](Seed.md)
