import { appendFile, writeFileSync } from "fs"
import { randomUUID } from "crypto";

import crypto from "crypto"
import { Buffer } from "buffer"

import { RIDB, StorageType } from "@trust0/ridb";
import { type Property } from "@trust0/ridb-core";
import { Apollo, makeCollections, Pluto } from "@hyperledger/identus-sdk";
import { type CollectionSchema, type CreateInstanceArgs } from "./types";
import { createStore } from "@trust0/identus-store";




export class Utils {

  static createPlutoInstance(args?: CreateInstanceArgs) {
    const { collections = makeCollections() } = args ?? {};
    const converted = Object.keys(collections).reduce<any>((all, current) => {
      all.schemas[current] = this.migrateSchema(collections[current].schema);
      all.migrations[current] = collections[current].migrationStrategies;
      return all;
    }, { schemas: {}, migrations: {} });

    const db: RIDB<typeof converted['schemas']> = new RIDB({
      dbName: "test-index" + randomUUID(),
      ...converted
    });

    const apollo = args?.apollo ?? new Apollo();
    const store = createStore({
      db,
      password: Buffer.from("demoapp").toString("hex"),
      storageType: StorageType.InMemory,
    });

    return new Pluto(store, apollo)
  }

  private static migrateSchema<
    T extends CollectionSchema,
    P extends Record<string, Property>
  >(schema: T, properties: P = {} as P): Omit<T, 'properties'> & {
    properties: T['properties'] & P;
    version: 0;
  } {
    const { properties: schemaProperties, ...schemaWithoutProperties } = schema;
    return {
      ...schemaWithoutProperties,
      version: 0 as const,
      properties: Object.fromEntries(
        Object.entries({ ...schemaProperties, ...properties }).map(([key, value]) => {
          const propValue: any = { ...value };
          // Ensure required is explicitly set
          if (propValue.required === undefined || propValue.required === false) {
            propValue.required = false;
          } else {
            propValue.required = true;
          }
          propValue.maxLength = undefined;
          return [key, propValue];
        })
      ) as T['properties'] & P
    };
  }

  static async asyncFilter<T>(arr: T[], predicate: (value: T, index: number, array: T[]) => Promise<boolean>) {
    const results = await Promise.all(arr.map(predicate))
    return arr.filter((_v, index) => results[index])
  }

  static prepareNotes() {
    writeFileSync("notes", "### End-to-end notes:\n\n")
  }

  static appendToNotes(message: string) {
    console.info("Adding to notes:", message)
    appendFile("notes", message + "\n", (err) => {
      if (err) console.error(err)
    })
  }

  static async repeat(times: number, callback: () => Promise<void>) {
    for (let i = 0; i < times; i++) {
      await callback()
    }
  }

  static async retry<T>(times: number, callback: () => Promise<T>) {
    let retry = 0
    let delegateError = null
    while (retry < times) {
      try {
        return await callback()
      } catch (err) {
        Utils.appendToNotes(`Failure: ${err.message}. Trying to run again.`)
        delegateError = err
      }
      retry++
    }
    const error = Error(`${delegateError.message} afer retrying [${times}] times`)
    error.stack = delegateError.stack
    throw error
  }

  static generateNonce(length: number): string {
    let result = ""
    while (result.length < length) {
      const byte = crypto.randomBytes(1)[0]
      if (byte >= 250) {
        continue
      }
      const randomDigit = byte % 10
      result += randomDigit.toString()
    }
    return result
  }

  static decodeBase64URL(encodedString: string): string {
    const buffer = Buffer.from(encodedString, "base64url")
    return buffer.toString("utf8")
  }
}
