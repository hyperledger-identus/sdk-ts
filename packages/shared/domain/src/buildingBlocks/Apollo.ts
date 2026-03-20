import { type PrivateKey, type PublicKey, type Seed, type SeedWords } from "../models";

import { type KeyProperties } from "../models/KeyProperties";
import { type MnemonicWordList } from "../models/WordList";

export interface Apollo {
  createRandomMnemonics(): MnemonicWordList;
  createSeed(mnemonics: MnemonicWordList, passphrase: string): Seed;
  createRandomSeed(passphrase?: string): SeedWords;
  createPrivateKey(parameters: {
    [name: KeyProperties | string]: any;
  }): PrivateKey;
  createPublicKey(parameters: {
    [name: KeyProperties | string]: any;
  }): PublicKey;
}
