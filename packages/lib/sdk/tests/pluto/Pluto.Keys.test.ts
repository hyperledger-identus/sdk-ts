import { describe, expect, test, beforeEach } from 'vitest';
import * as Fixtures from "../fixtures";
import * as SDK from "../../src";

import { randomUUID } from 'node:crypto';

describe("Pluto", () => {
  let instance: SDK.Domain.Pluto;

  beforeEach(async () => {
    const apollo = new SDK.Apollo();
    instance = await SDK.Pluto.create({
      dbName: "test-" + randomUUID(),
      keyRestoration: apollo,
    });


    await instance.start();
  });

  describe("Keys", () => {
    test("uuid set on Domain instance - same after store", async () => {
      const sut = new SDK.X25519PrivateKey(Fixtures.Keys.x25519.privateKey.raw);
      const uuid = sut.uuid;
      expect(uuid).to.be.a.string;

      await instance.storePrivateKey(sut);
      expect(sut.uuid).to.be.a.string;
      expect(sut.uuid).to.eql(uuid);
    });

    describe("keySpecification round-trip via storeDID + getDIDPrivateKeysByDID", () => {
      const retrieveKey = async (key: SDK.Domain.PrivateKey) => {
        const did = SDK.Domain.DID.from(`did:prism:${randomUUID().replace(/-/g, "")}`);
        await instance.storeDID(did, key);
        const keys = await instance.getDIDPrivateKeysByDID(did);
        expect(keys).to.have.length(1);
        return keys[0];
      };

      test("Secp256k1PrivateKey - raw, curve, recoveryId, size, type preserved", async () => {
        const sut = new SDK.Secp256k1PrivateKey(Fixtures.Keys.secp256K1.privateKey.raw);

        const restored = await retrieveKey(sut);

        expect(restored).to.be.instanceOf(SDK.Secp256k1PrivateKey);
        expect(restored.uuid).to.eql(sut.uuid);
        expect(restored.raw).to.eql(sut.raw);
        expect(restored.curve).to.eql(sut.curve);
        expect(restored.size).to.eql(sut.size);
        expect(restored.type).to.eql(sut.type);
        expect(restored.keySpecification).to.eql(sut.keySpecification);
      });

      test("Ed25519PrivateKey - raw, curve, recoveryId, size, type preserved", async () => {
        const sut = new SDK.Ed25519PrivateKey(Fixtures.Keys.ed25519.privateKey.raw);

        const restored = await retrieveKey(sut);

        expect(restored).to.be.instanceOf(SDK.Ed25519PrivateKey);
        expect(restored.uuid).to.eql(sut.uuid);
        expect(restored.raw).to.eql(sut.raw);
        expect(restored.curve).to.eql(sut.curve);
        expect(restored.size).to.eql(sut.size);
        expect(restored.type).to.eql(sut.type);
        expect(restored.keySpecification).to.eql(sut.keySpecification);
      });

      test("X25519PrivateKey - raw, curve, recoveryId, size, type preserved", async () => {
        const sut = new SDK.X25519PrivateKey(Fixtures.Keys.x25519.privateKey.raw);

        const restored = await retrieveKey(sut);

        expect(restored).to.be.instanceOf(SDK.X25519PrivateKey);
        expect(restored.uuid).to.eql(sut.uuid);
        expect(restored.raw).to.eql(sut.raw);
        expect(restored.curve).to.eql(sut.curve);
        expect(restored.size).to.eql(sut.size);
        expect(restored.type).to.eql(sut.type);
        expect(restored.keySpecification).to.eql(sut.keySpecification);
      });

      test("Custom keySpecification entries (chainCode, derivationPath, index) are preserved", async () => {
        const sut = new SDK.Secp256k1PrivateKey(Fixtures.Keys.secp256K1.privateKey.raw);
        sut.keySpecification.set(SDK.Domain.KeyProperties.chainCode, "abcd1234");
        sut.keySpecification.set(SDK.Domain.KeyProperties.derivationPath, Buffer.from("m/0'/0'/0'").toString("hex"));
        sut.keySpecification.set(SDK.Domain.KeyProperties.index, "3");
        sut.keySpecification.set(SDK.Domain.KeyProperties.seed, "deadbeef");

        const restored = await retrieveKey(sut);

        expect(restored.raw).to.eql(sut.raw);
        expect(restored.keySpecification).to.eql(sut.keySpecification);
        expect(restored.getProperty(SDK.Domain.KeyProperties.chainCode)).to.eql("abcd1234");
        expect(restored.getProperty(SDK.Domain.KeyProperties.derivationPath)).to.eql(Buffer.from("m/0'/0'/0'").toString("hex"));
        expect(restored.getProperty(SDK.Domain.KeyProperties.index)).to.eql("3");
        expect(restored.getProperty(SDK.Domain.KeyProperties.seed)).to.eql("deadbeef");
      });

      test("keySpecification does not leak raw key property", async () => {
        const sut = new SDK.Ed25519PrivateKey(Fixtures.Keys.ed25519.privateKey.raw);

        const restored = await retrieveKey(sut);

        expect(restored.keySpecification.has(SDK.Domain.KeyProperties.rawKey)).to.eql(false);
      });

      test("Derived Secp256k1 key round-trips keySpecification produced by derive()", async () => {
        const parent = new SDK.Secp256k1PrivateKey(Fixtures.Keys.secp256K1.privateKey.raw);
        parent.keySpecification.set(SDK.Domain.KeyProperties.chainCode, Buffer.alloc(32, 1).toString("hex"));
        const sut = parent.derive("m/0'/0'/0'");

        const restored = await retrieveKey(sut);

        expect(restored.raw).to.eql(sut.raw);
        expect(restored.keySpecification).to.eql(sut.keySpecification);
        expect(restored.getProperty(SDK.Domain.KeyProperties.derivationPath)).to.eql(sut.getProperty(SDK.Domain.KeyProperties.derivationPath));
        expect(restored.getProperty(SDK.Domain.KeyProperties.chainCode)).to.eql(sut.getProperty(SDK.Domain.KeyProperties.chainCode));
        expect(restored.getProperty(SDK.Domain.KeyProperties.index)).to.eql(sut.getProperty(SDK.Domain.KeyProperties.index));
      });

      test("Restored key is functionally equivalent - sign verifies with original publicKey", async () => {
        const sut = new SDK.Ed25519PrivateKey(Fixtures.Keys.ed25519.privateKey.raw);

        const restored = await retrieveKey(sut);

        expect(restored.isSignable()).to.eql(true);
        const message = Buffer.from("round-trip-signature-check");
        const signature = (restored as SDK.Ed25519PrivateKey).sign(message);
        const publicKey = sut.publicKey();
        expect(publicKey.canVerify()).to.eql(true);
        expect(publicKey.verify(message, signature)).to.eql(true);
      });
    });
  });
});
