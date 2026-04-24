import * as bip39 from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english";

import {
  type Apollo as ApolloInterface,
  ApolloError,
  Curve,
  KeyProperties,
  type MnemonicWordList,
  type PrivateKey,
  type PublicKey,
  type Seed,
  type SeedWords,
  type StorableKey,
  type KeyRestoration,
  PrismDerivationPath,
  type KeyOptions,
  isString,
  type Key,
} from "@hyperledger/identus-domain";

import { Ed25519PrivateKey } from "./utils/Ed25519PrivateKey";
import { X25519PrivateKey } from "./utils/X25519PrivateKey";
import { Secp256k1PrivateKey } from "./utils/Secp256k1PrivateKey";
import { Ed25519KeyPair } from "./utils/Ed25519KeyPair";
import { X25519KeyPair } from "./utils/X25519KeyPair";
import { Secp256k1PublicKey } from "./utils/Secp256k1PublicKey";
import { Ed25519PublicKey } from "./utils/Ed25519PublicKey";
import { X25519PublicKey } from "./utils/X25519PublicKey";

import { isEmpty } from "../utils";
import { CryptoWorkerManager } from "../workers";
import ApolloPKG from "@hyperledger/identus-apollo";

const ApolloSDK = ApolloPKG.org.hyperledger.identus.apollo;
const Mnemonic = ApolloSDK.derivation.Mnemonic.Companion;
const HDKey = ApolloSDK.derivation.HDKey;
const BigIntegerWrapper = ApolloSDK.derivation.BigIntegerWrapper;

function isSupportedCurve(curve: string): curve is Curve {
  return Object.values(Curve).includes(curve as Curve);
}
function getKeyData(keyData: KeyOptions[KeyProperties.rawKey]): Uint8Array | undefined {
  return keyData instanceof Uint8Array ? keyData : undefined;
}

function fromRaw(raw: Uint8Array, curve: Curve): PrivateKey {
  if (curve === Curve.ED25519) {
    return new Ed25519PrivateKey(raw);
  }

  if (curve === Curve.SECP256K1) {
    return new Secp256k1PrivateKey(raw);
  }

  if (curve === Curve.X25519) {
    return new X25519PrivateKey(raw);
  }
  throw new ApolloError.InvalidKeyCurve();
}

function fromSeed(
  curve: Curve,
  seedBuff: Uint8Array | undefined,
  derivationIndex: number,
  derivationPath: string | undefined,
): PrivateKey {
  if (curve === Curve.SECP256K1) {
    if (isEmpty(seedBuff) || !(seedBuff instanceof Uint8Array)) {
      throw new ApolloError.MissingKeyParameters("seed");
    }
  }

  const derivationParam: string = derivationPath ?? PrismDerivationPath.init(derivationIndex).toString();

  if (curve === Curve.ED25519) {
    if (seedBuff) {
      const hdKey = ApolloSDK.derivation.EdHDKey.Companion.initFromSeed(Int8Array.from(seedBuff));
      const baseKey = new Ed25519PrivateKey(Uint8Array.from(hdKey.privateKey));
      baseKey.keySpecification.set(KeyProperties.chainCode, Buffer.from(Uint8Array.from(hdKey.chainCode)).toString("hex"));
      baseKey.keySpecification.set(KeyProperties.derivationPath, derivationParam);
      if (derivationPath) {
        const privateKey = baseKey.derive(derivationParam);
        return privateKey;
      }
      return baseKey;
    }

    const keyPair = Ed25519KeyPair.generateKeyPair();
    return keyPair.privateKey;
  }

  if (curve === Curve.X25519) {
    if (seedBuff) {
      const hdKey = ApolloSDK.derivation.EdHDKey.Companion.initFromSeed(Int8Array.from(seedBuff)).derive(derivationParam);
      const edKey = Ed25519PrivateKey.from.Buffer(Buffer.from(hdKey.privateKey));
      const xKey = edKey.x25519();

      xKey.keySpecification.set(KeyProperties.chainCode, Buffer.from(hdKey.chainCode).toString("hex"));
      xKey.keySpecification.set(KeyProperties.derivationPath, derivationParam);
      xKey.keySpecification.set(KeyProperties.index, `${derivationIndex}`);

      return xKey;
    }

    const keyPair = X25519KeyPair.generateKeyPair();
    return keyPair.privateKey;
  }

  if (curve === Curve.SECP256K1) {
    const hdKey = HDKey.InitFromSeed(
      Int8Array.from(seedBuff!),
      derivationParam.split("/").slice(1).length,
      BigIntegerWrapper.initFromInt(0)
    );

    if (hdKey.privateKey == null) {
      throw new ApolloError.ApolloLibError("Key generated incorrectly: missing privateKey");
    }

    if (hdKey.chainCode == null) {
      throw new ApolloError.ApolloLibError("Key generated incorrectly: missing chainCode");
    }

    const baseKey = new Secp256k1PrivateKey(Uint8Array.from(hdKey.privateKey));
    baseKey.keySpecification.set(KeyProperties.chainCode, Buffer.from(Uint8Array.from(hdKey.chainCode)).toString("hex"));
    baseKey.keySpecification.set(KeyProperties.derivationPath, derivationParam);
    baseKey.keySpecification.set(KeyProperties.index, `${derivationIndex}`);

    if (derivationPath) {
      const privateKey = baseKey.derive(derivationParam);
      return privateKey;
    }

    return baseKey;
  }

  throw new ApolloError.InvalidKeyCurve();
}

