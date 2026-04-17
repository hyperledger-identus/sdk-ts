import { type MigrationPathsForSchema } from "@trust0/ridb-core";
import type { Model } from "../types";
import { schemaFactory } from "../utils";
import { KeyProperties } from "@hyperledger/identus-domain";

/**
 * Definition for Key model
 * Represents {@link Domain.PrivateKey PrivateKey}
 * 
 * @typedef {Object} KeyModel
 * @see Domain.Key
 * @see Domain.StorableKey
 */
export interface Key extends Model {
  recoveryId: string;
  /**
   * All recorded key properties in a JSON string
   */
  data: string;
  /**
   * Optional alias for searching
   */
  alias?: string;
  /**
   * Optional index to search by keyIndex
   */
  index?: number;
}

export const KeySchema = schemaFactory<Key>(schema => {
  schema.addProperty("string", "recoveryId");
  schema.addProperty("string", "alias");
  schema.addProperty("number", "index");
  schema.addProperty("string", "data");

  schema.setEncrypted("data");
  schema.setRequired("recoveryId", "data");
  schema.setVersion(1);
});


export const KeyMigration: MigrationPathsForSchema<typeof KeySchema> = {
  1: function (document) {
    const legacy = document as Record<string, unknown> & { rawHex?: string };
    const data: Record<string, string> = {};

    if (typeof legacy.rawHex === "string") {
      data[KeyProperties.rawKey] = legacy.rawHex;
    }

    for (const prop of Object.values(KeyProperties)) {
      const value = legacy[prop];
      if (typeof value === "string") {
        data[prop] = value;
      } else if (typeof value === "number") {
        data[prop] = String(value);
      }
    }

    const { rawHex: _rawHex, ...rest } = legacy;
    return {
      ...rest,
      data: JSON.stringify(data),
    } as unknown as ReturnType<NonNullable<MigrationPathsForSchema<typeof KeySchema>[1]>>;
  }
};
