import { describe, expect, test, beforeEach } from 'vitest';
import * as SDK from "../../src";
import * as Fixtures from "../fixtures";
import { randomUUID } from 'node:crypto';
import { createStore } from "../../src/pluto/store";

describe("Pluto Atomicity", () => {
  let defaultStore: SDK.Pluto.Store;
  let failingStore: SDK.Pluto.Store;
  let instance: SDK.Domain.Pluto;
  let apollo: SDK.Apollo;

  beforeEach(async () => {
    apollo = new SDK.Apollo();
    defaultStore = await createStore("test-" + randomUUID());
    
    // Create a proxy store that fails on the second write (DIDKeyLink)
    failingStore = {
      ...defaultStore,
      insert: async (table, model) => {
        if (table === "didkey-link") {
          throw new Error("Simulated DB Failure on DIDKeyLink");
        }
        return defaultStore.insert(table, model);
      }
    };

    instance = await SDK.Pluto.create({
      store: failingStore,
      keyRestoration: apollo,
    });
    await instance.start();
  });

  test("storeDID should be atomic and not leave orphaned DIDs on partial failure", async () => {
    // BUG: storeDID performs multiple separate database inserts without a transaction, leaving orphaned records if a later insert fails.
    const sutDID = SDK.Domain.DID.from("did:prism:atomicity-mock1");
    const sutKey = new SDK.X25519PrivateKey(Fixtures.Keys.x25519.privateKey.raw);

    // The storeDID call will fail because failingStore throws on "didkey-link" insert
    let errorCaught = false;
    try {
      await instance.storeDID(sutDID, sutKey);
    } catch (e) {
      errorCaught = true;
    }
    
    expect(errorCaught).toBe(true);

    // If the operation is atomic, the DID should NOT be in the database
    // We check the underlying working store for the orphaned DID
    const orphanedDIDs = await defaultStore.query("dids", { selector: { uuid: sutDID.uuid } });
    
    // This expect will FAIL because the code is currently NOT atomic (orphaned DID is left behind)
    expect(orphanedDIDs).toHaveLength(0);
  });
});