/**
 * Apollo defines the set of cryptographic operations.
 *
 * We by default are implementing Secp256k1, Ed25519 and X25519 Private and Public key from our generic abstractions.
 * When you are using one of those type of keys, for example with:
 *
 * ```ts
 *  const privateKey = apollo.createPrivateKey({
 *    curve: Curve.ED25519,
 *  });
 * ```
 * All the properties you pass to the createPrivateKey are just the default keyProperty keys and the values are strings, buffers are represented in hex format also as strings to simplify conversion later
 *
 * You can know check if this key can sign with:
 *
 * ```ts
 * if (privateKey.isSignable()) {
 *  //the sign method will be available inside this if
 *  privateKey.sign(message)
 * }
 * //not outside
 *
 * const signature = privateKey.isSignable() && privateKey.sign(message)
 * //This last one would also would but if your key was not signable would return false
 * ```
 *
 * PublicKeys follow the same concept, imagine you already have an instance of a publicKey, then..
 *
 * ```ts
 * if (publicKey.canVerify()) {
 *  privateKey.verify(challenge, signature)
 * }
 * //not outside
 * ```
 *
 * All keys know also have a generic list of properties which can be accessed at any stage, for example:

 * ```ts
 * privateKey.getProperty(KeyProperties.curve)
 * ```
 *
 * Would give your the Curve value.
 *
 * Find below all the complete list of KeyProperties that are available.
 *
 * ```ts
 * export enum KeyProperties {
 *   /// The 'kid'  represents a key's identifier.
 *   kid = "kid",
 *   /// The 'algorithm'  corresponds to the cryptographic algorithm associated with the key.,
 *   algorithm = "algorithm",
 *   /// The 'curve'  represents the elliptic curve used for an elliptic-curve key.,
 *   curve = "curve",
 *   /// The 'rawKey'  refers to the raw binary form of the key.,
 *   rawKey = "raw",
 *   /// The 'derivationPath'  refers to the path used to derive a key in a hierarchical deterministic (HD) key generation scheme.,
 *   derivationPath = "derivationPath",
 *   index = "index",
 *   /// The 'type'  denotes the type of the key.,
 *   type = "type",
 *   /// The 'curvePointX'  represents the x-coordinate of a curve point for an elliptic-curve key.,
 *   curvePointX = "curvePoint.x",
 *   /// The 'curvePointY'  represents the y-coordinate of a curve point for an elliptic-curve key.,
 *   curvePointY = "curvePoint.y",
 * }
 * ```
 *
 * @class Apollo
 * @typedef {Apollo}
 */
export class Apollo implements ApolloInterface, KeyRestoration {

  static Secp256k1PrivateKey = Secp256k1PrivateKey;
  static Ed25519PrivateKey = Ed25519PrivateKey;
  static X25519PrivateKey = X25519PrivateKey;

  /**
   * Creates a random set of mnemonic phrases that can be used as a seed for generating a private key.
   *
   * @example
   * This function creates a random mnemonic phrase whose usage is as a seed for generating a private key.
   *
   * ```ts
   *  const mnemonics = apollo.createRandomMnemonics();
   * ```
   *
   * @returns {MnemonicWordList}
   */
  createRandomMnemonics(): MnemonicWordList {
    return Mnemonic.createRandomMnemonics() as MnemonicWordList;
  }

  async createRandomMnemonicsAsync(): Promise<MnemonicWordList> {
    const manager = CryptoWorkerManager.getInstance();
    if (manager.isSupported()) {
      return await manager.createRandomMnemonics() as MnemonicWordList;
    }
    return this.createRandomMnemonics();
  }

