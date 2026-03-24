/**
 * Pluto collection definitions.
 *
 * Provides the master list of RIDB collections and their schemas/migrations
 * used by both the default store and the Schema type system.
 *
 * @module Pluto/Collections
 */
import * as Models from "../models";
import type { MigrationPathsForSchema, SchemaType } from '@trust0/ridb-core';

/**
 * Descriptor for a single RIDB collection.
 *
 * @property schema - The typed RIDB {@link SchemaType} for this collection.
 * @property migrationStrategies - Optional version migration functions.
 */
export type CollectionCreate = {
  schema: SchemaType;
  migrationStrategies?: MigrationPathsForSchema<any>;
};

/**
 * A dictionary of additional (user-defined) collections that can be
 * merged into the default set via {@link makeCollections}.
 */
export type CollectionList = Record<string, CollectionCreate>;

/**
 * Build the complete map of Pluto collections.
 *
 * Returns the nine built-in collections (credentials, dids, keys, messages,
 * settings, issuance, and the relationship tables) merged with any
 * user-supplied `additional` collections.
 *
 * @param additional - Extra collections to register alongside the defaults.
 * @returns A record of collection name → `{ schema, migrationStrategies? }`.
 */
export const makeCollections = (additional: CollectionList = {}) => {
  return {
    credentials: { schema: Models.CredentialSchema, migrationStrategies: Models.CredentialMigration },
    "credential-metadata": { schema: Models.CredentialMetadataSchema },
    "didkey-link": { schema: Models.DIDKeyLinkSchema },
    "did-link": { schema: Models.DIDLinkSchema },
    dids: { schema: Models.DIDSchema },
    keys: { schema: Models.KeySchema },
    messages: { schema: Models.MessageSchema, migrationStrategies: Models.MessageMigration },
    settings: { schema: Models.SettingsSchema },
    issuance: { schema: Models.IssuanceSchema },
    ...additional,
  }
}
