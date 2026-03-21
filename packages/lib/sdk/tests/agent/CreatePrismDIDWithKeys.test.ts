import { vi, describe, expect, test, beforeEach, afterEach } from 'vitest';
import * as Domain from '@hyperledger/identus-domain';
import { CreatePrismDIDWithKeys } from '../../src/edge-agent/didFunctions';
import { Task } from '../../src/utils';
import * as Fixtures from "../fixtures";
import { createInstance } from '../fixtures/pluto';
import { Apollo, Castor } from '../../src';

describe("CreatePrismDIDWithKeys", () => {
  let ctx: Task.Context<{
    Castor: Domain.Castor;
    Pluto: Domain.Pluto;
  }>;
  let castor: Domain.Castor;
  let pluto: Domain.Pluto;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("Task Parameters", () => {
    beforeEach(async () => {
      castor = { createPrismDID: vi.fn() } as any;
      pluto = (await createInstance({ apollo: new Apollo() })).pluto;
      ctx = new Task.Context({
        Castor: castor,
        Pluto: pluto,
      });
    });

    test("Passing MASTER_KEY is required or will throw an error", async () => {
      await expect(
        ctx.run(new CreatePrismDIDWithKeys({} as any))
      ).rejects.toThrow("MASTER_KEY is required");
    });

    test("MASTER_KEY only - creates DID with master key only", async () => {
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
        masterKey.publicKey(),
        undefined,
        expect.objectContaining({})
      );

      expect(spyStoreDID).toHaveBeenCalledOnce();
      expect(spyStoreDID).toHaveBeenCalledWith(
        Fixtures.DIDs.prismDIDDefault,
        expect.arrayContaining([masterKey]),
        undefined
      );
    });

    test("Providing MASTER_KEY and AUTHENTICATION_KEY, creates DID with master and authentication keys", async () => {

      const masterKey = Fixtures.Keys.secp256K1.privateKey;
      vi.spyOn(masterKey, "publicKey").mockReturnValue(Fixtures.Keys.secp256K1.publicKey);

      const authenticationKey = Fixtures.Keys.ed25519.privateKey;
      vi.spyOn(authenticationKey, "publicKey").mockReturnValue(Fixtures.Keys.ed25519.publicKey);

      const spyCreatePrismDID = vi.spyOn(castor, "createPrismDID").mockResolvedValue(Fixtures.DIDs.prismDIDDefault);
      const spyStoreDID = vi.spyOn(pluto, "storeDID").mockResolvedValue();

      const result = await ctx.run(new CreatePrismDIDWithKeys({
        keys: { MASTER_KEY: masterKey, AUTHENTICATION_KEY: [authenticationKey] },
      }));

      expect(result).toBe(Fixtures.DIDs.prismDIDDefault);

      expect(spyCreatePrismDID).toHaveBeenCalledOnce();
      expect(spyCreatePrismDID).toHaveBeenCalledWith(
        masterKey.publicKey(),
        undefined,
        expect.objectContaining({ AUTHENTICATION_KEY: [authenticationKey.publicKey()] })
      );

      expect(spyStoreDID).toHaveBeenCalledOnce();
      expect(spyStoreDID).toHaveBeenCalledWith(
        Fixtures.DIDs.prismDIDDefault,
        expect.arrayContaining([masterKey, authenticationKey]),
        undefined
      );
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
      pluto = (await createInstance({ apollo: new Apollo() })).pluto;
      ctx = new Task.Context({
        Apollo: apollo,
        Castor: castor,
        Pluto: pluto,
        Seed: {
          value: new Uint8Array([69, 191, 35, 232, 213, 102, 3, 93, 180, 106, 224, 144, 79, 171, 79, 223, 154, 217, 235, 232, 96, 30, 248, 92, 100, 38, 38, 42, 101, 53, 2, 247, 56, 111, 148, 220, 237, 122, 15, 120, 55, 82, 89, 150, 35, 45, 123, 135, 159, 140, 52, 127, 239, 148, 150, 109, 86, 145, 77, 109, 47, 60, 20, 16])
        },
      });
    });

    test("create with MASTER_KEY only -> resolve > valid DID document with no authentication or issuing keys", async () => {
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

      expect(doc.assertionMethod).toEqual([]);
      expect(doc.authentication).toEqual([]);
    });
  });
});
