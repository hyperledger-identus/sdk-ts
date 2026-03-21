/**
 * Default store factory built on top of `@trust0/ridb`.
 *
 * Calling {@link createStore} produces a fully-functional {@link Pluto.Store}
 * backed by RIDB with encrypted collections, schema migrations, and
 * pluggable storage backends.
 *
 * @module Pluto/Store
 */
import { type StorageType } from '@trust0/ridb';
import { type BaseStorage } from '@trust0/ridb-core';
import { type Pluto } from '../Pluto';
import { type Query } from '../types';
import { type StartOptions, type TableName, type CollectionMap, type CollectionSchemas } from '../types';

/**
 * Create a default {@link Pluto.Store} backed by RIDB.
 *
 * The returned store registers all built-in collection schemas and
 * migrations, and can optionally be encrypted or use a custom
 * storage backend.
 *
 * @param dbName  - Logical database name (e.g. `"identus-pluto"`).
 * @param options - Control how the database is initialised.
 *   - Pass {@link WithOptions} to configure encryption or a custom `storageType`.
 *   - Pass {@link WithStart} to take full control of the startup sequence.
 *
 * @returns A `Pluto.Store` instance ready to be passed to {@link Pluto.create}.
 *
 * @example
 * Create a store with default settings
 * ```ts
 * import { createStore, Pluto } from "@hyperledger/identus-sdk";
 *
 * const store = await createStore("my-db");
 * const pluto = await Pluto.create({ store, keyRestoration: apollo });
 * ```
 *
 * @example
 * Create an encrypted store
 * ```ts
 * const store = await createStore("my-db", { password: "super-secret" });
 * ```
 */
export const createStore = async (dbName: string, options: StartOptions = {}): Promise<Pluto.Store> => {
    const Models = await import("../models");
    const { WasmInternal, RIDB: DB } = await import('@trust0/ridb');
    await WasmInternal()

    const db = new DB({
        dbName,
        schemas: {
            credentials: Models.CredentialSchema,
            "credential-metadata": Models.CredentialMetadataSchema,
            dids: Models.DIDSchema,
            keys: Models.KeySchema,
            messages: Models.MessageSchema,
            "didkey-link": Models.DIDKeyLinkSchema,
            "did-link": Models.DIDLinkSchema,
            settings: Models.SettingsSchema,
            issuance: Models.IssuanceSchema,
        },
        migrations: {
            credentials: Models.CredentialMigration,
            "credential-metadata": {},
            dids: {},
            keys: {},
            messages: Models.MessageMigration,
            "didkey-link": {},
            "did-link": {},
            settings: {},
            issuance: {},
        }
    });

    function isCollection(collectionName: string): boolean {
        return collectionName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() in db.collections;
    }

    const parseName = <K extends TableName>(collectionName: K): K => {
        if (!isCollection(collectionName as string)) {
            throw new Error(`Collection ${String(collectionName)} does not exist`)
        }
        return collectionName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() as K;
    }

    return {
        async query<K extends TableName>(table: K, query?: Query<CollectionSchemas[K]>): Promise<CollectionMap[K][]> {
            const name = parseName(table);
            const collection = db.collections[name];
            const ridbQuery = query?.selector ?? {};
            return collection.find(ridbQuery as Parameters<typeof collection.find>[0]) as unknown as Promise<CollectionMap[K][]>;
        },
        async insert<K extends TableName>(table: K, model: CollectionMap[K]): Promise<void> {
            const name = parseName(table);
            const collection = db.collections[name];
            await collection.create(model as unknown as Parameters<typeof collection.create>[0]);
        },
        async update<K extends TableName>(table: K, model: CollectionMap[K]): Promise<void> {
            const name = parseName(table);
            const collection = db.collections[name];
            await collection.update(model as unknown as Parameters<typeof collection.update>[0]);
        },
        async delete(table: TableName, uuid: string): Promise<void> {
            const name = parseName(table);
            const collection = db.collections[name];
            await collection.delete(uuid);
        },
        async start() {
            if (!db.started) {
                const hasCustomStart = 'start' in options;
                if (hasCustomStart) {
                    return options.start()
                }
                const startOptions: { password?: string; storageType?: typeof BaseStorage | StorageType } = {};
                if ('password' in options && typeof options.password === 'string') {
                    startOptions.password = options.password;
                }
                if ('storageType' in options) {
                    startOptions.storageType = options.storageType;
                }
                if (Object.keys(startOptions).length > 0) {
                    return db.start(startOptions)
                }
                return db.start()
            }
        },
        async stop() {
            await db.close()
        }
    };
}
