import { type Apollo, type makeCollections } from "@hyperledger/identus-sdk";

export type MakeCollections = ReturnType<typeof makeCollections>

export type Collections = {
    [key in keyof MakeCollections]: MakeCollections[key]
};

export type CollectionSchemas = {
    [key in keyof Collections]: {
        version: Collections[key]['schema']['version'];
        primaryKey: Collections[key]['schema']['primaryKey'];
        type: Collections[key]['schema']['type'];
        encrypted: Collections[key]['schema']['encrypted'];
        properties: Collections[key]['schema']['properties'];
    };
}

export type CollectionSchema = CollectionSchemas[keyof CollectionSchemas];

export type CreateInstanceArgs = {
    apollo?: Apollo;
    name?: string;
    collections?: any;
}
