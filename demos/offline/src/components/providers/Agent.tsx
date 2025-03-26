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
    const [messages, setMessages] = useState<{ message: SDK.Domain.Message, read: boolean }[]>([]);
    const router = useRouter();

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
            agent.addListener(SDK.ListenerKey.MESSAGE, onMessage);
            return () => agent.removeListener(SDK.ListenerKey.MESSAGE, onMessage);
        }
    }, [agent])

    useEffect(() => {
        if (db && dbState === 'loaded') {
            db.getMessages().then((messages) => {
                setMessages((prev) => {
                    const newMessages = messages.filter(
                        (message) => !prev.some((m) => m.message.id === message.message.id)
                    );
                    return [...prev, ...newMessages];
                });
            }).catch((error) => {
                console.log(error);
            });
        }
    }, [dbState, db])

    return <AgentContext.Provider value={{ agent, setAgent, start, stop, state, messages, readMessage }}> {children} </AgentContext.Provider>
}
