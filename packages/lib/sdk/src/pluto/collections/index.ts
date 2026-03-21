import * as Models from "../models";
import type { MigrationPathsForSchema, SchemaType } from '@trust0/ridb-core';

export type CollectionCreate = {
  schema: SchemaType;
  migrationStrategies?: MigrationPathsForSchema<any>;
};


export type CollectionList = Record<string, CollectionCreate>;

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
