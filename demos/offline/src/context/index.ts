import { createContext } from "react";
import SDK from "@hyperledger/identus-sdk";

import { PlutoExtended } from "@/utils/db";
import { DatabaseState } from "@/utils/types";

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
    messages: { message: SDK.Domain.Message, read: boolean }[];
    connections: SDK.Domain.DIDPair[];
    credentials: SDK.Domain.Credential[];
    state: SDK.Domain.Startable.State;
    peerDID: SDK.Domain.DID | null;
} | undefined>(undefined);

export const DatabaseContext = createContext<{
    db: PlutoExtended | null;
    state: DatabaseState;
    error: Error | null;
    features: string[];
    setDb: (db: PlutoExtended) => void;
    getFeatures: () => Promise<void>;
    getMediator: () => Promise<SDK.Domain.DID | null>;
    getSeed: () => Promise<SDK.Domain.Seed | null>;
    getWallet: () => Promise<string | null>;
    getResolverUrl: () => Promise<string | null>;
    setMediator: (mediator: SDK.Domain.DID | null) => Promise<void>;
    setSeed: (seed: SDK.Domain.Seed | null) => Promise<void>;
    setWallet: (wallet: string | null) => Promise<void>;
    setResolverUrl: (resolverUrl: string | null) => Promise<void>;
    readMessage: (message: SDK.Domain.Message) => Promise<void>;
} | undefined>(undefined);