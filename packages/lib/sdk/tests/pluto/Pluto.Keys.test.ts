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
  });
});
