import { randomUUID } from "crypto";
import { Apollo, Pluto } from "../../../src";
import InMemoryStore from "./index";
import { RxdbStore } from "@trust0/identus-store-rxdb";

export const mockPluto = (args?: { apollo: Apollo; }) => {
  const apollo = args?.apollo ?? new Apollo();

  const store = new RxdbStore({
    name: 'test' + randomUUID(),
    storage: InMemoryStore,
    password: Buffer.from("demoapp").toString("hex")
  });

  return new Pluto(store, apollo);
};
