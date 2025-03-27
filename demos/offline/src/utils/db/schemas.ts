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
    version: 0;
} {
    const { properties: schemaProperties, ...schemaWithoutProperties } = schema;
    const props = {
        ...schemaProperties,
        ...properties
    };

    return {
        ...schemaWithoutProperties,
        version: 0 as const,
        properties: Object.fromEntries(
            Object.entries(props).map(([key, value]) => {
                const propValue: any = { ...value };
                // Ensure required is explicitly set
                if (propValue.required === undefined || propValue.required === false) {
                    propValue.required = false;
                } else {
                    propValue.required = true;
                }
                propValue.maxLength = undefined;
                return [key, propValue];
            })
        ) as T['properties'] & P
    };
}

function extractSchemas<T extends Record<string, { schema: CollectionSchema }>>(collections: T) {
    const result = {} as {
        [K in keyof T]: Omit<T[K]['schema'], 'version'> & { version: 0 }
    };

    for (const key in collections) {
        if (Object.prototype.hasOwnProperty.call(collections, key)) {
            (result as any)[key] = migrateSchema(collections[key].schema, {});
        }
    }

    return result;
}

export const schemas = {
    ...extractSchemas(collections),
    credentials: migrateSchema(collections.credentials.schema, {
        status: {
            type: SchemaFieldType.string,
            required: false
        }
    }),
    dids: migrateSchema(collections.dids.schema, {
        status: {
            type: SchemaFieldType.string,
            required: false
        }
    }),
    messages: migrateSchema(collections.messages.schema, {
        read: {
            type: SchemaFieldType.boolean,
            default: false,
            required: true
        }
    }),
    settings: {
        version: 0 as const,
        primaryKey: 'id',
        type: SchemaFieldType.object,
        encrypted: ['value'],
        properties: {
            id: {
                type: SchemaFieldType.string,
                required: true
            },
            key: {
                type: SchemaFieldType.string,
                required: true
            },
            value: {
                type: SchemaFieldType.string,
                required: true
            }
        }
    },
    issuance: {
        version: 0 as const,
        primaryKey: 'did',
        type: SchemaFieldType.object,
        encrypted: ['dataJson'],
        properties: {
            id: {
                type: SchemaFieldType.string,
                required: true
            },
            claims: {
                type: SchemaFieldType.array,
                required: false,
                items: {
                    type: SchemaFieldType.object,
                    properties: {
                        name: {
                            type: SchemaFieldType.string,
                            required: true
                        },
                        value: {
                            type: SchemaFieldType.string,
                            required: true
                        },
                        type: {
                            type: SchemaFieldType.string,
                            required: true
                        },
                    }
                }
            },
            credentialFormat: {
                type: SchemaFieldType.string,
                required: true
            },
            automaticIssuance: {
                type: SchemaFieldType.boolean,
                required: false
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