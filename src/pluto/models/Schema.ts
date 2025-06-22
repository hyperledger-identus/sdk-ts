import type { SchemaType } from '@trust0/ridb-core';

// Helper types for extracting properties from the interface
type ExtractModelProperties<T> = Omit<T, 'uuid'>;
type ModelPropertyNames<T> = keyof ExtractModelProperties<T>;

// Helper types to distinguish between required and optional properties
type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T];

// Helper types to distinguish between optional properties
type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never
}[keyof T];

// Extract only required properties (excluding uuid which is handled separately)
type ModelRequiredKeys<T> = Exclude<RequiredKeys<T>, 'uuid'>;

// Extract only optional properties (excluding uuid which is handled separately)
type ModelOptionalKeys<T> = Exclude<OptionalKeys<T>, 'uuid'>;

// Type to convert TypeScript types to schema property definitions for required fields
type RequiredTypeToSchemaType<T> =
  T extends string ? { type: 'string', required: true }
  : T extends number ? { type: 'number', required: true }
  : T extends boolean ? { type: 'boolean', required: true }
  : never; // fallback

// Type to convert TypeScript types to schema property definitions for optional fields
type OptionalTypeToSchemaType<T> =
  T extends string ? { type: 'string' }
  : T extends number ? { type: 'number' }
  : T extends boolean ? { type: 'boolean' }
  : never; // fallback

// The properly typed schema return type  
type TypedSchema<T> = {
  encrypted: ModelPropertyNames<T>[];
  version: number;
  primaryKey: string;
  type: string;
  indexes?: string[];
  properties: {
    [K in 'uuid' | ModelRequiredKeys<T> | ModelOptionalKeys<T>]: K extends 'uuid'
    ? { type: 'string', maxLength: 60, required: true }
    : K extends ModelRequiredKeys<T>
    ? RequiredTypeToSchemaType<T[K]>
    : K extends ModelOptionalKeys<T>
    ? OptionalTypeToSchemaType<T[K]>
    : never;
  };
};

type StringKeys<T> = Exclude<Extract<keyof T, string>, "uuid">;
type KeysOf<T, X> = { [K in keyof T]-?: X extends T[K] ? K : never; }[StringKeys<T>];
type KeysFor<T, P extends PropertyTypes> = P extends "number"
  ? KeysOf<T, number>
  : P extends "string"
  ? KeysOf<T, string>
  : P extends "boolean"
  ? KeysOf<T, boolean>
  : never;

type PropertyTypes = "boolean" | "number" | "string";

interface SchemaGenerator<T> {
  addProperty<P extends PropertyTypes>(type: P, key: KeysFor<T, P>, opts?: any): void;
  addProperty(type: PropertyTypes, key: string, opts?: any): void;
  setEncrypted<K extends StringKeys<T>>(...keys: K[]): K[];
  setRequired(...keys: StringKeys<T>[]): void;
  setVersion(version: number): void;
}

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
        maxLength: 60
      }
    },
    encrypted: []
  };

  const encryptedKeys = new Set<string>();

  generator({
    addProperty: (type: any, key: string, opts = {}) => { schema.properties[key] = { type, ...opts }; },
    setEncrypted: (...keys) => {
      keys.forEach(key => encryptedKeys.add(key));
      schema.encrypted.push(...keys);
      return keys;
    },
    setRequired: (...keys) => {
      for (const key of keys) {
        schema.properties[key] = {
          ...schema.properties[key],
          required: true as const
        }
      }
    },
    setVersion: (version) => { schema.version = version; }
  });

  return schema as TypedSchema<T>;
};
