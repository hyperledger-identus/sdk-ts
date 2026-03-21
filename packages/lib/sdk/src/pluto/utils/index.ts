/**
 * Schema utilities for Pluto models.
 *
 * @module Pluto/Utils
 */
import { type SchemaType } from '@trust0/ridb-core';
import { type SchemaGenerator, type PropertyTypes, type TypedSchema } from '../types';

/**
 * Create a typed RIDB schema for a Pluto model.
 *
 * Provides a builder-style callback so that schema definitions are
 * declarative, repetitive boilerplate (e.g. `uuid` primary key) is
 * handled automatically, and the resulting schema is fully typed
 * via {@link TypedSchema}.
 *
 * @typeParam T - The Model interface this schema describes.
 * @param generator - Callback that receives a {@link SchemaGenerator}
 *   and calls its methods to define properties, encryption, and version.
 * @returns A frozen {@link TypedSchema} ready for use in collection definitions.
 *
 * @example
 * ```ts
 * import { schemaFactory } from "./utils";
 *
 * interface MyModel extends Model {
 *   name: string;
 *   secret: string;
 * }
 *
 * const MySchema = schemaFactory<MyModel>(schema => {
 *   schema.addProperty("string", "name");
 *   schema.addProperty("string", "secret");
 *   schema.setRequired("name", "secret");
 *   schema.setEncrypted("secret");
 *   schema.setVersion(0);
 * });
 * ```
 */
export const schemaFactory = <T>(
  generator: (schema: SchemaGenerator<T>) => void
) => {
  const schema: SchemaType & { encrypted: string[] } = {
    version: 0,
    type: 'object',
    primaryKey: 'uuid',
    properties: {
      uuid: {
        type: "string" as const,
      }
    },
    encrypted: []
  };

  const encryptedKeys = new Set<string>();

  generator({
    addProperty: (type: PropertyTypes, key: string, opts = { required: false }) => { schema.properties[key] = { type, ...opts }; },
    setEncrypted: (...keys) => {
      keys.forEach(key => encryptedKeys.add(key));
      return keys;
    },
    setRequired: (...keys) => {
      for (const key of keys) {
        schema.properties[key] = {
          ...schema.properties[key],
          required: true
        }
      }
    },
    setVersion: (version) => { schema.version = version; }
  });

  return {
    ...schema,
    encrypted: Array.from(encryptedKeys)
  } as TypedSchema<T>;
};
