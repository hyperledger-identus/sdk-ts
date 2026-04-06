import ApolloPKG from "@hyperledger/identus-apollo";
import type { CryptoWorkerRequest, CryptoWorkerResponse } from "./types";

const ApolloSDK = ApolloPKG.org.hyperledger.identus.apollo;
const EdHDKey = ApolloSDK.derivation.EdHDKey;
const HDKey = ApolloSDK.derivation.HDKey;
const BigIntegerWrapper = ApolloSDK.derivation.BigIntegerWrapper;
const Mnemonic = ApolloSDK.derivation.Mnemonic.Companion;

function handleSign(keyType: string, keyRaw: Uint8Array, message: Uint8Array): Uint8Array {
  const keyBytes = Int8Array.from(keyRaw);
  const msgBytes = Int8Array.from(message);

  if (keyType === "Ed25519") {
    const instance = new ApolloSDK.utils.KMMEdPrivateKey(keyBytes);
    const signature = instance.sign(msgBytes);
    return Uint8Array.from(signature);
  }

  if (keyType === "Secp256k1") {
    const instance = ApolloSDK.utils.KMMECSecp256k1PrivateKey.Companion.secp256k1FromByteArray(keyBytes);
    const signature = instance.sign(msgBytes);
    return Uint8Array.from(signature);
  }

  throw new Error(`Unsupported key type: ${keyType}`);
}

function handleVerify(keyType: string, keyRaw: Uint8Array, message: Uint8Array, signature: Uint8Array): boolean {
  const keyBytes = Int8Array.from(keyRaw);
  const msgBytes = Int8Array.from(message);
  const sigBytes = Int8Array.from(signature);

  if (keyType === "Ed25519") {
    const instance = new ApolloSDK.utils.KMMEdPublicKey(keyBytes);
    return instance.verify(msgBytes, sigBytes);
  }

  if (keyType === "Secp256k1") {
    const instance = ApolloSDK.utils.KMMECSecp256k1PublicKey.Companion.secp256k1FromBytes(keyBytes);
    return instance.verify(sigBytes, msgBytes);
  }

  throw new Error(`Unsupported key type: ${keyType}`);
}

function handleGenerateKeyPair(keyType: string): { privateKeyRaw: Uint8Array; publicKeyRaw: Uint8Array } {
  if (keyType === "Ed25519") {
    const keyPair = ApolloSDK.utils.KMMEdKeyPair.Companion.generateKeyPair();
    return {
      privateKeyRaw: Uint8Array.from(keyPair.privateKey.raw),
      publicKeyRaw: Uint8Array.from(keyPair.publicKey.raw),
    };
  }

  if (keyType === "Secp256k1") {
    const Mnemonic = ApolloSDK.derivation.Mnemonic.Companion;
    const mnemonics = Mnemonic.createRandomMnemonics();
    const seed = Mnemonic.createSeed(mnemonics, "mnemonic");
    const privRaw = Uint8Array.from(seed.slice(0, 32));
    const privInstance = ApolloSDK.utils.KMMECSecp256k1PrivateKey.Companion.secp256k1FromByteArray(
      Int8Array.from(privRaw)
    );
    return {
      privateKeyRaw: privRaw,
      publicKeyRaw: Uint8Array.from(privInstance.getPublicKey().raw),
    };
  }

  throw new Error(`Unsupported key type: ${keyType}`);
}

