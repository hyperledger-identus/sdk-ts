import { type Seed } from './Seed';
import { type MnemonicWordList } from './WordList';

export interface SeedWords {
  mnemonics: MnemonicWordList;
  seed: Seed;
}
