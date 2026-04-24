import { describe, test, expect, afterEach } from 'vitest';
import { Curve, KeyProperties, KeyTypes } from "@hyperledger/identus-domain";
import { CryptoWorkerManager } from "../../src/workers/CryptoWorkerManager";
import { Ed25519PrivateKey } from "../../src/apollo/utils/Ed25519PrivateKey";
import { Ed25519PublicKey } from "../../src/apollo/utils/Ed25519PublicKey";
import { Ed25519KeyPair } from "../../src/apollo/utils/Ed25519KeyPair";
import { Secp256k1PrivateKey } from "../../src/apollo/utils/Secp256k1PrivateKey";
import { Secp256k1PublicKey } from "../../src/apollo/utils/Secp256k1PublicKey";
import { Secp256k1KeyPair } from "../../src/apollo/utils/Secp256k1KeyPair";
import { Apollo } from "../../src/apollo/Apollo";

describe("Workers", () => {
  describe("CryptoWorkerManager", () => {
    afterEach(() => {
      CryptoWorkerManager.getInstance().terminate();
    });

    test("getInstance returns singleton", () => {
      const a = CryptoWorkerManager.getInstance();
      const b = CryptoWorkerManager.getInstance();
      expect(a).toBe(b);
    });

    test("isSupported returns false in Node.js", () => {
      const manager = CryptoWorkerManager.getInstance();
      expect(manager.isSupported()).toBe(false);
    });

    test("terminate resets singleton", () => {
      const a = CryptoWorkerManager.getInstance();
      a.terminate();
      const b = CryptoWorkerManager.getInstance();
      expect(a).not.toBe(b);
    });
  });

  describe("Ed25519 signAsync/verifyAsync fallback", () => {
    const keyPair = Ed25519KeyPair.generateKeyPair();
    const message = Buffer.from("test message for async signing");

    test("signAsync returns same result as sign", async () => {
      const syncSignature = keyPair.privateKey.sign(message);
      const asyncSignature = await keyPair.privateKey.signAsync(message);

      expect(asyncSignature).to.be.an.instanceOf(Buffer);
      expect(asyncSignature).to.eql(syncSignature);
    });

    test("verifyAsync returns same result as verify", async () => {
      const signature = keyPair.privateKey.sign(message);

      const syncResult = keyPair.publicKey.verify(message, signature);
      const asyncResult = await keyPair.publicKey.verifyAsync(message, signature);

      expect(syncResult).toBe(true);
      expect(asyncResult).toBe(true);
    });

    test("signAsync + verifyAsync end-to-end", async () => {
      const signature = await keyPair.privateKey.signAsync(message);
      const verified = await keyPair.publicKey.verifyAsync(message, signature);

      expect(verified).toBe(true);
    });

    test("verifyAsync rejects wrong message", async () => {
      const signature = await keyPair.privateKey.signAsync(message);
      const wrongMessage = Buffer.from("wrong message");
      const verified = await keyPair.publicKey.verifyAsync(wrongMessage, signature);

      expect(verified).toBe(false);
    });

    test("verifyAsync rejects wrong key", async () => {
      const otherKeyPair = Ed25519KeyPair.generateKeyPair();
      const signature = await keyPair.privateKey.signAsync(message);
      const verified = await otherKeyPair.publicKey.verifyAsync(message, signature);

      expect(verified).toBe(false);
    });
  });

  describe("Secp256k1 signAsync/verifyAsync fallback", () => {
    const keyPair = Secp256k1KeyPair.generateKeyPair();
    const message = Buffer.from("test message for async signing");

    test("signAsync returns same result as sign", async () => {
      const syncSignature = keyPair.privateKey.sign(message);
      const asyncSignature = await keyPair.privateKey.signAsync(message);

      expect(asyncSignature).to.be.an.instanceOf(Buffer);
      expect(asyncSignature).to.eql(syncSignature);
    });

    test("verifyAsync returns same result as verify", async () => {
      const signature = keyPair.privateKey.sign(message);

      const syncResult = keyPair.publicKey.verify(message, signature);
      const asyncResult = await keyPair.publicKey.verifyAsync(message, signature);

      expect(syncResult).toBe(true);
      expect(asyncResult).toBe(true);
    });

    test("signAsync + verifyAsync end-to-end", async () => {
      const signature = await keyPair.privateKey.signAsync(message);
      const verified = await keyPair.publicKey.verifyAsync(message, signature);

      expect(verified).toBe(true);
    });

    test("verifyAsync rejects wrong message", async () => {
      const signature = await keyPair.privateKey.signAsync(message);
      const wrongMessage = Buffer.from("wrong message");
      const verified = await keyPair.publicKey.verifyAsync(wrongMessage, signature);

      expect(verified).toBe(false);
    });

    test("verifyAsync rejects wrong key", async () => {
      const otherKeyPair = Secp256k1KeyPair.generateKeyPair();
      const signature = await keyPair.privateKey.signAsync(message);
      const verified = await otherKeyPair.publicKey.verifyAsync(message, signature);

      expect(verified).toBe(false);
    });
  });

  describe("Ed25519 generateKeyPairAsync fallback", () => {
    test("generates valid key pair", async () => {
      const keyPair = await Ed25519KeyPair.generateKeyPairAsync();

      expect(keyPair.privateKey).to.be.an.instanceOf(Ed25519PrivateKey);
      expect(keyPair.publicKey).to.be.an.instanceOf(Ed25519PublicKey);
      expect(keyPair.privateKey.size).toBe(32);
    });

    test("generated key pair can sign and verify", async () => {
      const keyPair = await Ed25519KeyPair.generateKeyPairAsync();
      const message = Buffer.from("async keygen test");
      const signature = keyPair.privateKey.sign(message);
      const verified = keyPair.publicKey.verify(message, signature);

      expect(verified).toBe(true);
    });
  });

  describe("Secp256k1 generateKeyPairAsync fallback", () => {
    test("generates valid key pair", async () => {
      const keyPair = await Secp256k1KeyPair.generateKeyPairAsync();

      expect(keyPair.privateKey).to.be.an.instanceOf(Secp256k1PrivateKey);
      expect(keyPair.publicKey).to.be.an.instanceOf(Secp256k1PublicKey);
      expect(keyPair.privateKey.size).toBe(32);
    });

    test("generated key pair can sign and verify", async () => {
      const keyPair = await Secp256k1KeyPair.generateKeyPairAsync();
      const message = Buffer.from("async keygen test");
      const signature = keyPair.privateKey.sign(message);
      const verified = keyPair.publicKey.verify(message, signature);

      expect(verified).toBe(true);
    });
  });

  describe("Ed25519 deriveAsync fallback", () => {
    const seedHex = "a4dd58542e9959eccb56832a953c0e54b3321036b6165ec2f3c1ef533cd1d6da5fae8010c587535404534c192397483c765505f67e62b26026392f8a0cf8ba51";
    const apollo = new Apollo();

    test("deriveAsync returns same result as derive", async () => {
      const privateKey = apollo.createPrivateKey({
        [KeyProperties.type]: KeyTypes.EC,
        [KeyProperties.curve]: Curve.ED25519,
        [KeyProperties.seed]: seedHex,
      });

      if (!privateKey.isDerivable()) throw new Error("Key not derivable");

      const path = "m/0'/0'/1'";
      const syncDerived = privateKey.derive(path);
      const asyncDerived = await (privateKey as Ed25519PrivateKey).deriveAsync(path);

      expect(asyncDerived.raw).to.eql(syncDerived.raw);
      expect(asyncDerived.getProperty(KeyProperties.chainCode))
        .to.eql(syncDerived.getProperty(KeyProperties.chainCode));
    });
  });

  describe("Apollo createRandomMnemonicsAsync fallback", () => {
    const apollo = new Apollo();

    test("returns 12 or 24 words", async () => {
      const mnemonics = await apollo.createRandomMnemonicsAsync();
      expect(mnemonics.length === 12 || mnemonics.length === 24).toBe(true);
    });

    test("each mnemonic is a non-empty string", async () => {
      const mnemonics = await apollo.createRandomMnemonicsAsync();
      for (const word of mnemonics) {
        expect(typeof word).toBe("string");
        expect(word.length).toBeGreaterThan(0);
      }
    });
  });

  describe("Apollo createSeedAsync fallback", () => {
    const apollo = new Apollo();

    test("returns same seed as sync for same input", async () => {
      const mnemonics = apollo.createRandomMnemonics();
      const syncSeed = apollo.createSeed(mnemonics, "test");
      const asyncSeed = await apollo.createSeedAsync(mnemonics, "test");

      expect(asyncSeed.value).to.eql(syncSeed.value);
    });
  });

  describe("Apollo createRandomSeedAsync fallback", () => {
    const apollo = new Apollo();

    test("returns seed and mnemonics", async () => {
      const result = await apollo.createRandomSeedAsync();

      expect(result.seed.value).to.be.an.instanceOf(Uint8Array);
      expect(result.seed.value.length).toBeGreaterThan(0);
      expect(result.mnemonics.length === 12 || result.mnemonics.length === 24).toBe(true);
    });
  });

  describe("Secp256k1 deriveAsync fallback", () => {
    const chainCodeHex = "7e9952eb18d135283fd633180e31b202a5ec87e3e37cc66c6836f18bdf9684b2";
    const raw = Uint8Array.from([55, 242, 69, 130, 246, 26, 69, 236, 145, 95, 6, 172, 179, 62, 69, 30, 13, 247, 3, 130, 58, 117, 204, 243, 117, 122, 227, 116, 113, 164, 178, 104]);

    test("deriveAsync returns same result as derive", async () => {
      const privateKey = new Secp256k1PrivateKey(raw);
      privateKey.keySpecification.set(KeyProperties.chainCode, chainCodeHex);

      const path = "m/0'/0'/0'";
      const syncDerived = privateKey.derive(path);
      const asyncDerived = await privateKey.deriveAsync(path);

      expect(asyncDerived.raw).to.eql(syncDerived.raw);
      expect(asyncDerived.getProperty(KeyProperties.chainCode))
        .to.eql(syncDerived.getProperty(KeyProperties.chainCode));
    });
  });
});
