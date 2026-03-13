import { vi, describe, expect, test, beforeEach, afterEach } from 'vitest';
import * as Domain from "../../src/domain";
import { CreatePrismDIDWithKeys } from '../../src/edge-agent/didFunctions';
import { Task } from '../../src/utils';
import * as Fixtures from "../fixtures";
import { createInstance } from '../fixtures/pluto';
import { Apollo, Castor } from '../../src';

describe("CreatePrismDIDWithKeys", () => {
  let ctx: Task.Context;
  let castor: Domain.Castor;
  let pluto: Domain.Pluto;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("Task Parameters", () => {
    beforeEach(async () => {
      castor = { createPrismDID: vi.fn() } as any;
      pluto = createInstance().pluto;
      ctx = new Task.Context({
        Castor: castor,
        Pluto: pluto,
      });
    });

    test("MASTER_KEY only - creates DID with master key", async () => {
      const masterKey = Fixtures.Keys.secp256K1.privateKey;
      vi.spyOn(masterKey, "publicKey").mockReturnValue(Fixtures.Keys.secp256K1.publicKey);
      const spyCreatePrismDID = vi.spyOn(castor, "createPrismDID")
        .mockResolvedValue(Fixtures.DIDs.prismDIDDefault);
      const spyStoreDID = vi.spyOn(pluto, "storeDID").mockResolvedValue();

      const result = await ctx.run(new CreatePrismDIDWithKeys({
        keys: { MASTER_KEY: masterKey },
      }));

      expect(result).toBe(Fixtures.DIDs.prismDIDDefault);

      expect(spyCreatePrismDID).toHaveBeenCalledOnce();
      expect(spyCreatePrismDID).toHaveBeenCalledWith(
        Fixtures.Keys.secp256K1.publicKey,
        undefined,
        expect.objectContaining({ MASTER_KEY: [Fixtures.Keys.secp256K1.publicKey] })
      );

      expect(spyStoreDID).toHaveBeenCalledOnce();
      expect(spyStoreDID).toHaveBeenCalledWith(
        Fixtures.DIDs.prismDIDDefault,
        expect.arrayContaining([masterKey]),
        undefined
      );
    });

    test("MASTER_KEY + ISSUING_KEY - crashes due to getter-based publicKeys (known bug)", async () => {
      // BUG: publicKeys getter returns a new object every call,
      // so `this.publicKeys[keyUsage]` is undefined for non-MASTER_KEY entries
      // because the `if (!this.publicKeys[keyUsage]) this.publicKeys[keyUsage] = []`
      // assignment goes to a throwaway object
      const masterKey = Fixtures.Keys.secp256K1.privateKey;
      const issuingKey = Fixtures.Keys.ed25519.privateKey;
      vi.spyOn(masterKey, "publicKey").mockReturnValue(Fixtures.Keys.secp256K1.publicKey);
      vi.spyOn(issuingKey, "publicKey").mockReturnValue(Fixtures.Keys.ed25519.publicKey);
      vi.spyOn(castor, "createPrismDID").mockResolvedValue(Fixtures.DIDs.prismDIDDefault);
      vi.spyOn(pluto, "storeDID").mockResolvedValue();

      await expect(
        ctx.run(new CreatePrismDIDWithKeys({
          keys: {
            MASTER_KEY: masterKey,
            ISSUING_KEY: issuingKey,
          },
        }))
      ).rejects.toThrow("Cannot read properties of undefined (reading 'push')");
    });

    test("MASTER_KEY + AUTHENTICATION_KEY - crashes due to getter-based publicKeys (known bug)", async () => {
      // Same getter bug as above
      const masterKey = Fixtures.Keys.secp256K1.privateKey;
      const authKey = Fixtures.Keys.ed25519.privateKey;
      vi.spyOn(masterKey, "publicKey").mockReturnValue(Fixtures.Keys.secp256K1.publicKey);
      vi.spyOn(authKey, "publicKey").mockReturnValue(Fixtures.Keys.ed25519.publicKey);
      vi.spyOn(castor, "createPrismDID").mockResolvedValue(Fixtures.DIDs.prismDIDDefault);
      vi.spyOn(pluto, "storeDID").mockResolvedValue();

      await expect(
        ctx.run(new CreatePrismDIDWithKeys({
          keys: {
            MASTER_KEY: masterKey,
            AUTHENTICATION_KEY: authKey,
          },
        }))
      ).rejects.toThrow("Cannot read properties of undefined (reading 'push')");
    });

    test("services - passed to createPrismDID", async () => {
      const services = [{ testService: true }] as any;
      const masterKey = Fixtures.Keys.secp256K1.privateKey;
      vi.spyOn(masterKey, "publicKey").mockReturnValue(Fixtures.Keys.secp256K1.publicKey);
      const spyCreatePrismDID = vi.spyOn(castor, "createPrismDID")
        .mockResolvedValue(Fixtures.DIDs.prismDIDDefault);
      vi.spyOn(pluto, "storeDID").mockResolvedValue();

      await ctx.run(new CreatePrismDIDWithKeys({
        keys: { MASTER_KEY: masterKey },
        services,
      }));

      expect(spyCreatePrismDID).toHaveBeenCalledOnce();
      expect(spyCreatePrismDID).toHaveBeenCalledWith(
        Fixtures.Keys.secp256K1.publicKey,
        services,
        expect.any(Object)
      );
    });

    test("alias - passed to storeDID", async () => {
      const alias = "test-alias";
      const masterKey = Fixtures.Keys.secp256K1.privateKey;
      vi.spyOn(masterKey, "publicKey").mockReturnValue(Fixtures.Keys.secp256K1.publicKey);
      vi.spyOn(castor, "createPrismDID").mockResolvedValue(Fixtures.DIDs.prismDIDDefault);
      const spyStoreDID = vi.spyOn(pluto, "storeDID").mockResolvedValue();

      await ctx.run(new CreatePrismDIDWithKeys({
        keys: { MASTER_KEY: masterKey },
        alias,
      }));

      expect(spyStoreDID).toHaveBeenCalledOnce();
      expect(spyStoreDID).toHaveBeenCalledWith(
        Fixtures.DIDs.prismDIDDefault,
        expect.arrayContaining([masterKey]),
        alias
      );
    });

    test("returns the created DID", async () => {
      const masterKey = Fixtures.Keys.secp256K1.privateKey;
      vi.spyOn(masterKey, "publicKey").mockReturnValue(Fixtures.Keys.secp256K1.publicKey);
      vi.spyOn(castor, "createPrismDID").mockResolvedValue(Fixtures.DIDs.prismDIDDefault);
      vi.spyOn(pluto, "storeDID").mockResolvedValue();

      const result = await ctx.run(new CreatePrismDIDWithKeys({
        keys: { MASTER_KEY: masterKey },
      }));

      expect(result).toBe(Fixtures.DIDs.prismDIDDefault);
    });
  });

  describe("Integration", () => {
    let apollo: Domain.Apollo;

    beforeEach(async () => {
      apollo = new Apollo();
      castor = new Castor(apollo);
      pluto = createInstance().pluto;
      ctx = new Task.Context({
        Apollo: apollo,
        Castor: castor,
        Pluto: pluto,
        Seed: {
          value: new Uint8Array([69, 191, 35, 232, 213, 102, 3, 93, 180, 106, 224, 144, 79, 171, 79, 223, 154, 217, 235, 232, 96, 30, 248, 92, 100, 38, 38, 42, 101, 53, 2, 247, 56, 111, 148, 220, 237, 122, 15, 120, 55, 82, 89, 150, 35, 45, 123, 135, 159, 140, 52, 127, 239, 148, 150, 109, 86, 145, 77, 109, 47, 60, 20, 16])
        },
      });
    });

    test("create with MASTER_KEY only -> resolve > valid DID document", async () => {
      // Use real key fixtures directly (they have the correct byte size)
      const masterKey = Fixtures.Keys.secp256K1.privateKey;
      vi.spyOn(pluto, "storeDID").mockResolvedValue();

      const result = await ctx.run(new CreatePrismDIDWithKeys({
        keys: {
          MASTER_KEY: masterKey,
        },
      }));

      expect(result).toBeDefined();
      expect(result.toString()).toContain("did:prism:");

      const doc = await castor.resolveDID(result);
      expect(doc).not.toBeNull();
    });
  });
});
