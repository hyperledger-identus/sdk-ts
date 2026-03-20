import { randomUUID } from "crypto";
import { StorageType } from "@trust0/ridb";
import { createStore } from '@trust0/identus-store';
import { Apollo, Pluto } from "../../src";

type CreateInstanceArgs = {
  apollo?: Apollo;
  name?: string;
  collections?: any;
}

export const createInstance = async (args?: CreateInstanceArgs) => {
  const apollo = args?.apollo ?? new Apollo();
  const store = await createStore({
    dbName: "test-index" + randomUUID(),
    password: Buffer.from("demoapp").toString("hex"),
    storageType: StorageType.InMemory,
  });
  return {
    pluto: new Pluto(store, apollo),
    store
  }
};