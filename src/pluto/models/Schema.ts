import type { SchemaType } from '@trust0/ridb-core';

// Helper types for extracting properties from the interface
type ExtractModelProperties<T> = Omit<T, 'uuid'>;
type ModelPropertyNames<T> = keyof ExtractModelProperties<T>;

// Helper types to distinguish between required and optional properties
type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T];

// Extract only required properties (excluding uuid which is handled separately)
type ModelRequiredKeys<T> = Exclude<RequiredKeys<T>, 'uuid'>;

// Type to convert TypeScript types to schema property definitions
type TypeToSchemaType<T> =
  T extends string ? { type: 'string' }
  : T extends number ? { type: 'number' }
  : T extends boolean ? { type: 'boolean' }
  : { type: 'string' }; // fallback

// Type to create the properties object from the interface
type SchemaProperties<T> = {
  [K in keyof ExtractModelProperties<T>]: TypeToSchemaType<T[K]> & Record<string, any>
};

// The properly typed schema return type
type TypedSchema<T> = SchemaType & {
  required: Array<ModelRequiredKeys<T>>;
  encrypted: Array<ModelPropertyNames<T>>;
  properties: {
    uuid: { type: 'string', maxLength: 60 }
  } & SchemaProperties<T>;
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
  setEncrypted(...keys: StringKeys<T>[]): void;
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
export const schemaFactory = <T>(generator: (schema: SchemaGenerator<T>) => void): TypedSchema<T> => {
  const schema: SchemaType & { required: string[], encrypted: string[] } = {
    version: 0,
    type: 'object',
    primaryKey: 'uuid',
    properties: {
      uuid: {
        type: "string",
        maxLength: 60
      }
    },
    encrypted: [],
    required: ['uuid']
  };

  generator({
    addProperty: (type: any, key: string, opts = {}) => { schema.properties[key] = { type, ...opts }; },
    setEncrypted: (...keys) => { schema.encrypted.push(...keys); },
    setRequired: (...keys) => { schema.required.push(...keys); },
    setVersion: (version) => { schema.version = version; }
  });

  return schema as TypedSchema<T>;
};
