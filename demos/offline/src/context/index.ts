import { createContext } from "react";
import SDK from "@hyperledger/identus-sdk";

import { DatabaseState, GroupedDIDs } from "@/utils/types";
import { RIDB, StartOptions } from "@trust0/ridb";
import { schemas } from "@/utils/db/schemas";
import { Doc } from "@trust0/ridb-core";

export type Theme = 'dark' | 'light';
export type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export const PrismDIDContext = createContext<{
    did: SDK.Domain.DID | null;
    setDID: (did: string) => void;
} | undefined>(undefined);

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const AgentContext = createContext<{
    agent: SDK.Agent | null;
    setAgent: (agent: SDK.Agent) => void;
    start: () => Promise<void>;
    stop: () => Promise<void>;
    readMessage: (message: SDK.Domain.Message) => Promise<void>;

    deleteMessage: (message: SDK.Domain.Message) => Promise<void>;
    //TODO: move this to a task in the Agent
    processRequestCredentialMessage(
        message: SDK.RequestCredential
    ): Promise<SDK.IssueCredential>

    messages: { message: SDK.Domain.Message, read: boolean }[];
    connections: SDK.Domain.DIDPair[];
    credentials: SDK.Domain.Credential[];
    state: SDK.Domain.Startable.State;
    peerDID: SDK.Domain.DID | null;
} | undefined>(undefined);

export const DatabaseContext = createContext<{
    db: RIDB<typeof schemas>;
    state: DatabaseState;
    error: Error | null;
    features: string[];
    wallet: string | null;
    pluto: SDK.Domain.Pluto;
    authRedirect: () => void,
    start: (options: StartOptions<typeof schemas>) => Promise<void>;
    getMessages: () => Promise<{ message: SDK.Domain.Message, read: boolean }[]>;
    readMessage: (message: SDK.Domain.Message) => Promise<void>;
    deleteMessage: (message: SDK.Domain.Message) => Promise<void>;
    getExtendedDIDs: () => Promise<{ did: SDK.Domain.DID, status: string, alias?: string, keys: SDK.Domain.PrivateKey[] }[]>;
    storeDID: (did: SDK.Domain.DID, keys: SDK.Domain.PrivateKey[], alias: string) => Promise<void>;
    updateDIDStatus: (did: SDK.Domain.DID, status: string) => Promise<void>;
    getIssuanceFlows: () => Promise<Doc<typeof schemas["issuance"]>[]>;
    getIssuanceFlow: (id: string) => Promise<Doc<typeof schemas["issuance"]> | null>;
    createIssuanceFlow: (issuanceFlow: Doc<typeof schemas["issuance"]>) => Promise<void>;
    updateIssuanceFlow: (issuanceFlow: Doc<typeof schemas["issuance"]>) => Promise<void>;
    deleteIssuanceFlow: (id: string) => Promise<void>;
    getSettingsByKey: (key: string) => Promise<string | null>;
    storeSettingsByKey: (key: string, value: string) => Promise<void>;
    deleteSettingsByKey: (key: string) => Promise<void>;
    getGroupedDIDs: () => Promise<GroupedDIDs>,
    getFeatures: () => Promise<void>;
    getMediator: () => Promise<SDK.Domain.DID | null>;
    getSeed: () => Promise<SDK.Domain.Seed | null>;
    getWallet: () => Promise<string | null>;
    getResolverUrl: () => Promise<string | null>;
    setMediator: (mediator: SDK.Domain.DID | null) => Promise<void>;
    setSeed: (seed: SDK.Domain.Seed) => Promise<SDK.Domain.Seed>;
    setWallet: (wallet: string | null) => Promise<void>;
    setResolverUrl: (resolverUrl: string | null) => Promise<void>;
} | undefined>(undefined);