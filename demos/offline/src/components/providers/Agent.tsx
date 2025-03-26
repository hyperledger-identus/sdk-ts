import { useEffect, useState } from "react";
import SDK from "@hyperledger/identus-sdk";
import { useRouter } from "next/router";

import { AgentContext } from "@/context";
import { ResolverClass, createResolver } from "@/utils/resolvers";
import { useDatabase } from "@/hooks";

export function AgentProvider({ children }: { children: React.ReactNode }) {
    const { db, getMediator, getSeed, getResolverUrl, state: dbState } = useDatabase();
    const [agent, setAgent] = useState<SDK.Agent | null>(null);
    const [state, setState] = useState<SDK.Domain.Startable.State>(SDK.Domain.Startable.State.STOPPED);
    const router = useRouter();

    const [messages, setMessages] = useState<{ message: SDK.Domain.Message, read: boolean }[]>([]);
    const [connections, setConnections] = useState<SDK.Domain.DIDPair[]>([]);
    const [credentials, setCredentials] = useState<SDK.Domain.Credential[]>([]);

    async function start() {
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
        setAgent(agent);
    }

    async function stop() {
        await agent?.stop();
        setAgent(null);
        if (db?.state === 'disconnected') {
            router.replace("/app/auth");
        }
    }

    async function readMessage(message: SDK.Domain.Message) {
        if (!db) {
            throw new Error("No db found");
        }
        await db.readMessage(message);
        setMessages((prev) => prev.map((m) => m.message.id === message.id ? { ...m, read: true } : m));
    }

    useEffect(() => {
        const currentState = agent?.state || SDK.Domain.Startable.State.STOPPED;
        setState(currentState);
    }, [agent?.state]);

    useEffect(() => {
        if (agent) {
            function onMessage(messages: SDK.Domain.Message[]) {
                setMessages((prev) => {
                    const newMessages = messages.filter(
                        (message) => !prev.some((m) => m.message.id === message.id)
                    );
                    return [...prev, ...newMessages.map((message) => ({ message, read: false }))];
                });
            }
            function onConnection(connections: SDK.Domain.DIDPair) {
                setConnections((prev) => {
                    if (prev.some((c) =>
                        c.host.toString() === connections.host.toString() &&
                        c.receiver.toString() === connections.receiver.toString()
                    )) {
                        return prev;
                    }
                    return [...prev, connections];
                });
            }
            function onRevokeCredential(credential: SDK.Domain.Credential) {
                setCredentials((prev) => {
                    if (prev.some((c) => c.id === credential.id)) {
                        return prev;
                    }
                    return [...prev, credential];
                });
            }
            agent.addListener(SDK.ListenerKey.MESSAGE, onMessage);
            agent.addListener(SDK.ListenerKey.CONNECTION, onConnection);
            agent.addListener(SDK.ListenerKey.REVOKE, onRevokeCredential);
            return () => {
                agent.removeListener(SDK.ListenerKey.MESSAGE, onMessage);
                agent.removeListener(SDK.ListenerKey.CONNECTION, onConnection);
                agent.removeListener(SDK.ListenerKey.REVOKE, onRevokeCredential);
            };
        }
    }, [agent])

    useEffect(() => {
        async function preloadData() {
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
        }
        preloadData().catch(console.log);
    }, [dbState, db])

    return <AgentContext.Provider value={{ agent, connections, credentials, setAgent, start, stop, state, messages, readMessage }}> {children} </AgentContext.Provider>
}
