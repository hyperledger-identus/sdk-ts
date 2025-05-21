import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import { randomUUID } from "crypto";
import InMemoryStore from "../fixtures/inmemory";
import { RxdbStore } from "@trust0/identus-store-rxdb";

describe("Pluto - Store", () => {
  let sut: RxdbStore;

  beforeEach(async () => {
    sut = new RxdbStore({
      name: "randomdb" + randomUUID(),
      storage: InMemoryStore,
      password: 'random12434',
      ignoreDuplicate: true
    });

    await sut.start();
  });

  test("empty table - returns empty array", async () => {
    const result = await sut.query("dids");
    expect(result).toEqual([]);
  });

  test("inserted record - present in returned array", async () => {
    const record = {
      uuid: "test1",
      method: "test_method",
      schema: "test_schema",
    };
    await sut.insert("dids", record);

    const result = await sut.query("dids");
    expect(result).toEqual([expect.objectContaining(record)]);
  });

  test("updated record - present in returned array", async () => {
    const record = {
      uuid: "test2",
      method: "test_method",
      schema: "test_schema",
    };
    await sut.insert("dids", record);

    const updatedRecord = Object.assign({}, record, {
      method: "updated_method",
      newField: "abc",
    });
    await sut.update("dids", updatedRecord);

    const result = await sut.query("dids");

    expect(result).toEqual([expect.objectContaining(updatedRecord)]);
  });

  test("deleted record - not in returned array", async () => {
    const record = {
      uuid: "test3",
      method: "test_method",
      schema: "test_schema",
    };
    await sut.insert("dids", record);
    await sut.delete("dids", record.uuid);

    const result = await sut.query("dids");
    expect(result).toEqual([]);
  });
});
