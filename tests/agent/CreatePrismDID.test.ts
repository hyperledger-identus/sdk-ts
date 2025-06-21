import { vi, describe, expect, test, beforeEach, afterEach } from 'vitest';
import * as Domain from "../../src/domain";
import { CreatePrismDID, PrismKeyPathIndexTask } from '../../src/edge-agent/didFunctions';
import { Task } from '../../src/utils';
import * as Fixtures from "../fixtures";
import { mockTask } from '../testFns';
import { PrismDIDKeyUsage, PrismDerivationPath, PrismDerivationPathSchema } from '../../src/domain/models/derivation/schemas/PrismDerivation';
import { Apollo, Castor } from '../../src';
import { createInstance } from '../fixtures/pluto';

describe("CreatePrismDID", () => {
  let ctx: Task.Context;
  let apollo: Domain.Apollo;
  let castor: Domain.Castor;
  let pluto: Domain.Pluto;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("Task Parameters", () => {
    beforeEach(async () => {
      apollo = { createPrivateKey: vi.fn() } as any;
      castor = { createPrismDID: vi.fn() } as any;
      pluto = createInstance().pluto
      ctx = new Task.Context({
        Apollo: apollo,
        Castor: castor,
        Pluto: pluto,
        Seed: { value: "abc" },
      });
    });

    test("default params - passed through correctly", async () => {
      const index = 1;
      const masterKeyDerivation = PrismDerivationPath.init(index, PrismDIDKeyUsage.MASTER_KEY);
      const issuingDerivation = PrismDerivationPath.init(index, PrismDIDKeyUsage.ISSUING_KEY);
      mockTask(PrismKeyPathIndexTask, index);
      const spyCreatePrivateKey = vi.spyOn(apollo, "createPrivateKey")
        .mockReturnValueOnce(Fixtures.Keys.secp256K1.privateKey)
        .mockReturnValueOnce(Fixtures.Keys.ed25519.privateKey);
      vi.spyOn(Fixtures.Keys.secp256K1.privateKey, "publicKey").mockReturnValue(Fixtures.Keys.secp256K1.publicKey);
      vi.spyOn(Fixtures.Keys.ed25519.privateKey, "publicKey").mockReturnValue(Fixtures.Keys.ed25519.publicKey);
      const spyCreatePrismDID = vi.spyOn(castor, "createPrismDID")
        .mockResolvedValue(Fixtures.DIDs.prismDIDDefault);
      const spyStoreDID = vi.spyOn(pluto, "storeDID").mockResolvedValue();

      await ctx.run(new CreatePrismDID({}));

      expect(spyCreatePrivateKey).toHaveBeenCalledTimes(2);
      expect(spyCreatePrivateKey).toHaveBeenCalledWith({
        [Domain.KeyProperties.curve]: Domain.Curve.SECP256K1,
        [Domain.KeyProperties.seed]: Buffer.from(ctx.Seed.value).toString("hex"),
        [Domain.KeyProperties.derivationPath]: masterKeyDerivation.toString(),
        [Domain.KeyProperties.derivationSchema]: PrismDerivationPathSchema
      });
      expect(spyCreatePrivateKey).toHaveBeenCalledWith({
        [Domain.KeyProperties.curve]: Domain.Curve.ED25519,
        [Domain.KeyProperties.seed]: Buffer.from(ctx.Seed.value).toString("hex"),
        [Domain.KeyProperties.derivationPath]: issuingDerivation.toString(),
        [Domain.KeyProperties.derivationSchema]: PrismDerivationPathSchema
      });

      expect(spyCreatePrismDID).toHaveBeenCalledOnce();
      expect(spyCreatePrismDID).toHaveBeenCalledWith(
        Fixtures.Keys.secp256K1.publicKey,
        undefined,
        [Fixtures.Keys.ed25519.publicKey]
      );

      expect(spyStoreDID).toHaveBeenCalledOnce();
      expect(spyStoreDID).toHaveBeenCalledWith(
        Fixtures.DIDs.prismDIDDefault,
        [Fixtures.Keys.secp256K1.privateKey, Fixtures.Keys.ed25519.privateKey],
        undefined
      );
    });

    test("authenticationKeyCurve - used to create Authentication key", async () => {
      const authenticationKeyCurve = Domain.Curve.X25519;
      const index = 2;
      const issuingDerivation = PrismDerivationPath.init(index, PrismDIDKeyUsage.ISSUING_KEY);
      mockTask(PrismKeyPathIndexTask, index);
      const spyCreatePrivateKey = vi.spyOn(apollo, "createPrivateKey")
        .mockReturnValueOnce(Fixtures.Keys.secp256K1.privateKey)
        .mockReturnValueOnce(Fixtures.Keys.ed25519.privateKey);
      vi.spyOn(castor, "createPrismDID").mockResolvedValue(Fixtures.DIDs.prismDIDDefault);
      vi.spyOn(pluto, "storeDID").mockResolvedValue();

      await ctx.run(new CreatePrismDID({ authenticationKeyCurve }));

      expect(spyCreatePrivateKey).toHaveBeenCalledTimes(2);
      expect(spyCreatePrivateKey).toHaveBeenCalledWith({
        [Domain.KeyProperties.curve]: authenticationKeyCurve,
        [Domain.KeyProperties.seed]: Buffer.from(ctx.Seed.value).toString("hex"),
        [Domain.KeyProperties.derivationPath]: issuingDerivation.toString(),
        [Domain.KeyProperties.derivationSchema]: PrismDerivationPathSchema
      });
    });

    test("services - passed to createPrismDID", async () => {
      const services = [{ testService: true }] as any;
      mockTask(PrismKeyPathIndexTask, 3);
      vi.spyOn(apollo, "createPrivateKey")
        .mockReturnValueOnce(Fixtures.Keys.secp256K1.privateKey)
        .mockReturnValueOnce(Fixtures.Keys.ed25519.privateKey);
      vi.spyOn(Fixtures.Keys.secp256K1.privateKey, "publicKey").mockReturnValue(Fixtures.Keys.secp256K1.publicKey);
      vi.spyOn(Fixtures.Keys.ed25519.privateKey, "publicKey").mockReturnValue(Fixtures.Keys.ed25519.publicKey);
      vi.spyOn(pluto, "storeDID").mockResolvedValue();
      const spyCreatePrismDID = vi.spyOn(castor, "createPrismDID")
        .mockResolvedValue(Fixtures.DIDs.prismDIDDefault);

      await ctx.run(new CreatePrismDID({ services }));

      expect(spyCreatePrismDID).toHaveBeenCalledOnce();
      expect(spyCreatePrismDID).toHaveBeenCalledWith(
        Fixtures.Keys.secp256K1.publicKey,
        services,
        [Fixtures.Keys.ed25519.publicKey]
      );
    });

    test("alias - passed to storeDID", async () => {
      const alias = "test-alias";
      mockTask(PrismKeyPathIndexTask, 4);
      vi.spyOn(apollo, "createPrivateKey")
        .mockReturnValueOnce(Fixtures.Keys.secp256K1.privateKey)
        .mockReturnValueOnce(Fixtures.Keys.ed25519.privateKey);
      vi.spyOn(castor, "createPrismDID").mockResolvedValue(Fixtures.DIDs.prismDIDDefault);
      const spyStoreDID = vi.spyOn(pluto, "storeDID").mockResolvedValue();

      await ctx.run(new CreatePrismDID({ alias }));

      expect(spyStoreDID).toHaveBeenCalledOnce();
      expect(spyStoreDID).toHaveBeenCalledWith(
        Fixtures.DIDs.prismDIDDefault,
        [Fixtures.Keys.secp256K1.privateKey, Fixtures.Keys.ed25519.privateKey],
        alias
      );
    });
  });

  describe("Integration", async () => {
    beforeEach(async () => {
      apollo = new Apollo();
      castor = new Castor(apollo);
      pluto = createInstance().pluto
      ctx = new Task.Context({
        Apollo: apollo,
        Castor: castor,
        Pluto: pluto,
        Seed: {
          value: new Uint8Array([69, 191, 35, 232, 213, 102, 3, 93, 180, 106, 224, 144, 79, 171, 79, 223, 154, 217, 235, 232, 96, 30, 248, 92, 100, 38, 38, 42, 101, 53, 2, 247, 56, 111, 148, 220, 237, 122, 15, 120, 55, 82, 89, 150, 35, 45, 123, 135, 159, 140, 52, 127, 239, 148, 150, 109, 86, 145, 77, 109, 47, 60, 20, 16])
        }
      });
    });

    test("create -> resolve > expected keys", async () => {
      mockTask(PrismKeyPathIndexTask, 4);
      // vi.spyOn(apollo, "createPrivateKey")
      //   .mockReturnValueOnce(Fixtures.Keys.secp256K1.privateKey)
      //   .mockReturnValueOnce(Fixtures.Keys.ed25519.privateKey);
      // vi.spyOn(castor, "createPrismDID").mockResolvedValue(Fixtures.DIDs.prismDIDDefault);
      vi.spyOn(pluto, "storeDID").mockResolvedValue();

      const result = await ctx.run(new CreatePrismDID({}));
      const doc = await castor.resolveDID(result);

      expect(doc).not.toBeNull();
    });
  });
});
