import { type MigrationPathsForSchema } from "@trust0/ridb-core";
import type { Model } from "../types";
import { schemaFactory } from "../utils";

/**
 * Definition for Message model
 * Represents {@link Domain.Message Message}
 * 
 * @typedef {Object} Message
 * @see Domain.Message
 */
export interface Message extends Model {
  /**
   * Stringified JSON values
   */
  dataJson: string;

  // searchable properties
  id: string;
  createdTime: number;
  thid?: string;
  piuri: string;
  from?: string;
  to?: string;
  isReceived: number;
  read: boolean;
}

export const MessageSchema = schemaFactory<Message>(schema => {
  schema.setRequired("dataJson", 'id', 'piuri', 'isReceived', 'read');
  schema.addProperty("string", "dataJson");
  schema.addProperty("string", "id");
  schema.addProperty("string", "from");
  schema.addProperty("string", "piuri");
  schema.addProperty("string", "thid");
  schema.addProperty("string", "to");
  schema.addProperty("boolean", "read");
  schema.addProperty("number", "createdTime");
  schema.addProperty("number", "isReceived");
  schema.setEncrypted("dataJson", "thid");

  schema.setVersion(1);
});

export const MessageMigration: MigrationPathsForSchema<typeof MessageSchema> = {
  1: function (document) {
    return {
      ...document,
      read: false
    }
  }
}
