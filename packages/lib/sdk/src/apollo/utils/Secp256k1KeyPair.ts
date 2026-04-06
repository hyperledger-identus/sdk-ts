import { KeyPair, type MnemonicWordList } from "@hyperledger/identus-domain";
import { Secp256k1PrivateKey } from "./Secp256k1PrivateKey";
import { Secp256k1PublicKey } from "./Secp256k1PublicKey";
import { CryptoWorkerManager } from "../../workers";
import ApolloPKG from "@hyperledger/identus-apollo";
const ApolloSDK = ApolloPKG.org.hyperledger.identus.apollo;

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
    const Mnemonic = ApolloSDK.derivation.Mnemonic.Companion;
    const mnemonics = Mnemonic.createRandomMnemonics() as MnemonicWordList;
    const seed = Mnemonic.createSeed(mnemonics, `mnemonic`);
    const priv = new Secp256k1PrivateKey(Uint8Array.from(seed.slice(0, 32)));
    const pub = priv.publicKey();
    return new Secp256k1KeyPair(priv, pub);
  }

  static async generateKeyPairAsync(): Promise<Secp256k1KeyPair> {
    const manager = CryptoWorkerManager.getInstance();
    if (manager.isSupported()) {
      const { privateKeyRaw, publicKeyRaw } = await manager.generateKeyPair("Secp256k1");
      return new Secp256k1KeyPair(
        new Secp256k1PrivateKey(privateKeyRaw),
        new Secp256k1PublicKey(publicKeyRaw)
      );
    }
    return Secp256k1KeyPair.generateKeyPair();
  }
}
