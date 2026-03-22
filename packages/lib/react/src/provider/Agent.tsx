import React, { useCallback, useState } from "react";
import { Domain, Agent, Castor } from "@hyperledger/identus-sdk";

import { AgentContext } from "../context";
import { useApollo, useDatabase } from "../hooks";
import { createResolver } from "../resolver";
import { MessagesProvider } from "./Messages";
import { ConnectionsProvider } from "./Connections";
import { CredentialsProvider } from "./Credentials";
import { PeerDIDProvider, PrismDIDProvider } from "./DID";
import { IssuerProvider } from "./Issuer";
import { HolderProvider } from "./HolderProvider";
import { VerifierProvider } from "./VerifierProvider";
import { hasDB } from "../utils";
import { DatabaseProvider } from "./Database";

function WrappedAgentProvider({ children }: { children: React.ReactNode }) {
    const apollo = useApollo();
    const { pluto } = useDatabase();
    const [agent, setAgent] = useState<Agent | null>(null);
    const [state, setState] = useState(Domain.Startable.State.STOPPED);

    const getSeed = useCallback(async () => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const seeds = await pluto.store.query("settings", { selector: { key: 'seed' } });
        if (seeds.length) {
            return {
                value: Uint8Array.from(
                    Buffer.from(seeds[0].value, 'hex')
                )
            }
        }
        return null
    }, [pluto]);

    const getSettingsByKey = useCallback(async (key: string) => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const keys = await pluto.store.query("settings", { selector: { key } });
        if (keys.length) {
            return keys[0].value;
        }
        return null;
    }, [pluto]);

    const getMediator = useCallback(async () => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        const mediatorStr = await getSettingsByKey("mediator");
        if (mediatorStr) {
            return Domain.DID.fromString(mediatorStr)
        } else if (process.env.MEDIATOR_DID !== undefined) {
            return Domain.DID.fromString(process.env.MEDIATOR_DID);
        } else if (process.env.NEXT_PUBLIC_MEDIATOR_DID !== undefined) {
            return Domain.DID.fromString(process.env.NEXT_PUBLIC_MEDIATOR_DID);
        }
        return null;
    }, [getSettingsByKey, pluto]);

    const getResolverUrl = useCallback(async () => {
        if (!hasDB(pluto)) {
            throw new Error("Database not connected");
        }
        return await getSettingsByKey("prism-resolver-url");
    }, [getSettingsByKey, pluto]);

    const stop = useCallback(async () => {
        setState(Domain.Startable.State.STOPPING);
        try {
            await agent?.connections.stop();
            agent?.jobs.stop();
            setState(Domain.Startable.State.STOPPED);
        } catch (error) {
            console.log("Error stopping agent:", error);
        } finally {
            setAgent(null);
        }
    }, [agent, setState, setAgent]);

    const start = useCallback(async () => {
        setState(Domain.Startable.State.STARTING);
        const seed = await getSeed();
        if (!seed) {
            throw new Error("Seed not found");
        }
        if (!hasDB(pluto)) {
            throw new Error("Database not initialized");
        }
        const resolverUrl = await getResolverUrl();
        const resolvers = resolverUrl ? [createResolver(resolverUrl)] : [];
        const mediatorDID = await getMediator();
        if (!mediatorDID) {
            throw new Error("Mediator not found");
        }
        const castor = new Castor(apollo, resolvers);
        const agent = Agent.initialize({
            apollo,
            castor,
            mediatorDID,
            pluto: pluto,
            seed
        });
        await agent.start()
        setState(Domain.Startable.State.RUNNING);
        setAgent(agent);
    }, [pluto]);
    return <AgentContext.Provider value={{ agent, setAgent, start, stop, state }}>
        <CredentialsProvider>

            <MessagesProvider>
                <ConnectionsProvider>
                    <PeerDIDProvider>
                        <PrismDIDProvider>
                            <IssuerProvider>
                                <HolderProvider>
                                    <VerifierProvider>
                                        {children}
                                    </VerifierProvider>
                                </HolderProvider>
                            </IssuerProvider>
                        </PrismDIDProvider>
                    </PeerDIDProvider>

                </ConnectionsProvider>
            </MessagesProvider>
        </CredentialsProvider>
    </AgentContext.Provider>
}

/**
 * Provides the initialized `Agent` instance and its lifecycle management to the React tree.
 * 
 * It automatically wraps the entire application with nested providers for capabilities like
 * `CredentialsProvider`, `ConnectionsProvider`, `PrismDIDProvider`, etc.
 *
 * @example
 * ```tsx
 * import { AgentProvider, useAgent } from '@hyperledger/identus-react';
 * 
 * function App() {
 *   return (
 *     <AgentProvider>
 *       <AgentControls />
 *     </AgentProvider>
 *   );
 * }
 * 
 * function AgentControls() {
 *   const { agent, start, stop, state } = useAgent();
 *   
 *   return (
 *     <div>
 *       <p>Agent Status: {state}</p>
 *       <button onClick={() => start()}>Start Agent</button>
 *     </div>
 *   );
 * }
 * ```
 */
export function AgentProvider({ children }: { children: React.ReactNode }) {
    return <DatabaseProvider>
        <WrappedAgentProvider >
            {children}
        </WrappedAgentProvider>
    </DatabaseProvider>
}

