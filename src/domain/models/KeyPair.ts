import { PrivateKey, PublicKey } from "./keyManagement";
import { KeyProperties } from "./KeyProperties";

export abstract class KeyPair {
  get curve() {
     
    return this.privateKey.getProperty(KeyProperties.curve)!;
  }
  abstract publicKey: PublicKey;
  abstract privateKey: PrivateKey;
}
