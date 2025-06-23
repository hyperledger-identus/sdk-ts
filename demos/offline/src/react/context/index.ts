import SDK from "@hyperledger/identus-sdk";
import { createContext } from "react";
import { StartOptions } from "@trust0/ridb";

import { schemas } from "../db";

export const PrismDIDContext = createContext<{
    did: SDK.Domain.DID | null;
    setDID: (did: string) => void;
} | undefined>(undefined);

export type DatabaseState = 'disconnected' | 'loading' | 'loaded' | 'error';

type AgentContextType = {
    agent: SDK.Agent | null;
    start: (startOptions: StartOptions<typeof schemas>) => Promise<void>;
    stop: () => Promise<void>;
    state: SDK.Domain.Startable.State;
}

export const AgentContext = createContext<(AgentContextType & { setAgent: (agent: SDK.Agent) => void }) | undefined>(undefined);

export const IssuerContext = createContext<AgentContextType & {
    createOOBOffer<T extends SDK.Domain.CredentialType>(
        type: T,
        id: string,
        claims: SDK.Domain.PresentationClaims<T>
    ): Promise<string>;
    issueCredential<T extends SDK.Domain.CredentialType>(
        type: T,
        message: SDK.Domain.Message,
        claims: SDK.Domain.PresentationClaims<T>,
        issuerDID: SDK.Domain.DID,
        holderDID: SDK.Domain.DID,
    ): Promise<void>;
} | undefined>(undefined);

export const VerifierContext = createContext<AgentContextType & {
    issuePresentationRequest<T extends SDK.Domain.CredentialType>(
        type: SDK.Domain.CredentialType,
        toDID: SDK.Domain.DID,
        claims: SDK.Domain.PresentationClaims<T>
    ): Promise<void>;
    verifyPresentation(
        presentation: SDK.Domain.Message,
    ): Promise<boolean>;
} | undefined>(undefined);


export const HolderContext = createContext<AgentContextType & {
    parseOOBOffer(
        offer: string,
        selfPeerDID: SDK.Domain.DID
    ): Promise<SDK.Domain.Message>;
    acceptOOBOffer(
        message: SDK.Domain.Message,
    ): Promise<void>;
    handlePresentationRequest(
        message: SDK.Domain.Message,
        credential: SDK.Domain.Credential,
    ): Promise<void>;
} | undefined>(undefined);

export const MessagesContext = createContext<{
    messages: { message: SDK.Domain.Message, read: boolean }[];
    readMessage: (message: SDK.Domain.Message) => Promise<void>;
    deleteMessage: (message: SDK.Domain.Message) => Promise<void>;
} | undefined>(undefined);

export const CredentialsContext = createContext<{
    credentials: SDK.Domain.Credential[];
    deleteCredential: (credential: SDK.Domain.Credential) => Promise<void>;
} | undefined>(undefined);

export const ConnectionsContext = createContext<{
    connections: SDK.Domain.DIDPair[];
    deleteConnection: (connection: SDK.Domain.DIDPair) => Promise<void>;
} | undefined>(undefined);