  /**
   * Takes in a set of mnemonics and a passphrase, and returns a seed object used to generate a private key.
   *
   * @example
   * This function takes mnemonics and passphrases and creates a seed object to generate a private key. It may throw an error if the mnemonics are invalid.
   *
   * ```ts
   *  const seed = apollo.createSeed(mnemonics, "my-secret-passphrase");
   * ```
   *
   * @param {MnemonicWordList} mnemonics
   * @param {?string} [passphrase]
   * @returns {Seed}
   */
  createSeed(mnemonics: MnemonicWordList, passphrase?: string): Seed {
    const mnemonicString = mnemonics.join(" ");

    if (mnemonics.length != 12 && mnemonics.length != 24) {
      throw new ApolloError.MnemonicLengthError();
    }

    if (!bip39.validateMnemonic(mnemonicString, wordlist)) {
      throw new ApolloError.MnemonicWordError(mnemonics);
    }

    const seed = Mnemonic.createSeed(mnemonics, `mnemonic${passphrase}`);

    return {
      value: Uint8Array.from(seed),
    };
  }

  async createSeedAsync(mnemonics: MnemonicWordList, passphrase?: string): Promise<Seed> {
    const mnemonicString = mnemonics.join(" ");

    if (mnemonics.length != 12 && mnemonics.length != 24) {
      throw new ApolloError.MnemonicLengthError();
    }

    if (!bip39.validateMnemonic(mnemonicString, wordlist)) {
      throw new ApolloError.MnemonicWordError(mnemonics);
    }

    const manager = CryptoWorkerManager.getInstance();
    if (manager.isSupported()) {
      const seed = await manager.createSeed(
        mnemonics as unknown as string[],
        `mnemonic${passphrase}`
      );
      return { value: seed };
    }
    return this.createSeed(mnemonics, passphrase);
  }

  /**
   * Creates a random seed and a corresponding set of mnemonic phrases.
   *
   * @example
   * This function creates a random mnemonic phrase and seed.
   *
   * ```ts
   *  const {mnemonics, seed} = apollo.createRandomSeed();
   * ```
   *
   * @param {?string} [passphrase]
   * @returns {SeedWords}
   */
  createRandomSeed(passphrase?: string): SeedWords {
    const mnemonics = Mnemonic.createRandomMnemonics() as MnemonicWordList;
    const seed = Mnemonic.createRandomSeed(passphrase);
    return {
      seed: {
        value: Uint8Array.from(seed),
      },
      mnemonics: mnemonics,
    };
  }

  async createRandomSeedAsync(passphrase?: string): Promise<SeedWords> {
    const manager = CryptoWorkerManager.getInstance();
    if (manager.isSupported()) {
      const { seed, mnemonics } = await manager.createRandomSeed(passphrase);
      return {
        seed: { value: seed },
        mnemonics: mnemonics as MnemonicWordList,
      };
    }
    return this.createRandomSeed(passphrase);
  }

  /**
  * Creates a public key based on the current cryptographic abstraction
  *
  *
  * @example
  * Create an EC Key with secp256k1 curve
  *
  * ```ts
  *  const privateKey = apollo.createPublicKey({
  *    curve: Curve.SECP256K1,
  *    raw: Buffer.from(new Arra(64).fill(1)),
  *  });
  * ```
  *
  * @param parameters
  * @returns {KeyPair}
  */
  createPublicKey(parameters: KeyOptions): PublicKey {
    const curve = parameters[KeyProperties.curve];

    if (isEmpty(curve)) {
      throw new ApolloError.InvalidKeyCurve();
    }

    const keyData = parameters[KeyProperties.rawKey];
    const xData = parameters[KeyProperties.curvePointX];
    const yData = parameters[KeyProperties.curvePointY];

    if (keyData) {
      if (curve === Curve.ED25519) {
        return new Ed25519PublicKey(keyData);
      }
      if (curve === Curve.SECP256K1) {
        return new Secp256k1PublicKey(keyData);
      }
      if (curve === Curve.X25519) {
        return new X25519PublicKey(keyData);
      }
      throw new ApolloError.InvalidKeyCurve();
    }

    if (xData && yData) {
      if (curve === Curve.SECP256K1) {
        return Secp256k1PublicKey.secp256k1FromByteCoordinates(xData, yData);
      }
      throw new ApolloError.InvalidKeyCurve(curve, [Curve.SECP256K1]);
    }

    throw new ApolloError.MissingKeyParameters(KeyProperties.rawKey, KeyProperties.curvePointX, KeyProperties.curvePointY);
  }

