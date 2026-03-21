import { type SchemaType } from '@trust0/ridb-core';
import { type SchemaGenerator, type PropertyTypes, type TypedSchema } from '../types';



/**
 * helper for creating Schemas
 * handle repetitive and improve type safety
 * 
 * @param generator 
 * @returns 
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
