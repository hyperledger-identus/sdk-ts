import { KeyPair, MnemonicWordList } from "../../domain";

import { Secp256k1PrivateKey } from "./Secp256k1PrivateKey";
import { Secp256k1PublicKey } from "./Secp256k1PublicKey";

import * as ApolloPKG from "@input-output-hk/apollo";

/**
 * @ignore
 */
export class Secp256k1KeyPair extends KeyPair {
  constructor(
    public privateKey: Secp256k1PrivateKey,
    public publicKey: Secp256k1PublicKey
  ) {
    super();
  }

  static generateKeyPair() {
    const {
      io: {
        iohk: {
          atala: {
            prism: { apollo },
          },
        },
      },
    } = ApolloPKG;
    const Mnemonic = apollo.utils.Mnemonic.Companion;
    const mnemonics = Mnemonic.createRandomMnemonics() as MnemonicWordList;
    const seed = Mnemonic.createSeed(mnemonics, `mnemonic`);
    const priv = new Secp256k1PrivateKey(Uint8Array.from(seed.slice(0, 32)));
    const pub = priv.publicKey();
    return new Secp256k1KeyPair(priv, pub);
  }
}
