import type { SchemaType } from '@trust0/ridb-core';


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
  addProperty<K extends keyof T>(
    type: T[K] extends string | undefined ? "string" :
      T[K] extends number | undefined ? "number" :
      T[K] extends boolean | undefined ? "boolean" : never,
    key: K,
    opts?: T[K] extends string | undefined ? { maxLength?: number } : Record<string, any>
  ): void;
  addProperty(type: PropertyTypes, key: string, opts?: any): void;
  setEncrypted(...keys: Array<keyof T & string>): void;
  setRequired(...keys: Array<keyof T & string>): void;
  setVersion(version: number): void;
}

type InSchema<T> = keyof T & string;

// Type for the schema that constrains properties to only those that were added
type TypedSchema<T> = Omit<SchemaType, 'properties'> & {
  required: string[];
  encrypted: string[];
  properties: {
    [K in keyof T | 'uuid']: K extends 'uuid'
    ? { type: "string"; maxLength: number }
    : { type: string; required?: boolean };
  };
};

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
    addProperty: (type: PropertyTypes, key: string, opts = {}) => {
      (schema.properties as any)[key] = { type, ...opts };
    },
    setEncrypted: (...keys: Array<InSchema<T>>) => {
      schema.encrypted.push(...keys);
    },
    setRequired: (...keys: Array<InSchema<T> | "uuid">) => {
      schema.required.push(...keys);
    },
    setVersion: (version: number) => { schema.version = version; }
  });

  return schema as TypedSchema<T>;
};
