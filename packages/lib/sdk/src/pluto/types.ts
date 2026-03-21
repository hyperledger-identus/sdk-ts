/**
 * Pluto type definitions.
 *
 * Re-exports query primitives from `@trust0/ridb-core` and defines
 * the Model, collection, and schema types that form the Pluto storage contract.
 *
 * @module Pluto/Types
 */
import type { QueryType, QueryOptions, BaseStorage as BaseStorageCore, SchemaType, SchemaFieldType, } from '@trust0/ridb-core';
import type { makeCollections } from "./collections";
import { StorageType as StorageTypeCore } from "@trust0/ridb";
import type * as Models from "./models";
export type { QueryType, QueryOptions };
import type * as Domain from "@hyperledger/identus-domain";

/**
 * Abstract base-class for custom storage backends.
 *
 * Provide a subclass of `BaseStorage` to {@link WithOptions.storageType}
 * to persist data in a non-default location (e.g. filesystem, cloud).
 */
export type BaseStorage = typeof BaseStorageCore;
export { StorageTypeCore as StorageType };

/**
 * Base model type shared by every Pluto storable entity.
 *
 * Every model must carry a `uuid` string that uniquely identifies the record.
 */
export type Model = Domain.Pluto.Storable;

/**
 * Query type used by Pluto repositories.
 *
 * Wraps `@trust0/ridb-core` `QueryType` inside a `selector` field
 * and extends it with {@link QueryOptions} (e.g. `limit`, `skip`).
 *
 * @typeParam S - The {@link SchemaType} of the target collection.
 *
 * @example
 * ```ts
 * const q: Query<typeof CredentialSchema> = {
 *   selector: { issuer: "did:example:123" },
 *   limit: 10
 * };
 * ```
 */
export type Query<S extends SchemaType> = {
    selector?: QueryType<S>;
} & QueryOptions;

/**
 * Maps every known table name to its corresponding Model interface.
 *
 * Used by the {@link Pluto.Store} generic methods to enforce that
 * the correct model shape is used for a given table.
 */
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

/**
 * Union of all valid table names in the Pluto store.
 *
 * Derived from the keys of {@link CollectionMap}.
 */
export type TableName = keyof CollectionMap;

/**
 * Typed map of all RIDB collections as returned by {@link makeCollections}.
 *
 * @typeParam T - Defaults to the return type of `makeCollections`.
 */
export type Collections<T = ReturnType<typeof makeCollections>> = {
    [key in keyof T]: T[key]
};

/**
 * Maps each collection name to its concrete {@link SchemaType}.
 *
 * Derived from the `schema` property of each entry in {@link Collections}.
 * Used to parameterise {@link Query} so that selectors are type-checked
 * against the real schema shape.
 */
export type CollectionSchemas = {
    [K in keyof Collections]: Collections[K] extends { schema: infer S extends SchemaType } ? S : never;
};

/**
 * Start option that delegates database initialisation to a custom function.
 *
 * @example
 * ```ts
 * const opts: WithStart = {
 *   start: async () => { await myCustomDbInit(); }
 * };
 * ```
 */
export type WithStart = { start: () => Promise<void> };

/**
 * Start options for the default RIDB-backed store.
 *
 * @property password - Optional encryption password for the database.
 * @property storageType - Optional custom storage backend class.
 */
export type WithOptions = { password?: string, storageType?: BaseStorage | StorageTypeCore };

/**
 * Options passed to {@link createStore} controlling how the database starts.
 *
 * - Provide {@link WithStart} to fully control initialisation.
 * - Provide {@link WithOptions} to configure the default RIDB start.
 */
export type StartOptions = WithStart | WithOptions;

/**
 * All string keys of `T` excluding `"uuid"`.
 *
 * @internal
 */
export type StringKeys<T> = Exclude<Extract<keyof T, string>, "uuid">;

/**
 * All properties of `T` except `uuid`.
 * @internal
 */
export type ExtractModelProperties<T> = Omit<T, 'uuid'>;

/**
 * String names of all non-uuid properties of `T`.
 * @internal
 */
export type ModelPropertyNames<T> = Extract<keyof ExtractModelProperties<T>, string>;

/**
 * Keys of `T` whose properties are **required** (non-optional).
 * @internal
 */
export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T];

/**
 * Keys of `T` whose properties are **optional**.
 * @internal
 */
export type OptionalKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? K : never
}[keyof T];

/**
 * Required keys of model `T`, excluding `uuid` (handled separately).
 * @internal
 */
export type ModelRequiredKeys<T> = Exclude<RequiredKeys<T>, 'uuid'>;

/**
 * Optional keys of model `T`, excluding `uuid`.
 * @internal
 */
export type ModelOptionalKeys<T> = Exclude<OptionalKeys<T>, 'uuid'>;

/**
 * Converts a TypeScript primitive type to a RIDB schema property
 * definition **with** `required: true`.
 * @internal
 */
export type RequiredTypeToSchemaType<T> =
    T extends string ? { type: 'string', required: true }
    : T extends number ? { type: 'number', required: true }
    : T extends boolean ? { type: 'boolean', required: true }
    : never; // fallback

/**
 * Converts a TypeScript primitive type to a RIDB schema property
 * definition **without** `required` (defaults to optional).
 * @internal
 */
export type OptionalTypeToSchemaType<T> =
    T extends string ? { type: 'string' }
    : T extends number ? { type: 'number' }
    : T extends boolean ? { type: 'boolean' }
    : never; // fallback

/**
 * Fully-typed RIDB schema derived from a Model interface `T`.
 *
 * Used by {@link schemaFactory} to produce schemas whose `properties`
 * object mirrors the Model's fields with correct `type` and `required` flags.
 *
 * @typeParam T - A Model interface (e.g. {@link Models.Credential}).
 */
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

/**
 * Union of RIDB field type names (`"string"`, `"number"`, `"boolean"`, etc.).
 * @internal
 */
export type PropertyTypes = keyof typeof SchemaFieldType;

/**
 * Extract keys of `T` whose value is assignable to `X`.
 * @internal
 */
export type KeysOf<T, X> = { [K in keyof T]-?: X extends T[K] ? K : never; }[StringKeys<T>];

/**
 * Resolves to the keys of `T` whose value matches the primitive
 * corresponding to the RIDB field type `P`.
 * @internal
 */
export type KeysFor<T, P extends PropertyTypes> = P extends "number"
    ? KeysOf<T, number>
    : P extends "string"
    ? KeysOf<T, string>
    : P extends "boolean"
    ? KeysOf<T, boolean>
    : never;

/**
 * Builder interface used inside {@link schemaFactory} callbacks
 * to declaratively define a Model's schema.
 *
 * @typeParam T - The Model interface the schema describes.
 *
 * @example
 * ```ts
 * schemaFactory<MyModel>(schema => {
 *   schema.addProperty("string", "name");
 *   schema.setRequired("name");
 *   schema.setEncrypted("name");
 *   schema.setVersion(1);
 * });
 * ```
 */
export interface SchemaGenerator<T> {
    /** Register a property with a RIDB field type. */
    addProperty<P extends PropertyTypes>(type: P, key: KeysFor<T, P>, opts?: any): void;
    addProperty(type: PropertyTypes, key: string, opts?: any): void;
    /** Mark one or more properties as encrypted-at-rest. */
    setEncrypted<K extends StringKeys<T>>(...keys: K[]): K[];
    /** Mark one or more properties as required. */
    setRequired(...keys: StringKeys<T>[]): void;
    /** Set the schema version (used for migrations). */
    setVersion(version: number): void;
}