import SDK from "@hyperledger/identus-sdk";
export type DatabaseState = 'disconnected' | 'loading' | 'loaded' | 'error';
export type DIDAlias = {
    did: SDK.Domain.DID;
    alias?: string;
    status: string;
    keys: SDK.Domain.PrivateKey[];
}

export type GroupedDIDs = Record<string, DIDAlias[]>;