function handleDeriveKey(
  keyType: string,
  keyRaw: Uint8Array,
  chainCodeHex: string,
  derivationPath: string
): { derivedKeyRaw: Uint8Array; chainCode: string | null } {
  const chaincode = Buffer.from(chainCodeHex, "hex");

  if (keyType === "Ed25519") {
    const skRaw = Int8Array.from(keyRaw);
    const cc = Int8Array.from(chaincode);
    const hdKey = new EdHDKey(
      skRaw,
      cc,
      derivationPath.split("/").slice(1).length,
      BigIntegerWrapper.initFromInt(0)
    );
    const derived = hdKey.derive(derivationPath);
    return {
      derivedKeyRaw: Uint8Array.from(derived.privateKey),
      chainCode: derived.chainCode
        ? Buffer.from(Uint8Array.from(derived.chainCode)).toString("hex")
        : null,
    };
  }

  if (keyType === "Secp256k1") {
    const hdKey = new HDKey(
      Int8Array.from(keyRaw),
      null,
      Int8Array.from(chaincode),
      derivationPath.split("/").slice(1).length,
      BigIntegerWrapper.initFromInt(0)
    );
    const derived = hdKey.derive(derivationPath);
    if (derived.privateKey == null) {
      throw new Error("Derivation failed: missing privateKey");
    }
    return {
      derivedKeyRaw: Uint8Array.from(derived.privateKey),
      chainCode: derived.chainCode
        ? Buffer.from(Uint8Array.from(derived.chainCode)).toString("hex")
        : null,
    };
  }

  throw new Error(`Unsupported key type: ${keyType}`);
}

function handleCreateSeed(mnemonics: string[], passphrase: string): Uint8Array {
  const seed = Mnemonic.createSeed(mnemonics, passphrase);
  return Uint8Array.from(seed);
}

function handleCreateRandomSeed(passphrase?: string): { seed: Uint8Array; mnemonics: string[] } {
  const mnemonics = Mnemonic.createRandomMnemonics() as string[];
  const seed = Mnemonic.createRandomSeed(passphrase);
  return {
    seed: Uint8Array.from(seed),
    mnemonics,
  };
}

function handleCreateRandomMnemonics(): string[] {
  return Mnemonic.createRandomMnemonics() as string[];
}

globalThis.onmessage = (event: MessageEvent<CryptoWorkerRequest>) => {
  const req = event.data;
  try {
    if (req.type === "sign") {
      const signature = handleSign(req.keyType, req.keyRaw, req.message);
      const response: CryptoWorkerResponse = {
        type: "sign_result",
        id: req.id,
        signature,
      };
      globalThis.postMessage(response);
    } else if (req.type === "verify") {
      const result = handleVerify(req.keyType, req.keyRaw, req.message, req.signature);
      const response: CryptoWorkerResponse = {
        type: "verify_result",
        id: req.id,
        result,
      };
      globalThis.postMessage(response);
    } else if (req.type === "generateKeyPair") {
      const { privateKeyRaw, publicKeyRaw } = handleGenerateKeyPair(req.keyType);
      const response: CryptoWorkerResponse = {
        type: "generateKeyPair_result",
        id: req.id,
        privateKeyRaw,
        publicKeyRaw,
      };
      globalThis.postMessage(response);
    } else if (req.type === "deriveKey") {
      const { derivedKeyRaw, chainCode } = handleDeriveKey(
        req.keyType, req.keyRaw, req.chainCode, req.derivationPath
      );
      const response: CryptoWorkerResponse = {
        type: "deriveKey_result",
        id: req.id,
        derivedKeyRaw,
        chainCode,
      };
      globalThis.postMessage(response);
    } else if (req.type === "createSeed") {
      const seed = handleCreateSeed(req.mnemonics, req.passphrase);
      const response: CryptoWorkerResponse = {
        type: "createSeed_result",
        id: req.id,
        seed,
      };
      globalThis.postMessage(response);
    } else if (req.type === "createRandomSeed") {
      const { seed, mnemonics } = handleCreateRandomSeed(req.passphrase);
      const response: CryptoWorkerResponse = {
        type: "createRandomSeed_result",
        id: req.id,
        seed,
        mnemonics,
      };
      globalThis.postMessage(response);
    } else if (req.type === "createRandomMnemonics") {
      const mnemonics = handleCreateRandomMnemonics();
      const response: CryptoWorkerResponse = {
        type: "createRandomMnemonics_result",
        id: req.id,
        mnemonics,
      };
      globalThis.postMessage(response);
    }
  } catch (err) {
    const response: CryptoWorkerResponse = {
      type: "error",
      id: req.id,
      message: err instanceof Error ? err.message : String(err),
    };
    globalThis.postMessage(response);
  }
};
