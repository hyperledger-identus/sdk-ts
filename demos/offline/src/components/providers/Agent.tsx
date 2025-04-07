import { useCallback, useContext, useEffect, useState } from "react";
import SDK from "@hyperledger/identus-sdk";
import { useRouter } from "next/router";

import { AgentContext, DatabaseContext } from "@/context";
import { ResolverClass, createResolver } from "@/utils/resolvers";

export function AgentProvider({ children }: { children: React.ReactNode }) {
    const databaseContext = useContext(DatabaseContext);
    if (!databaseContext) {
        throw new Error('AgentProvider must be used within a DatabaseProvider');
    }

    const { db, getMediator, getSeed, getResolverUrl, state: dbState } = databaseContext;
    const [agent, setAgent] = useState<SDK.Agent | null>(null);
    const [state, setState] = useState<SDK.Domain.Startable.State>(SDK.Domain.Startable.State.STOPPED);
    const router = useRouter();

    const [messages, setMessages] = useState<{ message: SDK.Domain.Message, read: boolean }[]>([]);
    const [connections, setConnections] = useState<SDK.Domain.DIDPair[]>([]);
    const [credentials, setCredentials] = useState<SDK.Domain.Credential[]>([]);
    const [peerDID, setPeerDID] = useState<SDK.Domain.DID | null>(null);
    const currentState = agent?.state || SDK.Domain.Startable.State.STOPPED;

    const start = useCallback(async () => {
        if (!db) {
            throw new Error("No db found");
        }
        if (db.state !== "loaded") {
            await db.start();
        }
        const seed = await getSeed();
        if (!seed) {
            throw new Error("No seed found");
        }
        setState(SDK.Domain.Startable.State.STARTING);
        const apollo = new SDK.Apollo();
        const mediatorDID = await getMediator() ?? undefined;
        const resolverUrl = await getResolverUrl();
        const resolvers: ResolverClass[] = [];
        if (resolverUrl) {
            resolvers.push(createResolver(resolverUrl))
        }
        const castor = new SDK.Castor(apollo, resolvers);
        const agent = await SDK.Agent.initialize({
            apollo,
            castor,
            mediatorDID,
            pluto: db.pluto,
            seed,
        });
        await agent.start()
        const peerDID = await agent.createNewPeerDID([], true);
        setPeerDID(peerDID);
        setAgent(agent);
    }, [db, getSeed, getMediator, getResolverUrl, setState, setPeerDID, setAgent]);

    const stop = useCallback(async () => {
        setState(SDK.Domain.Startable.State.STOPPING);
        await agent?.stop();
        setAgent(null);
        if (db?.state === 'disconnected') {
            router.replace("/app/auth");
        }
    }, [agent, db, router, setState, setAgent]);

    const readMessage = useCallback(async (message: SDK.Domain.Message) => {
        if (!db) {
            throw new Error("No db found");
        }
        await db.readMessage(message);
        setMessages((prev) => prev.map((m) => m.message.id === message.id ? { ...m, read: true } : m));
    }, [db, setMessages]);

    useEffect(() => {
        setState(currentState);
    }, [currentState])

    const onMessage = useCallback((messages: SDK.Domain.Message[]) => {
        setMessages((prev) => {
            const newMessages = messages.filter(
                (message) => !prev.some((m) => m.message.id === message.id)
            );
            return [...prev, ...newMessages.map((message) => ({ message, read: false }))];
        });
    }, [setMessages]);

    const onConnection = useCallback((connections: SDK.Domain.DIDPair) => {
        setConnections((prev) => {
            if (prev.some((c) =>
                c.host.toString() === connections.host.toString() &&
                c.receiver.toString() === connections.receiver.toString()
            )) {
                return prev;
            }
            return [...prev, connections];
        });
    }, [setConnections]);

    const onRevokeCredential = useCallback((credential: SDK.Domain.Credential) => {
        setCredentials((prev) => {
            if (prev.some((c) => c.id === credential.id)) {
                return prev;
            }
            return [...prev, credential];
        });
    }, [setCredentials]);

    useEffect(() => {
        if (agent) {
            agent.addListener(SDK.ListenerKey.MESSAGE, onMessage);
            agent.addListener(SDK.ListenerKey.CONNECTION, onConnection);
            agent.addListener(SDK.ListenerKey.REVOKE, onRevokeCredential);
            return () => {
                agent.removeListener(SDK.ListenerKey.MESSAGE, onMessage);
                agent.removeListener(SDK.ListenerKey.CONNECTION, onConnection);
                agent.removeListener(SDK.ListenerKey.REVOKE, onRevokeCredential);
            };
        }
    }, [agent, onMessage, onConnection, onRevokeCredential])

    const preloadData = useCallback(async () => {
        if (db && dbState === 'loaded') {
            const messages = await db.getMessages();
            const connections = await db.pluto.getAllDidPairs();
            const credentials = await db.pluto.getAllCredentials();
            setMessages((prev) => {
                const newMessages = messages.filter(
                    (message) => !prev.some((m) => m.message.id === message.message.id)
                );
                return [...prev, ...newMessages];
            });
            setConnections((prev) => {
                const newConnections = connections.filter(
                    (connection) => !prev.some((c) =>
                        c.host.toString() === connection.host.toString() &&
                        c.receiver.toString() === connection.receiver.toString()
                    )
                );
                return [...prev, ...newConnections];
            });
            setCredentials((prev) => {
                const newCredentials = credentials.filter(
                    (credential) => !prev.some((c) => c.id === credential.id)
                );
                return [...prev, ...newCredentials];
            });
        }
    }, [db, dbState, setMessages, setConnections, setCredentials]);

    useEffect(() => {
        preloadData().catch(console.log);
    }, [dbState, db, preloadData])

    return <AgentContext.Provider value={{ agent, connections, credentials, setAgent, start, stop, state, messages, readMessage, peerDID }}> {children} </AgentContext.Provider>
}
