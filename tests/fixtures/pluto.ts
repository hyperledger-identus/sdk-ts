import { randomUUID } from "crypto";
import { RIDB, StorageType } from "@trust0/ridb";
import { createStore } from '@trust0/identus-store';
import { Property } from "@trust0/ridb-core";
import { Apollo, makeCollections, Pluto } from "../../src";


type CreateInstanceArgs = {
  apollo?: Apollo;
  name?: string;
  collections?: any;
}

const collections = makeCollections();

type Collections = {
  [key in keyof typeof collections]: typeof collections[key]
};

type CollectionSchemas = {
  [key in keyof Collections]: {
    version: Collections[key]['schema']['version'];
    primaryKey: Collections[key]['schema']['primaryKey'];
    type: Collections[key]['schema']['type'];
    encrypted: Collections[key]['schema']['encrypted'];
    properties: Collections[key]['schema']['properties'];
  };
}

type CollectionSchema = CollectionSchemas[keyof CollectionSchemas];

function migrateSchema<
  T extends CollectionSchema,
  P extends Record<string, Property>
>(schema: T, properties: P = {} as P): Omit<T, 'properties'> & {
  properties: T['properties'] & P;
  version: 0;
} {
  const { properties: schemaProperties, ...schemaWithoutProperties } = schema;
  const props = {
    ...schemaProperties,
    ...properties
  };
  return {
    ...schemaWithoutProperties,
    version: 0 as const,
    properties: Object.fromEntries(
      Object.entries(props).map(([key, value]) => {
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


export const createInstance = (args?: CreateInstanceArgs) => {
  const { collections = makeCollections() } = args ?? {};

  const converted = Object.keys(collections).reduce<any>((all, current) => {
    all.schemas[current] = migrateSchema(collections[current].schema);
    all.migrations[current] = collections[current].migrationStrategies;
    return all;
  }, { schemas: {}, migrations: {} });

  let db: RIDB<typeof converted['schemas']> = new RIDB({
    dbName: "test-index" + randomUUID(),
    ...converted
  });

  const apollo = args?.apollo ?? new Apollo();
  const store = createStore({
    db,
    password: Buffer.from("demoapp").toString("hex"),
    storageType: StorageType.InMemory,
  });

  return {
    pluto: new Pluto(store, apollo),
    store
  }
};