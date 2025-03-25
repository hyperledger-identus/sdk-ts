import { useEffect, useState } from "react";
import SDK from "@hyperledger/identus-sdk";
import { AgentContext } from "@/context";
import { useDatabase } from "@/hooks";
import { ResolverClass, createResolver } from "@/utils/resolvers";

export function AgentProvider({ children }: { children: React.ReactNode }) {
    const [agent, setAgent] = useState<SDK.Agent | null>(null);
    const { db, getMediator, getSeed, getResolverUrl } = useDatabase();
    const [state, setState] = useState<SDK.Domain.Startable.State>(SDK.Domain.Startable.State.STOPPED);
    const [messages, setMessages] = useState<{ message: SDK.Domain.Message, read: boolean }[]>([]);

    async function start() {
        if (!db) {
            throw new Error("No db found");
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
    }

    useEffect(() => {
        const currentState = agent?.state || SDK.Domain.Startable.State.STOPPED;
        setState(currentState);
    }, [agent?.state]);

    useEffect(() => {
        function onMessage(messages: SDK.Domain.Message[]) {
            setMessages((prev) => [...prev, ...messages.map((message) => ({ message, read: false }))]);
        }
        if (state === SDK.Domain.Startable.State.RUNNING) {
            db?.getMessages().then((messages) => {
                setMessages((prev) => [...prev, ...messages]);
            });
        }
        agent?.addListener(SDK.ListenerKey.MESSAGE, onMessage);
        return () => {
            agent?.removeListener(SDK.ListenerKey.MESSAGE, onMessage);
        }
    }, [state])
    return <AgentContext.Provider value={{ agent, setAgent, start, stop, state, messages }}> {children} </AgentContext.Provider>
}
