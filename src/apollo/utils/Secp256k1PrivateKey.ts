import BN from "bn.js";
import elliptic from "elliptic";

import * as ECConfig from "../../config/ECConfig";
import { Secp256k1PublicKey } from "./Secp256k1PublicKey";
import {
  ApolloError,
  Curve,
  KeyTypes,
  KeyProperties,
  PrivateKey,
  SignableKey,
  StorableKey
} from "../../domain";

/**
 * @ignore
 */
export class Secp256k1PrivateKey extends PrivateKey implements SignableKey, StorableKey {
  public static ec: elliptic.ec = new elliptic.ec("secp256k1");
  public readonly recoveryId = "secp256k1+priv";

  public type: KeyTypes = KeyTypes.EC;
  public keySpecification: Map<string, string> = new Map();
  public raw: Uint8Array;
  public size: number;

  constructor(nativeValue: Uint8Array) {
    if (nativeValue.length !== ECConfig.PRIVATE_KEY_BYTE_SIZE) {
      throw new ApolloError.ECPublicKeyInitialization();
    }
    super();

    this.keySpecification.set(KeyProperties.curve, Curve.SECP256K1);
    this.raw = nativeValue;
    this.size = this.raw.length;
  }

  get storableData() {
    return this.raw;
  }

  publicKey() {
    const keyPair = Secp256k1PrivateKey.ec.keyFromPrivate(
      Buffer.from(this.raw).toString("hex"),
      "hex"
    );
    const encodedPublicKey = Uint8Array.from(
      keyPair.getPublic().encode("array", false)
    );
    return new Secp256k1PublicKey(encodedPublicKey);
  }

  getEncoded(): Uint8Array {
    const byteList = this.raw;
    const padding = new Uint8Array(
      ECConfig.PRIVATE_KEY_BYTE_SIZE - byteList.length
    ).fill(0);
    return new Uint8Array([...padding, ...byteList]);
  }

  sign(message: Buffer) {
    const keyPair = Secp256k1PrivateKey.ec.keyFromPrivate(this.getEncoded());
    const sig = keyPair.sign(message);
    return Buffer.from(sig.toDER());
  }

  static secp256k1FromBigInteger(bigInteger: BN): Secp256k1PrivateKey {
    return new Secp256k1PrivateKey(Uint8Array.from(bigInteger.toArray()));
  }

  static secp256k1FromBytes(encoded: Uint8Array): Secp256k1PrivateKey {
    if (encoded.length !== ECConfig.PRIVATE_KEY_BYTE_SIZE) {
      throw new ApolloError.ECPublicKeyInitialization();
    }
    const bnprv = new BN(encoded);
    return new Secp256k1PrivateKey(Uint8Array.from(bnprv.toArray()));
  }

  public readonly to = {
    Buffer: () => Buffer.from(this.getEncoded()),
    Hex: () => this.to.Buffer().toString("hex")
  };

  static from = {
    Buffer: (value: Buffer) => Secp256k1PrivateKey.secp256k1FromBytes(new Uint8Array(value)),
    Hex: (value: string) => Secp256k1PrivateKey.from.Buffer(Buffer.from(value, "hex")),
    String: (value: string) => Secp256k1PrivateKey.from.Buffer(Buffer.from(value))
  };
}
