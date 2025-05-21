import * as Models from "../models";
import type { MigrationStrategies } from "../types";
import type { SchemaType } from '@trust0/ridb-core';

type CollectionCreate = {
  schema: SchemaType;
  migrationStrategies?:
  | MigrationStrategies;
};

type MakeCollections = (additional?: CollectionList) => CollectionList;

export type CollectionList = Record<string, CollectionCreate>;

export const makeCollections: MakeCollections = (
  additional: CollectionList = {}
) => {
  return {
    credentials: { schema: Models.CredentialSchema, migrationStrategies: Models.CredentialMigration },
    "credential-metadata": { schema: Models.CredentialMetadataSchema },
    "didkey-link": { schema: Models.DIDKeyLinkSchema },
    "did-link": { schema: Models.DIDLinkSchema },
    dids: { schema: Models.DIDSchema },
    keys: { schema: Models.KeySchema },
    messages: { schema: Models.MessageSchema },
    ...additional,
  }
}
