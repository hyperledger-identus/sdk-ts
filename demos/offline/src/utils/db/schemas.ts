import SDK from '@hyperledger/identus-sdk';

const collections = SDK.makeCollections();

function migrateSchema(base: any, properties?: any) {
  return {
    schema: {
      ...base,
      properties: {
        ...base.properties,
        ...(properties ?? {})
      }
    }
  };
}

export const schemas = {
  credentials: migrateSchema(collections.credentials.schema, {
    status: {
      type: "string",
      required: false
    }
  }),
  dids: migrateSchema(collections.dids.schema, {
    status: {
      type: "string",
      required: false
    }
  }),
  messages: migrateSchema(collections.messages.schema, {
    read: {
      type: "boolean",
      default: false,
      required: true
    }
  }),
  settings: migrateSchema({
    version: 0 as const,
    primaryKey: 'uuid',
    type: "object",
    encrypted: ['value'],
    properties: {
      uuid: {
        type: "string",
        required: true
      },
      key: {
        type: "string",
        required: true
      },
      value: {
        type: "string",
        required: true
      }
    }
  }),
  issuance: migrateSchema({
    version: 0 as const,
    primaryKey: 'uuid',
    type: "object",
    encrypted: ['dataJson'],
    properties: {
      uuid: {
        type: "string",
        required: true
      },
      claims: {
        type: "array",
        required: false,
        items: {
          type: "object",
          properties: {
            name: {
              type: "string",
              required: true
            },
            value: {
              type: "string",
              required: true
            },
            type: {
              type: "string",
              required: true
            },
          }
        }
      },
      credentialFormat: {
        type: "string",
        required: true
      },
      automaticIssuance: {
        type: "boolean",
        required: false
      },
      issuingDID: {
        type: "string",
        required: true
      },
      status: {
        type: "string",
        required: true
      }
    }
  }),
};
