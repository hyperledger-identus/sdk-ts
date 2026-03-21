/**
 * Re-export query types from ridb-core for use across Pluto.
 */
import type { QueryType, QueryOptions, BaseStorage as BaseStorageCore, SchemaType, SchemaFieldType, } from '@trust0/ridb-core';
import type { makeCollections } from "./collections";
import { StorageType as StorageTypeCore } from "@trust0/ridb";
import type * as Models from "./models";
export type { QueryType, QueryOptions };
import type * as Domain from "@hyperledger/identus-domain";

export type BaseStorage = typeof BaseStorageCore;
export { StorageTypeCore as StorageType };
/**
 * Define common properties
 * 
 *   - uuid: Universally Unique Identifier
 */
export type Model = Domain.Pluto.Storable;

/**
 * Query type used by Pluto repositories.
 * Wraps ridb-core's QueryType with a selector field and QueryOptions.
 */
export type Query<S extends SchemaType> = {
    selector?: QueryType<S>;
} & QueryOptions;

export interface CollectionMap {
    "credentials": Models.Credential;
    "credential-metadata": Models.CredentialMetadata;
    "dids": Models.DID;
    "keys": Models.Key;
    "messages": Models.Message;
    "didkey-link": Models.DIDKeyLink;
    "did-link": Models.DIDLink;
    "settings": Models.Settings;
    "issuance": Models.Issuance;
}

export type TableName = keyof CollectionMap;

export type Collections<T = ReturnType<typeof makeCollections>> = {
    [key in keyof T]: T[key]
};

/**
 * Derive schema types directly from makeCollections return type.
 * This maps each collection name to its concrete SchemaType.
 */
export type CollectionSchemas = {
    [K in keyof Collections]: Collections[K] extends { schema: infer S extends SchemaType } ? S : never;
};

export type WithStart = { start: () => Promise<void> };
export type WithOptions = { password?: string, storageType?: BaseStorage | StorageTypeCore };
export type StartOptions = WithStart | WithOptions;

export type StringKeys<T> = Exclude<Extract<keyof T, string>, "uuid">;

// Helper types for extracting properties from the interface
export type ExtractModelProperties<T> = Omit<T, 'uuid'>;
export type ModelPropertyNames<T> = Extract<keyof ExtractModelProperties<T>, string>;

// Helper types to distinguish between required and optional properties
export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T];

// Helper types to distinguish between optional properties
export type OptionalKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? K : never
}[keyof T];

// Extract only required properties (excluding uuid which is handled separately)
export type ModelRequiredKeys<T> = Exclude<RequiredKeys<T>, 'uuid'>;

// Extract only optional properties (excluding uuid which is handled separately)
export type ModelOptionalKeys<T> = Exclude<OptionalKeys<T>, 'uuid'>;

// Type to convert TypeScript types to schema property definitions for required fields
export type RequiredTypeToSchemaType<T> =
    T extends string ? { type: 'string', required: true }
    : T extends number ? { type: 'number', required: true }
    : T extends boolean ? { type: 'boolean', required: true }
    : never; // fallback

// Type to convert TypeScript types to schema property definitions for optional fields
export type OptionalTypeToSchemaType<T> =
    T extends string ? { type: 'string' }
    : T extends number ? { type: 'number' }
    : T extends boolean ? { type: 'boolean' }
    : never; // fallback

// The properly typed schema return type  
export type TypedSchema<T> = {
    encrypted: ModelPropertyNames<T>[];
    version: number;
    primaryKey: string;
    type: string;
    indexes?: string[];
    properties: {
        [K in 'uuid' | ModelRequiredKeys<T> | ModelOptionalKeys<T>]: K extends 'uuid'
        ? { type: 'string', required: true }
        : K extends ModelRequiredKeys<T>
        ? RequiredTypeToSchemaType<T[K]>
        : K extends ModelOptionalKeys<T>
        ? OptionalTypeToSchemaType<T[K]>
        : never;
    };
};

export type PropertyTypes = keyof typeof SchemaFieldType;

export type KeysOf<T, X> = { [K in keyof T]-?: X extends T[K] ? K : never; }[StringKeys<T>];
export type KeysFor<T, P extends PropertyTypes> = P extends "number"
    ? KeysOf<T, number>
    : P extends "string"
    ? KeysOf<T, string>
    : P extends "boolean"
    ? KeysOf<T, boolean>
    : never;

export interface SchemaGenerator<T> {
    addProperty<P extends PropertyTypes>(type: P, key: KeysFor<T, P>, opts?: any): void;
    addProperty(type: PropertyTypes, key: string, opts?: any): void;
    setEncrypted<K extends StringKeys<T>>(...keys: K[]): K[];
    setRequired(...keys: StringKeys<T>[]): void;
    setVersion(version: number): void;
}