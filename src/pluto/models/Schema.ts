
export interface Schema<T = any> {
  version: number;
  primaryKey: string;
  type: "object";
  properties: {
    uuid: { type: "string"; maxLength?: number };
  } & {
    [K in keyof T]-?:
    T[K] extends string | undefined ? { type: "string"; maxLength?: number } :
    T[K] extends number | undefined ? { type: "number" } :
    T[K] extends boolean | undefined ? { type: "boolean" } :
    never;
  };
  encrypted: Array<keyof T & string>;
  required: Array<keyof T & string | "uuid">;
}

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


/**
 * helper for creating Schemas
 * handle repetitive and improve type safety
 * 
 * @param generator 
 * @returns 
 */
export const schemaFactory = <T>(generator: (schema: SchemaGenerator<T>) => void): Schema<T> => {
  const schema = {
    version: 0,
    type: 'object',
    primaryKey: 'uuid',
    properties: {
      uuid: {
        type: "string",
        maxLength: 60
      }
    },
    encrypted: [] as Array<InSchema<T>>,
    required: ["uuid"] as Array<InSchema<T> | "uuid">,
  } as Schema<T>;

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

  return schema;
};
