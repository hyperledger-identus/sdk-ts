import { SchemaFieldType } from "@trust0/ridb";
import { Property } from "@trust0/ridb-core";
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
        encrypted?: 'encrypted' extends keyof Collections[key]['schema'] ? Collections[key]['schema']['encrypted'] : never;
        properties: Collections[key]['schema']['properties'];
    };
}

type CollectionSchema = CollectionSchemas[keyof CollectionSchemas];

function migrateSchema<
    T extends CollectionSchema,
    P extends Record<string, Property>
>({ properties: schemaProperties, ...schemaWithoutProperties }: T, properties: P) {
    return {
        ...schemaWithoutProperties,
        version: 0 as const,
        encrypted: schemaWithoutProperties.encrypted || [],
        properties: Object.fromEntries(
            Object.entries({
                ...schemaProperties,
                ...properties
            }).map(([key, value]) => {
                const propValue: any = { ...value };
                propValue.required = propValue?.required === true;
                propValue.maxLength = undefined;
                return [key, propValue];
            })
        ) as T['properties'] & P
    }
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

const messages = migrateSchema(collections.messages.schema, {
    read: {
        type: SchemaFieldType.boolean,
        default: false,
        required: true
    },
    uuid: {
        type: SchemaFieldType.string,
        required: true
    },
    id: {
        type: SchemaFieldType.string,
        required: true
    }
})

const didKeyLink = collections['didkey-link'].schema


const keys = migrateSchema(collections['keys'].schema, {
    recoveryId: {
        type: SchemaFieldType.string,
        required: true
    },
    rawHex: {
        type: SchemaFieldType.string,
        required: true
    },
    alias: {
        type: SchemaFieldType.string
    },
    index: {
        type: SchemaFieldType.number
    }
})

export const schemas = {
    ...extractSchemas(collections),
    keys,
    'didkey-link': didKeyLink,
    credentials: migrateSchema(collections.credentials.schema, {
        status: {
            type: SchemaFieldType.string,
            required: false
        },
        validUntil: {
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
    messages,
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
        primaryKey: 'id',
        type: SchemaFieldType.object,
        encrypted: ['claims'],
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