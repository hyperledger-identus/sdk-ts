[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Apollo

# Interface: Apollo

Defined in: packages/shared/domain/build/index.d.ts:2377

## Methods

### createPrivateKey() {#createprivatekey}

> **createPrivateKey**(`parameters`: [`KeyOptions`](../type-aliases/KeyOptions.md)): [`PrivateKey`](../classes/PrivateKey.md)

Defined in: packages/shared/domain/build/index.d.ts:2382

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `parameters` | [`KeyOptions`](../type-aliases/KeyOptions.md) |

#### Returns

[`PrivateKey`](../classes/PrivateKey.md)

***

### createPublicKey() {#createpublickey}

> **createPublicKey**(`parameters`: [`KeyOptions`](../type-aliases/KeyOptions.md)): [`PublicKey`](../classes/PublicKey.md)

Defined in: packages/shared/domain/build/index.d.ts:2381

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `parameters` | [`KeyOptions`](../type-aliases/KeyOptions.md) |

#### Returns

[`PublicKey`](../classes/PublicKey.md)

***

### createRandomMnemonics() {#createrandommnemonics}

> **createRandomMnemonics**(): [`MnemonicWordList`](../type-aliases/MnemonicWordList.md)

Defined in: packages/shared/domain/build/index.d.ts:2378

#### Returns

[`MnemonicWordList`](../type-aliases/MnemonicWordList.md)

***

### createRandomSeed() {#createrandomseed}

> **createRandomSeed**(`passphrase?`: `string`): [`SeedWords`](SeedWords.md)

Defined in: packages/shared/domain/build/index.d.ts:2380

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `passphrase?` | `string` |

#### Returns

[`SeedWords`](SeedWords.md)

***

### createSeed() {#createseed}

> **createSeed**(`mnemonics`: [`MnemonicWordList`](../type-aliases/MnemonicWordList.md), `passphrase`: `string`): [`Seed`](Seed.md)

Defined in: packages/shared/domain/build/index.d.ts:2379

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mnemonics` | [`MnemonicWordList`](../type-aliases/MnemonicWordList.md) |
| `passphrase` | `string` |

#### Returns

[`Seed`](Seed.md)
