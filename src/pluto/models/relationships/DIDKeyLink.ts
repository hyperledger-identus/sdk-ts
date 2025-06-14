import type { Model } from "../Model";

/**
 * Definition for DID -> Key relationships
 * 
 * @typedef {Object} DIDKeyLink
 */
export interface DIDKeyLink extends Model {
  /**
   * UUID of DID
   */
  didId: string;
  /**
   * UUID of Key
   */
  keyId: string;
  /**
   * Optional name for the relationship
   */
  alias?: string;
}

// export const DIDKeyLinkSchema = schemaFactory<DIDKeyLink>(schema => {
//   schema.setRequired("didId", "keyId");
//   schema.addProperty("string", "didId");
//   schema.addProperty("string", "keyId");
//   schema.addProperty("string", "alias");
// });



export const DIDKeyLinkSchema = {
  version: 0 as const,
  primaryKey: 'uuid',
  type: "object",
  properties: {
    uuid: {
      type: "string" as const,
      required: true as const
    },
    didId: {
      type: "string" as const,
      required: true as const
    },
    keyId: {
      type: "string" as const,
      required: true as const
    },
    alias: {
      type: "string" as const,
      default: ''
    }
  }
} 