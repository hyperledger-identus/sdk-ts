import SDK from "@hyperledger/identus-sdk";
import { useContext, useMemo } from "react";
import { AgentContext, CredentialsContext, MessagesContext, IssuerContext, HolderContext, VerifierContext } from "../context";

export function useApollo() {
    const apollo = useMemo(() => new SDK.Apollo(), []);
    return apollo;
}

export type ExtraResolver = new (apollo: SDK.Domain.Apollo) => SDK.Domain.DIDResolver;
export function useCastor(resolvers: ExtraResolver[] = []) {
    const apollo = useApollo();
    const castor = useMemo(() => new SDK.Castor(apollo, resolvers), [apollo, resolvers]);
    return castor;
}

export function useAgent() {
    const context = useContext(AgentContext);
    if (!context) {
        throw new Error('useAgent must be used within a AgentProvider');
    }
    return context;
}

export function useIssuer() {
    const context = useContext(IssuerContext);
    if (!context) {
        throw new Error('useIssuer must be used within a IssuerProvider');
    }
    return context;
}

export function useHolder() {
    const context = useContext(HolderContext);
    if (!context) {
        throw new Error('useHolder must be used within a HolderProvider');
    }
    return context;
}

export function useVerifier() {
    const context = useContext(VerifierContext);
    if (!context) {
        throw new Error('useVerifier must be used within a VerifierProvider');
    }
    return context;
}

export function useMessages() {
    const context = useContext(MessagesContext);
    if (!context) {
        throw new Error('useMessages must be used within a MessagesProvider');
    }
    return context;
}

export function useCredentials() {
    const context = useContext(CredentialsContext);
    if (!context) {
        throw new Error('useCredentials must be used within a CredentialsProvider');
    }
    return context;
}