  /**
   * Asyncronously creates a private key based on the current cryptographic abstraction
   *
   * @example
   * Creating a EC Key with secp256k1 curve from an external seed
   * ```ts
   *  const privateKey = apollo.createPrivateKey({
   *    curve: Curve.SECP256K1,
   *    seed: seed.value, // As a uint8array
   *  });
   * ```
   *
   * @example
   * Create an EC Key with secp256k1 curve
   *
   * ```ts
   *  const privateKey = apollo.createPrivateKey({
   *    curve: Curve.SECP256K1,
   *    seed: seed.value,
   *  });
   * ```
   *
   *
   * @example
   * Create an EC Key with secp256k1 curve, but also specify a derivationPath
   *
   * ```ts
   *  const privateKey = apollo.createPrivateKey({
   *    curve: Curve.SECP256K1,
   *    seed: seed.value,
   *    derivationPath: "m/0'/0'/0'"
   *  });
   * ```
   *
   *
   * @example
   * Create an EC Key with ed25519 curve, ED25519 keys do not use derivation,
   * passing the seed or derivation path will make no effect.
   * Calling this function just generates a new random privateKey for that curve
   *
   * ```ts
   *  const privateKey = apollo.createPrivateKey({
   *    curve: Curve.ED25519,
   *  });
   * ```
   *
   *
   * @example
   * Create an EC Key with X25519 curve, X25519 keys do not use derivation,
   * passing the seed or derivation path will make no effect.
   * Calling this function just generates a new random privateKey for that curve
   *
   * ```ts
   *  const privateKey = apollo.createPrivateKey({
   *    curve: Curve.X25519,
   *  });
   * ```
   *
   * @param parameters
   * @returns {KeyPair}
   */
  createPrivateKey(parameters: KeyOptions): PrivateKey {
    const curve = parameters[KeyProperties.curve] as string;
    if (isEmpty(curve) || !isString(curve) || !isSupportedCurve(curve)) {
      throw new ApolloError.InvalidKeyCurve();
    }
    const keyData = getKeyData(parameters[KeyProperties.rawKey]);
    if (keyData) {
      return fromRaw(keyData, curve);
    }
    const seed = parameters[KeyProperties.seed];
    const derivationIndex = parseInt(String(parameters[KeyProperties.index] ?? 0));
    const derivationPath = parameters[KeyProperties.derivationPath] != null
      ? String(parameters[KeyProperties.derivationPath])
      : undefined;

    return fromSeed(
      curve,
      seed,
      derivationIndex,
      derivationPath
    )
  }

  #addKeySpecification<K extends Key>(key: K, keySpecification: Record<string, string>): K {
    for (const [prop, value] of Object.entries(keySpecification)) {
      if (prop === KeyProperties.rawKey.toString()) continue;
      if (value !== undefined && value !== null) {
        key.keySpecification.set(prop, String(value));
      }
    }
    return key;
  }

  restorePrivateKey(key: StorableKey): PrivateKey {
    // Old keys have StorableKey.raw with the buffer, new keys use encoded key specification
    const keySpecificationBuffer = key.data ?? Buffer.from('{}');
    const keySpecification: Record<string, string> = JSON.parse(keySpecificationBuffer.toString());
    const rawHex = keySpecification[KeyProperties.rawKey];
    const raw = key.raw ?? (typeof rawHex === "string" ? Buffer.from(rawHex, "hex") : undefined);

    if (!raw) {
      throw new ApolloError.KeyRestoratonFailed(key);
    }

    let privateKey: PrivateKey | undefined;
    switch (key.recoveryId) {
      case "secp256k1+priv":
        privateKey = new Secp256k1PrivateKey(raw);
        break;
      case "ed25519+priv":
        privateKey = new Ed25519PrivateKey(raw);
        break;
      case "x25519+priv":
        privateKey = new X25519PrivateKey(raw);
        break;
    }

    if (!privateKey) {
      throw new ApolloError.KeyRestoratonFailed(key);
    }

    privateKey = this.#addKeySpecification(privateKey, keySpecification);

    return privateKey;
  }

  restorePublicKey(key: StorableKey): PublicKey {
    const keySpecificationBuffer = key.data ?? Buffer.from('{}');
    const keySpecification: Record<string, string> = JSON.parse(keySpecificationBuffer.toString());
    const rawHex = keySpecification[KeyProperties.rawKey];
    const raw = key.raw ?? (typeof rawHex === "string" ? Buffer.from(rawHex, "hex") : undefined);

    if (!raw) {
      throw new ApolloError.KeyRestoratonFailed(key);
    }

    let publicKey: PublicKey | undefined;
    switch (key.recoveryId) {
      case "secp256k1+pub":
        publicKey = new Secp256k1PublicKey(raw);
        break;
      case "ed25519+pub":
        publicKey = new Ed25519PublicKey(raw);
        break;
      case "x25519+pub":
        publicKey = new X25519PublicKey(raw);
        break;
    }

    if (!publicKey) {
      throw new ApolloError.KeyRestoratonFailed(key);
    }

    publicKey = this.#addKeySpecification(publicKey, keySpecification);

    return publicKey;
  }
}
