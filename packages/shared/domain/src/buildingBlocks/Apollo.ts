import { type PrivateKey, type PublicKey, type Seed, type SeedWords } from "../models";

import { type KeyProperties } from "../models/KeyProperties";
import { type MnemonicWordList } from "../models/WordList";

export type KeyOptions = {
  [K in Exclude<KeyProperties, KeyProperties.seed>]?: any;
} & {
  [K in KeyProperties.seed]?: Uint8Array;
};

export interface Apollo {
  createRandomMnemonics(): MnemonicWordList;
  createSeed(mnemonics: MnemonicWordList, passphrase: string): Seed;
  createRandomSeed(passphrase?: string): SeedWords;
  createPublicKey(parameters: KeyOptions): PublicKey;
  createPrivateKey(parameters: KeyOptions): PrivateKey;
}
