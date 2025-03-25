import { Property, SchemaFieldType } from "@trust0/ridb";

import SDK from '@hyperledger/identus-sdk';

const collections = SDK.makeCollections();

type Collections = {
    [key in keyof typeof collections]: typeof collections[key]
};
type CollectionSchemas = {
    [key in keyof Collections]: {
        version: Collections[key]['schema']['version'];
        primaryKey: Collections[key]['schema']['primaryKey'];
        type: Collections[key]['schema']['type'];
        encrypted: Collections[key]['schema']['encrypted'];
        properties: Collections[key]['schema']['properties'];
    };
}
type CollectionSchema = CollectionSchemas[keyof CollectionSchemas];

function migrateSchema<
    T extends CollectionSchema,
    P extends Record<string, Property>
>(schema: T, properties: P): Omit<T, 'properties'> & {
    properties: T['properties'] & P;
} {
    const { properties: schemaProperties, ...schemaWithoutProperties } = schema;
    const props = {
        ...schemaProperties,
        ...properties
    }
    return {
        ...schemaWithoutProperties,
        version: 0 as const,
        properties: Object.keys(props).reduce((all, item) => {
            (all as any)[item] = {
                type: props[item].type,
            }
            if (props[item].required === undefined || props[item].required === false) {
                (all as any)[item].required = false;
            } else {
                (all as any)[item].required = true;
            }
            return all
        }, props)
    };
}
function extractSchemas<T extends Record<string, { schema: any }>>(collections: T) {
    const result = {} as {
        [K in keyof T]: T[K]['schema'] & { version: 0 }
    };
    for (const key in collections) {
        if (Object.prototype.hasOwnProperty.call(collections, key)) {
            result[key] = migrateSchema(collections[key].schema, {}) as any;
        }
    }
    return result;
}


export const schemas = {
    ...extractSchemas(collections),
    credentials: migrateSchema(collections.credentials.schema, {
        status: { type: SchemaFieldType.string }
    }),
    dids: migrateSchema(collections.dids.schema, {
        status: { type: SchemaFieldType.string }
    }),
    messages: migrateSchema(collections.messages.schema, {
        read: { type: SchemaFieldType.boolean, default: false }
    }),
    settings: {
        version: 0 as const,
        primaryKey: 'id',
        type: SchemaFieldType.object,
        encrypted: ['value'],
        properties: {
            id: { type: SchemaFieldType.string },
            key: {
                type: SchemaFieldType.string
            },
            value: {
                type: SchemaFieldType.string
            }
        }
    },
    issuance: {
        version: 0 as const,
        primaryKey: 'did',
        type: SchemaFieldType.object,
        encrypted: ['dataJson'],
        properties: {
            id: { type: SchemaFieldType.string },
            claims: {
                type: SchemaFieldType.array,
                items: {
                    type: SchemaFieldType.object,
                    properties: {
                        name: { type: SchemaFieldType.string },
                        value: { type: SchemaFieldType.string },
                        type: { type: SchemaFieldType.string },
                    }
                }
            },
            credentialFormat: {
                type: SchemaFieldType.string,
                required: true
            },
            automaticIssuance: {
                type: SchemaFieldType.boolean,
            },
            issuingDID: {
                type: SchemaFieldType.string,
                required: true
            },
            status: {
                type: SchemaFieldType.string,
                required: true
            }
        }
    },
}